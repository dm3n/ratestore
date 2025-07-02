
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Promotions = () => {
  const promotions = [
    {
      title: "Welcome Bonus Offers",
      description: "Earn up to 100,000 points with qualifying purchases",
      badge: "Limited Time",
      cards: ["TD Aeroplan Visa Infinite", "RBC Avion Visa Infinite", "Scotiabank Gold American Express"]
    },
    {
      title: "First Year Free",
      description: "No annual fee for the first year on premium cards",
      badge: "Popular",
      cards: ["BMO World Elite Mastercard", "CIBC Aventura Visa Infinite", "National Bank World Mastercard"]
    },
    {
      title: "Enhanced Earn Rates",
      description: "Earn double points on all purchases for the first 6 months",
      badge: "New",
      cards: ["American Express Gold Card", "Chase Sapphire Preferred", "Capital One Venture"]
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
                Top Credit Card Promotions
              </h1>
              <p className="text-lg text-muted-foreground">
                Don't miss out on these limited-time offers from Canada's top credit card issuers
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {promotions.map((promo, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{promo.title}</CardTitle>
                      <Badge variant="outline">{promo.badge}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {promo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Featured Cards:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {promo.cards.map((card, cardIndex) => (
                            <li key={cardIndex}>{card}</li>
                          ))}
                        </ul>
                      </div>
                      <Button>View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Promotions;
