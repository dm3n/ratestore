
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fuel, Star, CreditCard, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Gas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <Fuel className="h-3 w-3 mr-1" />
                Gas Rewards
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best Gas Credit Cards in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Save money at the pump with Canada's top gas credit cards offering cash back and rewards on fuel purchases.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Gas Credit Cards?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Maximize your savings every time you fill up with specialized gas credit cards
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Fuel className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>High Gas Rewards</CardTitle>
                    <CardDescription>
                      Earn up to 5% cash back or points on gas station purchases
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Station Partnerships</CardTitle>
                    <CardDescription>
                      Special rates at Petro Canada, Esso, Shell and other major chains
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Additional Benefits</CardTitle>
                    <CardDescription>
                      Many cards include automotive services and roadside assistance
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
              <h2 className="text-3xl font-bold mb-6">Start Saving on Gas Today</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Compare gas credit cards and start earning rewards on every fill-up.
              </p>
              <Button size="lg" asChild>
                <Link to="/card-finder">Find the Perfect Gas Card</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gas;
