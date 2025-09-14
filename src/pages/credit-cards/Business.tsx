
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, Star, CreditCard, Filter, Shield, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const businessCards = [
  {
    id: 1,
    name: "Chase Ink Business Preferred",
    issuer: "Chase",
    annualFee: 95,
    welcomeBonus: "100,000 Ultimate Rewards points",
    welcomeRequirement: "$15,000 in 3 months",
    earnRate: "3x on travel, shipping, internet, phone, advertising",
    features: ["High earning categories", "Employee cards", "Travel benefits"],
    pros: ["Excellent bonus categories for business", "High welcome bonus"],
    cons: ["High spending requirement", "Limited availability in Canada"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "RBC Business Platinum Avion",
    issuer: "RBC",
    annualFee: 120,
    welcomeBonus: "25,000 Avion points",
    welcomeRequirement: "$5,000 in 3 months",
    earnRate: "1.25x everywhere, 2x on travel bookings",
    features: ["Business expense tracking", "Employee cards", "Travel insurance"],
    pros: ["Good for Canadian businesses", "Comprehensive travel insurance"],
    cons: ["Lower general earn rate", "Moderate welcome bonus"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function Business() {
  const [sortBy, setSortBy] = useState("welcome-bonus");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-background to-blue-50 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Briefcase className="h-4 w-4" />
                Professional Credit Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                Business Credit
                <span className="block bg-gradient-to-r from-slate-600 to-blue-500 bg-clip-text text-transparent">
                  Cards
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                <span className="text-slate-600 font-semibold">Separate business and personal expenses</span> while 
                <span className="text-blue-600 font-semibold"> earning rewards on company spending</span>.
                Find the perfect card for your business needs.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto animate-fade-in">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Briefcase className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-slate-600 mb-1">100K+</div>
                  <div className="text-sm text-muted-foreground font-medium">Points Available</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-blue-600 mb-1">3x</div>
                  <div className="text-sm text-muted-foreground font-medium">Max Earn Rate</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-green-600 mb-1">$0</div>
                  <div className="text-sm text-muted-foreground font-medium">Employee Cards</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-yellow-600 mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Business Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-slate-600 to-blue-500 hover:from-slate-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Find Business Card <Briefcase className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg hover:bg-slate-50 border-slate-200 text-slate-700 transition-all">
                  Compare Benefits <TrendingUp className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-slate-200 rounded-full blur-xl animate-pulse opacity-60" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl animate-pulse opacity-40" />
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cards</SelectItem>
                <SelectItem value="no-fee">No Annual Fee</SelectItem>
                <SelectItem value="cash-back">Cash Back</SelectItem>
                <SelectItem value="travel">Travel Rewards</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessCards.map((card) => (
            <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {card.isPromoted && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Featured</Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Annual Fee:</span>
                    <p className="text-gray-600">${card.annualFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Welcome Bonus:</span>
                    <p className="text-gray-600">{card.welcomeBonus}</p>
                  </div>
                </div>
                
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Earn Rate:</span>
                  <p className="text-gray-600">{card.earnRate}</p>
                </div>
                
                <div className="pt-4 border-t">
                  <Button className="w-full" asChild>
                    <a href={card.applyUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
