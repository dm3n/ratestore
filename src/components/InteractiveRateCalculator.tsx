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
import { useExternalRates, type RateFilters } from "@/hooks/useExternalRates";
import { cityProvinceMap, type Province } from "@/integrations/external-rates/client";

interface InteractiveRateCalculatorProps {
  defaultTransactionType?: string;
  provinceFilter?: string;
  termFilter?: string;
}

export function InteractiveRateCalculator({ 
  defaultTransactionType = "purchase",
  provinceFilter,
  termFilter 
}: InteractiveRateCalculatorProps) {
  const [transactionType, setTransactionType] = useState<'purchase' | 'refinance' | 'renewal' | 'heloc'>(
    defaultTransactionType as 'purchase' | 'refinance' | 'renewal' | 'heloc'
  );
  const [purchasePrice, setPurchasePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(20000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);
  const [selectedProvince, setSelectedProvince] = useState<Province>(provinceFilter as Province || "ON");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedTerm, setSelectedTerm] = useState<number | undefined>(termFilter ? parseInt(termFilter) * 12 : undefined);
  const [amortization, setAmortization] = useState<number>(25);
  const [activeTab, setActiveTab] = useState("best-market");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Build filters for external rates hook
  const rateFilters: RateFilters = {
    transactionType,
    province: selectedProvince,
    city: selectedCity || undefined,
    term: selectedTerm,
    amortization,
    isOwnerOccupied: true,
    isInsured: downPaymentPercent < 20,
    isBigBank: activeTab === "best-bank" ? true : undefined,
    rateType: "all"
  };

  const { rates, isLoading, error, lastUpdated, bestRate, bigBankRates, alternativeLenderRates, refetch } = useExternalRates(rateFilters);

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

  // Calculate down payment dollar amount when percentage changes
  const handlePercentChange = (percent: number) => {
    const validPercent = Math.max(5, Math.min(percent, 100));
    setDownPaymentPercent(validPercent);
    setDownPayment(Math.round((validPercent / 100) * purchasePrice));
  };

  // Get available cities for selected province
  const getAvailableCities = (): string[] => {
    return Object.keys(cityProvinceMap).filter(city => 
      cityProvinceMap[city as keyof typeof cityProvinceMap] === selectedProvince
    );
  };

  // Get available terms from current rates
  const getAvailableTerms = (): number[] => {
    if (termFilter) return [parseInt(termFilter) * 12];
    
    const uniqueTerms = Array.from(new Set(rates.map(rate => rate.term))).sort((a, b) => a - b);
    return uniqueTerms;
  };

  const handleInputChange = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const renderRateItem = (rate: any, isAdditional = false, isClickable = false) => (
    <div 
      key={rate.id} 
      className={`${isAdditional ? 'py-3 border-t border-gray-100' : ''} ${isClickable ? 'cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors' : ''}`}
    >
      <div className="text-center space-y-2">
        <div className={`${isAdditional ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-primary`}>
          {rate.rate.toFixed(2)}%
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
                Live rates updated from our external rate database
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
                onClick={refetch}
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
              <Select value={transactionType} onValueChange={(value) => setTransactionType(value as any)}>
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
              <Label htmlFor="city">City (Optional)</Label>
              <Select value={selectedCity || "all"} onValueChange={(value) => setSelectedCity(value === "all" ? "" : value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All cities</SelectItem>
                  {getAvailableCities().map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="term">Term (Optional)</Label>
              <Select value={selectedTerm?.toString() || "all"} onValueChange={(value) => setSelectedTerm(value === "all" ? undefined : parseInt(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All terms</SelectItem>
                  <SelectItem value="12">1 Year</SelectItem>
                  <SelectItem value="24">2 Years</SelectItem>
                  <SelectItem value="36">3 Years</SelectItem>
                  <SelectItem value="48">4 Years</SelectItem>
                  <SelectItem value="60">5 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amortization">Amortization (Years)</Label>
              <Select value={amortization.toString()} onValueChange={(value) => setAmortization(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select amortization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20">20 Years</SelectItem>
                  <SelectItem value="25">25 Years</SelectItem>
                  <SelectItem value="30">30 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
                        <span className="text-2xl font-bold text-green-700">{bestRate.rate.toFixed(2)}%</span>
                        <span className="ml-2 text-green-600">from {bestRate.lender}</span>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No rates found for your criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}