
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, CreditCard, Calculator, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CardFinderPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                <Search className="h-3 w-3 mr-1" />
                AI-Powered Matching
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                CardFinder™
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Answer a few questions and get personalized credit card recommendations tailored to your spending habits and financial goals.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/card-finder">
                  Start CardFinder <Zap className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CreditCard className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Smart Matching</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our AI analyzes your spending patterns and financial goals to recommend the perfect credit card for you.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Calculator className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Value Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      See exactly how much you could earn or save with each recommended credit card based on your spending.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Search className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Compare Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Compare multiple cards side-by-side to find the one that offers the best value for your lifestyle.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardFinderPage;
