import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";

export type RateSheetRate = {
  id?: string;
  conditions?: string | null;
  created_at?: string;
  lender: string;
  max_ltv?: number | null;
  min_down_payment?: number | null;
  product_type: string;
  province?: string | null;
  rate: number;
  term?: string | null;
  transaction_type: string;
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
  }>) => {
    setIsLoading(true);
    setError(null);
    try {
      let query = supabase
        .from("rate_sheet_rates")
        .select("*")
        .order("rate", { ascending: true });

      if (filters?.province) query = query.eq("province", filters.province);
      if (filters?.transaction_type) query = query.eq("transaction_type", filters.transaction_type);

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
      .upsert({
        id: row.id,
        conditions: row.conditions,
        lender: row.lender,
        max_ltv: row.max_ltv,
        min_down_payment: row.min_down_payment,
        product_type: row.product_type,
        province: row.province,
        rate: row.rate,
        term: row.term,
        transaction_type: row.transaction_type,
      })
      .select("*")
      .single();
    if (error) throw error;
    await fetchRates();
    return data;
  };

  const removeRate = async (id: string) => {
    const { error } = await supabase.from("rate_sheet_rates").delete().eq("id", id);
    if (error) throw error;
    await fetchRates();
  };

  const findMatches = (req: RateMatchRequirements) => {
    const loanAmount = Math.max(0, req.propertyValue - req.downPayment);
    const ltv = req.propertyValue > 0 ? loanAmount / req.propertyValue : 0;

    const filtered = rates.filter((r) => {
      if (req.province && r.province !== req.province && r.province !== "ALL" && r.province !== "All") return false;
      if (r.transaction_type !== req.transactionType) return false;
      if (r.max_ltv != null && ltv > Number(r.max_ltv)) return false;
      if (r.min_down_payment != null && req.downPayment < Number(r.min_down_payment)) return false;

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
