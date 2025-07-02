
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Star, Gift, Shield } from "lucide-react";

const Amex = () => {
  const amexCards = [
    {
      name: "American Express Cobalt Card",
      annualFee: "$12.99/month",
      welcomeBonus: "30,000 MR points",
      highlights: ["5x points on groceries", "3x points on gas", "2x points on travel"],
      rating: 4.9,
      featured: true
    },
    {
      name: "American Express Gold Rewards Card",
      annualFee: "$150",
      welcomeBonus: "25,000 MR points",
      highlights: ["2x on travel", "1x on everything else", "No foreign transaction fees"],
      rating: 4.6
    },
    {
      name: "American Express Platinum Card",
      annualFee: "$699",  
      welcomeBonus: "60,000 MR points",
      highlights: ["Priority Pass lounge access", "Travel credits", "Hotel elite status"],
      rating: 4.8,
      premium: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                American Express Cards
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                American Express Credit Cards in Canada
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover premium American Express credit cards with exceptional rewards, travel benefits, and membership privileges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Compare Amex Cards
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/card-finder">Find My Card</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Popular American Express Cards</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amexCards.map((card, index) => (
                  <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                    {card.featured && (
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {card.premium && (
                      <Badge className="absolute top-4 right-4 bg-purple-600 text-white">
                        Premium
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{card.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{card.name}</CardTitle>
                      <CardDescription>
                        Annual Fee: <span className="font-semibold text-foreground">{card.annualFee}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-green-600 mb-2">{card.welcomeBonus}</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {card.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">Apply Now</Button>
                          <Button variant="outline" size="sm">Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose American Express?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Gift className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Premium Rewards</h3>
                  <p className="text-muted-foreground">Earn Membership Rewards points on every purchase with flexible redemption options.</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Travel Benefits</h3>
                  <p className="text-muted-foreground">Enjoy travel insurance, airport lounge access, and exclusive travel perks.</p>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
                  <p className="text-muted-foreground">Experience world-class customer service and concierge services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Amex;
