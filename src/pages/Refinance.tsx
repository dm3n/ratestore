
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, RefreshCw, TrendingDown } from "lucide-react";

const Refinance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Lower Your Rate
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Refinance Your Mortgage
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Lower your monthly payments or access your home's equity with competitive refinance rates.
              </p>
              <Button size="lg" className="gap-2">
                Check Refinance Rates <RefreshCw className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                <div>
                  <MortgageCalculator />
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="bg-orange-50 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-orange-600" />
                        Why Refinance?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Lower monthly payments</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Reduce interest rate</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Access home equity</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Switch loan terms</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">Refinance Types</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Rate & Term</h4>
                          <p className="text-sm text-muted-foreground">Lower rate or change term</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Cash-Out</h4>
                          <p className="text-sm text-muted-foreground">Access home equity</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Streamline</h4>
                          <p className="text-sm text-muted-foreground">Quick government program</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default Refinance;
