import { useState, useEffect } from 'react';
import { mortgageApi } from '@/services/mortgageApi';

export interface ExternalRate {
  lender: string;
  term: string;
  rate_type: string;
  rate: number;
  down_payment_range?: string;
  ltv_range?: string;
  mortgage_size?: string;
  property_type?: string;
  transaction_type?: string;
  cmhc_insured?: boolean;
  province?: string;
}

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
        // Process HELOC rates
        if (response.rates.heloc) {
          Object.entries(response.rates.heloc).forEach(([lender, rateData]: [string, any]) => {
            transformedRates.push({
              lender,
              term: "1",
              rate_type: "variable",
              rate: rateData.rate,
              transaction_type: "heloc"
            });
          });
        }
        
        // Process purchase rates
        if (response.rates.purchases) {
          Object.entries(response.rates.purchases).forEach(([dpRange, sizeData]: [string, any]) => {
            Object.entries(sizeData).forEach(([sizeRange, termData]: [string, any]) => {
              Object.entries(termData).forEach(([termKey, rateData]: [string, any]) => {
                if (rateData && Object.keys(rateData).length > 0) {
                  Object.entries(rateData).forEach(([lender, rate]: [string, any]) => {
                    transformedRates.push({
                      lender,
                      term: termKey.replace('yr', ''),
                      rate_type: "fixed",
                      rate: typeof rate === 'number' ? rate : rate.rate,
                      transaction_type: "buying",
                      down_payment_range: dpRange,
                      mortgage_size: sizeRange
                    });
                  });
                }
              });
            });
          });
        }
        
        // Process refinancing rates
        if (response.rates.refinancing) {
          Object.entries(response.rates.refinancing).forEach(([ltvRange, termData]: [string, any]) => {
            Object.entries(termData).forEach(([termKey, rateData]: [string, any]) => {
              if (rateData && Object.keys(rateData).length > 0) {
                Object.entries(rateData).forEach(([lender, rate]: [string, any]) => {
                  transformedRates.push({
                    lender,
                    term: termKey.replace('yr', ''),
                    rate_type: "fixed",
                    rate: typeof rate === 'number' ? rate : rate.rate,
                    transaction_type: "refinancing",
                    ltv_range: ltvRange
                  });
                });
              }
            });
          });
        }
        
        // Process renewal rates
        if (response.rates.renewals) {
          Object.entries(response.rates.renewals).forEach(([cmhcStatus, ltvData]: [string, any]) => {
            Object.entries(ltvData).forEach(([ltvRange, termData]: [string, any]) => {
              Object.entries(termData).forEach(([termKey, rateData]: [string, any]) => {
                if (rateData && Object.keys(rateData).length > 0) {
                  Object.entries(rateData).forEach(([lender, rate]: [string, any]) => {
                    transformedRates.push({
                      lender,
                      term: termKey.replace('yr', ''),
                      rate_type: "fixed",
                      rate: typeof rate === 'number' ? rate : rate.rate,
                      transaction_type: "renewal",
                      ltv_range: ltvRange,
                      cmhc_insured: cmhcStatus === 'cmhc_yes'
                    });
                  });
                }
              });
            });
          });
        }
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

  const lookupRates = async (criteria: RateLookupCriteria) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.lookupRates(criteria) as any;
      return response.rates || response || [];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to lookup rates';
      setError(errorMessage);
      console.error('Error looking up rates:', err);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const findBestRates = (criteria: RateLookupCriteria, limit: number = 10): ExternalRate[] => {
    if (!rates.length) return [];

    const filtered = rates.filter(rate => {
      // Filter by transaction type
      if (criteria.transaction_type && rate.transaction_type !== criteria.transaction_type) {
        return false;
      }

      // Filter by province
      if (criteria.province && rate.province && rate.province !== 'ALL' && rate.province !== criteria.province) {
        return false;
      }

      // Filter by term
      if (criteria.term && rate.term !== String(criteria.term)) {
        return false;
      }

      // Filter by rate type
      if (criteria.rate_type && rate.rate_type !== criteria.rate_type) {
        return false;
      }

      // Filter by CMHC insurance
      if (criteria.cmhc_insured !== undefined && rate.cmhc_insured !== criteria.cmhc_insured) {
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
    lookupRates,
    findBestRates,
    getMortgageSizeBracket,
    getDownPaymentRange,
  };
};