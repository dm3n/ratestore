
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone, Globe, Calculator, Users, DollarSign } from "lucide-react";

const BestChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <CreditCard className="h-3 w-3 mr-1" />
                No Fee Options Available
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best Chequing Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find the perfect chequing account with low fees, unlimited transactions, and premium features. 
                Compare Canada's top banking packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare Accounts
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Users className="h-5 w-5" />
                  Find Your Plan
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Calculator */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator 
                accountType="chequing"
                title="Best Chequing Account Comparison"
                description="Compare monthly fees, transaction limits, and premium features"
              />
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Banking Style</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Different account types for different lifestyles and banking needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                    Most Popular
                  </Badge>
                  <CardHeader className="text-center pt-8">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Digital Banking</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Perfect for tech-savvy users who prefer online and mobile banking
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Fee:</span>
                        <span className="font-bold text-green-600">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transactions:</span>
                        <span className="font-bold">Unlimited</span>
                      </div>
                      <div className="flex justify-between">
                        <span>E-Transfers:</span>
                        <span className="font-bold text-green-600">Free</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Traditional Banking</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Full-service banking with branch access and personal service
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Fee:</span>
                        <span className="font-bold">$4 - $30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transactions:</span>
                        <span className="font-bold">10 - Unlimited</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Branch Access:</span>
                        <span className="font-bold text-blue-600">Included</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Premium Banking</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      VIP services, investment advice, and luxury perks
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Fee:</span>
                        <span className="font-bold">$25 - $60</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Services:</span>
                        <span className="font-bold text-purple-600">Premium</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Relationship Manager:</span>
                        <span className="font-bold text-purple-600">Yes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">At a Glance</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Account Options</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$0</div>
                  <div className="text-muted-foreground">Lowest Monthly Fee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Unlimited</div>
                  <div className="text-muted-foreground">Best Transaction Limit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5 Big</div>
                  <div className="text-muted-foreground">Canadian Banks</div>
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

export default BestChequing;
