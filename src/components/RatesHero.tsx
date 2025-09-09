import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useExternalRatesOptimized } from "@/hooks/useExternalRatesOptimized";
import { TrendingUp, TrendingDown } from "lucide-react";

export const RatesHero = () => {
  // Fetch featured rates from external database
  const oneYearRates = useExternalRatesOptimized({
    transactionType: 'purchase',
    province: 'ON',
    term: 12,
    amortization: 25
  });

  const threeYearRates = useExternalRatesOptimized({
    transactionType: 'purchase', 
    province: 'ON',
    term: 36,
    amortization: 25
  });

  const fiveYearFixedRates = useExternalRatesOptimized({
    transactionType: 'purchase',
    province: 'ON', 
    term: 60,
    amortization: 25
  });

  const fiveYearVariableRates = useExternalRatesOptimized({
    transactionType: 'purchase',
    province: 'ON',
    term: 60, 
    amortization: 25
  });

  const getBestRate = (rates: any[]) => {
    return rates.length > 0 ? rates[0].rate : 'N/A';
  };

  const getBestLender = (rates: any[]) => {
    return rates.length > 0 ? rates[0].lender : 'Loading...';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Today's Best Mortgage Rates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare the latest rates from Canada's top lenders and find the perfect mortgage for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-muted-foreground">1-Year Fixed</h3>
                <TrendingDown className="h-4 w-4 text-green-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">
                  {getBestRate(oneYearRates.rates)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {getBestLender(oneYearRates.rates)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-muted-foreground">3-Year Fixed</h3>
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">
                  {getBestRate(threeYearRates.rates)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {getBestLender(threeYearRates.rates)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-muted-foreground">5-Year Fixed</h3>
                <TrendingDown className="h-4 w-4 text-green-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">
                  {getBestRate(fiveYearFixedRates.rates)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {getBestLender(fiveYearFixedRates.rates)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-muted-foreground">5-Year Variable</h3>
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">
                  {getBestRate(fiveYearVariableRates.rates)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {getBestLender(fiveYearVariableRates.rates)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            Compare All Rates
          </Button>
          <Button variant="outline" size="lg">
            Get Pre-Approved
          </Button>
        </div>
      </div>
    </section>
  );
};