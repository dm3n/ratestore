
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Calculator, PiggyBank, CheckCircle, Percent } from "lucide-react";

const TFSASavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <Shield className="h-3 w-3 mr-1" />
                Tax-Free Growth
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best TFSA Savings Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tax-free savings accounts to help you save without paying taxes on your earnings. 
                Compare the best TFSA rates and maximize your tax-free growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare TFSA Rates
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
                accountType="tfsa"
                title="Best TFSA Savings Account Rates"
                description="Compare tax-free savings account rates and calculate your tax-free earnings"
              />
            </div>
          </div>
        </section>

        {/* TFSA Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose a TFSA?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tax-free growth and flexible withdrawals make TFSAs perfect for any savings goal
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Tax-Free Growth</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      All interest earned in your TFSA is completely tax-free, forever.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">0%</div>
                      <div className="text-sm text-green-700">Tax on earnings</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Flexible Access</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Withdraw funds anytime without penalty and re-contribute the following year.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">Anytime</div>
                      <div className="text-sm text-blue-700">Penalty-free withdrawals</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Growing Room</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Your contribution room increases every year, currently $7,000 for 2025.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">$95K</div>
                      <div className="text-sm text-purple-700">Total lifetime room (2025)</div>
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
                  <div className="text-3xl font-bold text-primary mb-2">$7,000</div>
                  <div className="text-muted-foreground">2025 Contribution Limit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">18+</div>
                  <div className="text-muted-foreground">Minimum Age</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">0%</div>
                  <div className="text-muted-foreground">Tax on Withdrawals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.25%</div>
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

export default TFSASavings;
