import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Star, CreditCard, Filter, Calculator, TrendingUp, Target } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cashBackCards = [{
  id: 1,
  name: "Tangerine Money-Back Credit Card",
  issuer: "Tangerine",
  annualFee: 0,
  welcomeBonus: "$50 cash back",
  welcomeRequirement: "$500 in 3 months",
  cashBackRate: "2% on 2 categories, 0.5% elsewhere",
  categories: ["Groceries", "Gas", "Restaurants", "Entertainment", "Hotels", "Public Transit"],
  maxCategories: 2,
  features: ["No annual fee", "Flexible categories", "Mobile app", "No minimum redemption"],
  pros: ["No annual fee", "Good earn rate", "Easy to use", "Flexible category selection"],
  cons: ["Limited to 2 categories", "Lower base rate", "Category selection required"],
  creditScore: "Fair to Good",
  applyUrl: "#",
  isPromoted: true,
  rating: 4.3,
  reviewCount: 1250,
  estimatedAnnualCashback: 180,
  groceryRate: 2.0,
  gasRate: 2.0,
  restaurantRate: 2.0,
  otherRate: 0.5
}, {
  id: 2,
  name: "Simplii Financial Cash Back Visa",
  issuer: "Simplii Financial",
  annualFee: 0,
  welcomeBonus: "$100 cash back",
  welcomeRequirement: "$500 in 4 months",
  cashBackRate: "4% restaurants, 1.5% gas/grocery, 0.5% elsewhere",
  categories: ["Restaurants", "Gas", "Groceries"],
  maxCategories: 3,
  features: ["No annual fee", "High restaurant rate", "No spending caps", "Online banking"],
  pros: ["Excellent restaurant rate", "No annual fee", "No limits", "Simple redemption"],
  cons: ["Lower rate on other categories", "Limited welcome bonus", "Basic benefits"],
  creditScore: "Good to Excellent",
  applyUrl: "#",
  isPromoted: false,
  rating: 4.2,
  reviewCount: 1100,
  estimatedAnnualCashback: 220,
  groceryRate: 1.5,
  gasRate: 1.5,
  restaurantRate: 4.0,
  otherRate: 0.5
}, {
  id: 3,
  name: "Rogers World Elite Mastercard",
  issuer: "Rogers Bank",
  annualFee: 0,
  welcomeBonus: "$100 cash back",
  welcomeRequirement: "$2,000 in 3 months",
  cashBackRate: "1.75% everywhere, 4% on Rogers services",
  categories: ["Everything", "Rogers Services"],
  maxCategories: 2,
  features: ["No annual fee", "Flat rate", "Rogers discounts", "World Elite benefits"],
  pros: ["High flat rate", "No categories to track", "Rogers customer perks", "Premium benefits"],
  cons: ["High income requirement", "Limited special categories", "Rogers-focused"],
  creditScore: "Excellent",
  applyUrl: "#",
  isPromoted: true,
  rating: 4.0,
  reviewCount: 750,
  estimatedAnnualCashback: 280,
  groceryRate: 1.75,
  gasRate: 1.75,
  restaurantRate: 1.75,
  otherRate: 1.75
}];

export default function CashBack() {
  const [sortBy, setSortBy] = useState("cash-back-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    groceries: 500,
    gas: 200,
    restaurants: 300,
    other: 1000
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = cashBackCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "high-rate") return card.cashBackRate.includes("4%") || card.cashBackRate.includes("3%");
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "cash-back-rate") return b.estimatedAnnualCashback - a.estimatedAnnualCashback;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "welcome-bonus") return b.reviewCount - a.reviewCount;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateCashback = (card: typeof cashBackCards[0]) => {
    const groceryEarnings = (monthlySpending.groceries * 12 * card.groceryRate) / 100;
    const gasEarnings = (monthlySpending.gas * 12 * card.gasRate) / 100;
    const restaurantEarnings = (monthlySpending.restaurants * 12 * card.restaurantRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(groceryEarnings + gasEarnings + restaurantEarnings + otherEarnings - card.annualFee);
  };

  return <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Cash Back Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn real cash back on every purchase. Compare the best cash back credit cards 
            in Canada and start earning money on your everyday spending.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Calculator className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Real Cash Rewards</h3>
              <p className="text-gray-600">Earn actual cash back that you can use however you want</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Simple & Straightforward</h3>
              <p className="text-gray-600">No complicated point systems or redemption restrictions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Everyday Value</h3>
              <p className="text-gray-600">Earn on all your regular purchases and monthly bills</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="gap-2" onClick={() => setActiveTab("calculator")}>
              <Calculator className="h-5 w-5" />
              Calculate Cash Back
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => setActiveTab("compare")}>
              <Target className="h-5 w-5" />
              Compare Rates
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
                    <SelectItem value="high-rate">High Cash Back Rate</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash-back-rate">Cash Back Potential</SelectItem>
                  <SelectItem value="annual-fee">Annual Fee</SelectItem>
                  <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedCards.map(card => <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg leading-tight">{card.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
                      </div>
                      <button onClick={() => toggleCardSelection(card.id)} className={`p-2 rounded-full shrink-0 ${selectedCards.includes(card.id) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                        <CreditCard className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(card.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
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
                      <span className="font-medium text-gray-900">Cash Back Rate:</span>
                      <p className="text-gray-600">{card.cashBackRate}</p>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Estimated Annual Cash Back:</span>
                      <p className="text-green-600 font-semibold">${calculateCashback(card)}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{
                      width: `${Math.min(calculateCashback(card) / 300 * 100, 100)}%`
                    }}></div>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Bonus Categories:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {card.categories.slice(0, 3).map((category, index) => <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {category}
                          </span>)}
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
                </Card>)}
            </div>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Cash Back Calculator
                </CardTitle>
                <CardDescription>
                  Enter your monthly spending to see potential cash back earnings
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
                        max="1000" 
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
                        Monthly Gas: ${monthlySpending.gas}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="500" 
                        value={monthlySpending.gas} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          gas: parseInt(e.target.value)
                        }))} 
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Restaurants: ${monthlySpending.restaurants}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="800" 
                        value={monthlySpending.restaurants} 
                        onChange={e => setMonthlySpending(prev => ({
                          ...prev,
                          restaurants: parseInt(e.target.value)
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
                      <h4 className="font-semibold text-green-900 mb-3">Estimated Annual Cash Back</h4>
                      <div className="space-y-2">
                        {cashBackCards.map(card => (
                          <div key={card.id} className="flex justify-between items-center py-1">
                            <span className="text-sm text-green-700 truncate pr-2">{card.name}</span>
                            <span className="font-semibold text-green-900">${calculateCashback(card)}</span>
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
                  Compare Cash Back Cards
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
                            const card = cashBackCards.find(c => c.id === cardId);
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
                            const card = cashBackCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Cash Back Rate</td>
                          {selectedCards.map(cardId => {
                            const card = cashBackCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-sm">{card?.cashBackRate}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Welcome Bonus</td>
                          {selectedCards.map(cardId => {
                            const card = cashBackCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.welcomeBonus}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Your Estimated Annual Cash Back</td>
                          {selectedCards.map(cardId => {
                            const card = cashBackCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-green-600 font-semibold">${card ? calculateCashback(card) : 0}</td>;
                          })}
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Credit Score Required</td>
                          {selectedCards.map(cardId => {
                            const card = cashBackCards.find(c => c.id === cardId);
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cash Back Card Selection Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Maximizing Cash Back</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Choose cards that match your spending patterns</li>
                    <li>• Pay your balance in full each month</li>
                    <li>• Take advantage of rotating bonus categories</li>
                    <li>• Consider multiple cards for different categories</li>
                    <li>• Set up automatic payments to avoid fees</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Card Types</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Flat Rate:</strong> Same rate on all purchases</li>
                    <li>• <strong>Tiered:</strong> Different rates for different categories</li>
                    <li>• <strong>Rotating:</strong> Bonus categories change quarterly</li>
                    <li>• <strong>Hybrid:</strong> Combination of flat rate and bonuses</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">💰 Cash Back Tip</h3>
                <p className="text-green-800">
                  The best cash back card is the one that aligns with your spending habits. A 2% card on categories you 
                  spend heavily on will earn more than a 5% card on categories you rarely use.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>;
}
