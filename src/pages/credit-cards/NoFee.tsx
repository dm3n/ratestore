
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Star, CreditCard, Filter, TrendingUp, Users, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const noFeeCards = [
  {
    id: 1,
    name: "Tangerine Money-Back Credit Card",
    issuer: "Tangerine",
    annualFee: 0,
    welcomeBonus: "$50 cash back",
    welcomeRequirement: "$500 in 3 months",
    earnRate: "2% on 2 categories, 0.5% elsewhere",
    features: ["No annual fee", "Flexible earning categories", "Mobile banking", "Fraud protection"],
    pros: ["No annual fee ever", "Good category rates", "Easy to manage", "No foreign exchange fees"],
    cons: ["Limited to 2 categories", "Lower base rate", "Category selection required"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.3,
    reviewCount: 1250
  },
  {
    id: 2,
    name: "PC Financial World Mastercard",
    issuer: "PC Financial",
    annualFee: 0,
    welcomeBonus: "25,000 PC Optimum points",
    welcomeRequirement: "$1,000 in 3 months",
    earnRate: "3% at Loblaws stores, 1% elsewhere",
    features: ["No annual fee", "PC Optimum rewards", "Grocery focused", "Special offers"],
    pros: ["Excellent grocery rate", "No annual fee", "Easy redemption", "Wide store network"],
    cons: ["Limited to PC stores", "Low general rate", "Points-based system"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.1,
    reviewCount: 890
  },
  {
    id: 3,
    name: "Simplii Financial Cash Back Visa",
    issuer: "Simplii Financial",
    annualFee: 0,
    welcomeBonus: "$100 cash back",
    welcomeRequirement: "$500 in 4 months",
    earnRate: "4% restaurants, 1.5% gas/grocery, 0.5% elsewhere",
    features: ["No annual fee", "High restaurant rate", "No spending caps", "Online banking"],
    pros: ["Excellent restaurant rewards", "No annual fee", "No category limits", "Simple redemption"],
    cons: ["Lower rate on other categories", "Limited welcome bonus", "Basic benefits"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.2,
    reviewCount: 1100
  },
  {
    id: 4,
    name: "Rogers World Elite Mastercard",
    issuer: "Rogers Bank",
    annualFee: 0,
    welcomeBonus: "$100 cash back",
    welcomeRequirement: "$2,000 in 3 months",
    earnRate: "1.75% everywhere, 4% on Rogers services",
    features: ["No annual fee", "Flat rate rewards", "Rogers discounts", "World Elite benefits"],
    pros: ["High flat rate", "No categories to track", "Rogers customer perks", "Premium benefits"],
    cons: ["High income requirement", "Limited special categories", "Rogers-focused"],
    creditScore: "Excellent",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.0,
    reviewCount: 750
  }
];

const compareFeatures = [
  { feature: "Annual Fee", importance: "High" },
  { feature: "Welcome Bonus", importance: "Medium" },
  { feature: "Earn Rate", importance: "High" },
  { feature: "Redemption Options", importance: "Medium" },
  { feature: "Additional Benefits", importance: "Low" }
];

export default function NoFee() {
  const [sortBy, setSortBy] = useState("earn-rate");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const filteredCards = noFeeCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "cash-back") return card.earnRate.includes("cash back") || card.earnRate.includes("%");
    if (filterBy === "points") return card.earnRate.includes("points");
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "earn-rate") return b.rating - a.rating;
    if (sortBy === "welcome-bonus") return b.reviewCount - a.reviewCount;
    return 0;
  });

  const toggleCardSelection = (cardId: number) => {
    setSelectedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId].slice(0, 3)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">No Annual Fee Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy credit card benefits without paying annual fees. These cards offer 
            rewards, protections, and convenience at no yearly cost.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Save Money</h3>
              <p className="text-gray-600">No annual fees means more money in your pocket</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Easy Approval</h3>
              <p className="text-gray-600">Generally easier to qualify for than premium cards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Still Earn Rewards</h3>
              <p className="text-gray-600">Get cash back and points without the fees</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="browse" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Cards</TabsTrigger>
            <TabsTrigger value="compare">Compare Cards</TabsTrigger>
            <TabsTrigger value="guide">Selection Guide</TabsTrigger>
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
                    <SelectItem value="points">Points</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="earn-rate">Popularity</SelectItem>
                  <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedCards.map((card) => (
                <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  {card.isPromoted && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive">Featured</Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
                      </div>
                      <button
                        onClick={() => toggleCardSelection(card.id)}
                        className={`p-2 rounded-full ${
                          selectedCards.includes(card.id) 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <CreditCard className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(card.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {card.rating} ({card.reviewCount} reviews)
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Annual Fee:</span>
                      <p className="text-primary font-semibold text-lg">$0</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Welcome Bonus:</span>
                        <p className="text-gray-600">{card.welcomeBonus}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Earn Rate:</span>
                        <p className="text-gray-600">{card.earnRate}</p>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Credit Score:</span>
                      <p className="text-gray-600">{card.creditScore}</p>
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
          </TabsContent>

          <TabsContent value="compare" className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Compare Selected Cards</h3>
              {selectedCards.length === 0 ? (
                <p className="text-gray-600">Select cards from the browse tab to compare them here.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Feature</th>
                        {selectedCards.map(cardId => {
                          const card = noFeeCards.find(c => c.id === cardId);
                          return (
                            <th key={cardId} className="text-left p-3 min-w-48">
                              {card?.name}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {compareFeatures.map(({ feature, importance }) => (
                        <tr key={feature} className="border-b">
                          <td className="p-3 font-medium">{feature}</td>
                          {selectedCards.map(cardId => {
                            const card = noFeeCards.find(c => c.id === cardId);
                            return (
                              <td key={cardId} className="p-3">
                                {feature === "Annual Fee" && `$${card?.annualFee}`}
                                {feature === "Welcome Bonus" && card?.welcomeBonus}
                                {feature === "Earn Rate" && card?.earnRate}
                                {feature === "Redemption Options" && "Cash back"}
                                {feature === "Additional Benefits" && card?.features.length + " benefits"}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">No Annual Fee Card Selection Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Best For You If:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• You're new to credit cards</li>
                    <li>• You want to avoid annual fees</li>
                    <li>• You have moderate spending habits</li>
                    <li>• You prefer simple reward structures</li>
                    <li>• You want a backup card with no cost</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Considerations:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lower reward rates than premium cards</li>
                    <li>• Fewer premium benefits and perks</li>
                    <li>• May have spending caps on bonus categories</li>
                    <li>• Often easier approval requirements</li>
                    <li>• Good for building credit history</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">💡 Expert Tip</h3>
                <p className="text-blue-800">
                  No annual fee cards are perfect for beginners or as secondary cards. Even if you get a premium card later, 
                  keeping a no-fee card open helps maintain your credit history length and provides a backup option.
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
