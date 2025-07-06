
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingDown, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalLoans = () => {
  const loanRates = [
    {
      lender: "SoFi",
      minRate: 8.99,
      maxRate: 23.43,
      amount: "$5K - $100K",
      term: "2-7 years",
      featured: true
    },
    {
      lender: "LightStream",
      minRate: 7.49,
      maxRate: 25.49,
      amount: "$5K - $100K",
      term: "2-7 years",
      featured: false
    },
    {
      lender: "Upstart",
      minRate: 6.50,
      maxRate: 35.99,
      amount: "$1K - $50K",
      term: "3-5 years",
      featured: true
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
                Best Rates Available
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Personal Loan Rates Comparison
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Compare personal loan rates from top lenders and find the best deal for your needs.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/tools/calculators">
                  Calculate My Payment <Calculator className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Current Personal Loan Rates</CardTitle>
                  <CardDescription>Compare rates from top lenders</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Lender</TableHead>
                        <TableHead>APR Range</TableHead>
                        <TableHead>Loan Amount</TableHead>
                        <TableHead>Terms</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loanRates.map((loan, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {loan.featured && <CheckCircle className="h-4 w-4 text-green-500" />}
                              {loan.lender}
                            </div>
                          </TableCell>
                          <TableCell>{loan.minRate}% - {loan.maxRate}%</TableCell>
                          <TableCell>{loan.amount}</TableCell>
                          <TableCell>{loan.term}</TableCell>
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

export default PersonalLoans;
