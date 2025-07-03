
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Car, Shield, MapPin, Calculator, CheckCircle, ArrowRight, 
  Star, AlertTriangle, Clock, DollarSign, Users, Phone,
  TrendingUp, Award, Zap, Home
} from "lucide-react";
import { Link } from "react-router-dom";

const AutoInsuranceTypes = () => {
  const insuranceTypes = [
    {
      title: "Liability Coverage",
      description: "Mandatory coverage for damages to others",
      icon: Shield,
      features: ["Bodily injury coverage", "Property damage coverage", "Legal defense costs", "Required by law"],
      required: true,
      price: "From $50/month",
      coverage: "Up to $2M"
    },
    {
      title: "Collision Coverage",
      description: "Protection for your vehicle in accidents",
      icon: Car,
      features: ["Accident damage repair", "Covers at-fault accidents", "Deductible options", "Replacement value"],
      required: false,
      price: "From $30/month",
      coverage: "Actual cash value"
    },
    {
      title: "Comprehensive Coverage",
      description: "Protection against theft, vandalism, and weather",
      icon: Zap,
      features: ["Theft protection", "Weather damage", "Vandalism coverage", "Glass breakage"],
      required: false,
      price: "From $25/month",
      coverage: "Actual cash value"
    },
    {
      title: "Uninsured Motorist",
      description: "Protection when others lack adequate insurance",
      icon: Users,
      features: ["Hit-and-run coverage", "Underinsured driver protection", "Medical expenses", "Property damage"],
      required: false,
      price: "From $15/month",
      coverage: "Up to $1M"
    }
  ];

  const provinces = [
    {
      name: "Ontario",
      system: "No-fault insurance",
      minCoverage: "$200,000",
      avgCost: "$1,445/year",
      features: ["Statutory Accident Benefits", "Direct Compensation", "Uninsured Automobile"]
    },
    {
      name: "Alberta",
      system: "Tort-based system",
      minCoverage: "$200,000",
      avgCost: "$1,316/year",
      features: ["Minor injury cap", "Diagnostic treatment", "Income replacement"]
    },
    {
      name: "British Columbia",
      system: "No-fault (ICBC)",
      minCoverage: "$200,000",
      avgCost: "$1,832/year",
      features: ["Enhanced Care", "Optional coverage", "Roadside assistance"]
    },
    {
      name: "Quebec",
      system: "Hybrid system",
      minCoverage: "$50,000",
      avgCost: "$717/year",
      features: ["SAAQ coverage", "Property damage", "Public insurance"]
    }
  ];

  const discounts = [
    { name: "Multi-vehicle discount", savings: "Up to 25%", icon: Car },
    { name: "Bundle with home", savings: "Up to 20%", icon: Home },
    { name: "Good driver discount", savings: "Up to 15%", icon: Award },
    { name: "Anti-theft devices", savings: "Up to 10%", icon: Shield }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Car className="h-4 w-4 mr-2" />
                Auto Insurance Types
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Complete Auto Insurance
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Coverage Guide
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Understand all types of auto insurance coverage available in Canada 
                and find the protection that's right for your driving needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
                    Get Auto Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Coverage <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Types of Auto Insurance Coverage</h2>
                <p className="text-xl text-muted-foreground">
                  From mandatory liability to optional comprehensive coverage
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {insuranceTypes.map((type, index) => (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {type.required && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
                          Required
                        </Badge>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <type.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                              {type.title}
                            </CardTitle>
                            <div className="text-right">
                              <div className="text-lg font-bold text-blue-600">
                                {type.price}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {type.coverage}
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-base mt-2">
                            {type.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3 mb-6">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full group-hover:bg-blue-600 transition-colors" asChild>
                        <Link to="/insurance/auto/quotes">
                          Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Provincial Differences */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Provincial Insurance Systems</h2>
                <p className="text-xl text-muted-foreground">
                  Each province has different insurance requirements and systems
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {provinces.map((province, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{province.name}</CardTitle>
                          <CardDescription>{province.system}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Minimum Coverage:</span>
                          <span className="font-semibold">{province.minCoverage}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Average Cost:</span>
                          <span className="font-semibold text-blue-600">{province.avgCost}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {province.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full" asChild>
                          <Link to={`/insurance/auto/${province.name.toLowerCase()}`}>
                            Get {province.name} Quote
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Discounts */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Available Discounts</h2>
                <p className="text-xl text-muted-foreground">
                  Ways to save on your auto insurance premiums
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {discounts.map((discount, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <discount.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{discount.name}</h3>
                      <p className="text-2xl font-bold text-green-600 mb-2">{discount.savings}</p>
                      <p className="text-sm text-gray-600">potential savings</p>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Get Protected?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Compare auto insurance quotes from Canada's top providers and find the best coverage for your needs
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to Agent
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

export default AutoInsuranceTypes;
