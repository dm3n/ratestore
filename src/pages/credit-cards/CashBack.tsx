
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cashBackCards = [
  {
    id: 1,
    name: "Tangerine Money-Back Credit Card",
    issuer: "Tangerine",
    annualFee: 0,
    welcomeBonus: "$50 cash back",
    welcomeRequirement: "$500 in 3 months",
    cashBackRate: "2% on 2 categories, 0.5% elsewhere",
    features: ["No annual fee", "Flexible categories", "Mobile app"],
    pros: ["No annual fee", "Good earn rate", "Easy to use"],
    cons: ["Limited to 2 categories", "Lower base rate"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Simplii Financial Cash Back Visa",
    issuer: "Simplii Financial",
    annualFee: 0,
    welcomeBonus: "$100 cash back",
    welcomeRequirement: "$500 in 4 months",
    cashBackRate: "4% restaurants, 1.5% gas/grocery, 0.5% elsewhere",
    features: ["No annual fee", "High restaurant rate", "No spending caps"],
    pros: ["Excellent restaurant rate", "No annual fee", "No limits"],
    cons: ["Lower rate on other categories", "Limited welcome bonus"],
    applyUrl: "#",
    isPromoted: false
  },
  {
    id: 3,
    name: "Rogers World Elite Mastercard",
    issuer: "Rogers Bank",
    annualFee: 0,
    welcomeBonus: "$100 cash back",
    welcomeRequirement: "$2,000 in 3 months",
    cashBackRate: "1.75% everywhere, 4% on Rogers services",
    features: ["No annual fee", "Flat rate", "Rogers discounts"],
    pros: ["High flat rate", "No categories to track", "Great for Rogers customers"],
    cons: ["High spending requirement", "Limited special categories"],
    applyUrl: "#",
    isPromoted: true
  }
];

export default function CashBack() {
  const [sortBy, setSortBy] = useState("cash-back-rate");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Cash Back Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn real cash back on every purchase. Compare the best cash back credit cards 
            in Canada and start earning money on your everyday spending.
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
              <SelectItem value="cash-back-rate">Cash Back Rate</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cashBackCards.map((card) => (
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
                  <span className="font-medium text-gray-900">Cash Back Rate:</span>
                  <p className="text-gray-600">{card.cashBackRate}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Cash Back Credit Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Real Cash Rewards</h3>
              <p className="text-gray-600">Earn actual cash back that you can use however you want</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Simple & Straightforward</h3>
              <p className="text-gray-600">No complicated point systems or redemption restrictions</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Everyday Value</h3>
              <p className="text-gray-600">Earn on all your regular purchases and monthly bills</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
