import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Percent, Calculator, PiggyBank, CheckCircle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
const HighInterestSavings = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('savings-calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                Up to 5.25% APY
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best High-Interest Savings Accounts
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find high-interest savings accounts to maximize your savings growth with competitive rates 
                and flexible terms from Canada's top financial institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" onClick={scrollToCalculator}>
                  <Calculator className="h-5 w-5" />
                  Compare High Rates
                </Button>
                
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Calculator */}
        <section className="py-16" id="savings-calculator">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator accountType="savings" title="High-Interest Savings Account Rates" description="Compare the highest savings account rates and maximize your earning potential" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Maximize Your Savings Growth</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  High-interest savings accounts offer the perfect balance of growth and accessibility
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Percent className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Maximum Returns</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Earn up to 15x more than traditional savings accounts with competitive rates.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">5.25%</div>
                      <div className="text-sm text-green-700">Top rate available</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">No Commitment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Access your money anytime without penalties or minimum terms.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">0</div>
                      <div className="text-sm text-blue-700">Lock-in periods</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Low Fees</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Most high-interest accounts have no monthly fees or minimum balance requirements.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">$0</div>
                      <div className="text-sm text-purple-700">Monthly fees (most accounts)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Comparison */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">See the Difference</h2>
                <p className="text-muted-foreground">Compare traditional vs. high-interest savings over time</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gray-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-muted-foreground">Traditional Savings</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-gray-600 mb-2">0.05%</div>
                    <div className="text-sm text-muted-foreground mb-4">Typical bank rate</div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-lg font-bold text-gray-600">$25</div>
                      <div className="text-xs text-muted-foreground">Annual earnings on $50,000</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-2 border-green-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-green-700">High-Interest Savings</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">5.25%</div>
                    <div className="text-sm text-green-700 mb-4">Best available rate</div>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <div className="text-lg font-bold text-green-600">$2,625</div>
                      <div className="text-xs text-green-700">Annual earnings on $50,000</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default HighInterestSavings;