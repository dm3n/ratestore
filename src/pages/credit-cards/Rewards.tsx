
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const rewardsCards = [
  {
    id: 1,
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    annualFee: 95,
    welcomeBonus: "60,000 points",
    welcomeRequirement: "Spend $4,000 in first 3 months",
    earnRate: "2x points on travel & dining, 1x elsewhere",
    features: ["Transfer to partners", "25% bonus on travel redemptions", "Trip insurance", "No foreign fees"],
    pros: ["Flexible redemption", "Great transfer partners", "Travel benefits", "Strong welcome bonus"],
    cons: ["Annual fee", "Limited bonus categories", "Requires good credit"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.8,
    reviewCount: 1250,
    estimatedAnnualValue: 420,
    rewardsRate: 2.0,
    otherRate: 1.0
  },
  {
    id: 2,
    name: "Capital One Venture Rewards",
    issuer: "Capital One",
    annualFee: 120,
    welcomeBonus: "50,000 miles",
    welcomeRequirement: "Spend $3,000 in first 3 months",
    earnRate: "2x miles on all purchases",
    features: ["2x miles everywhere", "Transfer to partners", "Travel portal", "No foreign fees"],
    pros: ["Flat 2x rate", "Simple earning", "Good travel benefits", "Easy to use"],
    cons: ["Annual fee", "Limited transfer partners", "No category bonuses"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.5,
    reviewCount: 980,
    estimatedAnnualValue: 380,
    rewardsRate: 2.0,
    otherRate: 2.0
  }
];

export default function Rewards() {
  const [sortBy, setSortBy] = useState("rewards-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    rewards: 800,
    other: 1200
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = rewardsCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "high-rate") return card.rewardsRate >= 2;
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "rewards-rate") return b.rewardsRate - a.rewardsRate;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof rewardsCards[0]) => {
    const rewardsEarnings = (monthlySpending.rewards * 12 * card.rewardsRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(rewardsEarnings + otherEarnings - card.annualFee);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          {/* Hero Header */}
          <div className="relative py-16 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-3xl mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-3xl" />
            <div className="relative max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10">
                <Award className="h-4 w-4 mr-2" />
                Rewards Cards
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-primary">Flexible</span> Rewards<br />
                Endless Possibilities
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Earn valuable points that adapt to your lifestyle. 
                Redeem for travel, cash back, gift cards, and more.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">2x</div>
                  <div className="text-sm font-medium text-muted-foreground">Points Rate</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">60k+</div>
                  <div className="text-sm font-medium text-muted-foreground">Welcome Points</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm font-medium text-muted-foreground">Transfer Partners</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">25%</div>
                  <div className="text-sm font-medium text-muted-foreground">Travel Bonus</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 px-8 py-4 h-auto font-semibold" onClick={() => setActiveTab("calculator")}>
                  <Calculator className="h-5 w-5" />
                  Calculate Rewards
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
                    <SelectItem value="high-rate">High Rewards Rate</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rewards-rate">Rewards Rate</SelectItem>
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
                      <span className="font-medium text-gray-900">Rewards Rate:</span>
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
                <CardTitle>Rewards Calculator</CardTitle>
                <CardDescription>Calculate your potential rewards earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Spending: ${monthlySpending.rewards}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="2000" 
                        value={monthlySpending.rewards} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          rewards: parseInt(e.target.value)
                        }))} 
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Estimated Annual Value</h4>
                    <div className="space-y-2">
                      {rewardsCards.map(card => (
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
                <CardTitle>Compare Rewards Cards</CardTitle>
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
                            const card = rewardsCards.find(c => c.id === cardId);
                            return <th key={cardId} className="text-left p-3">{card?.name}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Annual Fee</td>
                          {selectedCards.map(cardId => {
                            const card = rewardsCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">${card?.annualFee}</td>;
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
              <h2 className="text-2xl font-bold mb-6">Rewards Credit Card Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Maximizing Rewards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Choose cards with bonus categories that match your spending</li>
                    <li>• Transfer points to airline/hotel partners for maximum value</li>
                    <li>• Use travel portals for bonus points</li>
                    <li>• Stack with shopping portals and dining programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Redemption Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Travel:</strong> Often highest value redemption</li>
                    <li>• <strong>Cash Back:</strong> Most flexible option</li>
                    <li>• <strong>Gift Cards:</strong> Sometimes bonus value</li>
                    <li>• <strong>Statement Credits:</strong> Convenient for bills</li>
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
