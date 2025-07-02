
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const noFeeCards = [
  {
    id: 1,
    name: "Tangerine Money-Back Credit Card",
    issuer: "Tangerine",
    annualFee: 0,
    welcomeBonus: "$50 cash back",
    earnRate: "2% on 2 categories, 0.5% elsewhere",
    features: ["No annual fee", "Flexible earning categories", "Mobile banking"],
    pros: ["No annual fee ever", "Good category rates", "Easy to manage"],
    cons: ["Limited to 2 categories", "Lower base rate"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "PC Financial World Mastercard",
    issuer: "PC Financial",
    annualFee: 0,
    welcomeBonus: "25,000 PC Optimum points",
    earnRate: "3% at Loblaws stores, 1% elsewhere",
    features: ["No annual fee", "PC Optimum rewards", "Grocery focused"],
    pros: ["Excellent grocery rate", "No annual fee", "Easy redemption"],
    cons: ["Limited to PC stores", "Low general rate"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function NoFee() {
  const [sortBy, setSortBy] = useState("earn-rate");
  const [filterBy, setFilterBy] = useState("all");

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
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
              <SelectItem value="welcome-bonus">Welcome Bonus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noFeeCards.map((card) => (
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
      </main>
      
      <Footer />
    </div>
  );
}
