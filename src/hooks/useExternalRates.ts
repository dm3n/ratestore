import { useState, useEffect, useMemo } from 'react';
import { externalRatesClient, getTableName, type ExternalRateData, type TransactionType, type Province } from '@/integrations/external-rates/client';

export interface RateFilters {
  transactionType: TransactionType;
  province?: Province;
  city?: string;
  term?: number; // in months - ignored for HELOC
  amortization?: number; // in years - ignored for HELOC
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
    console.log('🔍 [useExternalRates] Starting fetchRates with filters:', filters);
    setIsLoading(true);
    setError(null);
    
    try {
      const tableName = getTableName(filters.transactionType);
      console.log('📊 [useExternalRates] Table name:', tableName);
      
      let query = externalRatesClient
        .from(tableName)
        .select('*')
        .order('Rate', { ascending: true });

      console.log('🏗️ [useExternalRates] Building query with filters...');

      // Apply filters
      if (filters.province) {
        query = query.eq('Province', filters.province);
        console.log('🌍 [useExternalRates] Added province filter:', filters.province);
      }
      
      if (filters.city) {
        query = query.eq('City', filters.city);
        console.log('🏙️ [useExternalRates] Added city filter:', filters.city);
      }
      
      // For HELOC, don't filter by term or amortization
      if (filters.transactionType !== 'heloc') {
        if (filters.term) {
          query = query.eq('Term', filters.term);
          console.log('📅 [useExternalRates] Added term filter:', filters.term, 'months');
        }
        
        if (filters.amortization) {
          query = query.eq('Amortization', filters.amortization);
          console.log('⏰ [useExternalRates] Added amortization filter:', filters.amortization, 'years');
        }
      } else {
        console.log('💰 [useExternalRates] HELOC transaction - skipping term and amortization filters');
      }

      console.log('📡 [useExternalRates] Executing Supabase query...');
      console.log('🔍 [useExternalRates] Final query details:', {
        table: tableName,
        selectColumns: '*',
        orderBy: 'Rate ASC',
        filters: {
          province: filters.province,
          city: filters.city,
          term: filters.transactionType !== 'heloc' ? filters.term : 'N/A (HELOC)',
          amortization: filters.transactionType !== 'heloc' ? filters.amortization : 'N/A (HELOC)'
        }
      });
      
      // Generate equivalent SQL for reference
      let sqlQuery = `SELECT * FROM ${tableName}`;
      const whereConditions = [];
      
      if (filters.province) whereConditions.push(`Province = '${filters.province}'`);
      if (filters.city) whereConditions.push(`City = '${filters.city}'`);
      
      // Only add term and amortization filters for non-HELOC transactions
      if (filters.transactionType !== 'heloc') {
        if (filters.term) whereConditions.push(`Term = ${filters.term}`);
        if (filters.amortization) whereConditions.push(`Amortization = ${filters.amortization}`);
      }
      
      if (whereConditions.length > 0) {
        sqlQuery += ` WHERE ${whereConditions.join(' AND ')}`;
      }
      sqlQuery += ' ORDER BY Rate ASC';
      
      console.log('📋 [useExternalRates] Equivalent SQL query:', sqlQuery);
      
      const { data, error } = await query;
      
      if (error) {
        console.error('❌ [useExternalRates] Supabase query error:', error);
        throw error;
      }
      
      console.log('✅ [useExternalRates] Raw data received:', {
        totalRecords: data?.length || 0,
        sampleRecord: data?.[0] || null,
        allRecords: data
      });
      
      const formattedRates: FormattedExternalRate[] = (data || []).map((rate: ExternalRateData, index) => {
        const formatted = {
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
        };
        
        if (index < 3) {
          console.log(`🔄 [useExternalRates] Formatted rate ${index + 1}:`, formatted);
        }
        
        return formatted;
      });
      
      console.log('🎯 [useExternalRates] Final formatted rates:', {
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
      console.error('💥 [useExternalRates] Error fetching external rates:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch rates');
    } finally {
      setIsLoading(false);
      console.log('🏁 [useExternalRates] fetchRates completed');
    }
  };

  useEffect(() => {
    console.log('🔄 [useExternalRates] useEffect triggered with filters change:', filters);
    fetchRates();
  }, [
    filters.transactionType,
    filters.province,
    filters.city,
    filters.term,
    filters.amortization,
  ]);

  const bestRate = useMemo(() => {
    const result = rates.length > 0 ? rates[0] : null;
    console.log('🏆 [useExternalRates] Best rate calculated:', result);
    return result;
  }, [rates]);

  const bigBankRates = useMemo(() => {
    const result = rates.filter(rate => rate.isBigBank);
    console.log('🏦 [useExternalRates] Big bank rates calculated:', result.length, 'rates');
    return result;
  }, [rates]);

  const alternativeLenderRates = useMemo(() => {
    const result = rates.filter(rate => !rate.isBigBank);
    console.log('🏢 [useExternalRates] Alternative lender rates calculated:', result.length, 'rates');
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