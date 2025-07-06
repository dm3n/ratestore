
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Store, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const storeCards = [
  {
    id: 1,
    name: "Canadian Tire Triangle World Elite Mastercard",
    issuer: "Canadian Tire",
    annualFee: 120,
    welcomeBonus: "$100 CT Money",
    welcomeRequirement: "Spend $1,000 in first 3 months",
    earnRate: "5x CT Money at CT stores, 1x everywhere else",
    features: ["5x CT Money at Canadian Tire", "CT Money rewards", "Roadside assistance", "Travel insurance"],
    pros: ["High rate at CT stores", "Good for CT shoppers", "Roadside assistance", "Travel benefits"],
    cons: ["Annual fee", "Limited to CT network", "CT Money redemption only"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.2,
    reviewCount: 850,
    estimatedAnnualValue: 280,
    storeRate: 5.0,
    otherRate: 1.0
  },
  {
    id: 2,
    name: "PC Financial World Elite Mastercard",
    issuer: "PC Financial",
    annualFee: 0,
    welcomeBonus: "20,000 PC Points",
    welcomeRequirement: "Spend $1,000 in first 3 months",
    earnRate: "25 PC Points per $1 at Loblaws stores, 10 points elsewhere",
    features: ["No annual fee", "High rate at Loblaws", "PC Points rewards", "Mobile app integration"],
    pros: ["No annual fee", "Works at all Loblaws stores", "Good earning rate", "Easy redemption"],
    cons: ["Limited to PC network", "Points-based system", "Basic benefits"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.0,
    reviewCount: 650,
    estimatedAnnualValue: 180,
    storeRate: 2.5,
    otherRate: 1.0
  }
];

export default function Store() {
  const [sortBy, setSortBy] = useState("store-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    store: 400,
    other: 1600
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = storeCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "high-rate") return card.storeRate >= 3;
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "store-rate") return b.storeRate - a.storeRate;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof storeCards[0]) => {
    const storeEarnings = (monthlySpending.store * 12 * card.storeRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(storeEarnings + otherEarnings - card.annualFee);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Store className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Store Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize rewards at your favorite retailers with store-specific credit cards offering 
            enhanced earning rates and exclusive benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Store Rewards</h3>
              <p className="text-gray-600">Up to 5x points or cash back at partner stores</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h3>
              <p className="text-gray-600">Special discounts and member-only promotions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Easy Redemption</h3>
              <p className="text-gray-600">Use rewards directly at checkout or online</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="gap-2" onClick={() => setActiveTab("calculator")}>
              <Calculator className="h-5 w-5" />
              Calculate Rewards
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => setActiveTab("compare")}>
              <Target className="h-5 w-5" />
              Compare Cards
            </Button>
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
            {/* Browse content similar to other pages */}
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
                    <SelectItem value="high-rate">High Store Rate</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="store-rate">Store Rate</SelectItem>
                  <SelectItem value="annual-fee">Annual Fee</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedCards.map(card => (
                <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Card content similar to other pages */}
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
                      <span className="font-medium text-gray-900">Store Rate:</span>
                      <p className="text-gray-600">{card.storeRate}x points/% back</p>
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

          {/* Calculator, Compare, and Guide tabs similar to other pages */}
          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Store Rewards Calculator</CardTitle>
                <CardDescription>Calculate your potential store rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Store Spending: ${monthlySpending.store}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1000" 
                        value={monthlySpending.store} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          store: parseInt(e.target.value)
                        }))} 
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Estimated Annual Value</h4>
                    <div className="space-y-2">
                      {storeCards.map(card => (
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
                <CardTitle>Compare Store Cards</CardTitle>
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
                            const card = storeCards.find(c => c.id === cardId);
                            return <th key={cardId} className="text-left p-3">{card?.name}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Annual Fee</td>
                          {selectedCards.map(cardId => {
                            const card = storeCards.find(c => c.id === cardId);
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
              <h2 className="text-2xl font-bold mb-6">Store Credit Card Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Maximizing Store Rewards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use store cards only at partner retailers</li>
                    <li>• Stack with store loyalty programs</li>
                    <li>• Watch for special promotional periods</li>
                    <li>• Redeem rewards regularly to avoid expiration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Store Card Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>High Earning Rates:</strong> Up to 5x at partner stores</li>
                    <li>• <strong>Exclusive Offers:</strong> Member-only sales and discounts</li>
                    <li>• <strong>Easy Redemption:</strong> Use at checkout or online</li>
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
