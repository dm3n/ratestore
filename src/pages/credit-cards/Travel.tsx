
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, Star, CreditCard, Filter } from "lucide-react";
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
    features: ["$300 travel credit", "Priority Pass", "Trip protection"],
    pros: ["Premium travel benefits", "High earn rates", "Excellent insurance"],
    cons: ["Very high annual fee", "Limited availability in Canada"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "American Express Platinum Card",
    issuer: "American Express",
    annualFee: 799,
    welcomeBonus: "80,000 MR points",
    welcomeRequirement: "$5,000 in 3 months",
    earnRate: "5x flights, 5x hotels, 1x elsewhere",
    features: ["Airport lounge access", "$200 travel credit", "Hotel elite status"],
    pros: ["Luxury travel benefits", "Multiple credits", "Elite status perks"],
    cons: ["Highest annual fee", "Limited earning categories"],
    applyUrl: "#",
    isPromoted: false
  },
  {
    id: 3,
    name: "TD First Class Travel Visa Infinite",
    issuer: "TD Bank",
    annualFee: 120,
    welcomeBonus: "80,000 TD Rewards points",
    welcomeRequirement: "$1,000 in 3 months",
    earnRate: "3x travel, 1x elsewhere",
    features: ["Travel insurance", "Concierge service", "No foreign transaction fees"],
    pros: ["Good value for annual fee", "Comprehensive travel insurance", "Wide acceptance"],
    cons: ["Lower earn rate on non-travel", "Limited transfer partners"],
    applyUrl: "#",
    isPromoted: true
  }
];

export default function Travel() {
  const [sortBy, setSortBy] = useState("travel-benefits");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Travel Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock premium travel benefits, earn points on travel purchases, and enjoy 
            comprehensive travel insurance with the best travel credit cards in Canada.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {travelCards.map((card) => (
            <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {card.isPromoted && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Featured</Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{card.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
                  </div>
                  <CreditCard className="h-6 w-6 text-primary" />
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

        {/* Travel Benefits Guide */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Credit Card Benefits</h2>
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
