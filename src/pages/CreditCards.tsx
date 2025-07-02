
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  Star, 
  Gift, 
  Plane, 
  ShoppingCart, 
  Car, 
  Users, 
  Shield, 
  Zap, 
  Award,
  Calculator,
  Search,
  TrendingUp,
  Heart,
  Building,
  GraduationCap
} from "lucide-react";

const CreditCards = () => {
  const featuredCards = [
    {
      name: "TD Aeroplan Visa Infinite",
      category: "Travel Rewards",
      annualFee: "$139",
      welcomeBonus: "50,000 Aeroplan points",
      highlights: ["2x points on Air Canada", "Priority boarding", "Free checked bag"],
      rating: 4.8,
      featured: true
    },
    {
      name: "Tangerine Money-Back",
      category: "Cash Back",
      annualFee: "$0",
      welcomeBonus: "10% cash back for 2 months",
      highlights: ["2% on 2 categories", "0.5% on everything else", "No annual fee"],
      rating: 4.6,
      featured: true
    },
    {
      name: "American Express Cobalt",
      category: "Rewards",
      annualFee: "$12.99/month",
      welcomeBonus: "30,000 points",
      highlights: ["5x points on groceries", "3x points on gas", "2x points on travel"],
      rating: 4.9,
      featured: true
    }
  ];

  const cardTypes = [
    {
      title: "No Fee Cards",
      description: "Great starter cards with no annual fee",
      icon: <Heart className="h-8 w-8 text-green-600" />,
      link: "/credit-cards/no-fee",
      count: "15+ cards"
    },
    {
      title: "Balance Transfer",
      description: "Low interest cards to consolidate debt",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      link: "/credit-cards/balance-transfer",
      count: "12+ cards"
    },
    {
      title: "Business Cards",
      description: "Cards designed for business expenses",
      icon: <Building className="h-8 w-8 text-purple-600" />,
      link: "/credit-cards/business",
      count: "20+ cards"
    },
    {
      title: "Student Cards",
      description: "Build credit while in school",
      icon: <GraduationCap className="h-8 w-8 text-orange-600" />,
      link: "/credit-cards/student",
      count: "8+ cards"
    },
    {
      title: "Secured Cards",
      description: "Rebuild your credit with a deposit",
      icon: <Shield className="h-8 w-8 text-red-600" />,
      link: "/credit-cards/secured",
      count: "6+ cards"
    },
    {
      title: "Instant Approval",
      description: "Get approved in minutes",
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      link: "/credit-cards/instant-approval",
      count: "10+ cards"
    }
  ];

  const rewardCards = [
    {
      title: "Travel Cards",
      description: "Earn points and miles for travel",
      icon: <Plane className="h-8 w-8 text-blue-600" />,
      link: "/credit-cards/travel",
      popular: true
    },
    {
      title: "Cash Back Cards",
      description: "Earn cash back on purchases",
      icon: <Gift className="h-8 w-8 text-green-600" />,
      link: "/credit-cards/cash-back",
      popular: true
    },
    {
      title: "Grocery Cards",
      description: "Extra rewards on grocery shopping",
      icon: <ShoppingCart className="h-8 w-8 text-orange-600" />,
      link: "/credit-cards/grocery",
      popular: false
    },
    {
      title: "Gas Cards",
      description: "Save money at the pump",
      icon: <Car className="h-8 w-8 text-red-600" />,
      link: "/credit-cards/gas",
      popular: false
    },
    {
      title: "Aeroplan Cards",
      description: "Earn Aeroplan points faster",
      icon: <Plane className="h-8 w-8 text-red-700" />,
      link: "/credit-cards/aeroplan",
      popular: true
    },
    {
      title: "Store Cards",
      description: "Rewards at your favorite retailers",
      icon: <Award className="h-8 w-8 text-purple-600" />,
      link: "/credit-cards/store",
      popular: false
    }
  ];

  const banks = [
    "TD", "RBC", "BMO", "Scotiabank", "CIBC", "American Express", 
    "MBNA", "National Bank", "Tangerine", "PC Financial"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Credit Card Hub
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Find the Perfect Credit Card for You
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare over 200+ credit cards from Canada's top banks and find the best rewards, rates, and benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/card-finder">
                    <Search className="mr-2 h-5 w-5" />
                    Find My Card
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/credit-cards/best-canadian">
                    View Best Cards
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CardFinder Promotion */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <CreditCard className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                CardFinder - Find Your Perfect Match
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get personalized credit card recommendations in under 1 minute. No credit check required.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Answer Questions</h3>
                  <p className="text-purple-100 text-sm">Tell us about your spending habits</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Get Matches</h3>
                  <p className="text-purple-100 text-sm">See personalized recommendations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Apply Now</h3>
                  <p className="text-purple-100 text-sm">Apply with confidence</p>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/card-finder">
                  Try CardFinder Now
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="featured" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="featured">Featured Cards</TabsTrigger>
                <TabsTrigger value="rewards">Reward Cards</TabsTrigger>
                <TabsTrigger value="types">Card Types</TabsTrigger>
                <TabsTrigger value="banks">By Bank</TabsTrigger>
              </TabsList>

              {/* Featured Cards Tab */}
              <TabsContent value="featured" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Featured Credit Cards</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Hand-picked cards offering the best value and benefits for Canadian consumers.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredCards.map((card, index) => (
                    <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow pt-12">
                      {card.featured && (
                        <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 z-10">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <CardHeader className="pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{card.category}</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm font-medium">{card.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <CardDescription>
                          Annual Fee: <span className="font-semibold text-foreground">{card.annualFee}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="font-medium text-green-600 mb-2">{card.welcomeBonus}</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {card.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex gap-2">
                            <Button className="flex-1" size="sm">Apply Now</Button>
                            <Button variant="outline" size="sm">Compare</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Reward Cards Tab */}
              <TabsContent value="rewards" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Reward Credit Cards</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Maximize your rewards with cards designed for specific spending categories.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rewardCards.map((card, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="text-center">
                        {card.popular && (
                          <Badge className="w-fit mx-auto mb-3 bg-green-100 text-green-700 border-green-200">
                            Most Popular
                          </Badge>
                        )}
                        <div className="flex justify-center mb-4">
                          {card.icon}
                        </div>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link to={card.link}>
                            View {card.title}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Card Types Tab */}
              <TabsContent value="types" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Credit Card Types</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Find the right type of credit card based on your financial situation and goals.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cardTypes.map((type, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          {type.icon}
                          <Badge variant="secondary">{type.count}</Badge>
                        </div>
                        <CardTitle>{type.title}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link to={type.link}>
                            Compare {type.title}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Banks Tab */}
              <TabsContent value="banks" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Cards by Bank</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Browse credit cards from Canada's leading financial institutions.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {banks.map((bank, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-lg">{bank}</h3>
                        <p className="text-sm text-muted-foreground mt-1">View Cards</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Tools and Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Credit Card Tools & Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Make informed decisions with our helpful tools and educational resources.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Payment Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calculate monthly payments and interest costs
                    </p>
                    <Button variant="outline" className="w-full">Use Calculator</Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Credit Score Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn how to improve your credit score
                    </p>
                    <Button variant="outline" className="w-full">Read Guide</Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">2025 Awards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      See our annual credit card awards
                    </p>
                    <Button variant="outline" className="w-full">View Winners</Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Card Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Tips to protect yourself from fraud
                    </p>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Card?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join over 500,000 Canadians who have found their ideal credit card with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/card-finder">
                    <Search className="mr-2 h-5 w-5" />
                    Use CardFinder
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/credit-cards/best-canadian">
                    Browse All Cards
                  </Link>
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

export default CreditCards;
