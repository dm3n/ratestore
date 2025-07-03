
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, CheckCircle, Calculator, Percent, PiggyBank } from "lucide-react";

const BestSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                Rates Updated Daily
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best High-Interest Savings Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare the highest savings account interest rates from Canada's top banks and credit unions. 
                Find accounts with up to 5.25% APY and no monthly fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare Rates Now
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <PiggyBank className="h-5 w-5" />
                  Calculate Earnings
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
                accountType="savings"
                title="High-Interest Savings Account Rates"
                description="Compare the best savings account rates and calculate your potential earnings"
              />
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose High-Yield Savings?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Make your money work harder with competitive interest rates and flexible terms
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Percent className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Higher Returns</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Earn up to 15x more than traditional savings accounts with competitive APYs up to 5.25%.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">5.25%</div>
                      <div className="text-sm text-green-700">Current top rate</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">CDIC Protected</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Your deposits are protected up to $100,000 per depositor, per member institution.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">$100K</div>
                      <div className="text-sm text-blue-700">Insurance coverage</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">No Commitment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Access your money when you need it with flexible terms and no lock-in periods.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-purple-700">Account access</div>
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
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Banks Compared</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5.25%</div>
                  <div className="text-muted-foreground">Top Interest Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$0</div>
                  <div className="text-muted-foreground">Minimum Balance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Daily</div>
                  <div className="text-muted-foreground">Rate Updates</div>
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

export default BestSavings;
