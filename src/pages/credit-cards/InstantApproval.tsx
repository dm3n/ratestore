
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Star, CreditCard, Filter, Shield, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const instantApprovalCards = [
  {
    id: 1,
    name: "Capital One QuicksilverOne",
    issuer: "Capital One",
    annualFee: 39,
    welcomeBonus: "$50 cash back",
    earnRate: "1.5% cash back on everything",
    approvalTime: "Instant decision online",
    features: ["Fast approval", "Flat cash back rate", "No foreign transaction fees"],
    pros: ["Quick approval process", "Simple rewards structure"],
    cons: ["Annual fee", "Average earn rate"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Discover it Cash Back",
    issuer: "Discover",
    annualFee: 0,
    welcomeBonus: "Cashback Match for first year",
    earnRate: "5% rotating categories, 1% everything else",
    approvalTime: "Instant approval available",
    features: ["No annual fee", "Rotating bonus categories", "Free credit score"],
    pros: ["No annual fee", "High rotating category rates"],
    cons: ["Limited acceptance in Canada", "Category activation required"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function InstantApproval() {
  const [sortBy, setSortBy] = useState("approval-time");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-background to-orange-50 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Zap className="h-4 w-4" />
                Lightning Fast Approvals
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                Instant Approval
                <span className="block bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
                  Credit Cards
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                Get approved in
                <span className="text-yellow-600 font-semibold"> minutes, not days</span>. 
                Start using your new credit card
                <span className="text-orange-600 font-semibold"> right away</span> with instant online decisions.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto animate-fade-in">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-yellow-600 mb-1">60</div>
                  <div className="text-sm text-muted-foreground font-medium">Seconds Approval</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-orange-600 mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Online Applications</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-red-600 mb-1">$0</div>
                  <div className="text-sm text-muted-foreground font-medium">Fee Options</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-green-600 mb-1">1.5%</div>
                  <div className="text-sm text-muted-foreground font-medium">Cash Back Available</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Get Instant Approval <Zap className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg hover:bg-yellow-50 border-yellow-200 text-yellow-700 transition-all">
                  Check Requirements <Clock className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full blur-xl animate-pulse opacity-60" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200 rounded-full blur-2xl animate-pulse opacity-40" />
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
              <SelectItem value="approval-time">Approval Time</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {instantApprovalCards.map((card) => (
            <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {card.isPromoted && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Featured</Badge>
                </div>
              )}
              
              <CardHeader className="pr-20">
                <CardTitle className="text-lg pr-2">{card.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Approval Time:</span>
                  <p className="text-primary font-semibold">{card.approvalTime}</p>
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
