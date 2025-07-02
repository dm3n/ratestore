
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      category: "Best Overall Credit Card",
      winner: "TD Aeroplan Visa Infinite",
      icon: Trophy,
      color: "text-yellow-600",
      description: "Outstanding value with flexible rewards and comprehensive insurance coverage"
    },
    {
      category: "Best Cash Back Card",
      winner: "Tangerine Money-Back Credit Card",
      icon: Star,
      color: "text-blue-600",
      description: "Highest cash back rates in popular spending categories with no annual fee"
    },
    {
      category: "Best Travel Card",
      winner: "American Express Platinum Card",
      icon: Award,
      color: "text-purple-600",
      description: "Premium travel benefits and exclusive access to airport lounges worldwide"
    },
    {
      category: "Best No Fee Card",
      winner: "PC Financial Mastercard",
      icon: Star,
      color: "text-green-600",
      description: "Excellent rewards program with no annual fee and strong grocery rewards"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                RateStore's 2025 Credit Card Awards
              </h1>
              <p className="text-lg text-muted-foreground">
                Recognizing the best credit cards in Canada based on value, features, and customer satisfaction
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-primary border-primary">
                  Annual Awards - 2025
                </Badge>
              </div>
              
              <div className="grid gap-6">
                {awards.map((award, index) => {
                  const IconComponent = award.icon;
                  return (
                    <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-full bg-gray-100 ${award.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{award.category}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-primary">
                              {award.winner}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{award.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Awards;
