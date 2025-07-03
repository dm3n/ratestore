import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calculator, 
  Home, 
  CreditCard, 
  Building2, 
  TrendingUp, 
  Shield, 
  Star,
  ArrowRight,
  Search,
  MapPin,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("mortgages");

  const categories = [
    { id: "mortgages", name: "Mortgages", icon: Home, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { id: "credit-cards", name: "Credit Cards", icon: CreditCard, color: "bg-green-50 text-green-600 border-green-200" },
    { id: "banking", name: "Banking", icon: Building2, color: "bg-purple-50 text-purple-600 border-purple-200" },
    { id: "investing", name: "Investing", icon: TrendingUp, color: "bg-orange-50 text-orange-600 border-orange-200" },
    { id: "insurance", name: "Insurance", icon: Shield, color: "bg-red-50 text-red-600 border-red-200" },
  ];

  const bestRates = {
    mortgages: [
      { product: "5-Year Fixed", rate: "3.84%", provider: "Canadian Lender", special: true },
      { product: "5-Year Variable", rate: "3.95%", provider: "Scotiabank", special: false },
      { product: "3-Year Fixed", rate: "4.12%", provider: "TD Bank", special: false },
    ],
    "credit-cards": [
      { product: "Travel Rewards", rate: "1.9% APR", provider: "Chase Sapphire", special: true },
      { product: "Cash Back", rate: "2.5% back", provider: "MBNA", special: false },
      { product: "No Annual Fee", rate: "0% intro APR", provider: "Capital One", special: false },
    ],
    banking: [
      { product: "High Interest Savings", rate: "5.25%", provider: "Tangerine", special: true },
      { product: "Chequing Account", rate: "$0 fees", provider: "PC Financial", special: false },
      { product: "GIC 1-Year", rate: "4.80%", provider: "EQ Bank", special: false },
    ],
    investing: [
      { product: "TFSA", rate: "0.05% fee", provider: "Questrade", special: true },
      { product: "RRSP", rate: "0.25% fee", provider: "Wealthsimple", special: false },
      { product: "Trading", rate: "$4.95/trade", provider: "TD Direct", special: false },
    ],
    insurance: [
      { product: "Term Life", rate: "$25/month", provider: "Sun Life", special: true },
      { product: "Auto Insurance", rate: "$89/month", provider: "Intact", special: false },
      { product: "Home Insurance", rate: "$67/month", provider: "Aviva", special: false },
    ],
  };

  const tools = [
    { name: "Mortgage Calculator", description: "Calculate monthly payments", icon: Calculator, link: "/tools/mortgage-calculator" },
    { name: "Debt Payoff Calculator", description: "Plan your debt freedom", icon: TrendingUp, link: "/tools/debt-payoff" },
    { name: "Compound Interest Calculator", description: "See your money grow", icon: DollarSign, link: "/tools/compound-interest" },
    { name: "ROI Calculator", description: "Calculate investment returns", icon: Award, link: "/tools/roi-calculator" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Modern SaaS Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 lg:py-32">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="container relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Live rates from 100+ Canadian lenders
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 mb-6 animate-fade-in">
                Find Canada's{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  best rates
                </span>
                <br />in seconds
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Compare mortgages, credit cards, savings accounts, and insurance. 
                Get personalized quotes and save thousands with Canada's most trusted financial platform.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-slate-500 animate-fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  500K+ users trust us
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Instant comparisons
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  Bank-level security
                </div>
              </div>

              {/* Category selection */}
              <div className="mb-10 animate-fade-in">
                <p className="text-lg text-slate-600 mb-6">What are you looking for?</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="lg"
                      className={`gap-3 px-6 py-4 text-base font-medium rounded-xl transition-all hover:scale-105 ${
                        selectedCategory === category.id 
                          ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25" 
                          : "hover:bg-slate-50 hover:border-slate-300"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <category.icon className="h-5 w-5" />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all">
                  Start Comparing Rates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-slate-50 transition-all">
                  View All Tools
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rates Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Updated every hour
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Today's Best {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-xl text-slate-600">Compare rates from Canada's top financial institutions</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bestRates[selectedCategory as keyof typeof bestRates]?.map((rate, index) => (
                  <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 border-0 shadow-md ${
                    rate.special ? "ring-2 ring-blue-500/20 bg-gradient-to-br from-blue-50/50 to-white" : "hover:shadow-lg"
                  }`}>
                    {rate.special && (
                      <div className="absolute -top-3 left-6">
                        <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold">
                          ⭐ Featured Deal
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            rate.special ? "bg-blue-100" : "bg-slate-100"
                          }`}>
                            <DollarSign className={`h-6 w-6 ${rate.special ? "text-blue-600" : "text-slate-600"}`} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-500">{rate.provider}</div>
                            <div className="font-semibold text-slate-900">{rate.product}</div>
                          </div>
                        </div>
                      </div>
                      <div className={`text-3xl font-bold ${rate.special ? "text-blue-600" : "text-slate-900"}`}>
                        {rate.rate}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className={`w-full font-semibold ${
                          rate.special 
                            ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25" 
                            : ""
                        }`}
                        variant={rate.special ? "default" : "outline"}
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button variant="outline" size="lg" className="gap-2 px-6 py-3 rounded-xl font-semibold" asChild>
                  <Link to={`/${selectedCategory}`}>
                    View All {categories.find(c => c.id === selectedCategory)?.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Financial Calculators & Tools</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Make informed decisions with our comprehensive suite of financial calculators
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 bg-slate-100 group-hover:bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors">
                        <tool.icon className="h-8 w-8 text-slate-600 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900">{tool.name}</CardTitle>
                      <CardDescription className="text-slate-600">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full font-semibold hover:bg-slate-50" asChild>
                        <Link to={tool.link}>Use Calculator</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-12">Trusted by Canadians</h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500K+</div>
                  <div className="text-slate-600">Monthly users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-slate-600">Partner lenders</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">4.8★</div>
                  <div className="text-slate-600">User rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-slate-600">Years serving</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="container relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Find Your Perfect Financial Product?
              </h2>
              <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
                Join thousands of Canadians who have saved money by comparing rates on our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25">
                  Start Comparing
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Learn More
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

export default Index;
