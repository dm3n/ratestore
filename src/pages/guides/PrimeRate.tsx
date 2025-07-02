
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const PrimeRate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-green-100 text-green-700 border-green-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                Prime Rate Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Understanding Prime Rate in Canada
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Learn how the prime rate affects your mortgage, loans, and financial decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">What is Prime Rate?</CardTitle>
                  <CardDescription>
                    A comprehensive guide to understanding Canada's prime rate and its impact on your finances.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground mb-6">
                      The prime rate is the interest rate that banks charge their most creditworthy customers. 
                      It serves as a benchmark for many other interest rates, including variable mortgages, 
                      lines of credit, and personal loans.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Key Points About Prime Rate:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Set by individual banks based on the Bank of Canada's overnight rate</li>
                      <li>Typically 2.2% higher than the overnight rate</li>
                      <li>Affects variable rate mortgages and credit products</li>
                      <li>Changes when the Bank of Canada adjusts monetary policy</li>
                      <li>Influences borrowing costs across the economy</li>
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

export default PrimeRate;
