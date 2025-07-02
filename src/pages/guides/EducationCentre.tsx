
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Home, RefreshCw, TrendingUp, Users, Calculator, FileText, Star, Clock, ArrowRight } from "lucide-react";
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
    href: "/guides/home-buying"
  },
  {
    title: "First-Time Buyer Programs",
    description: "Federal, provincial, and municipal programs for first-time buyers",
    readTime: "12 min read", 
    category: "Government Programs",
    icon: Users,
    featured: true,
    href: "/guides/first-time-programs"
  },
  {
    title: "Mortgage Renewal Guide",
    description: "How to get the best rates when your mortgage term expires",
    readTime: "10 min read",
    category: "Renewal",
    icon: RefreshCw,
    featured: true,
    href: "/guides/mortgage-renewal"
  },
  {
    title: "Refinancing Your Mortgage",
    description: "When and how to refinance to save money or access equity",
    readTime: "12 min read",
    category: "Refinancing",
    icon: TrendingUp,
    featured: true,
    href: "/guides/refinancing"
  },
  {
    title: "Variable vs Fixed Mortgage Rates",
    description: "Understanding the differences and choosing the right option",
    readTime: "8 min read",
    category: "Mortgage Basics",
    icon: Calculator,
    featured: false,
    href: "/guides/variable-vs-fixed"
  },
  {
    title: "Understanding Prime Rate",
    description: "How the Bank of Canada's prime rate affects your mortgage",
    readTime: "6 min read",
    category: "Interest Rates",
    icon: TrendingUp,
    featured: false,
    href: "/guides/prime-rate"
  }
];

const bankingGuides = [
  {
    title: "TFSA Basics and Strategies",
    description: "Maximize your Tax-Free Savings Account benefits",
    readTime: "10 min read",
    category: "Savings",
    icon: Calculator,
    href: "/guides/tfsa"
  },
  {
    title: "RRSP Contribution Guide",
    description: "Understanding RRSP contributions, withdrawals, and benefits",
    readTime: "12 min read",
    category: "Retirement",
    icon: Calculator,
    href: "/guides/rrsp"
  },
  {
    title: "High-Interest Savings Accounts",
    description: "Finding the best savings account for your needs",
    readTime: "8 min read",
    category: "Banking",
    icon: Calculator,
    href: "/guides/savings-accounts"
  }
];

const investingGuides = [
  {
    title: "GIC Investment Guide",
    description: "Everything you need to know about Guaranteed Investment Certificates",
    readTime: "10 min read",
    category: "Investments",
    icon: TrendingUp,
    href: "/guides/gic"
  },
  {
    title: "RESP Basics for Parents",
    description: "Education savings plans and government grants",
    readTime: "12 min read",
    category: "Education Savings",
    icon: Users,
    href: "/guides/resp"
  }
];

const creditGuides = [
  {
    title: "Credit Card Basics",
    description: "Understanding credit cards and building credit history",
    readTime: "8 min read",
    category: "Credit",
    icon: FileText,
    href: "/guides/credit-cards"
  },
  {
    title: "Rewards Credit Cards Guide",
    description: "Maximizing rewards and choosing the right card",
    readTime: "10 min read",
    category: "Credit Cards",
    icon: Star,
    href: "/guides/rewards-cards"
  }
];

const calculatorTools = [
  {
    name: "Mortgage Payment Calculator",
    description: "Calculate monthly payments for different mortgage scenarios",
    href: "/tools/mortgage-calculator",
    icon: Calculator
  },
  {
    name: "Affordability Calculator", 
    description: "Determine how much house you can afford",
    href: "/tools/affordability",
    icon: Home
  },
  {
    name: "Renewal Calculator",
    description: "Compare savings when renewing your mortgage",
    href: "/tools/renewal",
    icon: RefreshCw
  },
  {
    name: "Down Payment Calculator",
    description: "Plan your down payment and closing costs",
    href: "/tools/down-payment",
    icon: Calculator
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
              <BookOpen className="h-3 w-3 mr-1" />
              Education Centre
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Financial Education Centre
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn about mortgages, banking, investing, and personal finance with our 
              comprehensive guides and expert insights.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search guides and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-gray-200 focus:border-blue-400"
              />
            </div>
          </motion.div>

          {/* Featured Guides */}
          {!searchTerm && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Featured Guides</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our most popular and comprehensive guides to help you make informed financial decisions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredGuides.map((guide, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                      <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                          <guide.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {guide.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {guide.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg leading-tight">{guide.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {guide.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full group">
                          <Link to={guide.href}>
                            Read Guide
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Search Results or Categorized Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            {searchTerm ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Search Results ({filteredGuides.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGuides.map((guide, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {guide.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {guide.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                        <CardDescription>{guide.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="outline" className="w-full">
                          <Link to={guide.href}>Read Guide</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <Tabs defaultValue="mortgages" className="w-full">
                <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
                  <TabsTrigger value="mortgages">Mortgages</TabsTrigger>
                  <TabsTrigger value="banking">Banking</TabsTrigger>
                  <TabsTrigger value="investing">Investing</TabsTrigger>
                  <TabsTrigger value="credit">Credit</TabsTrigger>
                </TabsList>

                <TabsContent value="mortgages">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Mortgage Guides</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Everything you need to know about mortgages, from buying your first home to renewal and refinancing.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mortgageGuides.map((guide, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {guide.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {guide.readTime}
                            </div>
                            {guide.featured && <Star className="h-3 w-3 text-yellow-400 fill-current" />}
                          </div>
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" className="w-full">
                            <Link to={guide.href}>Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="banking">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Banking Guides</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Learn about savings accounts, registered accounts, and banking strategies.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bankingGuides.map((guide, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {guide.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {guide.readTime}
                            </div>
                          </div>
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" className="w-full">
                            <Link to={guide.href}>Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="investing">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Investment Guides</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Learn about GICs, RESPs, and other investment options available to Canadians.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {investingGuides.map((guide, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {guide.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {guide.readTime}
                            </div>
                          </div>
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" className="w-full">
                            <Link to={guide.href}>Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="credit">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Credit Guides</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Understanding credit cards, building credit, and managing debt effectively.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {creditGuides.map((guide, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {guide.category}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {guide.readTime}
                            </div>
                          </div>
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" className="w-full">
                            <Link to={guide.href}>Read Guide</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </motion.section>

          {/* Calculator Tools */}
          {!searchTerm && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Financial Calculators</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Use our calculators to make informed financial decisions and plan your future.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {calculatorTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                          <tool.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full" variant="outline">
                          <Link to={tool.href}>Use Calculator</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducationCentre;
