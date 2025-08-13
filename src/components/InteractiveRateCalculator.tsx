
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
  const [lenderFilter, setLenderFilter] = useState("");
  const [activeTab, setActiveTab] = useState("best-market");
  const [rates, setRates] = useState<RateData[]>([]);
  const [allRates, setAllRates] = useState<RateData[]>([]);
  const [bankRates, setBankRates] = useState<BankRateData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [showMoreRates, setShowMoreRates] = useState<{[key: string]: boolean}>({});

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

  // Fetch rates from database based on current inputs
  const updateRates = async () => {
    setIsLoading(true);
    console.log('Fetching rates for transaction type:', transactionType, 'down payment %:', downPaymentPercent);
    
    try {
      const loanAmount = purchasePrice - downPayment;
      const loanToValue = loanAmount / purchasePrice;
      const downPaymentDecimal = downPaymentPercent / 100;
      
      console.log('Query parameters:', {
        transactionType,
        downPaymentDecimal,
        loanToValue,
        purchasePrice,
        downPayment
      });
      
      let query = supabase
        .from('rate_sheet_rates')
        .select('*')
        .eq('active', true)
        .eq('transaction_type', transactionType);

      // Apply basic filters
      if (provinceFilter && provinceFilter !== 'all') {
        query = query.eq('province', provinceFilter);
      }
      if (termFilter) {
        const years = Number(termFilter.split('-')[0]);
        if (!isNaN(years)) query = query.eq('term_years', years);
      }

      // Bracket matching: match either LTV or Down Payment brackets
      const orFilter = `and(bracket_type.eq.ltv,bracket_min.lte.${loanToValue},bracket_max.gte.${loanToValue}),and(bracket_type.eq.down_payment,bracket_min.lte.${downPaymentDecimal},bracket_max.gte.${downPaymentDecimal})`;
      // @ts-ignore - supabase-js or() typing
      query = query.or(orFilter);

      query = query.order('rate', { ascending: true });

      const { data: dbRates, error } = await query;

      if (error) {
        console.error('Error fetching rates:', error);
        return;
      }

      console.log('Fetched rates from database:', dbRates?.length || 0, 'rates');

      const transformedRates: RateData[] = (dbRates || []).map((row: any) => ({
        id: row.id,
        lender: row.lender || 'Lender',
        rate: Number(row.rate),
        lenderType: ['RBC','TD','Scotiabank','BMO','CIBC'].some((b) => (row.lender || '').toLowerCase().includes(b.toLowerCase())) ? 'bank' : 'home',
        term: row.term_years ? `${row.term_years}-yr` : 'Open',
        type: (row.rate_type as any) || 'fixed',
        prime: null,
        minDownPayment: row.bracket_type === 'down_payment' ? Number(row.bracket_min ?? 0) : 0,
        maxLoanToValue: row.bracket_type === 'ltv' ? Number(row.bracket_max ?? 1) : 1,
        transactionTypes: row.transaction_type ? [row.transaction_type] : [],
      }));

      console.log('Transformed rates:', transformedRates.length);

      // Filter by lender if specified
      let filteredRates = transformedRates;
      if (lenderFilter) {
        filteredRates = transformedRates.filter(rate => 
          rate.lender.toLowerCase().includes(lenderFilter.toLowerCase())
        );
      }

      // Filter for Big 5 banks if termFilter is provided (indicating this is for bank rates page)
      if (termFilter) {
        filteredRates = filteredRates.filter(rate => 
          big5Banks.some(bank => 
            bank.searchTerms.some(term => 
              rate.lender.toLowerCase().includes(term)
            )
          )
        );
      } else if (activeTab === "best-bank") {
        filteredRates = filteredRates.filter(rate => rate.lenderType === 'bank');
      }

      console.log('Filtered rates:', filteredRates.length);

      // Store all rates for show more functionality
      setAllRates(filteredRates);

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
        const sortedGroup = group.sort((a, b) => a.rate - b.rate);
        bestRates.push(sortedGroup[0]); // Add the best rate
      });

      setRates(bestRates);
      setLastUpdated(new Date());
      console.log('Set best rates:', bestRates.length);
    } catch (error) {
      console.error('Error updating rates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update rates when inputs change
  useEffect(() => {
    updateRates();
  }, [purchasePrice, downPayment, transactionType, lenderFilter, activeTab, provinceFilter, termFilter]);

  // Set up real-time updates for rate changes
  useEffect(() => {
    const channel = supabase
      .channel('rate-sheet-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rate_sheet_rates'
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
  }, [transactionType, purchasePrice, downPayment, lenderFilter, activeTab, provinceFilter, termFilter]);

  const handleInputChange = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  // Get available terms - if termFilter is specified, only show that term
  // For HELOC, include 1-yr term
  const getAvailableTerms = () => {
    if (termFilter) return [termFilter];
    if (transactionType === "heloc") return ["1-yr", "2-yr", "3-yr", "5-yr"];
    return ["2-yr", "3-yr", "5-yr"];
  };
  const availableTerms = getAvailableTerms();

  // Toggle show more rates for a specific term and type
  const toggleShowMore = (term: string, type: "fixed" | "variable") => {
    const key = `${term}-${type}`;
    console.log('Toggling show more for:', key, 'current state:', showMoreRates[key]);
    setShowMoreRates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Get additional rates for a term and type (excluding the best rate)
  const getAdditionalRates = (term: string, type: "fixed" | "variable") => {
    const termRates = allRates
      .filter(rate => rate.term === term && rate.type === type)
      .sort((a, b) => a.rate - b.rate); // Sort by rate ascending
    
    const bestRate = rates.find(r => r.term === term && r.type === type);
    const additionalRates = termRates.filter(rate => rate.id !== bestRate?.id).slice(0, 5); // Show up to 5 additional rates
    
    console.log(`Additional rates for ${term} ${type}:`, additionalRates.length);
    return additionalRates;
  };

  const renderRateItem = (rate: RateData, isAdditional = false) => (
    <div key={rate.id} className={`${isAdditional ? 'py-3 border-t border-gray-100' : ''}`}>
      <div className="text-center space-y-2">
        <div className={`${isAdditional ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-primary`}>
          {(rate.rate > 0.5 ? rate.rate : rate.rate * 100).toFixed(2)}%
        </div>
        {rate.prime && (
          <div className="text-sm text-muted-foreground">{rate.prime}</div>
        )}
      </div>
      
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-center gap-2 text-sm">
          {rate.lenderType === "home" || rate.lenderType !== "bank" ? (
            <Home className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Building2 className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="font-medium">{rate.lender}</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            inquire
          </Button>
          <button className="text-xs text-muted-foreground hover:underline">
            More details +
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <CardTitle className="text-xl lg:text-2xl font-bold">Find Your Best Rate</CardTitle>
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full lg:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={updateRates}
              disabled={isLoading}
              className="flex items-center gap-2 w-full sm:w-auto"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            {!termFilter && (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="best-market" className="text-xs sm:text-sm">Best market</TabsTrigger>
                  <TabsTrigger value="best-bank" className="text-xs sm:text-sm">Best bank</TabsTrigger>
                </TabsList>
              </Tabs>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Calculator Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="transaction-type" className="text-sm font-medium">Transaction type</Label>
            <Select 
              value={transactionType} 
              onValueChange={(value) => handleInputChange(setTransactionType, value)}
            >
              <SelectTrigger className="bg-background border border-input z-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border border-input shadow-lg z-50">
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

          <div className="space-y-2">
            <Label htmlFor="lender-filter" className="text-sm font-medium">Lender</Label>
            <Input
              id="lender-filter"
              type="text"
              placeholder="Search by lender..."
              value={lenderFilter}
              onChange={(e) => handleInputChange(setLenderFilter, e.target.value)}
            />
          </div>
        </div>

        {/* Big 5 Banks Preset Boxes - Only show when termFilter is active */}
        {termFilter && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Big 5 Banks - Best Rates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
                            {(bankData.bestFixedRate.rate > 0.5 ? bankData.bestFixedRate.rate : bankData.bestFixedRate.rate * 100).toFixed(2)}%
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
                              {(bankData.bestVariableRate.rate > 0.5 ? bankData.bestVariableRate.rate : bankData.bestVariableRate.rate * 100).toFixed(2)}%
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
          <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h3 className="text-lg font-semibold">
              {termFilter ? "All Big 5 Bank Rates by Term" : "Term"}
            </h3>
            <div className="flex gap-4 sm:gap-8 text-sm font-medium">
              <span>Fixed</span>
              <span>Variable</span>
            </div>
          </div>

          {availableTerms.map((term) => {
            const fixedRate = rates.find(r => r.term === term && r.type === "fixed");
            const variableRate = rates.find(r => r.term === term && r.type === "variable");
            const additionalFixedRates = getAdditionalRates(term, "fixed");
            const additionalVariableRates = getAdditionalRates(term, "variable");
            const showMoreFixed = showMoreRates[`${term}-fixed`];
            const showMoreVariable = showMoreRates[`${term}-variable`];

             return (
              <div key={term} className="border rounded-lg bg-white shadow-sm overflow-hidden">
                {/* Term Header */}
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold">{term}</span>
                      <button className="block text-primary text-sm hover:underline mt-1">
                        compare all rates
                      </button>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
                      <span>Fixed</span>
                      <span>Variable</span>
                    </div>
                  </div>
                </div>

                {/* Rate Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                  {/* Fixed Rate Section */}
                  <div className="p-4">
                    <div className="md:hidden text-sm font-medium text-muted-foreground mb-3">Fixed Rate</div>
                    {isLoading ? (
                      <div className="text-center space-y-2">
                        <Skeleton className="h-8 w-20 mx-auto" />
                        <Skeleton className="h-6 w-32 mx-auto" />
                        <Skeleton className="h-8 w-16 mx-auto" />
                      </div>
                    ) : fixedRate ? (
                      <div className="space-y-3">
                        {renderRateItem(fixedRate)}
                        {showMoreFixed && additionalFixedRates.map(rate => 
                          renderRateItem(rate, true)
                        )}
                        {additionalFixedRates.length > 0 && (
                          <div className="text-center pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleShowMore(term, "fixed")}
                              className="text-primary hover:text-primary/80 text-xs"
                            >
                              {showMoreFixed ? (
                                <>
                                  <ChevronUp className="h-3 w-3 mr-1" />
                                  Show less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-3 w-3 mr-1" />
                                  Show {additionalFixedRates.length} more
                                </>
                              )}
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground py-8">
                        No rates available
                      </div>
                    )}
                  </div>

                  {/* Variable Rate Section */}
                  <div className="p-4">
                    <div className="md:hidden text-sm font-medium text-muted-foreground mb-3">Variable Rate</div>
                    {isLoading ? (
                      <div className="text-center space-y-2">
                        <Skeleton className="h-8 w-20 mx-auto" />
                        <Skeleton className="h-4 w-24 mx-auto" />
                        <Skeleton className="h-6 w-32 mx-auto" />
                        <Skeleton className="h-8 w-16 mx-auto" />
                      </div>
                    ) : variableRate ? (
                      <div className="space-y-3">
                        {renderRateItem(variableRate)}
                        {showMoreVariable && additionalVariableRates.map(rate => 
                          renderRateItem(rate, true)
                        )}
                        {additionalVariableRates.length > 0 && (
                          <div className="text-center pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleShowMore(term, "variable")}
                              className="text-primary hover:text-primary/80 text-xs"
                            >
                              {showMoreVariable ? (
                                <>
                                  <ChevronUp className="h-3 w-3 mr-1" />
                                  Show less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-3 w-3 mr-1" />
                                  Show {additionalVariableRates.length} more
                                </>
                              )}
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground py-8">
                        No rates available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </CardContent>
    </Card>
  );
}
