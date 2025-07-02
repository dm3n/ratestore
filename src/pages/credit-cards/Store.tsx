
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Store as StoreIcon, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const storeCards = [
  {
    id: 1,
    name: "Canadian Tire Triangle Mastercard",
    issuer: "Canadian Tire",
    annualFee: 0,
    welcomeBonus: "$100 Canadian Tire Money",
    earnRate: "5¢/$ at CT stores, 1¢/$ elsewhere",
    store: "Canadian Tire",
    features: ["No annual fee", "CT Money rewards", "Special financing offers"],
    pros: ["High earn rate at CT", "No annual fee", "Special promotions"],
    cons: ["Limited to CT ecosystem", "Low general rate"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Costco Capital One Mastercard",
    issuer: "Capital One",
    annualFee: 120,
    welcomeBonus: "$20 Costco Cash Card",
    earnRate: "3% restaurants, 2% gas, 1% Costco/elsewhere",
    store: "Costco",
    features: ["Costco membership included", "Cash back rewards", "Extended warranty"],
    pros: ["Membership value", "Good gas/restaurant rates", "Costco cash back"],
    cons: ["Requires Costco membership", "Annual fee"],
    applyUrl: "#",
    isPromoted: false
  },
  {
    id: 3,
    name: "The Home Depot Consumer Credit Card",
    issuer: "Citibank",
    annualFee: 0,
    welcomeBonus: "Special financing offers",
    earnRate: "Special financing options",
    store: "Home Depot",
    features: ["No annual fee", "Special financing", "Exclusive offers"],
    pros: ["Project financing options", "No annual fee", "Home improvement focused"],
    cons: ["Limited to Home Depot", "High regular APR"],
    applyUrl: "#",
    isPromoted: true
  }
];

export default function Store() {
  const [sortBy, setSortBy] = useState("store");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <StoreIcon className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Store Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize savings at your favorite retailers with store-specific credit cards. 
            Earn exclusive rewards, discounts, and special financing offers.
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
                <SelectItem value="financing">Special Financing</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="store">Store</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {storeCards.map((card) => (
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
                    <CardDescription className="text-sm text-gray-600">{card.store}</CardDescription>
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

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Store Credit Card Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <StoreIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Exclusive Rewards</h3>
              <p className="text-gray-600">Earn higher rewards rates at your favorite stores</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Special Offers</h3>
              <p className="text-gray-600">Access exclusive sales, discounts, and promotions</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Financing Options</h3>
              <p className="text-gray-600">Special financing terms for large purchases</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
