
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, Plane, Shield, MapPin, Calculator, CheckCircle, 
  ArrowRight, Phone, DollarSign, AlertTriangle, Clock, Users
} from "lucide-react";
import { Link } from "react-router-dom";

const TravelMedicalInsurance = () => {
  const coverageFeatures = [
    {
      title: "Emergency Medical Treatment",
      description: "Coverage for unexpected medical expenses abroad",
      icon: Heart,
      amount: "Up to $5M",
      details: "Hospital stays, doctor visits, emergency surgery"
    },
    {
      title: "Medical Evacuation",
      description: "Emergency transportation to nearest facility",
      icon: Plane,
      amount: "Up to $1M",
      details: "Air ambulance, helicopter rescue, repatriation"
    },
    {
      title: "Prescription Drugs",
      description: "Coverage for emergency prescription medications",
      icon: Shield,
      amount: "Up to $10K",
      details: "Essential medications during your trip"
    }
  ];

  const destinations = [
    {
      region: "United States",
      risk: "High Cost",
      coverage: "Up to $5M recommended",
      description: "Very expensive healthcare system requires maximum coverage"
    },
    {
      region: "Europe",
      risk: "Moderate Cost",
      coverage: "Up to $2M recommended", 
      description: "Good healthcare but can be costly for non-residents"
    },
    {
      region: "Asia",
      risk: "Variable Cost",
      coverage: "Up to $2M recommended",
      description: "Healthcare quality and costs vary significantly by country"
    },
    {
      region: "Worldwide",
      risk: "High Risk",
      coverage: "Up to $5M recommended",
      description: "Maximum protection for global travel adventures"
    }
  ];

  const exclusions = [
    "Pre-existing medical conditions (unless covered)",
    "Routine medical check-ups and treatments",
    "Pregnancy-related expenses (unless emergency)",
    "Treatment for chronic conditions",
    "Mental health conditions",
    "Dental treatment (unless emergency)"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-red-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Heart className="h-4 w-4 mr-2" />
                Travel Medical Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Travel Medical
                <span className="block bg-gradient-to-r from-red-200 to-pink-200 bg-clip-text text-transparent">
                  Protection
                </span>
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Essential emergency medical coverage for travelers. Protect yourself from 
                unexpected medical expenses when traveling abroad.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Medical Coverage <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Plans <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Features */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What's Covered</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive emergency medical protection for your travels
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {coverageFeatures.map((feature, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                        <feature.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                        {feature.title}
                      </CardTitle>
                      <div className="text-2xl font-bold text-red-600 mt-2">
                        {feature.amount}
                      </div>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        {feature.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage by Destination */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage by Destination</h2>
                <p className="text-xl text-muted-foreground">
                  Different destinations require different coverage levels
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinations.map((dest, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{dest.region}</h3>
                      <div className="text-center mb-3">
                        <Badge variant="outline" className="text-xs mb-2">
                          {dest.risk}
                        </Badge>
                        <div className="text-sm font-semibold text-red-600">{dest.coverage}</div>
                      </div>
                      <p className="text-sm text-gray-600 text-center">{dest.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Not Covered */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Important Exclusions</h2>
                <p className="text-xl text-muted-foreground">
                  Understanding what's not covered helps avoid claim surprises
                </p>
              </div>
              
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8" />
                    Common Exclusions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {exclusions.map((exclusion, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{exclusion}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Tip:</strong> Always read your policy details carefully and consider 
                      purchasing coverage for pre-existing conditions if needed.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Why Travel Medical Insurance?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Avoid Huge Medical Bills</h3>
                        <p className="text-gray-600">A simple emergency room visit in the US can cost thousands</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">24/7 Emergency Assistance</h3>
                        <p className="text-gray-600">Round-the-clock support when you need help most</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Direct Pay to Hospitals</h3>
                        <p className="text-gray-600">No need to pay upfront in many cases</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Peace of Mind</h3>
                        <p className="text-gray-600">Travel with confidence knowing you're protected</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <DollarSign className="h-8 w-8" />
                        Sample Costs Without Insurance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>ER Visit (USA)</span>
                          <span className="font-bold text-red-600">$5,000 - $15,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Hospital Stay (3 days)</span>
                          <span className="font-bold text-red-600">$30,000 - $100,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Medical Evacuation</span>
                          <span className="font-bold text-red-600">$50,000 - $500,000</span>
                        </div>
                        <hr className="my-4" />
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-2">vs. Travel Medical Insurance</div>
                          <div className="text-2xl font-bold text-green-600">From $8/day</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Don't Travel Without Medical Coverage</h2>
              <p className="text-xl text-red-100 mb-8">
                Get comprehensive travel medical insurance and travel with confidence
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Medical Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
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

export default TravelMedicalInsurance;
