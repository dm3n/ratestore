
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, Star, CreditCard, Filter, ArrowRight, Shield, DollarSign, Percent } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const lowInterestCards = [
  {
    id: 1,
    name: "BMO Preferred Rate Mastercard",
    issuer: "BMO",
    annualFee: 20,
    interestRate: "12.99%",
    purchaseRate: "12.99%",
    cashAdvanceRate: "22.99%",
    balanceTransferRate: "22.99%",
    creditLimit: "Up to $15,000",
    features: ["Low ongoing rate", "Fraud protection", "Online banking integration", "Emergency card replacement"],
    benefits: ["No foreign transaction fees on purchases", "Travel accident insurance", "Purchase protection"],
    pros: ["Very low interest rate", "Good for carrying balances", "Strong fraud protection"],
    cons: ["Low rewards earning", "Annual fee", "Limited welcome bonus"],
    applyUrl: "#",
    isPromoted: true,
    rating: 4.2,
    welcomeBonus: "None"
  },
  {
    id: 2,
    name: "RBC Low Rate Option Visa",
    issuer: "RBC",
    annualFee: 25,
    interestRate: "13.99%",
    purchaseRate: "13.99%",
    cashAdvanceRate: "22.99%",
    balanceTransferRate: "22.99%",
    creditLimit: "Up to $25,000",
    features: ["Low interest rate", "No annual fee first year", "RBC Rewards", "Mobile wallet compatible"],
    benefits: ["Purchase security and extended warranty", "Travel medical insurance", "Auto rental collision damage"],
    pros: ["Competitive low rate", "First year free", "Higher credit limits available"],
    cons: ["Limited rewards", "Higher cash advance rate", "Fee after first year"],
    applyUrl: "#",
    isPromoted: false,
    rating: 4.1,
    welcomeBonus: "First year free"
  },
  {
    id: 3,
    name: "Scotiabank Value Visa",
    issuer: "Scotiabank",
    annualFee: 29,
    interestRate: "13.99%",
    purchaseRate: "13.99%",
    cashAdvanceRate: "22.99%",
    balanceTransferRate: "13.99%",
    creditLimit: "Up to $20,000",
    features: ["Low purchase and balance transfer rate", "Scotia Rewards", "Fraud monitoring", "Emergency assistance"],
    benefits: ["Purchase protection", "Extended warranty", "Travel accident insurance"],
    pros: ["Same rate for purchases and balance transfers", "Good rewards program", "Strong security features"],
    cons: ["Annual fee", "Average cash advance rate", "Limited premium benefits"],
    applyUrl: "#",
    isPromoted: false,
    rating: 4.0,
    welcomeBonus: "2,500 Scotia Points"
  },
  {
    id: 4,
    name: "TD Emerald Visa",
    issuer: "TD",
    annualFee: 25,
    interestRate: "12.99%",
    purchaseRate: "12.99%",
    cashAdvanceRate: "22.99%",
    balanceTransferRate: "22.99%",
    creditLimit: "Up to $30,000",
    features: ["Ultra-low interest rate", "TD Rewards", "Contactless payments", "Digital wallet support"],
    benefits: ["Travel medical insurance", "Auto rental coverage", "Purchase protection"],
    pros: ["Excellent low rate", "Higher credit limits", "Comprehensive insurance coverage"],
    cons: ["Annual fee from day one", "Limited welcome offer", "Basic rewards structure"],
    applyUrl: "#",
    isPromoted: true,
    rating: 4.3,
    welcomeBonus: "5,000 TD Rewards Points"
  }
];

export default function LowInterest() {
  const [sortBy, setSortBy] = useState("interest-rate");
  const [filterBy, setFilterBy] = useState("all");
  const navigate = useNavigate();

  const filteredCards = lowInterestCards.filter(card => {
    switch (filterBy) {
      case "under-15":
        return parseFloat(card.interestRate) < 15;
      case "no-fee":
        return card.annualFee === 0;
      case "promoted":
        return card.isPromoted;
      default:
        return true;
    }
  }).sort((a, b) => {
    switch (sortBy) {
      case "interest-rate":
        return parseFloat(a.interestRate) - parseFloat(b.interestRate);
      case "annual-fee":
        return a.annualFee - b.annualFee;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-primary/90">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <TrendingDown className="h-10 w-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Low Interest 
                <span className="block text-primary-foreground/90">Credit Cards</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Minimize interest charges and maximize savings with Canada's lowest rate credit cards. 
              Perfect for those who carry balances or make large purchases.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-scale">
                <div className="flex items-center justify-center mb-4">
                  <Percent className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold mb-2">12.99%</div>
                <div className="text-primary-foreground/80">Lowest Rate Available</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-scale">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold mb-2">$20</div>
                <div className="text-primary-foreground/80">Starting Annual Fee</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-scale">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80">Fraud Protection</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                onClick={() => navigate('/credit-cards')}
              >
                Compare All Cards
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:border-white font-semibold transition-all duration-200"
                onClick={() => navigate('/guides/credit-cards-education')}
              >
                Learn More About Low Rates
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Enhanced Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-secondary/20 p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Low Rate Card</h2>
              <p className="text-muted-foreground">Filter and sort to discover the best low interest credit card for your needs</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-56 bg-background/50 backdrop-blur-sm border-secondary/30">
                    <SelectValue placeholder="Filter by criteria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cards</SelectItem>
                    <SelectItem value="under-15">Under 15% APR</SelectItem>
                    <SelectItem value="no-fee">No Annual Fee</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-56 bg-background/50 backdrop-blur-sm border-secondary/30">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interest-rate">Interest Rate (Low to High)</SelectItem>
                  <SelectItem value="annual-fee">Annual Fee (Low to High)</SelectItem>
                  <SelectItem value="rating">Rating (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-lg text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredCards.length}</span> low interest credit cards
          </p>
        </div>

        {/* Enhanced Card Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredCards.map((card, index) => (
            <Card key={card.id} className="relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-secondary/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale group">
              {card.isPromoted && (
                <div className="absolute top-6 right-6 z-10">
                  <Badge variant="destructive" className="bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {card.name}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground mt-2">
                      {card.issuer} • Credit Limit: {card.creditLimit}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 bg-secondary/20 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current text-primary" />
                    <span className="font-semibold text-sm">{card.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Rates Section */}
                <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-6 border border-primary/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{card.interestRate}</div>
                      <div className="text-sm font-medium text-muted-foreground">Purchase APR</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">${card.annualFee}</div>
                      <div className="text-sm font-medium text-muted-foreground">Annual Fee</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Rates */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cash Advance:</span>
                      <span className="font-medium">{card.cashAdvanceRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Balance Transfer:</span>
                      <span className="font-medium">{card.balanceTransferRate}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Welcome Bonus:</span>
                      <span className="font-medium text-primary">{card.welcomeBonus}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {card.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-secondary/50 text-secondary-foreground">
                        {feature}
                      </Badge>
                    ))}
                    {card.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{card.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-green-600 mb-2">Pros</h5>
                    <ul className="space-y-1">
                      {card.pros.slice(0, 2).map((pro, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-600 mb-2">Cons</h5>
                    <ul className="space-y-1">
                      {card.cons.slice(0, 2).map((con, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="pt-6 border-t border-secondary/20 space-y-3">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-md" asChild>
                    <a href={card.applyUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now - Get Approved
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5">
                    View Full Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Section */}
        <section className="mt-20 bg-gradient-to-br from-secondary/30 to-background rounded-3xl p-12 border border-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Choose Low Interest Credit Cards?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Low interest credit cards are ideal for those who carry balances month-to-month or make large purchases 
              they plan to pay off over time. Save hundreds of dollars in interest charges compared to regular rate cards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-secondary/20 hover:bg-white/70 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Save Money</h3>
                <p className="text-muted-foreground">Pay significantly less in interest charges when carrying a balance</p>
              </div>

              <div className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-secondary/20 hover:bg-white/70 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lower Payments</h3>
                <p className="text-muted-foreground">Reduce monthly interest costs and pay off debt faster</p>
              </div>

              <div className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-secondary/20 hover:bg-white/70 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Peace of Mind</h3>
                <p className="text-muted-foreground">Enjoy financial flexibility without excessive interest penalties</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
