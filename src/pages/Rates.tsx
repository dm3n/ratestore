
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RateTable } from "@/components/RateTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, TrendingUp, Calculator, RefreshCw } from "lucide-react";

const Rates = () => {
  const [loanType, setLoanType] = useState("conventional");
  const [creditScore, setCreditScore] = useState("excellent");

  const marketTrends = [
    { period: "Today", rate: "6.85%", change: "+0.02%", trend: "up" },
    { period: "This Week", rate: "6.83%", change: "-0.15%", trend: "down" },
    { period: "This Month", rate: "6.98%", change: "-0.25%", trend: "down" },
  ];

  const rateFactors = [
    { factor: "Credit Score", impact: "High", description: "Higher scores get better rates" },
    { factor: "Down Payment", impact: "Medium", description: "20%+ reduces rates" },
    { factor: "Loan Term", impact: "Medium", description: "Shorter terms = lower rates" },
    { factor: "Debt-to-Income", impact: "High", description: "Lower DTI improves rates" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                Updated Daily
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Today's Mortgage Rates
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Compare current mortgage rates from top lenders and find the best deal for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Get My Rate <Calculator className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Check Again <RefreshCw className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Market Trends</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {marketTrends.map((trend, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader className="pb-2">
                      <CardDescription>{trend.period}</CardDescription>
                      <CardTitle className="text-2xl">{trend.rate}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex items-center justify-center gap-1 text-sm ${
                        trend.trend === 'up' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {trend.trend === 'up' ? 
                          <TrendingUp className="h-4 w-4" /> : 
                          <TrendingDown className="h-4 w-4" />
                        }
                        {trend.change}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Rate Filters */}
        <section className="py-8 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Type</label>
                  <Select value={loanType} onValueChange={setLoanType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conventional">Conventional</SelectItem>
                      <SelectItem value="fha">FHA</SelectItem>
                      <SelectItem value="va">VA</SelectItem>
                      <SelectItem value="usda">USDA</SelectItem>
                      <SelectItem value="jumbo">Jumbo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Credit Score Range</label>
                  <Select value={creditScore} onValueChange={setCreditScore}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select credit score" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent (740+)</SelectItem>
                      <SelectItem value="good">Good (680-739)</SelectItem>
                      <SelectItem value="fair">Fair (620-679)</SelectItem>
                      <SelectItem value="poor">Poor (Below 620)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rate Table */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <RateTable />
            </div>
          </div>
        </section>

        {/* Rate Factors */}
        <section className="py-12 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">What Affects Your Rate?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {rateFactors.map((factor, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{factor.factor}</CardTitle>
                        <Badge variant={factor.impact === 'High' ? 'default' : 'secondary'}>
                          {factor.impact} Impact
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Lock in Your Rate Today</h2>
              <p className="text-muted-foreground mb-8">
                Rates change daily. Get a personalized quote and lock in your rate for up to 60 days.
              </p>
              <Button size="lg" className="gap-2">
                Get My Personalized Rate <Calculator className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rates;
