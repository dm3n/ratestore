
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";
import { Building2 } from "lucide-react";

const BankRates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
                <Building2 className="h-3 w-3 mr-1" />
                Big 5 Banks
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Best Bank Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare mortgage rates from Canada's major banks. Find the best rates 
                from RBC, TD, Scotiabank, BMO, and CIBC with our live rate calculator.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Live rates updated automatically</div>
                  <div className="text-sm text-muted-foreground">Powered by our database-driven rate engine</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Live Bank Mortgage Rates</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get real-time rates from major Canadian banks, updated automatically 
                  and managed through our admin console.
                </p>
              </div>
              
              <InteractiveRateCalculator 
                defaultTransactionType="buying"
              />
              
              <div className="mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">About Bank Rates</CardTitle>
                    <CardDescription>
                      Understanding how bank mortgage rates work in Canada
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Why Choose Bank Rates?</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• Established institutions with nationwide presence</li>
                          <li>• Full-service banking relationships</li>
                          <li>• Comprehensive mortgage products</li>
                          <li>• Branch and online support</li>
                          <li>• Competitive promotional rates</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Rate Considerations</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• Rates vary by credit score and down payment</li>
                          <li>• Special offers for new clients</li>
                          <li>• Bundle discounts with other banking products</li>
                          <li>• Negotiation opportunities with relationship managers</li>
                          <li>• Rate holds typically 60-120 days</li>
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

export default BankRates;
