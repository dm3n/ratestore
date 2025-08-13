import { useState, useCallback } from 'react';
import { mortgageApi, CompoundInterestRequest, CompoundInterestResponse } from '@/services/mortgageApi';
import { toast } from '@/hooks/use-toast';

export const useCompoundInterestApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<CompoundInterestResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateCompoundInterest = useCallback(async (data: CompoundInterestRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.calculateCompoundInterest(data);
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
    calculateCompoundInterest,
    isLoading,
    results,
    error,
    reset,
  };
};