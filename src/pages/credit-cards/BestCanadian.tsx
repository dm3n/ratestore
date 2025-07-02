
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Star, CreditCard, Filter, TrendingUp, MapPin, DollarSign } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const bestCards = [
  {
    id: 1,
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    category: "Travel",
    annualFee: 95,
    welcomeBonus: "60,000 Ultimate Rewards points",
    welcomeRequirement: "$4,000 in 3 months",
    earnRate: "2x travel/dining, 1x elsewhere",
    features: ["Transfer partners", "Travel protection", "No foreign transaction fees", "Purchase protection"],
    pros: ["Excellent transfer partners", "Strong travel benefits", "Flexible redemption", "Good customer service"],
    cons: ["Annual fee", "Limited earning categories", "US card (limited Canadian availability)"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isEditorChoice: true,
    rating: 4.5,
    reviewCount: 3200,
    bestFor: "Travel enthusiasts with good spending"
  },
  {
    id: 2,
    name: "Tangerine Money-Back Credit Card",
    issuer: "Tangerine",
    category: "Cash Back",
    annualFee: 0,
    welcomeBonus: "$50 cash back",
    welcomeRequirement: "$500 in 3 months",
    earnRate: "2% on 2 categories, 0.5% elsewhere",
    features: ["No annual fee", "Flexible categories", "No foreign exchange fees", "Mobile banking"],
    pros: ["No annual fee ever", "Good category rates", "Easy management", "Wide acceptance"],
    cons: ["Limited to 2 categories", "Lower base rate", "Category selection required"],
    creditScore: "Fair to Good",
    applyUrl: "#",
    isEditorChoice: true,
    rating: 4.3,
    reviewCount: 2800,
    bestFor: "Everyday spending without fees"
  },
  {
    id: 3,
    name: "Scotiabank Gold American Express Card",
    issuer: "Scotiabank",
    category: "Rewards",
    annualFee: 120,
    welcomeBonus: "30,000 Scene+ points",
    welcomeRequirement: "$1,000 in 3 months",
    earnRate: "5x gas/grocery/dining/transit, 1x elsewhere",
    features: ["Scene+ rewards", "No foreign transaction fees", "Purchase protection", "Extended warranty"],
    pros: ["High category rates", "Flexible redemption", "Good insurance", "Canadian-focused"],
    cons: ["Annual fee", "Limited bonus categories", "Lower general rate"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isEditorChoice: false,
    rating: 4.2,
    reviewCount: 1950,
    bestFor: "High spending on bonus categories"
  },
  {
    id: 4,
    name: "RBC Avion Visa Infinite",
    issuer: "RBC",
    category: "Travel",
    annualFee: 120,
    welcomeBonus: "35,000 Avion points",
    welcomeRequirement: "$3,000 in 6 months",
    earnRate: "1.25x everywhere, 2x travel bookings",
    features: ["Travel insurance", "Concierge service", "Purchase protection", "Extended warranty"],
    pros: ["Comprehensive travel coverage", "Good insurance", "Established rewards program", "Wide acceptance"],
    cons: ["Lower earn rates", "High income requirements", "Limited transfer options"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isEditorChoice: false,
    rating: 4.0,
    reviewCount: 1650,
    bestFor: "Traditional banking with travel benefits"
  },
  {
    id: 5,
    name: "American Express Cobalt Card",
    issuer: "American Express",
    category: "Rewards",
    annualFee: 155,
    welcomeBonus: "30,000 MR points",
    welcomeRequirement: "$500/month for 10 months",
    earnRate: "5x groceries/restaurants/gas, 2x travel/transit, 1x elsewhere",
    features: ["Monthly fee structure", "High earning rates", "Transfer partners", "Mobile pay bonuses"],
    pros: ["Excellent earning potential", "Flexible redemption", "No foreign transaction fees", "Modern features"],
    cons: ["Monthly fee model", "Limited acceptance", "Complex earning structure"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isEditorChoice: true,
    rating: 4.4,
    reviewCount: 2100,
    bestFor: "High earners seeking maximum rewards"
  },
  {
    id: 6,
    name: "CIBC Dividend Visa Infinite",
    issuer: "CIBC",
    category: "Cash Back",
    annualFee: 99,
    welcomeBonus: "10% cash back for 4 months",
    welcomeRequirement: "Up to $2,000 spending",
    earnRate: "4% gas/grocery, 2% Tim Hortons/recurring bills, 1% elsewhere",
    features: ["High grocery rate", "Tim Hortons bonus", "Purchase protection", "Extended warranty"],
    pros: ["Excellent grocery rewards", "Canadian-focused categories", "Simple cash back", "Good welcome offer"],
    cons: ["Annual fee", "Spending caps apply", "Limited high-rate categories"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isEditorChoice: false,
    rating: 4.1,
    reviewCount: 1750,
    bestFor: "Canadian families with grocery spending"
  }
];

const categories = [
  { name: "All Cards", value: "all" },
  { name: "Travel", value: "travel" },
  { name: "Cash Back", value: "cash-back" },
  { name: "Rewards", value: "rewards" },
  { name: "No Annual Fee", value: "no-fee" }
];

export default function BestCanadian() {
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const filteredCards = bestCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "travel") return card.category === "Travel";
    if (filterBy === "cash-back") return card.category === "Cash Back";
    if (filterBy === "rewards") return card.category === "Rewards";
    if (filterBy === "no-fee") return card.annualFee === 0;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
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

  const editorChoiceCards = bestCards.filter(card => card.isEditorChoice);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Best Canadian Credit Cards 2025</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert team has evaluated hundreds of credit cards to bring you the top picks 
            for Canadians. Find the perfect card for your lifestyle and spending habits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Reviewed</h3>
              <p className="text-gray-600">Thoroughly tested and evaluated by our credit card experts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Canadian Focused</h3>
              <p className="text-gray-600">Cards that are actually available and optimized for Canadians</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Maximum Value</h3>
              <p className="text-gray-600">Cards that provide the best value for different spending patterns</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="top-picks" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="top-picks">Top Picks</TabsTrigger>
            <TabsTrigger value="browse-all">Browse All</TabsTrigger>
            <TabsTrigger value="compare">Compare Cards</TabsTrigger>
          </TabsList>

          <TabsContent value="top-picks" className="space-y-8">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500" />
                Editor's Choice Cards
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {editorChoiceCards.map((card, index) => (
                  <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive" className="bg-yellow-500">
                        #{index + 1} Pick
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg pr-16">{card.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
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
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Annual Fee:</span>
                          <p className="text-gray-600">${card.annualFee}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Category:</span>
                          <p className="text-gray-600">{card.category}</p>
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Welcome Bonus:</span>
                        <p className="text-gray-600">{card.welcomeBonus}</p>
                      </div>

                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Best For:</span>
                        <p className="text-blue-600 font-medium">{card.bestFor}</p>
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
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">How We Choose the Best Cards</h3>
              <div className="grid md:grid-cols-2 gap-6 text-blue-800">
                <div>
                  <h4 className="font-semibold mb-2">Evaluation Criteria:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Welcome bonus value and requirements</li>
                    <li>• Earning rates and bonus categories</li>
                    <li>• Annual fees vs. benefits ratio</li>
                    <li>• Redemption flexibility and options</li>
                    <li>• Insurance coverage and protections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Canadian Considerations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Availability to Canadian residents</li>
                    <li>• Foreign transaction fee policies</li>
                    <li>• Local merchant acceptance</li>
                    <li>• Customer service accessibility</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="browse-all" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="annual-fee">Annual Fee</SelectItem>
                  <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedCards.map((card) => (
                <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">                  
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
                        {card.rating}
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
                        <span className="font-medium text-gray-900">Category:</span>
                        <p className="text-gray-600">{card.category}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Earn Rate:</span>
                      <p className="text-gray-600">{card.earnRate}</p>
                    </div>

                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Best For:</span>
                      <p className="text-blue-600 font-medium">{card.bestFor}</p>
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
                          const card = bestCards.find(c => c.id === cardId);
                          return (
                            <th key={cardId} className="text-left p-3 min-w-48">
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
                          const card = bestCards.find(c => c.id === cardId);
                          return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                        })}
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Welcome Bonus</td>
                        {selectedCards.map(cardId => {
                          const card = bestCards.find(c => c.id === cardId);
                          return <td key={cardId} className="p-3">{card?.welcomeBonus}</td>;
                        })}
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Earn Rate</td>
                        {selectedCards.map(cardId => {
                          const card = bestCards.find(c => c.id === cardId);
                          return <td key={cardId} className="p-3">{card?.earnRate}</td>;
                        })}
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Best For</td>
                        {selectedCards.map(cardId => {
                          const card = bestCards.find(c => c.id === cardId);
                          return <td key={cardId} className="p-3">{card?.bestFor}</td>;
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
}
