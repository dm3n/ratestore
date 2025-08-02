import { useState, useEffect } from 'react';
import { GoogleSheetsService } from '@/services/googleSheetsService';

interface GoogleSheetMortgageRate {
  lender: string;
  rate: number;
  term: string;
  rateType: 'fixed' | 'variable';
  transactionType: 'buying' | 'renewing' | 'refinancing';
  hasInsurance: boolean;
  ltvMin: number;
  ltvMax: number;
  minDownPayment?: number;
  maxDownPayment?: number;
  province: string;
  minCreditScore?: number;
}

interface UserMortgageRequirements {
  term: string;
  transactionType: 'buying' | 'renewing' | 'refinancing';
  hasInsurance: boolean;
  creditScore?: number;
  propertyValue: number;
  downPayment: number;
  province?: string;
}

export function useGoogleSheetsRates() {
  const [rates, setRates] = useState<GoogleSheetMortgageRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchRates = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const fetchedRates = await GoogleSheetsService.fetchMortgageRates();
      setRates(fetchedRates);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching Google Sheets rates:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch rates');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const findMatches = (requirements: UserMortgageRequirements) => {
    return GoogleSheetsService.findMatchingRates(rates, requirements);
  };

  const getBestRates = () => {
    return GoogleSheetsService.getBestRatesByCategory(rates);
  };

  const getLowestRate = () => {
    if (rates.length === 0) return null;
    return rates.reduce((lowest, current) => 
      current.rate < lowest.rate ? current : lowest
    );
  };

  return {
    rates,
    isLoading,
    error,
    lastUpdated,
    refetch: fetchRates,
    findMatches,
    getBestRates,
    getLowestRate
  };
}