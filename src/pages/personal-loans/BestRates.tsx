
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Star, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BestPersonalLoanRates = () => {
  const bestRates = [
    {
      lender: "LightStream",
      minRate: 7.49,
      maxRate: 25.49,
      amount: "$5K - $100K",
      term: "2-7 years",
      specialOffer: "Rate beat program",
      rating: 4.8
    },
    {
      lender: "SoFi",
      minRate: 8.99,
      maxRate: 23.43,
      amount: "$5K - $100K",
      term: "2-7 years",
      specialOffer: "Unemployment protection",
      rating: 4.7
    },
    {
      lender: "Marcus by Goldman Sachs",
      minRate: 9.99,
      maxRate: 24.99,
      amount: "$3.5K - $40K",
      term: "3-6 years",
      specialOffer: "No fees",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Best Rates Available
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Best Personal Loan Rates
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover the lowest personal loan rates from top-rated lenders with the best terms and features.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/tools/calculators">
                  Calculate Savings <Calculator className="h-5 w-5" />
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
                  <CardTitle>Top-Rated Personal Loan Lenders</CardTitle>
                  <CardDescription>The best personal loan rates from highly-rated lenders</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Lender</TableHead>
                        <TableHead>APR Range</TableHead>
                        <TableHead>Loan Amount</TableHead>
                        <TableHead>Terms</TableHead>
                        <TableHead>Special Feature</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bestRates.map((loan, index) => (
                        <TableRow key={index} className={index === 0 ? "bg-green-50" : ""}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {index === 0 && <CheckCircle className="h-4 w-4 text-green-500" />}
                              {loan.lender}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold text-green-600">
                            {loan.minRate}% - {loan.maxRate}%
                          </TableCell>
                          <TableCell>{loan.amount}</TableCell>
                          <TableCell>{loan.term}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {loan.specialOffer}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              {loan.rating}/5
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" asChild>
                              <Link to="/contact">Apply Now</Link>
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

export default BestPersonalLoanRates;
