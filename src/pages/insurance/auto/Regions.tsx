
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const AutoInsuranceRegions = () => {
  const regions = [
    { name: "Ontario", path: "/insurance/auto/ontario", description: "Comprehensive coverage options" },
    { name: "Alberta", path: "/insurance/auto/alberta", description: "Competitive provincial rates" },
    { name: "British Columbia", path: "/insurance/auto/bc", description: "ICBC and private options" },
    { name: "Quebec", path: "/insurance/auto/quebec", description: "Unique provincial system" },
    { name: "Toronto", path: "/insurance/auto/toronto", description: "Urban coverage solutions" },
    { name: "Calgary", path: "/insurance/auto/calgary", description: "City-specific rates" },
    { name: "Montreal", path: "/insurance/auto/montreal", description: "Metropolitan coverage" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Regional Coverage
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Auto Insurance by Region
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find auto insurance coverage specific to your province or city across Canada.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regions.map((region, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-blue-600" />
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

export default AutoInsuranceRegions;
