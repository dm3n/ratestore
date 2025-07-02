
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Star, Award } from "lucide-react";
import { useMortgageRates } from "@/hooks/useMortgageRates";

const BankRates = () => {
  const { rates, isLoading, error } = useMortgageRates({
    lenderType: 'bank',
    rateType: 'fixed',
    term: '5-yr',
    autoRefresh: true
  });

  // Filter for major Canadian banks and sort by rate
  const majorBanks = ['RBC', 'RBC Royal Bank', 'TD', 'TD Bank', 'TD Canada Trust', 'Scotiabank', 'BMO', 'BMO Bank of Montreal', 'CIBC'];
  
  const bankRates = rates
    .filter(rate => majorBanks.some(bank => 
      rate.lender_name.toLowerCase().includes(bank.toLowerCase())
    ))
    .slice(0, 5)
    .map((rate, index) => ({
      bank: rate.lender_name,
      rate: `${(rate.base_rate * 100).toFixed(2)}%`,
      term: rate.term.replace('-', ' ').replace('yr', 'Year Fixed'),
      special: rate.prime_discount || "Standard Rate",
      featured: index < 2 // First 2 rates are featured
    }));

  // Get the best rate for display
  const bestRate = bankRates.length > 0 ? bankRates[0].rate : "4.79%";

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    console.error('Error loading bank rates:', error);
  }

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
                  <div className="text-3xl font-bold text-primary mb-2">{bestRate}</div>
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
                  <CardDescription>
                    Current rates from Canada's Big 5 banks - Updated live from our rate database
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {bankRates.length > 0 ? (
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
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        No bank rates available at the moment. Please check back later.
                      </p>
                    </div>
                  )}
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
