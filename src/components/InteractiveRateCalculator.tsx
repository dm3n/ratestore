
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Home, Building2 } from "lucide-react";

interface RateData {
  lender: string;
  rate: number;
  lenderType: string;
  term: string;
  type: "fixed" | "variable";
  prime?: string;
}

export function InteractiveRateCalculator() {
  const [transactionType, setTransactionType] = useState("buying");
  const [purchasePrice, setPurchasePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(20000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(5);
  const [activeTab, setActiveTab] = useState("best-market");

  // Mock rate data that changes based on inputs
  const [rates, setRates] = useState<RateData[]>([]);

  // Calculate down payment percentage when dollar amount changes
  useEffect(() => {
    const percent = Math.round((downPayment / purchasePrice) * 100);
    setDownPaymentPercent(Math.min(percent, 100));
  }, [downPayment, purchasePrice]);

  // Calculate down payment dollar amount when percentage changes
  const handlePercentChange = (percent: number) => {
    setDownPaymentPercent(percent);
    setDownPayment(Math.round((percent / 100) * purchasePrice));
  };

  // Generate rates based on current inputs
  useEffect(() => {
    const loanAmount = purchasePrice - downPayment;
    const loanToValue = (loanAmount / purchasePrice) * 100;
    
    // Different rates based on loan-to-value ratio and transaction type
    let baseRates = {
      "2-year": { fixed: 4.24, variable: 4.35 },
      "3-year": { fixed: 3.89, variable: 4.15 },
      "5-year": { fixed: 3.84, variable: 3.95 }
    };

    // Adjust rates based on LTV and transaction type
    if (loanToValue > 80) {
      // Higher LTV = slightly higher rates
      Object.keys(baseRates).forEach(term => {
        baseRates[term as keyof typeof baseRates].fixed += 0.10;
        baseRates[term as keyof typeof baseRates].variable += 0.10;
      });
    }

    if (transactionType === "refinancing") {
      // Refinancing typically has slightly higher rates
      Object.keys(baseRates).forEach(term => {
        baseRates[term as keyof typeof baseRates].fixed += 0.05;
        baseRates[term as keyof typeof baseRates].variable += 0.05;
      });
    }

    const newRates: RateData[] = [
      {
        lender: "Canadian Lender",
        rate: baseRates["2-year"].fixed,
        lenderType: "home",
        term: "2-yr",
        type: "fixed"
      },
      {
        lender: "Big 6 Bank",
        rate: baseRates["3-year"].fixed,
        lenderType: "bank",
        term: "3-yr",
        type: "fixed"
      },
      {
        lender: "Canadian Lender",
        rate: baseRates["3-year"].variable,
        lenderType: "home",
        term: "3-yr",
        type: "variable",
        prime: "Prime - 0.80%"
      },
      {
        lender: "Canadian Lender",
        rate: baseRates["5-year"].fixed,
        lenderType: "home",
        term: "5-yr",
        type: "fixed"
      },
      {
        lender: "Canadian Lender",
        rate: baseRates["5-year"].variable,
        lenderType: "home",
        term: "5-yr",
        type: "variable",
        prime: "Prime - 1.00%"
      }
    ];

    setRates(newRates);
  }, [purchasePrice, downPayment, transactionType]);

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">Find Your Best Rate</CardTitle>
            <p className="text-muted-foreground mt-1">Rates update based on your scenario</p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="best-market" className="text-sm">Best market rates</TabsTrigger>
              <TabsTrigger value="best-bank" className="text-sm">Best bank rates</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Calculator Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="transaction-type" className="text-sm font-medium">Transaction type</Label>
            <Select value={transactionType} onValueChange={setTransactionType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buying">Buying a home</SelectItem>
                <SelectItem value="refinancing">Refinancing</SelectItem>
                <SelectItem value="renewal">Renewal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="purchase-price" className="text-sm font-medium">Purchase price</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="purchase-price"
                type="text"
                value={purchasePrice.toLocaleString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
                  setPurchasePrice(value);
                }}
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="down-payment" className="text-sm font-medium">Down payment $</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="down-payment"
                type="text"
                value={downPayment.toLocaleString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
                  setDownPayment(value);
                }}
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="down-payment-percent" className="text-sm font-medium">%</Label>
            <div className="flex items-center gap-2">
              <Input
                id="down-payment-percent"
                type="number"
                value={downPaymentPercent}
                onChange={(e) => handlePercentChange(parseInt(e.target.value) || 0)}
                className="w-16"
              />
              <div className="text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 6L21 6"/>
                  <path d="M8 12L21 12"/>
                  <path d="M8 18L21 18"/>
                  <path d="M3 6L3.01 6"/>
                  <path d="M3 12L3.01 12"/>
                  <path d="M3 18L3.01 18"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Results */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Term</h3>
            <div className="flex gap-8 text-sm font-medium">
              <span>Fixed</span>
              <span>Variable</span>
            </div>
          </div>

          {["2-yr", "3-yr", "5-yr"].map((term) => {
            const fixedRate = rates.find(r => r.term === term && r.type === "fixed");
            const variableRate = rates.find(r => r.term === term && r.type === "variable");

            return (
              <div key={term} className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">{term}</span>
                    <button className="block text-primary text-sm hover:underline">
                      compare all rates
                    </button>
                  </div>
                  {fixedRate && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{fixedRate.rate.toFixed(2)}%</div>
                      <div className="flex items-center gap-2 mt-2">
                        {fixedRate.lenderType === "home" ? (
                          <Home className="h-4 w-4" />
                        ) : (
                          <Building2 className="h-4 w-4" />
                        )}
                        <span className="text-sm">{fixedRate.lender}</span>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          inquire
                        </Button>
                      </div>
                      <button className="text-sm text-muted-foreground hover:underline mt-1">
                        More details +
                      </button>
                    </div>
                  )}
                </div>

                {variableRate && (
                  <div className="text-center lg:border-l lg:pl-4">
                    <div className="text-2xl font-bold text-primary">{variableRate.rate.toFixed(2)}%</div>
                    {variableRate.prime && (
                      <div className="text-sm text-muted-foreground">{variableRate.prime}</div>
                    )}
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Home className="h-4 w-4" />
                      <span className="text-sm">{variableRate.lender}</span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        inquire
                      </Button>
                    </div>
                    <button className="text-sm text-muted-foreground hover:underline mt-1">
                      More details +
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          <div className="text-center pt-4">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
              <Plus className="h-4 w-4 mr-2" />
              show more
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
