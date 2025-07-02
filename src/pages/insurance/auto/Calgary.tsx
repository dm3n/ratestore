
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const CalgaryAutoInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Calgary Auto Insurance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Calgary Car Insurance Quotes
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find the best auto insurance rates for Calgary drivers with competitive quotes from top providers.
              </p>
              <Button size="lg" className="gap-2">
                Get Calgary Quote <MapPin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalgaryAutoInsurance;
