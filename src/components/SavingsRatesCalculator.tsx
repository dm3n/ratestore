
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Building2, Landmark, RefreshCw, TrendingUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SavingsRateData {
  id: string;
  institution: string;
  account_name: string;
  account_type: string;
  account_category: string | null;
  interest_rate: number;
  monthly_fee: number;
  minimum_balance: number;
  transaction_limit: number | null;
  features: string[];
  special_offers: string | null;
  fee_waiver_conditions: string | null;
  province: string;
  is_featured: boolean;
  is_active: boolean;
  institutionType: "big5" | "credit-union" | "online" | "other";
}

interface SavingsRatesCalculatorProps {
  accountType: "savings" | "chequing" | "tfsa" | "rrsp" | "resp" | "youth" | "fhsa";
  title: string;
  description: string;
}

const getInstitutionType = (institution: string): "big5" | "credit-union" | "online" | "other" => {
  const big5Banks = ["RBC", "TD Canada Trust", "Scotiabank", "BMO", "CIBC"];
  const onlineBanks = ["Tangerine Bank", "EQ Bank", "Simplii Financial", "Motusbank", "Koodo Mobile Banking", "PC Financial"];
  const creditUnions = ["Vancity", "ATB Financial", "Desjardins"];
  
  if (big5Banks.includes(institution)) return "big5";
  if (onlineBanks.includes(institution)) return "online";
  if (creditUnions.includes(institution)) return "credit-union";
  return "other";
};

export function SavingsRatesCalculator({ accountType, title, description }: SavingsRatesCalculatorProps) {
  const [depositAmount, setDepositAmount] = useState(10000);
  const [timeHorizon, setTimeHorizon] = useState(12);
  const [institutionFilter, setInstitutionFilter] = useState("all");
  const [minBalanceFilter, setMinBalanceFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("best-rates");
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isCalculating, setIsCalculating] = useState(false);
  const [rates, setRates] = useState<SavingsRateData[]>([]);
  const { toast } = useToast();

  // Fetch rates from database
  const fetchRates = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('banking_rates')
        .select('*')
        .eq('account_type', accountType)
        .eq('is_active', true)
        .order('interest_rate', { ascending: false });

      if (error) throw error;

      // Transform database data to match our interface
      const transformedRates: SavingsRateData[] = (data || []).map(rate => ({
        id: rate.id,
        institution: rate.institution,
        account_name: rate.account_name,
        account_type: rate.account_type,
        account_category: rate.account_category,
        interest_rate: rate.interest_rate || 0,
        monthly_fee: rate.monthly_fee || 0,
        minimum_balance: rate.minimum_balance || 0,
        transaction_limit: rate.transaction_limit,
        features: Array.isArray(rate.features) ? rate.features as string[] : [],
        special_offers: rate.special_offers,
        fee_waiver_conditions: rate.fee_waiver_conditions,
        province: rate.province || 'All',
        is_featured: rate.is_featured || false,
        is_active: rate.is_active || true,
        institutionType: getInstitutionType(rate.institution)
      }));

      setRates(transformedRates);
    } catch (error) {
      console.error('Error fetching rates:', error);
      toast({
        title: "Error",
        description: "Failed to fetch banking rates. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchRates();
  }, [accountType]);

  // Auto-refresh when inputs change
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      setIsCalculating(false);
      setLastUpdated(new Date());
    }, 800);

    return () => clearTimeout(timer);
  }, [depositAmount, timeHorizon, institutionFilter, minBalanceFilter, categoryFilter, activeTab]);

  // Filter rates based on current selections and deposit amount
  const filteredRates = rates.filter(rate => {
    if (institutionFilter !== "all" && rate.institutionType !== institutionFilter) return false;
    if (minBalanceFilter === "no-minimum" && rate.minimum_balance > 0) return false;
    if (minBalanceFilter === "low-minimum" && rate.minimum_balance > 1000) return false;
    if (categoryFilter !== "all" && rate.account_category !== categoryFilter) return false;
    
    // Filter by deposit amount vs minimum balance
    if (depositAmount < rate.minimum_balance) return false;
    
    // Show only big5 banks for big5-banks tab
    if (activeTab === "big5-banks" && rate.institutionType !== "big5") return false;
    
    return true;
  }).sort((a, b) => {
    // Sort by interest rate (highest first)
    return b.interest_rate - a.interest_rate;
  });

  const calculateEarnings = (rate: SavingsRateData) => {
    const monthlyRate = rate.interest_rate / 12;
    const compoundedAmount = depositAmount * Math.pow(1 + monthlyRate, timeHorizon);
    const totalFees = rate.monthly_fee * timeHorizon;
    return compoundedAmount - depositAmount - totalFees;
  };

  const refreshRates = () => {
    fetchRates();
  };

  const handleDepositChange = (value: string) => {
    const numericValue = parseInt(value.replace(/,/g, '')) || 0;
    setDepositAmount(numericValue);
  };

  // Get unique categories for filter
  const availableCategories = [...new Set(rates.map(rate => rate.account_category).filter(Boolean))];

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <p className="text-muted-foreground mt-1">
              {description}
              {(isLoading || isCalculating) && (
                <span className="inline-flex items-center ml-2 text-primary animate-pulse">
                  <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                  {isLoading ? "Loading rates..." : "Calculating..."}
                </span>
              )}
              <span className="block text-xs text-muted-foreground/70 mt-1">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={refreshRates}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="grid w-fit grid-cols-2">
                <TabsTrigger value="best-rates" className="text-sm">Best Rates</TabsTrigger>
                <TabsTrigger value="big5-banks" className="text-sm">Big 5 Banks</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Calculator Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 p-4 bg-gray-50 rounded-lg transition-all duration-300">
          <div className="space-y-2">
            <Label htmlFor="deposit-amount" className="text-sm font-medium">Deposit Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="deposit-amount"
                type="text"
                value={depositAmount.toLocaleString()}
                onChange={(e) => handleDepositChange(e.target.value)}
                className="pl-8 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time-horizon" className="text-sm font-medium">Time Period (months)</Label>
            <Select value={timeHorizon.toString()} onValueChange={(value) => setTimeHorizon(parseInt(value))}>
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6 months</SelectItem>
                <SelectItem value="12">1 year</SelectItem>
                <SelectItem value="24">2 years</SelectItem>
                <SelectItem value="36">3 years</SelectItem>
                <SelectItem value="60">5 years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution-filter" className="text-sm font-medium">Institution Type</Label>
            <Select value={institutionFilter} onValueChange={setInstitutionFilter}>
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All institutions</SelectItem>
                <SelectItem value="big5">Big 5 Banks</SelectItem>
                <SelectItem value="online">Online Banks</SelectItem>
                <SelectItem value="credit-union">Credit Unions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="balance-filter" className="text-sm font-medium">Minimum Balance</Label>
            <Select value={minBalanceFilter} onValueChange={setMinBalanceFilter}>
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any amount</SelectItem>
                <SelectItem value="no-minimum">No minimum</SelectItem>
                <SelectItem value="low-minimum">Under $1,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {availableCategories.length > 0 && (
            <div className="space-y-2">
              <Label htmlFor="category-filter" className="text-sm font-medium">Account Category</Label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {availableCategories.map(category => (
                    <SelectItem key={category} value={category!}>
                      {category!.charAt(0).toUpperCase() + category!.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Rates Table */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {activeTab === "big5-banks" ? "Big 5 Banks" : "Best Available Rates"}
            </h3>
            <Badge variant="secondary" className={`bg-green-100 text-green-700 transition-all duration-300 ${isCalculating ? 'animate-pulse' : ''}`}>
              {filteredRates.length} accounts found
            </Badge>
          </div>

          <div className={`transition-all duration-500 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Institution</TableHead>
                  <TableHead>Account Type</TableHead>
                  <TableHead className="text-right">Interest Rate</TableHead>
                  <TableHead className="text-right">Projected Earnings</TableHead>
                  <TableHead className="text-right">Monthly Fee</TableHead>
                  <TableHead className="text-right">Min. Balance</TableHead>
                  <TableHead>Features</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(isLoading || isCalculating) ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-6 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-40" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-8 w-20" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredRates.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No accounts match your criteria. Try adjusting your deposit amount or filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRates.map((rate, index) => (
                    <TableRow key={rate.id} className={`transition-all duration-300 ${index === 0 ? "bg-green-50 animate-fade-in" : ""}`}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {rate.institutionType === "big5" ? (
                            <Building2 className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Landmark className="h-4 w-4 text-green-600" />
                          )}
                          <div>
                            <span className="font-medium">{rate.institution}</span>
                            {rate.special_offers && (
                              <Badge variant="secondary" className="ml-2 text-xs bg-orange-100 text-orange-700 animate-pulse">
                                Special Offer
                              </Badge>
                            )}
                            {rate.is_featured && (
                              <Badge variant="secondary" className="ml-2 text-xs bg-blue-100 text-blue-700">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{rate.account_name}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-2xl font-bold text-primary">{(rate.interest_rate * 100).toFixed(2)}%</span>
                          {index === 0 && <TrendingUp className="h-4 w-4 text-green-600 animate-bounce" />}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className="font-bold text-green-600 transition-all duration-300">
                          ${calculateEarnings(rate).toFixed(2)}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {rate.monthly_fee === 0 ? (
                          <Badge variant="secondary" className="bg-green-100 text-green-700">Free</Badge>
                        ) : (
                          <span>${rate.monthly_fee}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        {rate.minimum_balance === 0 ? (
                          <Badge variant="secondary" className="bg-green-100 text-green-700">No minimum</Badge>
                        ) : (
                          <span className={depositAmount >= rate.minimum_balance ? "text-green-600 font-medium" : "text-red-500"}>
                            ${rate.minimum_balance.toLocaleString()}
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {rate.features.slice(0, 2).map((feature, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {rate.features.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{rate.features.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                          Apply Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
