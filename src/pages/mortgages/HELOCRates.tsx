import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Home, CreditCard, Zap, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";

const HELOCRates = () => {
  const helocRates = [
    { lender: "Canadian Lender", rate: "5.45%", creditLimit: "$250,000", features: "No annual fee", qualification: "65% LTV", featured: true },
    { lender: "Scotiabank", rate: "5.70%", creditLimit: "$500,000", features: "Branch access", qualification: "65% LTV", featured: true },
    { lender: "TD Bank", rate: "5.95%", creditLimit: "$350,000", features: "Online banking", qualification: "65% LTV", featured: false },
    { lender: "RBC", rate: "6.20%", creditLimit: "$400,000", features: "Investment options", qualification: "65% LTV", featured: false },
    { lender: "BMO", rate: "6.45%", creditLimit: "$300,000", features: "Mobile app", qualification: "65% LTV", featured: false },
  ];

  const helocBenefits = [
    {
      icon: Home,
      title: "Use Your Home Equity",
      description: "Access up to 65% of your home's value as a revolving credit line"
    },
    {
      icon: CreditCard,
      title: "Flexible Access", 
      description: "Use funds as needed and only pay interest on what you borrow"
    },
    {
      icon: Zap,
      title: "Interest Only Payments",
      description: "Make interest-only payments or pay down principal when convenient"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-indigo-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-indigo-100 text-indigo-700 border-indigo-200">
                <Home className="h-3 w-3 mr-1" />
                Home Equity Line of Credit
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                HELOC Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Unlock your home's equity with a Home Equity Line of Credit. 
                Compare HELOC rates and access flexible funding.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5.45%</div>
                  <div className="text-sm text-muted-foreground">Best HELOC Rate Today</div>
                  <div className="text-xs text-muted-foreground mt-1">Variable rate based on Prime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive HELOC Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">HELOC Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Calculate your potential HELOC payments and compare rates
                </p>
              </div>
              <InteractiveRateCalculator defaultTransactionType="heloc" />
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
                      <CardTitle className="text-2xl">Current HELOC Rates</CardTitle>
                      <CardDescription>Home Equity Lines of Credit from major Canadian lenders</CardDescription>
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
                          <TableHead>Max Credit Limit</TableHead>
                          <TableHead>LTV Requirement</TableHead>
                          <TableHead>Features</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {helocRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-indigo-50/50" : ""}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {rate.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                                {rate.lender}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-lg font-bold text-primary">{rate.rate}</span>
                            </TableCell>
                            <TableCell className="font-medium">{rate.creditLimit}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {rate.qualification}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm">{rate.features}</TableCell>
                            <TableCell>
                              <Button size="sm" variant={rate.featured ? "default" : "outline"}>
                                Apply Now
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
                <h2 className="text-3xl font-bold mb-4">HELOC Benefits</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Understanding how a Home Equity Line of Credit can work for you.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {helocBenefits.map((benefit, index) => (
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">HELOC vs Traditional Mortgage</CardTitle>
                  <CardDescription>Understanding the key differences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4 text-green-600">HELOC Advantages</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Pay interest only on amount used</li>
                        <li>• Flexible repayment terms</li>
                        <li>• Reusable credit line</li>
                        <li>• No prepayment penalties</li>
                        <li>• Quick access to funds</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 text-orange-600">Considerations</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Variable interest rates</li>
                        <li>• Higher rates than mortgages</li>
                        <li>• Home is collateral</li>
                        <li>• Requires equity in home</li>
                        <li>• Annual review by lender</li>
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

export default HELOCRates;
