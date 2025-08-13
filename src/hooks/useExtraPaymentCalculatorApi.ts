import { useState, useCallback } from 'react';
import { mortgageApi, ExtraPaymentRequest, ExtraPaymentResponse } from '@/services/mortgageApi';
import { toast } from '@/hooks/use-toast';

export const useExtraPaymentCalculatorApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ExtraPaymentResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateExtraPayment = useCallback(async (data: ExtraPaymentRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.calculateExtraPayment(data);
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
    calculateExtraPayment,
    isLoading,
    results,
    error,
    reset,
  };
};