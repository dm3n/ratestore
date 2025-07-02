
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const studentCards = [
  {
    id: 1,
    name: "BMO SPC CashBack Mastercard",
    issuer: "BMO",
    annualFee: 0,
    welcomeBonus: "5% cash back for first 3 months",
    earnRate: "1% cash back on all purchases",
    studentBenefits: "SPC discounts, no income requirement",
    features: ["No annual fee", "SPC membership included", "Build credit history"],
    pros: ["No annual fee", "Good for students", "SPC discounts"],
    cons: ["Basic rewards rate", "Limited benefits"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Scotia Scene Visa Card",
    issuer: "Scotiabank",
    annualFee: 0,
    welcomeBonus: "2,500 Scene+ points",
    earnRate: "1x Scene+ points per $1 spent",
    studentBenefits: "Student-friendly approval, movie rewards",
    features: ["No annual fee", "Scene+ rewards", "Movie theatre benefits"],
    pros: ["Great for movie lovers", "No annual fee", "Easy approval"],
    cons: ["Limited earning potential", "Scene+ focused rewards"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function Student() {
  const [sortBy, setSortBy] = useState("benefits");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Student Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start building your credit history as a student with credit cards designed for 
            your needs. No income requirements and special student benefits included.
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
                <SelectItem value="rewards">Points/Rewards</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="benefits">Student Benefits</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="earn-rate">Earn Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studentCards.map((card) => (
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
                  <span className="font-medium text-gray-900">Student Benefits:</span>
                  <p className="text-primary font-semibold">{card.studentBenefits}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Credit Card Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Getting Started</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Apply while enrolled in school</li>
                <li>• Start with one card to build history</li>
                <li>• No income required for most student cards</li>
                <li>• Consider getting a student banking package</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Building Good Habits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pay your full balance every month</li>
                <li>• Keep spending well below your limit</li>
                <li>• Set up automatic payments</li>
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
