
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface MortgageRate {
  id: string;
  lender_name: string;
  lender_type: string; // derived: 'bank' or 'lender'
  rate_type: string | null;
  term: string; // e.g., '5-yr'
  base_rate: number; // from rate_sheet_rates.rate
  min_down_payment: number; // derived from bracket (if down_payment)
  max_loan_to_value: number; // derived from bracket (if ltv)
  transaction_types: string[]; // single transaction_type mapped to array
  prime_discount: string | null; // n/a
  is_active: boolean;
  province: string;
  created_at: string;
  updated_at: string;
}

interface UseMortgageRatesOptions {
  transactionType?: string;
  lenderType?: string;
  rateType?: 'fixed' | 'variable';
  term?: string;
  minDownPayment?: number;
  province?: string;
  autoRefresh?: boolean;
}

export function useMortgageRates(options: UseMortgageRatesOptions = {}) {
  const [rates, setRates] = useState<MortgageRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRates = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      let query = supabase
        .from('rate_sheet_rates')
        .select('*')
        .eq('active', true)
        .order('rate', { ascending: true });

      // Apply filters based on options
      if (options.transactionType) {
        query = query.eq('transaction_type', options.transactionType);
      }
      
      if (options.lenderType) {
        query = query; // lender_type derived later
      }
      
      if (options.rateType) {
        query = query.eq('rate_type', options.rateType);
      }
      
      if (options.term) {
        // map term like '5-yr' => number 5
        // Use string matching for term
        if (options.term) query = query.eq('term', options.term);
      }
      
      if (options.minDownPayment) {
        // minDownPayment: only applicable for down_payment bracket rows
        query = query;
      }

      if (options.province) {
        query = query.eq('province', options.province);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setRates((data || []).map((row: any) => ({
        id: row.id,
        lender_name: row.lender || 'Lender',
        lender_type: ['RBC','TD','Scotiabank','BMO','CIBC'].some((b) => (row.lender || '').toLowerCase().includes(b.toLowerCase())) ? 'bank' : 'lender',
        rate_type: null,
        term: row.term || 'Open',
        base_rate: Number(row.rate),
        min_down_payment: Number(row.min_down_payment ?? 0),
        max_loan_to_value: Number(row.max_ltv ?? 1),
        transaction_types: row.transaction_type ? [row.transaction_type] : [],
        prime_discount: null,
        is_active: !!row.active,
        province: row.province,
        created_at: row.created_at,
        updated_at: row.updated_at,
      })) as any);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching mortgage rates:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch rates');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchRates();
  }, [
    options.transactionType,
    options.lenderType,
    options.rateType,
    options.term,
    options.minDownPayment,
    options.province
  ]);

  // Set up real-time updates if autoRefresh is enabled
  useEffect(() => {
    if (!options.autoRefresh) return;

    const channel = supabase
      .channel('rate-sheet-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rate_sheet_rates'
        },
        (payload) => {
          console.log('Rate sheet updated:', payload);
          fetchRates();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [options.autoRefresh]);

  return {
    rates,
    isLoading,
    error,
    lastUpdated,
    refetch: fetchRates
  };
}
