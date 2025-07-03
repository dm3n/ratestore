
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, DollarSign, Smartphone, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const brokerages = [
  {
    name: "Questrade",
    rating: 4.7,
    commissionStocks: "$4.95-$9.95",
    commissionETFs: "Free",
    accountMinimum: "$1,000",
    features: ["Free ETF purchases", "Advanced trading platform", "Research tools", "Mobile app"],
    pros: ["Low fees", "Excellent platform", "Great research", "No ETF fees"],
    cons: ["Account minimums", "ECN fees", "Complex for beginners"],
    badge: "Editor's Choice",
    description: "Canada's leading discount broker with comprehensive trading tools and low fees."
  },
  {
    name: "Wealthsimple Trade",
    rating: 4.6,
    commissionStocks: "Free",
    commissionETFs: "Free",
    accountMinimum: "$0",
    features: ["Commission-free trading", "Mobile-first platform", "Fractional shares", "Simple interface"],
    pros: ["No commissions", "No minimums", "Easy to use", "Great mobile app"],
    cons: ["Limited research", "No advanced tools", "Currency conversion fees"],
    badge: "Best for Beginners",
    description: "Simple, commission-free investing with a focus on mobile-first experience."
  },
  {
    name: "Interactive Brokers",
    rating: 4.5,
    commissionStocks: "$1.00",
    commissionETFs: "$1.00",
    accountMinimum: "$0",
    features: ["Global markets", "Professional tools", "Low margin rates", "Advanced analytics"],
    pros: ["Global access", "Professional tools", "Low costs", "Advanced features"],
    cons: ["Complex interface", "Learning curve", "Inactivity fees"],
    badge: "Best for Professionals",
    description: "Professional-grade trading platform with access to global markets."
  },
  {
    name: "TD Direct Investing",
    rating: 4.3,
    commissionStocks: "$9.99",
    commissionETFs: "$9.99",
    accountMinimum: "$0",
    features: ["Research reports", "Market news", "Trading tools", "Bank integration"],
    pros: ["Bank integration", "Good research", "Branch support", "Established platform"],
    cons: ["Higher fees", "Dated interface", "Limited innovation"],
    badge: "Best Banking Integration",
    description: "Full-service online broker with comprehensive research and bank integration."
  },
  {
    name: "RBC Direct Investing",
    rating: 4.2,
    commissionStocks: "$9.95",
    commissionETFs: "$9.95",
    accountMinimum: "$0",
    features: ["Research tools", "Market data", "Portfolio analytics", "RBC integration"],
    pros: ["Bank backing", "Good research", "Stable platform", "Professional service"],
    cons: ["Higher fees", "Traditional interface", "Limited innovation"],
    badge: "Most Established",
    description: "Traditional full-service broker with comprehensive investment services."
  }
];

const tradingFeatures = [
  {
    icon: DollarSign,
    title: "Low Trading Costs",
    description: "Competitive commission structures and fee-free ETF trading options"
  },
  {
    icon: TrendingUp,
    title: "Advanced Tools",
    description: "Professional charting, technical analysis, and market research"
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Full-featured mobile apps for trading on the go"
  },
  {
    icon: Shield,
    title: "Account Protection",
    description: "CIPF protection and secure trading platforms"
  }
];

const Brokerages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Online Brokerages 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Take control of your investments. Compare Canada's top online brokerages and find the perfect platform for self-directed investing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Compare All Brokerages
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
                  Learn About Online Trading
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Online Brokerages?</h2>
              <p className="text-xl text-gray-600">Professional trading tools at your fingertips</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tradingFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brokerages Comparison */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top Online Brokerages Comparison</h2>
              <p className="text-xl text-gray-600">Compare fees, features, and trading tools</p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {brokerages.map((brokerage, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {brokerage.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {brokerage.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{brokerage.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{brokerage.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">{brokerage.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <div className="text-sm text-gray-500">Stock Commissions</div>
                        <div className="text-lg font-semibold text-green-600">{brokerage.commissionStocks}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">ETF Commissions</div>
                        <div className="text-lg font-semibold text-blue-600">{brokerage.commissionETFs}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Account Minimum</div>
                        <div className="text-lg font-semibold text-purple-600">{brokerage.accountMinimum}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {brokerage.features.map((feature, idx) => (
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
                          {brokerage.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-600 mb-1">Cons</h5>
                        <ul className="text-sm space-y-1">
                          {brokerage.cons.slice(0, 2).map((con, idx) => (
                            <li key={idx}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Costs Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Trading Costs Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Brokerage</th>
                      <th className="px-6 py-4 text-center">Stock Trades</th>
                      <th className="px-6 py-4 text-center">ETF Trades</th>
                      <th className="px-6 py-4 text-center">Options</th>
                      <th className="px-6 py-4 text-center">Account Minimum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Wealthsimple Trade</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Free</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Free</td>
                      <td className="px-6 py-4 text-center">N/A</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">$0</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Interactive Brokers</td>
                      <td className="px-6 py-4 text-center">$1.00</td>
                      <td className="px-6 py-4 text-center">$1.00</td>
                      <td className="px-6 py-4 text-center">$1.25</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">$0</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Questrade</td>
                      <td className="px-6 py-4 text-center">$4.95-$9.95</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Free</td>
                      <td className="px-6 py-4 text-center">$9.95 + $1/contract</td>
                      <td className="px-6 py-4 text-center">$1,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">TD Direct Investing</td>
                      <td className="px-6 py-4 text-center">$9.99</td>
                      <td className="px-6 py-4 text-center">$9.99</td>
                      <td className="px-6 py-4 text-center">$9.99 + $1.25/contract</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Choose the Right Brokerage</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      Consider Trading Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Look at commission fees for stocks, ETFs, and options. Frequent traders should prioritize 
                      low per-trade costs, while occasional investors might prefer flat fees.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                      Evaluate Trading Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Consider the quality of research, charting tools, and market data. Active traders 
                      need advanced platforms, while beginners prefer simple interfaces.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-6 w-6 text-purple-600" />
                      Check Mobile Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Ensure the mobile app has all the features you need. Many traders prefer mobile-first 
                      platforms for convenience and ease of use.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-orange-600" />
                      Account Minimums
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Some brokerages require minimum account balances. Choose platforms that match 
                      your investment budget and don't penalize smaller accounts.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Self-Directed Investing?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Compare online brokerages and find the platform that matches your trading style and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Compare Brokerages Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
                <Link to="/guides/education-centre">Learn About Trading</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Brokerages;
