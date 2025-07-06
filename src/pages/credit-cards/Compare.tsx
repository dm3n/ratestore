
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, TrendingUp, Calculator, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CompareCreditCards = () => {
  const creditCards = [
    {
      name: "TD Cash Back Visa Infinite",
      issuer: "TD Bank",
      annualFee: 120,
      cashbackRate: "3% on gas, grocery & recurring payments",
      welcomeBonus: "$200 cash back",
      rating: 4.5,
      featured: true
    },
    {
      name: "Scotiabank Gold American Express",
      issuer: "Scotiabank",
      annualFee: 120,
      cashbackRate: "5x points on gas, grocery & dining",
      welcomeBonus: "30,000 points",
      rating: 4.3,
      featured: false
    },
    {
      name: "RBC Avion Visa Infinite",
      issuer: "RBC",
      annualFee: 120,
      cashbackRate: "1.25x points on all purchases",
      welcomeBonus: "35,000 points",
      rating: 4.2,
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
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <CreditCard className="h-3 w-3 mr-1" />
                Compare All Cards
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Compare Credit Cards
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Find the perfect credit card by comparing features, rewards, and benefits side by side.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/card-finder">
                  Find My Card <Calculator className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Credit Card Comparison</CardTitle>
                  <CardDescription>Compare the best credit cards available in Canada</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Card</TableHead>
                        <TableHead>Annual Fee</TableHead>
                        <TableHead>Rewards</TableHead>
                        <TableHead>Welcome Bonus</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {creditCards.map((card, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {card.featured && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                              <div>
                                <div className="font-medium">{card.name}</div>
                                <div className="text-sm text-muted-foreground">{card.issuer}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>${card.annualFee}</TableCell>
                          <TableCell>{card.cashbackRate}</TableCell>
                          <TableCell>{card.welcomeBonus}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              {card.rating}/5
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" asChild>
                              <Link to="/contact">Apply Now</Link>
                            </Button>
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

export default CompareCreditCards;
