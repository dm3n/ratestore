
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const securedCards = [
  {
    id: 1,
    name: "Capital One Secured Mastercard",
    issuer: "Capital One",
    annualFee: 0,
    securityDeposit: "$75 - $1,000",
    earnRate: "1.5% cash back on all purchases",
    graduationPath: "Automatic review for upgrade",
    features: ["Build credit history", "Earn cash back", "No annual fee"],
    pros: ["No annual fee", "Earns rewards", "Path to unsecured card"],
    cons: ["Requires security deposit", "Lower credit limits"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "Home Trust Secured Visa",
    issuer: "Home Trust",
    annualFee: 59,
    securityDeposit: "$500 - $10,000",
    earnRate: "No rewards program",
    graduationPath: "Manual review after 12 months",
    features: ["Build credit", "Reports to credit bureaus", "Fraud protection"],
    pros: ["Available for poor credit", "Reports to all bureaus"],
    cons: ["Annual fee", "No rewards", "High deposit requirement"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function Secured() {
  const [sortBy, setSortBy] = useState("annual-fee");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Secured Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build or rebuild your credit history with secured credit cards. These cards require 
            a security deposit but help establish credit for future financial opportunities.
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
                <SelectItem value="rewards">Earn Rewards</SelectItem>
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
              <SelectItem value="deposit">Security Deposit</SelectItem>
              <SelectItem value="graduation">Graduation Path</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securedCards.map((card) => (
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
                  <span className="font-medium text-gray-900">Security Deposit:</span>
                  <p className="text-primary font-semibold">{card.securityDeposit}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Annual Fee:</span>
                    <p className="text-gray-600">${card.annualFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Graduation:</span>
                    <p className="text-gray-600">{card.graduationPath}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Secured Credit Card Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">How They Work</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide a refundable security deposit</li>
                <li>• Deposit typically equals your credit limit</li>
                <li>• Use like any other credit card</li>
                <li>• Payment history reported to credit bureaus</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Building Credit</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Make payments on time every month</li>
                <li>• Keep balances low (under 30% of limit)</li>
                <li>• Don't close the account too early</li>
                <li>• Consider graduation to unsecured card</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
