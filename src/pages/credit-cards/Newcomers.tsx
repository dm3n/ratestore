
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Star, CreditCard, Filter, Shield, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const newcomerCards = [
  {
    id: 1,
    name: "RBC Newcomers Visa",
    issuer: "RBC",
    annualFee: 0,
    welcomeBonus: "No foreign exchange fee for first year",
    earnRate: "RBC Rewards points on purchases",
    creditHistoryRequired: "No Canadian credit history required",
    features: ["No Canadian credit history needed", "Banking package available", "Newcomer support"],
    pros: ["Designed for newcomers", "No annual fee", "Banking relationship helps"],
    cons: ["Limited rewards", "Lower credit limits initially"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "BMO Newcomer CashBack Mastercard",
    issuer: "BMO",
    annualFee: 0,
    welcomeBonus: "1% cash back for first 3 months",
    earnRate: "1% cash back on all purchases",
    creditHistoryRequired: "No Canadian credit history required",
    features: ["Cash back rewards", "No credit history needed", "BMO banking integration"],
    pros: ["Simple cash back structure", "No annual fee", "Good for building credit"],
    cons: ["Lower cash back rate", "Basic benefits"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function Newcomers() {
  const [sortBy, setSortBy] = useState("requirements");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-background to-blue-50 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Users className="h-4 w-4" />
                Welcome to Canada
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                Newcomer
                <span className="block bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                  Credit Cards
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                Build your Canadian credit history with cards designed specifically for
                <span className="text-green-600 font-semibold"> newcomers to Canada</span>. 
                <span className="text-blue-600 font-semibold"> No Canadian credit history required</span>.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto animate-fade-in">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-green-600 mb-1">No</div>
                  <div className="text-sm text-muted-foreground font-medium">Credit History Needed</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-blue-600 mb-1">$0</div>
                  <div className="text-sm text-muted-foreground font-medium">Annual Fee Options</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Newcomer Support</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-yellow-600 mb-1">1%</div>
                  <div className="text-sm text-muted-foreground font-medium">Cash Back Available</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Find Newcomer Card <Users className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg hover:bg-green-50 border-green-200 text-green-700 transition-all">
                  Learn About Building Credit <TrendingUp className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full blur-xl animate-pulse opacity-60" />
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
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="requirements">Requirements</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newcomerCards.map((card) => (
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
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Credit History:</span>
                  <p className="text-primary font-semibold">{card.creditHistoryRequired}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Annual Fee:</span>
                    <p className="text-gray-600">${card.annualFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Earn Rate:</span>
                    <p className="text-gray-600">{card.earnRate}</p>
                  </div>
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

        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Newcomer Credit Building Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Getting Started</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Open a Canadian bank account first</li>
                <li>• Consider a newcomer banking package</li>
                <li>• Start with one credit card initially</li>
                <li>• Make small purchases and pay in full</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Building Credit</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Always pay on time and in full</li>
                <li>• Keep credit utilization low (under 30%)</li>
                <li>• Don't close your first credit card</li>
                <li>• Monitor your credit score regularly</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
