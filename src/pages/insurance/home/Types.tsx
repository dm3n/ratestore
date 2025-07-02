
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Building, Key, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HomeInsuranceTypes = () => {
  const insuranceTypes = [
    {
      title: "Homeowners Insurance",
      description: "Complete protection for your home and belongings",
      icon: Home,
      link: "/insurance/home/homeowners",
      features: ["Property coverage", "Contents protection", "Liability insurance"]
    },
    {
      title: "Tenant Insurance",
      description: "Coverage for renters and their personal belongings",
      icon: Key,
      link: "/insurance/home/tenant",
      features: ["Personal property", "Liability coverage", "Additional living expenses"]
    },
    {
      title: "Condo Insurance",
      description: "Specialized coverage for condominium owners",
      icon: Building,
      link: "/insurance/home/condo",
      features: ["Unit improvements", "Personal property", "Loss assessments"]
    },
    {
      title: "Landlord Insurance",
      description: "Protection for rental property owners",
      icon: Shield,
      link: "/insurance/home/landlord",
      features: ["Property protection", "Rental income", "Liability coverage"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200">
                Home Insurance Types
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                All Home Insurance Types
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore different types of home insurance coverage to find the perfect protection for your situation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {insuranceTypes.map((insurance, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center">
                          <insurance.icon className="h-8 w-8 text-green-600" />
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
      </main>
      
      <Footer />
    </div>
  );
};

export default HomeInsuranceTypes;
