
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Calculator } from "lucide-react";

interface PaymentData {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

const AmortizationSchedule = () => {
  const [loanAmount, setLoanAmount] = useState<string>("400000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [loanTerm, setLoanTerm] = useState<string>("30");
  const [schedule, setSchedule] = useState<PaymentData[]>([]);
  const [showSchedule, setShowSchedule] = useState(false);

  const calculateSchedule = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseFloat(loanTerm) * 12;

    const monthlyPayment = principal * (rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1);
    
    const scheduleData: PaymentData[] = [];
    let currentBalance = principal;

    for (let month = 1; month <= Math.min(termMonths, 120); month++) { // Show first 10 years max
      const interestPayment = currentBalance * rate;
      const principalPayment = monthlyPayment - interestPayment;
      currentBalance -= principalPayment;

      scheduleData.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, currentBalance)
      });

      if (currentBalance <= 0) break;
    }

    setSchedule(scheduleData);
    setShowSchedule(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Analysis Tool
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Amortization Schedule
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                View detailed month-by-month payment breakdown for your loan.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Loan Details
                    </CardTitle>
                    <CardDescription>
                      Enter your loan information to generate the amortization schedule
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount</Label>
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
                      <Label htmlFor="loanTerm">Loan Term (years)</Label>
                      <Input
                        id="loanTerm"
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                      />
                    </div>
                    <Button onClick={calculateSchedule} className="w-full">
                      Generate Schedule
                    </Button>
                  </CardContent>
                </Card>

                {showSchedule && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Payment Schedule (First 10 Years)
                      </CardTitle>
                      <CardDescription>
                        Monthly breakdown of principal and interest payments
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="max-h-96 overflow-y-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Month</TableHead>
                              <TableHead>Payment</TableHead>
                              <TableHead>Principal</TableHead>
                              <TableHead>Interest</TableHead>
                              <TableHead>Balance</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {schedule.map((payment) => (
                              <TableRow key={payment.month}>
                                <TableCell>{payment.month}</TableCell>
                                <TableCell>${payment.payment.toFixed(2)}</TableCell>
                                <TableCell>${payment.principal.toFixed(2)}</TableCell>
                                <TableCell>${payment.interest.toFixed(2)}</TableCell>
                                <TableCell>${payment.balance.toFixed(2)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
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

export default AmortizationSchedule;
