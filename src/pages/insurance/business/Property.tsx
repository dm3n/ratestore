
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building, CheckCircle, ArrowRight, Star, Phone, AlertCircle,
  Shield, Zap, FileText, TrendingUp, Award, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const Property = () => {
  const coverageTypes = [
    {
      title: "Building Coverage",
      description: "Protection for your business premises and structures",
      icon: Building,
      features: ["Fire and smoke damage", "Weather-related damage", "Vandalism and theft"]
    },
    {
      title: "Equipment Protection",
      description: "Coverage for business equipment and machinery",
      icon: Shield,
      features: ["Computer equipment", "Manufacturing machinery", "Office furniture"]
    },
    {
      title: "Inventory Coverage",
      description: "Protection for business stock and materials",
      icon: FileText,
      features: ["Raw materials", "Finished goods", "Work in progress"]
    },
    {
      title: "Business Interruption",
      description: "Income protection when operations are suspended",
      icon: TrendingUp,
      features: ["Lost revenue coverage", "Operating expense continuation", "Extra expense protection"]
    }
  ];

  const perils = [
    "Fire and lightning",
    "Windstorm and hail",
    "Explosion",
    "Theft and burglary",
    "Vandalism",
    "Water damage",
    "Equipment breakdown",
    "Business interruption"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Asset Protection",
      description: "Safeguard your valuable business assets and property"
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Avoid devastating financial losses from covered events"
    },
    {
      icon: TrendingUp,
      title: "Business Continuity",
      description: "Keep operations running after a covered loss"
    },
    {
      icon: Award,
      title: "Peace of Mind",
      description: "Focus on growing your business with confidence"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-20">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20">
                <Building className="h-4 w-4 mr-2" />
                Commercial Property Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Commercial Property
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Insurance
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Protect your business property, equipment, and inventory from fire, theft, weather, and other covered perils. 
                Essential coverage for any business with physical assets.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
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
                <h2 className="text-4xl font-bold mb-4">What's Protected</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive coverage for all your business property
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coverageTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <type.icon className="h-6 w-6 text-green-600" />
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

        {/* Covered Perils */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Covered Perils</h2>
                <p className="text-xl text-muted-foreground">
                  Protection against these common business property risks
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {perils.map((peril, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{peril}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why You Need Commercial Property Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Essential protection for your business investments
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Protect Your Business Assets</h2>
              <p className="text-xl text-green-100 mb-8">
                Don't risk losing everything you've built. Get commercial property insurance protection today.
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
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

export default Property;
