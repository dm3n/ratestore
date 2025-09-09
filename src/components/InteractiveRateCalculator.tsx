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
import { useExternalRatesOptimized } from "@/hooks/useExternalRatesOptimized";

interface InteractiveRateCalculatorProps {
  defaultTransactionType?: 'purchase' | 'refinance' | 'renewal' | 'heloc';
  provinceFilter?: string;
  termFilter?: string;
}

type Province = "ON" | "BC" | "AB" | "QC" | "SK" | "MB" | "NB" | "NS" | "PE" | "NL";

export function InteractiveRateCalculator({ 
  defaultTransactionType = "purchase",
  provinceFilter,
  termFilter 
}: InteractiveRateCalculatorProps) {
  console.log('🧮 [InteractiveRateCalculator] Component initialized with props:', {
    defaultTransactionType,
    provinceFilter,
    termFilter
  });

  const [transactionType, setTransactionType] = useState<'purchase' | 'refinance' | 'renewal' | 'heloc'>(defaultTransactionType || "purchase");
  const [purchasePrice, setPurchasePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(20000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);
  const [selectedProvince, setSelectedProvince] = useState<Province>(provinceFilter as Province || "ON");
  const [selectedTerm, setSelectedTerm] = useState<number | undefined>(termFilter ? parseInt(termFilter) * 12 : undefined); // Convert years to months
  const [amortization, setAmortization] = useState<number>(25);
  const [activeTab, setActiveTab] = useState("best-market");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Build filters for external rates hook
  const rateFilters = {
    transactionType,
    province: selectedProvince,
    city: 'All', // Default to all cities
    term: transactionType === 'heloc' ? undefined : selectedTerm,
    amortization: transactionType === 'heloc' ? undefined : amortization
  };

  console.log('🔧 [InteractiveRateCalculator] Current rate filters:', rateFilters);

  const { rates, isLoading, error, refetch } = useExternalRatesOptimized(rateFilters);

  // Calculate derived values from rates
  const bestRate = rates.length > 0 ? rates[0] : null;
  const bigBankRates = rates.filter(rate => rate.lender.includes('RBC') || rate.lender.includes('TD') || rate.lender.includes('BMO') || rate.lender.includes('Scotiabank') || rate.lender.includes('CIBC'));
  const alternativeLenderRates = rates.filter(rate => !bigBankRates.some(bank => bank.id === rate.id));
  const lastUpdated = new Date();

  console.log('📊 [InteractiveRateCalculator] Hook results:', {
    ratesCount: rates.length,
    isLoading,
    error,
    bestRate: bestRate ? `${bestRate.lender} - ${bestRate.rate}` : 'None',
    bigBankCount: bigBankRates.length,
    altLenderCount: alternativeLenderRates.length
  });

  // Validate inputs and set error messages
  const validateInputs = () => {
    const errors: string[] = [];
    const dpPercent = (downPayment / purchasePrice) * 100;
    
    if (dpPercent < 5) {
      errors.push("Down payment cannot be less than 5%");
    }
    
    if (transactionType === "purchase" && purchasePrice > 1000000 && dpPercent < 20) {
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

  // Log when transaction type changes to trigger new rate fetch
  useEffect(() => {
    console.log('🔄 [InteractiveRateCalculator] Transaction type changed to:', transactionType);
    console.log('🎯 [InteractiveRateCalculator] This should trigger new rate fetch from external rates');
  }, [transactionType]);

  // Calculate down payment dollar amount when percentage changes
  const handlePercentChange = (percent: number) => {
    const validPercent = Math.max(5, Math.min(percent, 100));
    setDownPaymentPercent(validPercent);
    setDownPayment(Math.round((validPercent / 100) * purchasePrice));
  };

  // Get available terms - need to extract from formatted rates
  const getAvailableTerms = (): Array<{ value: number; label: string }> => {
    if (termFilter) return [{ value: parseInt(termFilter) * 12, label: `${termFilter} Year` }];
    
    // For now, return standard terms since rates are formatted strings
    const standardTerms = [12, 24, 36, 48, 60, 84, 120]; // months
    return standardTerms.map(months => ({
      value: months,
      label: months >= 12 ? `${Math.floor(months / 12)} Year` : `${months} Months`
    }));
  };

  const handleInputChange = (setter: (value: any) => void, value: any) => {
    console.log('📝 [InteractiveRateCalculator] Input change:', { setter: setter.name, value });
    setter(value);
  };

  const handleRefetch = () => {
    console.log('🔄 [InteractiveRateCalculator] Manual refetch triggered');
    refetch();
  };

  const renderRateItem = (rate: any, isAdditional = false, isClickable = false) => (
    <div 
      key={rate.id} 
      className={`${isAdditional ? 'py-3 border-t border-gray-100' : ''} ${isClickable ? 'cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors' : ''}`}
    >
      <div className="text-center space-y-2">
        <div className={`${isAdditional ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-primary`}>
          {rate.rate}
        </div>
      </div>
      
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-center gap-2 text-sm">
          {rate.isBigBank ? (
            <Building2 className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Home className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="font-medium text-primary">{rate.lender}</span>
        </div>
        
        <div className="text-center text-xs text-muted-foreground mb-2">
          {rate.term} • {rate.type}
        </div>
        
        <div className="flex flex-col gap-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Get This Rate
          </Button>
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
                {isLoading && (
                  <span className="inline-flex items-center ml-2 text-primary">
                    <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                    Loading rates...
                  </span>
                )}
                <span className="block text-xs text-muted-foreground/70 mt-1">
                  Last updated: {lastUpdated?.toLocaleTimeString() || 'Never'}
                  {selectedProvince && (
                    <span className="ml-2 text-primary">• Showing {selectedProvince} rates</span>
                  )}
                  {termFilter && (
                    <span className="ml-2 text-primary">• Filtered by term</span>
                  )}
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full lg:w-auto">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRefetch}
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
          {/* Error Display */}
          {error && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                Error: {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Validation Errors */}
          {validationErrors.length > 0 && (
            <Alert className="mb-6 border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <ul className="list-disc list-inside">
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
          
          {/* Input Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="transaction-type">Transaction Type</Label>
              <Select value={transactionType} onValueChange={(value) => {
                console.log('🔄 [InteractiveRateCalculator] Transaction type changing from', transactionType, 'to', value);
                setTransactionType(value as any);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="purchase">Purchase</SelectItem>
                  <SelectItem value="refinance">Refinance</SelectItem>
                  <SelectItem value="renewal">Renewal</SelectItem>
                  <SelectItem value="heloc">HELOC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purchase-price">
                {transactionType === "purchase" ? "Purchase Price" : "Property Value"}
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="purchase-price"
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => handleInputChange(setPurchasePrice, Number(e.target.value))}
                  className="pl-8"
                  min="0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="down-payment">Down Payment</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="down-payment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => handleInputChange(setDownPayment, Number(e.target.value))}
                    className="pl-8"
                    min="0"
                  />
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Input
                    type="number"
                    value={downPaymentPercent}
                    onChange={(e) => handlePercentChange(Number(e.target.value))}
                    className="w-16 text-center"
                    min="5"
                    max="100"
                  />
                  <span>%</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select value={selectedProvince} onValueChange={(value) => setSelectedProvince(value as Province)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ON">Ontario</SelectItem>
                  <SelectItem value="BC">British Columbia</SelectItem>
                  <SelectItem value="AB">Alberta</SelectItem>
                  <SelectItem value="QC">Quebec</SelectItem>
                  <SelectItem value="SK">Saskatchewan</SelectItem>
                  <SelectItem value="MB">Manitoba</SelectItem>
                  <SelectItem value="NB">New Brunswick</SelectItem>
                  <SelectItem value="NS">Nova Scotia</SelectItem>
                  <SelectItem value="PE">Prince Edward Island</SelectItem>
                  <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <Label htmlFor="term">Term (Optional)</Label>
              <Select 
                value={selectedTerm?.toString() || "all"} 
                onValueChange={(value) => setSelectedTerm(value === "all" ? undefined : parseInt(value))}
                disabled={transactionType === 'heloc'}
              >
                <SelectTrigger>
                  <SelectValue placeholder={transactionType === 'heloc' ? "N/A for HELOC" : "Select term"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All terms</SelectItem>
                  {getAvailableTerms().map(term => (
                    <SelectItem key={term.value} value={term.value.toString()}>{term.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amortization">Amortization</Label>
              <Select 
                value={amortization.toString()} 
                onValueChange={(value) => setAmortization(parseInt(value))}
                disabled={transactionType === 'heloc'}
              >
                <SelectTrigger>
                  <SelectValue placeholder={transactionType === 'heloc' ? "N/A for HELOC" : "Select amortization"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="25">25 years</SelectItem>
                  <SelectItem value="30">30 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-1"></div>
          </div>
          
          {/* Results */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6">
                    <Skeleton className="h-8 w-20 mb-4" />
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </Card>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-red-600 mb-4">Error loading rates: {error}</p>
                <Button onClick={handleRefetch} variant="outline">
                  Try Again
                </Button>
              </div>
            ) : rates.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rates.slice(0, 6).map((rate) => (
                    <Card key={rate.id} className="p-6 hover:shadow-lg transition-shadow">
                      {renderRateItem(rate)}
                    </Card>
                  ))}
                </div>

                {bestRate && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Best Rate Found</h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-green-700">{bestRate.rate}</span>
                        <span className="ml-2 text-green-600">from {bestRate.lender}</span>
                        <div className="text-sm text-green-600">{bestRate.term} • {bestRate.type}</div>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === "best-bank" && bigBankRates.length > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Big Bank Rates ({bigBankRates.length})</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {bigBankRates.slice(0, 3).map((rate) => (
                        <div key={rate.id} className="bg-white p-3 rounded border">
                          <div className="text-lg font-bold text-blue-700">{rate.rate}</div>
                          <div className="text-sm text-blue-600">{rate.lender}</div>
                          <div className="text-xs text-blue-500">{rate.term}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {alternativeLenderRates.length > 0 && (
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-800 mb-4">Alternative Lenders ({alternativeLenderRates.length})</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {alternativeLenderRates.slice(0, 3).map((rate) => (
                        <div key={rate.id} className="bg-white p-3 rounded border">
                          <div className="text-lg font-bold text-purple-700">{rate.rate}</div>
                          <div className="text-sm text-purple-600">{rate.lender}</div>
                          <div className="text-xs text-purple-500">{rate.term}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  No matching rates found for the selected criteria
                </p>
                <Button onClick={handleRefetch} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Rates
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}