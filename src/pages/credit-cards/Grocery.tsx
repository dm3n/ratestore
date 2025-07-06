
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const groceryCards = [
  {
    id: 1,
    name: "American Express Gold Card",
    issuer: "American Express",
    annualFee: 250,
    welcomeBonus: "60,000 points",
    welcomeRequirement: "Spend $4,000 in first 6 months",
    earnRate: "4x points at groceries (up to $25K/year), 1x elsewhere",
    features: ["4x points on groceries", "$10 monthly Uber credit", "Excellent transfer partners", "No foreign transaction fees"],
    pros: ["Highest grocery rate", "Monthly credits offset fee", "Great transfer partners", "Strong welcome bonus"],
    cons: ["Annual fee", "Spending cap on groceries", "Limited acceptance"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.6,
    reviewCount: 1580,
    estimatedAnnualValue: 520,
    groceryRate: 4.0,
    otherRate: 1.0,
    groceryCap: 25000
  },
  {
    id: 2,
    name: "Tangerine Money-Back Credit Card",
    issuer: "Tangerine",
    annualFee: 0,
    welcomeBonus: "$50 cash back",
    welcomeRequirement: "Spend $500 in first 3 months",
    earnRate: "2% cash back on groceries (when selected), 0.5% elsewhere",
    features: ["No annual fee", "Choose 2 bonus categories", "Mobile banking", "No minimum redemption"],
    pros: ["No annual fee", "Good grocery rate", "Flexible categories", "No spending caps"],
    cons: ["Limited to 2 categories", "Lower base rate", "Category selection required"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.3,
    reviewCount: 1250,
    estimatedAnnualValue: 180,
    groceryRate: 2.0,
    otherRate: 0.5,
    groceryCap: null
  },
  {
    id: 3,
    name: "PC Financial World Mastercard",
    issuer: "PC Financial",
    annualFee: 0,
    welcomeBonus: "25,000 PC Optimum points",
    welcomeRequirement: "Spend $1,000 in first 3 months",
    earnRate: "3% at Loblaws stores, 1% elsewhere",
    features: ["No annual fee", "PC Optimum rewards", "Grocery focused", "Special offers at PC stores"],
    pros: ["Excellent rate at PC stores", "No annual fee", "Easy redemption", "Wide store network"],
    cons: ["Limited to PC/Loblaws stores", "Low general rate", "Points-based system"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.1,
    reviewCount: 890,
    estimatedAnnualValue: 150,
    groceryRate: 3.0,
    otherRate: 1.0,
    groceryCap: null
  }
];

export default function Grocery() {
  const [sortBy, setSortBy] = useState("grocery-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    groceries: 800,
    other: 1200
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = groceryCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "high-rate") return card.groceryRate >= 3;
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "grocery-rate") return b.groceryRate - a.groceryRate;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof groceryCards[0]) => {
    let groceryEarnings = (monthlySpending.groceries * 12 * card.groceryRate) / 100;
    
    // Apply spending cap if it exists
    if (card.groceryCap && monthlySpending.groceries * 12 > card.groceryCap) {
      groceryEarnings = (card.groceryCap * card.groceryRate) / 100 + 
                      ((monthlySpending.groceries * 12 - card.groceryCap) * card.otherRate) / 100;
    }
    
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(groceryEarnings + otherEarnings - card.annualFee);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Grocery Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your savings on groceries with credit cards that offer enhanced rewards 
            at supermarkets and grocery stores across Canada.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">High Earning Rates</h3>
              <p className="text-gray-600">Up to 4x points or 4% cash back on grocery purchases</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Everyday Savings</h3>
              <p className="text-gray-600">Earn rewards on essential purchases you make anyway</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Store Programs</h3>
              <p className="text-gray-600">Stack with store loyalty programs for maximum savings</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="gap-2" onClick={() => setActiveTab("calculator")}>
              <Calculator className="h-5 w-5" />
              Calculate Savings
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
                    <SelectItem value="high-rate">3%+ Grocery Rate</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grocery-rate">Grocery Rate</SelectItem>
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
                      <span className="font-medium text-gray-900">Grocery Rate:</span>
                      <p className="text-gray-600">{card.groceryRate}x points/% back</p>
                      {card.groceryCap && (
                        <p className="text-xs text-gray-500">Up to ${card.groceryCap.toLocaleString()}/year</p>
                      )}
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
                  Grocery Rewards Calculator
                </CardTitle>
                <CardDescription>
                  Enter your monthly spending to see potential grocery rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Groceries: ${monthlySpending.groceries}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1500" 
                        value={monthlySpending.groceries} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          groceries: parseInt(e.target.value)
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
                        {groceryCards.map(card => (
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
                  Compare Grocery Cards
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
                            const card = groceryCards.find(c => c.id === cardId);
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
                            const card = groceryCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Grocery Rate</td>
                          {selectedCards.map(cardId => {
                            const card = groceryCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.groceryRate}x</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Welcome Bonus</td>
                          {selectedCards.map(cardId => {
                            const card = groceryCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.welcomeBonus}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Your Estimated Annual Value</td>
                          {selectedCards.map(cardId => {
                            const card = groceryCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-green-600 font-semibold">${card ? calculateValue(card) : 0}</td>;
                          })}
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Credit Score Required</td>
                          {selectedCards.map(cardId => {
                            const card = groceryCards.find(c => c.id === cardId);
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Grocery Credit Card Selection Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Maximizing Grocery Rewards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Choose cards with highest grocery rates for your spending</li>
                    <li>• Watch for spending caps on bonus categories</li>
                    <li>• Stack with store loyalty programs and coupons</li>
                    <li>• Consider warehouse stores and online grocery</li>
                    <li>• Use for pharmacy and drugstore purchases too</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What Counts as Groceries</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Supermarkets:</strong> Loblaws, Metro, Sobeys</li>
                    <li>• <strong>Warehouse Stores:</strong> Costco, Walmart grocery</li>
                    <li>• <strong>Online Grocery:</strong> Instacart, store pickup</li>
                    <li>• <strong>Usually Excluded:</strong> Target, convenience stores</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">🛒 Grocery Card Tip</h3>
                <p className="text-green-800">
                  Family of 4 typically spends $800-1200/month on groceries. A 4% grocery card can earn 
                  $400-600/year, easily offsetting a $250 annual fee while providing additional benefits.
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
