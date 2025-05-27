
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CDRatesTable } from "@/components/CDRatesTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Clock } from "lucide-react";

const cdRates = [
  {
    institution: "Marcus by Goldman Sachs",
    apy: "4.50%",
    minDeposit: "$500",
    term: "12 months",
    rating: 4.8
  },
  {
    institution: "Ally Bank",
    apy: "4.35%",
    minDeposit: "$0",
    term: "12 months", 
    rating: 4.7
  },
  {
    institution: "Capital One",
    apy: "4.30%",
    minDeposit: "$0",
    term: "12 months",
    rating: 4.6
  },
  {
    institution: "Discover Bank",
    apy: "4.25%",
    minDeposit: "$2,500",
    term: "12 months",
    rating: 4.5
  },
  {
    institution: "Synchrony Bank",
    apy: "4.20%",
    minDeposit: "$0",
    term: "12 months",
    rating: 4.4
  }
];

const CDRates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Certificates of Deposit
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Best CD Rates
              </h1>
              <p className="text-lg text-muted-foreground">
                Compare certificate of deposit rates from top banks and credit unions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                <div>
                  <CDRatesTable 
                    rates={cdRates}
                    title="Top CD Rates - 12 Month Terms"
                  />
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="bg-green-50 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        CD Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>FDIC insured up to $250,000</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Fixed rates for guaranteed returns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Higher rates than savings accounts</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">CD Strategy Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p><strong>Ladder Strategy:</strong> Invest in multiple CDs with different maturity dates</p>
                        <p><strong>Rate Shopping:</strong> Compare rates from multiple institutions</p>
                        <p><strong>Penalty Awareness:</strong> Understand early withdrawal penalties</p>
                        <p><strong>Term Selection:</strong> Choose terms that match your financial goals</p>
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

export default CDRates;
