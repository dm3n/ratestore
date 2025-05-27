
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingDown, Clock } from "lucide-react";

const ExtraPaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<string>("400000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [loanTerm, setLoanTerm] = useState<string>("30");
  const [extraPayment, setExtraPayment] = useState<string>("200");
  const [results, setResults] = useState<any>(null);

  const calculateExtraPayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseFloat(loanTerm) * 12;
    const extra = parseFloat(extraPayment);

    // Standard payment calculation
    const standardPayment = principal * (rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1);
    const standardTotalInterest = (standardPayment * termMonths) - principal;

    // With extra payment
    const newPayment = standardPayment + extra;
    let balance = principal;
    let month = 0;
    let totalInterestWithExtra = 0;

    while (balance > 0 && month < termMonths) {
      month++;
      const interestPayment = balance * rate;
      const principalPayment = Math.min(newPayment - interestPayment, balance);
      
      totalInterestWithExtra += interestPayment;
      balance -= principalPayment;
    }

    const interestSaved = standardTotalInterest - totalInterestWithExtra;
    const timeSaved = termMonths - month;

    setResults({
      standardPayment,
      newPayment,
      standardTotalInterest,
      totalInterestWithExtra,
      interestSaved,
      timeSaved,
      newTermMonths: month
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Savings Calculator
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Extra Payment Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                See how extra payments can save you thousands in interest and years off your loan.
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
                      <DollarSign className="h-5 w-5" />
                      Loan & Extra Payment Details
                    </CardTitle>
                    <CardDescription>
                      Enter your current loan details and planned extra payment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="loanAmount">Current Loan Balance</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="interestRate">Interest Rate (%)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="loanTerm">Remaining Term (years)</Label>
                      <Input
                        id="loanTerm"
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="extraPayment">Monthly Extra Payment</Label>
                      <Input
                        id="extraPayment"
                        type="number"
                        value={extraPayment}
                        onChange={(e) => setExtraPayment(e.target.value)}
                      />
                    </div>
                    <Button onClick={calculateExtraPayment} className="w-full">
                      Calculate Savings
                    </Button>
                  </CardContent>
                </Card>

                {results && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingDown className="h-5 w-5" />
                          Interest Savings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center p-4 bg-green-50 rounded-lg mb-4">
                          <div className="text-2xl font-bold text-green-600">
                            ${results.interestSaved.toLocaleString()}
                          </div>
                          <div className="text-sm text-green-700">Total Interest Saved</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">Standard Total Interest</span>
                            <span className="font-medium">${results.standardTotalInterest.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">With Extra Payments</span>
                            <span className="font-medium">${results.totalInterestWithExtra.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          Time Savings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center p-4 bg-blue-50 rounded-lg mb-4">
                          <div className="text-2xl font-bold text-blue-600">
                            {Math.floor(results.timeSaved / 12)} years {results.timeSaved % 12} months
                          </div>
                          <div className="text-sm text-blue-700">Time Saved</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">Standard Payment</span>
                            <span className="font-medium">${results.standardPayment.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">New Payment</span>
                            <span className="font-medium">${results.newPayment.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">New Loan Term</span>
                            <span className="font-medium">
                              {Math.floor(results.newTermMonths / 12)} years {results.newTermMonths % 12} months
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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

export default ExtraPaymentCalculator;
