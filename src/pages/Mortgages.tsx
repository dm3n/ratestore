import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Home, TrendingUp, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Mortgages = () => {
  const bestRates = [
    { lender: "Canadian Lender", rate: "3.84%", term: "5-yr Fixed", type: "featured" },
    { lender: "Canadian Lender", rate: "3.95%", term: "5-yr Variable", type: "featured" },
    { lender: "Scotiabank", rate: "4.64%", term: "3-yr Fixed", type: "featured" },
    { lender: "TD Bank", rate: "4.12%", term: "3-yr Fixed", type: "regular" },
    { lender: "RBC", rate: "4.25%", term: "5-yr Fixed", type: "regular" },
    { lender: "BMO", rate: "4.18%", term: "5-yr Variable", type: "regular" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Compare mortgage rates from 100+ lenders
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Find the Best Mortgage Rates in Canada
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Compare rates from Canada's top banks and lenders. Get personalized quotes 
                and expert advice to find the perfect mortgage for your home purchase or renewal.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Compare Rates <TrendingUp className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Calculate Payments <Calculator className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rates */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Today's Best Mortgage Rates</h2>
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                  Updated daily
                </Badge>
              </div>
              
              <div className="grid gap-6">
                {/* Featured Rates */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {bestRates.filter(rate => rate.type === "featured").map((rate, index) => (
                    <Card key={index} className="border-2 border-primary/20 shadow-lg">
                      <CardHeader className="text-center pb-4">
                        <Badge variant="outline" className="self-center mb-2 bg-primary/10 text-primary">
                          - featured -
                        </Badge>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Home className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="font-medium">{rate.lender}</span>
                        </div>
                        <div className="text-3xl font-bold text-primary">{rate.rate}</div>
                        <div className="text-sm text-muted-foreground">{rate.term}</div>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Get Quote
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Other Competitive Rates */}
                <Card>
                  <CardHeader>
                    <CardTitle>More Competitive Rates</CardTitle>
                    <CardDescription>Additional mortgage rates from trusted lenders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bestRates.filter(rate => rate.type === "regular").map((rate, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Home className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{rate.lender}</div>
                              <div className="text-sm text-muted-foreground">{rate.term}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{rate.rate}</div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Compare
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tools and Resources */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Mortgage Tools & Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Mortgage Calculator</CardTitle>
                    <CardDescription>
                      Calculate your monthly payments and see how much you can afford.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/mortgage-calculator">Use Calculator</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Affordability Calculator</CardTitle>
                    <CardDescription>
                      Find out how much house you can afford based on your income.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/affordability">Check Affordability</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>First-Time Buyer Guide</CardTitle>
                    <CardDescription>
                      Complete guide to buying your first home in Canada.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/guides/first-time-buyer">Read Guide</Link>
                    </Button>
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

export default Mortgages;
