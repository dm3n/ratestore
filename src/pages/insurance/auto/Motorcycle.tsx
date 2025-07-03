
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bike, Shield, Users, Calculator, CheckCircle, 
  ArrowRight, Phone, TrendingUp, Clock, Wrench, Zap 
} from "lucide-react";
import { Link } from "react-router-dom";

const MotorcycleInsurance = () => {
  const coverageTypes = [
    {
      title: "Liability Coverage",
      description: "Required by law - protects others from damage you cause",
      icon: Shield,
      features: ["Third-party bodily injury", "Property damage", "Legal defense costs", "Medical payments"]
    },
    {
      title: "Collision Coverage",
      description: "Pays for damage to your motorcycle in an accident",
      icon: Bike,
      features: ["At-fault accidents", "Single vehicle crashes", "Hit and run incidents", "Deductible options"]
    },
    {
      title: "Comprehensive Coverage",
      description: "Protection against theft, vandalism, and weather damage",
      icon: Users,
      features: ["Theft protection", "Vandalism coverage", "Weather damage", "Fire and explosion"]
    },
    {
      title: "Accessory Coverage",
      description: "Coverage for custom parts and motorcycle accessories",
      icon: Wrench,
      features: ["Custom parts", "Safety equipment", "Audio systems", "Performance modifications"]
    }
  ];

  const motorcycleTypes = [
    {
      type: "Sport Bikes",
      description: "High-performance motorcycles designed for speed and agility",
      considerations: ["Higher insurance rates", "Theft target", "Performance modifications", "Safety gear important"]
    },
    {
      type: "Touring Bikes",
      description: "Large motorcycles built for long-distance comfort",
      considerations: ["Lower insurance rates", "Storage coverage", "Passenger protection", "Weather protection"]
    },
    {
      type: "Cruiser Bikes",
      description: "Relaxed riding position motorcycles with classic styling",
      considerations: ["Moderate rates", "Custom accessories", "Chrome protection", "Vintage value"]
    },
    {
      type: "Dirt Bikes & ATVs",
      description: "Off-road vehicles for recreational and competitive use",
      considerations: ["Seasonal coverage", "Trail liability", "Transport coverage", "Equipment protection"]
    }
  ];

  const seasonalTips = [
    {
      title: "Winter Storage Coverage",
      description: "Comprehensive coverage while your bike is stored for winter months."
    },
    {
      title: "Seasonal Suspension",
      description: "Reduce premiums by suspending liability coverage during off-season."
    },
    {
      title: "Spring Preparation",
      description: "Pre-season inspection and maintenance to prevent claims."
    },
    {
      title: "Summer Safety",
      description: "Peak riding season safety tips and gear recommendations."
    }
  ];

  const benefits = [
    "Legal protection against liability claims and lawsuits",
    "Financial protection for your motorcycle investment",
    "Coverage for custom parts and expensive accessories",
    "Medical payment coverage for rider and passenger injuries",
    "Uninsured motorist protection on Canadian roads",
    "Roadside assistance for breakdowns and accidents"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-red-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-orange-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Bike className="h-4 w-4 mr-2" />
                Specialized Motorcycle Coverage
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Motorcycle Insurance
                <span className="block bg-gradient-to-r from-red-200 to-orange-200 bg-clip-text text-transparent">
                  Ride Protected
                </span>
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Specialized insurance coverage for motorcycles, scooters, and ATVs. 
                Get comprehensive protection tailored for Canadian riders and road conditions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto">
                  Get Motorcycle Quote <Bike className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Motorcycle Insurance Coverage</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection designed specifically for motorcycle riders
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {coverageTypes.map((coverage, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                          <coverage.icon className="h-7 w-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                            {coverage.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-1">
                            {coverage.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {coverage.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
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

        {/* Motorcycle Types */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage by Motorcycle Type</h2>
                <p className="text-xl text-muted-foreground">
                  Insurance considerations for different types of motorcycles
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {motorcycleTypes.map((bike, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                          <Bike className="h-6 w-6 text-red-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                            {bike.type}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {bike.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-sm text-gray-600">Insurance Considerations:</h4>
                      <ul className="space-y-2">
                        {bike.considerations.map((consideration, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{consideration}</span>
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

        {/* Seasonal Considerations */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Seasonal Motorcycle Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Year-round protection and seasonal coverage options for Canadian riders
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalTips.map((tip, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                    <CardHeader className="text-center">
                      <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 transition-colors">
                        <Clock className="h-6 w-6 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Why You Need Motorcycle Insurance</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Motorcycle insurance is mandatory in Canada and provides essential 
                    protection for riders, passengers, and your valuable motorcycle.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Zap className="h-8 w-8" />
                        Quick Quote Example
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Liability Coverage</span>
                          <span className="font-bold">$1,000,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Collision Coverage</span>
                          <span className="font-bold">$500 deductible</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Comprehensive</span>
                          <span className="font-bold">$300 deductible</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Accessories</span>
                          <span className="font-bold">$3,000</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Monthly Premium</span>
                          <span className="text-red-600">$35</span>
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
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Hit the Road Protected?</h2>
              <p className="text-xl text-red-100 mb-8">
                Get specialized motorcycle insurance quotes from Canada's top providers. 
                Find coverage that fits your bike and riding style.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
                    Get Motorcycle Quote <ArrowRight className="ml-2 h-5 w-5" />
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

export default MotorcycleInsurance;
