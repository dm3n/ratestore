
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Shield, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const OntarioAutoInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Ontario Auto Insurance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Ontario Car Insurance Quotes
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find the best auto insurance rates in Ontario. Compare quotes from top providers 
                and save on your car insurance premium.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Get Ontario Quote <Shield className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Compare Rates <Calculator className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Ontario Auto Insurance Coverage</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Car className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Mandatory Coverage</CardTitle>
                    <CardDescription>
                      Required minimum coverage for all Ontario drivers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Optional Coverage</CardTitle>
                    <CardDescription>
                      Additional protection options for comprehensive coverage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Explore Options
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Rate Calculator</CardTitle>
                    <CardDescription>
                      Calculate your estimated Ontario auto insurance premium.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Calculate Now
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

export default OntarioAutoInsurance;
