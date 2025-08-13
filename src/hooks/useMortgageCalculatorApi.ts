import { useState, useCallback } from 'react';
import { mortgageApi, MortgagePaymentRequest, MortgagePaymentResponse } from '@/services/mortgageApi';
import { toast } from '@/hooks/use-toast';

export const useMortgageCalculatorApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<MortgagePaymentResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculatePayment = useCallback(async (data: MortgagePaymentRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await mortgageApi.calculateMortgagePayment(data);
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
    calculatePayment,
    isLoading,
    results,
    error,
    reset,
  };
};