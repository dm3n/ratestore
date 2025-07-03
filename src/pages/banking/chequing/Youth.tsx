
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Shield, Calculator, PiggyBank, DollarSign, Star } from "lucide-react";

const YouthChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                <Users className="h-3 w-3 mr-1" />
                Ages 13-17
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best Youth Chequing Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Banking accounts designed for young people to learn financial responsibility. 
                Start building good money habits with supervised banking options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare Youth Accounts
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <PiggyBank className="h-5 w-5" />
                  Start Saving
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
                accountType="youth"
                title="Best Youth Chequing Account Comparison"
                description="Compare youth banking options with parental controls and educational features"
              />
            </div>
          </div>
        </section>

        {/* Youth Features */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Youth Banking Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Safe and educational banking designed for teenagers
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Parental Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Parents can monitor spending and set limits to help teens learn responsibility.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-green-700">Parental oversight</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">No Monthly Fees</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Most youth accounts have no monthly fees to help young people save money.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">$0</div>
                      <div className="text-sm text-blue-700">Monthly maintenance fee</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Learning Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Interactive tools and resources to teach financial literacy and budgeting.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">Free</div>
                      <div className="text-sm text-purple-700">Educational resources</div>
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
                  <div className="text-3xl font-bold text-primary mb-2">13-17</div>
                  <div className="text-muted-foreground">Age Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$0</div>
                  <div className="text-muted-foreground">Monthly Fees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Transactions Included</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3.50%</div>
                  <div className="text-muted-foreground">Best Savings Rate</div>
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

export default YouthChequing;
