
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Calculator, TrendingUp, Gift, Shield, Clock, CheckCircle, Star, ArrowRight, DollarSign, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const BestRESP = () => {
  const respProviders = [
    {
      name: "TD Bank RESP",
      description: "Self-directed and managed options with competitive fees",
      features: ["Self-directed investing", "Managed portfolios", "Low fees", "Online platform"],
      managementFee: "0.50% - 2.50%",
      minInvestment: "$25",
      grants: "All eligible grants",
      rating: 4.5,
      popular: true
    },
    {
      name: "RBC RESP",
      description: "Comprehensive RESP solutions with investment guidance",
      features: ["Investment advice", "Diverse options", "Branch support", "Mobile app"],
      managementFee: "0.75% - 2.75%",
      minInvestment: "$100",
      grants: "All eligible grants",
      rating: 4.3,
      popular: false
    },
    {
      name: "Questrade RESP",
      description: "Low-cost self-directed RESP with ETF options",
      features: ["Free ETF purchases", "Low commissions", "Self-directed", "Research tools"],
      managementFee: "0.00% - 0.25%",
      minInvestment: "$1,000",
      grants: "All eligible grants",
      rating: 4.7,
      popular: true
    },
    {
      name: "Wealthsimple RESP",
      description: "Automated investing with socially responsible options",
      features: ["Robo-advisor", "Socially responsible", "Low fees", "Mobile-first"],
      managementFee: "0.50% - 0.75%",
      minInvestment: "$1",
      grants: "All eligible grants",
      rating: 4.4,
      popular: false
    }
  ];

  const grantTypes = [
    {
      name: "Canada Education Savings Grant (CESG)",
      amount: "Up to $7,200",
      description: "20% match on first $2,500 contributed annually",
      icon: Gift
    },
    {
      name: "Additional CESG",
      amount: "Up to $600",
      description: "Extra 10-20% for lower-income families",
      icon: TrendingUp
    },
    {
      name: "Canada Learning Bond (CLB)",
      amount: "Up to $2,000",
      description: "For children born after 2003 in eligible families",
      icon: DollarSign
    },
    {
      name: "Provincial Grants",
      amount: "Varies",
      description: "Additional grants available in some provinces",
      icon: Target
    }
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: "Tax-Free Growth",
      description: "Investment earnings grow tax-free until withdrawal"
    },
    {
      icon: Gift,
      title: "Government Grants",
      description: "Get up to $7,200 in free government money"
    },
    {
      icon: Clock,
      title: "Flexible Contributions",
      description: "Contribute when you can, no annual limits"
    },
    {
      icon: Users,
      title: "Family Sharing",
      description: "Transfer funds between siblings if needed"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-purple-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <GraduationCap className="h-4 w-4 mr-2" />
                Education Savings Made Simple
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Best RESP Accounts
                <span className="block bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  in Canada
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Compare Canada's top RESP providers and maximize government grants for your child's 
                education. Get up to $7,200 in free money from the government.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto"
                  onClick={() => document.getElementById('resp-providers')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Compare RESPs <Calculator className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8 py-4 h-auto"
                  onClick={() => document.getElementById('government-grants')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn About Grants <Gift className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose an RESP?</h2>
                <p className="text-xl text-muted-foreground">
                  Start saving for your child's education with tax advantages and government grants
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyFeatures.map((feature, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                        <feature.icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESP Providers Comparison */}
        <section id="resp-providers" className="py-16 bg-gradient-to-r from-gray-50 to-purple-50">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Best RESP Providers in Canada</h2>
                <p className="text-xl text-muted-foreground">
                  Compare features, fees, and investment options from top providers
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {respProviders.map((provider, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {provider.popular && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs px-2 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardHeader className="relative z-10 pt-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors mb-2">
                            {provider.name}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {provider.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 border">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-900">{provider.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-muted-foreground">Management Fee</div>
                          <div className="font-semibold text-purple-600">{provider.managementFee}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Minimum Investment</div>
                          <div className="font-semibold">{provider.minInvestment}</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {provider.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex gap-3">
                        <Button className="flex-1 group-hover:bg-purple-600 transition-colors">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="flex-1 group-hover:border-purple-600 group-hover:text-purple-600 transition-colors">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Government Grants */}
        <section id="government-grants" className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">RESP Government Grants</h2>
                <p className="text-xl text-muted-foreground">
                  Maximize your savings with government contributions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {grantTypes.map((grant, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                        <grant.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl">{grant.name}</CardTitle>
                      <div className="text-2xl font-bold text-green-600">{grant.amount}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">{grant.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Start Your Child's Education Fund Today</h2>
              <p className="text-xl text-purple-100 mb-8">
                Don't miss out on thousands in government grants. Open an RESP and secure your child's educational future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/banking/savings/resp">
                    Compare RESP Savings Rates <TrendingUp className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="bg-purple-600 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/tools/tfsa-calculator">
                    <Calculator className="mr-2 h-5 w-5" />
                    RESP Calculator
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

export default BestRESP;
