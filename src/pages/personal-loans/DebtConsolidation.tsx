
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingDown, Calculator, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const DebtConsolidationLoans = () => {
  const consolidationOptions = [
    {
      lender: "SoFi",
      minRate: 8.99,
      maxRate: 23.43,
      amount: "$5K - $100K",
      term: "2-7 years",
      benefit: "No fees"
    },
    {
      lender: "LightStream",
      minRate: 7.49,
      maxRate: 25.49,
      amount: "$5K - $100K",
      term: "2-7 years",
      benefit: "Rate beat program"
    },
    {
      lender: "Payoff",
      minRate: 5.99,
      maxRate: 24.99,
      amount: "$5K - $40K",
      term: "2-5 years",
      benefit: "Debt payoff focus"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <TrendingDown className="h-3 w-3 mr-1" />
                Consolidate & Save
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Debt Consolidation Loans
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Simplify your finances and potentially save money by consolidating multiple debts into one low-rate personal loan.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/tools/debt-payoff-calculator">
                  Calculate Savings <Calculator className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Simplify Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Combine multiple credit card payments into one manageable monthly payment.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <DollarSign className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Lower Interest</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Potentially reduce your interest rate compared to high-interest credit cards.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <TrendingDown className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Fixed Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get a fixed rate and payment schedule to pay off debt faster.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Best Debt Consolidation Loan Options</CardTitle>
                  <CardDescription>Compare lenders that specialize in debt consolidation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Lender</TableHead>
                        <TableHead>APR Range</TableHead>
                        <TableHead>Loan Amount</TableHead>
                        <TableHead>Terms</TableHead>
                        <TableHead>Key Benefit</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {consolidationOptions.map((option, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{option.lender}</TableCell>
                          <TableCell>{option.minRate}% - {option.maxRate}%</TableCell>
                          <TableCell>{option.amount}</TableCell>
                          <TableCell>{option.term}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {option.benefit}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" asChild>
                              <Link to="/contact">Learn More</Link>
                            </Button>
                          </TableCell>
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

export default DebtConsolidationLoans;
