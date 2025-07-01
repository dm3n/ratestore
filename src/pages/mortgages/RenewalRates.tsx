
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw, Star, TrendingUp } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";

const RenewalRates = () => {
  const renewalRates = [
    { lender: "RBC", rate: "3.79%", term: "5-Year Fixed", specialOffer: "Renewal Discount", location: "Canada Wide", featured: true },
    { lender: "TD Bank", rate: "3.84%", term: "5-Year Fixed", specialOffer: "Client Retention Rate", location: "Canada Wide", featured: true },
    { lender: "Scotiabank", rate: "3.89%", term: "5-Year Fixed", specialOffer: "Loyalty Rate", location: "Canada Wide", featured: false },
    { lender: "BMO", rate: "3.94%", term: "5-Year Fixed", specialOffer: "Renewal Special", location: "Canada Wide", featured: false },
    { lender: "CIBC", rate: "3.99%", term: "5-Year Fixed", specialOffer: "Existing Client Rate", location: "Canada Wide", featured: false },
  ];

  const renewalBenefits = [
    {
      icon: RefreshCw,
      title: "No Stress Renewal",
      description: "Renew with your current lender or explore better options elsewhere"
    },
    {
      icon: TrendingUp,
      title: "Better Rates Available", 
      description: "Renewal time is the perfect opportunity to negotiate better terms"
    },
    {
      icon: Star,
      title: "Loyalty Rewards",
      description: "Many lenders offer special rates to retain existing customers"
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
                <RefreshCw className="h-3 w-3 mr-1" />
                Mortgage Renewal
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Mortgage Renewal Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your mortgage is up for renewal? Compare the best renewal rates 
                and negotiate better terms with your current lender or switch to a new one.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3.79%</div>
                  <div className="text-sm text-muted-foreground">Best Renewal Rate Today</div>
                  <div className="text-xs text-muted-foreground mt-1">Special rates for existing customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Renewal Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Renewal Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Calculate your renewal payments and compare rates
                </p>
              </div>
              <InteractiveRateCalculator defaultTransactionType="renewal" />
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
                      <CardTitle className="text-2xl">Current Renewal Rates</CardTitle>
                      <CardDescription>Special rates for mortgage renewals from major Canadian lenders</CardDescription>
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
                          <TableHead>Term</TableHead>
                          <TableHead>Special Offer</TableHead>
                          <TableHead>Coverage</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {renewalRates.map((rate, index) => (
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
                            <TableCell>{rate.term}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs bg-orange-50 text-orange-600 border-orange-200">
                                {rate.specialOffer}
                              </Badge>
                            </TableCell>
                            <TableCell>{rate.location}</TableCell>
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
                <h2 className="text-3xl font-bold mb-4">Renewal Benefits</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Why renewal time is the perfect opportunity to save money.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {renewalBenefits.map((benefit, index) => (
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
                  <CardTitle className="text-2xl">Renewal vs New Mortgage</CardTitle>
                  <CardDescription>Understanding your options at renewal time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4 text-green-600">Stay with Current Lender</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• No paperwork or credit checks</li>
                        <li>• Automatic renewal process</li>
                        <li>• Loyalty discounts may apply</li>
                        <li>• Keep existing mortgage terms</li>
                        <li>• No legal or appraisal fees</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 text-orange-600">Switch to New Lender</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Potentially better rates available</li>
                        <li>• New lender may cover switch costs</li>
                        <li>• Opportunity to change mortgage terms</li>
                        <li>• Access to new mortgage products</li>
                        <li>• Credit check and income verification required</li>
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

export default RenewalRates;
