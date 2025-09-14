
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const travelCards = [
  {
    id: 1,
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    annualFee: 95,
    welcomeBonus: "60,000 points",
    welcomeRequirement: "Spend $4,000 in first 3 months",
    earnRate: "2x points on travel & dining, 1x on everything else",
    features: ["25% more value when you redeem for travel", "Transfer to airline partners", "Trip insurance", "No foreign transaction fees"],
    pros: ["Excellent transfer partners", "Strong welcome bonus", "Good travel protections", "Flexible redemption"],
    cons: ["Annual fee", "Limited bonus categories", "Requires good credit"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.8,
    reviewCount: 1250,
    estimatedAnnualValue: 750,
    travelRate: 2.0,
    diningRate: 2.0,
    otherRate: 1.0
  },
  {
    id: 2,
    name: "Capital One Venture X",
    issuer: "Capital One",
    annualFee: 395,
    welcomeBonus: "75,000 miles",
    welcomeRequirement: "Spend $4,000 in first 3 months",
    earnRate: "2x miles on all purchases",
    features: ["$300 annual travel credit", "Priority Pass lounge access", "10,000 anniversary miles", "No foreign transaction fees"],
    pros: ["Flat 2x rate everywhere", "Excellent travel benefits", "Easy to use miles", "Premium perks"],
    cons: ["High annual fee", "Limited transfer partners", "Requires excellent credit"],
    creditScore: "Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.7,
    reviewCount: 980,
    estimatedAnnualValue: 650,
    travelRate: 2.0,
    diningRate: 2.0,
    otherRate: 2.0
  },
  {
    id: 3,
    name: "American Express Gold Card",
    issuer: "American Express",
    annualFee: 250,
    welcomeBonus: "60,000 points",
    welcomeRequirement: "Spend $4,000 in first 6 months",
    earnRate: "4x points at restaurants, 3x on flights, 1x everything else",
    features: ["$10 monthly dining credit", "$10 monthly Uber credit", "Excellent transfer partners", "Travel insurance"],
    pros: ["High dining rate", "Valuable monthly credits", "Great transfer partners", "Strong welcome bonus"],
    cons: ["Annual fee", "Limited acceptance", "Credits require activation"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.6,
    reviewCount: 1580,
    estimatedAnnualValue: 600,
    travelRate: 3.0,
    diningRate: 4.0,
    otherRate: 1.0
  }
];

export default function Travel() {
  const [sortBy, setSortBy] = useState("value");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    travel: 800,
    dining: 400,
    other: 1200
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = travelCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "premium") return card.annualFee > 200;
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "value") return b.estimatedAnnualValue - a.estimatedAnnualValue;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof travelCards[0]) => {
    const travelEarnings = (monthlySpending.travel * 12 * card.travelRate) / 100;
    const diningEarnings = (monthlySpending.dining * 12 * card.diningRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round((travelEarnings + diningEarnings + otherEarnings) * 1.25 - card.annualFee);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          {/* Hero Header */}
          <div className="relative py-16 px-6 bg-gradient-to-br from-purple-50 via-background to-indigo-50 rounded-3xl mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10 rounded-3xl" />
            <div className="relative max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10">
                <Plane className="h-4 w-4 mr-2" />
                Travel Cards
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-primary">Explore</span> The World<br />
                In Premium Style
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Unlock premium travel benefits, earn valuable points and miles, 
                and access exclusive airport lounges worldwide.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">3x</div>
                  <div className="text-sm font-medium text-muted-foreground">Travel Points</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">75k+</div>
                  <div className="text-sm font-medium text-muted-foreground">Welcome Miles</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Lounge</div>
                  <div className="text-sm font-medium text-muted-foreground">Access</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary">No FX</div>
                  <div className="text-sm font-medium text-muted-foreground">Fees</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 px-8 py-4 h-auto font-semibold" onClick={() => setActiveTab("calculator")}>
                  <Calculator className="h-5 w-5" />
                  Calculate Value
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
                    <SelectItem value="premium">Premium Cards</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="value">Travel Value</SelectItem>
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
                      <span className="font-medium text-gray-900">Earn Rate:</span>
                      <p className="text-gray-600">{card.earnRate}</p>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Estimated Annual Value:</span>
                      <p className="text-green-600 font-semibold">${calculateValue(card)}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{
                          width: `${Math.min(calculateValue(card) / 800 * 100, 100)}%`
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
                  Travel Value Calculator
                </CardTitle>
                <CardDescription>
                  Enter your monthly spending to see potential travel rewards value
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Travel: ${monthlySpending.travel}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="2000" 
                        value={monthlySpending.travel} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          travel: parseInt(e.target.value)
                        }))} 
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Dining: ${monthlySpending.dining}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1000" 
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
                        {travelCards.map(card => (
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
                  Compare Travel Cards
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
                            const card = travelCards.find(c => c.id === cardId);
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
                            const card = travelCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Earn Rate</td>
                          {selectedCards.map(cardId => {
                            const card = travelCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-sm">{card?.earnRate}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Welcome Bonus</td>
                          {selectedCards.map(cardId => {
                            const card = travelCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.welcomeBonus}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Your Estimated Annual Value</td>
                          {selectedCards.map(cardId => {
                            const card = travelCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-green-600 font-semibold">${card ? calculateValue(card) : 0}</td>;
                          })}
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Credit Score Required</td>
                          {selectedCards.map(cardId => {
                            const card = travelCards.find(c => c.id === cardId);
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Credit Card Selection Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Maximizing Travel Rewards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use cards that earn bonus points on travel and dining</li>
                    <li>• Take advantage of transfer partners for maximum value</li>
                    <li>• Redeem points for travel to get better value</li>
                    <li>• Use travel benefits like lounge access and insurance</li>
                    <li>• Pay annual fees only if benefits exceed the cost</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Travel Benefits to Look For</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Airport Lounges:</strong> Priority Pass or airline lounges</li>
                    <li>• <strong>Travel Insurance:</strong> Trip cancellation and medical</li>
                    <li>• <strong>No Foreign Fees:</strong> Save on international purchases</li>
                    <li>• <strong>Transfer Partners:</strong> Airlines and hotel programs</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">✈️ Travel Card Tip</h3>
                <p className="text-blue-800">
                  The best travel card depends on your travel patterns. Frequent travelers benefit from premium cards 
                  with high annual fees, while occasional travelers might prefer no-fee cards with good travel rates.
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
