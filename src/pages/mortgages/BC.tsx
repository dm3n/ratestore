import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";
import { MortgageHero } from "@/components/MortgageHero";

const BC = () => {
  const bcRates = [
    { lender: "Vancity", rate: "3.89%", term: "5-Year Fixed", location: "Vancouver", featured: true },
    { lender: "Coast Capital Savings", rate: "3.94%", term: "5-Year Fixed", location: "BC Wide", featured: true },
    { lender: "First West Credit Union", rate: "4.01%", term: "5-Year Fixed", location: "BC", featured: false },
    { lender: "G&F Financial", rate: "4.07%", term: "5-Year Fixed", location: "Vancouver", featured: false },
    { lender: "BlueShore Financial", rate: "4.12%", term: "5-Year Fixed", location: "North Vancouver", featured: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <MortgageHero
          badge={{
            text: "British Columbia",
            icon: MapPin,
            color: "green"
          }}
          title="BC Mortgage"
          subtitle="Rates"
          description="Find the best mortgage rates in Beautiful British Columbia. Compare rates from local credit unions, banks, and lenders across Vancouver, Victoria, and the entire province."
          rate={{
            value: "3.89%",
            label: "Best BC Rate Today",
            sublabel: "From local credit unions"
          }}
          stats={[
            {
              value: "25+",
              label: "Local Lenders",
              sublabel: "Credit unions & banks"
            },
            {
              value: "Province-wide",
              label: "Coverage",
              sublabel: "Vancouver to Victoria"
            }
          ]}
          cta={{
            primary: {
              text: "Compare BC Rates",
              href: "/compare-all-rates"
            },
            secondary: {
              text: "Calculate Payments",
              href: "/tools/mortgage-calculator"
            }
          }}
          gradientColors={{
            from: "green-50",
            to: "emerald-50"
          }}
        />

        {/* Interactive Rate Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">BC Mortgage Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Calculate your mortgage payments with BC rates
                </p>
              </div>
              <InteractiveRateCalculator provinceFilter="BC" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">BC Mortgage Rates</CardTitle>
                  <CardDescription>Credit unions and lenders in British Columbia</CardDescription>
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
                        {bcRates.map((rate, index) => (
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

export default BC;
