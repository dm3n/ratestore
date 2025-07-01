
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingDown, AlertTriangle, DollarSign, Star } from "lucide-react";

const ThreeYearVariable = () => {
  const variableRates = [
    { lender: "Canadian Lender", rate: "4.75%", payment: "$2,634", discount: "Prime - 0.25%", apr: "4.80%", featured: true },
    { lender: "Alternative Plus", rate: "4.85%", payment: "$2,673", discount: "Prime - 0.15%", apr: "4.90%", featured: true },
    { lender: "Scotiabank", rate: "5.45%", payment: "$2,921", discount: "Prime + 0.45%", apr: "5.50%", featured: false },
    { lender: "TD Bank", rate: "5.35%", payment: "$2,885", discount: "Prime + 0.35%", apr: "5.40%", featured: false },
    { lender: "RBC", rate: "5.55%", payment: "$2,958", discount: "Prime + 0.55%", apr: "5.60%", featured: false },
  ];

  const variableFeatures = [
    {
      icon: TrendingDown,
      title: "Rate Flexibility",
      description: "Benefit from rate decreases when Bank of Canada cuts rates"
    },
    {
      icon: DollarSign,
      title: "Lower Penalties",
      description: "Typically 3 months interest penalty vs. IRD on fixed rates"
    },
    {
      icon: AlertTriangle,
      title: "Rate Risk",
      description: "Payments can increase if interest rates rise"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-yellow-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-yellow-100 text-yellow-700 border-yellow-200">
                <TrendingDown className="h-3 w-3 mr-1" />
                Rate Flexibility
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                3-Year Variable Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take advantage of rate flexibility with variable rates. Your rate changes 
                with the Bank of Canada's prime rate.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.75%</div>
                  <div className="text-sm text-muted-foreground">Best 3-Year Variable Rate Today</div>
                  <div className="text-xs text-muted-foreground mt-1">(Prime - 0.25%)</div>
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
                      <CardTitle className="text-2xl">Current 3-Year Variable Rates</CardTitle>
                      <CardDescription>Rates shown relative to Prime Rate (currently 5.00%)</CardDescription>
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
                          <TableRow key={index} className={rate.featured ? "bg-yellow-50/50" : ""}>
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
                <h2 className="text-3xl font-bold mb-4">Variable Rate Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Understanding how variable rates work and their key benefits.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {variableFeatures.map((feature, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
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

export default ThreeYearVariable;
