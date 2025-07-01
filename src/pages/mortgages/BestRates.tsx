
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, TrendingDown, Clock, CheckCircle } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";

const BestRates = () => {
  const bestRates = [
    {
      lender: "Canadian Lender",
      rate: "3.84%",
      term: "5-Year Fixed",
      features: ["No application fee", "Free appraisal", "Quick approval"],
      savings: "$15,600 vs. average",
      special: "Best Overall"
    },
    {
      lender: "Alternative Lender Co.",
      rate: "3.92%",
      term: "5-Year Fixed", 
      features: ["Online application", "Fast funding", "Flexible terms"],
      savings: "$12,800 vs. average",
      special: "Best for Speed"
    },
    {
      lender: "Credit Union Plus",
      rate: "3.89%",
      term: "5-Year Fixed",
      features: ["Local service", "Relationship banking", "Competitive rates"],
      savings: "$14,200 vs. average",  
      special: "Best Service"
    }
  ];

  const whyBest = [
    {
      icon: TrendingDown,
      title: "Lowest Rates",
      description: "We track rates from 100+ lenders daily to find you the absolute best deals available."
    },
    {
      icon: Clock,
      title: "Updated Daily",
      description: "Rates change frequently. Our team updates all rates every business day at 9 AM EST."
    },
    {
      icon: CheckCircle,
      title: "Verified Offers",
      description: "Every rate shown is verified and available to qualified borrowers today."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-yellow-50 text-yellow-700 border-yellow-200">
                <Award className="h-3 w-3 mr-1" />
                Editor's Choice Awards
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Best Mortgage Rates in Canada
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our mortgage experts have reviewed hundreds of lenders to find you 
                the absolute best mortgage rates available today.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Rate Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <InteractiveRateCalculator />
            </div>
          </div>
        </section>

        {/* Best Rates Cards */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Today's Best Rates</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our top-rated mortgage products chosen by our expert team.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {bestRates.map((rate, index) => (
                  <Card key={index} className="relative border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Badge className="absolute -top-3 left-6 bg-primary text-white px-3 py-1">
                      {rate.special}
                    </Badge>
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{rate.lender}</CardTitle>
                      <div className="text-3xl font-bold text-primary mb-2">{rate.rate}</div>
                      <Badge variant="outline" className="mb-4">{rate.term}</Badge>
                      <div className="text-green-600 font-semibold">Save {rate.savings}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {rate.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Get This Rate
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why These Are Best */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why These Rates Are The Best</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our mortgage team evaluates hundreds of factors to determine the best mortgage rates for Canadians.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {whyBest.map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Best Rate?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get pre-approved in minutes and lock in today's best mortgage rates.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Get Pre-Approved
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Compare All Rates
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BestRates;
