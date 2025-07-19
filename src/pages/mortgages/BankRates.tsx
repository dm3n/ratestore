
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Star } from "lucide-react";
import { useMortgageRates } from "@/hooks/useMortgageRates";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";
import { MortgageHero } from "@/components/MortgageHero";

const BankRates = () => {
  const { rates, isLoading, error } = useMortgageRates({
    lenderType: 'bank',
    rateType: 'fixed',
    term: '5-yr',
    autoRefresh: true
  });

  // Filter for major Canadian banks only
  const majorBanks = ['RBC', 'TD', 'Scotiabank', 'BMO', 'CIBC'];
  
  const bankRates = rates
    .filter(rate => {
      const lenderName = rate.lender_name.toLowerCase();
      return majorBanks.some(bank => {
        const bankName = bank.toLowerCase();
        return lenderName.includes(bankName) ||
               (bankName === 'rbc' && lenderName.includes('royal bank')) ||
               (bankName === 'td' && lenderName.includes('td canada trust')) ||
               (bankName === 'bmo' && lenderName.includes('bank of montreal'));
      });
    })
    .sort((a, b) => a.base_rate - b.base_rate)
    .slice(0, 8); // Show up to 8 rates from the Big 5

  // Get the best rate for display
  const bestRate = bankRates.length > 0 ? `${(bankRates[0].base_rate * 100).toFixed(2)}%` : "4.79%";

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    console.error('Error loading bank rates:', error);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <MortgageHero
          badge={{
            text: "Big 5 Canadian Banks",
            icon: Building2,
            color: "blue"
          }}
          title="Best Bank"
          subtitle="Mortgage Rates"
          description="Compare mortgage rates from Canada's Big 5 banks. Find competitive rates from RBC, TD, Scotiabank, BMO, and CIBC with the stability and service you expect from major banks."
          rate={{
            value: bestRate,
            label: "Best Big 5 Bank Rate",
            sublabel: "5-Year Fixed Term"
          }}
          stats={[
            {
              value: "5",
              label: "Major Banks",
              sublabel: "RBC, TD, Scotia, BMO, CIBC"
            },
            {
              value: "100+",
              label: "Rate Options",
              sublabel: "Various terms available"
            }
          ]}
          cta={{
            primary: {
              text: "Compare Bank Rates",
              href: "/compare-all-rates"
            },
            secondary: {
              text: "Calculate Payments",
              href: "/tools/mortgage-calculator"
            }
          }}
          gradientColors={{
            from: "blue-50",
            to: "indigo-50"
          }}
        />

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Find Your Best Big 5 Bank Rate</h2>
                <p className="text-muted-foreground">
                  Get personalized rates from Canada's major banks based on your specific needs.
                </p>
              </div>
              
              <InteractiveRateCalculator 
                defaultTransactionType="buying"
                termFilter="5-yr"
              />

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    Big 5 Bank Mortgage Rates
                  </CardTitle>
                  <CardDescription>
                    Current rates from Canada's major banks - Updated live from our database
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {bankRates.length > 0 ? (
                    <div className="grid gap-4">
                      {bankRates.map((rate, index) => (
                        <div key={rate.id} className={`p-4 border rounded-lg ${index < 2 ? "bg-blue-50/50 border-blue-200" : ""}`}>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                {index < 2 && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                                <Building2 className="h-5 w-5 text-blue-600" />
                                <div>
                                  <div className="font-semibold text-lg">{rate.lender_name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {rate.term.replace('-', ' ').replace('yr', 'Year')} {rate.rate_type} • {rate.province}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">
                                {(rate.base_rate * 100).toFixed(2)}%
                              </div>
                              {rate.prime_discount && (
                                <div className="text-sm text-muted-foreground">
                                  {rate.prime_discount}
                                </div>
                              )}
                              <Button size="sm" className="mt-2" variant={index < 2 ? "default" : "outline"}>
                                Get Quote
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        No Big 5 bank rates available at the moment. Please check back later.
                      </p>
                    </div>
                  )}
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

export default BankRates;
