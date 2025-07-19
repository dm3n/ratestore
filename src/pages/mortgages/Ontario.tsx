import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";
import { MortgageHero } from "@/components/MortgageHero";

const Ontario = () => {
  const ontarioRates = [
    { lender: "Meridian Credit Union", rate: "3.86%", term: "5-Year Fixed", location: "Ontario Wide", featured: true },
    { lender: "DUCA Financial", rate: "3.91%", term: "5-Year Fixed", location: "GTA", featured: true },
    { lender: "Alterna Savings", rate: "3.98%", term: "5-Year Fixed", location: "Ontario", featured: false },
    { lender: "Libro Credit Union", rate: "4.04%", term: "5-Year Fixed", location: "Southwestern ON", featured: false },
    { lender: "Your Neighbourhood Credit Union", rate: "4.09%", term: "5-Year Fixed", location: "Toronto", featured: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <MortgageHero
          badge={{
            text: "Ontario Province",
            icon: MapPin,
            color: "blue"
          }}
          title="Ontario Mortgage"
          subtitle="Rates"
          description="Find competitive mortgage rates in Ontario from Toronto credit unions and regional lenders. Access the best rates from the GTA to Ottawa and everywhere in between."
          rate={{
            value: "3.86%",
            label: "Best Ontario Rate Today",
            sublabel: "From credit unions"
          }}
          stats={[
            {
              value: "30+",
              label: "Local Lenders",
              sublabel: "Credit unions & banks"
            },
            {
              value: "Province-wide",
              label: "Coverage",
              sublabel: "Toronto to Ottawa"
            }
          ]}
          cta={{
            primary: {
              text: "Compare Ontario Rates",
              href: "/compare-all-rates"
            },
            secondary: {
              text: "Calculate Payments",
              href: "/tools/mortgage-calculator"
            }
          }}
          gradientColors={{
            from: "blue-50",
            to: "indigo-50"
          }}
        />

        {/* Interactive Rate Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Ontario Mortgage Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Calculate your mortgage payments with Ontario rates
                </p>
              </div>
              <InteractiveRateCalculator provinceFilter="ON" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Ontario Mortgage Rates</CardTitle>
                  <CardDescription>Credit unions and lenders in Ontario</CardDescription>
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
                        {ontarioRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-blue-50/50" : ""}>
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

export default Ontario;
