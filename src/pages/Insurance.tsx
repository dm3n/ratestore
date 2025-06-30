
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Car, Home, Heart, Plane, Briefcase, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const Insurance = () => {
  const insuranceTypes = [
    {
      title: "Auto Insurance",
      description: "Protect your vehicle and yourself on the road",
      icon: Car,
      color: "blue",
      features: ["Collision coverage", "Liability protection", "Comprehensive coverage"],
      link: "/insurance/auto"
    },
    {
      title: "Home Insurance",
      description: "Safeguard your home and belongings",
      icon: Home,
      color: "green",
      features: ["Property protection", "Contents coverage", "Liability insurance"],
      link: "/insurance/home"
    },
    {
      title: "Life Insurance",
      description: "Financial security for your loved ones",
      icon: Heart,
      color: "red",
      features: ["Term life insurance", "Permanent coverage", "Critical illness"],
      link: "/insurance/life"
    },
    {
      title: "Travel Insurance",
      description: "Stay protected during your travels",
      icon: Plane,
      color: "purple",
      features: ["Medical coverage", "Trip cancellation", "Emergency evacuation"],
      link: "/insurance/travel"
    },
    {
      title: "Business Insurance",
      description: "Comprehensive protection for your business",
      icon: Briefcase,
      color: "orange",
      features: ["General liability", "Professional liability", "Property insurance"],
      link: "/insurance/business"
    }
  ];

  const provinces = [
    "Ontario", "British Columbia", "Alberta", "Quebec", "Manitoba", 
    "Saskatchewan", "Nova Scotia", "New Brunswick", "Newfoundland", "PEI"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-600 border-purple-200">
                Compare insurance across all provinces
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Find the Right Insurance Coverage
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Compare auto, home, life, travel, and business insurance from Canada's 
                top providers. Get quotes and find the perfect coverage for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Get Insurance Quote <Shield className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Compare Providers <Calculator className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Insurance Coverage Options</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {insuranceTypes.map((insurance, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`bg-${insurance.color}-100 w-16 h-16 rounded-lg flex items-center justify-center`}>
                          <insurance.icon className={`h-8 w-8 text-${insurance.color}-600`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{insurance.title}</CardTitle>
                          <CardDescription className="text-base">
                            {insurance.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {insurance.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <Shield className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <Button className="flex-1" asChild>
                          <Link to={insurance.link}>Get Quote</Link>
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Province Selection */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Insurance by Province</h2>
              <p className="text-center text-muted-foreground mb-12">
                Get location-specific insurance quotes and information
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {provinces.map((province, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-12 text-sm hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link to={`/insurance/${province.toLowerCase().replace(/\s+/g, '-')}`}>
                      {province}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Education */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Insurance Education Centre</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Car className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Auto Insurance Basics</CardTitle>
                    <CardDescription>
                      Understanding coverage types, deductibles, and how to save on premiums.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Home className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Home Insurance Guide</CardTitle>
                    <CardDescription>
                      Protecting your property, belongings, and understanding liability coverage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>Life Insurance Explained</CardTitle>
                    <CardDescription>
                      Term vs permanent life insurance and choosing the right coverage amount.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Read Guide
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

export default Insurance;
