
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const instantApprovalCards = [
  {
    id: 1,
    name: "Capital One QuicksilverOne",
    issuer: "Capital One",
    annualFee: 39,
    welcomeBonus: "$50 cash back",
    earnRate: "1.5% cash back on everything",
    approvalTime: "Instant decision online",
    features: ["Fast approval", "Flat cash back rate", "No foreign transaction fees"],
    pros: ["Quick approval process", "Simple rewards structure"],
    cons: ["Annual fee", "Average earn rate"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Discover it Cash Back",
    issuer: "Discover",
    annualFee: 0,
    welcomeBonus: "Cashback Match for first year",
    earnRate: "5% rotating categories, 1% everything else",
    approvalTime: "Instant approval available",
    features: ["No annual fee", "Rotating bonus categories", "Free credit score"],
    pros: ["No annual fee", "High rotating category rates"],
    cons: ["Limited acceptance in Canada", "Category activation required"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function InstantApproval() {
  const [sortBy, setSortBy] = useState("approval-time");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Instant Approval Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get approved for a credit card in minutes, not days. These cards offer quick 
            online approval decisions so you can start using your card right away.
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
              <SelectItem value="approval-time">Approval Time</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {instantApprovalCards.map((card) => (
            <Card key={card.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {card.isPromoted && (
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Featured</Badge>
                </div>
              )}
              
              <CardHeader className="pr-20">
                <CardTitle className="text-lg pr-2">{card.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{card.issuer}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Approval Time:</span>
                  <p className="text-primary font-semibold">{card.approvalTime}</p>
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
      </main>
      
      <Footer />
    </div>
  );
}
