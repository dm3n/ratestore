
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Star, Shield, Globe } from "lucide-react";

const Mastercard = () => {
  const mastercardBenefits = [
    {
      title: "World Elite Benefits",
      description: "Premium travel and lifestyle benefits",
      icon: <Star className="h-8 w-8 text-yellow-600" />
    },
    {
      title: "Global Acceptance", 
      description: "Accepted at millions of locations worldwide",
      icon: <Globe className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Security Features",
      description: "Advanced fraud protection and zero liability",
      icon: <Shield className="h-8 w-8 text-green-600" />
    }
  ];

  const popularCards = [
    "BMO CashBack World Elite Mastercard",
    "MBNA Rewards World Elite Mastercard", 
    "Capital One Aspire Travel World Elite Mastercard",
    "Rogers World Elite Mastercard"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Mastercard Network
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Mastercard Credit Cards in Canada
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover credit cards on the Mastercard network with global acceptance, premium benefits, and advanced security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Browse Mastercard Options
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/card-finder">Find My Card</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Mastercard Benefits</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {mastercardBenefits.map((benefit, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Cards Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Popular Mastercard Credit Cards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {popularCards.map((cardName, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center">
                        <CreditCard className="h-6 w-6 text-orange-600 mr-3" />
                        <CardTitle className="text-lg">{cardName}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm">View Details</Button>
                        <Button variant="outline" size="sm">Compare</Button>
                      </div>
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

export default Mastercard;
