
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingDown, Shield, Calculator, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";

const FiveYearVariable = () => {
  const variableRates = [
    { lender: "Canadian Lender", rate: "4.70%", payment: "$2,617", discount: "Prime - 0.30%", apr: "4.75%", featured: true },
    { lender: "Alternative Plus", rate: "4.80%", payment: "$2,656", discount: "Prime - 0.20%", apr: "4.85%", featured: true },
    { lender: "Scotiabank", rate: "5.40%", payment: "$2,906", discount: "Prime + 0.40%", apr: "5.45%", featured: false },
    { lender: "TD Bank", rate: "5.30%", payment: "$2,870", discount: "Prime + 0.30%", apr: "5.35%", featured: false },
    { lender: "RBC", rate: "5.50%", payment: "$2,942", discount: "Prime + 0.50%", apr: "5.55%", featured: false },
  ];

  const considerations = [
    {
      icon: TrendingDown,
      title: "Better Discounts",
      description: "5-year terms typically offer better discounts off prime rate"
    },
    {
      icon: Shield,
      title: "Longer Commitment",
      description: "5-year term with variable rate flexibility throughout"
    },
    {
      icon: Calculator,
      title: "Payment Options",
      description: "Choose fixed payments or payments that adjust with rates"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-teal-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-teal-100 text-teal-700 border-teal-200">
                <TrendingDown className="h-3 w-3 mr-1" />
                Best Variable Discounts
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                5-Year Variable Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the best variable rate discounts with a 5-year term. 
                Flexibility meets competitive pricing.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.70%</div>
                  <div className="text-sm text-muted-foreground">Best 5-Year Variable Rate Today</div>
                  <div className="text-xs text-muted-foreground mt-1">(Prime - 0.30%)</div>
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
                <h2 className="text-3xl font-bold mb-4">5-Year Variable Rate Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Get live rates from our database for 5-year variable mortgages
                </p>
              </div>
              <InteractiveRateCalculator defaultTransactionType="buying" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Current 5-Year Variable Rates</CardTitle>
                      <CardDescription>Based on $500,000 mortgage, rates relative to Prime (5.00%)</CardDescription>
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
                          <TableHead>Prime Discount</TableHead>
                          <TableHead>Monthly Payment</TableHead>
                          <TableHead>APR</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {variableRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-teal-50/50" : ""}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {rate.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                                {rate.lender}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-lg font-bold text-primary">{rate.rate}</span>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className={`text-xs ${rate.discount.includes('-') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {rate.discount}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-medium">{rate.payment}</TableCell>
                            <TableCell>{rate.apr}</TableCell>
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

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">5-Year Variable Advantages</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Why 5-year variable rates are popular among Canadian borrowers.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {considerations.map((consideration, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <consideration.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{consideration.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{consideration.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiveYearVariable;
