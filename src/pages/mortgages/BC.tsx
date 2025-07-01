
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Star } from "lucide-react";

const BC = () => {
  const bcRates = [
    { lender: "Vancity Credit Union", rate: "3.92%", term: "5-Year Fixed", location: "Vancouver", featured: true },
    { lender: "Coast Capital", rate: "3.97%", term: "5-Year Fixed", location: "BC Wide", featured: true },
    { lender: "G&F Financial", rate: "4.03%", term: "5-Year Fixed", location: "Lower Mainland", featured: false },
    { lender: "BlueShore Financial", rate: "4.08%", term: "5-Year Fixed", location: "North Shore", featured: false },
    { lender: "First West Credit Union", rate: "4.15%", term: "5-Year Fixed", location: "BC Wide", featured: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-green-100 text-green-700 border-green-200">
                <MapPin className="h-3 w-3 mr-1" />
                British Columbia
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                BC Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare mortgage rates in British Columbia from Vancouver credit unions 
                and regional lenders across the province.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3.92%</div>
                  <div className="text-sm text-muted-foreground">Best BC Rate Today</div>
                </div>
              </div>
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
