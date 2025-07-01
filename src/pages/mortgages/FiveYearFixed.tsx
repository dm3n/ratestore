
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Shield, Clock, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";

const FiveYearFixed = () => {
  const fiveYearRates = [
    { lender: "Canadian Lender", rate: "3.84%", payment: "$2,289", features: "No fees", apr: "3.89%", featured: true },
    { lender: "Alternative Plus", rate: "3.91%", payment: "$2,325", features: "Cash back", apr: "3.96%", featured: true },
    { lender: "Scotiabank", rate: "4.64%", payment: "$2,621", features: "Branch access", apr: "4.69%", featured: false },
    { lender: "TD Bank", rate: "4.59%", payment: "$2,595", features: "Online tools", apr: "4.64%", featured: false },
    { lender: "RBC", rate: "4.74%", payment: "$2,668", features: "Rewards program", apr: "4.79%", featured: false },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Rate Protection",
      description: "Your rate is locked for 5 full years, protecting you from rate increases"
    },
    {
      icon: Clock,
      title: "Predictable Payments",
      description: "Same payment every month makes budgeting and financial planning easier"
    },
    {
      icon: TrendingUp,
      title: "Most Popular",
      description: "Over 60% of Canadians choose 5-year fixed mortgages for stability"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-green-100 text-green-700 border-green-200">
                <Shield className="h-3 w-3 mr-1" />
                Most Popular Choice
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                5-Year Fixed Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Lock in your rate for 5 years and enjoy predictable payments. 
                Compare the best 5-year fixed mortgage rates from top Canadian lenders.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3.84%</div>
                  <div className="text-sm text-muted-foreground">Best 5-Year Fixed Rate Today</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Rate Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">5-Year Fixed Rate Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Get live rates from our database for 5-year fixed mortgages
                </p>
              </div>
              <InteractiveRateCalculator defaultTransactionType="buying" />
            </div>
          </div>
        </section>

        {/* Current Rates */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Current 5-Year Fixed Rates</CardTitle>
                      <CardDescription>Based on $500,000 mortgage with 20% down payment</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                      Updated Today
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
                          <TableHead>Monthly Payment</TableHead>
                          <TableHead>APR</TableHead>
                          <TableHead>Special Features</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {fiveYearRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-green-50/50" : ""}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {rate.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                                {rate.lender}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-lg font-bold text-primary">{rate.rate}</span>
                            </TableCell>
                            <TableCell className="font-medium">{rate.payment}</TableCell>
                            <TableCell>{rate.apr}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {rate.features}  
                              </Badge>
                            </TableCell>
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

              {/* Why Choose 5-Year Fixed */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose a 5-Year Fixed Mortgage?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  5-year fixed mortgages offer the perfect balance of rate security and competitive rates.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <advantage.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Rate Forecast */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">5-Year Fixed Rate Forecast</CardTitle>
                  <CardDescription>Expert predictions for the next 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">Current Market Conditions</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Bank of Canada rate: 5.00%</li>
                        <li>• 5-year bond yield: 3.45%</li>
                        <li>• Spread over bonds: 0.39%</li>
                        <li>• Trend: Stable to declining</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">12-Month Outlook</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Expected range: 3.50% - 4.25%</li>
                        <li>• Potential for rate cuts in 2024</li>
                        <li>• Economic uncertainty remains</li>
                        <li>• Good time to lock in current rates</li>
                      </ul>
                    </div>
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

export default FiveYearFixed;
