
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plane, Heart, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const TravelInsuranceTypes = () => {
  const insuranceTypes = [
    {
      title: "Single Trip Insurance",
      description: "Coverage for individual trips and vacations",
      icon: Plane,
      link: "/insurance/travel/single-trip",
      features: ["Trip-specific coverage", "Medical emergencies", "Trip cancellation"]
    },
    {
      title: "Multi-Trip Insurance",
      description: "Annual coverage for frequent travelers",
      icon: Calendar,
      link: "/insurance/travel/multi-trip",
      features: ["Annual coverage", "Multiple trips", "Cost-effective for frequent travel"]
    },
    {
      title: "Travel Medical Insurance",
      description: "Emergency medical coverage while traveling",
      icon: Heart,
      link: "/insurance/travel/medical",
      features: ["Emergency medical", "Hospital coverage", "Medical evacuation"]
    },
    {
      title: "Group Travel Insurance",
      description: "Coverage for families and group travelers",
      icon: Users,
      link: "/insurance/travel/group",
      features: ["Group discounts", "Family coverage", "Multiple travelers"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-600 border-purple-200">
                Travel Insurance Types
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                All Travel Insurance Types
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find the right travel insurance coverage for your trips, whether domestic or international.
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
                        <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center">
                          <insurance.icon className="h-8 w-8 text-purple-600" />
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
                            <Plane className="h-4 w-4 text-purple-500" />
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

export default TravelInsuranceTypes;
