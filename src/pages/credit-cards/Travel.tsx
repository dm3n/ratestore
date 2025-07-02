
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Star, CreditCard, Filter, MapPin, Shield, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const travelCards = [
  {
    id: 1,
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    annualFee: 550,
    welcomeBonus: "80,000 Ultimate Rewards points",
    welcomeRequirement: "$4,000 in 3 months",
    earnRate: "3x travel/dining, 1x elsewhere",
    features: ["$300 travel credit", "Priority Pass", "Trip protection", "Concierge service"],
    pros: ["Premium travel benefits", "High earn rates", "Excellent insurance", "Transfer partners"],
    cons: ["Very high annual fee", "Limited availability in Canada", "High spending requirement"],
    creditScore: "Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.6,
    reviewCount: 2100,
    travelCredits: 300,
    loungeAccess: "Priority Pass Select"
  },
  {
    id: 2,
    name: "American Express Platinum Card",
    issuer: "American Express",
    annualFee: 799,
    welcomeBonus: "80,000 MR points",
    welcomeRequirement: "$5,000 in 3 months",
    earnRate: "5x flights, 5x hotels, 1x elsewhere",
    features: ["Airport lounge access", "$200 travel credit", "Hotel elite status", "Concierge"],
    pros: ["Luxury travel benefits", "Multiple credits", "Elite status perks", "Premium service"],
    cons: ["Highest annual fee", "Limited earning categories", "Acceptance issues"],
    creditScore: "Excellent",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.4,
    reviewCount: 1850,
    travelCredits: 200,
    loungeAccess: "Centurion Lounges + Priority Pass"
  },
  {
    id: 3,
    name: "TD First Class Travel Visa Infinite",
    issuer: "TD Bank",
    annualFee: 120,
    welcomeBonus: "80,000 TD Rewards points",
    welcomeRequirement: "$1,000 in 3 months",
    earnRate: "3x travel, 1x elsewhere",
    features: ["Travel insurance", "Concierge service", "No foreign transaction fees", "Purchase protection"],
    pros: ["Good value for annual fee", "Comprehensive travel insurance", "Wide acceptance", "Canadian-focused"],
    cons: ["Lower earn rate on non-travel", "Limited transfer partners", "Fewer premium perks"],
    creditScore: "Good to Excellent",
    applyUrl: "#",
    isPromoted: true,
    rating: 4.2,
    reviewCount: 1320,
    travelCredits: 0,
    loungeAccess: "None"
  },
  {
    id: 4,
    name: "RBC Avion Visa Infinite Privilege",
    issuer: "RBC",
    annualFee: 399,
    welcomeBonus: "55,000 Avion points",
    welcomeRequirement: "$5,000 in 6 months",
    earnRate: "1.25x everywhere, 2x travel bookings",
    features: ["Airport lounge access", "Travel insurance", "Concierge service", "Priority Pass"],
    pros: ["Premium coverage levels", "Luxury travel benefits", "Canadian availability", "Good insurance"],
    cons: ["High annual fee", "High income requirements", "Lower general earn rate"],
    creditScore: "Excellent",
    applyUrl: "#",
    isPromoted: false,
    rating: 4.1,
    reviewCount: 890,
    travelCredits: 0,
    loungeAccess: "Priority Pass"
  }
];

const travelBenefits = [
  { 
    benefit: "Travel Insurance", 
    description: "Medical emergency, trip cancellation, baggage protection",
    icon: Shield
  },
  { 
    benefit: "Airport Lounge Access", 
    description: "Priority Pass, airline lounges, comfortable waiting areas",
    icon: MapPin
  },
  { 
    benefit: "Travel Credits", 
    description: "Annual statement credits for travel purchases",
    icon: Zap
  }
];

export default function Travel() {
  const [sortBy, setSortBy] = useState("travel-benefits");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const filteredCards = travelCards.filter(card => {
    if (filterBy === "all") return true;
    if (filterBy === "premium") return card.annualFee >= 400;
    if (filterBy === "mid-tier") return card.annualFee >= 100 && card.annualFee < 400;
    if (filterBy === "no-fx-fee") return card.features.some(f => f.includes("foreign"));
    if (filterBy === "promoted") return card.isPromoted;
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === "travel-benefits") return b.travelCredits - a.travelCredits;
    if (sortBy === "annual-fee") return a.annualFee - b.annualFee;
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
            <Plane className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Travel Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock premium travel benefits, earn points on travel purchases, and enjoy 
            comprehensive travel insurance with the best travel credit cards in Canada.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            {travelBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.benefit}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="browse" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Cards</TabsTrigger>
            <TabsTrigger value="compare">Compare Cards</TabsTrigger>
            <TabsTrigger value="guide">Travel Guide</TabsTrigger>
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
                    <SelectItem value="premium">Premium Cards</SelectItem>
                    <SelectItem value="mid-tier">Mid-Tier Cards</SelectItem>
                    <SelectItem value="no-fx-fee">No Foreign Transaction Fee</SelectItem>
                    <SelectItem value="promoted">Featured Cards</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="travel-benefits">Travel Benefits</SelectItem>
                  <SelectItem value="annual-fee">Annual Fee</SelectItem>
                  <SelectItem value="earn-rate">Earn Rate</SelectItem>
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

                    {card.travelCredits > 0 && (
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Travel Credit:</span>
                        <p className="text-green-600 font-semibold">${card.travelCredits}/year</p>
                      </div>
                    )}

                    {card.loungeAccess !== "None" && (
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Lounge Access:</span>
                        <p className="text-blue-600">{card.loungeAccess}</p>
                      </div>
                    )}
                    
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Key Features:</span>
                      <ul className="text-gray-600 mt-1">
                        {card.features.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
              <h3 className="text-xl font-bold mb-4">Compare Travel Cards</h3>
              {selectedCards.length === 0 ? (
                <p className="text-gray-600">Select cards from the browse tab to compare them here.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Feature</th>
                        {selectedCards.map(cardId => {
                          const card = travelCards.find(c => c.id === cardId);
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
                          const card = travelCards.find(c => c.id === cardId);
                          return <td key={cardId} className="p-3">${card?.annualFee}</td>;
                        })}
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Travel Credits</td>
                        {selectedCards.map(cardId => {
                          const card = travelCards.find(c => c.id === cardId);
                          return <td key={cardId} className="p-3">${card?.travelCredits || 0}/year</td>;
                        })}
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Lounge Access</td>
                        {selectedCards.map(cardId => {
                          const card = travelCards.find(c => c.id === cardId);
                          return <td key={cardId} className="p-3">{card?.loungeAccess}</td>;
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Credit Card Benefits Guide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Premium Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Airport lounge access worldwide</li>
                    <li>• Travel insurance and trip protection</li>
                    <li>• No foreign transaction fees</li>
                    <li>• Hotel and airline elite status</li>
                    <li>• Priority boarding and check-in</li>
                    <li>• Concierge services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Maximizing Value</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use travel credits and benefits regularly</li>
                    <li>• Book travel through card portals for bonuses</li>
                    <li>• Transfer points to airline/hotel partners</li>
                    <li>• Take advantage of upgrade certificates</li>
                    <li>• Use lounge access for comfortable travel</li>
                    <li>• Leverage travel insurance for peace of mind</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">✈️ Travel Tip</h3>
                <p className="text-blue-800">
                  Calculate the value of travel benefits against the annual fee. If you travel frequently and use 
                  lounge access, travel credits, and insurance benefits, premium travel cards can provide excellent value.
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
