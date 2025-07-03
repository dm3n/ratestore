
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HomeInsuranceRegions = () => {
  const regions = [
    { name: "Ontario", path: "/insurance/home/ontario", description: "Comprehensive home coverage" },
    { name: "Alberta", path: "/insurance/home/alberta", description: "Weather-specific protection" },
    { name: "British Columbia", path: "/insurance/home/bc", description: "Earthquake and flood coverage" },
    { name: "Quebec", path: "/insurance/home/quebec", description: "Provincial requirements" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200">
                Regional Coverage
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Home Insurance by Region
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find home insurance coverage tailored to your province's specific requirements and risks.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {regions.map((region, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{region.name}</CardTitle>
                          <CardDescription>{region.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link to={region.path}>Get {region.name} Quote</Link>
                      </Button>
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

export default HomeInsuranceRegions;
