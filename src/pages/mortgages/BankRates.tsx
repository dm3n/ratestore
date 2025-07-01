
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Star, Award } from "lucide-react";

const BankRates = () => {
  const bankRates = [
    { bank: "RBC Royal Bank", rate: "4.79%", term: "5-Year Fixed", special: "New client offer", featured: true },
    { bank: "TD Canada Trust", rate: "4.84%", term: "5-Year Fixed", special: "Branch exclusive", featured: true },
    { bank: "Scotiabank", rate: "4.89%", term: "5-Year Fixed", special: "Scotia Rewards", featured: false },
    { bank: "BMO Bank of Montreal", rate: "4.94%", term: "5-Year Fixed", special: "Smart Fixed", featured: false },
    { bank: "CIBC", rate: "4.99%", term: "5-Year Fixed", special: "CIBC Smart Account", featured: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
                <Building2 className="h-3 w-3 mr-1" />
                Big 5 Banks
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Best Bank Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare mortgage rates from Canada's major banks. Find the best rates 
                from RBC, TD, Scotiabank, BMO, and CIBC.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.79%</div>
                  <div className="text-sm text-muted-foreground">Best Bank Rate Today</div>
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
                  <CardTitle className="text-2xl">Major Bank Mortgage Rates</CardTitle>
                  <CardDescription>Current rates from Canada's Big 5 banks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Bank</TableHead>
                          <TableHead>Rate</TableHead>
                          <TableHead>Term</TableHead>
                          <TableHead>Special Offer</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bankRates.map((rate, index) => (
                          <TableRow key={index} className={rate.featured ? "bg-blue-50/50" : ""}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {rate.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                                {rate.bank}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-lg font-bold text-primary">{rate.rate}</span>
                            </TableCell>
                            <TableCell>{rate.term}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {rate.special}
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BankRates;
