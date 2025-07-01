
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, TrendingDown, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const fixedTerms = [
    {
      term: "2-Year Fixed",
      rate: "4.25%",
      href: "/mortgages/2-year-fixed",
      description: "Short-term stability with flexibility to renew soon",
      pros: ["Lower rate than longer terms", "Quick renewal opportunity"],
      bestFor: "Rate optimization"
    },
    {
      term: "3-Year Fixed",
      rate: "4.12%",
      href: "/mortgages/3-year-fixed",
      description: "Balanced term with moderate rate protection",
      pros: ["Competitive rates", "Medium-term stability"],
      bestFor: "Balanced approach"
    },
    {
      term: "5-Year Fixed",
      rate: "3.84%",
      href: "/mortgages/5-year-fixed",
      description: "Most popular term with excellent rate stability",
      pros: ["Lowest rates available", "Long-term predictability"],
      bestFor: "Rate security",
      popular: true
    }
  ];

  const variableTerms = [
    {
      term: "3-Year Variable",
      rate: "4.18%",
      href: "/mortgages/3-year-variable",
      description: "Short-term variable with potential rate benefits",
      pros: ["Potential rate decreases", "Shorter commitment"],
      bestFor: "Rate flexibility"
    },
    {
      term: "5-Year Variable",
      rate: "3.95%",
      href: "/mortgages/5-year-variable",
      description: "Long-term variable with competitive starting rates",
      pros: ["Lower starting rate", "Rate decrease potential"],
      bestFor: "Risk tolerance",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-green-100 text-green-700 border-green-200">
                <Clock className="h-3 w-3 mr-1" />
                All Mortgage Terms
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Mortgage Terms & Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Choose the right mortgage term for your situation. Compare fixed and variable 
                rates across different term lengths to find your ideal mortgage.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">3.84%</div>
                  <div className="text-sm text-muted-foreground">Best Fixed Rate</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">3.95%</div>
                  <div className="text-sm text-muted-foreground">Best Variable Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed Rate Terms */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h2 className="text-3xl font-bold">Fixed Rate Mortgages</h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Lock in your rate for predictable payments and protection against rate increases
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {fixedTerms.map((term) => (
                  <Card key={term.term} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-200 ${term.popular ? 'ring-2 ring-blue-200' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={term.popular ? "default" : "outline"} className="text-xs">
                          {term.popular ? "Most Popular" : "Fixed Rate"}
                        </Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{term.rate}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <CardDescription className="text-sm">
                        {term.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Benefits:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {term.pros.map((pro, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-green-500"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground mb-3">
                          <strong>Best for:</strong> {term.bestFor}
                        </p>
                        <Button className="w-full" variant={term.popular ? "default" : "outline"} asChild>
                          <Link to={term.href}>View {term.term} Rates</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Variable Rate Terms */}
        <section className="py-16 bg-primary/5">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <h2 className="text-3xl font-bold">Variable Rate Mortgages</h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Take advantage of potential rate decreases with variable rate mortgages
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                {variableTerms.map((term) => (
                  <Card key={term.term} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-200 ${term.popular ? 'ring-2 ring-green-200' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={term.popular ? "default" : "outline"} className={`text-xs ${term.popular ? 'bg-green-600' : ''}`}>
                          {term.popular ? "Popular Choice" : "Variable Rate"}
                        </Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{term.rate}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <CardDescription className="text-sm">
                        {term.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Benefits:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {term.pros.map((pro, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-green-500"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground mb-3">
                          <strong>Best for:</strong> {term.bestFor}
                        </p>
                        <Button className="w-full" variant={term.popular ? "default" : "outline"} asChild>
                          <Link to={term.href}>View {term.term} Rates</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Not Sure Which Term to Choose?</CardTitle>
                  <CardDescription className="text-base">
                    Our mortgage experts can help you choose the right term based on your financial situation and goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Fixed Rate If:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• You want payment certainty</li>
                        <li>• You expect rates to rise</li>
                        <li>• You're risk-averse</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Variable Rate If:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• You expect rates to fall</li>
                        <li>• You can handle payment changes</li>
                        <li>• You want flexibility</li>
                      </ul>
                    </div>
                  </div>
                  <Button size="lg">
                    Get Expert Advice
                  </Button>
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

export default Terms;
