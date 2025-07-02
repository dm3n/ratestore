
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const rewardsCards = [
  {
    id: 1,
    name: "American Express Cobalt Card",
    issuer: "American Express",
    annualFee: 155,
    welcomeBonus: "50,000 MR points",
    welcomeRequirement: "$3,000 in 3 months",
    earnRate: "5x on food/drinks, 2x gas/transit, 1x elsewhere",
    rewardsProgram: "Membership Rewards",
    features: ["Flexible redemptions", "Transfer partners", "Monthly fee option"],
    pros: ["Highest food earn rate", "Flexible point transfers", "No foreign transaction fees"],
    cons: ["Limited acceptance", "Monthly fee structure", "American Express"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    annualFee: 95,
    welcomeBonus: "60,000 Ultimate Rewards points",
    welcomeRequirement: "$4,000 in 3 months",
    earnRate: "2x travel/dining, 1x elsewhere",
    rewardsProgram: "Ultimate Rewards",
    features: ["Travel portal", "Transfer partners", "Trip protection"],
    pros: ["Great travel portal value", "Strong transfer partners", "Good travel benefits"],
    cons: ["Limited availability in Canada", "High spending requirement"],
    applyUrl: "#",
    isPromoted: false
  },
  {
    id: 3,
    name: "RBC Avion Visa Infinite",
    issuer: "RBC",
    annualFee: 120,
    welcomeBonus: "35,000 Avion points",
    welcomeRequirement: "$1,000 in 3 months",
    earnRate: "1.25x everywhere, 2x travel booked through RBC",
    rewardsProgram: "Avion Rewards",
    features: ["Travel bookings", "Point transfers", "Insurance coverage"],
    pros: ["Flexible redemptions", "Good travel insurance", "Wide acceptance"],
    cons: ["Lower general earn rate", "Limited transfer partners"],
    applyUrl: "#",
    isPromoted: true
  }
];

export default function Rewards() {
  const [sortBy, setSortBy] = useState("earn-rate");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Rewards Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your earning potential with flexible rewards credit cards. 
            Compare points programs and find the card that offers the best value for your spending.
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
                <SelectItem value="transferable">Transferable Points</SelectItem>
                <SelectItem value="travel">Travel Focused</SelectItem>
                <SelectItem value="flexible">Flexible Redemption</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rewardsCards.map((card) => (
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
                  <span className="font-medium text-gray-900">Rewards Program:</span>
                  <p className="text-gray-600">{card.rewardsProgram}</p>
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

        {/* Guide Section */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rewards Credit Card Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Types of Rewards Programs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Transferable Points:</strong> Transfer to airline/hotel partners</li>
                <li>• <strong>Fixed Value:</strong> Redeem at a set rate for travel/cash</li>
                <li>• <strong>Merchant Specific:</strong> Earn towards specific retailers</li>
                <li>• <strong>Flexible:</strong> Multiple redemption options available</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Maximizing Value</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Focus spending on bonus categories</li>
                <li>• Transfer points to partners for higher value</li>
                <li>• Take advantage of limited-time promotions</li>
                <li>• Calculate redemption value before using points</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
