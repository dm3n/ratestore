
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Star } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";

const Alberta = () => {
  const albertaRates = [
    { lender: "Alberta Credit Union", rate: "3.89%", term: "5-Year Fixed", location: "Calgary", featured: true },
    { lender: "ATB Financial", rate: "3.94%", term: "5-Year Fixed", location: "Edmonton", featured: true },
    { lender: "Servus Credit Union", rate: "4.01%", term: "5-Year Fixed", location: "Alberta Wide", featured: false },
    { lender: "Connect First Credit Union", rate: "4.05%", term: "5-Year Fixed", location: "Calgary", featured: false },
    { lender: "Vision Credit Union", rate: "4.12%", term: "5-Year Fixed", location: "Southern Alberta", featured: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-red-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-red-100 text-red-700 border-red-200">
                <MapPin className="h-3 w-3 mr-1" />
                Alberta Province
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Alberta Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find the best mortgage rates in Alberta from local credit unions 
                and regional lenders in Calgary, Edmonton, and across the province.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3.89%</div>
                  <div className="text-sm text-muted-foreground">Best Alberta Rate Today</div>
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
                <h2 className="text-3xl font-bold mb-4">Alberta Mortgage Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Calculate your mortgage payments with Alberta rates
                </p>
              </div>
              <InteractiveRateCalculator />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Alberta Mortgage Rates</CardTitle>
                  <CardDescription>Local lenders and credit unions in Alberta</CardDescription>
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
                        {albertaRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-red-50/50" : ""}>
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

export default Alberta;
