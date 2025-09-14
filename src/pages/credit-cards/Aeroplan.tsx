
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const aeroplanCards = [
  {
    id: 1,
    name: "TD Aeroplan Visa Infinite",
    issuer: "TD",
    annualFee: 139,
    welcomeBonus: "50,000 Aeroplan points",
    welcomeRequirement: "Spend $1,000 in first 3 months",
    earnRate: "1.5x Aeroplan points per $1 spent",
    features: ["First checked bag free", "Priority boarding", "Maple Leaf Lounge passes", "Travel insurance"],
    pros: ["Strong Aeroplan earning", "Travel benefits", "No foreign fees", "Companion voucher"],
    cons: ["Annual fee", "Limited to Air Canada", "Requires good credit"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.5,
    reviewCount: 1200,
    estimatedAnnualValue: 380,
    aeroplanRate: 1.5,
    otherRate: 1.0
  },
  {
    id: 2,
    name: "CIBC Aeroplan Gold Visa",
    issuer: "CIBC",
    annualFee: 120,
    welcomeBonus: "35,000 Aeroplan points",
    welcomeRequirement: "Spend $1,000 in first 3 months",
    earnRate: "1.25x Aeroplan points per $1 spent",
    features: ["Priority check-in", "Aeroplan bonus categories", "Travel insurance", "No foreign fees"],
    pros: ["Good Aeroplan earning", "Lower annual fee", "Bonus categories", "Travel insurance"],
    cons: ["Lower earning rate", "Fewer premium benefits", "Annual fee"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.2,
    reviewCount: 890,
    estimatedAnnualValue: 320,
    aeroplanRate: 1.25,
    otherRate: 1.0
  }
];

export default function Aeroplan() {
  const [sortBy, setSortBy] = useState("aeroplan-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    aeroplan: 1000,
    other: 1000
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = aeroplanCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "high-rate") return card.aeroplanRate >= 1.5;
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "aeroplan-rate") return b.aeroplanRate - a.aeroplanRate;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof aeroplanCards[0]) => {
    const aeroplanEarnings = (monthlySpending.aeroplan * 12 * card.aeroplanRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(aeroplanEarnings + otherEarnings - card.annualFee);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          {/* Hero Header */}
          <div className="relative py-16 px-6 bg-gradient-to-br from-blue-50 via-background to-red-50 rounded-3xl mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-red-500/10 rounded-3xl" />
            <div className="relative max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10">
                <Plane className="h-4 w-4 mr-2" />
                Aeroplan Cards
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Fly <span className="text-primary">Higher</span><br />
                With Aeroplan Points
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Earn Aeroplan points faster and unlock exclusive Air Canada benefits. 
                From priority boarding to lounge access—elevate every journey.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">1.5x</div>
                  <div className="text-sm font-medium text-muted-foreground">Points Rate</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">50k+</div>
                  <div className="text-sm font-medium text-muted-foreground">Welcome Bonus</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Free</div>
                  <div className="text-sm font-medium text-muted-foreground">Checked Bags</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Priority</div>
                  <div className="text-sm font-medium text-muted-foreground">Boarding</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 px-8 py-4 h-auto font-semibold" onClick={() => setActiveTab("calculator")}>
                  <Calculator className="h-5 w-5" />
                  Calculate Points
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-4 h-auto font-semibold border-primary/20 text-primary hover:bg-primary/5" onClick={() => setActiveTab("compare")}>
                  <Target className="h-5 w-5" />
                  Compare Cards
                </Button>
              </div>
            </div>
          </div>
        </div>

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
                    <SelectItem value="no-fee">No Annual Fee</SelectItem>
                    <SelectItem value="high-rate">High Aeroplan Rate</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aeroplan-rate">Aeroplan Rate</SelectItem>
                  <SelectItem value="annual-fee">Annual Fee</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedCards.map(card => (
                <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
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
                        <p className="text-gray-600">${card.annualFee}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Welcome Bonus:</span>
                        <p className="text-gray-600">{card.welcomeBonus}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Aeroplan Rate:</span>
                      <p className="text-gray-600">{card.aeroplanRate}x points per $1</p>
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
                <CardTitle>Aeroplan Points Calculator</CardTitle>
                <CardDescription>Calculate your Aeroplan points earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Spending: ${monthlySpending.aeroplan}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="3000" 
                        value={monthlySpending.aeroplan} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          aeroplan: parseInt(e.target.value)
                        }))} 
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Annual Aeroplan Points</h4>
                    <div className="space-y-2">
                      {aeroplanCards.map(card => (
                        <div key={card.id} className="flex justify-between">
                          <span className="text-sm text-blue-700">{card.name}</span>
                          <span className="font-semibold text-blue-900">
                            {Math.round(monthlySpending.aeroplan * 12 * card.aeroplanRate).toLocaleString()} pts
                          </span>
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
                <CardTitle>Compare Aeroplan Cards</CardTitle>
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
                            const card = aeroplanCards.find(c => c.id === cardId);
                            return <th key={cardId} className="text-left p-3">{card?.name}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Annual Fee</td>
                          {selectedCards.map(cardId => {
                            const card = aeroplanCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Aeroplan Rate</td>
                          {selectedCards.map(cardId => {
                            const card = aeroplanCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.aeroplanRate}x</td>;
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
              <h2 className="text-2xl font-bold mb-6">Aeroplan Credit Card Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Maximizing Aeroplan Points</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use Aeroplan cards for all purchases to maximize earnings</li>
                    <li>• Book flights through Air Canada to earn bonus points</li>
                    <li>• Take advantage of promotional bonus point offers</li>
                    <li>• Combine with Aeroplan shopping portal for extra points</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Aeroplan Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Priority Benefits:</strong> Check-in, boarding, and baggage</li>
                    <li>• <strong>Lounge Access:</strong> Maple Leaf Lounges and partners</li>
                    <li>• <strong>Free Bags:</strong> First checked bag on flights</li>
                    <li>• <strong>Companion Tickets:</strong> Annual companion vouchers</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}
