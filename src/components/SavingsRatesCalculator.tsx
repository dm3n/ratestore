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

interface SavingsRateData {
  id: string;
  bankName: string;
  accountType: string;
  interestRate: number;
  minimumBalance: number;
  monthlyFee: number;
  features: string[];
  promotionalRate?: number;
  promotionalPeriod?: number;
  accountCategory: "savings" | "chequing" | "tfsa" | "rrsp" | "resp" | "youth" | "fhsa";
  institutionType: "big5" | "credit-union" | "online" | "other";
}

// Mock data - in a real app this would come from Supabase
const mockSavingsRates: SavingsRateData[] = [
  {
    id: "1",
    bankName: "Tangerine Bank",
    accountType: "High Interest Savings",
    interestRate: 4.25,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["No minimum balance", "No monthly fees", "Online banking"],
    promotionalRate: 5.25,
    promotionalPeriod: 6,
    accountCategory: "savings",
    institutionType: "online"
  },
  {
    id: "2",
    bankName: "EQ Bank",
    accountType: "Savings Plus Account",
    interestRate: 4.00,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["No fees", "Unlimited transactions", "Mobile deposit"],
    accountCategory: "savings",
    institutionType: "online"
  },
  {
    id: "3",
    bankName: "RBC",
    accountType: "High Interest eSavings",
    interestRate: 2.75,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Online only", "No minimum balance", "CDIC insured"],
    accountCategory: "savings",
    institutionType: "big5"
  },
  {
    id: "4",
    bankName: "TD Canada Trust",
    accountType: "High Interest Savings",
    interestRate: 2.50,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Branch access", "Online banking", "Mobile app"],
    accountCategory: "savings",
    institutionType: "big5"
  }
];

const mockTFSARates: SavingsRateData[] = [
  {
    id: "tfsa1",
    bankName: "Tangerine Bank",
    accountType: "TFSA Savings",
    interestRate: 4.25,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Tax-free growth", "No minimum balance", "Online banking"],
    accountCategory: "tfsa",
    institutionType: "online"
  },
  {
    id: "tfsa2",
    bankName: "EQ Bank",
    accountType: "TFSA Savings Plus",
    interestRate: 4.00,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Tax-free earnings", "No fees", "Mobile app"],
    accountCategory: "tfsa",
    institutionType: "online"
  }
];

const mockRRSPRates: SavingsRateData[] = [
  {
    id: "rrsp1",
    bankName: "Tangerine Bank",
    accountType: "RRSP Savings",
    interestRate: 4.00,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Tax deductible", "No minimum balance", "Online banking"],
    accountCategory: "rrsp",
    institutionType: "online"
  },
  {
    id: "rrsp2",
    bankName: "EQ Bank",
    accountType: "RRSP Savings Plus",
    interestRate: 3.75,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Retirement focused", "No fees", "Tax benefits"],
    accountCategory: "rrsp",
    institutionType: "online"
  }
];

const mockRESPRates: SavingsRateData[] = [
  {
    id: "resp1",
    bankName: "RBC",
    accountType: "RESP Savings",
    interestRate: 3.75,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Government grants", "Educational focus", "Branch access"],
    accountCategory: "resp",
    institutionType: "big5"
  }
];

const mockYouthRates: SavingsRateData[] = [
  {
    id: "youth1",
    bankName: "RBC",
    accountType: "Youth Savings",
    interestRate: 3.50,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["No monthly fees", "Financial education", "Parental oversight"],
    accountCategory: "youth",
    institutionType: "big5"
  }
];

const mockFHSARates: SavingsRateData[] = [
  {
    id: "fhsa1",
    bankName: "TD Canada Trust",
    accountType: "First Home Savings Account",
    interestRate: 4.10,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["Tax deductible", "Tax-free withdrawal", "First-time buyers"],
    accountCategory: "fhsa",
    institutionType: "big5"
  }
];

const mockChequingRates: SavingsRateData[] = [
  {
    id: "5",
    bankName: "RBC",
    accountType: "VIP Banking Package",
    interestRate: 0.05,
    minimumBalance: 6000,
    monthlyFee: 31.95,
    features: ["Unlimited transactions", "Premium services", "Investment advice"],
    accountCategory: "chequing",
    institutionType: "big5"
  },
  {
    id: "6",
    bankName: "TD Canada Trust",
    accountType: "All-Inclusive Banking Plan",
    interestRate: 0.05,
    minimumBalance: 5000,
    monthlyFee: 29.95,
    features: ["Unlimited transactions", "Premium features", "Global ATM access"],
    accountCategory: "chequing",
    institutionType: "big5"
  },
  {
    id: "7",
    bankName: "Tangerine Bank",
    accountType: "Chequing Account",
    interestRate: 0.25,
    minimumBalance: 0,
    monthlyFee: 0,
    features: ["No monthly fee", "Free e-Transfers", "Mobile banking"],
    accountCategory: "chequing",
    institutionType: "online"
  }
];

interface SavingsRatesCalculatorProps {
  accountType: "savings" | "chequing" | "tfsa" | "rrsp" | "resp" | "youth" | "fhsa";
  title: string;
  description: string;
}

export function SavingsRatesCalculator({ accountType, title, description }: SavingsRatesCalculatorProps) {
  const [depositAmount, setDepositAmount] = useState(10000);
  const [timeHorizon, setTimeHorizon] = useState(12);
  const [institutionFilter, setInstitutionFilter] = useState("all");
  const [minBalanceFilter, setMinBalanceFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("best-rates");
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const getRatesForAccountType = () => {
    switch (accountType) {
      case "savings":
        return mockSavingsRates;
      case "chequing":
        return mockChequingRates;
      case "tfsa":
        return mockTFSARates;
      case "rrsp":
        return mockRRSPRates;
      case "resp":
        return mockRESPRates;
      case "youth":
        return mockYouthRates;
      case "fhsa":
        return mockFHSARates;
      default:
        return mockSavingsRates;
    }
  };

  const rates = getRatesForAccountType();

  // Filter rates based on current selections
  const filteredRates = rates.filter(rate => {
    if (institutionFilter !== "all" && rate.institutionType !== institutionFilter) return false;
    if (minBalanceFilter === "no-minimum" && rate.minimumBalance > 0) return false;
    if (minBalanceFilter === "low-minimum" && rate.minimumBalance > 1000) return false;
    return true;
  }).sort((a, b) => b.interestRate - a.interestRate);

  const calculateEarnings = (rate: SavingsRateData) => {
    const monthlyRate = rate.interestRate / 100 / 12;
    const compoundedAmount = depositAmount * Math.pow(1 + monthlyRate, timeHorizon);
    return compoundedAmount - depositAmount;
  };

  const refreshRates = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLastUpdated(new Date());
    }, 1000);
  };

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <p className="text-muted-foreground mt-1">
              {description}
              {isLoading && (
                <span className="inline-flex items-center ml-2 text-primary">
                  <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                  Loading rates...
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="deposit-amount" className="text-sm font-medium">Deposit Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="deposit-amount"
                type="text"
                value={depositAmount.toLocaleString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
                  setDepositAmount(value);
                }}
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time-horizon" className="text-sm font-medium">Time Period (months)</Label>
            <Select value={timeHorizon.toString()} onValueChange={(value) => setTimeHorizon(parseInt(value))}>
              <SelectTrigger>
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
              <SelectTrigger>
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
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any amount</SelectItem>
                <SelectItem value="no-minimum">No minimum</SelectItem>
                <SelectItem value="low-minimum">Under $1,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Rates Table */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {activeTab === "big5-banks" ? "Big 5 Banks" : "Best Available Rates"}
            </h3>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              {filteredRates.length} accounts found
            </Badge>
          </div>

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
              {isLoading ? (
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
              ) : (
                filteredRates.map((rate, index) => (
                  <TableRow key={rate.id} className={index === 0 ? "bg-green-50" : ""}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {rate.institutionType === "big5" ? (
                          <Building2 className="h-4 w-4 text-blue-600" />
                        ) : (
                          <Landmark className="h-4 w-4 text-green-600" />
                        )}
                        <div>
                          <span className="font-medium">{rate.bankName}</span>
                          {rate.promotionalRate && (
                            <Badge variant="secondary" className="ml-2 text-xs bg-orange-100 text-orange-700">
                              Promo: {rate.promotionalRate}% for {rate.promotionalPeriod} months
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{rate.accountType}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-2xl font-bold text-primary">{rate.interestRate.toFixed(2)}%</span>
                        {index === 0 && <TrendingUp className="h-4 w-4 text-green-600" />}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="font-bold text-green-600">
                        ${calculateEarnings(rate).toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {rate.monthlyFee === 0 ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Free</Badge>
                      ) : (
                        <span>${rate.monthlyFee}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {rate.minimumBalance === 0 ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">No minimum</Badge>
                      ) : (
                        <span>${rate.minimumBalance.toLocaleString()}</span>
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
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
