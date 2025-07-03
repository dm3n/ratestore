
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Gift, Calculator, PiggyBank, CheckCircle, Users } from "lucide-react";

const RESPAccounts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                <GraduationCap className="h-3 w-3 mr-1" />
                Education Savings
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best RESP Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Registered Education Savings Plans to save for your child's education with government grants. 
                Compare the best RESP savings account rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare RESP Rates
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Gift className="h-5 w-5" />
                  Calculate Grants
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
                accountType="resp"
                title="Best RESP Savings Account Rates"
                description="Compare education savings account rates and maximize government grants"
              />
            </div>
          </div>
        </section>

        {/* RESP Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose an RESP?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get free government money and tax-deferred growth for your child's education
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Gift className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Government Grants</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Get up to $500 per year in Canada Education Savings Grant (CESG).
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$7,200</div>
                      <div className="text-sm text-green-700">Maximum lifetime CESG</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Tax-Deferred Growth</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Investment growth is tax-deferred until withdrawal for education expenses.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">0%</div>
                      <div className="text-sm text-blue-700">Tax on growth while invested</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Family Flexibility</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Transfer funds between siblings or extend the plan for up to 35 years.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">35</div>
                      <div className="text-sm text-purple-700">Years maximum plan duration</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$50,000</div>
                  <div className="text-muted-foreground">Lifetime Contribution Limit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20%</div>
                  <div className="text-muted-foreground">Basic CESG Match Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">No Limit</div>
                  <div className="text-muted-foreground">Annual Contribution</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.00%</div>
                  <div className="text-muted-foreground">Best Current Rate</div>
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

export default RESPAccounts;
