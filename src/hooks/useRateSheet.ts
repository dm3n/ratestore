import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";

export type RateSheetRate = {
  id?: string;
  active: boolean;
  product_type: string; // e.g., 'mortgage', 'heloc'
  transaction_type: "buying" | "renewing" | "refinancing" | "heloc" | string;
  has_insurance: boolean;
  amortization_max_years: number; // default 25
  term_years: number | null; // null for HELOC
  rate_type: "fixed" | "variable" | null;
  rate: number; // decimal e.g., 0.049
  province: string; // e.g., 'ON'
  bracket_type: "ltv" | "down_payment" | string;
  bracket_min: number | null; // decimal 0-1
  bracket_max: number | null; // decimal 0-1
  occupancy: "owner_occupied" | "rental" | string;
  mortgage_size_bracket?: string | null;
  lender?: string | null;
  notes?: string | null;
  created_at?: string;
  updated_at?: string;
};

export type RateMatchRequirements = {
  province?: string;
  transactionType: "buying" | "renewing" | "refinancing" | "heloc";
  hasInsurance: boolean;
  termYears?: number | null; // null for HELOC
  rateType?: "fixed" | "variable" | "any";
  amortizationYears?: number; // desired amortization
  occupancy?: "owner_occupied" | "rental";
  propertyValue: number;
  downPayment: number;
  creditScore?: number; // not used yet
};

export function useRateSheet() {
  const [rates, setRates] = useState<RateSheetRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRates = async (filters?: Partial<{
    province: string;
    transaction_type: string;
    active: boolean;
    rate_type: string;
    has_insurance: boolean;
  }>) => {
    setIsLoading(true);
    setError(null);
    try {
      let query = supabase
        .from("rate_sheet_rates")
        .select("*")
        .order("rate", { ascending: true });

      if (filters?.active !== undefined) query = query.eq("active", filters.active);
      else query = query.eq("active", true);
      if (filters?.province) query = query.eq("province", filters.province);
      if (filters?.transaction_type) query = query.eq("transaction_type", filters.transaction_type);
      if (filters?.rate_type) query = query.eq("rate_type", filters.rate_type);
      if (filters?.has_insurance !== undefined) query = query.eq("has_insurance", filters.has_insurance);

      const { data, error } = await query;
      if (error) throw error;
      setRates((data || []) as any);
      setLastUpdated(new Date());
    } catch (e: any) {
      console.error("Error fetching rate sheet:", e);
      setError(e?.message || "Failed to fetch rates");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const upsertRate = async (row: RateSheetRate) => {
    const { data, error } = await supabase
      .from("rate_sheet_rates")
      .upsert(row)
      .select("*")
      .single();
    if (error) throw error;
    await fetchRates();
    return data as RateSheetRate;
  };

  const removeRate = async (id: string) => {
    const { error } = await supabase.from("rate_sheet_rates").delete().eq("id", id);
    if (error) throw error;
    await fetchRates();
  };

  const findMatches = (req: RateMatchRequirements) => {
    const loanAmount = Math.max(0, req.propertyValue - req.downPayment);
    const ltv = req.propertyValue > 0 ? loanAmount / req.propertyValue : 0;
    const dpct = req.propertyValue > 0 ? req.downPayment / req.propertyValue : 0;

    const filtered = rates.filter((r) => {
      if (!r.active) return false;
      if (req.province && r.province !== req.province && r.province !== "ALL" && r.province !== "All") return false;
      if (r.transaction_type !== req.transactionType) return false;
      if (req.termYears != null && r.term_years != null && r.term_years !== req.termYears) return false;
      if (req.rateType && req.rateType !== "any" && r.rate_type && r.rate_type !== req.rateType) return false;
      if (req.hasInsurance !== undefined && r.has_insurance !== req.hasInsurance) return false;
      if (req.amortizationYears && r.amortization_max_years && r.amortization_max_years < req.amortizationYears) return false;
      if (req.occupancy && r.occupancy && r.occupancy !== req.occupancy) return false;

      // Bracket matching
      if (r.bracket_type === "ltv") {
        if (r.bracket_min != null && ltv < Number(r.bracket_min)) return false;
        if (r.bracket_max != null && ltv > Number(r.bracket_max)) return false;
      } else if (r.bracket_type === "down_payment") {
        if (r.bracket_min != null && dpct < Number(r.bracket_min)) return false;
        if (r.bracket_max != null && dpct > Number(r.bracket_max)) return false;
      }

      return true;
    });

    return filtered.sort((a, b) => Number(a.rate) - Number(b.rate));
  };

  const lowestRate = useMemo(() => {
    if (!rates.length) return null;
    return [...rates].sort((a, b) => Number(a.rate) - Number(b.rate))[0];
  }, [rates]);

  return {
    rates,
    isLoading,
    error,
    lastUpdated,
    fetchRates,
    upsertRate,
    removeRate,
    findMatches,
    lowestRate,
  };
}
