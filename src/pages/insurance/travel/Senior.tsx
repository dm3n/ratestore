
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, Heart, Shield, Plane, Clock, CheckCircle, 
  ArrowRight, Phone, DollarSign, AlertTriangle, MapPin, Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const SeniorTravelInsurance = () => {
  const seniorFeatures = [
    {
      title: "Pre-existing Condition Coverage",
      description: "Coverage for stable medical conditions with proper disclosure",
      icon: Heart,
      highlight: "Most important feature"
    },
    {
      title: "Higher Medical Limits",
      description: "Increased coverage limits recognizing senior health needs",
      icon: Shield,
      highlight: "Up to $5M coverage"
    },
    {
      title: "Trip Cancellation",
      description: "Enhanced trip cancellation benefits for senior-specific reasons",
      icon: Plane,
      highlight: "100% trip cost coverage"
    }
  ];

  const ageGroups = [
    {
      age: "65-69 Years",
      considerations: ["Pre-existing condition disclosure", "Medical stability requirements", "Affordable premiums"],
      avgCost: "From $35/trip"
    },
    {
      age: "70-74 Years", 
      considerations: ["Enhanced medical coverage", "Longer trip duration options", "Family emergency coverage"],
      avgCost: "From $55/trip"
    },
    {
      age: "75-79 Years",
      considerations: ["Comprehensive medical screening", "Higher coverage limits", "Extended coverage periods"],
      avgCost: "From $85/trip"
    },
    {
      age: "80+ Years",
      considerations: ["Specialized senior policies", "Medical assessment required", "Premium coverage options"],
      avgCost: "From $125/trip"
    }
  ];

  const specialConsiderations = [
    {
      title: "Medical Stability Period",
      description: "Typically requires 90-180 days of stable health before departure",
      icon: Clock,
      tip: "Keep detailed medical records"
    },
    {
      title: "Pre-existing Conditions",
      description: "Must be declared and stable for coverage to apply",
      icon: Heart,
      tip: "Full disclosure is essential"
    },
    {
      title: "Trip Duration Limits",
      description: "Some policies limit trip length for seniors (e.g., 30-90 days)",
      icon: Calendar,
      tip: "Check maximum trip duration"
    }
  ];

  const destinations = [
    {
      region: "Cruise Travel",
      description: "Popular with seniors, requires comprehensive medical coverage",
      coverage: "Medical + evacuation essential",
      considerations: ["Ship medical facilities limited", "Port country coverage", "Medical evacuation by air"]
    },
    {
      region: "European Tours",
      description: "Group tours popular with senior travelers",
      coverage: "Trip interruption important",
      considerations: ["Pre-existing condition coverage", "Trip cancellation for illness", "Baggage protection"]
    },
    {
      region: "Snowbird Destinations",
      description: "Extended stays in warmer climates",
      coverage: "Multi-trip or extended policies",
      considerations: ["Long-term medical coverage", "Prescription drug coverage", "Return home coverage"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Users className="h-4 w-4 mr-2" />
                Senior Travel Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Senior Travel
                <span className="block bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  Insurance
                </span>
              </h1>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Specialized travel insurance designed for travelers 65 and older. 
                Comprehensive coverage with pre-existing condition benefits and enhanced medical protection.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Senior Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Plans <Shield className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Senior-Specific Features */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Senior Travel Insurance Features</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Tailored coverage addressing the unique needs of senior travelers
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {seniorFeatures.map((feature, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                        <feature.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                        {feature.title}
                      </CardTitle>
                      <div className="text-lg font-bold text-emerald-600 mt-2">
                        {feature.highlight}
                      </div>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage by Age Group */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-emerald-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage by Age Group</h2>
                <p className="text-xl text-muted-foreground">
                  Different age groups have different requirements and considerations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {ageGroups.map((group, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{group.age}</CardTitle>
                        <div className="text-xl font-bold text-emerald-600">{group.avgCost}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {group.considerations.map((consideration, considerationIndex) => (
                          <li key={considerationIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Special Considerations */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Important Considerations for Seniors</h2>
                <p className="text-xl text-muted-foreground">
                  Key factors that affect senior travel insurance coverage
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {specialConsiderations.map((consideration, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <consideration.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{consideration.title}</h3>
                      <p className="text-gray-600 mb-4">{consideration.description}</p>
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <p className="text-sm text-emerald-800">
                          <strong>Tip:</strong> {consideration.tip}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Senior Destinations */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-emerald-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Popular Senior Travel Destinations</h2>
                <p className="text-xl text-muted-foreground">
                  Special coverage considerations for popular senior travel choices
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {destinations.map((dest, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-lg">{dest.region}</CardTitle>
                      <CardDescription className="text-sm">
                        {dest.description}
                      </CardDescription>
                      <Badge variant="outline" className="text-emerald-600 w-fit mt-2">
                        {dest.coverage}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {dest.considerations.map((consideration, considerationIndex) => (
                          <li key={considerationIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8" />
                    Important Information for Seniors
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Age Limits</h4>
                        <p className="text-gray-600">Some insurers have maximum age limits (typically 85-90 years)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Medical Questionnaire</h4>
                        <p className="text-gray-600">Detailed health questions required for coverage approval</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Premium Costs</h4>
                        <p className="text-gray-600">Costs increase with age and may vary significantly by health status</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Travel with Confidence at Any Age</h2>
              <p className="text-xl text-emerald-100 mb-8">
                Get specialized senior travel insurance designed for your unique needs
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Senior Quote <ArrowRight className="ml-2 h-5 w-5" />
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

export default SeniorTravelInsurance;
