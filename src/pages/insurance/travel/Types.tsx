
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plane, Globe, Heart, Shield, MapPin, Calendar, 
  Users, CheckCircle, ArrowRight, Clock, AlertTriangle 
} from "lucide-react";
import { Link } from "react-router-dom";

const TravelInsuranceTypes = () => {
  const travelTypes = [
    {
      title: "Single Trip Travel Insurance",
      description: "Perfect coverage for one-time vacations and business trips",
      icon: Plane,
      link: "/insurance/travel/quotes",
      price: "From $15/trip",
      features: ["Emergency medical coverage", "Trip cancellation protection", "Baggage loss coverage", "Flight delay compensation"],
      bestFor: "Occasional travelers, vacation trips, business travel"
    },
    {
      title: "Multi-Trip Annual Plans",
      description: "Year-round protection for frequent travelers",
      icon: Globe,
      link: "/insurance/travel/quotes",
      price: "From $89/year",
      features: ["Unlimited trips per year", "Emergency medical coverage", "Trip interruption benefits", "24/7 assistance"],
      bestFor: "Frequent travelers, business professionals, snowbirds"
    },
    {
      title: "Medical-Only Coverage",
      description: "Essential emergency medical protection abroad",
      icon: Heart,
      link: "/insurance/travel/quotes",
      price: "From $8/trip",
      features: ["Emergency medical expenses", "Hospital coverage", "Medical evacuation", "Prescription drug coverage"],
      bestFor: "Budget travelers, short trips, those with other trip coverage"
    },
    {
      title: "Comprehensive Travel Plans",
      description: "Complete protection for every aspect of your trip",
      icon: Shield,
      link: "/insurance/travel/quotes",
      price: "From $45/trip",
      features: ["All-inclusive coverage", "Cancel for any reason", "Adventure sports coverage", "Rental car protection"],
      bestFor: "Luxury travel, adventure trips, expensive vacations"
    }
  ];

  const destinationTypes = [
    {
      region: "Within Canada",
      description: "Domestic travel insurance for trips within Canada",
      coverage: "Medical emergencies, trip interruption",
      price: "From $12/trip",
      features: ["Out-of-province medical", "Emergency transportation", "Trip interruption"]
    },
    {
      region: "United States",
      description: "Essential coverage for travel to the USA",
      coverage: "Up to $5M medical coverage",
      price: "From $25/trip",
      features: ["High medical limits", "Emergency evacuation", "Prescription drugs"]
    },
    {
      region: "Europe",
      description: "Comprehensive coverage for European destinations",
      coverage: "Up to $2M medical coverage",
      price: "From $35/trip",
      features: ["Schengen requirements", "24/7 assistance", "Pre-existing conditions"]
    },
    {
      region: "Worldwide",
      description: "Global coverage for international adventures",
      coverage: "Up to $5M medical coverage",
      price: "From $55/trip",
      features: ["Adventure sports", "High-risk destinations", "Evacuation coverage"]
    }
  ];

  const specialtyTypes = [
    {
      title: "Senior Travel Insurance",
      description: "Tailored coverage for travelers 65+",
      features: ["Pre-existing condition coverage", "Medical stability requirements", "Extended trip options"],
      icon: Users
    },
    {
      title: "Student Travel Plans",
      description: "Affordable coverage for student travelers",
      features: ["Budget-friendly rates", "Study abroad coverage", "Extended stay options"],
      icon: Calendar
    },
    {
      title: "Business Travel Insurance",
      description: "Corporate travel protection solutions",
      features: ["Company liability", "Equipment coverage", "Flexible cancellation"],
      icon: Shield
    },
    {
      title: "Adventure Travel Coverage",
      description: "Protection for high-risk activities",
      features: ["Extreme sports coverage", "Equipment protection", "Rescue services"],
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-purple-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Plane className="h-4 w-4 mr-2" />
                Travel Insurance Types
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Find the Perfect
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Travel Protection
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore different types of travel insurance to find the coverage that matches 
                your travel style, destination, and budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Plans <Globe className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Travel Insurance Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Types of Travel Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Choose the right coverage based on your travel frequency and needs
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {travelTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center">
                          <type.icon className="h-8 w-8 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{type.title}</CardTitle>
                            <div className="text-lg font-bold text-purple-600">{type.price}</div>
                          </div>
                          <CardDescription className="text-base mt-2">
                            {type.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-4">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-purple-50 p-3 rounded-lg mb-6">
                        <p className="text-sm text-purple-800">
                          <strong>Best for:</strong> {type.bestFor}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700" asChild>
                          <Link to={type.link}>Get Quote</Link>
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Destination-Based Coverage */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage by Destination</h2>
                <p className="text-xl text-muted-foreground">
                  Different destinations require different coverage levels and considerations
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinationTypes.map((dest, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{dest.region}</h3>
                      <p className="text-gray-600 mb-3 text-center text-sm">{dest.description}</p>
                      <div className="text-center mb-3">
                        <div className="text-sm text-gray-500 mb-1">{dest.coverage}</div>
                        <div className="text-lg font-semibold text-purple-600">{dest.price}</div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {dest.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                        <Link to="/insurance/travel/quotes">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Travel Insurance */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Specialty Travel Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Specialized coverage for specific traveler needs and situations
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {specialtyTypes.map((specialty, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <specialty.icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
                          <p className="text-gray-600 mb-4">{specialty.description}</p>
                          <ul className="space-y-2 mb-4">
                            {specialty.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                            <Link to="/insurance/travel/quotes">Get Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Considerations */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Important Travel Insurance Considerations</h2>
                <p className="text-xl text-muted-foreground">
                  Key factors to consider when choosing travel insurance
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Clock className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">When to Buy</h3>
                        <p className="text-gray-600 mb-3">
                          Purchase travel insurance within 7-21 days of your initial trip deposit for full benefits, 
                          including pre-existing condition coverage.
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Buy early for maximum benefits</li>
                          <li>• Pre-existing condition coverage window</li>
                          <li>• Cancel for any reason options</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">What's Not Covered</h3>
                        <p className="text-gray-600 mb-3">
                          Understanding exclusions is crucial to avoid claim denials. 
                          Read your policy carefully and ask questions.
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Pre-existing medical conditions (unless covered)</li>
                          <li>• High-risk activities without coverage</li>
                          <li>• Travel to restricted countries</li>
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Next Adventure?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Compare travel insurance plans and find the perfect coverage for your trip
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance">
                    View All Insurance <Shield className="ml-2 h-5 w-5" />
                  </Link>
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

export default TravelInsuranceTypes;
