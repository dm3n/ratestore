
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Star, ShoppingCart } from "lucide-react";

const PCFinancial = () => {
  const pcCards = [
    {
      name: "PC Financial World Mastercard",
      annualFee: "$0",
      welcomeBonus: "30,000 PC Optimum points",
      highlights: ["30 points per $1 at Loblaws", "20 points per $1 at Esso", "10 points per $1 elsewhere"],
      rating: 4.3,
      featured: true
    },
    {
      name: "PC Financial World Elite Mastercard", 
      annualFee: "$120",
      welcomeBonus: "50,000 PC Optimum points",
      highlights: ["45 points per $1 at Loblaws", "25 points per $1 at Esso", "15 points per $1 elsewhere"],
      rating: 4.5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                PC Financial Cards
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                PC Financial Credit Cards
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Earn PC Optimum points on everyday purchases and save on groceries at Loblaws family of stores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Compare PC Cards
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
              <h2 className="text-3xl font-bold text-center mb-12">PC Financial Credit Cards</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {pcCards.map((card, index) => (
                  <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                    {card.featured && (
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <ShoppingCart className="h-6 w-6 text-green-600" />
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
      </main>
      
      <Footer />
    </div>
  );
};

export default PCFinancial;
