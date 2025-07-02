
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Star, CreditCard, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const travelInsuranceCards = [
  {
    id: 1,
    name: "TD First Class Travel Visa Infinite",
    issuer: "TD",
    annualFee: 120,
    welcomeBonus: "80,000 TD Rewards points",
    insuranceCoverage: "Up to $5M medical, trip cancellation/interruption",
    additionalCoverage: "Baggage delay, flight delay, rental car",
    features: ["Comprehensive travel insurance", "No trip length limits", "Family coverage"],
    pros: ["Excellent insurance coverage", "Good value for benefits", "Family protection"],
    cons: ["Annual fee", "Must book with card for some benefits"],
    applyUrl: "#",
    isPromoted: true
  },
  {
    id: 2,
    name: "RBC Avion Visa Infinite Privilege",
    issuer: "RBC",
    annualFee: 399,
    welcomeBonus: "55,000 Avion points",
    insuranceCoverage: "Up to $5M medical, comprehensive trip protection",
    additionalCoverage: "Lost/stolen baggage, concierge service",
    features: ["Premium travel insurance", "Airport lounge access", "Elite benefits"],
    pros: ["Premium coverage levels", "Luxury travel benefits", "High earning rates"],
    cons: ["High annual fee", "High income requirements"],
    applyUrl: "#",
    isPromoted: false
  }
];

export default function TravelInsurance() {
  const [sortBy, setSortBy] = useState("coverage");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-900">Travel Insurance Credit Cards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Travel with confidence knowing you're protected. These credit cards offer 
            comprehensive travel insurance coverage for medical emergencies and trip disruptions.
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
                <SelectItem value="comprehensive">Comprehensive Coverage</SelectItem>
                <SelectItem value="medical">Medical Coverage</SelectItem>
                <SelectItem value="family">Family Coverage</SelectItem>
                <SelectItem value="promoted">Featured Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="coverage">Coverage Level</SelectItem>
              <SelectItem value="annual-fee">Annual Fee</SelectItem>
              <SelectItem value="benefits">Additional Benefits</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {travelInsuranceCards.map((card) => (
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
                  <span className="font-medium text-gray-900">Insurance Coverage:</span>
                  <p className="text-primary font-semibold">{card.insuranceCoverage}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Annual Fee:</span>
                    <p className="text-gray-600">${card.annualFee}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Additional:</span>
                    <p className="text-gray-600">{card.additionalCoverage}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Insurance Coverage Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Medical Coverage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Emergency medical expenses abroad</li>
                <li>• Hospital and doctor fees</li>
                <li>• Prescription medications</li>
                <li>• Emergency medical evacuation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Trip Protection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Trip cancellation and interruption</li>
                <li>• Baggage loss and delay</li>
                <li>• Flight delays and missed connections</li>
                <li>• Rental car damage and theft</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
