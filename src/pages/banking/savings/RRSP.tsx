
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Calculator, PiggyBank, CheckCircle, Percent } from "lucide-react";

const RRSPSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                <DollarSign className="h-3 w-3 mr-1" />
                Tax Deductible
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best RRSP Savings Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Registered retirement savings plans to help you save for retirement with tax advantages. 
                Compare the best RRSP savings account rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare RRSP Rates
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <PiggyBank className="h-5 w-5" />
                  Calculate Tax Savings
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Calculator */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator 
                accountType="rrsp"
                title="Best RRSP Savings Account Rates"
                description="Compare registered retirement savings account rates and plan your retirement"
              />
            </div>
          </div>
        </section>

        {/* RRSP Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose an RRSP?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Build your retirement savings with immediate tax benefits and compound growth
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-orange-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Tax Deduction</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Reduce your taxable income and get an immediate tax refund on contributions.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">18%</div>
                      <div className="text-sm text-orange-700">Of earned income limit</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Tax-Deferred Growth</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Your investments grow tax-free until withdrawal, maximizing compound growth.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">0%</div>
                      <div className="text-sm text-blue-700">Tax on growth until withdrawal</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Retirement Security</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Build a substantial retirement fund with decades of tax-advantaged growth.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$31,560</div>
                      <div className="text-sm text-green-700">2025 contribution limit</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$31,560</div>
                  <div className="text-muted-foreground">2025 Contribution Limit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">71</div>
                  <div className="text-muted-foreground">Mandatory Conversion Age</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Up to 50%</div>
                  <div className="text-muted-foreground">Tax Savings Potential</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.25%</div>
                  <div className="text-muted-foreground">Best Current Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RRSPSavings;
