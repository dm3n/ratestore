
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const aeroplanCards = [
  {
    id: 1,
    name: "TD Aeroplan Visa Infinite Card",
    issuer: "TD Bank",
    annualFee: 139,
    welcomeBonus: "50,000 Aeroplan points",
    welcomeRequirement: "$3,000 in 3 months",
    pointsPerDollar: "1.5x on Air Canada purchases, 1x elsewhere",
    features: ["Priority check-in", "First bag free", "Maple Leaf Lounge access"],
    pros: ["High earn rate on Air Canada", "Excellent travel benefits"],
    cons: ["High annual fee", "Limited earning categories"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "CIBC Aeroplan Visa Card",
    issuer: "CIBC",
    annualFee: 120,
    welcomeBonus: "35,000 Aeroplan points",
    welcomeRequirement: "$1,500 in 3 months",
    pointsPerDollar: "1.25x on Air Canada, 1x elsewhere",
    features: ["First bag free", "Priority boarding"],
    pros: ["Lower spending requirement", "Good welcome bonus"],
    cons: ["Lower earn rate", "Fewer premium benefits"],
    applyUrl: "#",
    isPromoted: false
  },
  {
    id: 3,
    name: "American Express Aeroplan Card",
    issuer: "American Express",
    annualFee: 499,
    welcomeBonus: "75,000 Aeroplan points",
    welcomeRequirement: "$6,000 in 6 months",
    pointsPerDollar: "2x on Air Canada, 1.25x elsewhere",
    features: ["Buddy pass", "Maple Leaf Lounge access", "Priority Pass"],
    pros: ["Highest earn rate", "Premium travel benefits"],
    cons: ["Very high annual fee", "High spending requirement"],
    applyUrl: "#",
    isPromoted: true
  }
];

export default function Aeroplan() {
  const [sortBy, setSortBy] = useState("welcome-bonus");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Aeroplan Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn Aeroplan points on every purchase and unlock exclusive Air Canada benefits. 
            Compare the best Aeroplan credit cards in Canada.
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
              <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aeroplanCards.map((card) => (
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
                  <p className="text-gray-600">{card.pointsPerDollar}</p>
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

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose an Aeroplan Credit Card?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Earn on Every Purchase</h3>
              <p className="text-gray-600">Earn Aeroplan points on all your everyday spending</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Elite Benefits</h3>
              <p className="text-gray-600">Enjoy priority boarding, lounge access, and more</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Redemptions</h3>
              <p className="text-gray-600">Use points for flights, hotels, and merchandise</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
