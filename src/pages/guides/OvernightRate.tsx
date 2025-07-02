
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const OvernightRate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-red-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-red-100 text-red-700 border-red-200">
                <Building2 className="h-3 w-3 mr-1" />
                Bank of Canada Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Bank of Canada Overnight Rate
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Understanding the overnight rate and its impact on Canadian mortgage rates and the economy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">What is the Overnight Rate?</CardTitle>
                  <CardDescription>
                    Learn about the Bank of Canada's key monetary policy tool and its effects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground mb-6">
                      The overnight rate is the interest rate at which major financial institutions borrow 
                      and lend one-day funds among themselves. It's set by the Bank of Canada and serves 
                      as the foundation for all other interest rates in the economy.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">How It Affects You:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Directly influences prime rate (typically overnight rate + 2.2%)</li>
                      <li>Affects variable mortgage rates and credit products</li>
                      <li>Impacts savings account interest rates</li>
                      <li>Influences the Canadian dollar and inflation</li>
                      <li>Changed 8 times per year at scheduled announcements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OvernightRate;
