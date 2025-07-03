
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
      icon: CheckCircle,
      title: "Build Equity Over Time",
      description: "Each payment increases your ownership stake in your home"
    },
    {
      icon: DollarSign,
      title: "Potential Tax Benefits",
      description: "Mortgage interest may be tax-deductible in certain situations"
    },
    {
      icon: Home,
      title: "Fixed Monthly Payments",
      description: "Predictable housing costs help with budgeting and planning"
    },
    {
      icon: TrendingUp,
      title: "Property Appreciation",
      description: "Benefit from potential increases in your home's value"
    }
  ];

  const tips = [
    {
      title: "Shop Around for Rates",
      description: "Even a 0.25% difference in interest rate can save thousands over the life of your loan"
    },
    {
      title: "Consider Your Down Payment",
      description: "A larger down payment reduces your monthly payment and eliminates PMI"
    },
    {
      title: "Factor in All Costs",
      description: "Remember to include property taxes, insurance, and maintenance costs"
    },
    {
      title: "Get Pre-Approved",
      description: "Pre-approval shows sellers you're serious and helps you understand your budget"
    }
  ];

  const relatedTools = [
    {
      name: "Home Affordability Calculator",
      description: "Determine how much house you can afford",
      href: "/tools/affordability-calculator",
      icon: Home
    },
    {
      name: "Down Payment Calculator",
      description: "Plan your down payment strategy",
      href: "/tools/down-payment-calculator",
      icon: DollarSign
    },
    {
      name: "Extra Payment Calculator",
      description: "See the impact of additional payments",
      href: "/tools/extra-payment-calculator",
      icon: TrendingUp
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
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                  <Info className="h-3 w-3 mr-1" />
                  Mortgage Benefits
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Why Choose a Mortgage?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Understanding the advantages of homeownership through mortgage financing
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center">
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
        <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  Expert Tips
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Mortgage Success Tips</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Professional advice to help you make the best mortgage decisions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {tips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                          </div>
                          {tip.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{tip.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 bg-green-50 text-green-700 border-green-200">
                  <CalcIcon className="h-3 w-3 mr-1" />
                  Related Tools
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Other Helpful Calculators</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Complete your mortgage planning with these additional tools
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                      <CardHeader>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                          <tool.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full group-hover:bg-green-600 transition-colors">
                          <Link to={tool.href} className="flex items-center gap-2">
                            Use Calculator <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Home Buying Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Use our comprehensive suite of mortgage calculators to make informed decisions 
                about your home purchase and financing options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/tools/calculators-hub" className="flex items-center gap-2">
                    <CalcIcon className="h-5 w-5" />
                    View All Calculators
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/mortgages" className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Learn About Mortgages
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MortgageCalculator;
