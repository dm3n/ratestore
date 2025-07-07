
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Home, Building2, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
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

interface BankRateData {
  bankName: string;
  bestFixedRate: RateData | null;
  bestVariableRate: RateData | null;
}

interface InteractiveRateCalculatorProps {
  defaultTransactionType?: string;
  provinceFilter?: string;
  termFilter?: string;
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
  const [bankRates, setBankRates] = useState<BankRateData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());

  // Big 5 Canadian banks
  const big5Banks = [
    { name: 'RBC', searchTerms: ['rbc', 'royal bank'] },
    { name: 'TD', searchTerms: ['td', 'td canada trust'] },
    { name: 'Scotiabank', searchTerms: ['scotiabank', 'scotia'] },
    { name: 'BMO', searchTerms: ['bmo', 'bank of montreal'] },
    { name: 'CIBC', searchTerms: ['cibc'] }
  ];

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

  // Toggle expanded state for a term
  const toggleTermExpansion = (term: string) => {
    setExpandedTerms(prev => {
      const newSet = new Set(prev);
      if (newSet.has(term)) {
        newSet.delete(term);
      } else {
        newSet.add(term);
      }
      return newSet;
    });
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

      // Filter for Big 5 banks if termFilter is provided (indicating this is for bank rates page)
      let filteredRates = transformedRates;
      if (termFilter) {
        filteredRates = transformedRates.filter(rate => 
          big5Banks.some(bank => 
            bank.searchTerms.some(term => 
              rate.lender.toLowerCase().includes(term)
            )
          )
        );
      } else if (activeTab === "best-bank") {
        filteredRates = transformedRates.filter(rate => rate.lenderType === 'bank');
      }

      // Process Big 5 bank rates for preset boxes
      if (termFilter) {
        const bankRatesData: BankRateData[] = big5Banks.map(bank => {
          const bankRates = filteredRates.filter(rate => 
            bank.searchTerms.some(term => 
              rate.lender.toLowerCase().includes(term)
            )
          );

          const fixedRates = bankRates.filter(rate => rate.type === 'fixed');
          const variableRates = bankRates.filter(rate => rate.type === 'variable');

          return {
            bankName: bank.name,
            bestFixedRate: fixedRates.length > 0 ? fixedRates.reduce((best, current) => 
              current.rate < best.rate ? current : best
            ) : null,
            bestVariableRate: variableRates.length > 0 ? variableRates.reduce((best, current) => 
              current.rate < best.rate ? current : best
            ) : null
          };
        });

        setBankRates(bankRatesData);
      }

      setRates(filteredRates);
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

  // Group rates by term and type
  const groupedRates = availableTerms.reduce((acc, term) => {
    const termRates = rates.filter(r => r.term === term);
    const fixedRates = termRates.filter(r => r.type === 'fixed').sort((a, b) => a.rate - b.rate);
    const variableRates = termRates.filter(r => r.type === 'variable').sort((a, b) => a.rate - b.rate);
    
    acc[term] = { fixed: fixedRates, variable: variableRates };
    return acc;
  }, {} as Record<string, { fixed: RateData[], variable: RateData[] }>);

  // Helper function to get visible rates (with show more/less functionality)
  const getVisibleRates = (ratesList: RateData[], term: string, type: 'fixed' | 'variable') => {
    const key = `${term}-${type}`;
    const isExpanded = expandedTerms.has(key);
    return isExpanded ? ratesList : ratesList.slice(0, 3);
  };

  // Helper function to check if show more button should be displayed
  const shouldShowMoreButton = (ratesList: RateData[], term: string, type: 'fixed' | 'variable') => {
    const key = `${term}-${type}`;
    return ratesList.length > 3 && !expandedTerms.has(key);
  };

  // Helper function to check if show less button should be displayed
  const shouldShowLessButton = (ratesList: RateData[], term: string, type: 'fixed' | 'variable') => {
    const key = `${term}-${type}`;
    return ratesList.length > 3 && expandedTerms.has(key);
  };

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
                  <span className="ml-2 text-primary">• Top 5 banks only</span>
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
            {!termFilter && (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                <TabsList className="grid w-fit grid-cols-2">
                  <TabsTrigger value="best-market" className="text-sm">Best market rates</TabsTrigger>
                  <TabsTrigger value="best-bank" className="text-sm">Best bank rates</TabsTrigger>
                </TabsList>
              </Tabs>
            )}
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

        {/* Big 5 Banks Preset Boxes - Only show when termFilter is active */}
        {termFilter && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Big 5 Banks - Best Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {big5Banks.map((bank) => {
                const bankData = bankRates.find(br => br.bankName === bank.name);
                return (
                  <Card key={bank.name} className="border-2 border-blue-100">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        {bank.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Fixed Rate</div>
                        {isLoading ? (
                          <Skeleton className="h-8 w-20" />
                        ) : bankData?.bestFixedRate ? (
                          <div className="text-2xl font-bold text-primary">
                            {(bankData.bestFixedRate.rate * 100).toFixed(2)}%
                          </div>
                        ) : (
                          <div className="text-sm text-muted-foreground">No rates available</div>
                        )}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Variable Rate</div>
                        {isLoading ? (
                          <Skeleton className="h-8 w-20" />
                        ) : bankData?.bestVariableRate ? (
                          <div>
                            <div className="text-2xl font-bold text-primary">
                              {(bankData.bestVariableRate.rate * 100).toFixed(2)}%
                            </div>
                            {bankData.bestVariableRate.prime && (
                              <div className="text-xs text-muted-foreground">
                                {bankData.bestVariableRate.prime}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-sm text-muted-foreground">No rates available</div>
                        )}
                      </div>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Rate Results */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {termFilter ? "All Big 5 Bank Rates by Term" : "Available Rates"}
            </h3>
            <div className="flex gap-8 text-sm font-medium">
              <span>Fixed</span>
              <span>Variable</span>
            </div>
          </div>

          {availableTerms.map((term) => {
            const termData = groupedRates[term];
            if (!termData) return null;

            return (
              <div key={term} className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xl font-bold">{term}</span>
                    <button className="block text-primary text-sm hover:underline">
                      compare all {term} rates
                    </button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Fixed Rates */}
                  <div>
                    <h4 className="font-semibold mb-4 text-center">Fixed Rates</h4>
                    {isLoading ? (
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <Skeleton className="h-8 w-8 rounded-full" />
                              <Skeleton className="h-4 w-24" />
                            </div>
                            <Skeleton className="h-6 w-16" />
                          </div>
                        ))}
                      </div>
                    ) : termData.fixed.length > 0 ? (
                      <div className="space-y-3">
                        {getVisibleRates(termData.fixed, term, 'fixed').map((rate, index) => (
                          <div key={rate.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                {rate.lenderType === "bank" ? (
                                  <Building2 className="h-4 w-4 text-blue-600" />
                                ) : (
                                  <Home className="h-4 w-4 text-green-600" />
                                )}
                                <span className="text-sm font-medium">{rate.lender}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-primary">
                                {(rate.rate * 100).toFixed(2)}%
                              </span>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                inquire
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        {/* Show More/Less buttons */}
                        <div className="text-center">
                          {shouldShowMoreButton(termData.fixed, term, 'fixed') && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => toggleTermExpansion(`${term}-fixed`)}
                              className="text-primary hover:text-primary/80"
                            >
                              <ChevronDown className="h-4 w-4 mr-1" />
                              Show {termData.fixed.length - 3} more
                            </Button>
                          )}
                          {shouldShowLessButton(termData.fixed, term, 'fixed') && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => toggleTermExpansion(`${term}-fixed`)}
                              className="text-primary hover:text-primary/80"
                            >
                              <ChevronUp className="h-4 w-4 mr-1" />
                              Show less
                            </Button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground py-8">
                        No fixed rates available for {term}
                      </div>
                    )}
                  </div>

                  {/* Variable Rates */}
                  <div className="lg:border-l lg:pl-8">
                    <h4 className="font-semibold mb-4 text-center">Variable Rates</h4>
                    {isLoading ? (
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <Skeleton className="h-8 w-8 rounded-full" />
                              <Skeleton className="h-4 w-24" />
                            </div>
                            <Skeleton className="h-6 w-16" />
                          </div>
                        ))}
                      </div>
                    ) : termData.variable.length > 0 ? (
                      <div className="space-y-3">
                        {getVisibleRates(termData.variable, term, 'variable').map((rate, index) => (
                          <div key={rate.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                {rate.lenderType === "bank" ? (
                                  <Building2 className="h-4 w-4 text-blue-600" />
                                ) : (
                                  <Home className="h-4 w-4 text-green-600" />
                                )}
                                <span className="text-sm font-medium">{rate.lender}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <span className="text-lg font-bold text-primary block">
                                  {(rate.rate * 100).toFixed(2)}%
                                </span>
                                {rate.prime && (
                                  <span className="text-xs text-muted-foreground">{rate.prime}</span>
                                )}
                              </div>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                inquire
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        {/* Show More/Less buttons */}
                        <div className="text-center">
                          {shouldShowMoreButton(termData.variable, term, 'variable') && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => toggleTermExpansion(`${term}-variable`)}
                              className="text-primary hover:text-primary/80"
                            >
                              <ChevronDown className="h-4 w-4 mr-1" />
                              Show {termData.variable.length - 3} more
                            </Button>
                          )}
                          {shouldShowLessButton(termData.variable, term, 'variable') && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => toggleTermExpansion(`${term}-variable`)}
                              className="text-primary hover:text-primary/80"
                            >
                              <ChevronUp className="h-4 w-4 mr-1" />
                              Show less
                            </Button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground py-8">
                        No variable rates available for {term}
                      </div>
                    )}
                  </div>
                </div>
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
