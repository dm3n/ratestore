
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Percent, Calendar, TrendingUp } from "lucide-react";

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [interestRate, setInterestRate] = useState<number>(7);
  const [years, setYears] = useState<number>(30);
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  // Calculate compound interest with monthly contributions
  useEffect(() => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = years * 12;
    
    // Future value of initial principal
    const principalFV = principal * Math.pow(1 + monthlyRate, totalMonths);
    
    // Future value of monthly contributions (annuity)
    const contributionsFV = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    
    const total = principalFV + contributionsFV;
    const contributions = principal + (monthlyContribution * totalMonths);
    const interest = total - contributions;
    
    setFinalAmount(total);
    setTotalContributions(contributions);
    setTotalInterest(interest);
  }, [principal, monthlyContribution, interestRate, years]);

  const handlePrincipalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/,/g, ""));
    setPrincipal(isNaN(value) ? 0 : value);
  };

  const handleMonthlyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/,/g, ""));
    setMonthlyContribution(isNaN(value) ? 0 : value);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-primary/5 rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Compound Interest Calculator</CardTitle>
          <CardDescription>See how your investments can grow over time</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            {/* Initial Investment */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="principal" className="text-base font-medium">
                  Initial Investment
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="principal"
                    type="text"
                    className="w-[140px] pl-8 text-right"
                    value={principal.toLocaleString()}
                    onChange={handlePrincipalInput}
                  />
                </div>
              </div>
              <Slider
                value={[principal]}
                onValueChange={(value) => setPrincipal(value[0])}
                min={0}
                max={100000}
                step={1000}
                className="py-2"
              />
            </div>

            {/* Monthly Contribution */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="monthly" className="text-base font-medium">
                  Monthly Contribution
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="monthly"
                    type="text"
                    className="w-[140px] pl-8 text-right"
                    value={monthlyContribution.toLocaleString()}
                    onChange={handleMonthlyInput}
                  />
                </div>
              </div>
              <Slider
                value={[monthlyContribution]}
                onValueChange={(value) => setMonthlyContribution(value[0])}
                min={0}
                max={2000}
                step={50}
                className="py-2"
              />
            </div>

            {/* Interest Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="rate" className="text-base font-medium">
                  Annual Interest Rate
                </Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="rate"
                    type="number"
                    className="w-[120px] pl-8 text-right"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                    step={0.1}
                  />
                </div>
              </div>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                min={0}
                max={15}
                step={0.1}
                className="py-2"
              />
            </div>

            {/* Time Period */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="years" className="text-base font-medium">
                  Investment Period (Years)
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="years"
                    type="number"
                    className="w-[120px] pl-8 text-right"
                    value={years}
                    onChange={(e) => setYears(parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>
              <Slider
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                min={1}
                max={50}
                step={1}
                className="py-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-green-50 rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            Investment Results
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="p-6 bg-primary/5 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Final Amount</div>
              <div className="text-3xl font-bold text-primary">
                ${finalAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Total Contributions</span>
                <span className="text-lg font-semibold">
                  ${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="font-medium">Interest Earned</span>
                <span className="text-lg font-semibold text-green-600">
                  ${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
              
              <div className="mt-6 p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Growth Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Contributions:</span>
                    <span>{((totalContributions / finalAmount) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest:</span>
                    <span>{((totalInterest / finalAmount) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
