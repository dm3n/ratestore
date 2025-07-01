
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw, AlertCircle, Calculator, CheckCircle } from "lucide-react";

const RenewalRates = () => {
  const renewalRates = [
    { lender: "Alternative Lender", rate: "3.79%", term: "5-Year Fixed", savings: "$18,400", cashback: "$2,000" },
    { lender: "Credit Union Plus", rate: "3.85%", term: "5-Year Fixed", savings: "$16,800", cashback: "$1,500" },
    { lender: "Your Current Bank", rate: "4.89%", term: "5-Year Fixed", savings: "$0", cashback: "$0", current: true },
    { lender: "Online Lender", rate: "3.92%", term: "5-Year Variable", savings: "$15,200", cashback: "$1,000" },
  ];

  const renewalSteps = [
    { step: 1, title: "Review Your Options", description: "90 days before renewal, start comparing rates" },
    { step: 2, title: "Get Pre-Approved", description: "Secure a better rate with alternative lenders" },
    { step: 3, title: "Negotiate", description: "Use competing offers to negotiate with your current lender" },
    { step: 4, title: "Switch or Stay", description: "Choose the best option - switch lenders or accept your bank's counter-offer" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
                <RefreshCw className="h-3 w-3 mr-1" />
                Renewal Season
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Best Mortgage Renewal Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't auto-renew! Compare renewal rates and save thousands on your mortgage. 
                Most Canadians can get a better rate by switching lenders.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-2 text-yellow-800">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">Average savings by switching: $16,000 over 5 years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Renewal Rate Comparison */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Renewal Options</CardTitle>
                  <CardDescription>
                    Compare what you could save by switching lenders vs. staying with your current bank
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Lender</TableHead>
                          <TableHead>Rate</TableHead>
                          <TableHead>Term</TableHead>
                          <TableHead>5-Year Savings</TableHead>
                          <TableHead>Cash Back</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {renewalRates.map((rate, index) => (
                          <TableRow 
                            key={index} 
                            className={rate.current ? "bg-red-50 border-red-200" : "hover:bg-gray-50"}
                          >
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {rate.current && <Badge variant="outline" className="text-xs bg-red-100 text-red-700">Current</Badge>}
                                {rate.lender}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className={`text-lg font-bold ${rate.current ? 'text-red-600' : 'text-green-600'}`}>
                                {rate.rate}
                              </span>
                            </TableCell>
                            <TableCell>{rate.term}</TableCell>
                            <TableCell>
                              <span className={`font-bold ${rate.current ? 'text-gray-500' : 'text-green-600'}`}>
                                {rate.current ? 'Baseline' : `+$${rate.savings}`}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="font-medium">
                                {rate.cashback === "$0" ? "None" : rate.cashback}
                              </span>
                            </TableCell>
                            <TableCell>
                              {!rate.current && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Get Quote
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Renewal Process */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calculator className="h-6 w-6" />
                    Smart Renewal Process
                  </CardTitle>
                  <CardDescription>
                    Follow these steps to maximize your savings at renewal time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {renewalSteps.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {item.step}
                          </div>
                          <h3 className="font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground pl-12">
                          {item.description}
                        </p>
                        {index < renewalSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-4 -right-3 w-6 h-0.5 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits of Switching */}
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Lower Rates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Alternative lenders often offer rates 0.5-1.0% lower than big banks
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Cash Incentives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Many lenders offer cash back up to $2,000 to cover switching costs
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Calculator className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Better Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      More flexible prepayment options and better mortgage features
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RenewalRates;
