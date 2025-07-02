
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Shield } from "lucide-react";

const OntarioHomeInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200">
                Ontario Home Insurance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Ontario Home Insurance Quotes
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Protect your Ontario home with comprehensive insurance coverage from trusted providers.
              </p>
              <Button size="lg" className="gap-2">
                Get Ontario Quote <Shield className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OntarioHomeInsurance;
