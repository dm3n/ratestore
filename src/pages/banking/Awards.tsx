
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Star, TrendingUp, Shield, Award, Users, CreditCard, PiggyBank, Building2, Smartphone } from "lucide-react";

const BankingAwards = () => {
  const awards = [
    {
      category: "Best Overall Bank",
      winner: "RBC Royal Bank",
      description: "Outstanding overall banking experience with comprehensive services",
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      features: ["Branch Network", "Digital Services", "Customer Support", "Product Range"],
      color: "yellow"
    },
    {
      category: "Best Digital Banking",
      winner: "Tangerine Bank",
      description: "Leading mobile and online banking platform with innovative features",
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      features: ["Mobile App", "User Experience", "Digital Features", "24/7 Access"],
      color: "blue"
    },
    {
      category: "Best High-Interest Savings",
      winner: "EQ Bank",
      description: "Consistently high rates with no minimum balance requirements",
      icon: <PiggyBank className="h-8 w-8 text-green-600" />,
      features: ["5.25% Interest Rate", "No Fees", "No Minimum", "CDIC Insured"],
      color: "green"
    },
    {
      category: "Best Credit Card Program",
      winner: "American Express",
      description: "Superior rewards program and premium cardholder benefits",
      icon: <CreditCard className="h-8 w-8 text-purple-600" />,
      features: ["Rewards Rate", "Travel Benefits", "Insurance", "Customer Service"],
      color: "purple"
    },
    {
      category: "Best Customer Service",
      winner: "TD Canada Trust",
      description: "Exceptional customer support across all channels",
      icon: <Users className="h-8 w-8 text-red-600" />,
      features: ["Response Time", "Problem Resolution", "Staff Training", "Availability"],
      color: "red"
    },
    {
      category: "Best Business Banking",
      winner: "Scotiabank",
      description: "Comprehensive business solutions for small to large enterprises",
      icon: <Building2 className="h-8 w-8 text-indigo-600" />,
      features: ["Business Loans", "Cash Management", "Trade Finance", "Advisory Services"],
      color: "indigo"
    }
  ];

  const methodology = [
    {
      title: "Rate Analysis",
      description: "Interest rates, fees, and pricing structures",
      weight: "25%"
    },
    {
      title: "Digital Experience",
      description: "Mobile apps, online banking, and digital features",
      weight: "20%"
    },
    {
      title: "Customer Service",
      description: "Support quality, response times, and satisfaction",
      weight: "20%"
    },
    {
      title: "Product Range",
      description: "Variety and quality of banking products",
      weight: "15%"
    },
    {
      title: "Accessibility",
      description: "Branch networks, ATMs, and service availability",
      weight: "10%"
    },
    {
      title: "Innovation",
      description: "New features, technology adoption, and forward-thinking",
      weight: "10%"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-yellow-500 rounded-full">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
              </div>
              <Badge variant="outline" className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
                <Award className="h-3 w-3 mr-1" />
                2025 Winners Announced
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Personal Finance Awards 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Recognizing Canada's best banking products, services, and institutions based on comprehensive analysis and customer feedback.
              </p>
              <Button size="lg" className="gap-2 bg-yellow-600 hover:bg-yellow-700">
                <Star className="h-5 w-5" />
                View All Winners
              </Button>
            </div>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">2025 Award Winners</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Based on rigorous analysis of rates, fees, customer service, and innovation
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {awards.map((award, index) => (
                  <Card key={index} className={`border-2 border-${award.color}-200 bg-gradient-to-br from-white to-${award.color}-50 relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-${award.color}-500 transform rotate-45 translate-x-8 -translate-y-8`}></div>
                    <Badge className={`absolute top-4 right-4 bg-${award.color}-500 text-white`}>
                      Winner
                    </Badge>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        {award.icon}
                        <div>
                          <CardTitle className="text-lg">{award.category}</CardTitle>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary">{award.winner}</div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base">
                        {award.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Key Strengths:</div>
                        <div className="flex flex-wrap gap-1">
                          {award.features.map((feature, i) => (
                            <Badge key={i} variant="outline" className={`text-xs border-${award.color}-300 text-${award.color}-700`}>
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className={`w-full mt-4 bg-${award.color}-600 hover:bg-${award.color}-700`} size="sm">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
                <p className="text-lg text-muted-foreground">
                  How we evaluate and rank Canada's financial institutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {methodology.map((item, index) => (
                  <Card key={index} className="bg-white">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="text-lg font-bold text-primary">{item.weight}</div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="mt-1">{item.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Award Analysis</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Institutions Evaluated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Products Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Customer Reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-muted-foreground">Key Categories</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Banking Partner</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Use our comparison tools to find the best banking products for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <PiggyBank className="h-5 w-5" />
                  Compare Savings Accounts
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <CreditCard className="h-5 w-5" />
                  Find Credit Cards
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

export default BankingAwards;
