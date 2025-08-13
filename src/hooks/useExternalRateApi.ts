import { useState, useEffect } from 'react';
import { mortgageApi, FindBestRatesRequest, ExternalRate } from '@/services/mortgageApi';

// Re-export ExternalRate from the API service
export type { ExternalRate } from '@/services/mortgageApi';

export interface RateLookupCriteria {
  transaction_type?: string;
  province?: string;
  term?: string | number;
  rate_type?: string;
  down_payment_percent?: number;
  property_value?: number;
  loan_amount?: number;
  ltv?: number;
  mortgage_size?: string;
  property_type?: string;
  cmhc_insured?: boolean;
}

export const useExternalRateApi = () => {
  const [rates, setRates] = useState<ExternalRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchAllRates = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.getAllRates() as any;
      
      // Transform the nested API response into flat ExternalRate array
      const transformedRates: ExternalRate[] = [];
      
      if (response.rates) {
        // Process all rate categories from the new API format
        ['purchases', 'renewals', 'refinancing', 'heloc'].forEach(category => {
          if (response.rates[category]) {
            Object.entries(response.rates[category]).forEach(([key, data]: [string, any]) => {
              if (category === 'heloc') {
                // HELOC rates have lender directly
                transformedRates.push({
                  lender: key,
                  term: "1",
                  rate_type: "variable",
                  rate: data.rate || data,
                });
              } else {
                // Other categories have nested structure
                Object.entries(data).forEach(([subKey, subData]: [string, any]) => {
                  Object.entries(subData).forEach(([termKey, rateData]: [string, any]) => {
                    if (rateData && typeof rateData === 'object') {
                      Object.entries(rateData).forEach(([lender, rate]: [string, any]) => {
                        transformedRates.push({
                          lender,
                          term: termKey.replace('yr', ''),
                          rate_type: "fixed",
                          rate: typeof rate === 'number' ? rate : rate.rate || rate,
                        });
                      });
                    }
                  });
                });
              }
            });
          }
        });
      }
      
      console.log('Transformed rates:', transformedRates);
      setRates(transformedRates);
      setLastUpdated(new Date());
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch rates';
      setError(errorMessage);
      console.error('Error fetching external rates:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const findBestRates = async (criteria: FindBestRatesRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.findBestRates(criteria);
      setRates(response.rates);
      setLastUpdated(new Date());
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to find best rates';
      setError(errorMessage);
      console.error('Error finding best rates:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const lookupSpecificRates = async (criteria: RateLookupCriteria) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const lookupData = {
        transaction_type: criteria.transaction_type || 'buying',
        property_value: criteria.property_value || 500000,
        down_payment: criteria.property_value ? criteria.property_value * ((criteria.down_payment_percent || 20) / 100) : 100000,
        term: String(criteria.term || '5'),
        rate_type: criteria.rate_type || 'fixed',
        has_cmhc: criteria.cmhc_insured
      };
      
      const response = await mortgageApi.lookupRates(lookupData);
      return response.matching_rates || [];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to lookup rates';
      setError(errorMessage);
      console.error('Error looking up rates:', err);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const filterLocalRates = (criteria: RateLookupCriteria, limit: number = 10): ExternalRate[] => {
    if (!rates.length) return [];

    const filtered = rates.filter(rate => {
      // Filter by term
      if (criteria.term && rate.term !== String(criteria.term)) {
        return false;
      }

      // Filter by rate type
      if (criteria.rate_type && rate.rate_type !== criteria.rate_type) {
        return false;
      }

      return true;
    });

    // Sort by rate (lowest first) and return limited results
    return filtered
      .sort((a, b) => a.rate - b.rate)
      .slice(0, limit);
  };

  const getMortgageSizeBracket = (loanAmount: number): string => {
    if (loanAmount < 300000) return '<$299k';
    if (loanAmount < 500000) return '$300k-$499k';
    if (loanAmount < 750000) return '$500k-$749k';
    return '>$750k';
  };

  const getDownPaymentRange = (downPaymentPercent: number): string => {
    if (downPaymentPercent < 20) return '5-19.99%';
    if (downPaymentPercent < 25) return '20-24.99%';
    if (downPaymentPercent < 30) return '25-29.99%';
    if (downPaymentPercent < 35) return '30-34.99%';
    return '35-99.99%';
  };

  // Auto-fetch rates on mount
  useEffect(() => {
    fetchAllRates();
  }, []);

  return {
    rates,
    isLoading,
    error,
    lastUpdated,
    fetchAllRates,
    findBestRates,
    lookupSpecificRates,
    filterLocalRates,
    getMortgageSizeBracket,
    getDownPaymentRange,
  };
};