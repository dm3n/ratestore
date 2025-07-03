import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Home, PiggyBank, TrendingUp, FileText, DollarSign, RefreshCw, Search, Filter, ArrowRight, Percent, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface CalculatorTool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  category: "mortgage" | "planning" | "analysis";
  difficulty: "beginner" | "intermediate" | "advanced";
  popular: boolean;
  features: string[];
}

const calculators: CalculatorTool[] = [
  {
    id: "mortgage-calculator",
    name: "Mortgage Payment Calculator",
    description: "Calculate monthly mortgage payments and total costs",
    longDescription: "Get accurate estimates of your monthly mortgage payments including principal, interest, taxes, and insurance. Compare different loan scenarios.",
    icon: Calculator,
    href: "/tools/mortgage-calculator",
    category: "mortgage",
    difficulty: "beginner",
    popular: true,
    features: ["Monthly payments", "Amortization", "Tax & insurance", "Rate comparison"]
  },
  {
    id: "affordability",
    name: "Home Affordability Calculator", 
    description: "Determine how much house you can afford",
    longDescription: "Calculate the maximum home price you can afford based on your income, debts, and down payment. Includes debt-to-income ratios.",
    icon: Home,
    href: "/tools/affordability-calculator",
    category: "mortgage",
    difficulty: "beginner",
    popular: true,
    features: ["Income analysis", "Debt ratios", "Down payment impact", "Affordability range"]
  },
  {
    id: "down-payment",
    name: "Down Payment Calculator",
    description: "Plan your down payment strategy and timeline",
    longDescription: "Calculate how much you need to save for a down payment and create a savings timeline to reach your homeownership goals.",
    icon: PiggyBank,
    href: "/tools/down-payment-calculator",
    category: "planning",
    difficulty: "beginner",
    popular: true,
    features: ["Savings timeline", "PMI analysis", "Goal tracking", "Investment growth"]
  },
  {
    id: "renewal",
    name: "Mortgage Renewal Calculator",
    description: "Compare renewal options and maximize savings",
    longDescription: "Analyze your mortgage renewal options, compare rates from different lenders, and calculate potential savings.",
    icon: RefreshCw,
    href: "/tools/renewal-calculator",
    category: "mortgage",
    difficulty: "intermediate",
    popular: true,
    features: ["Rate comparison", "Renewal costs", "Savings analysis", "Lender options"]
  },
  {
    id: "extra-payment",
    name: "Extra Payment Calculator",
    description: "See the impact of additional mortgage payments",
    longDescription: "Calculate how extra payments can reduce your mortgage term and save thousands in interest over the life of your loan.",
    icon: DollarSign,
    href: "/tools/extra-payment-calculator",
    category: "mortgage",
    difficulty: "intermediate",
    popular: false,
    features: ["Interest savings", "Time reduction", "Payment scenarios", "Bi-weekly options"]
  },
  {
    id: "amortization",
    name: "Amortization Schedule",
    description: "View detailed month-by-month payment breakdown",
    longDescription: "Generate a complete amortization schedule showing how much of each payment goes to principal vs interest over time.",
    icon: FileText,
    href: "/tools/amortization-schedule",
    category: "analysis",
    difficulty: "advanced",
    popular: false,
    features: ["Payment breakdown", "Principal tracking", "Interest analysis", "Export options"]
  },
  {
    id: "land-transfer-tax",
    name: "Land Transfer Tax Calculator",
    description: "Calculate land transfer tax costs by province",
    longDescription: "Estimate the land transfer tax you'll pay when purchasing a home in different Canadian provinces and cities.",
    icon: Percent,
    href: "/tools/land-transfer-tax-calculator",
    category: "planning",
    difficulty: "beginner",
    popular: false,
    features: ["Provincial rates", "City rebates", "First-time buyer", "Tax estimates"]
  },
  {
    id: "tfsa-calculator",
    name: "TFSA Calculator",
    description: "Calculate tax-free savings growth",
    longDescription: "Plan your Tax-Free Savings Account contributions and see how your investments can grow tax-free over time.",
    icon: Target,
    href: "/tools/tfsa-calculator",
    category: "planning",
    difficulty: "intermediate",
    popular: false,
    features: ["Contribution room", "Growth projections", "Tax savings", "Withdrawal planning"]
  }
];

const categories = [
  { id: "all", name: "All Calculators", icon: Calculator },
  { id: "mortgage", name: "Mortgage Tools", icon: Home },
  { id: "planning", name: "Planning Tools", icon: PiggyBank },
  { id: "analysis", name: "Analysis Tools", icon: TrendingUp }
];

const CalculatorsHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredCalculators = calculators.filter(calc => {
    const matchesSearch = calc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         calc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || calc.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || calc.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const popularCalculators = calculators.filter(calc => calc.popular);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <Calculator className="h-3 w-3 mr-1" />
              Mortgage & Rate Calculators
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mortgage Calculator Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive suite of mortgage and rate calculators to help you make informed decisions about 
              home buying, refinancing, renewals, and financial planning.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{calculators.length}</div>
                <div className="text-sm text-muted-foreground">Total Tools</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">{popularCalculators.length}</div>
                <div className="text-sm text-muted-foreground">Most Popular</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">Free</div>
                <div className="text-sm text-muted-foreground">Always</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </motion.div>

          {/* Popular Calculators */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <h2 className="text-2xl font-bold">Most Popular Calculators</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCalculators.map((calc, index) => (
                <motion.div
                  key={calc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-orange-100">
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <calc.icon className="h-6 w-6 text-orange-600" />
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{calc.name}</CardTitle>
                      <Badge variant="outline" className="self-start bg-orange-100 text-orange-700 border-orange-200">
                        Popular
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardDescription className="mb-4 text-base">
                        {calc.longDescription}
                      </CardDescription>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {calc.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                          <Link to={calc.href} className="flex items-center gap-2">
                            Calculate Now <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Search and Filters */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search calculators..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-white"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-white"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.section>

          {/* All Calculators */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-blue-500" />
              <h2 className="text-2xl font-bold">
                {selectedCategory === "all" ? "All Calculators" : 
                 categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <Badge variant="outline" className="ml-2">
                {filteredCalculators.length} tools
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCalculators.map((calc, index) => (
                <motion.div
                  key={calc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <calc.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{calc.name}</CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  calc.difficulty === 'beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                                  calc.difficulty === 'intermediate' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                  'bg-red-50 text-red-700 border-red-200'
                                }`}
                              >
                                {calc.difficulty}
                              </Badge>
                              {calc.popular && (
                                <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <CardDescription className="mb-4 text-base">
                        {calc.longDescription}
                      </CardDescription>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {calc.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                          <Link to={calc.href} className="flex items-center gap-2">
                            Use Calculator <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* No Results */}
          {filteredCalculators.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No calculators found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatorsHub;
