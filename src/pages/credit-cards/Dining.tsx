
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const diningCards = [
  {
    id: 1,
    name: "American Express Gold Card",
    issuer: "American Express",
    annualFee: 250,
    welcomeBonus: "60,000 points",
    welcomeRequirement: "Spend $4,000 in first 6 months",
    earnRate: "4x points at restaurants, 1x everything else",
    features: ["$10 monthly dining credit", "$10 monthly Uber credit", "Excellent transfer partners", "No foreign transaction fees"],
    pros: ["Highest dining rate", "Valuable monthly credits", "Great transfer partners", "Strong welcome bonus"],
    cons: ["Annual fee", "Limited acceptance", "Credits require activation"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.6,
    reviewCount: 1580,
    estimatedAnnualValue: 480,
    diningRate: 4.0,
    otherRate: 1.0
  },
  {
    id: 2,
    name: "Simplii Financial Cash Back Visa",
    issuer: "Simplii Financial",
    annualFee: 0,
    welcomeBonus: "$100 cash back",
    welcomeRequirement: "Spend $500 in 4 months",
    earnRate: "4% cash back on restaurants, 0.5% elsewhere",
    features: ["No annual fee", "High restaurant rate", "No spending caps", "Online banking integration"],
    pros: ["Excellent restaurant rate", "No annual fee", "No category limits", "Simple cash back"],
    cons: ["Lower rate on other categories", "Basic benefits", "No premium perks"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.2,
    reviewCount: 1100,
    estimatedAnnualValue: 240,
    diningRate: 4.0,
    otherRate: 0.5
  },
  {
    id: 3,
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    annualFee: 95,
    welcomeBonus: "60,000 points",
    welcomeRequirement: "Spend $4,000 in first 3 months",
    earnRate: "2x points on dining & travel, 1x elsewhere",
    features: ["25% bonus on travel redemptions", "Transfer to partners", "Trip insurance", "No foreign transaction fees"],
    pros: ["Good dining rate", "Flexible redemptions", "Travel benefits", "Strong welcome bonus"],
    cons: ["Annual fee", "Lower dining rate than specialists", "Requires good credit"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.8,
    reviewCount: 1250,
    estimatedAnnualValue: 320,
    diningRate: 2.0,
    otherRate: 1.0
  }
];

export default function Dining() {
  const [sortBy, setSortBy] = useState("dining-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    dining: 600,
    other: 1400
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = diningCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "high-rate") return card.diningRate >= 4;
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "dining-rate") return b.diningRate - a.diningRate;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof diningCards[0]) => {
    const diningEarnings = (monthlySpending.dining * 12 * card.diningRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(diningEarnings + otherEarnings - card.annualFee);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Utensils className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Dining Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn maximum rewards on your restaurant spending with credit cards that offer 
            enhanced rates and valuable dining benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">High Earning Rates</h3>
              <p className="text-gray-600">Up to 4x points or 4% cash back on restaurant purchases</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Dining Credits</h3>
              <p className="text-gray-600">Monthly statement credits for dining and food delivery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Restaurant Benefits</h3>
              <p className="text-gray-600">Access to exclusive dining experiences and reservations</p>
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
                    <SelectItem value="high-rate">4%+ Dining Rate</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dining-rate">Dining Rate</SelectItem>
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
                      <span className="font-medium text-gray-900">Dining Rate:</span>
                      <p className="text-gray-600">{card.diningRate}x points/% back</p>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Estimated Annual Value:</span>
                      <p className="text-green-600 font-semibold">${calculateValue(card)}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{
                          width: `${Math.min(calculateValue(card) / 400 * 100, 100)}%`
                        }}></div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t space-y-2">
                      <Button className="w-full" asChild>
                        <a href={card.applyUrl} target="_blank" rel="noopener noreferrer">
                          Apply Now
                        </a>
                      </Button>
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
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Dining Rewards Calculator
                </CardTitle>
                <CardDescription>
                  Enter your monthly spending to see potential dining rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Dining: ${monthlySpending.dining}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1500" 
                        value={monthlySpending.dining} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          dining: parseInt(e.target.value)
                        }))} 
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Other: ${monthlySpending.other}
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
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Total Monthly Spending</h4>
                      <p className="text-2xl font-bold text-blue-900">
                        ${Object.values(monthlySpending).reduce((sum, val) => sum + val, 0)}
                      </p>
                      <p className="text-sm text-blue-700">
                        ${Object.values(monthlySpending).reduce((sum, val) => sum + val, 0) * 12} annually
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">Estimated Annual Value</h4>
                      <div className="space-y-2">
                        {diningCards.map(card => (
                          <div key={card.id} className="flex justify-between items-center py-1">
                            <span className="text-sm text-green-700 truncate pr-2">{card.name}</span>
                            <span className="font-semibold text-green-900">${calculateValue(card)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compare" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Compare Dining Cards
                </CardTitle>
                <CardDescription>
                  Select up to 3 cards from the browse tab to compare them side by side
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedCards.length === 0 ? (
                  <div className="text-center py-8">
                    <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
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
                          <th className="text-left p-3 font-medium">Feature</th>
                          {selectedCards.map(cardId => {
                            const card = diningCards.find(c => c.id === cardId);
                            return (
                              <th key={cardId} className="text-left p-3 min-w-48 font-medium">
                                {card?.name}
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Annual Fee</td>
                          {selectedCards.map(cardId => {
                            const card = diningCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Dining Rate</td>
                          {selectedCards.map(cardId => {
                            const card = diningCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.diningRate}x</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Welcome Bonus</td>
                          {selectedCards.map(cardId => {
                            const card = diningCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.welcomeBonus}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Your Estimated Annual Value</td>
                          {selectedCards.map(cardId => {
                            const card = diningCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-green-600 font-semibold">${card ? calculateValue(card) : 0}</td>;
                          })}
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Credit Score Required</td>
                          {selectedCards.map(cardId => {
                            const card = diningCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.creditScore}</td>;
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dining Credit Card Selection Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Maximizing Dining Rewards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Choose cards with highest dining rates for your spending</li>
                    <li>• Take advantage of monthly dining credits</li>
                    <li>• Use for food delivery and takeout too</li>
                    <li>• Consider cards with grocery bonuses for home cooking</li>
                    <li>• Stack with restaurant loyalty programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What Counts as Dining</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Restaurants:</strong> Fast food to fine dining</li>
                    <li>• <strong>Delivery:</strong> DoorDash, Uber Eats, etc.</li>
                    <li>• <strong>Bars & Cafes:</strong> Coffee shops and bars</li>
                    <li>• <strong>Food Trucks:</strong> Mobile food vendors</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-3">🍽️ Dining Card Tip</h3>
                <p className="text-orange-800">
                  If you spend over $500/month on dining, a card with dining bonuses will likely earn more 
                  than a flat-rate card, even with an annual fee. Calculate your specific scenario to be sure.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}
