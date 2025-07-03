
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, Calendar, DollarSign, Clock, AlertTriangle, CheckCircle, 
  ArrowRight, Phone, MapPin, Users, Plane, Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const TripCancellationInsurance = () => {
  const coverageReasons = [
    {
      category: "Medical Emergencies",
      icon: Heart,
      reasons: [
        "Sudden illness or injury",
        "Death of family member",
        "Medical quarantine",
        "Doctor-advised not to travel"
      ]
    },
    {
      category: "Travel Disruptions", 
      icon: Plane,
      reasons: [
        "Severe weather conditions",
        "Natural disasters",
        "Airline strikes or bankruptcy",
        "Terrorist incidents"
      ]
    },
    {
      category: "Personal Emergencies",
      icon: Users,
      reasons: [
        "Job loss or termination",
        "Court summons or jury duty",
        "Home becomes uninhabitable",
        "Military deployment"
      ]
    }
  ];

  const coverageTypes = [
    {
      title: "Trip Cancellation",
      description: "Reimburses non-refundable trip costs if you cancel before departure",
      coverage: "Up to 100% of trip cost",
      when: "Before you leave"
    },
    {
      title: "Trip Interruption",
      description: "Covers costs if your trip is cut short after departure",
      coverage: "Up to 150% of trip cost",
      when: "During your trip"
    },
    {
      title: "Cancel For Any Reason",
      description: "Ultimate flexibility - cancel for any reason and get partial reimbursement",
      coverage: "Up to 75% of trip cost",
      when: "Premium upgrade option"
    }
  ];

  const scenarios = [
    {
      title: "Last-Minute Illness",
      cost: "$5,000 European vacation",
      scenario: "You get sick 2 days before your cruise departure",
      outcome: "Insurance reimburses your non-refundable costs",
      saved: "$4,200"
    },
    {
      title: "Flight Delays",
      cost: "$3,500 business trip", 
      scenario: "Severe weather cancels flights, you miss important meetings",
      outcome: "Coverage for additional accommodation and rescheduling",
      saved: "$800"
    },
    {
      title: "Family Emergency",
      cost: "$8,000 honeymoon",
      scenario: "Parent hospitalized day before departure",
      outcome: "Full reimbursement of non-refundable expenses",
      saved: "$7,200"
    }
  ];

  const whenToBuy = [
    {
      timing: "Within 7-21 Days",
      benefit: "Pre-existing condition coverage",
      description: "Coverage for medical conditions that existed before purchase"
    },
    {
      timing: "Within 14 Days", 
      benefit: "Cancel for any reason upgrade",
      description: "Option to add CFAR coverage for maximum flexibility"
    },
    {
      timing: "Before Final Payment",
      benefit: "Financial default coverage",
      description: "Protection if tour operator or airline goes bankrupt"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-orange-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2" />
                Trip Cancellation Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Trip Cancellation
                <span className="block bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                  Protection
                </span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Protect your travel investment from unexpected cancellations and interruptions. 
                Get reimbursed for non-refundable trip costs when life happens.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Protect My Trip <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Calculate Cost <DollarSign className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Types of Trip Protection</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Different coverage options for various travel scenarios
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {coverageTypes.map((type, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                        <Shield className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                        {type.title}
                      </CardTitle>
                      <div className="text-lg font-bold text-orange-600 mt-2">
                        {type.coverage}
                      </div>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="outline" className="text-orange-600">
                        {type.when}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Covered Reasons */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What's Covered</h2>
                <p className="text-xl text-muted-foreground">
                  Common reasons for trip cancellation and interruption
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {coverageReasons.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <category.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.reasons.map((reason, reasonIndex) => (
                          <li key={reasonIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{reason}</span>
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

        {/* Real Scenarios */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Real-Life Scenarios</h2>
                <p className="text-xl text-muted-foreground">
                  See how trip cancellation insurance helps in real situations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {scenarios.map((scenario, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{scenario.title}</CardTitle>
                      <div className="text-2xl font-bold text-orange-600">{scenario.cost}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Situation:</h4>
                          <p className="text-sm text-gray-600">{scenario.scenario}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Insurance Response:</h4>
                          <p className="text-sm text-gray-600">{scenario.outcome}</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">Saved: {scenario.saved}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* When to Buy */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">When to Buy Trip Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Timing matters for maximum benefits and coverage
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whenToBuy.map((timing, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{timing.timing}</h3>
                      <div className="text-center mb-3">
                        <Badge variant="outline" className="text-orange-600 mb-2">
                          {timing.benefit}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 text-center">{timing.description}</p>
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
                    Important Coverage Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Pre-existing Conditions</h4>
                        <p className="text-gray-600">Must purchase within 7-21 days of initial trip deposit for coverage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Cancel For Any Reason (CFAR)</h4>
                        <p className="text-gray-600">Must be purchased within 14 days and covers 75% of non-refundable costs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Coverage Limits</h4>
                        <p className="text-gray-600">Maximum coverage typically ranges from $10,000 to $100,000 per person</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Don't Risk Your Travel Investment</h2>
              <p className="text-xl text-orange-100 mb-8">
                Protect your trip costs with comprehensive cancellation and interruption coverage
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/travel/quotes">
                    Get Trip Protection <ArrowRight className="ml-2 h-5 w-5" />
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

export default TripCancellationInsurance;
