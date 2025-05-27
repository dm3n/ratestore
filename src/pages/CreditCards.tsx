
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Star, Gift } from "lucide-react";

const CreditCards = () => {
  const creditCards = [
    {
      name: "Chase Sapphire Preferred",
      category: "Travel Rewards",
      intro: "0% APR for 12 months",
      apr: "21.49% - 28.49%",
      bonus: "60,000 points",
      featured: true
    },
    {
      name: "Citi Double Cash",
      category: "Cash Back",
      intro: "0% APR for 18 months",
      apr: "19.24% - 29.24%",
      bonus: "2% cash back",
      featured: false
    },
    {
      name: "Capital One Venture X",
      category: "Travel Premium",
      intro: "No intro offer",
      apr: "22.24% - 29.24%",
      bonus: "75,000 miles",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Best Card Offers
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Credit Card Comparison
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Compare credit cards and find the best rewards, rates, and benefits for your spending.
              </p>
              <Button size="lg" className="gap-2">
                Find My Card <CreditCard className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Featured Credit Cards</CardTitle>
                  <CardDescription>Compare top credit card offers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Card Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Intro Offer</TableHead>
                        <TableHead>APR</TableHead>
                        <TableHead>Bonus</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {creditCards.map((card, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {card.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                              {card.name}
                            </div>
                          </TableCell>
                          <TableCell>{card.category}</TableCell>
                          <TableCell>{card.intro}</TableCell>
                          <TableCell>{card.apr}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Gift className="h-4 w-4 text-green-500" />
                              {card.bonus}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button size="sm">Apply Now</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreditCards;
