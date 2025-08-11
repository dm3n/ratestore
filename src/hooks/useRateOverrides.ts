import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { GoogleSheetsService } from "@/services/googleSheetsService";

export type RateOverride = {
  id?: string;
  lender: string;
  rate: number; // decimal (e.g., 0.0399)
  term: string; // e.g., "5-yr", "5 year", or "HELOC"
  rateType: "fixed" | "variable";
  transactionType: "buying" | "renewing" | "refinancing";
  hasInsurance: boolean;
  ltvMin: number;
  ltvMax: number;
  minDownPayment?: number | null;
  maxDownPayment?: number | null;
  province: string; // e.g., "ON" or "ALL"
  minCreditScore?: number | null;
  active?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type UserRequirements = {
  term: string;
  transactionType: "buying" | "renewing" | "refinancing";
  hasInsurance: boolean;
  creditScore?: number;
  propertyValue: number;
  downPayment: number;
  province?: string;
};

function toDb(row: RateOverride) {
  return {
    id: row.id,
    lender: row.lender,
    rate: row.rate,
    term: row.term,
    rate_type: row.rateType,
    transaction_type: row.transactionType,
    has_insurance: row.hasInsurance,
    ltv_min: row.ltvMin,
    ltv_max: row.ltvMax,
    min_down_payment: row.minDownPayment ?? null,
    max_down_payment: row.maxDownPayment ?? null,
    province: row.province,
    min_credit_score: row.minCreditScore ?? null,
    active: row.active ?? true,
  };
}

function fromDb(row: any): RateOverride {
  return {
    id: row.id,
    lender: row.lender,
    rate: Number(row.rate),
    term: row.term,
    rateType: row.rate_type,
    transactionType: row.transaction_type,
    hasInsurance: row.has_insurance,
    ltvMin: Number(row.ltv_min),
    ltvMax: Number(row.ltv_max),
    minDownPayment: row.min_down_payment != null ? Number(row.min_down_payment) : null,
    maxDownPayment: row.max_down_payment != null ? Number(row.max_down_payment) : null,
    province: row.province,
    minCreditScore: row.min_credit_score != null ? Number(row.min_credit_score) : null,
    active: row.active,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export function useRateOverrides() {
  const [overrides, setOverrides] = useState<RateOverride[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchOverrides = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from("rate_overrides")
      .select("*")
      .eq("active", true)
      .order("rate", { ascending: true });

    if (error) {
      console.error("Error fetching rate overrides:", error);
      setError(error.message);
    } else {
      setOverrides((data || []).map(fromDb));
      setLastUpdated(new Date());
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOverrides();
  }, []);

  const upsertRate = async (row: RateOverride) => {
    const payload = toDb(row);
    const { data, error } = await supabase
      .from("rate_overrides")
      .upsert(payload)
      .select("*")
      .order("updated_at", { ascending: false });
    if (error) throw error;
    await fetchOverrides();
    return data?.[0] ? fromDb(data[0]) : null;
  };

  const removeRate = async (id: string) => {
    const { error } = await supabase.from("rate_overrides").delete().eq("id", id);
    if (error) throw error;
    await fetchOverrides();
  };

  const findMatches = (requirements: UserRequirements) => {
    // Reuse the matching logic from GoogleSheetsService
    return GoogleSheetsService.findMatchingRates(overrides as any, requirements as any) as RateOverride[];
  };

  const getLowestRate = useMemo(() => {
    if (!overrides.length) return null;
    return overrides.reduce((min, cur) => (cur.rate < min.rate ? cur : min), overrides[0]);
  }, [overrides]);

  return {
    overrides,
    isLoading,
    error,
    lastUpdated,
    refetch: fetchOverrides,
    upsertRate,
    removeRate,
    findMatches,
    getLowestRate,
  };
}
