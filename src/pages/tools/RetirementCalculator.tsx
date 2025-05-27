
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PiggyBank, Calculator } from "lucide-react";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [result, setResult] = useState<any>(null);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthsToRetirement = yearsToRetirement * 12;
    const monthlyReturn = expectedReturn / 100 / 12;
    
    // Future value of current savings
    const futureValueCurrent = currentSavings * Math.pow(1 + expectedReturn / 100, yearsToRetirement);
    
    // Future value of monthly contributions
    const futureValueContributions = monthlyContribution * (((Math.pow(1 + monthlyReturn, monthsToRetirement) - 1) / monthlyReturn));
    
    const totalSavings = futureValueCurrent + futureValueContributions;
    const totalContributions = currentSavings + (monthlyContribution * monthsToRetirement);

    setResult({
      totalSavings,
      totalContributions,
      interestEarned: totalSavings - totalContributions,
      yearsToRetirement
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Retirement Planning
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Retirement Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Plan for your retirement and see how your savings will grow over time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5" />
                      Retirement Planning
                    </CardTitle>
                    <CardDescription>Enter your retirement details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currentAge">Current Age</Label>
                        <Input
                          id="currentAge"
                          type="number"
                          value={currentAge}
                          onChange={(e) => setCurrentAge(Number(e.target.value))}
                          placeholder="30"
                        />
                      </div>
                      <div>
                        <Label htmlFor="retirementAge">Retirement Age</Label>
                        <Input
                          id="retirementAge"
                          type="number"
                          value={retirementAge}
                          onChange={(e) => setRetirementAge(Number(e.target.value))}
                          placeholder="65"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="currentSavings">Current Savings</Label>
                      <Input
                        id="currentSavings"
                        type="number"
                        value={currentSavings}
                        onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        placeholder="50000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyContribution">Monthly Contribution</Label>
                      <Input
                        id="monthlyContribution"
                        type="number"
                        value={monthlyContribution}
                        onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                        placeholder="500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                      <Input
                        id="expectedReturn"
                        type="number"
                        step="0.1"
                        value={expectedReturn}
                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                        placeholder="7"
                      />
                    </div>
                    <Button onClick={calculateRetirement} className="w-full gap-2">
                      <Calculator className="h-4 w-4" />
                      Calculate Retirement
                    </Button>
                  </CardContent>
                </Card>

                {result && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Retirement Projection</CardTitle>
                      <CardDescription>Your retirement savings forecast</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">
                          ${result.totalSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}
                        </div>
                        <div className="text-sm text-muted-foreground">Total at Retirement</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Years to Retirement:</span>
                          <span className="font-semibold">{result.yearsToRetirement}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Contributions:</span>
                          <span className="font-semibold">${result.totalContributions.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interest Earned:</span>
                          <span className="font-semibold text-green-600">${result.interestEarned.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RetirementCalculator;
