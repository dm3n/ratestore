
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Home, Building2, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface RateData {
  id: string;
  lender: string;
  rate: number;
  lenderType: string;
  term: string;
  type: "fixed" | "variable";
  prime?: string;
  minDownPayment: number;
  maxLoanToValue: number;
  transactionTypes: string[];
}

interface InteractiveRateCalculatorProps {
  defaultTransactionType?: string;
  provinceFilter?: string;
  termFilter?: string; // New prop to filter by specific term
}

export function InteractiveRateCalculator({ 
  defaultTransactionType = "buying",
  provinceFilter,
  termFilter 
}: InteractiveRateCalculatorProps) {
  const [transactionType, setTransactionType] = useState(defaultTransactionType);
  const [purchasePrice, setPurchasePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(20000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);
  const [activeTab, setActiveTab] = useState("best-market");
  const [rates, setRates] = useState<RateData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Calculate down payment percentage when dollar amount changes
  useEffect(() => {
    const percent = Math.round((downPayment / purchasePrice) * 100);
    setDownPaymentPercent(Math.min(percent, 100));
  }, [downPayment, purchasePrice]);

  // Calculate down payment dollar amount when percentage changes
  const handlePercentChange = (percent: number) => {
    setDownPaymentPercent(percent);
    setDownPayment(Math.round((percent / 100) * purchasePrice));
  };

  // Fetch rates from database based on current inputs
  const updateRates = async () => {
    setIsLoading(true);
    
    try {
      const loanAmount = purchasePrice - downPayment;
      const loanToValue = loanAmount / purchasePrice;
      
      // Build query with province filter if specified
      let query = supabase
        .from('mortgage_rates')
        .select('*')
        .eq('is_active', true)
        .contains('transaction_types', [transactionType])
        .lte('min_down_payment', downPaymentPercent / 100)
        .gte('max_loan_to_value', loanToValue)
        .order('base_rate', { ascending: true });

      // Add province filter if specified
      if (provinceFilter && provinceFilter !== 'all') {
        query = query.eq('province', provinceFilter);
      }

      // Add term filter if specified
      if (termFilter) {
        query = query.eq('term', termFilter);
      }

      const { data: dbRates, error } = await query;

      if (error) {
        console.error('Error fetching rates:', error);
        return;
      }

      // Transform database rates to component format
      const transformedRates: RateData[] = dbRates.map(rate => ({
        id: rate.id,
        lender: rate.lender_name,
        rate: Number(rate.base_rate),
        lenderType: rate.lender_type === 'bank' ? 'bank' : 'home',
        term: rate.term,
        type: rate.rate_type as "fixed" | "variable",
        prime: rate.prime_discount,
        minDownPayment: Number(rate.min_down_payment),
        maxLoanToValue: Number(rate.max_loan_to_value),
        transactionTypes: rate.transaction_types || []
      }));

      // Filter rates based on activeTab preference
      let filteredRates = transformedRates;
      if (activeTab === "best-bank") {
        filteredRates = transformedRates.filter(rate => rate.lenderType === 'bank');
      }

      // Group by term and select best rates for each term/type combination
      const rateGroups: { [key: string]: RateData[] } = {};
      filteredRates.forEach(rate => {
        const key = `${rate.term}-${rate.type}`;
        if (!rateGroups[key]) {
          rateGroups[key] = [];
        }
        rateGroups[key].push(rate);
      });

      // Select the best rate for each group (lowest rate)
      const bestRates: RateData[] = [];
      Object.values(rateGroups).forEach(group => {
        const bestRate = group.reduce((best, current) => 
          current.rate < best.rate ? current : best
        );
        bestRates.push(bestRate);
      });

      setRates(bestRates);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error updating rates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update rates when inputs change
  useEffect(() => {
    updateRates();
  }, [purchasePrice, downPayment, transactionType, activeTab, provinceFilter, termFilter]);

  // Set up real-time updates for rate changes
  useEffect(() => {
    const channel = supabase
      .channel('mortgage-rates-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mortgage_rates'
        },
        () => {
          console.log('Mortgage rates updated, refreshing calculator...');
          updateRates();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [transactionType, purchasePrice, downPayment, activeTab, provinceFilter, termFilter]);

  const handleInputChange = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  // Get available terms - if termFilter is specified, only show that term
  const availableTerms = termFilter ? [termFilter] : ["2-yr", "3-yr", "5-yr"];

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">Find Your Best Rate</CardTitle>
            <p className="text-muted-foreground mt-1">
              Live rates updated automatically
              {isLoading && (
                <span className="inline-flex items-center ml-2 text-primary">
                  <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                  Loading rates...
                </span>
              )}
              <span className="block text-xs text-muted-foreground/70 mt-1">
                Last updated: {lastUpdated.toLocaleTimeString()}
                {provinceFilter && provinceFilter !== 'all' && (
                  <span className="ml-2 text-primary">• Showing {provinceFilter} rates</span>
                )}
                {termFilter && (
                  <span className="ml-2 text-primary">• {termFilter} term only</span>
                )}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={updateRates}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="grid w-fit grid-cols-2">
                <TabsTrigger value="best-market" className="text-sm">Best market rates</TabsTrigger>
                <TabsTrigger value="best-bank" className="text-sm">Best bank rates</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Calculator Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="transaction-type" className="text-sm font-medium">Transaction type</Label>
            <Select 
              value={transactionType} 
              onValueChange={(value) => handleInputChange(setTransactionType, value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buying">Buying a home</SelectItem>
                <SelectItem value="refinancing">Refinancing</SelectItem>
                <SelectItem value="renewal">Renewal</SelectItem>
                <SelectItem value="heloc">HELOC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="purchase-price" className="text-sm font-medium">Purchase price</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="purchase-price"
                type="text"
                value={purchasePrice.toLocaleString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
                  handleInputChange(setPurchasePrice, value);
                }}
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="down-payment" className="text-sm font-medium">Down payment $</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="down-payment"
                type="text"
                value={downPayment.toLocaleString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
                  handleInputChange(setDownPayment, value);
                }}
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="down-payment-percent" className="text-sm font-medium">%</Label>
            <div className="flex items-center gap-2">
              <Input
                id="down-payment-percent"
                type="number"
                value={downPaymentPercent}
                onChange={(e) => handlePercentChange(parseInt(e.target.value) || 0)}
                className="w-16"
              />
              <div className="text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 6L21 6"/>
                  <path d="M8 12L21 12"/>
                  <path d="M8 18L21 18"/>
                  <path d="M3 6L3.01 6"/>
                  <path d="M3 12L3.01 12"/>
                  <path d="M3 18L3.01 18"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Results */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Term</h3>
            <div className="flex gap-8 text-sm font-medium">
              <span>Fixed</span>
              <span>Variable</span>
            </div>
          </div>

          {availableTerms.map((term) => {
            const fixedRate = rates.find(r => r.term === term && r.type === "fixed");
            const variableRate = rates.find(r => r.term === term && r.type === "variable");

            return (
              <div key={term} className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">{term}</span>
                    <button className="block text-primary text-sm hover:underline">
                      compare all rates
                    </button>
                  </div>
                  {isLoading ? (
                    <div className="text-center space-y-2">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-8 w-16" />
                    </div>
                  ) : fixedRate ? (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{(fixedRate.rate * 100).toFixed(2)}%</div>
                      <div className="flex items-center gap-2 mt-2">
                        {fixedRate.lenderType === "home" || fixedRate.lenderType !== "bank" ? (
                          <Home className="h-4 w-4" />
                        ) : (
                          <Building2 className="h-4 w-4" />
                        )}
                        <span className="text-sm">{fixedRate.lender}</span>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          inquire
                        </Button>
                      </div>
                      <button className="text-sm text-muted-foreground hover:underline mt-1">
                        More details +
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      No rates available
                    </div>
                  )}
                </div>

                {isLoading ? (
                  <div className="text-center lg:border-l lg:pl-4 space-y-2">
                    <Skeleton className="h-8 w-20 mx-auto" />
                    <Skeleton className="h-4 w-24 mx-auto" />
                    <Skeleton className="h-6 w-32 mx-auto" />
                    <Skeleton className="h-8 w-16 mx-auto" />
                  </div>
                ) : variableRate ? (
                  <div className="text-center lg:border-l lg:pl-4">
                    <div className="text-2xl font-bold text-primary">{(variableRate.rate * 100).toFixed(2)}%</div>
                    {variableRate.prime && (
                      <div className="text-sm text-muted-foreground">{variableRate.prime}</div>
                    )}
                    <div className="flex items-center justify-center gap-2 mt-2">
                      {variableRate.lenderType === "home" || variableRate.lenderType !== "bank" ? (
                        <Home className="h-4 w-4" />
                      ) : (
                        <Building2 className="h-4 w-4" />
                      )}
                      <span className="text-sm">{variableRate.lender}</span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        inquire
                      </Button>
                    </div>
                    <button className="text-sm text-muted-foreground hover:underline mt-1">
                      More details +
                    </button>
                  </div>
                ) : (
                  <div className="text-center lg:border-l lg:pl-4 text-muted-foreground">
                    No rates available
                  </div>
                )}
              </div>
            );
          })}

          <div className="text-center pt-4">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
              <Plus className="h-4 w-4 mr-2" />
              show more
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
