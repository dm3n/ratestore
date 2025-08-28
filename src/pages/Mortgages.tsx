
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Home, TrendingUp, FileText, BookOpen, Star, Shield, Clock, CheckCircle, ArrowRight, Building, Percent, MapPin, Phone, RefreshCw } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMortgageRatesApi } from "@/hooks/useMortgageRatesApi";

const Mortgages = () => {
  const navigate = useNavigate();
  const { rates, isLoading, error, lastUpdated, fetchRates, getBestRatesByCategory } = useMortgageRatesApi();
  
  const { featured, regular } = getBestRatesByCategory();

  const quickTools = [
    { title: "Mortgage Calculator", description: "Calculate monthly payments", icon: Calculator, color: "blue", link: "/tools/mortgage-calculator" },
    { title: "Affordability Calculator", description: "How much can you afford?", icon: Home, color: "green", link: "/tools/affordability-calculator" },
    { title: "Payment Calculator", description: "Compare payment options", icon: Percent, color: "purple", link: "/tools/mortgage-calculator" },
    { title: "First-Time Buyer", description: "Complete buying guide", icon: BookOpen, color: "orange", link: "/guides/first-time-buyer" }
  ];

  const features = [
    { title: "100+ Lenders", description: "Compare rates from banks, credit unions, and alternative lenders", icon: Building },
    { title: "Real-Time Rates", description: "Live rates updated multiple times daily", icon: Clock },
    { title: "Expert Support", description: "Get personalized advice from mortgage specialists", icon: Shield },
    { title: "No Hidden Fees", description: "Transparent pricing with no surprises", icon: CheckCircle }
  ];

  const handleCompareRate = (rate: any) => {
    navigate('/mortgages/best-rates', { 
      state: { 
        compareRate: {
          lender: rate.lender,
          rate: rate.rate,
          term: rate.term
        }
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
                <Star className="h-4 w-4" />
                Canada's Most Trusted Mortgage Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Find Your Perfect
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Mortgage Rate
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                Compare rates from 100+ Canadian lenders in minutes. Get expert guidance and save thousands on your mortgage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/mortgages/best-rates">
                    Compare Rates Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2 hover:bg-primary/5" asChild>
                  <Link to="/tools/mortgage-calculator">
                    Calculate Payments <Calculator className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Lenders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$2B+</div>
                  <div className="text-sm text-muted-foreground">Mortgages Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rates Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Today's Best Rates</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Live rates from Canada's top lenders • {featured.length > 0 && `Rates as low as ${featured[0]?.rate}`}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 px-4 py-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : 'Loading...'}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={fetchRates}
                    disabled={isLoading}
                  >
                    <RefreshCw className={`h-4 w-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
                    Refresh
                  </Button>
                </div>
              </div>
              
              {error && (
                <div className="text-center mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600">Error loading rates: {error}</p>
                  <Button 
                    variant="outline" 
                    onClick={fetchRates}
                    className="mt-4"
                  >
                    Try Again
                  </Button>
                </div>
              )}
              
              {isLoading && (
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader className="text-center pb-4">
                        <div className="w-20 h-6 bg-muted rounded mx-auto mb-4"></div>
                        <div className="w-32 h-8 bg-muted rounded mx-auto mb-2"></div>
                        <div className="w-24 h-4 bg-muted rounded mx-auto"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-12 bg-muted rounded"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {!isLoading && !error && (
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {featured.map((rate, index) => (
                    <Card key={rate.id} className="relative border-0 shadow-xl bg-gradient-to-br from-white to-primary/5 hover:shadow-2xl transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                      <CardHeader className="text-center pb-4 relative">
                        <Badge className="self-center mb-4 bg-gradient-to-r from-primary to-primary/80 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Featured Rate
                        </Badge>
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Building className="h-6 w-6 text-primary" />
                          </div>
                          <span className="font-semibold text-lg">{rate.lender}</span>
                        </div>
                        <div className="text-4xl font-bold text-primary mb-2">{rate.rate}</div>
                        <div className="text-muted-foreground font-medium">{rate.term}</div>
                        {rate.savings && (
                          <div className="mt-3 text-green-600 font-semibold text-sm bg-green-50 rounded-full px-3 py-1">
                            {rate.savings}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="relative">
                        <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary font-semibold">
                          Get This Rate
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* More Rates Table */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-muted/50 to-muted/30">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    More Competitive Rates
                  </CardTitle>
                  <CardDescription className="text-base">
                    Additional mortgage options from trusted Canadian lenders
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {isLoading ? (
                    <div className="divide-y">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="p-6 animate-pulse">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-muted rounded-full"></div>
                              <div>
                                <div className="w-32 h-6 bg-muted rounded mb-2"></div>
                                <div className="w-24 h-4 bg-muted rounded"></div>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-right">
                                <div className="w-16 h-8 bg-muted rounded mb-2"></div>
                                <div className="w-20 h-4 bg-muted rounded"></div>
                              </div>
                              <div className="w-24 h-10 bg-muted rounded"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="divide-y">
                      {regular.map((rate, index) => (
                        <div key={rate.id} className="p-6 hover:bg-muted/30 transition-colors group">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Building className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <div className="font-semibold text-lg">{rate.lender}</div>
                                <div className="text-muted-foreground">{rate.term}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-right">
                                <div className="text-3xl font-bold text-primary">{rate.rate}</div>
                                <div className="text-sm text-muted-foreground">Annual Rate</div>
                              </div>
                              <Button 
                                variant="outline" 
                                className="group-hover:bg-primary group-hover:text-white transition-colors"
                                onClick={() => handleCompareRate(rate)}
                              >
                                Compare Rate
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
                <p className="text-xl text-muted-foreground">
                  We make finding the perfect mortgage simple, fast, and transparent
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tools Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Mortgage Tools & Calculators</h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to make informed mortgage decisions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {quickTools.map((tool, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-muted/20">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 bg-${tool.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <tool.icon className={`h-7 w-7 text-${tool.color}-600`} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{tool.description}</p>
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                        <Link to={tool.link}>
                          Try Now <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Join thousands of Canadians who have found their perfect mortgage rate through our platform. 
                Start comparing rates in under 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
                  <Link to="/mortgages/best-rates">
                    Compare Rates Now <TrendingUp className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 border border-white text-white hover:bg-white/10" 
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Speak with Expert
                  </Link>
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

export default Mortgages;
