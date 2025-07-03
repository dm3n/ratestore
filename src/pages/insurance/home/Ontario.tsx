
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Home, Shield, MapPin, Calculator, CheckCircle, 
  ArrowRight, Phone, DollarSign, AlertTriangle, Users, Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const OntarioHomeInsurance = () => {
  const coverageTypes = [
    {
      title: "Dwelling Coverage",
      description: "Protects your home's structure and attached buildings",
      icon: Home,
      amount: "Replacement Cost",
      details: "Covers damage from fire, wind, hail, and other covered perils"
    },
    {
      title: "Personal Property",
      description: "Coverage for your belongings and personal items",
      icon: Shield,
      amount: "Up to 75% of dwelling",
      details: "Furniture, electronics, clothing, and other possessions"
    },
    {
      title: "Liability Protection",
      description: "Protects against lawsuits and injury claims",
      icon: Users,
      amount: "Up to $2M",
      details: "Medical expenses and legal costs for injuries on your property"
    }
  ];

  const ontarioSpecifics = [
    {
      title: "Overland Water Coverage",
      description: "Ontario homes are at risk of flooding from heavy rains and melting snow",
      icon: AlertTriangle
    },
    {
      title: "Sewer Backup Protection",
      description: "Essential coverage for basement flooding in Ontario's older cities",
      icon: Home
    },
    {
      title: "Ice Damming Coverage",
      description: "Protection against ice dam damage common in Ontario winters",
      icon: Shield
    }
  ];

  const ontarioCities = [
    "Toronto", "Ottawa", "Hamilton", "London", "Kitchener", 
    "Windsor", "Oshawa", "Barrie", "Kingston", "Peterborough"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Ontario Home Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Ontario Home Insurance
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Tailored Coverage
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Protect your Ontario home with comprehensive insurance coverage designed 
                for our unique climate and risks. Get competitive quotes from top Canadian insurers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Ontario Quote <Shield className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Rates <Calculator className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Ontario Home Insurance Coverage</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection for Ontario homeowners
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {coverageTypes.map((coverage, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <coverage.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {coverage.title}
                      </CardTitle>
                      <div className="text-lg font-bold text-blue-600 mt-2">
                        {coverage.amount}
                      </div>
                      <CardDescription className="text-base">
                        {coverage.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        {coverage.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ontario-Specific Coverage */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Ontario-Specific Coverage Options</h2>
                <p className="text-xl text-muted-foreground">
                  Additional protection for Ontario's unique climate and risks
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {ontarioSpecifics.map((item, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <item.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Ontario Cities We Serve</h2>
                <p className="text-xl text-muted-foreground">
                  Get competitive home insurance quotes across Ontario
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {ontarioCities.map((city, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow text-center">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">{city}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Ontario Homeowners Choose Us */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Why Ontario Homeowners Choose Us</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Local Expertise</h3>
                        <p className="text-gray-600">Understanding of Ontario's specific insurance requirements and risks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Multiple Insurers</h3>
                        <p className="text-gray-600">Compare quotes from top Canadian insurance companies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Weather-Specific Coverage</h3>
                        <p className="text-gray-600">Protection against Ontario's harsh winters and severe storms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Quick Claims Processing</h3>
                        <p className="text-gray-600">Fast and fair claims handling when you need it most</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <DollarSign className="h-8 w-8" />
                        Ontario Average Rates
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Detached Home</span>
                          <span className="font-bold">$1,200 - $2,500/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Townhouse</span>
                          <span className="font-bold">$900 - $1,800/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Condo</span>
                          <span className="font-bold">$400 - $800/year</span>
                        </div>
                        <hr className="my-4" />
                        <div className="text-sm text-gray-600">
                          *Rates vary based on location, coverage, and home details
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Protect Your Ontario Home Today</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized home insurance quotes designed for Ontario homeowners
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Ontario Quote <ArrowRight className="ml-2 h-5 w-5" />
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

export default OntarioHomeInsurance;
