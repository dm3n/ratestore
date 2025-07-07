import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Building2, Home, Filter, Search, ArrowUpDown } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";
import { useMortgageRates } from "@/hooks/useMortgageRates";
import { useState } from "react";

const CompareAllRates = () => {
  const [filters, setFilters] = useState({
    lenderType: 'all',
    rateType: 'all',
    term: 'all',
    province: 'all'
  });
  
  const [sortBy, setSortBy] = useState('rate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { rates, isLoading } = useMortgageRates({
    autoRefresh: true
  });

  // Filter and sort rates
  const filteredRates = rates
    .filter(rate => {
      if (filters.lenderType !== 'all' && rate.lender_type !== filters.lenderType) return false;
      if (filters.rateType !== 'all' && rate.rate_type !== filters.rateType) return false;
      if (filters.term !== 'all' && rate.term !== filters.term) return false;
      if (filters.province !== 'all' && rate.province !== filters.province) return false;
      return true;
    })
    .sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'rate':
          aValue = a.base_rate;
          bValue = b.base_rate;
          break;
        case 'lender':
          aValue = a.lender_name;
          bValue = b.lender_name;
          break;
        case 'term':
          aValue = a.term;
          bValue = b.term;
          break;
        default:
          aValue = a.base_rate;
          bValue = b.base_rate;
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      
      return sortOrder === 'asc' ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue);
    });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Compare All Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Browse and compare mortgage rates from all lenders in our database. 
                Filter by lender type, rate type, term, and province to find your perfect match.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <InteractiveRateCalculator />
            </div>
          </div>
        </section>

        {/* Comprehensive Rate Comparison */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">All Available Rates</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Complete database of mortgage rates from banks, credit unions, and alternative lenders across Canada.
                </p>
              </div>

              {/* Filters */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filter & Sort Rates
                  </CardTitle>
                  <CardDescription>
                    Use the filters below to narrow down your search and find the best rates for your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="space-y-2">
                      <Label>Lender Type</Label>
                      <Select value={filters.lenderType} onValueChange={(value) => handleFilterChange('lenderType', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Lenders</SelectItem>
                          <SelectItem value="bank">Banks</SelectItem>
                          <SelectItem value="credit_union">Credit Unions</SelectItem>
                          <SelectItem value="home">Alternative Lenders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Rate Type</Label>
                      <Select value={filters.rateType} onValueChange={(value) => handleFilterChange('rateType', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="fixed">Fixed</SelectItem>
                          <SelectItem value="variable">Variable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Term</Label>
                      <Select value={filters.term} onValueChange={(value) => handleFilterChange('term', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Terms</SelectItem>
                          <SelectItem value="1-yr">1 Year</SelectItem>
                          <SelectItem value="2-yr">2 Years</SelectItem>
                          <SelectItem value="3-yr">3 Years</SelectItem>
                          <SelectItem value="5-yr">5 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Province</Label>
                      <Select value={filters.province} onValueChange={(value) => handleFilterChange('province', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Provinces</SelectItem>
                          <SelectItem value="BC">British Columbia</SelectItem>
                          <SelectItem value="AB">Alberta</SelectItem>
                          <SelectItem value="ON">Ontario</SelectItem>
                          <SelectItem value="QC">Quebec</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSort('rate')}
                      className="flex items-center gap-1"
                    >
                      <ArrowUpDown className="h-3 w-3" />
                      Sort by Rate {sortBy === 'rate' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSort('lender')}
                      className="flex items-center gap-1"
                    >
                      <ArrowUpDown className="h-3 w-3" />
                      Sort by Lender {sortBy === 'lender' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSort('term')}
                      className="flex items-center gap-1"
                    >
                      <ArrowUpDown className="h-3 w-3" />
                      Sort by Term {sortBy === 'term' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Results Summary */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredRates.length} rates out of {rates.length} total rates
                </p>
              </div>

              {/* Rate Cards */}
              <div className="grid gap-4">
                {isLoading ? (
                  // Loading skeleton
                  Array.from({ length: 5 }).map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div className="space-y-2">
                            <div className="h-6 bg-gray-200 rounded w-48"></div>
                            <div className="h-4 bg-gray-200 rounded w-32"></div>
                          </div>
                          <div className="text-right space-y-2">
                            <div className="h-8 bg-gray-200 rounded w-24"></div>
                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  filteredRates.map((rate) => (
                    <Card key={rate.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {rate.lender_type === 'bank' ? (
                                <Building2 className="h-5 w-5 text-blue-600" />
                              ) : (
                                <Home className="h-5 w-5 text-green-600" />
                              )}
                              <h3 className="text-lg font-semibold">{rate.lender_name}</h3>
                              <Badge variant={rate.rate_type === 'fixed' ? 'default' : 'secondary'}>
                                {rate.rate_type}
                              </Badge>
                              <Badge variant="outline">{rate.term}</Badge>
                              {rate.province && <Badge variant="outline">{rate.province}</Badge>}
                            </div>
                            
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>Min. Down Payment: {(Number(rate.min_down_payment) * 100).toFixed(0)}%</p>
                              <p>Max. LTV: {(Number(rate.max_loan_to_value) * 100).toFixed(0)}%</p>
                              {rate.prime_discount && <p>Prime Discount: {rate.prime_discount}</p>}
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-3xl font-bold text-primary mb-1">
                              {(Number(rate.base_rate) * 100).toFixed(2)}%
                            </div>
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              Get Quote
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {filteredRates.length === 0 && !isLoading && (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No rates found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters to see more results.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompareAllRates;