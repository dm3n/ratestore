
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const groceryCards = [
  {
    id: 1,
    name: "PC Financial World Mastercard",
    issuer: "PC Financial",
    annualFee: 0,
    welcomeBonus: "25,000 PC Optimum points",
    welcomeRequirement: "$1,000 in 3 months",
    earnRate: "3% at Loblaws stores, 1% elsewhere",
    features: ["No annual fee", "PC Optimum integration", "Mobile app"],
    pros: ["Excellent grocery rate", "No annual fee", "Easy point redemption"],
    cons: ["Limited to Loblaws family", "Low general rate"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Scotiabank Gold American Express",
    issuer: "Scotiabank",
    annualFee: 120,
    welcomeBonus: "40,000 Scene+ points",
    welcomeRequirement: "$1,000 in 3 months",
    earnRate: "5x points on grocery, dining, streaming",
    features: ["High earn rate", "Scene+ rewards", "Purchase protection"],
    pros: ["Very high grocery rate", "Multiple bonus categories", "Good welcome bonus"],
    cons: ["Annual fee", "Limited acceptance vs Visa/MC"],
    applyUrl: "#",
    isPromoted: false
  },
  {
    id: 3,
    name: "CIBC Dividend Visa Infinite",
    issuer: "CIBC",
    annualFee: 99,
    welcomeBonus: "10% cash back on grocery for first 4 months",
    welcomeRequirement: "No minimum spend",
    earnRate: "4% grocery, 2% gas/transit, 1% elsewhere",
    features: ["High grocery rate", "Cash back", "No spending caps"],
    pros: ["Excellent grocery cash back", "No limits", "Good gas rate"],
    cons: ["Annual fee", "Promotional period limited"],
    applyUrl: "#",
    isPromoted: true
  }
];

export default function Grocery() {
  const [sortBy, setSortBy] = useState("grocery-rate");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Grocery Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your savings on groceries with credit cards that offer the highest 
            rewards rates on grocery store purchases across Canada.
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
                <SelectItem value="cash-back">Cash Back</SelectItem>
                <SelectItem value="points">Points Cards</SelectItem>
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
              <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groceryCards.map((card) => (
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

        {/* Tips Section */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Grocery Credit Card Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Maximize Your Savings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Stack credit card rewards with store loyalty programs</li>
                <li>• Use cards with no spending caps for large grocery bills</li>
                <li>• Consider cards that earn on pharmacy purchases too</li>
                <li>• Time large purchases with welcome bonus periods</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Things to Consider</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Check if your preferred stores are included</li>
                <li>• Look for quarterly spending caps on bonus rates</li>
                <li>• Compare cash back vs points based on your preferences</li>
                <li>• Factor in annual fees vs rewards earned</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
