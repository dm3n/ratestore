import { useState, useCallback } from 'react';
import { mortgageApi, AffordabilityRequest, AffordabilityResponse } from '@/services/mortgageApi';
import { toast } from '@/hooks/use-toast';

export const useAffordabilityCalculatorApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AffordabilityResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateAffordability = useCallback(async (data: AffordabilityRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.calculateAffordability(data);
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
    calculateAffordability,
    isLoading,
    results,
    error,
    reset,
  };
};