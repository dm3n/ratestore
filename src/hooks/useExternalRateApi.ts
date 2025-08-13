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
      
      if (response.rates && response.rates.length > 0) {
        setRates(response.rates);
        setLastUpdated(new Date());
        return response;
      } else {
        // If no rates returned, get all rates and filter manually
        const allRatesResponse = await mortgageApi.getAllRates() as any;
        const filteredRates = filterRatesFromAllData(allRatesResponse.rates, criteria);
        setRates(filteredRates.slice(0, 10));
        setLastUpdated(new Date());
        return {
          rates: filteredRates.slice(0, 10),
          total_rates_found: filteredRates.length,
          last_updated: allRatesResponse.last_updated
        };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to find best rates';
      setError(errorMessage);
      console.error('Error finding best rates:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to filter rates from all data based on criteria
  const filterRatesFromAllData = (allRates: any, criteria: FindBestRatesRequest): ExternalRate[] => {
    const rateArray: ExternalRate[] = [];
    
    // Calculate categories based on criteria
    const downPaymentPercent = (criteria.down_payment / criteria.property_value) * 100;
    const loanAmount = criteria.property_value - criteria.down_payment;
    
    // Determine categories
    let dpCategory = 'dp_5_19';
    if (downPaymentPercent >= 20 && downPaymentPercent < 25) dpCategory = 'dp_20_24';
    else if (downPaymentPercent >= 25 && downPaymentPercent < 30) dpCategory = 'dp_25_29';
    else if (downPaymentPercent >= 30 && downPaymentPercent < 35) dpCategory = 'dp_30_34';
    else if (downPaymentPercent >= 35) dpCategory = 'dp_35_99';
    
    let sizeCategory = 'under_299k';
    if (loanAmount >= 300000 && loanAmount < 500000) sizeCategory = '300k_499k';
    else if (loanAmount >= 500000 && loanAmount < 750000) sizeCategory = '500k_749k';
    else if (loanAmount >= 750000) sizeCategory = 'over_750k';
    
    // Get transaction type rates
    const transactionType = criteria.transaction_type === 'buying' ? 'purchases' : criteria.transaction_type;
    const ratesData = allRates[transactionType];
    
    console.log('Looking for rates in:', transactionType, dpCategory, sizeCategory);
    console.log('Available data:', ratesData);
    
    if (ratesData && ratesData[dpCategory] && ratesData[dpCategory][sizeCategory]) {
      const termData = ratesData[dpCategory][sizeCategory];
      
      // Filter by requested terms and rate types
      const terms = criteria.terms || ['2', '3', '5'];
      const rateTypes = criteria.rate_types || ['fixed', 'variable'];
      
      terms.forEach(term => {
        const termKey = `${term}_year`;
        console.log(`Checking term: ${termKey}`, termData[termKey]);
        if (termData[termKey]) {
          rateTypes.forEach(rateType => {
            if (termData[termKey][rateType]) {
              rateArray.push({
                lender: `Best ${term}Y ${rateType.charAt(0).toUpperCase() + rateType.slice(1)}`,
                rate: termData[termKey][rateType],
                term: term,
                rate_type: rateType as 'fixed' | 'variable',
                transaction_type: transactionType,
                categories: [dpCategory, sizeCategory]
              });
            }
          });
        }
      });
    } else {
      console.log('No matching rate data found for criteria:', { transactionType, dpCategory, sizeCategory });
    }
    
    return rateArray.sort((a, b) => a.rate - b.rate);
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