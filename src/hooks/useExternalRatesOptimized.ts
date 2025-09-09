import { useState, useEffect, useMemo } from 'react';
import { externalRatesClient, getTableName, cityProvinceMap, type TransactionType, type ExternalRateData } from '@/integrations/external-rates/client';

export interface RateFilters {
  transactionType: TransactionType;
  province: string;
  city?: string;
  term?: number; // in months
  amortization?: number; // in years
}

export interface FormattedRate {
  id: string;
  lender: string;
  rate: string;
  term: string;
  type: string;
  amortization?: string;
  description?: string;
  monthlyPrepayment?: number;
  lumpSumPrepayment?: number;
  rateHold?: number;
  preApproval?: boolean;
}

export const useExternalRatesOptimized = (filters: RateFilters) => {
  const [rates, setRates] = useState<FormattedRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get effective province for query - city selection overrides province
  const effectiveProvince = useMemo(() => {
    if (filters.city && filters.city !== 'All') {
      const cityProvince = cityProvinceMap[filters.city as keyof typeof cityProvinceMap];
      if (cityProvince) {
        console.log('🗺️ [useExternalRatesOptimized] City overrides province:', {
          selectedCity: filters.city,
          selectedProvince: filters.province,
          effectiveProvince: cityProvince
        });
        return cityProvince;
      }
    }
    return filters.province;
  }, [filters.city, filters.province]);

  const fetchRates = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const tableName = getTableName(filters.transactionType);
      console.log('🔄 [useExternalRatesOptimized] Fetching rates:', {
        tableName,
        filters: {
          ...filters,
          effectiveProvince
        }
      });

      // Build query
      let query = externalRatesClient
        .from(tableName)
        .select('*')
        .not('Rate', 'is', null) // Exclude null rates
        .eq('Province', effectiveProvince);

      // Apply city filter if not "All"
      if (filters.city && filters.city !== 'All') {
        query = query.eq('City', filters.city);
      }

      // Apply term and amortization filters ONLY for non-HELOC
      if (filters.transactionType !== 'heloc') {
        if (filters.term) {
          query = query.eq('Term', filters.term);
        }
        if (filters.amortization) {
          query = query.eq('Amortization', filters.amortization);
        }
      }

      // Sort by rate ascending, then lender ascending
      query = query.order('Rate', { ascending: true }).order('Lender', { ascending: true });

      const { data, error } = await query.limit(200);

      if (error) {
        console.error('❌ [useExternalRatesOptimized] Query error:', error);
        throw error;
      }

      console.log('✅ [useExternalRatesOptimized] Fetched rates:', {
        count: data?.length || 0,
        sample: data?.slice(0, 2)
      });

      const formattedRates = (data || []).map(formatRate);
      setRates(formattedRates);

    } catch (err) {
      console.error('❌ [useExternalRatesOptimized] Fetch error:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch rates');
    } finally {
      setIsLoading(false);
    }
  };

  const formatRate = (rate: ExternalRateData): FormattedRate => {
    return {
      id: rate.RateId.toString(),
      lender: rate.Lender || 'Unknown Lender',
      rate: `${(rate.Rate || 0).toFixed(2)}%`,
      term: formatTerm(rate.Term, filters.transactionType),
      type: rate.Type || 'Unknown',
      amortization: filters.transactionType === 'heloc' ? undefined : `${rate.Amortization || 25} years`,
      description: rate.Description || undefined,
      monthlyPrepayment: rate.MonthlyPrepayment || undefined,
      lumpSumPrepayment: rate.LumpSumPrepayment || undefined,
      rateHold: rate.RateHold || undefined,
      preApproval: rate.PreApproval || false
    };
  };

  const formatTerm = (termMonths: number | null, transactionType: TransactionType): string => {
    if (transactionType === 'heloc') {
      return '—'; // HELOC doesn't show term
    }
    
    if (!termMonths) return 'Unknown';
    
    const years = Math.floor(termMonths / 12);
    const months = termMonths % 12;
    
    if (months === 0) {
      return `${years}yr`;
    } else {
      return `${years}yr ${months}mo`;
    }
  };

  useEffect(() => {
    fetchRates();
  }, [filters.transactionType, effectiveProvince, filters.city, filters.term, filters.amortization]);

  return {
    rates,
    isLoading,
    error,
    refetch: fetchRates
  };
};