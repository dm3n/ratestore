import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Calculator, TrendingDown, RefreshCw, DollarSign, Percent, Calendar } from "lucide-react";
import { useMortgageCalculatorApi } from "@/hooks/useMortgageCalculatorApi";
import { useAffordabilityCalculatorApi } from "@/hooks/useAffordabilityCalculatorApi";
import { useDownPaymentCalculatorApi } from "@/hooks/useDownPaymentCalculatorApi";
import { useExtraPaymentCalculatorApi } from "@/hooks/useExtraPaymentCalculatorApi";
import { useCompoundInterestApi } from "@/hooks/useCompoundInterestApi";
import { useExternalRateApi, type RateLookupCriteria } from "@/hooks/useExternalRateApi";

export function ComprehensiveMortgageCalculator() {
  // State for inputs
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [monthlyDebt, setMonthlyDebt] = useState(500);
  const [currentSavings, setCurrentSavings] = useState(25000);
  const [monthlySavings, setMonthlySavings] = useState(2000);
  const [extraPayment, setExtraPayment] = useState(200);
  const [loanTerm, setLoanTerm] = useState(25);
  const [interestRate, setInterestRate] = useState(5.5);
  const [selectedRate, setSelectedRate] = useState<number | null>(null);
  const [province, setProvince] = useState("ON");

  // API hooks
  const mortgageCalc = useMortgageCalculatorApi();
  const affordabilityCalc = useAffordabilityCalculatorApi();
  const downPaymentCalc = useDownPaymentCalculatorApi();
  const extraPaymentCalc = useExtraPaymentCalculatorApi();
  const compoundInterestCalc = useCompoundInterestApi();
  const { 
    rates: externalRates, 
    isLoading: ratesLoading, 
    findBestRates, 
    fetchAllRates,
    getMortgageSizeBracket,
    getDownPaymentRange 
  } = useExternalRateApi();

  const [currentBestRates, setCurrentBestRates] = useState<any[]>([]);

  // Calculate derived values
  const loanAmount = purchasePrice - downPayment;
  const downPaymentPercent = (downPayment / purchasePrice) * 100;
  const ltv = loanAmount / purchasePrice;

  // Auto-calculate when inputs change
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const rate = selectedRate || interestRate;
      
      // Mortgage payment calculation
      mortgageCalc.calculatePayment({
        loan_amount: loanAmount,
        interest_rate: rate / 100,
        loan_term: loanTerm,
      });

      // Affordability calculation
      affordabilityCalc.calculateAffordability({
        annual_income: annualIncome,
        monthly_debt: monthlyDebt,
        down_payment: downPayment,
        interest_rate: rate / 100,
      });

      // Down payment calculation
      downPaymentCalc.calculateDownPayment({
        home_price: purchasePrice,
        down_payment_percent: downPaymentPercent,
        current_savings: currentSavings,
        monthly_savings: monthlySavings,
      });

      // Extra payment calculation
      extraPaymentCalc.calculateExtraPayment({
        loan_amount: loanAmount,
        interest_rate: rate / 100,
        loan_term: loanTerm,
        extra_payment: extraPayment,
      });

      // Compound interest for savings
      compoundInterestCalc.calculateCompoundInterest({
        principal: currentSavings,
        annual_rate: 3.5, // Assuming 3.5% for savings
        contribution_frequency: "monthly",
        contribution_amount: monthlySavings,
        time_years: 5,
      });

      // Find best rates from external API
      try {
        const apiRequest = {
          transaction_type: "purchases" as const,
          property_value: purchasePrice,
          down_payment: downPayment,
          province: province,
          terms: ['2', '3', '5'],
          rate_types: ['fixed', 'variable']
        };
        
        const bestRatesResponse = await findBestRates(apiRequest);
        const bestRates = bestRatesResponse?.rates || [];
        setCurrentBestRates(bestRates);

        // Auto-select best rate if available
        if (bestRates.length > 0 && bestRates[0].rate && !selectedRate) {
          setSelectedRate(bestRates[0].rate);
        }
      } catch (error) {
        console.error('Error fetching best rates:', error);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [
    loanAmount, interestRate, selectedRate, loanTerm, annualIncome, monthlyDebt,
    downPayment, currentSavings, monthlySavings, extraPayment, purchasePrice,
    downPaymentPercent, province, findBestRates, getMortgageSizeBracket
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (percent: number) => {
    return `${percent.toFixed(2)}%`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Comprehensive Mortgage Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Calculate mortgage payments, affordability, and explore live market rates all in one place
        </p>
      </div>

      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="rates">Live Rates</TabsTrigger>
          <TabsTrigger value="affordability">Affordability</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Inputs */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Mortgage Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="purchase-price">Purchase Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="purchase-price"
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="down-payment">Down Payment</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="down-payment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {formatPercent(downPaymentPercent)} of purchase price
                  </div>
                </div>

                <div>
                  <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="interest-rate"
                      type="number"
                      step="0.01"
                      value={selectedRate || interestRate}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setInterestRate(value);
                        setSelectedRate(value);
                      }}
                      className="pl-10"
                    />
                  </div>
                  {selectedRate && (
                    <div className="text-sm text-green-600 mt-1">
                      ✓ Using selected market rate
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="loan-term">Loan Term (years)</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="loan-term"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="province">Province</Label>
                  <Select value={province} onValueChange={setProvince}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AB">Alberta</SelectItem>
                      <SelectItem value="BC">British Columbia</SelectItem>
                      <SelectItem value="MB">Manitoba</SelectItem>
                      <SelectItem value="NB">New Brunswick</SelectItem>
                      <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                      <SelectItem value="NS">Nova Scotia</SelectItem>
                      <SelectItem value="ON">Ontario</SelectItem>
                      <SelectItem value="PE">Prince Edward Island</SelectItem>
                      <SelectItem value="QC">Quebec</SelectItem>
                      <SelectItem value="SK">Saskatchewan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Monthly Payment */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Monthly Payment</h3>
                    {mortgageCalc.isLoading ? (
                      <div className="animate-pulse bg-muted h-8 rounded"></div>
                    ) : mortgageCalc.results ? (
                      <div>
                        <div className="text-3xl font-bold text-primary">
                          {formatCurrency(mortgageCalc.results.monthly_payment)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Total: {formatCurrency(mortgageCalc.results.total_payment)} | 
                          Interest: {formatCurrency(mortgageCalc.results.total_interest)}
                        </div>
                      </div>
                    ) : (
                      <div className="text-muted-foreground">Enter details to calculate</div>
                    )}
                  </div>

                  {/* Extra Payment Savings */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Extra Payment Impact</h3>
                    <div className="space-y-1">
                      <Label htmlFor="extra-payment">Extra Monthly Payment</Label>
                      <Input
                        id="extra-payment"
                        type="number"
                        value={extraPayment}
                        onChange={(e) => setExtraPayment(Number(e.target.value))}
                      />
                    </div>
                    {extraPaymentCalc.isLoading ? (
                      <div className="animate-pulse bg-muted h-8 rounded"></div>
                    ) : extraPaymentCalc.results ? (
                      <div>
                        <div className="text-xl font-bold text-green-600">
                          Save {formatCurrency(extraPaymentCalc.results.interest_saved)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Pay off {extraPaymentCalc.results.time_saved_years.toFixed(1)} years early
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Down Payment Timeline */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Down Payment Savings</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="current-savings">Current Savings</Label>
                        <Input
                          id="current-savings"
                          type="number"
                          value={currentSavings}
                          onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthly-savings">Monthly Savings</Label>
                        <Input
                          id="monthly-savings"
                          type="number"
                          value={monthlySavings}
                          onChange={(e) => setMonthlySavings(Number(e.target.value))}
                        />
                      </div>
                    </div>
                    {downPaymentCalc.isLoading ? (
                      <div className="animate-pulse bg-muted h-8 rounded"></div>
                    ) : downPaymentCalc.results ? (
                      <div>
                        <div className="text-xl font-bold text-blue-600">
                          {downPaymentCalc.results.months_to_goal} months to goal
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Need {formatCurrency(downPaymentCalc.results.remaining_to_save)} more
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Loan Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Loan Details</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Loan Amount:</span>
                        <span className="font-medium">{formatCurrency(loanAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>LTV Ratio:</span>
                        <span className="font-medium">{formatPercent(ltv * 100)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CMHC Required:</span>
                        <span className="font-medium">{downPaymentPercent < 20 ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Primary Residence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rates" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Best Market Rates</span>
                  <Button 
                    onClick={fetchAllRates} 
                    disabled={ratesLoading}
                    variant="outline" 
                    size="sm"
                  >
                    <RefreshCw className={`h-4 w-4 mr-2 ${ratesLoading ? 'animate-spin' : ''}`} />
                    {ratesLoading ? 'Updating...' : 'Refresh'}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {ratesLoading ? (
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="bg-muted h-16 rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : currentBestRates.length > 0 ? (
                  <div className="space-y-3">
                    {currentBestRates.map((rate, index) => (
                      <div 
                        key={index} 
                        className="border rounded-lg p-4 hover:bg-accent cursor-pointer transition-colors"
                        onClick={() => setSelectedRate(rate.rate)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{rate.lender}</div>
                            <div className="text-sm text-muted-foreground">
                              {rate.term} • {rate.rate_type} • {rate.cmhc_insured ? 'Insured' : 'Conventional'}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              {rate.rate?.toFixed(2)}%
                            </div>
                            <Button 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedRate(rate.rate);
                              }}
                              variant={selectedRate === rate.rate ? "default" : "outline"}
                            >
                              {selectedRate === rate.rate ? 'Selected' : 'Use Rate'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <TrendingDown className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No rates available. Try refreshing or adjusting your criteria.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rate Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Your Scenario</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Property Value:</span>
                        <span>{formatCurrency(purchasePrice)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Down Payment:</span>
                        <span>{formatCurrency(downPayment)} ({formatPercent(downPaymentPercent)})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Loan Amount:</span>
                        <span>{formatCurrency(loanAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mortgage Size:</span>
                        <span>{getMortgageSizeBracket(loanAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Down Payment Range:</span>
                        <span>{getDownPaymentRange(downPaymentPercent)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Rate Factors</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• {downPaymentPercent < 20 ? 'High ratio mortgage (requires CMHC insurance)' : 'Conventional mortgage (no insurance required)'}</p>
                      <p>• {province} provincial rates</p>
                      <p>• Purchase transaction</p>
                      <p>• Primary residence</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="affordability" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Income & Debt Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="annual-income">Annual Income</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="annual-income"
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="monthly-debt">Monthly Debt Payments</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="monthly-debt"
                      type="number"
                      value={monthlyDebt}
                      onChange={(e) => setMonthlyDebt(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Include credit cards, loans, and other monthly obligations
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Affordability Results</CardTitle>
              </CardHeader>
              <CardContent>
                {affordabilityCalc.isLoading ? (
                  <div className="space-y-3">
                    <div className="animate-pulse bg-muted h-8 rounded"></div>
                    <div className="animate-pulse bg-muted h-6 rounded"></div>
                    <div className="animate-pulse bg-muted h-6 rounded"></div>
                  </div>
                ) : affordabilityCalc.results ? (
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {formatCurrency(affordabilityCalc.results.max_home_price)}
                      </div>
                      <div className="text-sm text-muted-foreground">Maximum home price</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Max Loan Amount</div>
                        <div>{formatCurrency(affordabilityCalc.results.max_loan_amount)}</div>
                      </div>
                      <div>
                        <div className="font-medium">Max Monthly Payment</div>
                        <div>{formatCurrency(affordabilityCalc.results.max_monthly_payment)}</div>
                      </div>
                      <div>
                        <div className="font-medium">GDS Ratio</div>
                        <div>{formatPercent(affordabilityCalc.results.gds_ratio * 100)}</div>
                      </div>
                      <div>
                        <div className="font-medium">TDS Ratio</div>
                        <div>{formatPercent(affordabilityCalc.results.tds_ratio * 100)}</div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <p>GDS (Gross Debt Service) should be ≤ 32%</p>
                      <p>TDS (Total Debt Service) should be ≤ 40%</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-muted-foreground">Enter your income details to see affordability</div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}