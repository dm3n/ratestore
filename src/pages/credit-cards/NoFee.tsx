
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const noFeeCards = [
  {
    id: 1,
    name: "Tangerine Money-Back Credit Card",
    issuer: "Tangerine",
    annualFee: 0,
    welcomeBonus: "$50 cash back",
    welcomeRequirement: "Spend $500 in first 3 months",
    earnRate: "2% cash back on 2 categories, 0.5% elsewhere",
    features: ["No annual fee", "Choose your categories", "Simple cash back", "Mobile banking"],
    pros: ["No annual fee", "Good category rates", "Choose your categories", "Easy approval"],
    cons: ["Limited to 2 categories", "Lower base rate", "No premium benefits"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.3,
    reviewCount: 1500,
    estimatedAnnualValue: 240,
    categoryRate: 2.0,
    otherRate: 0.5
  },
  {
    id: 2,
    name: "PC Financial Mastercard",
    issuer: "PC Financial",
    annualFee: 0,
    welcomeBonus: "20,000 PC Points",
    welcomeRequirement: "Spend $500 in first 3 months",
    earnRate: "10 PC Points per $1, 25 points at Loblaws",
    features: ["No annual fee", "PC Points rewards", "High rate at Loblaws", "Easy redemption"],
    pros: ["No annual fee", "Good for groceries", "Wide acceptance", "Easy to earn"],
    cons: ["Limited to PC network", "Points system", "Lower general rate"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.1,
    reviewCount: 1200,
    estimatedAnnualValue: 180,
    categoryRate: 2.5,
    otherRate: 1.0
  }
];

export default function NoFee() {
  const [sortBy, setSortBy] = useState("category-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    category: 600,
    other: 1400
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = noFeeCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "cash-back") return card.earnRate.includes("cash back");
    if (filterBy === "points") return card.earnRate.includes("points") || card.earnRate.includes("Points");
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "category-rate") return b.categoryRate - a.categoryRate;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "value") return b.estimatedAnnualValue - a.estimatedAnnualValue;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof noFeeCards[0]) => {
    const categoryEarnings = (monthlySpending.category * 12 * card.categoryRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(categoryEarnings + otherEarnings);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-background to-green-50 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Shield className="h-4 w-4" />
                Zero Annual Fees Forever
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                No Annual Fee
                <span className="block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Credit Cards
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                <span className="text-emerald-600 font-semibold">Build credit and earn rewards</span> without 
                <span className="text-green-600 font-semibold"> paying annual fees</span>. 
                Perfect for first-time cardholders and anyone wanting to minimize costs.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Gift className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg text-emerald-900 mb-2">$0 Annual Fee</h3>
                  <p className="text-muted-foreground">Keep more money in your pocket with no annual costs</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <TrendingUp className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg text-green-900 mb-2">Earn Rewards</h3>
                  <p className="text-muted-foreground">Up to 2% cash back or points on purchases</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Target className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg text-blue-900 mb-2">Build Credit</h3>
                  <p className="text-muted-foreground">Establish and improve your credit score over time</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Find No Fee Card <Shield className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg hover:bg-emerald-50 border-emerald-200 text-emerald-700 transition-all" onClick={() => setActiveTab("calculator")}>
                  Calculate Rewards <Calculator className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full blur-xl animate-pulse opacity-60" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full blur-2xl animate-pulse opacity-40" />
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="browse">Browse Cards</TabsTrigger>
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
            <TabsTrigger value="guide">Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cards</SelectItem>
                    <SelectItem value="cash-back">Cash Back</SelectItem>
                    <SelectItem value="points">Points Cards</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category-rate">Category Rate</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="value">Estimated Value</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedCards.map(card => (
                <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="mb-2 bg-green-100 text-green-800">
                          No Annual Fee
                        </Badge>
                        <CardTitle className="text-lg leading-tight">{card.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
                      </div>
                      <button 
                        onClick={() => toggleCardSelection(card.id)}
                        className={`p-2 rounded-full shrink-0 ${selectedCards.includes(card.id) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        <CreditCard className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(card.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {card.rating} ({card.reviewCount} reviews)
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Annual Fee:</span>
                        <p className="text-green-600 font-semibold">$0</p>
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

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Estimated Annual Value:</span>
                      <p className="text-green-600 font-semibold">${calculateValue(card)}</p>
                    </div>
                    
                    <div className="pt-4 border-t space-y-2">
                      <Button className="w-full">Apply Now</Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => toggleCardSelection(card.id)}
                      >
                        {selectedCards.includes(card.id) ? 'Remove from Compare' : 'Add to Compare'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>No Fee Card Calculator</CardTitle>
                <CardDescription>Calculate your potential rewards with no annual fees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Category Spending: ${monthlySpending.category}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1500" 
                        value={monthlySpending.category} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          category: parseInt(e.target.value)
                        }))} 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Other Spending: ${monthlySpending.other}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="2000" 
                        value={monthlySpending.other} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          other: parseInt(e.target.value)
                        }))} 
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Annual Rewards (No Fees!)</h4>
                    <div className="space-y-2">
                      {noFeeCards.map(card => (
                        <div key={card.id} className="flex justify-between">
                          <span className="text-sm text-green-700">{card.name}</span>
                          <span className="font-semibold text-green-900">${calculateValue(card)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compare" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compare No Fee Cards</CardTitle>
                <CardDescription>Select cards to compare side by side</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedCards.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No cards selected for comparison</p>
                    <Button onClick={() => setActiveTab("browse")} variant="outline">
                      Browse Cards to Compare
                    </Button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Feature</th>
                          {selectedCards.map(cardId => {
                            const card = noFeeCards.find(c => c.id === cardId);
                            return <th key={cardId} className="text-left p-3">{card?.name}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Annual Fee</td>
                          {selectedCards.map(cardId => (
                            <td key={cardId} className="p-3 text-green-600 font-semibold">$0</td>
                          ))}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Category Rate</td>
                          {selectedCards.map(cardId => {
                            const card = noFeeCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.categoryRate}%</td>;
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">No Annual Fee Credit Card Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Benefits of No Fee Cards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• No ongoing costs to maintain</li>
                    <li>• Perfect for building credit history</li>
                    <li>• Still earn rewards on purchases</li>
                    <li>• Great backup cards to have</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Who Should Consider</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>First-time cardholders:</strong> Build credit without fees</li>
                    <li>• <strong>Light spenders:</strong> Won't earn enough to justify fees</li>
                    <li>• <strong>Emergency backup:</strong> Keep as backup with no cost</li>
                    <li>• <strong>Students:</strong> Manage finances without extra costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
