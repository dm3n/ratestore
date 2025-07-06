
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Star, CreditCard, Filter, Calculator, TrendingUp, Target, Gift } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const gasCards = [
  {
    id: 1,
    name: "Canadian Tire Triangle World Elite Mastercard",
    issuer: "Canadian Tire",
    annualFee: 120,
    welcomeBonus: "$100 CT Money",
    welcomeRequirement: "Spend $1,000 in first 3 months",
    earnRate: "4¢/L gas discount + 1% CT Money on gas, 3% on CT purchases",
    features: ["4¢/L gas discount", "CT Money rewards", "Roadside assistance", "Travel insurance"],
    pros: ["High gas discount", "Good for CT shoppers", "Roadside assistance", "Travel benefits"],
    cons: ["Annual fee", "Limited to CT/Triangle gas", "CT Money redemption"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.2,
    reviewCount: 850,
    estimatedAnnualValue: 280,
    gasRate: 4.0,
    otherRate: 1.0
  },
  {
    id: 2,
    name: "Petro-Canada SuperPass Visa",
    issuer: "Petro-Canada",
    annualFee: 79,
    welcomeBonus: "2,500 Petro-Points",
    welcomeRequirement: "Spend $500 in first 3 months",
    earnRate: "2¢/L discount + 20 Petro-Points per litre",
    features: ["2¢/L gas discount", "Petro-Points rewards", "Car wash discounts", "Convenience store bonuses"],
    pros: ["Good gas discount", "Wide Petro network", "Additional car benefits", "Convenience bonuses"],
    cons: ["Annual fee", "Limited to Petro stations", "Points-based system"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.0,
    reviewCount: 650,
    estimatedAnnualValue: 180,
    gasRate: 3.0,
    otherRate: 0.5
  },
  {
    id: 3,
    name: "Simplii Financial Cash Back Visa",
    issuer: "Simplii Financial",
    annualFee: 0,
    welcomeBonus: "$100 cash back",
    welcomeRequirement: "Spend $500 in first 4 months",
    earnRate: "1.5% cash back on gas, 4% on restaurants, 0.5% elsewhere",
    features: ["No annual fee", "Good gas rate", "Excellent restaurant rate", "No spending caps"],
    pros: ["No annual fee", "Works at all gas stations", "Simple cash back", "High restaurant rate"],
    cons: ["Lower gas rate than specialists", "Basic benefits", "No gas-specific perks"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.2,
    reviewCount: 1100,
    estimatedAnnualValue: 120,
    gasRate: 1.5,
    otherRate: 0.5
  }
];

export default function Gas() {
  const [sortBy, setSortBy] = useState("gas-value");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [monthlySpending, setMonthlySpending] = useState({
    gas: 300,
    other: 1700
  });
  const [activeTab, setActiveTab] = useState("browse");

  const filteredCards = gasCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "no-fee") return card.annualFee === 0;
    if (filterBy === "high-discount") return card.gasRate >= 3;
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "gas-value") return b.estimatedAnnualValue - a.estimatedAnnualValue;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId].slice(0, 3));
  };

  const calculateValue = (card: typeof gasCards[0]) => {
    // Assume gas at $1.50/L and convert percentage/discount to dollar value
    const gasEarnings = (monthlySpending.gas * 12 * card.gasRate) / 100;
    const otherEarnings = (monthlySpending.other * 12 * card.otherRate) / 100;
    
    return Math.round(gasEarnings + otherEarnings - card.annualFee);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Gas Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save money at the pump with credit cards offering enhanced rewards, discounts, 
            and benefits on gas purchases across Canada.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gas Discounts</h3>
              <p className="text-gray-600">Save cents per litre at participating gas stations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Bonus Rewards</h3>
              <p className="text-gray-600">Earn extra points or cash back on fuel purchases</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Car Benefits</h3>
              <p className="text-gray-600">Roadside assistance and automotive services</p>
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
                    <SelectItem value="high-discount">High Gas Discount</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gas-value">Gas Value</SelectItem>
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
                      <span className="font-medium text-gray-900">Gas Benefits:</span>
                      <p className="text-gray-600">{card.earnRate}</p>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Estimated Annual Value:</span>
                      <p className="text-green-600 font-semibold">${calculateValue(card)}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{
                          width: `${Math.min(calculateValue(card) / 300 * 100, 100)}%`
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
                  Gas Savings Calculator
                </CardTitle>
                <CardDescription>
                  Enter your monthly spending to see potential gas savings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Gas: ${monthlySpending.gas}
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="800" 
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
                        {gasCards.map(card => (
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
                  Compare Gas Cards
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
                            const card = gasCards.find(c => c.id === cardId);
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
                            const card = gasCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Gas Benefits</td>
                          {selectedCards.map(cardId => {
                            const card = gasCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-sm">{card?.earnRate}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Welcome Bonus</td>
                          {selectedCards.map(cardId => {
                            const card = gasCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3">{card?.welcomeBonus}</td>;
                          })}
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Your Estimated Annual Value</td>
                          {selectedCards.map(cardId => {
                            const card = gasCards.find(c => c.id === cardId);
                            return <td key={cardId} className="p-3 text-green-600 font-semibold">${card ? calculateValue(card) : 0}</td>;
                          })}
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Credit Score Required</td>
                          {selectedCards.map(cardId => {
                            const card = gasCards.find(c => c.id === cardId);
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gas Credit Card Selection Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Maximizing Gas Savings</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use gas cards at participating stations for best discounts</li>
                    <li>• Stack card rewards with loyalty programs</li>
                    <li>• Consider convenience store purchases for bonus rates</li>
                    <li>• Take advantage of promotional periods</li>
                    <li>• Use roadside assistance benefits when needed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Types of Gas Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Per-Litre Discounts:</strong> Direct savings at the pump</li>
                    <li>• <strong>Bonus Points:</strong> Rewards you can redeem later</li>
                    <li>• <strong>Cash Back:</strong> Percentage back on gas purchases</li>
                    <li>• <strong>Combined Benefits:</strong> Discounts plus rewards</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-3">⛽ Gas Card Tip</h3>
                <p className="text-red-800">
                  If you spend $200+/month on gas, a gas-specific card usually beats general cash back cards. 
                  Consider your driving patterns and nearby gas station options when choosing.
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
