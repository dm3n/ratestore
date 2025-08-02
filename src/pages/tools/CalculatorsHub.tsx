import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Home, PiggyBank, TrendingUp, FileText, DollarSign, RefreshCw, Search, Filter, ArrowRight, Percent, Target, Shield, CreditCard, BarChart3, Database, Building, Landmark, Clock, MapPin, Trophy, Users, Briefcase, Heart, Car, Plane, Globe, Zap, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  href: string;
  category: string;
  subcategory?: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  popular: boolean;
  features: string[];
  isExternal?: boolean;
}
const allTools: Tool[] = [
// Calculator Tools
{
  id: "mortgage-rate-finder",
  name: "Mortgage Rate Finder",
  description: "Find the best mortgage rates tailored to your situation",
  longDescription: "Advanced mortgage rate matching system that finds the best rates based on your credit score, down payment, and loan requirements. Get personalized recommendations from our comprehensive database.",
  icon: Search,
  href: "/tools/mortgage-rate-finder",
  category: "calculators",
  subcategory: "mortgage",
  difficulty: "beginner",
  popular: true,
  features: ["Personalized matching", "Live rates", "Credit score optimization", "Multiple scenarios"]
},
{
  id: "mortgage-calculator",
  name: "Mortgage Payment Calculator",
  description: "Calculate monthly mortgage payments and total costs",
  longDescription: "Get accurate estimates of your monthly mortgage payments including principal, interest, taxes, and insurance. Compare different loan scenarios.",
  icon: Calculator,
  href: "/tools/mortgage-calculator",
  category: "calculators",
  subcategory: "mortgage",
  difficulty: "beginner",
  popular: true,
  features: ["Monthly payments", "Amortization", "Tax & insurance", "Rate comparison"]
}, {
  id: "affordability",
  name: "Home Affordability Calculator",
  description: "Determine how much house you can afford",
  longDescription: "Calculate the maximum home price you can afford based on your income, debts, and down payment. Includes debt-to-income ratios.",
  icon: Home,
  href: "/tools/affordability-calculator",
  category: "calculators",
  subcategory: "mortgage",
  difficulty: "beginner",
  popular: true,
  features: ["Income analysis", "Debt ratios", "Down payment impact", "Affordability range"]
}, {
  id: "down-payment",
  name: "Down Payment Calculator",
  description: "Plan your down payment strategy and timeline",
  longDescription: "Calculate how much you need to save for a down payment and create a savings timeline to reach your homeownership goals.",
  icon: PiggyBank,
  href: "/tools/down-payment-calculator",
  category: "calculators",
  subcategory: "planning",
  difficulty: "beginner",
  popular: true,
  features: ["Savings timeline", "PMI analysis", "Goal tracking", "Investment growth"]
}, {
  id: "renewal",
  name: "Mortgage Renewal Calculator",
  description: "Compare renewal options and maximize savings",
  longDescription: "Analyze your mortgage renewal options, compare rates from different lenders, and calculate potential savings.",
  icon: RefreshCw,
  href: "/tools/renewal-calculator",
  category: "calculators",
  subcategory: "mortgage",
  difficulty: "intermediate",
  popular: true,
  features: ["Rate comparison", "Renewal costs", "Savings analysis", "Lender options"]
}, {
  id: "compound-interest",
  name: "Compound Interest Calculator",
  description: "Calculate compound interest growth over time",
  longDescription: "See how your investments can grow with compound interest. Perfect for planning retirement savings and investment strategies.",
  icon: TrendingUp,
  href: "/tools/compound-interest-calculator",
  category: "calculators",
  subcategory: "investment",
  difficulty: "beginner",
  popular: true,
  features: ["Growth projections", "Contribution schedules", "Interest rates", "Time periods"]
}, {
  id: "tfsa-calculator",
  name: "TFSA Calculator",
  description: "Calculate tax-free savings growth",
  longDescription: "Plan your Tax-Free Savings Account contributions and see how your investments can grow tax-free over time.",
  icon: Target,
  href: "/tools/tfsa-calculator",
  category: "calculators",
  subcategory: "investment",
  difficulty: "intermediate",
  popular: false,
  features: ["Contribution room", "Growth projections", "Tax savings", "Withdrawal planning"]
}, {
  id: "debt-payoff",
  name: "Debt Payoff Calculator",
  description: "Create a strategic debt elimination plan",
  longDescription: "Optimize your debt repayment strategy with multiple payoff methods and see how to save money on interest.",
  icon: Shield,
  href: "/tools/debt-payoff-calculator",
  category: "calculators",
  subcategory: "planning",
  difficulty: "intermediate",
  popular: true,
  features: ["Multiple strategies", "Interest savings", "Payment timeline", "Progress tracking"]
},
// Rate Comparison Tools
{
  id: "mortgage-rates",
  name: "Mortgage Rate Comparison",
  description: "Compare live mortgage rates from top lenders",
  longDescription: "Access real-time mortgage rates from Canada's leading banks and lenders. Filter by term, type, and location.",
  icon: Database,
  href: "/mortgages/best-rates",
  category: "rates",
  subcategory: "mortgage",
  difficulty: "beginner",
  popular: true,
  features: ["Live rates", "Bank comparison", "Rate alerts", "Historical data"]
}, {
  id: "all-rates",
  name: "Compare All Rates",
  description: "Comprehensive rate comparison across all products",
  longDescription: "Compare rates for mortgages, savings, GICs, and loans all in one place. Find the best deals available.",
  icon: BarChart3,
  href: "/compare-all-rates",
  category: "rates",
  subcategory: "all",
  difficulty: "beginner",
  popular: true,
  features: ["Multi-product", "Side-by-side", "Best deals", "Updated daily"]
}, {
  id: "savings-rates",
  name: "Savings Account Rates",
  description: "Find the highest savings account interest rates",
  longDescription: "Compare savings account rates from banks and credit unions across Canada. Find high-interest options.",
  icon: PiggyBank,
  href: "/banking/savings/high-interest",
  category: "rates",
  subcategory: "savings",
  difficulty: "beginner",
  popular: true,
  features: ["High interest", "No fees", "Daily updates", "CDIC insured"]
}, {
  id: "gic-rates",
  name: "GIC Rate Comparison",
  description: "Compare Guaranteed Investment Certificate rates",
  longDescription: "Find the best GIC rates available across different terms and institutions. Secure your guaranteed returns.",
  icon: Landmark,
  href: "/investing/gic/best",
  category: "rates",
  subcategory: "investment",
  difficulty: "beginner",
  popular: false,
  features: ["Guaranteed returns", "Term options", "CDIC protected", "Rate laddering"]
},
// Credit Card Tools
{
  id: "card-finder",
  name: "Credit Card Finder",
  description: "Find the perfect credit card for your needs",
  longDescription: "Answer a few questions about your spending habits and get personalized credit card recommendations.",
  icon: CreditCard,
  href: "/credit-cards/card-finder",
  category: "credit-cards",
  subcategory: "finder",
  difficulty: "beginner",
  popular: true,
  features: ["Personalized", "Spending analysis", "Rewards match", "Fee comparison"]
}, {
  id: "best-credit-cards",
  name: "Best Credit Cards",
  description: "Top-rated credit cards in Canada",
  longDescription: "Discover the best credit cards available in Canada, ranked by features, rewards, and value.",
  icon: Trophy,
  href: "/credit-cards/best-overall",
  category: "credit-cards",
  subcategory: "comparison",
  difficulty: "beginner",
  popular: true,
  features: ["Expert picks", "User ratings", "Detailed reviews", "Application links"]
},
// Banking Products
{
  id: "best-chequing",
  name: "Best Chequing Accounts",
  description: "Find the best chequing accounts in Canada",
  longDescription: "Compare chequing accounts with low fees, high transaction limits, and valuable perks.",
  icon: Building,
  href: "/banking/chequing/best",
  category: "banking",
  subcategory: "chequing",
  difficulty: "beginner",
  popular: true,
  features: ["No monthly fees", "Free transactions", "Online banking", "ATM access"]
}, {
  id: "best-savings",
  name: "Best Savings Accounts",
  description: "High-interest savings accounts comparison",
  longDescription: "Find savings accounts with the highest interest rates and lowest fees to maximize your savings growth.",
  icon: PiggyBank,
  href: "/banking/savings/best",
  category: "banking",
  subcategory: "savings",
  difficulty: "beginner",
  popular: true,
  features: ["High interest", "No minimums", "Easy access", "CDIC insured"]
},
// Insurance Tools
{
  id: "auto-insurance",
  name: "Auto Insurance Quotes",
  description: "Compare car insurance quotes instantly",
  longDescription: "Get quotes from top Canadian auto insurance companies and find coverage that fits your budget.",
  icon: Car,
  href: "/insurance/auto/quotes",
  category: "insurance",
  subcategory: "auto",
  difficulty: "beginner",
  popular: true,
  features: ["Instant quotes", "Coverage options", "Multi-vehicle", "Discounts available"]
}, {
  id: "home-insurance",
  name: "Home Insurance Quotes",
  description: "Protect your home with the right coverage",
  longDescription: "Compare home insurance policies and find comprehensive coverage for your property and belongings.",
  icon: Home,
  href: "/insurance/home/quotes",
  category: "insurance",
  subcategory: "home",
  difficulty: "beginner",
  popular: true,
  features: ["Property protection", "Contents coverage", "Liability insurance", "Competitive rates"]
}, {
  id: "life-insurance",
  name: "Life Insurance Quotes",
  description: "Secure your family's financial future",
  longDescription: "Compare life insurance policies and find affordable coverage to protect your loved ones.",
  icon: Heart,
  href: "/insurance/life/quotes",
  category: "insurance",
  subcategory: "life",
  difficulty: "intermediate",
  popular: false,
  features: ["Term & permanent", "Coverage calculator", "Health questions", "Beneficiary planning"]
}, {
  id: "travel-insurance",
  name: "Travel Insurance",
  description: "Travel with confidence and protection",
  longDescription: "Find travel insurance that covers medical emergencies, trip cancellation, and lost luggage.",
  icon: Plane,
  href: "/insurance/travel/quotes",
  category: "insurance",
  subcategory: "travel",
  difficulty: "beginner",
  popular: false,
  features: ["Medical coverage", "Trip protection", "Multi-trip options", "Emergency assistance"]
},
// Investment Tools
{
  id: "robo-advisors",
  name: "Robo-Advisor Comparison",
  description: "Compare automated investment platforms",
  longDescription: "Find the best robo-advisor for your investment goals with low fees and professional portfolio management.",
  icon: Zap,
  href: "/investing/robo-advisors",
  category: "investing",
  subcategory: "platforms",
  difficulty: "intermediate",
  popular: false,
  features: ["Low fees", "Auto-rebalancing", "Tax optimization", "Goal-based"]
}, {
  id: "brokerages",
  name: "Online Brokerages",
  description: "Compare online trading platforms",
  longDescription: "Find the best online brokerage for trading stocks, ETFs, and other investments with competitive fees.",
  icon: TrendingUp,
  href: "/investing/brokerages",
  category: "investing",
  subcategory: "platforms",
  difficulty: "advanced",
  popular: false,
  features: ["Trading fees", "Research tools", "Platform features", "Account types"]
}];
const categories = [{
  id: "all",
  name: "All Tools",
  icon: Globe,
  count: allTools.length
}, {
  id: "calculators",
  name: "Calculators",
  icon: Calculator,
  count: allTools.filter(t => t.category === "calculators").length
}, {
  id: "rates",
  name: "Rate Comparison",
  icon: Database,
  count: allTools.filter(t => t.category === "rates").length
}, {
  id: "credit-cards",
  name: "Credit Cards",
  icon: CreditCard,
  count: allTools.filter(t => t.category === "credit-cards").length
}, {
  id: "banking",
  name: "Banking",
  icon: Building,
  count: allTools.filter(t => t.category === "banking").length
}, {
  id: "insurance",
  name: "Insurance",
  icon: Shield,
  count: allTools.filter(t => t.category === "insurance").length
}, {
  id: "investing",
  name: "Investing",
  icon: TrendingUp,
  count: allTools.filter(t => t.category === "investing").length
}];
const ToolsHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase()) || tool.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || tool.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  const popularTools = allTools.filter(tool => tool.popular);
  const rateTools = allTools.filter(tool => tool.category === "rates");
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              
              <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Complete Financial Toolkit
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Financial Tools Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Everything you need to make informed financial decisions. From mortgage calculators to rate comparisons, 
              credit card finders to insurance quotes - all in one comprehensive platform.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
                <div className="text-3xl font-bold text-blue-600">{allTools.length}+</div>
                <div className="text-sm text-muted-foreground">Total Tools</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
                <div className="text-3xl font-bold text-green-600">{categories.length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
                <div className="text-3xl font-bold text-purple-600">Free</div>
                <div className="text-sm text-muted-foreground">Always</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/20">
                <div className="text-3xl font-bold text-orange-600">Live</div>
                <div className="text-sm text-muted-foreground">Data</div>
              </div>
            </div>
          </motion.div>

          {/* Rate Database Highlight */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="mb-16">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold text-white">Live Rate Database</CardTitle>
                    <p className="text-blue-100 text-lg">Real-time rates from Canada's top financial institutions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {rateTools.map((tool, index) => <div key={tool.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <tool.icon className="h-6 w-6 text-white mb-2" />
                      <div className="text-sm font-medium text-white">{tool.name}</div>
                      <div className="text-xs text-blue-100">{tool.description}</div>
                    </div>)}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 flex-1">
                    <Link to="/compare-all-rates" className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Compare All Rates
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 flex-1">
                    <Link to="/mortgages/best-rates" className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Best Mortgage Rates
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Popular Tools */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-6 w-6 text-orange-500" />
              <h2 className="text-3xl font-bold">Most Popular Tools</h2>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                {popularTools.length} tools
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularTools.map((tool, index) => <motion.div key={tool.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-200 group">
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <tool.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">
                          Popular
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardDescription className="mb-4 text-base">
                        {tool.longDescription}
                      </CardDescription>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {tool.features.slice(0, 2).map((feature, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>)}
                        </div>
                        <Button asChild className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                          <Link to={tool.href} className="flex items-center gap-2">
                            Use Tool
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </motion.section>

          {/* Categories Grid */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive collection of financial tools organized by category
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.filter(cat => cat.id !== 'all').map((category, index) => <motion.div key={category.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105" onClick={() => setSelectedCategory(category.id)}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                      <div className="text-2xl font-bold text-primary">{category.count}</div>
                      <div className="text-xs text-muted-foreground">tools</div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </motion.section>

          {/* Search and Filters */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search tools, features, or categories..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-12 h-12 text-lg" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-4 py-3 border rounded-lg bg-white min-w-[200px]">
                    {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                  </select>
                  <select value={selectedDifficulty} onChange={e => setSelectedDifficulty(e.target.value)} className="px-4 py-3 border rounded-lg bg-white min-w-[150px]">
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.section>

          {/* All Tools */}
          <motion.section initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1.0
        }}>
            <div className="flex items-center gap-3 mb-8">
              <Filter className="h-6 w-6 text-blue-500" />
              <h2 className="text-3xl font-bold">
                {selectedCategory === "all" ? "All Tools" : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {filteredTools.length} tools
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => <motion.div key={tool.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: index * 0.05
            }}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <tool.icon className="h-7 w-7 text-primary" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge variant="outline" className={`text-xs ${tool.difficulty === 'beginner' ? 'bg-green-50 text-green-700 border-green-200' : tool.difficulty === 'intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                            {tool.difficulty}
                          </Badge>
                          {tool.popular && <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                              Popular
                            </Badge>}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <Badge variant="outline" className="self-start text-xs">
                        {tool.category}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <CardDescription className="mb-4 text-base leading-relaxed">
                        {tool.longDescription}
                      </CardDescription>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {tool.features.map((feature, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>)}
                        </div>
                        <Button asChild className="w-full group-hover:bg-primary/90 transition-colors h-11">
                          <Link to={tool.href} className="flex items-center gap-2">
                            Use Tool
                            <ArrowRight className="h-4 w-4" />
                            {tool.isExternal && <ExternalLink className="h-4 w-4" />}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </motion.section>

          {/* No Results */}
          {filteredTools.length === 0 && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-16">
              <div className="w-24 h-24 bg-muted/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">No tools found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Try adjusting your search terms or filters to find the tools you're looking for.
              </p>
              <Button variant="outline" onClick={() => {
            setSearchTerm("");
            setSelectedCategory("all");
            setSelectedDifficulty("all");
          }}>
                Clear All Filters
              </Button>
            </motion.div>}
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default ToolsHub;