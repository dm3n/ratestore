
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
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-secondary/5 via-background to-primary/5 overflow-hidden" id="comparison-categories">
          {/* Background Elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Smart Comparison
                </Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Compare by What Matters Most
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Choose your comparison criteria and find accounts perfectly tailored to your banking habits and financial goals
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Monthly Fee Category */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group-hover:scale-105">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                        <DollarSign className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">By Monthly Fee</CardTitle>
                      <CardDescription className="text-base">
                        Compare accounts based on monthly maintenance fees and fee waiver options
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-2xl mb-6">
                        <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">$0-$60</div>
                        <div className="text-sm font-semibold text-green-700 dark:text-green-300">Monthly fee range</div>
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>No-fee options available</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Fee waiver conditions</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Transaction Limits Category */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/10 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group-hover:scale-105">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">By Transaction Limits</CardTitle>
                      <CardDescription className="text-base">
                        Find accounts with transaction limits that match your banking habits
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-2xl mb-6">
                        <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">10-∞</div>
                        <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">Transaction range</div>
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Unlimited options</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Low-usage accounts</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Special Category */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/10 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <Card className="relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm group-hover:scale-105">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">By Special Category</CardTitle>
                      <CardDescription className="text-base">
                        Student, senior, newcomer, and youth accounts with special benefits
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-6 rounded-2xl mb-6">
                        <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">4+</div>
                        <div className="text-sm font-semibold text-purple-700 dark:text-purple-300">Special categories</div>
                      </div>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-500" />
                          <span>Age-based accounts</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-500" />
                          <span>Newcomer programs</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Trusted by Canadians
                  <span className="block text-2xl md:text-3xl text-white/80 font-normal mt-2">
                    Canada's most comprehensive banking comparison
                  </span>
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Join thousands of Canadians who have found their perfect chequing account through our platform
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                      <BarChart3 className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-ping" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3 animate-fade-in">75+</div>
                  <div className="text-white/80 font-medium">Account Options</div>
                </div>
                
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-ping animation-delay-300" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3 animate-fade-in">50+</div>
                  <div className="text-white/80 font-medium">Financial Institutions</div>
                </div>
                
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-ping animation-delay-500" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3 animate-fade-in">Live</div>
                  <div className="text-white/80 font-medium">Rate Updates</div>
                </div>
                
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                      <DollarSign className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-ping animation-delay-700" />
                  </div>
                  <div className="text-4xl font-black text-white mb-3 animate-fade-in">Free</div>
                  <div className="text-white/80 font-medium">Comparison Tool</div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-16">
                <div className="inline-flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Always up-to-date</span>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-white/90">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Trusted by thousands</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="px-10 py-4 text-lg font-bold bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={scrollToCalculator}
                >
                  <Calculator className="h-6 w-6 mr-2" />
                  Start Your Comparison Now
                </Button>
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
