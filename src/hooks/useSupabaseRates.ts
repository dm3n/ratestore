import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface RateFilters {
  transactionType: string;
  province?: string;
  city?: string;
  term?: string; // stored as text in DB
  productType?: string;
}

export interface FormattedRate {
  id: string;
  lender: string;
  rate: number;
  term: string;
  termDisplay: string;
  productType: string;
  province: string;
  transactionType: string;
  minDownPayment: number | null;
  maxLtv: number | null;
  conditions: string | null;
  isBigBank: boolean; // We'll derive this from lender name
  createdAt: string;
  updatedAt: string;
}

// Big bank names for classification
const BIG_BANKS = [
  'RBC', 'TD', 'BMO', 'Scotiabank', 'CIBC', 'National Bank',
  'Royal Bank', 'TD Bank', 'Bank of Montreal', 'Scotia'
];

function isBigBank(lenderName: string): boolean {
  return BIG_BANKS.some(bank => 
    lenderName.toLowerCase().includes(bank.toLowerCase())
  );
}

function formatTermDisplay(term: string): string {
  const termLower = term.toLowerCase();
  
  // Handle common term formats
  if (termLower.includes('year') || termLower.includes('yr')) {
    return term;
  }
  
  // If it's a number, assume years
  const numericTerm = parseInt(term);
  if (!isNaN(numericTerm)) {
    return `${numericTerm} Year`;
  }
  
  return term;
}

export function useSupabaseRates(filters: RateFilters) {
  const [rates, setRates] = useState<FormattedRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRates = async () => {
    console.log('🔍 [useSupabaseRates] Starting fetchRates with filters:', filters);
    setIsLoading(true);
    setError(null);
    
    try {
      let query = supabase
        .from('rate_sheet_rates')
        .select('*')
        .order('rate', { ascending: true });

      // Apply filters
      if (filters.transactionType) {
        query = query.eq('transaction_type', filters.transactionType);
        console.log('🔄 [useSupabaseRates] Added transaction type filter:', filters.transactionType);
      }
      
      if (filters.province) {
        query = query.eq('province', filters.province);
        console.log('🌍 [useSupabaseRates] Added province filter:', filters.province);
      }
      
      if (filters.term) {
        query = query.eq('term', filters.term);
        console.log('📅 [useSupabaseRates] Added term filter:', filters.term);
      }
      
      if (filters.productType) {
        query = query.eq('product_type', filters.productType);
        console.log('🏦 [useSupabaseRates] Added product type filter:', filters.productType);
      }

      console.log('📡 [useSupabaseRates] Executing Supabase query...');
      
      const { data, error } = await query;
      
      if (error) {
        console.error('❌ [useSupabaseRates] Supabase query error:', error);
        throw error;
      }
      
      console.log('✅ [useSupabaseRates] Raw data received:', {
        totalRecords: data?.length || 0,
        sampleRecord: data?.[0] || null
      });
      
      const formattedRates: FormattedRate[] = (data || []).map((rate) => {
        const formatted: FormattedRate = {
          id: rate.id,
          lender: rate.lender,
          rate: Number(rate.rate),
          term: rate.term || '',
          termDisplay: formatTermDisplay(rate.term || ''),
          productType: rate.product_type,
          province: rate.province || '',
          transactionType: rate.transaction_type,
          minDownPayment: rate.min_down_payment ? Number(rate.min_down_payment) : null,
          maxLtv: rate.max_ltv ? Number(rate.max_ltv) : null,
          conditions: rate.conditions,
          isBigBank: isBigBank(rate.lender),
          createdAt: rate.created_at,
          updatedAt: rate.updated_at,
        };
        
        return formatted;
      });
      
      console.log('🎯 [useSupabaseRates] Final formatted rates:', {
        totalFormatted: formattedRates.length,
        rateRange: formattedRates.length > 0 ? {
          lowest: Math.min(...formattedRates.map(r => r.rate)),
          highest: Math.max(...formattedRates.map(r => r.rate))
        } : null,
        uniqueLenders: Array.from(new Set(formattedRates.map(r => r.lender))),
        uniqueTerms: Array.from(new Set(formattedRates.map(r => r.term))),
        bigBankCount: formattedRates.filter(r => r.isBigBank).length,
        alternativeLenderCount: formattedRates.filter(r => !r.isBigBank).length
      });
      
      setRates(formattedRates);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('💥 [useSupabaseRates] Error fetching rates:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch rates');
    } finally {
      setIsLoading(false);
      console.log('🏁 [useSupabaseRates] fetchRates completed');
    }
  };

  useEffect(() => {
    console.log('🔄 [useSupabaseRates] useEffect triggered with filters change:', filters);
    fetchRates();
  }, [
    filters.transactionType,
    filters.province,
    filters.term,
    filters.productType,
  ]);

  const bestRate = useMemo(() => {
    const result = rates.length > 0 ? rates[0] : null;
    console.log('🏆 [useSupabaseRates] Best rate calculated:', result);
    return result;
  }, [rates]);

  const bigBankRates = useMemo(() => {
    const result = rates.filter(rate => rate.isBigBank);
    console.log('🏦 [useSupabaseRates] Big bank rates calculated:', result.length, 'rates');
    return result;
  }, [rates]);

  const alternativeLenderRates = useMemo(() => {
    const result = rates.filter(rate => !rate.isBigBank);
    console.log('🏢 [useSupabaseRates] Alternative lender rates calculated:', result.length, 'rates');
    return result;
  }, [rates]);

  return {
    rates,
    isLoading,
    error,
    lastUpdated,
    bestRate,
    bigBankRates,
    alternativeLenderRates,
    refetch: fetchRates,
  };
}