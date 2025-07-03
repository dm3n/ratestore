
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, CheckCircle, ArrowRight, Star, Phone, AlertCircle,
  Building, Users, FileText, TrendingUp, Award, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const General = () => {
  const coverageTypes = [
    {
      title: "Bodily Injury Liability",
      description: "Protection when someone is injured on your business premises",
      icon: Shield,
      features: ["Medical expenses coverage", "Lost wages compensation", "Pain and suffering claims"]
    },
    {
      title: "Property Damage Liability",
      description: "Coverage for damage to third-party property",
      icon: Building,
      features: ["Accidental damage coverage", "Equipment protection", "Premises liability"]
    },
    {
      title: "Personal & Advertising Injury",
      description: "Protection against non-physical injury claims",
      icon: FileText,
      features: ["Libel and slander", "Copyright infringement", "False advertising claims"]
    },
    {
      title: "Medical Payments",
      description: "Immediate medical expense coverage for injured parties",
      icon: Users,
      features: ["No-fault coverage", "Quick claim processing", "Goodwill protection"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Broad coverage for most common business liability risks"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Affordable premiums with significant coverage limits"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Confidence to expand knowing you're protected"
    },
    {
      icon: Award,
      title: "Industry Standard",
      description: "Meet client and contract requirements"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20">
                <Shield className="h-4 w-4 mr-2" />
                General Liability Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                General Liability
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Insurance
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Protect your business from third-party claims with comprehensive general liability coverage. 
                Essential protection for every Canadian business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/business/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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

        {/* Coverage Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What's Covered</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive protection against common business liability risks
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coverageTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <type.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
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

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why You Need General Liability</h2>
                <p className="text-xl text-muted-foreground">
                  Essential protection for every business owner
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Get Protected Today</h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't wait for an incident to happen. Get general liability insurance and protect your business now.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                <Link to="/insurance/business/quotes">
                  Get Your Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default General;
