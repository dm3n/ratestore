
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, BookOpen, Shield, Calculator, TrendingUp, AlertCircle, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const creditCardGuides = [
  {
    title: "Credit Card Basics",
    description: "Understanding how credit cards work, types, and getting started",
    readTime: "8 min read",
    category: "Fundamentals",
    icon: CreditCard,
    href: "/guides/credit-card-basics",
    featured: true
  },
  {
    title: "Types of Credit Cards",
    description: "Comprehensive guide to different credit card categories and features",
    readTime: "12 min read",
    category: "Card Types",
    icon: BookOpen,
    href: "/guides/credit-card-types",
    featured: true
  },
  {
    title: "Rewards Credit Cards Guide",
    description: "Maximizing rewards, points, and cash back from your credit cards",
    readTime: "15 min read",
    category: "Rewards",
    icon: Award,
    href: "/guides/rewards-credit-cards",
    featured: true
  },
  {
    title: "Credit Card Insurance Guide",
    description: "Understanding travel, purchase protection, and other insurance benefits",
    readTime: "10 min read",
    category: "Insurance",
    icon: Shield,
    href: "/guides/credit-card-insurance",
    featured: true
  },
  {
    title: "Credit Score and Building Credit",
    description: "How credit cards affect your credit score and building credit history",
    readTime: "12 min read",
    category: "Credit Building",
    icon: TrendingUp,
    href: "/guides/credit-score-building",
    featured: false
  },
  {
    title: "Credit Card Security & Fraud Protection",
    description: "Protecting yourself from fraud and using credit cards safely",
    readTime: "8 min read",
    category: "Security",
    icon: Shield,
    href: "/guides/credit-card-security",
    featured: false
  },
  {
    title: "Credit Card Fees Explained",
    description: "Understanding annual fees, interest rates, and other charges",
    readTime: "6 min read",
    category: "Fees & Rates",
    icon: Calculator,
    href: "/guides/credit-card-fees",
    featured: false
  },
  {
    title: "Credit Card Applications",
    description: "How to apply for credit cards and improve approval odds",
    readTime: "10 min read",
    category: "Applications",
    icon: Users,
    href: "/guides/credit-card-applications",
    featured: false
  }
];

const CreditCardsEducation = () => {
  const featuredGuides = creditCardGuides.filter(guide => guide.featured);
  const allGuides = creditCardGuides;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50">
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
              <CreditCard className="h-3 w-3 mr-1" />
              Credit Cards Education
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Master Your Credit Cards
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn everything about credit cards - from basics to advanced strategies for maximizing rewards and building credit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/guides/credit-card-basics">
                  Start with Basics
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/card-finder">
                  Find Your Card
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Featured Guides */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Featured Guides</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Start with these comprehensive guides to build a solid foundation of credit card knowledge.
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

          {/* All Guides */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">All Credit Card Guides</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive collection of guides covering every aspect of credit cards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allGuides.map((guide, index) => (
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
                      {guide.featured && <Badge className="text-xs bg-yellow-100 text-yellow-800">Featured</Badge>}
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
          </motion.section>

          {/* Quick Tools */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Credit Card Tools</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Use our tools to make informed credit card decisions and manage your cards effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardHeader className="text-center">
                  <Calculator className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Interest Calculator</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-blue-100 mb-4">
                    Calculate interest and payment scenarios
                  </p>
                  <Button variant="secondary" className="w-full">
                    Use Calculator
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardHeader className="text-center">
                  <CreditCard className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>CardFinder</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-blue-100 mb-4">
                    Find the perfect card for your needs
                  </p>
                  <Button variant="secondary" asChild className="w-full">
                    <Link to="/card-finder">Find My Card</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardHeader className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Rewards Optimizer</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-blue-100 mb-4">
                    Maximize your rewards potential
                  </p>
                  <Button variant="secondary" className="w-full">
                    Optimize Rewards
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreditCardsEducation;
