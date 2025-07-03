
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PiggyBank, TrendingUp, Shield, Clock, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface GICRate {
  id: string;
  institution: string;
  rate: string;
  term: string;
  type: string;
  minInvestment: string;
  location?: string;
  featured?: boolean;
  sponsored?: boolean;
  description?: string;
  features?: string[];
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

  // Sample GIC rates data - in a real app this would come from an API
  const gicRates: GICRate[] = [
    {
      id: "1",
      institution: "EQ Bank",
      rate: "4.75%",
      term: "1 Year",
      type: "non-registered",
      minInvestment: "$100",
      featured: true,
      sponsored: true,
      description: "Market-leading rates with flexible terms",
      features: ["No fees", "Flexible terms", "CDIC insured"]
    },
    {
      id: "2",
      institution: "Tangerine Bank",
      rate: "4.65%",
      term: "1 Year",
      type: "non-registered",
      minInvestment: "$500",
      featured: true,
      description: "Competitive rates with excellent service",
      features: ["CDIC insured", "Online banking", "No monthly fees"]
    },
    {
      id: "3",
      institution: "MCAN Wealth",
      rate: "4.85%",
      term: "1 Year",
      type: "non-registered",
      minInvestment: "$1000",
      description: "Premium rates for serious investors",
      features: ["High yields", "CDIC insured", "Professional service"]
    },
    {
      id: "4",
      institution: "Oaken Financial",
      rate: "4.80%",
      term: "1 Year",
      type: "tfsa",
      minInvestment: "$500",
      description: "Tax-free growth potential",
      features: ["Tax-free", "CDIC insured", "Flexible contributions"]
    },
    {
      id: "5",
      institution: "Canadian Western Bank",
      rate: "4.55%",
      term: "5 Year",
      type: "non-registered",
      minInvestment: "$1000",
      description: "Long-term security with guaranteed returns",
      features: ["5-year guarantee", "CDIC insured", "Stable returns"]
    }
  ];

  const filteredRates = gicRates.filter(rate => {
    if (filterType && rate.type !== filterType) return false;
    if (selectedType !== "all" && rate.type !== selectedType) return false;
    return true;
  });

  const featuredRates = filteredRates.filter(rate => rate.featured);
  const regularRates = filteredRates.filter(rate => !rate.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
          Rates updated daily
        </Badge>
      </div>

      {/* Filters */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Compare GICs</CardTitle>
          <CardDescription>Rates updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
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
                  <SelectItem value="1-year">1 year</SelectItem>
                  <SelectItem value="2-year">2 years</SelectItem>
                  <SelectItem value="3-year">3 years</SelectItem>
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

      {/* Featured Rates */}
      {featuredRates.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Featured Rates</h3>
          <div className="grid gap-6">
            {featuredRates.map((rate) => (
              <Card key={rate.id} className={`border-2 transition-all duration-200 hover:shadow-lg ${
                rate.sponsored ? 'border-primary/20 bg-primary/5' : 'border-green-200'
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
                          {rate.sponsored && (
                            <Badge variant="secondary" className="text-xs">sponsored</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{rate.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                      <div className="text-center lg:text-right">
                        <div className="text-3xl font-bold text-green-600 mb-1">{rate.rate}</div>
                        <div className="text-sm text-muted-foreground">interest rate</div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div><strong>Term:</strong> {rate.term}</div>
                        <div><strong>Type:</strong> {rate.type.charAt(0).toUpperCase() + rate.type.slice(1)}</div>
                        <div><strong>Minimum investment:</strong> {rate.minInvestment}</div>
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
                            {rate.features?.map((feature, index) => (
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
                            ${(parseInt(selectedBalance) * (parseFloat(rate.rate) / 100) + parseInt(selectedBalance)).toLocaleString()} 
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
      {regularRates.length > 0 && (
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
                          <div className="text-sm text-muted-foreground">{rate.term} • {rate.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="text-right flex-1 md:flex-none">
                          <div className="text-2xl font-bold text-green-600">{rate.rate}</div>
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
    </div>
  );
}
