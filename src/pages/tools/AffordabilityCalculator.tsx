
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, DollarSign, Calculator } from "lucide-react";

const AffordabilityCalculator = () => {
  const [income, setIncome] = useState<string>("");
  const [debts, setDebts] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [results, setResults] = useState<any>(null);

  const calculateAffordability = () => {
    const monthlyIncome = parseFloat(income) / 12;
    const monthlyDebts = parseFloat(debts);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;

    // Using 28% front-end ratio and 36% back-end ratio
    const maxMonthlyPayment = Math.min(
      monthlyIncome * 0.28, // Front-end ratio
      (monthlyIncome * 0.36) - monthlyDebts // Back-end ratio
    );

    // Calculate max loan amount
    const termMonths = 30 * 12;
    const maxLoanAmount = maxMonthlyPayment * ((1 - Math.pow(1 + rate, -termMonths)) / rate);
    const maxHomePrice = maxLoanAmount + down;

    setResults({
      maxHomePrice,
      maxLoanAmount,
      maxMonthlyPayment,
      downPayment: down
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
                Planning Tool
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Home Affordability Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Determine how much house you can afford based on your income and debts.
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
                      <Calculator className="h-5 w-5" />
                      Your Financial Information
                    </CardTitle>
                    <CardDescription>
                      Enter your income and debt information to calculate affordability
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="income">Annual Gross Income</Label>
                      <Input
                        id="income"
                        type="number"
                        placeholder="75000"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="debts">Monthly Debt Payments</Label>
                      <Input
                        id="debts"
                        type="number"
                        placeholder="500"
                        value={debts}
                        onChange={(e) => setDebts(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="downPayment">Down Payment Available</Label>
                      <Input
                        id="downPayment"
                        type="number"
                        placeholder="50000"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="rate">Interest Rate (%)</Label>
                      <Input
                        id="rate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                      />
                    </div>
                    <Button onClick={calculateAffordability} className="w-full">
                      Calculate Affordability
                    </Button>
                  </CardContent>
                </Card>

                {results && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Home className="h-5 w-5" />
                        Your Home Buying Budget
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <div className="text-sm text-muted-foreground">Maximum Home Price</div>
                        <div className="text-2xl font-bold text-primary">
                          ${results.maxHomePrice.toLocaleString()}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Maximum Loan Amount</span>
                          <span className="font-medium">${results.maxLoanAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Down Payment</span>
                          <span className="font-medium">${results.downPayment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Max Monthly Payment</span>
                          <span className="font-medium">${results.maxMonthlyPayment.toLocaleString()}</span>
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

export default AffordabilityCalculator;
