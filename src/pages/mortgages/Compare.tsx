
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, MapPin, Award, Clock, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const Compare = () => {
  const comparisonCategories = [
    {
      title: "Best Rates",
      icon: Award,
      description: "Find the lowest mortgage rates available in Canada",
      href: "/mortgages/best-rates",
      badge: "Most Popular",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Bank Rates",
      icon: Building2,
      description: "Compare rates from Canada's Big 5 banks",
      href: "/mortgages/bank-rates",
      badge: "Traditional",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Renewal Rates",
      icon: TrendingUp,
      description: "Special rates for mortgage renewals",
      href: "/mortgages/renewal-rates",
      badge: "Renewal",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "HELOC Rates",
      icon: Calculator,
      description: "Home Equity Line of Credit rates",
      href: "/mortgages/heloc",
      badge: "Flexible",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const provincialRates = [
    {
      province: "Ontario",
      href: "/mortgages/ontario",
      bestRate: "3.86%",
      description: "Credit unions and regional lenders"
    },
    {
      province: "British Columbia",
      href: "/mortgages/bc",
      bestRate: "3.92%",
      description: "Vancouver credit unions and BC lenders"
    },
    {
      province: "Alberta",
      href: "/mortgages/alberta",
      bestRate: "3.89%",
      description: "Calgary and Edmonton lenders"
    },
    {
      province: "Quebec",
      href: "/mortgages/quebec",
      bestRate: "3.94%",
      description: "Desjardins and local credit unions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                Compare All Rates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Compare Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Find and compare the best mortgage rates in Canada. Compare by rate type, 
                lender, province, and special programs to find your perfect mortgage.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">3.84%</div>
                    <div className="text-xs text-muted-foreground">Best 5-Year Fixed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3.95%</div>
                    <div className="text-xs text-muted-foreground">Best 5-Year Variable</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4.12%</div>
                    <div className="text-xs text-muted-foreground">Best 3-Year Fixed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4.79%</div>
                    <div className="text-xs text-muted-foreground">Best Bank Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Comparison Categories */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Compare by Category</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {comparisonCategories.map((category) => (
                  <Card key={category.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                          <category.icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <Link to={category.href}>Compare {category.title}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Provincial Rates */}
        <section className="py-16 bg-primary/5">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Compare by Province</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find the best local rates and credit union offers in your province
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {provincialRates.map((province) => (
                  <Card key={province.province} className="border-0 shadow-sm hover:shadow-md transition-all duration-200">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{province.province}</CardTitle>
                            <CardDescription>{province.description}</CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{province.bestRate}</div>
                          <div className="text-xs text-muted-foreground">Best Rate</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={province.href}>View {province.province} Rates</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Historical Rates */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Historical Mortgage Rates</CardTitle>
                  <CardDescription className="text-base">
                    Track rate trends and see how current rates compare to historical averages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" asChild>
                    <Link to="/mortgages/historical">View Historical Data</Link>
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

export default Compare;
