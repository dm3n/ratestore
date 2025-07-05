
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { PiggyBank, TrendingUp, Shield, Clock, ChevronDown, RefreshCw } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface GICRate {
  id: string;
  institution: string;
  rate: number;
  term: string;
  gic_type: string;
  min_investment: number;
  max_investment: number | null;
  province: string;
  special_features: string[];
  promotional_rate: boolean;
  promotional_expires_at: string | null;
  is_featured: boolean;
  is_sponsored: boolean;
  is_active: boolean;
}

interface GICRateEngineProps {
  title?: string;
  subtitle?: string;
  filterType?: string;
  showTypeFilter?: boolean;
  showLocationFilter?: boolean;
}

export function GICRateEngine({ 
  title = "Compare GICs", 
  subtitle = "Find the best guaranteed investment certificate rates in Canada",
  filterType,
  showTypeFilter = true,
  showLocationFilter = true
}: GICRateEngineProps) {
  const [selectedType, setSelectedType] = useState(filterType || "non-registered");
  const [selectedTerm, setSelectedTerm] = useState("1-year");
  const [selectedBalance, setSelectedBalance] = useState("5000");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [gicRates, setGicRates] = useState<GICRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const { toast } = useToast();

  const fetchGICRates = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('gic_rates')
        .select('*')
        .eq('is_active', true)
        .order('rate', { ascending: false });

      if (error) throw error;
      setGicRates(data || []);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching GIC rates:', error);
      toast({
        title: "Error",
        description: "Failed to fetch GIC rates",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGICRates();
  }, []);

  // Trigger reload when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchGICRates();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [selectedType, selectedTerm, selectedBalance, selectedLocation]);

  const filteredRates = gicRates.filter(rate => {
    if (filterType && rate.gic_type !== filterType) return false;
    if (selectedType !== "all" && rate.gic_type !== selectedType) return false;
    if (selectedTerm !== "all" && rate.term !== selectedTerm) return false;
    return true;
  });

  const featuredRates = filteredRates.filter(rate => rate.is_featured);
  const regularRates = filteredRates.filter(rate => !rate.is_featured);

  const refreshRates = () => {
    fetchGICRates();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
            Rates updated: {lastUpdated.toLocaleTimeString()}
          </Badge>
          {isLoading && (
            <div className="flex items-center gap-2 text-primary">
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span className="text-sm">Updating rates...</span>
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Compare GICs</CardTitle>
              <CardDescription>
                Last updated: {lastUpdated.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </CardDescription>
            </div>
            <Button variant="outline" onClick={refreshRates} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh Rates
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {showTypeFilter && (
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {!filterType && <SelectItem value="all">All Types</SelectItem>}
                    <SelectItem value="non-registered">Non-registered</SelectItem>
                    <SelectItem value="tfsa">TFSA</SelectItem>
                    <SelectItem value="rrsp">RRSP</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="term">Term</Label>
              <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Terms</SelectItem>
                  <SelectItem value="30-day">30 days</SelectItem>
                  <SelectItem value="60-day">60 days</SelectItem>
                  <SelectItem value="90-day">90 days</SelectItem>
                  <SelectItem value="6-month">6 months</SelectItem>
                  <SelectItem value="1-year">1 year</SelectItem>
                  <SelectItem value="18-month">18 months</SelectItem>
                  <SelectItem value="2-year">2 years</SelectItem>
                  <SelectItem value="3-year">3 years</SelectItem>
                  <SelectItem value="4-year">4 years</SelectItem>
                  <SelectItem value="5-year">5 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="balance">Balance</Label>
              <Select value={selectedBalance} onValueChange={setSelectedBalance}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">$1,000</SelectItem>
                  <SelectItem value="5000">$5,000</SelectItem>
                  <SelectItem value="10000">$10,000</SelectItem>
                  <SelectItem value="25000">$25,000</SelectItem>
                  <SelectItem value="50000">$50,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {showLocationFilter && (
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Canada</SelectItem>
                    <SelectItem value="ontario">Ontario</SelectItem>
                    <SelectItem value="quebec">Quebec</SelectItem>
                    <SelectItem value="bc">British Columbia</SelectItem>
                    <SelectItem value="alberta">Alberta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Loading State */}
      {isLoading && (
        <div className="space-y-6">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div>
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Skeleton className="h-12 w-20" />
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-10 w-28" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Featured Rates */}
      {!isLoading && featuredRates.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Featured Rates</h3>
          <div className="grid gap-6">
            {featuredRates.map((rate) => (
              <Card key={rate.id} className={`border-2 transition-all duration-200 hover:shadow-lg ${
                rate.is_sponsored ? 'border-primary/20 bg-primary/5' : 'border-green-200'
              }`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <PiggyBank className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-lg">{rate.institution}</h4>
                          {rate.is_sponsored && (
                            <Badge variant="secondary" className="text-xs">sponsored</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {rate.gic_type.charAt(0).toUpperCase() + rate.gic_type.slice(1)} GIC
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                      <div className="text-center lg:text-right">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          {(rate.rate * 100).toFixed(2)}%
                        </div>
                        <div className="text-sm text-muted-foreground">interest rate</div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div><strong>Term:</strong> {rate.term}</div>
                        <div><strong>Type:</strong> {rate.gic_type.charAt(0).toUpperCase() + rate.gic_type.slice(1)}</div>
                        <div><strong>Minimum investment:</strong> ${rate.min_investment.toLocaleString()}</div>
                      </div>

                      <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                        get this rate
                      </Button>
                    </div>
                  </div>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full mt-4 p-0 h-auto font-normal">
                        <div className="flex items-center justify-center gap-2">
                          <span>Details</span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <Separator className="mb-4" />
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Features</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {rate.special_features?.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <Shield className="h-3 w-3 text-green-600" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Total Return</h5>
                          <p className="text-sm text-muted-foreground">
                            ${(parseInt(selectedBalance) * (rate.rate + 1)).toLocaleString()} 
                            <span className="block">based on ${parseInt(selectedBalance).toLocaleString()} investment</span>
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Rates */}
      {!isLoading && regularRates.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">More Competitive Rates</h3>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {regularRates.map((rate, index) => (
                  <div key={rate.id}>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <PiggyBank className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold">{rate.institution}</div>
                          <div className="text-sm text-muted-foreground">{rate.term} • {rate.gic_type}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="text-right flex-1 md:flex-none">
                          <div className="text-2xl font-bold text-green-600">{(rate.rate * 100).toFixed(2)}%</div>
                          <div className="text-xs text-muted-foreground">interest rate</div>
                        </div>
                        <Button variant="outline" size="sm" className="shrink-0">
                          Compare
                        </Button>
                      </div>
                    </div>
                    {index < regularRates.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* No Results */}
      {!isLoading && filteredRates.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <PiggyBank className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No GIC rates found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters to see more results.</p>
            <Button onClick={refreshRates}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Rates
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
