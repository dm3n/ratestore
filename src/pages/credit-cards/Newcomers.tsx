
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const newcomerCards = [
  {
    id: 1,
    name: "RBC Newcomers Visa",
    issuer: "RBC",
    annualFee: 0,
    welcomeBonus: "No foreign exchange fee for first year",
    earnRate: "RBC Rewards points on purchases",
    creditHistoryRequired: "No Canadian credit history required",
    features: ["No Canadian credit history needed", "Banking package available", "Newcomer support"],
    pros: ["Designed for newcomers", "No annual fee", "Banking relationship helps"],
    cons: ["Limited rewards", "Lower credit limits initially"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "BMO Newcomer CashBack Mastercard",
    issuer: "BMO",
    annualFee: 0,
    welcomeBonus: "1% cash back for first 3 months",
    earnRate: "1% cash back on all purchases",
    creditHistoryRequired: "No Canadian credit history required",
    features: ["Cash back rewards", "No credit history needed", "BMO banking integration"],
    pros: ["Simple cash back structure", "No annual fee", "Good for building credit"],
    cons: ["Lower cash back rate", "Basic benefits"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function Newcomers() {
  const [sortBy, setSortBy] = useState("requirements");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Newcomer Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your Canadian credit history with credit cards designed specifically for 
            newcomers to Canada. No Canadian credit history required.
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
                <SelectItem value="cash-back">Cash Back</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="requirements">Requirements</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newcomerCards.map((card) => (
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
                  <span className="font-medium text-gray-900">Credit History:</span>
                  <p className="text-primary font-semibold">{card.creditHistoryRequired}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Newcomer Credit Building Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Getting Started</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Open a Canadian bank account first</li>
                <li>• Consider a newcomer banking package</li>
                <li>• Start with one credit card initially</li>
                <li>• Make small purchases and pay in full</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Building Credit</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Always pay on time and in full</li>
                <li>• Keep credit utilization low (under 30%)</li>
                <li>• Don't close your first credit card</li>
                <li>• Monitor your credit score regularly</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
