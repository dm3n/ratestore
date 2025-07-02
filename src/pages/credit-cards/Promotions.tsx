
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star, Gift, CreditCard, ArrowRight, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const promotions = [
  {
    id: 1,
    cardName: "Chase Sapphire Preferred",
    issuer: "Chase",
    type: "Travel Rewards",
    welcomeBonus: "80,000 points",
    bonusValue: "$1,000",
    requirement: "Spend $4,000 in first 3 months",
    annualFee: "$95",
    offerEnds: "2025-03-31",
    isLimited: true,
    features: ["2x points on travel & dining", "1.25¢ per point when redeemed through Chase", "No foreign transaction fees"],
    originalBonus: "60,000 points",
    savings: "$250",
    category: "travel"
  },
  {
    id: 2,
    cardName: "Capital One Venture X",
    issuer: "Capital One",
    type: "Premium Travel",
    welcomeBonus: "100,000 miles",
    bonusValue: "$1,000",
    requirement: "Spend $10,000 in first 6 months",
    annualFee: "$395",
    offerEnds: "2025-02-28",
    isLimited: false,
    features: ["10x miles on hotels & rental cars", "$300 annual travel credit", "Priority Pass lounge access"],
    originalBonus: "75,000 miles",
    savings: "$250",
    category: "travel"
  },
  {
    id: 3,
    cardName: "Discover it Cash Back",
    issuer: "Discover",
    type: "Cash Back",
    welcomeBonus: "Cash Back Match",
    bonusValue: "Up to $150",
    requirement: "No minimum spending",
    annualFee: "$0",
    offerEnds: "2025-04-30",
    isLimited: false,
    features: ["5% rotating categories", "1% on all other purchases", "Cash back match for first year"],
    originalBonus: "Standard offer",
    savings: "$150",
    category: "cashback"
  },
  {
    id: 4,
    cardName: "American Express Gold Card",
    issuer: "American Express",
    type: "Rewards",
    welcomeBonus: "90,000 points",
    bonusValue: "$900",
    requirement: "Spend $6,000 in first 6 months",
    annualFee: "$250",
    offerEnds: "2025-03-15",
    isLimited: true,
    features: ["4x points at restaurants & groceries", "$120 dining credit", "$120 Uber credit"],
    originalBonus: "60,000 points",
    savings: "$300",
    category: "rewards"
  },
  {
    id: 5,
    cardName: "Citi Premier Card",
    issuer: "Citi",
    type: "Travel Rewards",
    welcomeBonus: "80,000 points",
    bonusValue: "$800",
    requirement: "Spend $4,000 in first 3 months",
    annualFee: "$95",
    offerEnds: "2025-02-15",
    isLimited: false,
    features: ["3x points on travel, gas & groceries", "1.6¢ per point on travel", "No foreign transaction fees"],
    originalBonus: "60,000 points",
    savings: "$200",
    category: "travel"
  },
  {
    id: 6,
    cardName: "Blue Cash Preferred",
    issuer: "American Express",
    type: "Cash Back",
    welcomeBonus: "$300 cash back",
    bonusValue: "$300",
    requirement: "Spend $3,000 in first 6 months",
    annualFee: "$95",
    offerEnds: "2025-05-31",
    isLimited: false,
    features: ["6% cash back on groceries", "6% cash back on streaming", "3% cash back on transit"],
    originalBonus: "$200 cash back",
    savings: "$100",
    category: "cashback"
  }
];

const categoryFilters = [
  { value: "all", label: "All Promotions" },
  { value: "travel", label: "Travel Cards" },
  { value: "cashback", label: "Cash Back Cards" },
  { value: "rewards", label: "Rewards Cards" }
];

export default function Promotions() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("ending-soon");

  const filteredPromotions = promotions.filter(promo => 
    selectedCategory === "all" || promo.category === selectedCategory
  );

  const sortedPromotions = [...filteredPromotions].sort((a, b) => {
    if (sortBy === "ending-soon") {
      return new Date(a.offerEnds).getTime() - new Date(b.offerEnds).getTime();
    } else if (sortBy === "bonus-value") {
      return parseInt(b.bonusValue.replace(/[^0-9]/g, '')) - parseInt(a.bonusValue.replace(/[^0-9]/g, ''));
    }
    return 0;
  });

  const getDaysRemaining = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top Credit Card Promotions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Don't miss out on these limited-time credit card offers. Find the best welcome bonuses, 
            promotional rates, and special deals available right now.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-orange-600 bg-orange-50 px-4 py-2 rounded-full inline-flex">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Limited Time Offers - Act Fast!</span>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter by category:</span>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={selectedCategory === filter.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(filter.value)}
                    className="text-xs"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="ending-soon">Ending Soon</option>
                <option value="bonus-value">Bonus Value</option>
              </select>
            </div>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {sortedPromotions.map((promo) => {
            const daysRemaining = getDaysRemaining(promo.offerEnds);
            const isUrgent = daysRemaining <= 30;
            
            return (
              <Card key={promo.id} className={`relative overflow-hidden ${isUrgent ? 'ring-2 ring-orange-200' : ''}`}>
                {promo.isLimited && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive" className="text-xs">
                      Limited Time
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900 mb-1">
                        {promo.cardName}
                      </CardTitle>
                      <p className="text-sm text-gray-500">{promo.issuer} • {promo.type}</p>
                    </div>
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Welcome Bonus */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Welcome Bonus</span>
                    </div>
                    <p className="text-2xl font-bold text-green-700 mb-1">
                      {promo.welcomeBonus}
                    </p>
                    <p className="text-sm text-green-600">
                      Worth {promo.bonusValue} • {promo.requirement}
                    </p>
                    {promo.originalBonus !== promo.welcomeBonus && (
                      <p className="text-xs text-green-600 mt-1">
                        <span className="line-through">{promo.originalBonus}</span> 
                        <span className="ml-2 font-medium">Save {promo.savings}!</span>
                      </p>
                    )}
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {promo.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <Star className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Offer Details */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Annual Fee:</span>
                      <span className="font-medium">{promo.annualFee}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-600">Offer Ends:</span>
                      <span className={`font-medium ${isUrgent ? 'text-orange-600' : 'text-gray-900'}`}>
                        {formatDate(promo.offerEnds)}
                      </span>
                    </div>
                    {isUrgent && (
                      <div className="bg-orange-50 px-3 py-2 rounded-md mb-3">
                        <p className="text-xs text-orange-700 font-medium">
                          ⏰ Only {daysRemaining} days left!
                        </p>
                      </div>
                    )}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Important Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Before You Apply:</h4>
              <ul className="space-y-1">
                <li>• Check your credit score and history</li>
                <li>• Review all terms and conditions</li>
                <li>• Consider your spending patterns</li>
                <li>• Compare multiple offers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Promotional Offers:</h4>
              <ul className="space-y-1">
                <li>• Limited time availability</li>
                <li>• Subject to credit approval</li>
                <li>• Terms may change without notice</li>
                <li>• Additional fees may apply</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
