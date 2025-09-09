import { useState, useEffect, useMemo } from 'react';
import { externalRatesClient, getTableName, type ExternalRateData, type TransactionType, type Province } from '@/integrations/external-rates/client';

export interface RateFilters {
  transactionType: TransactionType;
  province?: Province;
  city?: string;
  term?: number; // in months
  amortization?: number; // in years
  isOwnerOccupied?: boolean;
  isInsured?: boolean;
  isBigBank?: boolean;
  rateType?: 'fixed' | 'variable' | 'all';
}

export interface FormattedExternalRate {
  id: number;
  lender: string;
  rate: number;
  term: number; // months
  termDisplay: string; // e.g., "5-Year"
  type: string;
  amortization: number; // years
  province: string;
  city: string;
  isOwnerOccupied: boolean;
  isInsured: boolean;
  isBigBank: boolean;
  description: string;
  monthlyPrepayment: number;
  lumpSumPrepayment: number;
  rateHold: number;
  preApproval: boolean;
}

export function useExternalRates(filters: RateFilters) {
  const [rates, setRates] = useState<FormattedExternalRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRates = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const tableName = getTableName(filters.transactionType);
      let query = externalRatesClient
        .from(tableName)
        .select('*')
        .order('Rate', { ascending: true });

      // Apply filters
      if (filters.province) {
        query = query.eq('Province', filters.province);
      }
      
      if (filters.city) {
        query = query.eq('City', filters.city);
      }
      
      if (filters.term) {
        query = query.eq('Term', filters.term);
      }
      
      if (filters.amortization) {
        query = query.eq('Amortization', filters.amortization);
      }
      
      if (filters.isOwnerOccupied !== undefined) {
        query = query.eq('IsOwnerOccupied', filters.isOwnerOccupied ? 1 : 0);
      }
      
      if (filters.isInsured !== undefined) {
        query = query.eq('IsInsured', filters.isInsured ? 1 : 0);
      }
      
      if (filters.isBigBank !== undefined) {
        query = query.eq('IsBigBank', filters.isBigBank ? 1 : 0);
      }
      
      if (filters.rateType && filters.rateType !== 'all') {
        query = query.ilike('Type', `%${filters.rateType}%`);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      
      const formattedRates: FormattedExternalRate[] = (data || []).map((rate: ExternalRateData) => ({
        id: rate.RateId,
        lender: rate.Lender || 'Unknown Lender',
        rate: rate.Rate || 0,
        term: rate.Term || 0,
        termDisplay: formatTerm(rate.Term || 0),
        type: rate.Type || 'Fixed',
        amortization: rate.Amortization || 25,
        province: rate.Province || '',
        city: rate.City || '',
        isOwnerOccupied: rate.IsOwnerOccupied === 1,
        isInsured: rate.IsInsured === 1,
        isBigBank: rate.IsBigBank === 1,
        description: rate.Description || '',
        monthlyPrepayment: rate.MonthlyPrepayment || 0,
        lumpSumPrepayment: rate.LumpSumPrepayment || 0,
        rateHold: rate.RateHold || 0,
        preApproval: rate.PreApproval || false,
      }));
      
      setRates(formattedRates);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching external rates:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch rates');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, [
    filters.transactionType,
    filters.province,
    filters.city,
    filters.term,
    filters.amortization,
    filters.isOwnerOccupied,
    filters.isInsured,
    filters.isBigBank,
    filters.rateType,
  ]);

  const bestRate = useMemo(() => {
    return rates.length > 0 ? rates[0] : null;
  }, [rates]);

  const bigBankRates = useMemo(() => {
    return rates.filter(rate => rate.isBigBank);
  }, [rates]);

  const alternativeLenderRates = useMemo(() => {
    return rates.filter(rate => !rate.isBigBank);
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

function formatTerm(termMonths: number): string {
  const years = Math.floor(termMonths / 12);
  const months = termMonths % 12;
  
  if (years === 0) {
    return `${months}mo`;
  } else if (months === 0) {
    return `${years}yr`;
  } else {
    return `${years}yr ${months}mo`;
  }
}