
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Shield, MapPin } from "lucide-react";

const TorontoAutoInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Toronto Auto Insurance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Toronto Car Insurance Quotes
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find competitive auto insurance rates specifically for Toronto drivers. 
                Compare quotes and save on your car insurance.
              </p>
              <Button size="lg" className="gap-2">
                Get Toronto Quote <MapPin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Toronto-Specific Coverage</h2>
              <p className="text-center text-muted-foreground mb-8">
                Urban driving in Toronto requires specialized insurance considerations
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TorontoAutoInsurance;
