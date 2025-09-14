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

  const banksAndNetworks = [
    {
      name: "TD",
      type: "Bank",
      description: "Leading Canadian bank with Aeroplan partnerships",
      cardCount: "15+ cards",
      link: "/credit-cards/td",
      popular: true
    },
    {
      name: "RBC",
      type: "Bank", 
      description: "Avion rewards and comprehensive banking solutions",
      cardCount: "12+ cards",
      link: "/credit-cards/rbc",
      popular: true
    },
    {
      name: "BMO",
      type: "Bank",
      description: "AIR MILES rewards and cash back options",
      cardCount: "10+ cards", 
      link: "/credit-cards/bmo",
      popular: true
    },
    {
      name: "Scotiabank",
      type: "Bank",
      description: "Scene+ rewards and international benefits",
      cardCount: "14+ cards",
      link: "/credit-cards/scotiabank",
      popular: true
    },
    {
      name: "CIBC",
      type: "Bank",
      description: "Aventura rewards and flexible redemption options",
      cardCount: "11+ cards",
      link: "/credit-cards/cibc",
      popular: true
    },
    {
      name: "American Express",
      type: "Network",
      description: "Premium rewards and exclusive benefits",
      cardCount: "8+ cards",
      link: "/credit-cards/amex",
      popular: true
    },
    {
      name: "National Bank",
      type: "Bank",
      description: "À la Carte rewards and travel benefits",
      cardCount: "6+ cards",
      link: "/credit-cards/national-bank",
      popular: false
    },
    {
      name: "Tangerine",
      type: "Bank",
      description: "Simple cash back with no annual fees",
      cardCount: "3+ cards",
      link: "/credit-cards/tangerine",
      popular: true
    },
    {
      name: "PC Financial",
      type: "Bank",
      description: "PC Optimum points for grocery savings",
      cardCount: "2+ cards",
      link: "/credit-cards/pc-financial",
      popular: false
    },
    {
      name: "MBNA",
      type: "Bank",
      description: "Rewards Mastercard with flexible options",
      cardCount: "5+ cards", 
      link: "/credit-cards/mbna",
      popular: false
    },
    {
      name: "Mastercard",
      type: "Network",
      description: "Wide acceptance and priceless experiences",
      cardCount: "100+ cards",
      link: "/credit-cards/mastercard",
      popular: true
    },
    {
      name: "Visa",
      type: "Network", 
      description: "Global acceptance and security features",
      cardCount: "120+ cards",
      link: "/credit-cards/visa",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 lg:py-28">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
          <div className="absolute top-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-6xl mx-auto text-center">
              <Badge variant="outline" className="mb-8 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors backdrop-blur-sm">
                <CreditCard className="h-4 w-4 mr-2" />
                200+ Credit Cards
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Find the Perfect <br className="hidden md:block" />
                <span className="text-primary">Credit Card</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Compare Canada's best credit cards, earn more rewards, and discover exclusive benefits 
                from top banks and financial institutions.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground font-medium">Credit Cards</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground font-medium">Top Banks</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-primary mb-2">$0</div>
                    <div className="text-sm text-muted-foreground font-medium">Cost to Compare</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link to="/card-finder" className="flex items-center gap-3">
                    <Search className="h-5 w-5" />
                    Find My Perfect Card
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="px-8 py-4 text-lg font-semibold border-primary/20 text-primary hover:bg-primary/5 backdrop-blur-sm transition-all duration-300">
                  <Link to="/credit-cards/best-overall" className="flex items-center gap-3">
                    <Award className="h-5 w-5" />
                    View Best Cards
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CardFinder Interactive Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 group hover:bg-white/20 transition-all duration-300">
                  <Calculator className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  CardFinder
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-white/80 font-normal mt-2">
                    Your Personal Credit Card Assistant
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Get personalized credit card recommendations in under 60 seconds. 
                  No credit check required, completely free.
                </p>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-ping" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Answer Simple Questions</h3>
                  <p className="text-white/80 leading-relaxed">
                    Tell us about your spending habits, credit score range, and what rewards matter to you most
                  </p>
                </div>
                
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-ping animation-delay-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Get Smart Matches</h3>
                  <p className="text-white/80 leading-relaxed">
                    Our AI analyzes 200+ cards and shows you the top 3-5 matches ranked by your potential value
                  </p>
                </div>
                
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300 group hover:scale-110">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-ping animation-delay-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Apply with Confidence</h3>
                  <p className="text-white/80 leading-relaxed">
                    Compare your matches side-by-side and apply directly to your chosen card with pre-filled applications
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8 max-w-4xl mx-auto">
                  <div className="flex items-center gap-2 text-white/90">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">No credit check</span>
                  </div>
                  <div className="hidden md:block h-6 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-white/90">
                    <Zap className="h-5 w-5" />
                    <span className="font-medium">60 seconds</span>
                  </div>
                  <div className="hidden md:block h-6 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-white/90">
                    <Heart className="h-5 w-5" />
                    <span className="font-medium">100% free</span>
                  </div>
                </div>
                
                <Button size="lg" variant="secondary" asChild className="px-10 py-4 text-lg font-bold bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Link to="/card-finder" className="flex items-center gap-3">
                    <Search className="h-6 w-6" />
                    Start CardFinder Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="featured" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="featured">Featured Cards</TabsTrigger>
                <TabsTrigger value="rewards">Reward Cards</TabsTrigger>
                <TabsTrigger value="types">Card Types</TabsTrigger>
                <TabsTrigger value="banks">Banks & Networks</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
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

              {/* Banks & Networks Tab */}
              <TabsContent value="banks" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Banks & Networks</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Browse credit cards from Canada's leading banks and major payment networks.
                  </p>
                </div>
                
                {/* Popular Banks & Networks */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">Most Popular</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {banksAndNetworks.filter(item => item.popular).map((item, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow relative">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant={item.type === 'Bank' ? 'default' : 'secondary'}>
                              {item.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {item.cardCount}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild className="w-full">
                            <Link to={item.link}>
                              View {item.name} Cards
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* All Banks & Networks */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center">All Banks & Networks</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {banksAndNetworks.map((item, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant={item.type === 'Bank' ? 'default' : 'secondary'} className="text-xs">
                              {item.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{item.cardCount}</span>
                          </div>
                          <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link to={item.link}>
                              View Cards
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Tools Tab */}
              <TabsContent value="tools" className="space-y-6">
                <div className="text-center mb-8">
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
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Card?</h2>
              <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                Join over 500,000 Canadians who have found their ideal credit card with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" variant="secondary" className="min-w-[200px]" asChild>
                  <Link to="/card-finder">
                    <Search className="mr-2 h-5 w-5" />
                    Use CardFinder
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="min-w-[200px] bg-transparent border-white text-white hover:bg-white/10 transition-colors" 
                  asChild
                >
                  <Link to="/credit-cards/best-overall">
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
