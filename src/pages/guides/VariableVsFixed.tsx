
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale } from "lucide-react";

const VariableVsFixed = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-purple-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-purple-100 text-purple-700 border-purple-200">
                <Scale className="h-3 w-3 mr-1" />
                Rate Comparison Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Variable vs. Fixed Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare the pros and cons of variable and fixed mortgage rates to make the right choice.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Fixed Rate Mortgages</CardTitle>
                    <CardDescription>
                      Predictable payments with rate protection
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Predictable monthly payments</li>
                          <li>• Protection from rate increases</li>
                          <li>• Easier budgeting and planning</li>
                          <li>• Peace of mind</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Higher starting rates</li>
                          <li>• No benefit from rate decreases</li>
                          <li>• Higher penalties for breaking</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-600">Variable Rate Mortgages</CardTitle>
                    <CardDescription>
                      Potential savings with rate flexibility
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Lower starting rates</li>
                          <li>• Benefit from rate decreases</li>
                          <li>• Lower penalties for breaking</li>
                          <li>• Historically outperform fixed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Unpredictable payments</li>
                          <li>• Exposure to rate increases</li>
                          <li>• Harder to budget</li>
                          <li>• Requires risk tolerance</li>
                        </ul>
                      </div>
                    </div>
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

export default VariableVsFixed;
