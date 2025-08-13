
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home } from "lucide-react";

const Mortgage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Purchase & Refinance
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Mortgage Calculator & Tools
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Calculate your monthly payments and explore mortgage options with our comprehensive tools.
              </p>
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
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">Mortgage Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Build equity over time</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Potential tax benefits</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Fixed monthly payments</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Property ownership</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">Getting Started</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p>1. Calculate your budget using our tools</p>
                        <p>2. Get pre-approved for a mortgage</p>
                        <p>3. Find a real estate agent</p>
                        <p>4. Start house hunting</p>
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

export default Mortgage;
