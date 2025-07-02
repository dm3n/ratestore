
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Shield } from "lucide-react";

const AlbertaAutoInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Alberta Auto Insurance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Alberta Car Insurance Quotes
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Compare auto insurance rates from Alberta's top providers and find the best coverage for your needs.
              </p>
              <Button size="lg" className="gap-2">
                Get Alberta Quote <Shield className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AlbertaAutoInsurance;
