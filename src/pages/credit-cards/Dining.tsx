
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Utensils, Star, CreditCard, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dining = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                <Utensils className="h-3 w-3 mr-1" />
                Dining Rewards
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best Dining Credit Cards in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Earn more rewards on restaurant purchases, food delivery, and dining out with Canada's top dining credit cards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/card-finder">
                    <CreditCard className="h-5 w-5" />
                    Find Your Card
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/credit-cards">
                    <Star className="h-5 w-5" />
                    Compare All Cards
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dining Credit Cards?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Maximize your rewards on every meal with specialized dining credit cards
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Utensils className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle>High Dining Rewards</CardTitle>
                    <CardDescription>
                      Earn up to 5x points or cashback on restaurant purchases
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Bonus Categories</CardTitle>
                    <CardDescription>
                      Many cards include food delivery and takeout in dining rewards
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Premium Perks</CardTitle>
                    <CardDescription>
                      Access exclusive dining offers and restaurant reservations
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Earn More on Dining?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Compare dining credit cards and start maximizing your restaurant rewards today.
              </p>
              <Button size="lg" asChild>
                <Link to="/card-finder">Find the Perfect Dining Card</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dining;
