
import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Clock, Shield, CheckCircle } from "lucide-react";
import { CardFinderForm } from "@/components/CardFinderForm";

const CardFinder = () => {
  const [showForm, setShowForm] = useState(false);

  const banks = [
    { name: "BMO", logo: "/lovable-uploads/a32376c2-10c4-4756-bf08-549605f4b43f.png" },
    { name: "Scotiabank", logo: "/lovable-uploads/177cdd56-ed4d-44e3-ba61-e877091fc7fc.png" },
    { name: "American Express", logo: "/lovable-uploads/c7b88ec9-3875-47c8-b9d8-3a212dfa80f3.png" },
    { name: "TD Canada Trust", logo: "/lovable-uploads/462c565b-4046-4c96-82a5-45dee6df21ad.png" },
    { name: "CIBC", logo: "/lovable-uploads/47f66fea-674a-4648-9d98-39c18545a233.png" },
    { name: "RBC", logo: "/lovable-uploads/2bccf949-e0b6-474a-8df9-0be5093f0717.png" }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick & Easy",
      description: "Get personalized recommendations in under 1 minute"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "No Credit Impact",
      description: "Soft credit check won't affect your credit score"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Personalized Matches",
      description: "Cards tailored to your spending habits and goals"
    }
  ];

  if (showForm) {
    return <CardFinderForm onBack={() => setShowForm(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
                CardFinder
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Find the best credit cards{" "}
                <span className="text-blue-600">without impacting your score</span>
                <span className="text-blue-600">.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                In under one minute get personalized credit card recommendations, no hard credit checks.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl"
                onClick={() => setShowForm(true)}
              >
                find my perfect card
              </Button>
            </div>
          </div>
        </section>

        {/* Bank Logos */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 opacity-60">
              {banks.map((bank, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="h-12 w-20 flex items-center justify-center">
                    <img 
                      src={bank.logo} 
                      alt={bank.name}
                      className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use CardFinder Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Why use CardFinder
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white/20 rounded-full">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-blue-100">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                How CardFinder Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tell us what you want</h3>
                  <p className="text-muted-foreground">Answer a few quick questions about your spending habits and credit goals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">We find your matches</h3>
                  <p className="text-muted-foreground">Our algorithm compares hundreds of cards to find your perfect matches</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Apply with confidence</h3>
                  <p className="text-muted-foreground">Get personalized recommendations and apply for the card that's right for you</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to find your perfect card?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of Canadians who have found their ideal credit card through CardFinder
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl"
                onClick={() => setShowForm(true)}
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardFinder;
