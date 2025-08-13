import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Home, Building2, RefreshCw, ChevronDown, ChevronUp, HelpCircle, AlertTriangle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface APIRate {
  lender: string;
  term: string;
  rate_type: "fixed" | "variable";
  rate: number;
  down_payment_range?: string;
  mortgage_size?: string;
  ltv_range?: string;
  transaction_type: string;
  cmhc_insured?: boolean;
}

interface APIResponse {
  rates: APIRate[];
  rates_by_term: {
    [key: string]: {
      fixed: APIRate[];
      variable: APIRate[];
    };
  };
  criteria: {
    transaction_type: string;
    property_value: number;
    down_payment: number;
    down_payment_percent: number;
    loan_amount: number;
    ltv_percent: number;
    size_category: string;
    dp_category: string;
    ltv_category?: string;
    has_cmhc?: boolean;
  };
  total_rates_found: number;
  last_updated?: string;
}

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
  const [lenderFilter, setLenderFilter] = useState("ALL_LENDERS");
  const [selectedProvince, setSelectedProvince] = useState("ON");
  const [activeTab, setActiveTab] = useState("best-market");
  const [rates, setRates] = useState<RateData[]>([]);
  const [allRates, setAllRates] = useState<RateData[]>([]);
  const [bankRates, setBankRates] = useState<BankRateData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [showMoreRates, setShowMoreRates] = useState<{[key: string]: boolean}>({});
  const [selectedLenderRates, setSelectedLenderRates] = useState<RateData[]>([]);
  const [showLenderDetail, setShowLenderDetail] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [apiError, setApiError] = useState<string | null>(null);
  
  // Big 5 Canadian banks
  const big5Banks = [
    { name: 'RBC', searchTerms: ['rbc', 'royal bank'] },
    { name: 'TD', searchTerms: ['td', 'td canada trust'] },
    { name: 'Scotiabank', searchTerms: ['scotiabank', 'scotia'] },
    { name: 'BMO', searchTerms: ['bmo', 'bank of montreal'] },
    { name: 'CIBC', searchTerms: ['cibc'] }
  ];

  // Direct API call to your Flask API
  const callMortgageRateAPI = async (requestData: any): Promise<APIResponse> => {
    const response = await fetch('https://victorjjma.pythonanywhere.com/api/rates/find-best', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    return response.json();
  };

  // Validate inputs and set error messages
  const validateInputs = () => {
    const errors: string[] = [];
    const dpPercent = (downPayment / purchasePrice) * 100;
    
    if (dpPercent < 5) {
      errors.push("Down payment cannot be less than 5%");
    }
    
    if (transactionType === "buying" && purchasePrice > 1000000 && dpPercent < 20) {
      errors.push("Properties over $1M require minimum 20% down payment");
    }
    
    setValidationErrors(errors);
  };

  // Calculate down payment percentage when dollar amount changes
  useEffect(() => {
    const percent = Math.round((downPayment / purchasePrice) * 100);
    setDownPaymentPercent(Math.min(percent, 100));
    validateInputs();
  }, [downPayment, purchasePrice]);

  // Calculate down payment dollar amount when percentage changes
  const handlePercentChange = (percent: number) => {
    // Enforce minimum 5% down payment
    const validPercent = Math.max(5, Math.min(percent, 100));
    setDownPaymentPercent(validPercent);
    setDownPayment(Math.round((validPercent / 100) * purchasePrice));
  };

  // Transform API rate to internal format
  const transformAPIRate = (rate: APIRate): RateData => ({
    id: `${rate.lender}-${rate.term}-${rate.rate_type}`,
    lender: rate.lender,
    rate: rate.rate,
    lenderType: ['RBC','TD','Scotiabank','BMO','CIBC'].some((b) => rate.lender.toLowerCase().includes(b.toLowerCase())) ? 'bank' : 'home',
    term: rate.term,
    type: rate.rate_type,
    prime: undefined,
    minDownPayment: 0,
    maxLoanToValue: 1,
    transactionTypes: [rate.transaction_type],
  });

  // Fetch rates from API based on current inputs
  const updateRates = async () => {
    setIsLoading(true);
    setApiError(null);
    
    console.log('Fetching rates for:', {
      transactionType,
      purchasePrice,
      downPayment,
      downPaymentPercent
    });
    
    try {
      // Map transaction type to API format
      const apiTransactionType = transactionType === 'buying' ? 'purchases' : 
                                transactionType === 'renewals' ? 'renewals' :
                                transactionType;

      const requestData = {
        transaction_type: apiTransactionType,
        property_value: purchasePrice,
        down_payment: downPayment,
        province: selectedProvince || 'ON',
        // Don't specify terms - let the API return what's available
        rate_types: ['fixed', 'variable'],
        has_cmhc: downPaymentPercent < 20
      };

      console.log('API Request:', requestData);
      
      const apiResponse = await callMortgageRateAPI(requestData);
      console.log('API Response:', apiResponse);
      console.log('API Response rates count:', apiResponse.rates?.length);
      console.log('API Response sample rates:', apiResponse.rates?.slice(0, 3));

      if (!apiResponse.rates || apiResponse.rates.length === 0) {
        console.log('No rates found from API');
        setRates([]);
        setAllRates([]);
        setBankRates([]);
        setLastUpdated(new Date());
        return;
      }

      // Transform API rates to internal format
      let transformedRates = apiResponse.rates.map(transformAPIRate);
      console.log('Transformed rates count:', transformedRates.length);
      console.log('Transformed rates sample:', transformedRates.slice(0, 3));
      console.log('Unique terms in transformed rates:', Array.from(new Set(transformedRates.map(rate => rate.term))));
      console.log('Transformed rates:', transformedRates);

      // Filter by lender if specified
      if (lenderFilter && lenderFilter !== "ALL_LENDERS") {
        transformedRates = transformedRates.filter(rate => 
          rate.lender.toLowerCase().includes(lenderFilter.toLowerCase())
        );
      }

      // Filter for Big 5 banks if termFilter is provided
      if (termFilter) {
        transformedRates = transformedRates.filter(rate => 
          big5Banks.some(bank => 
            bank.searchTerms.some(term => 
              rate.lender.toLowerCase().includes(term)
            )
          )
        );
      } else if (activeTab === "best-bank") {
        transformedRates = transformedRates.filter(rate => rate.lenderType === 'bank');
      }

      // Store all rates
      setAllRates(transformedRates);

      // Process Big 5 bank rates for preset boxes
      if (termFilter) {
        const bankRatesData: BankRateData[] = big5Banks.map(bank => {
          const bankRates = transformedRates.filter(rate => 
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
      transformedRates.forEach(rate => {
        const key = `${rate.term}-${rate.type}`;
        if (!rateGroups[key]) {
          rateGroups[key] = [];
        }
        rateGroups[key].push(rate);
      });

      console.log('Rate groups:', Object.keys(rateGroups));
      console.log('Rate groups detail:', rateGroups);

      // Select the best rate for each group (lowest rate)
      const bestRates: RateData[] = [];
      Object.values(rateGroups).forEach(group => {
        const sortedGroup = group.sort((a, b) => a.rate - b.rate);
        bestRates.push(sortedGroup[0]);
      });

      console.log('Final bestRates count:', bestRates.length);
      console.log('Final bestRates terms:', bestRates.map(rate => `${rate.term}-${rate.type}`));
      console.log('Final bestRates:', bestRates);
      setRates(bestRates);
      setLastUpdated(new Date());
      
    } catch (error) {
      console.error('Error fetching rates:', error);
      setApiError(error instanceof Error ? error.message : 'Failed to fetch rates');
      
      // Set sample rates on error for development
      const sampleRates: RateData[] = [
        {
          id: 'td-5-fixed',
          lender: 'TD',
          rate: 4.24,
          lenderType: 'bank',
          term: '5',
          type: 'fixed',
          minDownPayment: 0.05,
          maxLoanToValue: 0.95,
          transactionTypes: [transactionType]
        },
        {
          id: 'rbc-5-fixed',
          lender: 'RBC',
          rate: 4.29,
          lenderType: 'bank',
          term: '5',
          type: 'fixed',
          minDownPayment: 0.05,
          maxLoanToValue: 0.95,
          transactionTypes: [transactionType]
        }
      ];
      
      setRates(sampleRates);
      setAllRates(sampleRates);
    } finally {
      setIsLoading(false);
    }
  };

  // Update rates when inputs change
  useEffect(() => {
    updateRates();
  }, [purchasePrice, downPayment, transactionType, lenderFilter, selectedProvince, activeTab]);

  const handleInputChange = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  // Get available terms - only show terms that have actual data from API
  const getAvailableTerms = (): string[] => {
    if (termFilter) return [termFilter];
    
    // Get unique terms from current rates - only show if we have actual data
    const availableTermsFromRates = Array.from(new Set(rates.map(rate => rate.term))).sort() as string[];
    
    // Only return terms if we have actual rates, otherwise return empty array
    return availableTermsFromRates;
  };

  const availableTerms = getAvailableTerms();

  // Toggle show more rates for a specific term and type
  const toggleShowMore = (term: string, type: "fixed" | "variable") => {
    const key = `${term}-${type}`;
    setShowMoreRates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Get additional rates for a term and type (excluding the best rate)
  const getAdditionalRates = (term: string, type: "fixed" | "variable") => {
    const termRates = allRates
      .filter(rate => rate.term === term && rate.type === type)
      .sort((a, b) => a.rate - b.rate);
    
    const bestRate = rates.find(r => r.term === term && r.type === type);
    const additionalRates = termRates.filter(rate => rate.id !== bestRate?.id).slice(0, 5);
    
    return additionalRates;
  };

  // Handle clicking on a rate to show all rates from that lender
  const handleRateClick = (lender: string) => {
    const lenderRates = allRates
      .filter(rate => rate.lender.toLowerCase() === lender.toLowerCase())
      .sort((a, b) => a.rate - b.rate);
    
    setSelectedLenderRates(lenderRates);
    setShowLenderDetail(true);
  };

  const renderRateItem = (rate: RateData, isAdditional = false, isClickable = true) => (
    <div 
      key={rate.id} 
      className={`${isAdditional ? 'py-3 border-t border-gray-100' : ''} ${isClickable ? 'cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors' : ''}`}
      onClick={isClickable ? () => handleRateClick(rate.lender) : undefined}
    >
      <div className="text-center space-y-2">
        <div className={`${isAdditional ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-primary`}>
          {rate.rate.toFixed(2)}%
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
          <span className="font-medium text-primary">{rate.lender}</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Get This Rate
          </Button>
          {isClickable && (
            <button className="text-xs text-primary hover:underline">
              View all rates from {rate.lender} →
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <Card className="border-2 border-primary/20 shadow-lg" data-calculator>
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <CardTitle className="text-xl lg:text-2xl font-bold">Find Your Best Rate</CardTitle>
              <p className="text-muted-foreground mt-1">
                Live rates updated automatically from TD mortgage data
                {isLoading && (
                  <span className="inline-flex items-center ml-2 text-primary">
                    <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                    Loading rates...
                  </span>
                )}
                <span className="block text-xs text-muted-foreground/70 mt-1">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                  {selectedProvince && selectedProvince !== 'all' && (
                    <span className="ml-2 text-primary">• Showing {selectedProvince} rates</span>
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
          {/* API Error Display */}
          {apiError && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                API Error: {apiError}
                <br />
                <span className="text-sm">Showing sample data for development.</span>
              </AlertDescription>
            </Alert>
          )}

          {/* Validation Errors */}
          {validationErrors.length > 0 && (
            <Alert className="mb-6 border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <ul className="list-disc list-inside space-y-1">
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {/* Calculator Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
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
                  <SelectItem value="renewals">Renewal</SelectItem>
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
              <div className="flex items-center gap-2">
                <Label htmlFor="down-payment-percent" className="text-sm font-medium">Down Payment %</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-md z-50 p-4">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm mb-1">What is Loan-to-Value (LTV)?</p>
                        <p className="text-xs text-muted-foreground">LTV represents the ratio of your mortgage loan to your property's value.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-xs mb-1">How to Calculate LTV:</p>
                        <p className="text-xs bg-muted p-2 rounded">LTV = (Loan Amount ÷ Property Value) × 100</p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-xs mb-1">Example:</p>
                        <p className="text-xs">Property Value: $500,000<br/>
                        Down Payment: $100,000 (20%)<br/>
                        Loan Amount: $400,000<br/>
                        <span className="font-medium">LTV = 80%</span></p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-xs mb-1">Important Notes:</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                           <li>• Higher LTV = Higher risk for lenders</li>
                           <li>• LTV over 80% typically requires mortgage insurance</li>
                          <li>• Lower LTV often means better interest rates</li>
                          <li>• Minimum 5% down payment (20% for rentals)</li>
                        </ul>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  id="down-payment-percent"
                  type="number"
                  min="5"
                  max="100"
                  value={downPaymentPercent}
                  onChange={(e) => handlePercentChange(parseInt(e.target.value) || 5)}
                  className="w-16"
                />
                <span className="text-xs text-muted-foreground">%</span>
              </div>
              <div className="text-xs text-muted-foreground">
                LTV: {((purchasePrice - downPayment) / purchasePrice * 100).toFixed(1)}%
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="province" className="text-sm font-medium">Province</Label>
              <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                <SelectTrigger className="bg-background border border-input z-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-input shadow-lg z-50">
                  <SelectItem value="all">All Provinces</SelectItem>
                  <SelectItem value="ON">Ontario</SelectItem>
                  <SelectItem value="BC">British Columbia</SelectItem>
                  <SelectItem value="AB">Alberta</SelectItem>
                  <SelectItem value="QC">Quebec</SelectItem>
                  <SelectItem value="NS">Nova Scotia</SelectItem>
                  <SelectItem value="NB">New Brunswick</SelectItem>
                  <SelectItem value="MB">Manitoba</SelectItem>
                  <SelectItem value="SK">Saskatchewan</SelectItem>
                  <SelectItem value="PE">Prince Edward Island</SelectItem>
                  <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                  <SelectItem value="YT">Yukon</SelectItem>
                  <SelectItem value="NT">Northwest Territories</SelectItem>
                  <SelectItem value="NU">Nunavut</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lender-filter" className="text-sm font-medium">Lender</Label>
              <Select value={lenderFilter} onValueChange={setLenderFilter}>
                <SelectTrigger className="bg-background border border-input z-50">
                  <SelectValue placeholder="All lenders" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-input shadow-lg z-50">
                  <SelectItem value="ALL_LENDERS">All lenders</SelectItem>
                  {Array.from(new Set(allRates.map(rate => rate.lender))).sort().map((lender) => (
                    <SelectItem key={lender} value={lender}>{lender}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Lender Detail Modal */}
          {showLenderDetail && selectedLenderRates.length > 0 && (
            <Card className="mb-8 border-2 border-primary">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">All Rates from {selectedLenderRates[0].lender}</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowLenderDetail(false)}>
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedLenderRates.map((rate) => (
                    <Card key={rate.id} className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {rate.rate.toFixed(2)}%
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{rate.term} Year</div>
                        <div className="text-sm text-muted-foreground mb-4 capitalize">{rate.type}</div>
                        <Button size="sm" className="w-full">
                          Get This Rate
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

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
                              {bankData.bestFixedRate.rate.toFixed(2)}%
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
                                {bankData.bestVariableRate.rate.toFixed(2)}%
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
                {termFilter ? "All Big 5 Bank Rates by Term" : "Best Available Rates"}
                {rates.length > 0 && (
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    ({rates.length} rates found)
                  </span>
                )}
              </h3>
              <div className="flex gap-4 sm:gap-8 text-sm font-medium">
                <span>Fixed</span>
                <span>Variable</span>
              </div>
            </div>

            {rates.length === 0 && !isLoading ? (
              <div className="text-center py-12 text-muted-foreground">
                <div className="text-lg font-medium mb-2">No rates available</div>
                <p className="text-sm">Try adjusting your criteria or refresh the rates.</p>
              </div>
            ) : (
              availableTerms.map((term) => {
                const fixedRate = rates.find(r => r.term === term && r.type === "fixed");
                const variableRate = rates.find(r => r.term === term && r.type === "variable");
                const additionalFixedRates = getAdditionalRates(term, "fixed");
                const additionalVariableRates = getAdditionalRates(term, "variable");
                const showMoreFixed = showMoreRates[`${term}-fixed`];
                const showMoreVariable = showMoreRates[`${term}-variable`];

                // Only show terms that have at least one rate
                if (!fixedRate && !variableRate && !isLoading) {
                  return null;
                }

                return (
                  <div key={term} className="border rounded-lg bg-white shadow-sm overflow-hidden">
                    {/* Term Header */}
                    <div className="bg-gray-50 px-4 py-3 border-b">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold">{term} Year</span>
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
                            No fixed rates available
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
                            No variable rates available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}