
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Scale, Shield, TrendingUp, Star } from "lucide-react";

const ThreeYearFixed = () => {
  const threeYearRates = [
    { lender: "Canadian Lender", rate: "4.04%", payment: "$2,378", features: "No fees", apr: "4.09%", featured: true },
    { lender: "Alternative Plus", rate: "4.11%", payment: "$2,411", features: "Cash back", apr: "4.16%", featured: true },
    { lender: "Scotiabank", rate: "4.94%", payment: "$2,756", features: "Branch access", apr: "4.99%", featured: false },
    { lender: "TD Bank", rate: "4.89%", payment: "$2,730", features: "Online tools", apr: "4.94%", featured: false },
    { lender: "RBC", rate: "5.04%", payment: "$2,803", features: "Rewards program", apr: "5.09%", featured: false },
  ];

  const benefits = [
    {
      icon: Scale,
      title: "Balanced Approach",
      description: "Good balance between rate and term security"
    },
    {
      icon: Shield,
      title: "Moderate Protection",
      description: "3 years of rate protection without long-term commitment"
    },
    {
      icon: TrendingUp,
      title: "Flexibility",
      description: "Opportunity to reassess in 3 years based on market conditions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-purple-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-purple-100 text-purple-700 border-purple-200">
                <Scale className="h-3 w-3 mr-1" />
                Balanced Choice
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                3-Year Fixed Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The middle ground between flexibility and security. Compare 3-year fixed 
                mortgage rates from top Canadian lenders.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.04%</div>
                  <div className="text-sm text-muted-foreground">Best 3-Year Fixed Rate Today</div>
                </div>
              </div>
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
                      <CardTitle className="text-2xl">Current 3-Year Fixed Rates</CardTitle>
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
                        {threeYearRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-purple-50/50" : ""}>
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
                <h2 className="text-3xl font-bold mb-4">Why Choose 3-Year Fixed?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  3-year terms offer a good compromise between rate security and flexibility.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
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

export default ThreeYearFixed;
