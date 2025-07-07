
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Home, Award, TrendingUp, RefreshCw } from "lucide-react";
import { useMortgageRates } from "@/hooks/useMortgageRates";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function InteractiveRateCalculator() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [showMoreRates, setShowMoreRates] = useState(false);
  
  // Fetch different types of rates
  const { rates: fixedRates, isLoading: loadingFixed, refetch: refetchFixed } = useMortgageRates({
    rateType: 'fixed',
    term: '5-yr',
    autoRefresh: true
  });

  const { rates: variableRates, isLoading: loadingVariable } = useMortgageRates({
    rateType: 'variable',
    term: '5-yr',
    autoRefresh: true
  });

  const { rates: shortTermRates, isLoading: loadingShort } = useMortgageRates({
    rateType: 'fixed',
    term: '3-yr',
    autoRefresh: true
  });

  const isLoading = loadingFixed || loadingVariable || loadingShort;

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const formatRate = (rate: number) => `${(rate * 100).toFixed(2)}%`;

  const getRatesByType = (rates: any[], type: string) => {
    return rates
      .filter(rate => rate.lender_type === type)
      .slice(0, showMoreRates ? rates.length : 3)
      .map(rate => ({
        lender: rate.lender_name,
        rate: formatRate(rate.base_rate),
        term: rate.term.replace('-', ' ').replace('yr', 'Year'),
        type: rate.rate_type,
        province: rate.province,
        transactionTypes: rate.transaction_types,
        primeDiscount: rate.prime_discount
      }));
  };

  const rateCategories = [
    {
      id: 'fixed-5yr',
      title: '5-Year Fixed Rates',
      description: 'Locked-in rates for 5 years - most popular choice',
      icon: <Home className="h-5 w-5 text-blue-600" />,
      rates: fixedRates.slice(0, showMoreRates ? 12 : 6),
      badge: 'Most Popular'
    },
    {
      id: 'variable-5yr',
      title: '5-Year Variable Rates',
      description: 'Rates that fluctuate with prime rate changes',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      rates: variableRates.slice(0, showMoreRates ? 12 : 6),
      badge: 'Flexible'
    },
    {
      id: 'fixed-3yr',
      title: '3-Year Fixed Rates',
      description: 'Shorter-term fixed rates for quicker renewal',
      icon: <Award className="h-5 w-5 text-purple-600" />,
      rates: shortTermRates.slice(0, showMoreRates ? 12 : 6),
      badge: 'Short Term'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <RefreshCw className="h-3 w-3 mr-1" />
            Live Rates
          </Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Best Mortgage Rates in Canada</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare live mortgage rates from Canada's top lenders. Updated automatically from our database.
        </p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex justify-between items-center p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                          <div className="h-3 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-16"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Rate Categories */}
      {!isLoading && (
        <div className="space-y-6">
          {rateCategories.map((category) => (
            <Card key={category.id} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <Badge variant="outline" className="bg-blue-50 text-blue-600">
                          {category.badge}
                        </Badge>
                      </div>
                      <CardDescription className="mt-1">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection(category.id)}
                    className="flex items-center gap-2"
                  >
                    {expandedSections.includes(category.id) ? (
                      <>
                        <span>Hide</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>Show</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              
              {expandedSections.includes(category.id) && (
                <CardContent>
                  <div className="space-y-3">
                    {category.rates.length > 0 ? (
                      <>
                        {category.rates.map((rate, index) => (
                          <div
                            key={index}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors gap-4"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <Home className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">{rate.lender_name}</div>
                                <div className="text-sm text-gray-600">
                                  {rate.term.replace('-', ' ').replace('yr', ' Year')} {rate.rate_type === 'fixed' ? 'Fixed' : 'Variable'}
                                  {rate.prime_discount && ` (${rate.prime_discount})`}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {rate.province} • {rate.transaction_types?.join(', ')}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                              <div className="text-2xl font-bold text-primary">
                                {formatRate(rate.base_rate)}
                              </div>
                              <Button variant="outline" size="sm" className="shrink-0">
                                Get Quote
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        {/* Show More/Less Button */}
                        <div className="text-center pt-4 border-t">
                          <Button 
                            variant="outline" 
                            onClick={() => setShowMoreRates(!showMoreRates)}
                            className="flex items-center gap-2"
                          >
                            {showMoreRates ? (
                              <>
                                <span>Show Less</span>
                                <ChevronUp className="h-4 w-4" />
                              </>
                            ) : (
                              <>
                                <span>Show More Rates</span>
                                <ChevronDown className="h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <Alert>
                        <AlertDescription>
                          No rates available for this category at the moment.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Footer CTA */}
      <Card className="bg-primary text-white border-primary">
        <CardContent className="text-center py-8">
          <h3 className="text-xl font-bold mb-2">Ready to Get Pre-Approved?</h3>
          <p className="mb-4 opacity-90">
            Lock in your rate today and secure your mortgage with Canada's best lenders.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Get Pre-Approved Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
