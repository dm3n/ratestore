
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Calculator } from "lucide-react";

const DebtPayoffCalculator = () => {
  const [balance, setBalance] = useState(5000);
  const [interestRate, setInterestRate] = useState(18.5);
  const [monthlyPayment, setMonthlyPayment] = useState(150);
  const [result, setResult] = useState<any>(null);

  const calculatePayoff = () => {
    const monthlyRate = interestRate / 100 / 12;
    const months = Math.log(1 + (balance * monthlyRate) / monthlyPayment) / Math.log(1 + monthlyRate);
    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - balance;

    setResult({
      months: Math.ceil(months),
      years: Math.floor(months / 12),
      totalPaid: totalPaid,
      totalInterest: totalInterest
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-red-100 text-red-700 border-red-200">
                Debt Freedom Tool
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Debt Payoff Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Calculate how long it will take to pay off your debt and how much you'll pay in total.
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
                      <CreditCard className="h-5 w-5" />
                      Debt Information
                    </CardTitle>
                    <CardDescription>Enter your current debt details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="balance">Current Balance</Label>
                      <Input
                        id="balance"
                        type="number"
                        value={balance}
                        onChange={(e) => setBalance(Number(e.target.value))}
                        placeholder="5000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rate">Interest Rate (%)</Label>
                      <Input
                        id="rate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        placeholder="18.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="payment">Monthly Payment</Label>
                      <Input
                        id="payment"
                        type="number"
                        value={monthlyPayment}
                        onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                        placeholder="150"
                      />
                    </div>
                    <Button onClick={calculatePayoff} className="w-full gap-2">
                      <Calculator className="h-4 w-4" />
                      Calculate Payoff
                    </Button>
                  </CardContent>
                </Card>

                {result && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Payoff Results</CardTitle>
                      <CardDescription>Your debt payoff timeline</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold">{result.months}</div>
                          <div className="text-sm text-muted-foreground">Months</div>
                        </div>
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold">{result.years}</div>
                          <div className="text-sm text-muted-foreground">Years</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Total Amount Paid:</span>
                          <span className="font-semibold">${result.totalPaid.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Interest:</span>
                          <span className="font-semibold text-red-600">${result.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
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

export default DebtPayoffCalculator;
