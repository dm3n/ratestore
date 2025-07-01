
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
  Award
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-12 md:py-20 lg:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 md:mb-6 bg-blue-50 text-blue-600 border-blue-200 text-sm">
                Compare rates from 100+ Canadian lenders
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                Find the Best Financial Products in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Compare mortgages, credit cards, savings accounts, and more. 
                Get personalized quotes and expert advice to make informed financial decisions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8 md:mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 focus:border-primary"
                    placeholder="Search for mortgages, credit cards, savings accounts..."
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg px-6">
                    Search
                  </Button>
                </div>
              </div>

              {/* Category Buttons */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="lg"
                    className={`gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 ${
                      selectedCategory === category.id 
                        ? "bg-primary text-white" 
                        : "hover:bg-primary/10"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <category.icon className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rates Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    Today's Best {categories.find(c => c.id === selectedCategory)?.name} 
                  </h2>
                  <p className="text-muted-foreground text-lg">Updated daily from top Canadian providers</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 shrink-0">
                  Live rates
                </Badge>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {bestRates[selectedCategory as keyof typeof bestRates]?.map((rate, index) => (
                  <Card key={index} className={`relative transition-all duration-200 hover:shadow-lg ${
                    rate.special ? "border-2 border-primary/30 shadow-md" : "hover:border-primary/20"
                  }`}>
                    {rate.special && (
                      <Badge className="absolute -top-2 left-4 bg-primary text-white text-xs px-2 py-1">
                        Featured
                      </Badge>
                    )}
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-muted-foreground">{rate.provider}</div>
                          <div className="font-medium">{rate.product}</div>
                        </div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-primary">{rate.rate}</div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant={rate.special ? "default" : "outline"}>
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8 md:mt-12">
                <Button variant="outline" size="lg" className="gap-2" asChild>
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
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50/50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Financial Calculators & Tools</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Make informed decisions with our comprehensive suite of financial calculators
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {tools.map((tool, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                    <CardHeader className="pb-3">
                      <div className="mx-auto mb-3 bg-primary/10 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center">
                        <tool.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg md:text-xl">{tool.name}</CardTitle>
                      <CardDescription className="text-sm md:text-base">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" asChild>
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
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Trusted by Canadians</h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">500K+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Monthly users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Partner lenders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">4.8★</div>
                  <div className="text-sm md:text-base text-muted-foreground">User rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Years serving</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Ready to Find Your Perfect Financial Product?
              </h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-90 max-w-2xl mx-auto">
                Join thousands of Canadians who have saved money by comparing rates on our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-6 md:px-8">
                  Start Comparing
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 md:px-8">
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
