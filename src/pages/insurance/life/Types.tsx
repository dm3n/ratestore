
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const LifeInsuranceTypes = () => {
  const insuranceTypes = [
    {
      title: "Term Life Insurance",
      description: "Affordable temporary coverage for specific periods",
      icon: Heart,
      link: "/insurance/life/term",
      features: ["Fixed premiums", "Specific term lengths", "Death benefit protection"]
    },
    {
      title: "Permanent Life Insurance",
      description: "Lifelong coverage with investment component",
      icon: Shield,
      link: "/insurance/life/permanent",
      features: ["Lifetime coverage", "Cash value growth", "Investment options"]
    },
    {
      title: "Group Insurance",
      description: "Employer-sponsored life insurance benefits",
      icon: Users,
      link: "/insurance/life/group",
      features: ["Group rates", "Employer benefits", "Basic coverage"]
    },
    {
      title: "Critical Illness Insurance",
      description: "Coverage for serious medical conditions",
      icon: Activity,
      link: "/insurance/life/critical-illness",
      features: ["Lump sum benefits", "Serious illness coverage", "Treatment support"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-red-50 text-red-600 border-red-200">
                Life Insurance Types
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                All Life Insurance Types
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore different types of life insurance coverage to protect your loved ones and secure your financial future.
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
                        <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center">
                          <insurance.icon className="h-8 w-8 text-red-600" />
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
                            <Shield className="h-4 w-4 text-red-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <Button className="flex-1" asChild>
                          <Link to={insurance.link}>Get Quote</Link>
                        </Button>
                        <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 bg-transparent">
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

export default LifeInsuranceTypes;
