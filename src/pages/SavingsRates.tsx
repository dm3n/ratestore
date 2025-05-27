
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesTable } from "@/components/SavingsRatesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, CheckCircle, Calculator } from "lucide-react";

const SavingsRates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                Updated Daily
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Best High-Yield Savings Rates
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Compare the highest savings account interest rates from top banks and credit unions.
              </p>
              <Button size="lg" className="gap-2">
                Calculate My Earnings <Calculator className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Rates Table */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <SavingsRatesTable />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Why Choose High-Yield Savings?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Higher Returns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Earn up to 15x more than traditional savings accounts with competitive APYs.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">FDIC Insured</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Your deposits are protected up to $250,000 per depositor, per bank.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Easy Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Access your money when you need it with online banking and mobile apps.
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

export default SavingsRates;
