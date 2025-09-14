
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Filter, Calculator, PiggyBank, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CompareSavings = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced Hero Header */}
              <div className="relative py-16 px-6 bg-gradient-to-br from-emerald-50 via-background to-blue-50 rounded-3xl mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 rounded-3xl" />
                <div className="relative max-w-4xl mx-auto text-center">
                  <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 animate-fade-in">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Savings Account Comparison
                  </Badge>
                  
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                    Find Your <span className="text-primary">Perfect</span><br />
                    Savings Account
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
                    Compare savings accounts from all major Canadian banks and credit unions. 
                    Discover the best rates and features for your financial goals.
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 animate-scale-in">
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover-scale">
                      <div className="text-2xl md:text-3xl font-bold text-primary">5.75%</div>
                      <div className="text-sm font-medium text-muted-foreground">Best Rate</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover-scale">
                      <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm font-medium text-muted-foreground">Institutions</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover-scale">
                      <div className="text-2xl md:text-3xl font-bold text-primary">Real-time</div>
                      <div className="text-sm font-medium text-muted-foreground">Rates</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover-scale">
                      <div className="text-2xl md:text-3xl font-bold text-primary">Free</div>
                      <div className="text-sm font-medium text-muted-foreground">Comparison</div>
                    </div>
                  </div>

                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                    <Button 
                      size="lg" 
                      className="gap-2 px-8 py-4 h-auto font-semibold hover-scale transition-all duration-300 shadow-lg hover:shadow-xl" 
                      onClick={scrollToCalculator}
                    >
                      <Filter className="h-5 w-5" />
                      Start Comparison
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="gap-2 px-8 py-4 h-auto font-semibold border-primary/20 text-primary hover:bg-primary/5 hover-scale transition-all duration-300" 
                      asChild
                    >
                      <Link to="/tools/calculators">
                        <Calculator className="h-5 w-5" />
                        Calculate Earnings
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Benefits Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-primary/10 hover-scale">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Live Rate Updates</div>
                    <div className="text-xs text-muted-foreground">Always current rates</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-primary/10 hover-scale">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Filter className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Smart Filtering</div>
                    <div className="text-xs text-muted-foreground">Find your perfect match</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-primary/10 hover-scale">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calculator className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Earnings Calculator</div>
                    <div className="text-xs text-muted-foreground">See your potential gains</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Calculator */}
        <section id="calculator-section" className="py-16">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator 
                accountType="savings"
                title="Complete Savings Account Comparison"
                description="Compare all savings account types and find the best rates across Canada"
              />
            </div>
          </div>
        </section>

        {/* Account Types Overview */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Savings Strategy</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Different account types for different financial goals and life stages
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <PiggyBank className="h-5 w-5 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">High-Interest Savings</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Maximum returns with flexible access to your money
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Best Rate:</span>
                      <span className="font-bold text-green-600">5.25%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">TFSA</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Tax-free growth for any savings goal
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Best Rate:</span>
                      <span className="font-bold text-blue-600">4.25%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-100 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-orange-600" />
                      </div>
                      <CardTitle className="text-lg">RRSP</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Tax-deductible retirement savings
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Best Rate:</span>
                      <span className="font-bold text-orange-600">4.00%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">RESP</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Education savings with government grants
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Best Rate:</span>
                      <span className="font-bold text-purple-600">3.75%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-indigo-100 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <PiggyBank className="h-5 w-5 text-indigo-600" />
                      </div>
                      <CardTitle className="text-lg">FHSA</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      First home savings with double tax benefits
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Best Rate:</span>
                      <span className="font-bold text-indigo-600">4.10%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-pink-100 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-pink-600" />
                      </div>
                      <CardTitle className="text-lg">Youth Savings</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      No-fee accounts for young savers
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Best Rate:</span>
                      <span className="font-bold text-pink-600">3.50%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Tips */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">How to Choose the Right Account</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Consider Your Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Emergency fund: High-interest savings</li>
                      <li>• Retirement: RRSP for tax deduction</li>
                      <li>• Any goal: TFSA for tax-free growth</li>
                      <li>• First home: FHSA for double benefits</li>
                      <li>• Child's education: RESP for grants</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      Compare Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Interest rate and promotional offers</li>
                      <li>• Monthly fees and minimum balance</li>
                      <li>• Transaction limits and access</li>
                      <li>• Tax implications and benefits</li>
                      <li>• Institution reputation and service</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompareSavings;
