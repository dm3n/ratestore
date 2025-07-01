
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Filter, Star } from "lucide-react";
import { useState } from "react";

const CompareRates = () => {
  const [loanAmount, setLoanAmount] = useState("500000");
  const [downPayment, setDownPayment] = useState("100000");
  const [selectedTerm, setSelectedTerm] = useState("all");

  const mortgageRates = [
    { lender: "Canadian Lender", rate: "3.84%", term: "5-yr Fixed", type: "High Ratio", payment: "$2,289", featured: true },
    { lender: "Scotiabank", rate: "3.95%", term: "5-yr Variable", type: "Conventional", payment: "$2,345", featured: true },
    { lender: "TD Bank", rate: "4.12%", term: "3-yr Fixed", type: "High Ratio", payment: "$2,378", featured: false },
    { lender: "RBC", rate: "4.25%", term: "5-yr Fixed", type: "Conventional", payment: "$2,421", featured: false },
    { lender: "BMO", rate: "4.18%", term: "5-yr Variable", type: "High Ratio", payment: "$2,392", featured: false },
    { lender: "CIBC", rate: "4.35%", term: "3-yr Fixed", type: "Conventional", payment: "$2,445", featured: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-blue-50 text-blue-600 border-blue-200">
                Live rates updated daily
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Compare Mortgage Rates
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find the best mortgage rates from 100+ Canadian lenders. Compare terms, 
                payments, and get personalized quotes instantly.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Mortgage Calculator */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Calculate Your Payments
                  </CardTitle>
                  <CardDescription>
                    Enter your details to see personalized rates and payments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Loan Amount</label>
                      <Input
                        placeholder="$500,000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Down Payment</label>
                      <Input
                        placeholder="$100,000"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Term</label>
                      <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Terms</SelectItem>
                          <SelectItem value="2-year">2 Year</SelectItem>
                          <SelectItem value="3-year">3 Year</SelectItem>
                          <SelectItem value="5-year">5 Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full md:w-auto">
                    <Filter className="h-4 w-4 mr-2" />
                    Update Rates
                  </Button>
                </CardContent>
              </Card>

              {/* Rates Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Current Mortgage Rates</CardTitle>
                      <CardDescription>Rates as of today - updated hourly</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Lender</TableHead>
                          <TableHead>Rate</TableHead>
                          <TableHead>Term</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Monthly Payment</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mortgageRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-blue-50/50" : ""}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {rate.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                                {rate.lender}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-lg font-bold text-primary">{rate.rate}</span>
                            </TableCell>
                            <TableCell>{rate.term}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {rate.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-medium">{rate.payment}</TableCell>
                            <TableCell>
                              <Button size="sm" variant={rate.featured ? "default" : "outline"}>
                                Get Quote
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
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

export default CompareRates;
