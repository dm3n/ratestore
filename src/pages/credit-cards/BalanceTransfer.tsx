import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Star, CreditCard, Filter, Shield, Calculator } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const balanceTransferCards = [{
  id: 1,
  name: "MBNA True Line Mastercard",
  issuer: "MBNA",
  annualFee: 0,
  promoRate: "0.99% for 12 months",
  regularRate: "22.99%",
  balanceTransferFee: "1% (min $7.50)",
  features: ["Low promo rate", "No annual fee", "Online account management"],
  pros: ["Very low promotional rate", "No annual fee", "Long promotional period"],
  cons: ["High regular rate", "Balance transfer fee applies"],
  applyUrl: "#",
  isPromoted: true
}, {
  id: 2,
  name: "BMO Preferred Rate Mastercard",
  issuer: "BMO",
  annualFee: 20,
  promoRate: "2.99% for 9 months",
  regularRate: "12.99%",
  balanceTransferFee: "3%",
  features: ["Low ongoing rate", "Balance transfer offers", "Fraud protection"],
  pros: ["Low ongoing interest rate", "Regular promotional offers"],
  cons: ["Annual fee", "Higher transfer fee"],
  applyUrl: "#",
  isPromoted: false
}];

export default function BalanceTransfer() {
  const [sortBy, setSortBy] = useState("promo-rate");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-background to-purple-50 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <RefreshCw className="h-4 w-4" />
                Debt Consolidation Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                Balance Transfer
                <span className="block bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                  Credit Cards
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                <span className="text-blue-600 font-semibold">Consolidate high-interest debt</span> with 
                <span className="text-purple-600 font-semibold"> promotional rates as low as 0.99%</span>.
                Save money and simplify your financial life.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto animate-fade-in">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <RefreshCw className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-blue-600 mb-1">0.99%</div>
                  <div className="text-sm text-muted-foreground font-medium">Lowest Promo Rate</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-green-600 mb-1">12</div>
                  <div className="text-sm text-muted-foreground font-medium">Months Promo</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-purple-600 mb-1">$0</div>
                  <div className="text-sm text-muted-foreground font-medium">Annual Fee Options</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-yellow-600 mb-1">3K+</div>
                  <div className="text-sm text-muted-foreground font-medium">Avg. Savings</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Find Best Balance Transfer Card <RefreshCw className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg hover:bg-blue-50 border-blue-200 text-blue-700 transition-all">
                  Calculate Savings <Calculator className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl animate-pulse opacity-60" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl animate-pulse opacity-40" />
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
                  <SelectItem value="low-rate">Low Promo Rate</SelectItem>
                  <SelectItem value="promoted">Featured Cards</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="promo-rate">Promo Rate</SelectItem>
                <SelectItem value="annual-fee">Annual Fee</SelectItem>
                <SelectItem value="transfer-fee">Transfer Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {balanceTransferCards.map(card => (
              <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {card.isPromoted && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">Featured</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{card.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
                    </div>
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">Promotional Rate:</span>
                    <p className="text-primary font-semibold">{card.promoRate}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Annual Fee:</span>
                      <p className="text-gray-600">${card.annualFee}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Transfer Fee:</span>
                      <p className="text-gray-600">{card.balanceTransferFee}</p>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">Key Features:</span>
                    <ul className="text-gray-600 mt-1">
                      {card.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Balance Transfer Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How It Works</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Transfer high-interest debt to a low-rate card</li>
                  <li>• Enjoy promotional rates for a limited time</li>
                  <li>• Pay down debt faster with lower interest</li>
                  <li>• Consolidate multiple payments into one</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Important Considerations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Transfer fees typically apply (1-3%)</li>
                  <li>• Promotional rates are temporary</li>
                  <li>• Pay off balance before rate increases</li>
                  <li>• Avoid new purchases on the card</li>
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