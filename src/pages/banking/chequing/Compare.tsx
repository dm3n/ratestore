
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

        {/* Comparison Categories - Interactive Selection */}
        <section className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden" id="comparison-categories">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="container relative">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 group hover:bg-white/20 transition-all duration-300">
                  <BarChart3 className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  Choose Your
                  <span className="block bg-gradient-to-r from-primary-foreground via-white to-primary-foreground bg-clip-text text-transparent">
                    Comparison Style
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Three powerful ways to find your perfect chequing account. Each approach reveals different insights about the best banking options for your needs.
                </p>
              </div>

              {/* Interactive Category Cards */}
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Fee-First Approach */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-emerald-400/30">
                    {/* Icon & Number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <DollarSign className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">Fee-First Analysis</h3>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                      Start with monthly fees and discover accounts that won't drain your budget. Perfect for cost-conscious banking.
                    </p>

                    {/* Stats */}
                    <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-6 mb-8">
                      <div className="text-center">
                        <div className="text-4xl font-black text-emerald-400 mb-2">$0 - $60</div>
                        <div className="text-sm text-emerald-300 font-semibold">Monthly fee range</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-sm">No-fee options available</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse animation-delay-200" />
                        <span className="text-sm">Fee waiver strategies</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse animation-delay-400" />
                        <span className="text-sm">Hidden cost analysis</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg">
                      Compare by Fees
                    </Button>
                  </div>
                </div>

                {/* Transaction-First Approach */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-400/30">
                    {/* Icon & Number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">Usage-Based Matching</h3>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                      Match accounts to your transaction patterns. Ideal for finding accounts that fit your banking habits.
                    </p>

                    {/* Stats */}
                    <div className="bg-blue-500/10 border border-blue-400/20 rounded-2xl p-6 mb-8">
                      <div className="text-center">
                        <div className="text-4xl font-black text-blue-400 mb-2">10 - ∞</div>
                        <div className="text-sm text-blue-300 font-semibold">Transaction limits</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-sm">Unlimited transaction options</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-200" />
                        <span className="text-sm">Low-usage friendly accounts</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-400" />
                        <span className="text-sm">Per-transaction cost analysis</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white border-0 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg">
                      Match by Usage
                    </Button>
                  </div>
                </div>

                {/* Lifestyle-First Approach */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30">
                    {/* Icon & Number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">Lifestyle Categories</h3>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                      Find accounts designed for your life stage. Student, senior, newcomer, and youth-specific options.
                    </p>

                    {/* Stats */}
                    <div className="bg-purple-500/10 border border-purple-400/20 rounded-2xl p-6 mb-8">
                      <div className="text-center">
                        <div className="text-4xl font-black text-purple-400 mb-2">6+</div>
                        <div className="text-sm text-purple-300 font-semibold">Lifestyle categories</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        <span className="text-sm">Age-specific benefits</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200" />
                        <span className="text-sm">Newcomer welcome programs</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-400" />
                        <span className="text-sm">Special perks & rewards</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white border-0 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg">
                      Browse Categories
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-20">
                <div className="inline-flex items-center gap-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mb-8">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">Real-time data</span>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">All major banks</span>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-slate-300">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="font-medium">100% free</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="px-12 py-4 text-lg font-bold bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                  onClick={scrollToCalculator}
                >
                  <Calculator className="h-6 w-6 mr-3" />
                  Start Smart Comparison
                </Button>
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
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8 max-w-4xl mx-auto">
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Always up-to-date</span>
                  </div>
                  <div className="hidden md:block h-6 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-white/90">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Trusted by thousands</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="mt-4 px-10 py-4 text-lg font-bold bg-white text-primary hover:bg-white/90 shadow-xl transition-all duration-300 relative z-10"
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
