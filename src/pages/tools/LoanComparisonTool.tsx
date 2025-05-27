
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Scale, Calculator, Plus, X } from "lucide-react";

interface LoanOption {
  id: number;
  name: string;
  amount: number;
  rate: number;
  term: number;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

const LoanComparisonTool = () => {
  const [loans, setLoans] = useState<LoanOption[]>([
    { id: 1, name: "Loan 1", amount: 25000, rate: 8.5, term: 5, monthlyPayment: 0, totalPayment: 0, totalInterest: 0 },
    { id: 2, name: "Loan 2", amount: 25000, rate: 10.2, term: 4, monthlyPayment: 0, totalPayment: 0, totalInterest: 0 }
  ]);

  const calculateLoan = (amount: number, rate: number, term: number) => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = term * 12;
    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - amount;

    return {
      monthlyPayment: monthlyPayment,
      totalPayment: totalPayment,
      totalInterest: totalInterest
    };
  };

  const updateLoan = (id: number, field: keyof LoanOption, value: string | number) => {
    setLoans(prev => prev.map(loan => {
      if (loan.id === id) {
        const updatedLoan = { ...loan, [field]: value };
        if (field === 'amount' || field === 'rate' || field === 'term') {
          const calculations = calculateLoan(updatedLoan.amount, updatedLoan.rate, updatedLoan.term);
          return {
            ...updatedLoan,
            monthlyPayment: calculations.monthlyPayment,
            totalPayment: calculations.totalPayment,
            totalInterest: calculations.totalInterest
          };
        }
        return updatedLoan;
      }
      return loan;
    }));
  };

  const addLoan = () => {
    const newId = Math.max(...loans.map(l => l.id)) + 1;
    const newLoan: LoanOption = {
      id: newId,
      name: `Loan ${newId}`,
      amount: 25000,
      rate: 8,
      term: 5,
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0
    };
    const calculations = calculateLoan(newLoan.amount, newLoan.rate, newLoan.term);
    setLoans([...loans, { ...newLoan, ...calculations }]);
  };

  const removeLoan = (id: number) => {
    if (loans.length > 1) {
      setLoans(loans.filter(loan => loan.id !== id));
    }
  };

  const calculateAll = () => {
    setLoans(prev => prev.map(loan => {
      const calculations = calculateLoan(loan.amount, loan.rate, loan.term);
      return { ...loan, ...calculations };
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Loan Analysis
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Loan Comparison Tool
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Compare multiple loan offers side by side to find the best deal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-6">
              {loans.map((loan) => (
                <Card key={loan.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <Scale className="h-5 w-5" />
                        <Input
                          value={loan.name}
                          onChange={(e) => updateLoan(loan.id, 'name', e.target.value)}
                          className="border-none p-0 text-lg font-semibold bg-transparent"
                        />
                      </CardTitle>
                      {loans.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeLoan(loan.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
                      <div>
                        <Label>Loan Amount</Label>
                        <Input
                          type="number"
                          value={loan.amount}
                          onChange={(e) => updateLoan(loan.id, 'amount', Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label>Interest Rate (%)</Label>
                        <Input
                          type="number"
                          step="0.1"
                          value={loan.rate}
                          onChange={(e) => updateLoan(loan.id, 'rate', Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label>Term (Years)</Label>
                        <Input
                          type="number"
                          value={loan.term}
                          onChange={(e) => updateLoan(loan.id, 'term', Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <Label>Monthly Payment</Label>
                        <div className="text-lg font-semibold text-primary">
                          ${loan.monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}
                        </div>
                      </div>
                      <div>
                        <Label>Total Payment</Label>
                        <div className="text-lg font-semibold">
                          ${loan.totalPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}
                        </div>
                      </div>
                      <div>
                        <Label>Total Interest</Label>
                        <div className="text-lg font-semibold text-red-600">
                          ${loan.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex gap-4">
                <Button onClick={addLoan} variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Another Loan
                </Button>
                <Button onClick={calculateAll} className="gap-2">
                  <Calculator className="h-4 w-4" />
                  Recalculate All
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Comparison Summary</CardTitle>
                  <CardDescription>Compare all loans at a glance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Loan</TableHead>
                        <TableHead>Monthly Payment</TableHead>
                        <TableHead>Total Payment</TableHead>
                        <TableHead>Total Interest</TableHead>
                        <TableHead>Interest Rate</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loans.map((loan) => (
                        <TableRow key={loan.id}>
                          <TableCell className="font-medium">{loan.name}</TableCell>
                          <TableCell>${loan.monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}</TableCell>
                          <TableCell>${loan.totalPayment.toLocaleString(undefined, {maximumFractionDigits: 0})}</TableCell>
                          <TableCell className="text-red-600">${loan.totalInterest.toLocaleString(undefined, {maximumFractionDigits: 0})}</TableCell>
                          <TableCell>{loan.rate}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoanComparisonTool;
