
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, CreditCard, Gift, Shield, Plane, ShoppingCart, Car, Utensils, ArrowRight, Store, Award, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const BestOverallCreditCards = () => {
  const featuredCards = [
    {
      id: 1,
      name: "Chase Sapphire Preferred",
      issuer: "Chase",
      rating: 4.8,
      ratingCount: 1250,
      featured: true,
      annualFee: 95,
      welcomeBonus: {
        value: "60,000 points",
        requirement: "Spend $4,000 in first 3 months",
        estimated: "$750 value"
      },
      earnRate: "2x points on travel & dining, 1x on everything else",
      bestFor: ["Travel rewards", "Dining", "Sign-up bonus"],
      keyFeatures: [
        "25% more value when you redeem for travel",
        "Transfer to airline and hotel partners",
        "Trip cancellation/interruption insurance",
        "No foreign transaction fees"
      ],
      pros: [
        "Excellent transfer partners",
        "Strong welcome bonus",
        "Good travel protections",
        "Flexible redemption options"
      ],
      cons: [
        "Annual fee",
        "Limited bonus categories",
        "Requires good credit"
      ],
      applyUrl: "#"
    },
    {
      id: 2,
      name: "Capital One Venture X Rewards",
      issuer: "Capital One",
      rating: 4.7,
      ratingCount: 980,
      featured: true,
      annualFee: 395,
      welcomeBonus: {
        value: "75,000 miles",
        requirement: "Spend $4,000 in first 3 months",
        estimated: "$750 value"
      },
      earnRate: "2x miles on all purchases",
      bestFor: ["Premium travel", "Airport lounges", "Travel credits"],
      keyFeatures: [
        "$300 annual travel credit",
        "Priority Pass Select lounge access",
        "10,000 anniversary bonus miles",
        "No foreign transaction fees"
      ],
      pros: [
        "Flat 2x rate on everything",
        "Excellent travel benefits",
        "Easy to use miles",
        "Premium perks"
      ],
      cons: [
        "High annual fee",
        "Limited transfer partners",
        "Requires excellent credit"
      ],
      applyUrl: "#"
    },
    {
      id: 3,
      name: "Citi Double Cash",
      issuer: "Citi",
      rating: 4.5,
      ratingCount: 2100,
      featured: false,
      annualFee: 0,
      welcomeBonus: {
        value: "$200 cash back",
        requirement: "Spend $1,500 in first 6 months",
        estimated: "$200 value"
      },
      earnRate: "2% cash back on all purchases (1% when you buy, 1% when you pay)",
      bestFor: ["Cash back", "No annual fee", "Simple rewards"],
      keyFeatures: [
        "2% cash back on all purchases",
        "No annual fee",
        "No category restrictions",
        "Balance transfer option"
      ],
      pros: [
        "Straightforward 2% cash back",
        "No annual fee",
        "No rotating categories",
        "Good for any spending"
      ],
      cons: [
        "No sign-up bonus traditionally",
        "Cash back paid when you pay bill",
        "Limited additional perks"
      ],
      applyUrl: "#"
    },
    {
      id: 4,
      name: "American Express Gold Card",
      issuer: "American Express",
      rating: 4.6,
      ratingCount: 1580,
      featured: true,
      annualFee: 250,
      welcomeBonus: {
        value: "60,000 points",
        requirement: "Spend $4,000 in first 6 months",
        estimated: "$600 value"
      },
      earnRate: "4x points at restaurants & groceries (up to $25K/year), 3x on flights, 1x everything else",
      bestFor: ["Dining", "Groceries", "Monthly credits"],
      keyFeatures: [
        "$10 monthly dining credit",
        "$10 monthly Uber/Uber Eats credit",
        "4x points on dining and groceries",
        "Excellent transfer partners"
      ],
      pros: [
        "High earning rates on dining/groceries",
        "Valuable monthly credits",
        "Great transfer partners",
        "Strong welcome bonus"
      ],
      cons: [
        "Annual fee",
        "Limited acceptance vs Visa/MC",
        "Credits require activation"
      ],
      applyUrl: "#"
    },
    {
      id: 5,
      name: "Chase Freedom Unlimited",
      issuer: "Chase",
      rating: 4.4,
      ratingCount: 1890,
      featured: false,
      annualFee: 0,
      welcomeBonus: {
        value: "$200 cash back",
        requirement: "Spend $500 in first 3 months",
        estimated: "$200 value"
      },
      earnRate: "1.5% cash back on all purchases",
      bestFor: ["No annual fee", "Simple cash back", "First credit card"],
      keyFeatures: [
        "1.5% cash back on all purchases",
        "No annual fee",
        "0% intro APR for 15 months",
        "No foreign transaction fees"
      ],
      pros: [
        "No annual fee",
        "Simple flat rate",
        "Good intro APR offer",
        "Easy approval"
      ],
      cons: [
        "Lower earning rate",
        "No bonus categories",
        "Limited premium perks"
      ],
      applyUrl: "#"
    }
  ];

  const categories = [
    {
      name: "Travel Rewards",
      icon: Plane,
      count: 12,
      href: "/credit-cards/travel"
    },
    {
      name: "Cash Back",
      icon: CreditCard,
      count: 15,
      href: "/credit-cards/cash-back"
    },
    {
      name: "Dining",
      icon: Utensils,
      count: 8,
      href: "/credit-cards/dining"
    },
    {
      name: "Groceries",
      icon: ShoppingCart,
      count: 10,
      href: "/credit-cards/grocery"
    },
    {
      name: "Gas",
      icon: Car,
      count: 6,
      href: "/credit-cards/gas"
    },
    {
      name: "No Annual Fee",
      icon: Shield,
      count: 18,
      href: "/credit-cards/no-fee"
    },
    {
      name: "Store Cards",
      icon: Store,
      count: 12,
      href: "/credit-cards/store"
    },
    {
      name: "Rewards",
      icon: Award,
      count: 20,
      href: "/credit-cards/rewards"
    },
    {
      name: "Aeroplan",
      icon: Plane,
      count: 8,
      href: "/credit-cards/aeroplan"
    }
  ];

  const scrollToCategories = () => {
    const element = document.getElementById('categories-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
        )}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                  <Trophy className="h-4 w-4" />
                  RateStore 2025 Award Winners
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                  Best Canadian
                  <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Credit Cards 2025
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                  Our expertly curated selection of award-winning credit cards, 
                  <span className="text-foreground font-medium"> thoroughly analyzed for maximum value and benefits</span>
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto animate-fade-in">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Cards Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2025</div>
                    <div className="text-sm text-muted-foreground">Award Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15K+</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  <Button size="lg" className="gap-2 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105" asChild>
                    <Link to="/card-finder">
                      Find My Perfect Card <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg hover:bg-primary/5 transition-all" onClick={scrollToCategories}>
                    Browse Categories <CreditCard className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" />
        </section>

        {/* Categories Section */}
        <section id="categories-section" className="py-12 md:py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Browse by Category
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find the perfect card for your specific needs and spending habits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer group">
                      <CardContent className="p-6">
                        <Link to={category.href} className="block">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1">{category.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {category.count} cards available
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Banner */}
        <section className="py-8 bg-primary/5 border-y">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                🏆 RateStore 2025 Credit Card Awards
              </h2>
              <p className="text-muted-foreground">
                Recognizing excellence in Canadian credit cards based on comprehensive analysis of rewards, benefits, and customer value
              </p>
            </div>
          </div>
        </section>

        {/* Featured Cards */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Award-Winning Credit Cards
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These cards have earned RateStore's 2025 awards for outstanding performance in their categories. 
                  Updated monthly based on current offers and market conditions.
                </p>
              </div>

              <div className="space-y-8">
                {featuredCards.map((card, index) => (
                  <Card key={card.id} className={`relative overflow-hidden ${card.featured ? 'ring-2 ring-primary/20 shadow-lg' : ''}`}>
                    {card.featured && (
                      <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                        🏆 2025 Award Winner
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              #{index + 1}
                            </Badge>
                            <CardTitle className="text-xl md:text-2xl">{card.name}</CardTitle>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              {renderStars(card.rating)}
                              <span className="text-sm font-medium">{card.rating}</span>
                              <span className="text-sm text-muted-foreground">
                                ({card.ratingCount.toLocaleString()} reviews)
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">Annual Fee</p>
                              <p className="text-lg font-semibold">
                                {card.annualFee === 0 ? 'No annual fee' : `$${card.annualFee}`}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">Welcome Bonus</p>
                              <p className="text-lg font-semibold">{card.welcomeBonus.value}</p>
                              <p className="text-sm text-muted-foreground">{card.welcomeBonus.requirement}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm font-medium text-muted-foreground mb-1">Earn Rate</p>
                            <p className="text-base">{card.earnRate}</p>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {card.bestFor.map((item, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="lg:w-80 space-y-4">
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Gift className="h-5 w-5 text-primary" />
                              <span className="font-medium">Welcome Bonus</span>
                            </div>
                            <p className="text-lg font-semibold text-primary mb-1">
                              {card.welcomeBonus.estimated}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {card.welcomeBonus.requirement}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <Button className="w-full" size="lg">
                              Apply Now
                            </Button>
                            <Button variant="outline" className="w-full" size="sm">
                              View Full Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3">Key Features</h4>
                          <ul className="space-y-2 text-sm">
                            {card.keyFeatures.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-3 text-green-700">Pros</h4>
                            <ul className="space-y-1 text-sm">
                              {card.pros.slice(0, 3).map((pro, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-3 text-red-700">Cons</h4>
                            <ul className="space-y-1 text-sm">
                              {card.cons.slice(0, 3).map((con, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Info Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                About RateStore's 2025 Credit Card Awards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Rigorous Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Every card undergoes comprehensive analysis of rewards, fees, and benefits
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team of financial experts evaluates each card's value proposition
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Real Value</h3>
                  <p className="text-sm text-muted-foreground">
                    Awards based on actual consumer benefit and long-term value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Award Winner is Right for You?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Use our CardFinder tool to get personalized recommendations from our award-winning selection 
                based on your spending habits, credit score, and financial goals.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/credit-cards/card-finder">
                  Find My Perfect Card <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BestOverallCreditCards;
