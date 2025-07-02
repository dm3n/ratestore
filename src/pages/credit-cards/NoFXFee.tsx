
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const noFXFeeCards = [
  {
    id: 1,
    name: "Rogers World Elite Mastercard",
    issuer: "Rogers Bank",
    annualFee: 0,
    welcomeBonus: "$100 cash back",
    earnRate: "1.75% everywhere, 4% on Rogers services",
    foreignFee: "No foreign transaction fees",
    features: ["No FX fees", "Flat rate rewards", "Rogers discounts"],
    pros: ["No foreign transaction fees", "High flat rate", "No annual fee"],
    cons: ["High income requirement", "Limited special categories"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Scotiabank Passport Visa Infinite",
    issuer: "Scotiabank",
    annualFee: 139,
    welcomeBonus: "40,000 Scene+ points",
    earnRate: "2x points on all purchases",
    foreignFee: "No foreign transaction fees",
    features: ["No FX fees", "Airport lounge access", "Travel insurance"],
    pros: ["Comprehensive travel benefits", "No foreign fees", "Good earn rate"],
    cons: ["High annual fee", "High income requirement"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function NoFXFee() {
  const [sortBy, setSortBy] = useState("annual-fee");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">No Foreign Exchange Fee Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save money on international purchases and travel with credit cards that don't charge 
            foreign exchange fees. Perfect for frequent travelers and online shoppers.
          </p>
        </div>

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
                <SelectItem value="travel">Travel Benefits</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
              <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noFXFeeCards.map((card) => (
            <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {card.isPromoted && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Featured</Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Foreign Transaction Fee:</span>
                  <p className="text-primary font-semibold">$0</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Annual Fee:</span>
                    <p className="text-gray-600">${card.annualFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Earn Rate:</span>
                    <p className="text-gray-600">{card.earnRate}</p>
                  </div>
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

        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why No FX Fee Cards Matter</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Save on Every Transaction</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Avoid 2.5% foreign exchange fees</li>
                <li>• Save on online purchases from foreign sites</li>
                <li>• No fees when traveling internationally</li>
                <li>• Perfect for frequent cross-border shoppers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Best Uses</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• International travel expenses</li>
                <li>• Online shopping from US/international sites</li>
                <li>• Subscription services in foreign currencies</li>
                <li>• Business expenses in multiple currencies</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
