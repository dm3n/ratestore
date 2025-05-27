
import { useState } from "react";
import { CompoundInterestCalculator } from "@/components/CompoundInterestCalculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesTable } from "@/components/SavingsRatesTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, PiggyBank, BarChart3, Shield, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Trusted by 1M+ users
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Compare Financial Rates & Tools
              </h1>
              <p className="text-lg text-muted-foreground mb-8 md:mb-10">
                Find the best savings rates, calculate your financial goals, and make informed 
                decisions with our comprehensive financial tools and rate comparisons.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Get Started <Calculator className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  View Best Rates <TrendingUp className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tools Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">Why RateStore?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Compare rates from 500+ institutions</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Free financial calculators</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Real-time rate updates</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Expert financial guidance</span>
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
                        <TrendingUp className="h-4 w-4" />
                        <span className="hidden md:inline">Rates</span>
                      </TabsTrigger>
                      <TabsTrigger value="planning" className="gap-2">
                        <PiggyBank className="h-4 w-4" />
                        <span className="hidden md:inline">Planning</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="calculator">
                      <CompoundInterestCalculator />
                    </TabsContent>
                    
                    <TabsContent value="rates">
                      <SavingsRatesTable />
                    </TabsContent>
                    
                    <TabsContent value="planning">
                      <Card className="border-0 shadow-lg">
                        <CardHeader className="bg-primary/5 rounded-t-lg">
                          <CardTitle className="text-2xl font-bold">Financial Planning Tools</CardTitle>
                          <CardDescription>Plan your financial future with our comprehensive tools</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid gap-4 md:grid-cols-2">
                            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                              <PiggyBank className="h-6 w-6" />
                              <span>Emergency Fund</span>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                              <BarChart3 className="h-6 w-6" />
                              <span>Retirement Planning</span>
                            </Button>
                          </div>
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
              <h2 className="text-3xl font-bold mb-4">Your Complete Financial Toolkit</h2>
              <p className="text-muted-foreground">
                Everything you need to make smart financial decisions in one place
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-2 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Rate Comparisons</CardTitle>
                  <CardDescription>
                    Compare savings, CD, and loan rates from hundreds of financial institutions.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-2 bg-finance-orange/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-finance-orange" />
                  </div>
                  <CardTitle>Financial Calculators</CardTitle>
                  <CardDescription>
                    Plan your finances with our comprehensive calculator suite.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="mb-2 bg-finance-green/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-finance-green" />
                  </div>
                  <CardTitle>Secure & Private</CardTitle>
                  <CardDescription>
                    Your financial data is always secure and never shared without permission.
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
