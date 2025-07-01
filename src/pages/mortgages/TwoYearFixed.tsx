import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingDown, Clock, AlertTriangle, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";

const TwoYearFixed = () => {
  const twoYearRates = [
    { lender: "Canadian Lender", rate: "4.24%", payment: "$2,445", features: "No fees", apr: "4.29%", featured: true },
    { lender: "Alternative Plus", rate: "4.31%", payment: "$2,478", features: "Cash back", apr: "4.36%", featured: true },
    { lender: "Scotiabank", rate: "5.14%", payment: "$2,821", features: "Branch access", apr: "5.19%", featured: false },
    { lender: "TD Bank", rate: "5.09%", payment: "$2,795", features: "Online tools", apr: "5.14%", featured: false },
    { lender: "RBC", rate: "5.24%", payment: "$2,868", features: "Rewards program", apr: "5.29%", featured: false },
  ];

  const considerations = [
    {
      icon: TrendingDown,
      title: "Lower Initial Rates",
      description: "2-year terms often have lower rates than longer terms initially"
    },
    {
      icon: Clock,
      title: "Frequent Renewals",
      description: "You'll need to renew more often, creating rate uncertainty"
    },
    {
      icon: AlertTriangle,
      title: "Rate Risk",
      description: "Risk of rates increasing when you renew in 2 years"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-orange-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-orange-100 text-orange-700 border-orange-200">
                <Clock className="h-3 w-3 mr-1" />
                Short Term Option
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                2-Year Fixed Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Lower initial rates but more frequent renewals. Compare 2-year fixed 
                mortgage rates from Canada's top lenders.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.24%</div>
                  <div className="text-sm text-muted-foreground">Best 2-Year Fixed Rate Today</div>
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
                <h2 className="text-3xl font-bold mb-4">2-Year Fixed Rate Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Get live rates from our database for 2-year fixed mortgages
                </p>
              </div>
              <InteractiveRateCalculator 
                defaultTransactionType="buying" 
                termFilter="2-yr"
              />
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
                      <CardTitle className="text-2xl">Current 2-Year Fixed Rates</CardTitle>
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
                        {twoYearRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-orange-50/50" : ""}>
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

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">2-Year Fixed: Pros & Cons</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Understanding the benefits and risks of shorter mortgage terms.
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

export default TwoYearFixed;
