
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompoundInterestCalculator as Calculator } from "@/components/CompoundInterestCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CheckCircle } from "lucide-react";

const CompoundInterestCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Investment Tool
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Compound Interest Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                See how your investments can grow over time with the power of compound interest.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                <div>
                  <Calculator />
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="bg-green-50 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        The Power of Compounding
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Earnings generate their own earnings</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Time is your greatest advantage</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Regular contributions accelerate growth</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">Start early for maximum benefit</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">Investment Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p><strong>Start Early:</strong> Even small amounts can grow significantly over time</p>
                        <p><strong>Be Consistent:</strong> Regular monthly contributions compound your returns</p>
                        <p><strong>Stay Patient:</strong> Long-term investing rewards patience</p>
                        <p><strong>Diversify:</strong> Spread risk across different investment types</p>
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

export default CompoundInterestCalculator;
