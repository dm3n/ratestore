
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone, Globe, Calculator, Users, DollarSign } from "lucide-react";

const PersonalChequing = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('personal-chequing-calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                Everyday Banking
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best Personal Chequing Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find the perfect personal chequing account for your everyday banking needs. 
                Compare fees, transaction limits, and features from Canada's top banks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" onClick={scrollToCalculator}>
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
        <section className="py-16" id="personal-chequing-calculator">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator 
                accountType="chequing"
                title="Best Personal Chequing Account Comparison"
                description="Compare monthly fees, transaction limits, and features for personal banking"
              />
            </div>
          </div>
        </section>

        {/* Account Features */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Look For</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Key features that make a great personal chequing account
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Low Monthly Fees</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Keep more money in your pocket with low or no monthly maintenance fees.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$0-$15</div>
                      <div className="text-sm text-green-700">Typical monthly fee range</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Digital Banking</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Modern mobile apps and online banking for convenient account management.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-blue-700">Access to your account</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">ATM Network</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Access to a wide network of ATMs for convenient cash withdrawals.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">3,500+</div>
                      <div className="text-sm text-purple-700">ATMs across Canada</div>
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
                  <div className="text-3xl font-bold text-primary mb-2">$0</div>
                  <div className="text-muted-foreground">Best Monthly Fee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Unlimited</div>
                  <div className="text-muted-foreground">Best Transaction Limit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Free</div>
                  <div className="text-muted-foreground">E-Transfer Options</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">0.25%</div>
                  <div className="text-muted-foreground">Best Interest Rate</div>
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

export default PersonalChequing;
