import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Home, RefreshCw, TrendingUp, Users, Calculator, FileText, Star, Clock, ArrowRight, Sparkles, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const mortgageGuides = [
  {
    title: "Complete Home Buying Guide",
    description: "Step-by-step guide to buying your first home in Canada",
    readTime: "15 min read",
    category: "Home Buying",
    icon: Home,
    featured: true,
    href: "/guides/home-buying",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "First-Time Buyer Programs",
    description: "Federal, provincial, and municipal programs for first-time buyers",
    readTime: "12 min read", 
    category: "Government Programs",
    icon: Users,
    featured: true,
    href: "/guides/first-time-buyer",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Mortgage Renewal Guide",
    description: "How to get the best rates when your mortgage term expires",
    readTime: "10 min read",
    category: "Renewal",
    icon: RefreshCw,
    featured: true,
    href: "/guides/mortgage-renewal",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Refinancing Your Mortgage",
    description: "When and how to refinance to save money or access equity",
    readTime: "12 min read",
    category: "Refinancing",
    icon: TrendingUp,
    featured: true,
    href: "/guides/refinancing",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Variable vs Fixed Mortgage Rates",
    description: "Understanding the differences and choosing the right option",
    readTime: "8 min read",
    category: "Mortgage Basics",
    icon: Calculator,
    featured: false,
    href: "/guides/variable-vs-fixed",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    title: "Understanding Prime Rate",
    description: "How the Bank of Canada's prime rate affects your mortgage",
    readTime: "6 min read",
    category: "Interest Rates",
    icon: TrendingUp,
    featured: false,
    href: "/guides/prime-rate",
    gradient: "from-cyan-500 to-blue-600"
  }
];

const bankingGuides = [
  {
    title: "TFSA Basics and Strategies",
    description: "Maximize your Tax-Free Savings Account benefits",
    readTime: "10 min read",
    category: "Savings",
    icon: Calculator,
    featured: false,
    href: "/guides/tfsa",
    gradient: "from-emerald-500 to-green-600"
  },
  {
    title: "RRSP Contribution Guide",
    description: "Understanding RRSP contributions, withdrawals, and benefits",
    readTime: "12 min read",
    category: "Retirement",
    icon: Calculator,
    featured: false,
    href: "/guides/rrsp",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "High-Interest Savings Accounts",
    description: "Finding the best savings account for your needs",
    readTime: "8 min read",
    category: "Banking",
    icon: Calculator,
    featured: false,
    href: "/guides/savings-accounts",
    gradient: "from-teal-500 to-green-600"
  }
];

const investingGuides = [
  {
    title: "GIC Investment Guide",
    description: "Everything you need to know about Guaranteed Investment Certificates",
    readTime: "10 min read",
    category: "Investments",
    icon: TrendingUp,
    featured: false,
    href: "/guides/gic",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    title: "RESP Basics for Parents",
    description: "Education savings plans and government grants",
    readTime: "12 min read",
    category: "Education Savings",
    icon: Users,
    featured: false,
    href: "/guides/resp",
    gradient: "from-rose-500 to-pink-600"
  }
];

const creditGuides = [
  {
    title: "Credit Card Basics",
    description: "Understanding credit cards and building credit history",
    readTime: "8 min read",
    category: "Credit",
    icon: FileText,
    featured: false,
    href: "/guides/credit-cards",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    title: "Rewards Credit Cards Guide",
    description: "Maximizing rewards and choosing the right card",
    readTime: "10 min read",
    category: "Credit Cards",
    icon: Star,
    featured: false,
    href: "/guides/rewards-cards",
    gradient: "from-fuchsia-500 to-purple-600"
  }
];

const calculatorTools = [
  {
    name: "Mortgage Payment Calculator",
    description: "Calculate monthly payments for different mortgage scenarios",
    href: "/tools/mortgage-calculator",
    icon: Calculator,
    color: "bg-blue-500"
  },
  {
    name: "Affordability Calculator", 
    description: "Determine how much house you can afford",
    href: "/tools/affordability",
    icon: Home,
    color: "bg-green-500"
  },
  {
    name: "Renewal Calculator",
    description: "Compare savings when renewing your mortgage",
    href: "/tools/renewal",
    icon: RefreshCw,
    color: "bg-orange-500"
  },
  {
    name: "Down Payment Calculator",
    description: "Plan your down payment and closing costs",
    href: "/tools/down-payment",
    icon: Calculator,
    color: "bg-purple-500"
  }
];

const EducationCentre = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allGuides = [...mortgageGuides, ...bankingGuides, ...investingGuides, ...creditGuides];
  const featuredGuides = allGuides.filter(guide => guide.featured);
  
  const filteredGuides = allGuides.filter(guide =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Education Centre
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Master Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guides, expert insights, and powerful tools to help you 
                make informed financial decisions in Canada.
              </p>
              
              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search guides, calculators, and resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-6 py-4 text-lg rounded-2xl border-0 bg-white/95 backdrop-blur-sm shadow-2xl focus:ring-4 focus:ring-white/30"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-blue-200 text-sm">Expert Guides</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-blue-200 text-sm">Calculators</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">1M+</div>
                  <div className="text-blue-200 text-sm">Users Helped</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">Free</div>
                  <div className="text-blue-200 text-sm">Always</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Guides */}
        {!searchTerm && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Featured Guides
                  </h2>
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our most popular and comprehensive guides to accelerate your financial knowledge.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredGuides.map((guide, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                      <div className={`absolute inset-0 bg-gradient-to-br ${guide.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <CardHeader className="relative z-10 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${guide.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <guide.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                              {guide.category}
                            </Badge>
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                          {guide.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                          {guide.description}
                        </CardDescription>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                          <Clock className="h-4 w-4" />
                          {guide.readTime}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="relative z-10 px-8 pb-8">
                        <Button asChild className="w-full group-hover:scale-105 transition-transform duration-200">
                          <Link to={guide.href}>
                            Start Reading
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {searchTerm ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Search Results ({filteredGuides.length})
                  </h2>
                  <p className="text-gray-600">Found {filteredGuides.length} guides matching "{searchTerm}"</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGuides.map((guide, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${guide.gradient || 'from-gray-400 to-gray-600'} flex items-center justify-center`}>
                            <guide.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Badge variant="outline" className="text-xs">
                              {guide.category}
                            </Badge>
                            <Clock className="h-3 w-3" />
                            {guide.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {guide.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {guide.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link to={guide.href}>Read Guide</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="max-w-6xl mx-auto">
                <Tabs defaultValue="mortgages" className="w-full">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      Browse by Category
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Explore our comprehensive collection of financial guides and resources.
                    </p>
                    
                    <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-14 p-1 bg-gray-100 rounded-2xl">
                      <TabsTrigger value="mortgages" className="text-sm font-medium rounded-xl">Mortgages</TabsTrigger>
                      <TabsTrigger value="banking" className="text-sm font-medium rounded-xl">Banking</TabsTrigger>
                      <TabsTrigger value="investing" className="text-sm font-medium rounded-xl">Investing</TabsTrigger>
                      <TabsTrigger value="credit" className="text-sm font-medium rounded-xl">Credit</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="mortgages">
                    <div className="text-center mb-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Home className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Mortgage Guides</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about mortgages, from buying your first home to renewal and refinancing.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mortgageGuides.map((guide, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${guide.gradient} flex items-center justify-center`}>
                                <guide.icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Badge variant="outline" className="text-xs">
                                  {guide.category}
                                </Badge>
                                <Clock className="h-3 w-3" />
                                {guide.readTime}
                                {guide.featured && <Star className="h-3 w-3 text-yellow-400 fill-current" />}
                              </div>
                            </div>
                            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                              {guide.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {guide.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button asChild variant="outline" size="sm" className="w-full">
                              <Link to={guide.href}>Read Guide</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="banking">
                    <div className="text-center mb-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Calculator className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Banking Guides</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Learn about savings accounts, registered accounts, and banking strategies.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {bankingGuides.map((guide, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${guide.gradient} flex items-center justify-center`}>
                                <guide.icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Badge variant="outline" className="text-xs">
                                  {guide.category}
                                </Badge>
                                <Clock className="h-3 w-3" />
                                {guide.readTime}
                              </div>
                            </div>
                            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                              {guide.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {guide.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button asChild variant="outline" size="sm" className="w-full">
                              <Link to={guide.href}>Read Guide</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="investing">
                    <div className="text-center mb-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Investment Guides</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Learn about GICs, RESPs, and other investment options available to Canadians.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {investingGuides.map((guide, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${guide.gradient} flex items-center justify-center`}>
                                <guide.icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Badge variant="outline" className="text-xs">
                                  {guide.category}
                                </Badge>
                                <Clock className="h-3 w-3" />
                                {guide.readTime}
                              </div>
                            </div>
                            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                              {guide.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {guide.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button asChild variant="outline" size="sm" className="w-full">
                              <Link to={guide.href}>Read Guide</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="credit">
                    <div className="text-center mb-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Credit Guides</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Understanding credit cards, building credit, and managing debt effectively.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {creditGuides.map((guide, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${guide.gradient} flex items-center justify-center`}>
                                <guide.icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Badge variant="outline" className="text-xs">
                                  {guide.category}
                                </Badge>
                                <Clock className="h-3 w-3" />
                                {guide.readTime}
                              </div>
                            </div>
                            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                              {guide.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {guide.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button asChild variant="outline" size="sm" className="w-full">
                              <Link to={guide.href}>Read Guide</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </section>

        {/* Calculator Tools */}
        {!searchTerm && (
          <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Target className="h-6 w-6 text-green-400" />
                  <h2 className="text-4xl font-bold text-white">
                    Financial Calculators
                  </h2>
                  <Target className="h-6 w-6 text-green-400" />
                </div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Powerful tools to help you make informed financial decisions and plan your future.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {calculatorTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <CardHeader className="text-center pb-4">
                        <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <tool.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-sm">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button asChild className="w-full bg-white text-gray-900 hover:bg-gray-100" size="sm">
                          <Link to={tool.href}>
                            Use Calculator
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default EducationCentre;
