
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, AlertCircle, Calculator, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BadCreditLoans = () => {
  const badCreditOptions = [
    {
      lender: "Upstart",
      minRate: 6.50,
      maxRate: 35.99,
      amount: "$1K - $50K",
      term: "3-5 years",
      minCredit: "300+"
    },
    {
      lender: "Avant",
      minRate: 9.95,
      maxRate: 35.99,
      amount: "$2K - $35K",
      term: "2-5 years",
      minCredit: "580+"
    },
    {
      lender: "OneMain Financial",
      minRate: 18.00,
      maxRate: 35.99,
      amount: "$1.5K - $20K",
      term: "2-5 years",
      minCredit: "No minimum"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                <Shield className="h-3 w-3 mr-1" />
                Bad Credit Accepted
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Bad Credit Personal Loans
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Get a personal loan even with poor credit. Compare lenders that work with borrowers who have credit challenges.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/tools/calculators">
                  Check Your Options <Calculator className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-lg text-orange-800">Important Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700">
                    Bad credit loans typically have higher interest rates. Make sure you can afford the monthly payments 
                    and consider working on improving your credit score for better rates in the future.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Bad Credit Loan Options</CardTitle>
                  <CardDescription>Lenders that work with borrowers with poor credit</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Lender</TableHead>
                        <TableHead>APR Range</TableHead>
                        <TableHead>Loan Amount</TableHead>
                        <TableHead>Terms</TableHead>
                        <TableHead>Min Credit Score</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {badCreditOptions.map((option, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{option.lender}</TableCell>
                          <TableCell>{option.minRate}% - {option.maxRate}%</TableCell>
                          <TableCell>{option.amount}</TableCell>
                          <TableCell>{option.term}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {option.minCredit}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" asChild>
                              <Link to="/contact">Check Rates</Link>
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

export default BadCreditLoans;
