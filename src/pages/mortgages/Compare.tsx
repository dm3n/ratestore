
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
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 lg:py-28">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="container relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header Content */}
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Compare All Rates
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Compare Mortgage Rates
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                  Discover Canada's most competitive mortgage rates. Compare by lender, province, 
                  and rate type to secure your perfect mortgage deal.
                </p>
              </div>

              {/* Rate Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-primary mb-2 animate-fade-in">3.84%</div>
                    <div className="text-sm text-muted-foreground font-medium">Best 5-Year Fixed</div>
                    <div className="mt-3 text-xs text-primary/70">Starting from</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-primary mb-2 animate-fade-in">3.95%</div>
                    <div className="text-sm text-muted-foreground font-medium">Best 5-Year Variable</div>
                    <div className="mt-3 text-xs text-primary/70">Starting from</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-primary mb-2 animate-fade-in">4.12%</div>
                    <div className="text-sm text-muted-foreground font-medium">Best 3-Year Fixed</div>
                    <div className="mt-3 text-xs text-primary/70">Starting from</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-muted/20 to-muted/10 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-primary mb-2 animate-fade-in">4.79%</div>
                    <div className="text-sm text-muted-foreground font-medium">Best Bank Rate</div>
                    <div className="mt-3 text-xs text-primary/70">Starting from</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="inline-flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Updated daily</span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>Best rates guaranteed</span>
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
