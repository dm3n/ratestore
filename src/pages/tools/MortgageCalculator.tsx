
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MortgageCalculator as Calculator } from "@/components/MortgageCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calculator as CalcIcon, TrendingUp, DollarSign, Home, Info, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MortgageCalculator = () => {
  const benefits = [
    {
      icon: Home,
      title: "Own Your Dream Home",
      description: "Build lasting wealth while living in the home you love",
      stat: "Average 4.2% annual appreciation"
    },
    {
      icon: TrendingUp,
      title: "Build Long-Term Wealth", 
      description: "Every payment builds equity and increases your net worth",
      stat: "95% of wealth from homeownership"
    },
    {
      icon: DollarSign,
      title: "Predictable Payments",
      description: "Lock in your housing costs with fixed-rate mortgages",
      stat: "No rent increases ever"
    },
    {
      icon: CheckCircle,
      title: "Tax Advantages",
      description: "Benefit from mortgage interest and property tax deductions",
      stat: "Save thousands annually"
    }
  ];

  const tips = [
    {
      icon: TrendingUp,
      title: "Compare Multiple Lenders",
      description: "Even 0.25% rate difference saves $15,000+ on a $500K mortgage",
      actionText: "Compare Rates Now"
    },
    {
      icon: DollarSign,
      title: "Optimize Your Down Payment",
      description: "20% down eliminates PMI, but consider opportunity costs",
      actionText: "Calculate Down Payment"
    },
    {
      icon: CheckCircle,
      title: "Include All Monthly Costs",
      description: "Factor in taxes, insurance, HOA, and maintenance (add 1-2% of home value annually)",
      actionText: "View Full Cost Breakdown"
    },
    {
      icon: Home,
      title: "Get Pre-Approved First",
      description: "Strengthen your offer and know your exact budget before house hunting",
      actionText: "Find Pre-Approval Lenders"
    }
  ];

  const relatedTools = [
    {
      name: "Home Affordability Calculator",
      description: "Discover your maximum home budget based on income, debts, and down payment",
      href: "/tools/affordability-calculator",
      icon: Home,
      popular: true
    },
    {
      name: "Down Payment Calculator", 
      description: "Compare down payment scenarios and their impact on monthly payments",
      href: "/tools/down-payment-calculator",
      icon: DollarSign,
      popular: false
    },
    {
      name: "Extra Payment Calculator",
      description: "See how additional payments can save years and thousands in interest",
      href: "/tools/extra-payment-calculator", 
      icon: TrendingUp,
      popular: true
    },
    {
      name: "Amortization Schedule",
      description: "View detailed payment breakdown over your entire loan term",
      href: "/tools/amortization-schedule",
      icon: CalcIcon,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">
                <CalcIcon className="h-3 w-3 mr-1" />
                Mortgage Calculator
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Calculate Your Monthly Mortgage Payment
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get accurate estimates of your monthly mortgage payments including principal, interest, 
                taxes, and insurance. Make informed decisions about your home purchase.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm text-blue-100">Always</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold">Accurate</div>
                  <div className="text-sm text-blue-100">Calculations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold">Instant</div>
                  <div className="text-sm text-blue-100">Results</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-blue-100">Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <Calculator />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 px-4 py-2">
                  <Home className="h-4 w-4 mr-2" />
                  Homeownership Benefits
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Homeownership Builds <span className="text-primary">Wealth</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover how a mortgage isn't just a loan—it's your path to financial freedom and long-term wealth building
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-500 group border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
                          <benefit.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold mb-3">{benefit.title}</CardTitle>
                        <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {benefit.stat}
                        </div>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 px-4 py-2">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Expert Mortgage Tips
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Save <span className="text-primary">Thousands</span> on Your Mortgage
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Follow these proven strategies from mortgage professionals to secure the best terms and save money
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {tips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-500 group border-0 shadow-lg bg-background">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                            <tip.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                              {tip.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {tip.description}
                        </p>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          {tip.actionText}
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 px-4 py-2">
                  <CalcIcon className="h-4 w-4 mr-2" />
                  Complete Your Planning
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Essential <span className="text-primary">Mortgage Tools</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Use our comprehensive suite of calculators to make confident, informed decisions about your home purchase
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-500 group border-0 shadow-lg bg-background/80 backdrop-blur-sm relative overflow-hidden">
                      {tool.popular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary/10 text-primary text-xs">Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <tool.icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button 
                          asChild 
                          className="w-full group-hover:bg-primary group-hover:shadow-lg transition-all duration-300"
                          size="sm"
                        >
                          <Link to={tool.href} className="flex items-center justify-center gap-2">
                            Use Calculator 
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                  <Link to="/tools/calculators" className="flex items-center gap-2">
                    View All Calculators
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
            >
              <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30">
                <Home className="h-4 w-4 mr-2" />
                Start Your Journey
              </Badge>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ready to Buy Your <br />
                <span className="text-primary-foreground/90">Dream Home?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join over 500,000 Canadians who've used our tools to secure better mortgage rates and save thousands on their home purchase.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-3xl font-bold mb-2">$15,000+</div>
                  <div className="text-sm text-primary-foreground/80">Average savings with rate comparison</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-3xl font-bold mb-2">500K+</div>
                  <div className="text-sm text-primary-foreground/80">Canadians trust our calculators</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="text-sm text-primary-foreground/80">Always free, no hidden fees</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="min-w-[220px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link to="/tools/affordability-calculator" className="flex items-center gap-3">
                    <CalcIcon className="h-5 w-5" />
                    Calculate Affordability
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="min-w-[220px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300"
                >
                  <Link to="/mortgages/compare-rates" className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5" />
                    Compare Mortgage Rates
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-primary-foreground/70 mt-8">
                No registration required • Instant results • Trusted by mortgage professionals
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MortgageCalculator;
