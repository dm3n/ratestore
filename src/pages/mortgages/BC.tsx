
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Star, RefreshCw } from "lucide-react";
import { useMortgageRates } from "@/hooks/useMortgageRates";

const BC = () => {
  const { rates, isLoading, lastUpdated, refetch } = useMortgageRates({
    lenderType: 'credit_union',
    autoRefresh: true
  });

  // Get the best rate for the header
  const bestRate = rates.length > 0 ? rates[0] : null;

  // Transform rates for display
  const bcRates = rates.slice(0, 5).map((rate, index) => ({
    lender: rate.lender_name,
    rate: `${(rate.base_rate * 100).toFixed(2)}%`,
    term: rate.term.replace('-', ' ').replace('yr', 'Year Fixed'),
    location: rate.lender_type === 'credit_union' ? 'BC Wide' : 'Various',
    featured: index < 2
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-green-100 text-green-700 border-green-200">
                <MapPin className="h-3 w-3 mr-1" />
                British Columbia - Live Rates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                BC Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare live mortgage rates in British Columbia from credit unions 
                and regional lenders. Updated automatically.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  {isLoading ? (
                    <div className="animate-pulse">
                      <div className="h-8 bg-gray-200 rounded w-24 mx-auto mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
                    </div>
                  ) : bestRate ? (
                    <>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {(bestRate.base_rate * 100).toFixed(2)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Best BC Rate Today</div>
                    </>
                  ) : (
                    <div className="text-muted-foreground">Loading rates...</div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                {lastUpdated && (
                  <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={refetch}
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Live BC Mortgage Rates</CardTitle>
                  <CardDescription>
                    Credit unions and lenders in British Columbia - Updated automatically from our database
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded animate-pulse">
                          <div className="flex items-center gap-4">
                            <div className="w-4 h-4 bg-gray-200 rounded"></div>
                            <div className="h-6 bg-gray-200 rounded w-32"></div>
                          </div>
                          <div className="flex items-center gap-8">
                            <div className="h-6 bg-gray-200 rounded w-16"></div>
                            <div className="h-6 bg-gray-200 rounded w-20"></div>
                            <div className="h-6 bg-gray-200 rounded w-24"></div>
                            <div className="h-8 bg-gray-200 rounded w-20"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : bcRates.length > 0 ? (
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
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No BC rates available at the moment. Please check back later.
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

export default BC;
