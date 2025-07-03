
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Plane, Shield, Calendar, Calculator, CheckCircle, 
  ArrowRight, Phone, DollarSign, Clock, Users, MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const MultiTripInsurance = () => {
  const benefits = [
    {
      title: "Unlimited Trips",
      description: "Take as many trips as you want in one year",
      icon: Globe,
      highlight: "No trip limits"
    },
    {
      title: "Cost Effective",
      description: "Save money compared to individual trip policies",
      icon: DollarSign,
      highlight: "Save up to 60%"
    },
    {
      title: "Automatic Coverage",
      description: "Every trip is automatically covered",
      icon: Shield,
      highlight: "Always protected"
    }
  ];

  const tripLengths = [
    {
      duration: "Up to 8 Days",
      price: "From $89/year",
      bestFor: "Weekend getaways, short business trips",
      features: ["Emergency medical", "Trip interruption", "Baggage coverage"]
    },
    {
      duration: "Up to 15 Days", 
      price: "From $149/year",
      bestFor: "Standard vacations, extended business travel",
      features: ["All 8-day benefits", "Extended coverage", "Higher limits"]
    },
    {
      duration: "Up to 30 Days",
      price: "From $249/year", 
      bestFor: "Extended vacations, digital nomads",
      features: ["All 15-day benefits", "Adventure sports", "Worldwide coverage"]
    },
    {
      duration: "Up to 60 Days",
      price: "From $399/year",
      bestFor: "Long-term travel, snowbirds", 
      features: ["Maximum protection", "Pre-existing conditions", "Premium benefits"]
    }
  ];

  const whoNeedsIt = [
    {
      title: "Business Travelers",
      description: "Frequent corporate trips throughout the year",
      icon: Users,
      trips: "6+ trips/year"
    },
    {
      title: "Digital Nomads",
      description: "Working remotely from different countries",
      icon: Globe,
      trips: "Multiple destinations"
    },
    {
      title: "Snowbirds",
      description: "Seasonal travelers escaping winter",
      icon: Plane,
      trips: "Regular seasonal travel"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Globe className="h-4 w-4 mr-2" />
                Multi-Trip Annual Plans
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Multi-Trip Annual
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Travel Insurance
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Perfect for frequent travelers. One policy covers unlimited trips 
                throughout the year with significant savings over single-trip coverage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Multi-Trip Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20">
                  Calculate Savings <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Choose Multi-Trip Insurance?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Designed for the modern traveler who values convenience and savings
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
                        {benefit.title}
                      </CardTitle>
                      <div className="text-lg font-bold text-indigo-600 mt-2">
                        {benefit.highlight}
                      </div>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trip Duration Options */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Choose Your Trip Length</h2>
                <p className="text-xl text-muted-foreground">
                  Coverage options based on your typical trip duration
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {tripLengths.map((option, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{option.duration}</CardTitle>
                        <div className="text-2xl font-bold text-indigo-600">{option.price}</div>
                      </div>
                      <CardDescription className="text-base">
                        {option.bestFor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                        <Link to="/insurance/travel/quotes">Get This Plan</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Multi-Trip */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Who Needs Multi-Trip Insurance?</h2>
                <p className="text-xl text-muted-foreground">
                  Perfect for different types of frequent travelers
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whoNeedsIt.map((traveler, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <traveler.icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{traveler.title}</h3>
                      <p className="text-gray-600 mb-3 text-center">{traveler.description}</p>
                      <div className="text-center">
                        <Badge variant="outline" className="text-indigo-600">
                          {traveler.trips}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Savings Comparison */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">How Much Can You Save?</h2>
                <p className="text-xl text-muted-foreground">
                  Compare multi-trip vs. individual trip policies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                    <CardTitle className="text-xl">Individual Trip Policies</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Trip 1 (7 days)</span>
                        <span>$45</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trip 2 (10 days)</span>
                        <span>$65</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trip 3 (5 days)</span>
                        <span>$35</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trip 4 (14 days)</span>
                        <span>$85</span>
                      </div>
                      <hr className="my-4" />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Annual Cost</span>
                        <span className="text-red-600">$230</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                    <CardTitle className="text-xl">Multi-Trip Annual Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Unlimited trips up to 15 days</span>
                        <span>$149</span>
                      </div>
                      <div className="text-center py-8">
                        <div className="text-3xl font-bold text-green-600 mb-2">Save $81</div>
                        <div className="text-sm text-gray-600">35% savings annually</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Bonus Benefits:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• No need to buy coverage for each trip</li>
                          <li>• Automatic coverage activation</li>
                          <li>• Consistent policy terms</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Save on Travel Insurance?</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Get year-round protection with convenient multi-trip coverage
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Multi-Trip Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Expert
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MultiTripInsurance;
