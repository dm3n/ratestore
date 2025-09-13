import { useState, useCallback } from 'react';
import { calculateCompoundInterest } from '@/lib/calculator';
import { toast } from '@/hooks/use-toast';

// Local types for compound interest calculation
interface CompoundInterestRequest {
  principal: number;
  annual_rate: number;
  contribution_frequency: string;
  contribution_amount: number;
  time_years: number;
}

interface CompoundInterestResponse {
  final_amount: number;
  total_contributions: number;
  total_interest_earned: number;
  principal_amount: number;
}

export const useCompoundInterestApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<CompoundInterestResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateCompoundInterestLocal = useCallback(async (data: CompoundInterestRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Use local calculation instead of external API
      const response = calculateCompoundInterest(
        data.principal,
        data.annual_rate,
        data.contribution_amount,
        data.contribution_frequency,
        data.time_years
      );
      setResults(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Calculation failed';
      setError(errorMessage);
      toast({
        title: "Calculation Error",
        description: errorMessage,
        variant: "destructive",
      });
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResults(null);
    setError(null);
  }, []);

  return {
    calculateCompoundInterest: calculateCompoundInterestLocal,
    isLoading,
    results,
    error,
    reset,
  };
};