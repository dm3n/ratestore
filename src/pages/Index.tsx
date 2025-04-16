import { useState } from "react";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RateTable } from "@/components/RateTable";
import { LoanTypeSelector } from "@/components/LoanTypeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, ChartLine, PiggyBank, Home, Shield, CheckCircle } from "lucide-react";

const Index = () => {
  const [loanType, setLoanType] = useState<string>("purchase");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Trusted by 1M+ homeowners
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Find Your Perfect Mortgage Rate
              </h1>
              <p className="text-lg text-muted-foreground mb-8 md:mb-10">
                Compare top lenders and find the best mortgage rates for your new home
                or refinance your existing loan.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Get Started <Home className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  View Today's Rates <ChartLine className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
                <div className="space-y-6">
                  <LoanTypeSelector onSelect={setLoanType} />
                  <Card>
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">Why RateStore?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Compare rates from 500+ lenders</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Free, no obligation quotes</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Fast pre-approval process</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Expert mortgage advisors</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Tabs defaultValue="calculator" className="w-full">
                    <TabsList className="mb-6 w-full grid grid-cols-3">
                      <TabsTrigger value="calculator" className="gap-2">
                        <Calculator className="h-4 w-4" />
                        <span className="hidden md:inline">Calculator</span>
                      </TabsTrigger>
                      <TabsTrigger value="rates" className="gap-2">
                        <ChartLine className="h-4 w-4" />
                        <span className="hidden md:inline">Rates</span>
                      </TabsTrigger>
                      <TabsTrigger value="affordability" className="gap-2">
                        <PiggyBank className="h-4 w-4" />
                        <span className="hidden md:inline">Affordability</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="calculator">
                      <MortgageCalculator />
                    </TabsContent>
                    
                    <TabsContent value="rates">
                      <RateTable />
                    </TabsContent>
                    
                    <TabsContent value="affordability">
                      <Card className="border-0 shadow-lg">
                        <CardHeader className="bg-primary/5 rounded-t-lg">
                          <CardTitle className="text-2xl font-bold">Affordability Calculator</CardTitle>
                          <CardDescription>See how much house you can afford</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <p className="text-muted-foreground mb-4">Coming soon! Our affordability calculator will help you determine how much house you can afford based on your income, debt, and savings.</p>
                          <Button variant="secondary" className="w-full">Get Notified When Available</Button>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Simplify Your Mortgage Journey</h2>
              <p className="text-muted-foreground">
                Our powerful tools make finding and comparing mortgage rates easy
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-2 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Accurate Calculators</CardTitle>
                  <CardDescription>
                    Calculate mortgage payments, interest, and more with our easy-to-use calculators.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-2 bg-finance-orange/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <ChartLine className="h-6 w-6 text-finance-orange" />
                  </div>
                  <CardTitle>Compare Rates</CardTitle>
                  <CardDescription>
                    Compare mortgage rates from hundreds of lenders in real-time.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-2 bg-finance-green/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-finance-green" />
                  </div>
                  <CardTitle>Secure Process</CardTitle>
                  <CardDescription>
                    Your information is always secure and never shared without permission.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
