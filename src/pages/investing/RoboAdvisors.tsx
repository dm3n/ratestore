import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, DollarSign, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const roboAdvisors = [
  {
    name: "Wealthsimple",
    rating: 4.8,
    minInvestment: "$0",
    managementFee: "0.50%",
    features: ["Tax-loss harvesting", "Socially responsible investing", "Automatic rebalancing", "Human advisor access"],
    pros: ["No minimum investment", "Low fees", "Excellent mobile app", "Canadian-focused"],
    cons: ["Limited investment options", "Basic reporting"],
    badge: "Editor's Choice",
    description: "Canada's leading robo-advisor with over $15 billion in assets under management."
  },
  {
    name: "Questrade Portfolio IQ",
    rating: 4.6,
    minInvestment: "$1,000",
    managementFee: "0.25%",
    features: ["ETF portfolios", "Automatic rebalancing", "Tax optimization", "Low-cost investing"],
    pros: ["Very low fees", "Self-directed option", "Good customer service", "Flexible portfolios"],
    cons: ["Higher minimum", "Less automation", "Basic interface"],
    badge: "Best Value",
    description: "Low-cost robo-advisor from Canada's leading discount broker."
  },
  {
    name: "RBC InvestEase",
    rating: 4.4,
    minInvestment: "$500",
    managementFee: "0.50%",
    features: ["Goal-based investing", "Automatic deposits", "Rebalancing", "Big bank backing"],
    pros: ["Bank integration", "Goal tracking", "Professional management", "Established brand"],
    cons: ["Higher fees", "Limited customization", "Bank-focused"],
    badge: "Best for Banking",
    description: "RBC's robo-advisor offering integrated with traditional banking services."
  },
  {
    name: "TD GoalAssist",
    rating: 4.3,
    minInvestment: "$500",
    managementFee: "0.50%",
    features: ["Goal planning", "Automatic investing", "Portfolio rebalancing", "TD integration"],
    pros: ["Bank integration", "Goal-focused", "Easy setup", "Branch support"],
    cons: ["Higher fees", "Limited options", "Basic features"],
    badge: "Best Integration",
    description: "TD's robo-advisor with seamless integration to TD banking products."
  },
  {
    name: "CI Direct Investing WealthAssist",
    rating: 4.2,
    minInvestment: "$500",
    managementFee: "0.60%",
    features: ["Professional management", "Diversified portfolios", "Automatic rebalancing", "Tax efficiency"],
    pros: ["Professional oversight", "Diversified options", "Tax optimization", "Established firm"],
    cons: ["Higher fees", "Limited automation", "Complex interface"],
    badge: "Best Professional",
    description: "Professional portfolio management with robo-advisor efficiency."
  }
];

const keyFeatures = [
  {
    icon: TrendingUp,
    title: "Automatic Rebalancing",
    description: "Portfolios are automatically rebalanced to maintain target allocations"
  },
  {
    icon: Shield,
    title: "Diversification",
    description: "Spread risk across multiple asset classes and geographical regions"
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Lower management fees compared to traditional mutual funds"
  },
  {
    icon: Users,
    title: "Professional Management",
    description: "Portfolios designed and monitored by investment professionals"
  }
];

const RoboAdvisors = () => {
  const scrollToComparison = () => {
    const element = document.getElementById('robo-advisors-comparison');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('key-features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Robo-Advisors 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Automated investing made simple. Compare Canada's top robo-advisors and find the perfect fit for your investment goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" onClick={scrollToComparison}>
                  Compare All Robo-Advisors
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent" onClick={scrollToFeatures}>
                  Learn About Robo-Advisors
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="key-features" className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose a Robo-Advisor?</h2>
              <p className="text-xl text-gray-600">Automated investing with professional oversight</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Robo-Advisors Comparison */}
        <section id="robo-advisors-comparison" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top Robo-Advisors Comparison</h2>
              <p className="text-xl text-gray-600">Compare features, fees, and benefits</p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {roboAdvisors.map((advisor, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {advisor.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {advisor.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{advisor.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{advisor.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">{advisor.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Minimum Investment</div>
                        <div className="text-lg font-semibold text-green-600">{advisor.minInvestment}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Management Fee</div>
                        <div className="text-lg font-semibold text-blue-600">{advisor.managementFee}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {advisor.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-600 mb-1">Pros</h5>
                        <ul className="text-sm space-y-1">
                          {advisor.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-600 mb-1">Cons</h5>
                        <ul className="text-sm space-y-1">
                          {advisor.cons.slice(0, 2).map((con, idx) => (
                            <li key={idx}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Choose the Right Robo-Advisor</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      Consider Your Investment Amount
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Look at minimum investment requirements and fee structures. Some platforms have no minimums, 
                      while others require $500-$1,000 to start.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                      Evaluate Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Consider features like tax-loss harvesting, socially responsible investing options, 
                      and access to human advisors.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-purple-600" />
                      Check Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Management fees typically range from 0.25% to 0.70%. Lower fees mean more of your 
                      money stays invested and working for you.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-orange-600" />
                      Platform Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Consider if you want integration with your existing bank accounts or if you prefer 
                      a standalone investment platform.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Automated Investing?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Compare robo-advisors and find the one that matches your investment goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" onClick={scrollToComparison}>
                Start Comparing Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent">
                <Link to="/guides/education-centre">Learn More About Investing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoboAdvisors;
