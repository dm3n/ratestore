import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";
import { MortgageHero } from "@/components/MortgageHero";

const Quebec = () => {
  const quebecRates = [
    { lender: "Desjardins", rate: "3.94%", term: "5-Year Fixed", location: "Quebec Wide", featured: true },
    { lender: "Caisse Populaire", rate: "3.99%", term: "5-Year Fixed", location: "Quebec", featured: true },
    { lender: "Laurentian Bank", rate: "4.06%", term: "5-Year Fixed", location: "Montreal", featured: false },
    { lender: "Multi-Prêts Hypothèques", rate: "4.11%", term: "5-Year Fixed", location: "Quebec City", featured: false },
    { lender: "Hypotheca", rate: "4.18%", term: "5-Year Fixed", location: "Quebec Wide", featured: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <MortgageHero
          badge={{
            text: "Province de Québec",
            icon: MapPin,
            color: "purple"
          }}
          title="Quebec Mortgage"
          subtitle="Rates"
          description="Compare mortgage rates in Quebec from Desjardins, local credit unions, and regional lenders. Find the best rates in Montreal, Quebec City, and across la belle province."
          rate={{
            value: "3.94%",
            label: "Best Quebec Rate Today",
            sublabel: "From local lenders"
          }}
          stats={[
            {
              value: "15+",
              label: "Local Lenders",
              sublabel: "Caisses & banks"
            },
            {
              value: "Province-wide",
              label: "Coverage",
              sublabel: "Montreal to Quebec City"
            }
          ]}
          cta={{
            primary: {
              text: "Compare Quebec Rates",
              href: "/compare-all-rates"
            },
            secondary: {
              text: "Calculate Payments",
              href: "/tools/mortgage-calculator"
            }
          }}
          gradientColors={{
            from: "purple-50",
            to: "violet-50"
          }}
        />

        {/* Interactive Rate Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Quebec Mortgage Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Calculate your mortgage payments with Quebec rates
                </p>
              </div>
              <InteractiveRateCalculator provinceFilter="QC" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Quebec Mortgage Rates</CardTitle>
                  <CardDescription>Credit unions and lenders in Quebec</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Lender</TableHead>
                          <TableHead>Rate</TableHead>
                          <TableHead>Term</TableHead>
                          <TableHead>Service Area</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {quebecRates.map((rate, index) => (
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
                            <TableCell>{rate.term}</TableCell>
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quebec;
