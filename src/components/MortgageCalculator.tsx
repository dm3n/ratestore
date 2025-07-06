
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { calculateMonthlyPayment, calculateTotalPayment, calculateTotalInterest } from "@/lib/calculator";
import { DollarSign, Percent, Calendar, RefreshCw } from "lucide-react";
import { CalculationResults } from "@/components/CalculationResults";

export function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Handle loan amount input
  const handleLoanAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/,/g, ""));
    if (!isNaN(value)) {
      setLoanAmount(value);
    } else {
      setLoanAmount(0);
    }
  };

  // Handle loan amount slider
  const handleLoanAmountSlider = (value: number[]) => {
    setLoanAmount(value[0]);
  };

  // Handle interest rate input
  const handleInterestRateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setInterestRate(value);
    } else {
      setInterestRate(0);
    }
  };

  // Handle interest rate slider
  const handleInterestRateSlider = (value: number[]) => {
    setInterestRate(value[0]);
  };

  // Handle loan term input
  const handleLoanTermInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setLoanTerm(value);
    } else {
      setLoanTerm(0);
    }
  };

  // Handle loan term slider
  const handleLoanTermSlider = (value: number[]) => {
    setLoanTerm(value[0]);
  };

  // Calculate mortgage details automatically with smooth loading animation
  useEffect(() => {
    const calculateWithAnimation = async () => {
      setIsCalculating(true);
      
      // Add a small delay to show the animation
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const monthly = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
      setMonthlyPayment(monthly);
      
      const total = calculateTotalPayment(monthly, loanTerm);
      setTotalPayment(total);
      
      const interest = calculateTotalInterest(total, loanAmount);
      setTotalInterest(interest);
      
      setIsCalculating(false);
    };

    calculateWithAnimation();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className={`grid gap-6 lg:grid-cols-2 transition-opacity duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
      <Card className="border-0 shadow-lg animate-fade-in">
        <CardHeader className="bg-primary/5 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold">Mortgage Calculator</CardTitle>
              <CardDescription>Adjust values to see updated payment estimates</CardDescription>
            </div>
            {isCalculating && (
              <div className="flex items-center gap-2 text-primary animate-fade-in">
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span className="text-sm">Calculating...</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            {/* Loan Amount */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center justify-between">
                <Label htmlFor="loan-amount" className="text-base font-medium">
                  Loan Amount
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="loan-amount"
                    type="text"
                    className="w-[140px] pl-8 text-right transition-all duration-200 hover:border-primary"
                    value={loanAmount.toLocaleString()}
                    onChange={handleLoanAmountInput}
                  />
                </div>
              </div>
              <Slider
                defaultValue={[300000]}
                min={10000}
                max={1000000}
                step={1000}
                value={[loanAmount]}
                onValueChange={handleLoanAmountSlider}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$10,000</span>
                <span>$1,000,000</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between">
                <Label htmlFor="interest-rate" className="text-base font-medium">
                  Interest Rate
                </Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="interest-rate"
                    type="number"
                    className="w-[120px] pl-8 text-right transition-all duration-200 hover:border-primary"
                    value={interestRate}
                    onChange={handleInterestRateInput}
                    step={0.125}
                  />
                </div>
              </div>
              <Slider
                defaultValue={[4.5]}
                min={0.5}
                max={10}
                step={0.125}
                value={[interestRate]}
                onValueChange={handleInterestRateSlider}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0.5%</span>
                <span>10%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center justify-between">
                <Label htmlFor="loan-term" className="text-base font-medium">
                  Loan Term (Years)
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="loan-term"
                    type="number"
                    className="w-[120px] pl-8 text-right transition-all duration-200 hover:border-primary"
                    value={loanTerm}
                    onChange={handleLoanTermInput}
                  />
                </div>
              </div>
              <Slider
                defaultValue={[30]}
                min={5}
                max={40}
                step={5}
                value={[loanTerm]}
                onValueChange={handleLoanTermSlider}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5 years</span>
                <span>40 years</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className={`transition-opacity duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
        <CalculationResults
          monthlyPayment={monthlyPayment}
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTerm={loanTerm}
          totalPayment={totalPayment}
          totalInterest={totalInterest}
        />
      </div>
    </div>
  );
}
