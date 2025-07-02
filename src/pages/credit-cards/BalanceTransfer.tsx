
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const balanceTransferCards = [
  {
    id: 1,
    name: "MBNA True Line Mastercard",
    issuer: "MBNA",
    annualFee: 0,
    promoRate: "0.99% for 12 months",
    regularRate: "22.99%",
    balanceTransferFee: "1% (min $7.50)",
    features: ["Low promo rate", "No annual fee", "Online account management"],
    pros: ["Very low promotional rate", "No annual fee", "Long promotional period"],
    cons: ["High regular rate", "Balance transfer fee applies"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "BMO Preferred Rate Mastercard",
    issuer: "BMO",
    annualFee: 20,
    promoRate: "2.99% for 9 months",
    regularRate: "12.99%",
    balanceTransferFee: "3%",
    features: ["Low ongoing rate", "Balance transfer offers", "Fraud protection"],
    pros: ["Low ongoing interest rate", "Regular promotional offers"],
    cons: ["Annual fee", "Higher transfer fee"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function BalanceTransfer() {
  const [sortBy, setSortBy] = useState("promo-rate");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RefreshCw className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Balance Transfer Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consolidate high-interest debt with low promotional interest rates. 
            Save money and simplify your payments with balance transfer credit cards.
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
                <SelectItem value="low-rate">Low Promo Rate</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="promo-rate">Promo Rate</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="transfer-fee">Transfer Fee</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {balanceTransferCards.map((card) => (
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
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Promotional Rate:</span>
                  <p className="text-primary font-semibold">{card.promoRate}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Annual Fee:</span>
                    <p className="text-gray-600">${card.annualFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Transfer Fee:</span>
                    <p className="text-gray-600">{card.balanceTransferFee}</p>
                  </div>
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

        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Balance Transfer Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">How It Works</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Transfer high-interest debt to a low-rate card</li>
                <li>• Enjoy promotional rates for a limited time</li>
                <li>• Pay down debt faster with lower interest</li>
                <li>• Consolidate multiple payments into one</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Important Considerations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Transfer fees typically apply (1-3%)</li>
                <li>• Promotional rates are temporary</li>
                <li>• Pay off balance before rate increases</li>
                <li>• Avoid new purchases on the card</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
