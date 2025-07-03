
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, DollarSign, Smartphone, Award, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const cryptoExchanges = [
  {
    name: "Bitbuy",
    rating: 4.6,
    tradingFees: "0.20% - 0.50%",
    fundingFees: "Interac e-Transfer: Free",
    supportedCoins: "25+",
    features: ["Canadian-regulated", "Instant funding", "Mobile app", "Staking rewards"],
    pros: ["Regulated in Canada", "Easy for beginners", "Good customer service", "Fast deposits"],
    cons: ["Limited coins", "Higher fees", "Basic trading tools"],
    badge: "Best for Canadians",
    description: "Canada's most trusted cryptocurrency exchange, fully regulated and secure."
  },
  {
    name: "Coinsquare",
    rating: 4.3,
    tradingFees: "0.20% - 0.50%",
    fundingFees: "Interac e-Transfer: 1.5%",
    supportedCoins: "15+",
    features: ["Canadian company", "Advanced trading", "OTC desk", "Institutional services"],
    pros: ["Established platform", "Professional tools", "OTC trading", "Canadian-based"],
    cons: ["Higher fees", "Limited selection", "Complex interface"],
    badge: "Most Established",
    description: "Canada's original cryptocurrency exchange with professional trading features."
  },
  {
    name: "Newton",
    rating: 4.4,
    tradingFees: "0.50% spread",
    fundingFees: "Interac e-Transfer: Free",
    supportedCoins: "60+",
    features: ["No trading fees", "Auto-investing", "Mobile-first", "Easy interface"],
    pros: ["No trading fees", "Simple interface", "Auto-investing", "Good selection"],
    cons: ["Spread costs", "Limited tools", "New platform"],
    badge: "Best Value",
    description: "Commission-free crypto trading with a focus on simplicity and automation."
  },
  {
    name: "Binance",
    rating: 4.5,
    tradingFees: "0.10%",
    fundingFees: "Various methods",
    supportedCoins: "350+",
    features: ["Largest exchange", "Advanced trading", "DeFi features", "Global platform"],
    pros: ["Huge selection", "Low fees", "Advanced features", "High liquidity"],
    cons: ["Complex for beginners", "Regulatory concerns", "Not Canadian-focused"],
    badge: "Most Features",
    description: "World's largest cryptocurrency exchange with comprehensive trading features."
  },
  {
    name: "Kraken",
    rating: 4.4,
    tradingFees: "0.16% - 0.26%",
    fundingFees: "Wire: $10 CAD",
    supportedCoins: "200+",
    features: ["Advanced trading", "Margin trading", "Staking", "Security focus"],
    pros: ["Strong security", "Advanced tools", "Good reputation", "Staking options"],
    cons: ["Complex interface", "Higher funding fees", "Learning curve"],
    badge: "Most Secure",
    description: "Security-focused exchange with advanced trading features and strong reputation."
  }
];

const cryptoFeatures = [
  {
    icon: Shield,
    title: "Security First",
    description: "Cold storage, insurance, and advanced security measures to protect your assets"
  },
  {
    icon: DollarSign,
    title: "Competitive Fees",
    description: "Low trading fees and transparent pricing structures"
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Full-featured mobile apps for trading on the go"
  },
  {
    icon: TrendingUp,
    title: "Advanced Tools",
    description: "Professional charting, analysis tools, and real-time market data"
  }
];

const popularCryptos = [
  { name: "Bitcoin", symbol: "BTC", description: "The original cryptocurrency and digital store of value" },
  { name: "Ethereum", symbol: "ETH", description: "Smart contract platform and second-largest crypto" },
  { name: "Cardano", symbol: "ADA", description: "Proof-of-stake blockchain with academic approach" },
  { name: "Solana", symbol: "SOL", description: "High-performance blockchain for decentralized apps" }
];

const Crypto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 via-orange-700 to-red-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Crypto Exchanges 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Enter the world of cryptocurrency. Compare Canada's top crypto exchanges and start trading digital assets safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
                  Compare All Exchanges
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn About Crypto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Warning */}
        <section className="py-8 bg-yellow-50 border-b border-yellow-200">
          <div className="container">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Risk Disclosure</h3>
                <p className="text-yellow-700">
                  Cryptocurrency trading involves significant risk and can result in the loss of your entire investment. 
                  Prices are highly volatile and can fluctuate dramatically. Only invest what you can afford to lose. 
                  This information is for educational purposes only and is not investment advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Regulated Crypto Exchanges?</h2>
              <p className="text-xl text-gray-600">Security, compliance, and peace of mind</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cryptoFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exchanges Comparison */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top Crypto Exchanges Comparison</h2>
              <p className="text-xl text-gray-600">Compare fees, features, and security</p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {cryptoExchanges.map((exchange, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {exchange.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        {exchange.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{exchange.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{exchange.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">{exchange.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <div className="text-sm text-gray-500">Trading Fees</div>
                        <div className="text-lg font-semibold text-green-600">{exchange.tradingFees}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Funding Fees</div>
                        <div className="text-lg font-semibold text-blue-600">{exchange.fundingFees}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Supported Coins</div>
                        <div className="text-lg font-semibold text-purple-600">{exchange.supportedCoins}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {exchange.features.map((feature, idx) => (
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
                          {exchange.pros.slice(0, 2).map((pro, idx) => (
                            <li key={idx}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-600 mb-1">Cons</h5>
                        <ul className="text-sm space-y-1">
                          {exchange.cons.slice(0, 2).map((con, idx) => (
                            <li key={idx}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Cryptocurrencies */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Cryptocurrencies</h2>
              <p className="text-xl text-gray-600">The most traded digital assets in Canada</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCryptos.map((crypto, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{crypto.name}</CardTitle>
                    <Badge variant="outline" className="mx-auto">{crypto.symbol}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{crypto.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How to Get Started with Crypto</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-6 w-6 text-green-600" />
                      Choose a Secure Exchange
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Select a regulated Canadian exchange with strong security measures, insurance, 
                      and a good reputation. Look for cold storage and two-factor authentication.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      Start Small
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Begin with a small amount you can afford to lose. Cryptocurrency is highly volatile 
                      and risky. Consider it as a speculative portion of your portfolio.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                      Educate Yourself
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Learn about blockchain technology, different cryptocurrencies, and market dynamics. 
                      Understanding the technology helps make informed investment decisions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-6 w-6 text-orange-600" />
                      Secure Your Assets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Use strong passwords, enable two-factor authentication, and consider hardware wallets 
                      for long-term storage. Keep your private keys secure and never share them.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Cryptocurrency?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Compare crypto exchanges and start your digital asset journey with proper education and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
                Compare Exchanges Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/guides/education-centre">Learn About Crypto Basics</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Crypto;
