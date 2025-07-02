
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const lowInterestCards = [
  {
    id: 1,
    name: "BMO Preferred Rate Mastercard",
    issuer: "BMO",
    annualFee: 20,
    interestRate: "12.99%",
    purchaseRate: "12.99%",
    cashAdvanceRate: "22.99%",
    features: ["Low ongoing rate", "Fraud protection", "Online banking integration"],
    pros: ["Very low interest rate", "Good for carrying balances"],
    cons: ["Low rewards earning", "Annual fee"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "RBC Low Rate Option Visa",
    issuer: "RBC",
    annualFee: 25,
    interestRate: "13.99%",
    purchaseRate: "13.99%",
    cashAdvanceRate: "22.99%",
    features: ["Low interest rate", "No annual fee first year", "RBC Rewards"],
    pros: ["Competitive low rate", "First year free"],
    cons: ["Limited rewards", "Higher cash advance rate"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function LowInterest() {
  const [sortBy, setSortBy] = useState("interest-rate");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingDown className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Low Interest Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save money on interest charges with low-rate credit cards. Perfect for those 
            who carry balances and want to minimize interest costs.
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
                <SelectItem value="under-15">Under 15% APR</SelectItem>
                <SelectItem value="no-fee">No Annual Fee</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="interest-rate">Interest Rate</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lowInterestCards.map((card) => (
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
                  <span className="font-medium text-gray-900">Purchase APR:</span>
                  <p className="text-primary font-semibold text-lg">{card.interestRate}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Annual Fee:</span>
                    <p className="text-gray-600">${card.annualFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Cash Advance:</span>
                    <p className="text-gray-600">{card.cashAdvanceRate}</p>
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
