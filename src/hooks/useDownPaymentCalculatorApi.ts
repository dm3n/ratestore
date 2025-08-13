import { useState, useCallback } from 'react';
import { mortgageApi, DownPaymentRequest, DownPaymentResponse } from '@/services/mortgageApi';
import { toast } from '@/hooks/use-toast';

export const useDownPaymentCalculatorApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DownPaymentResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateDownPayment = useCallback(async (data: DownPaymentRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.calculateDownPayment(data);
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
    calculateDownPayment,
    isLoading,
    results,
    error,
    reset,
  };
};