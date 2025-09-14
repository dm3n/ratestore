
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Calculator, Users, DollarSign, CheckCircle } from "lucide-react";

const CompareChequing = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('chequing-calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('comparison-categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 lg:py-28">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-6xl mx-auto text-center">
              <Badge variant="outline" className="mb-8 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors backdrop-blur-sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                All Canadian Banks & Credit Unions
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent py-2">
                Compare All <br className="hidden md:block" />
                <span className="text-primary">Chequing Accounts</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Find the perfect chequing account with no guesswork. Compare fees, features, 
                and benefits from every major Canadian financial institution.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground font-medium">Financial Institutions</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">$0</div>
                    <div className="text-sm text-muted-foreground font-medium">Monthly Fee Options</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground font-medium">Free Comparison</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  onClick={scrollToCalculator}
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Start Smart Comparison
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg font-semibold border-primary/20 text-primary hover:bg-primary/5 backdrop-blur-sm transition-all duration-300"
                  onClick={scrollToCategories}
                >
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Browse Categories
                </Button>
              </div>

              {/* Feature Highlights */}
              <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Real-time rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>All major banks included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No bias or hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Calculator */}
        <section className="py-16" id="chequing-calculator">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator 
                accountType="chequing"
                title="Complete Chequing Account Comparison"
                description="Compare all chequing accounts from major Canadian banks and credit unions"
              />
            </div>
          </div>
        </section>

        {/* Comparison Categories */}
        <section className="py-16 bg-primary/5" id="comparison-categories">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare by Category</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find accounts that match your specific banking needs and lifestyle
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">By Monthly Fee</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Compare accounts based on monthly maintenance fees and fee waiver options.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$0-$60</div>
                      <div className="text-sm text-green-700">Fee range</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">By Transaction Limits</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Find accounts with the transaction limits that match your banking habits.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">10-Unlimited</div>
                      <div className="text-sm text-blue-700">Transaction range</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">By Special Category</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Student, senior, newcomer, and youth accounts with special benefits.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">4+</div>
                      <div className="text-sm text-purple-700">Special categories</div>
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
                  <div className="text-muted-foreground">Account Options</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Financial Institutions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Live</div>
                  <div className="text-muted-foreground">Rate Updates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Free</div>
                  <div className="text-muted-foreground">Comparison Tool</div>
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

export default CompareChequing;
