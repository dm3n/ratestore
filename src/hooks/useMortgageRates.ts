
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface MortgageRate {
  id: string;
  lender_name: string;
  lender_type: string;
  rate_type: string;
  term: string;
  base_rate: number;
  min_down_payment: number;
  max_loan_to_value: number;
  transaction_types: string[];
  prime_discount: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface UseMortgageRatesOptions {
  transactionType?: string;
  lenderType?: string;
  rateType?: 'fixed' | 'variable';
  term?: string;
  minDownPayment?: number;
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
        .from('mortgage_rates')
        .select('*')
        .eq('is_active', true)
        .order('base_rate', { ascending: true });

      // Apply filters based on options
      if (options.transactionType) {
        query = query.contains('transaction_types', [options.transactionType]);
      }
      
      if (options.lenderType) {
        query = query.eq('lender_type', options.lenderType);
      }
      
      if (options.rateType) {
        query = query.eq('rate_type', options.rateType);
      }
      
      if (options.term) {
        query = query.eq('term', options.term);
      }
      
      if (options.minDownPayment) {
        query = query.lte('min_down_payment', options.minDownPayment);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setRates(data || []);
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
    options.minDownPayment
  ]);

  // Set up real-time updates if autoRefresh is enabled
  useEffect(() => {
    if (!options.autoRefresh) return;

    const channel = supabase
      .channel('mortgage-rates-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mortgage_rates'
        },
        (payload) => {
          console.log('Mortgage rates updated:', payload);
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
