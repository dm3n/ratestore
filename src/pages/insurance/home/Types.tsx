
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, Building, Key, Shield, Users, MapPin, Calculator, 
  CheckCircle, ArrowRight, Star, Flame, Droplets, Wind, 
  Lock, Heart, Phone, TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeInsuranceTypes = () => {
  const insuranceTypes = [
    {
      title: "Homeowners Insurance",
      description: "Comprehensive protection for your home and belongings",
      icon: Home,
      features: ["Dwelling Coverage", "Personal Property", "Liability Protection", "Additional Living Expenses"],
      popular: true,
      price: "From $45/month",
      coverage: "Up to $500K"
    },
    {
      title: "Tenant Insurance",
      description: "Essential coverage for renters and their belongings",
      icon: Key,
      features: ["Personal Property", "Liability Coverage", "Additional Living Expenses", "Temporary Accommodation"],
      popular: true,
      price: "From $15/month",
      coverage: "Up to $50K"
    },
    {
      title: "Condo Insurance",
      description: "Specialized coverage for condominium owners",
      icon: Building,
      features: ["Unit Improvements", "Personal Property", "Loss Assessments", "Liability Protection"],
      popular: false,
      price: "From $25/month",
      coverage: "Up to $250K"
    },
    {
      title: "Landlord Insurance",
      description: "Protection for rental property owners",
      icon: Shield,
      features: ["Property Protection", "Rental Income Loss", "Liability Coverage", "Tenant Damage"],
      popular: false,
      price: "From $35/month",
      coverage: "Up to $1M"
    }
  ];

  const coverageDetails = [
    {
      icon: Flame,
      title: "Fire & Smoke Damage",
      description: "Protection against fire, lightning, and smoke damage"
    },
    {
      icon: Droplets,
      title: "Water Damage",
      description: "Coverage for sudden water damage and flooding"
    },
    {
      icon: Wind,
      title: "Weather Protection",
      description: "Hail, windstorm, and severe weather coverage"
    },
    {
      icon: Lock,
      title: "Theft & Vandalism",
      description: "Protection against break-ins and malicious damage"
    },
    {
      icon: Users,
      title: "Liability Coverage",
      description: "Protection if someone is injured on your property"
    },
    {
      icon: Heart,
      title: "Personal Belongings",
      description: "Coverage for your furniture, electronics, and valuables"
    }
  ];

  const regions = [
    { name: "Ontario", risk: "High density, weather events", popular: true },
    { name: "Alberta", risk: "Hail, flooding, extreme weather", popular: true },
    { name: "British Columbia", risk: "Earthquakes, floods, wildfires", popular: true },
    { name: "Quebec", risk: "Ice storms, flooding", popular: true }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30l15-15v30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Home className="h-4 w-4 mr-2" />
                Protect Your Most Valuable Asset
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Home Insurance
                <span className="block bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                  That Fits Your Life
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Protect your home, belongings, and family with comprehensive coverage 
                from Canada's most trusted insurance providers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto">
                  Get Home Quote <Home className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Calculate Coverage <Calculator className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Home Insurance Types</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Whether you own, rent, or invest in property, we have the right coverage for your situation
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {insuranceTypes.map((insurance, index) => (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {insurance.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <insurance.icon className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                              {insurance.title}
                            </CardTitle>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">
                                {insurance.price}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {insurance.coverage}
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-base mt-2">
                            {insurance.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3 mb-6">
                        {insurance.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <Button className="flex-1 group-hover:bg-green-600 transition-colors" asChild>
                          <Link to="/insurance/home/quotes">
                            Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="flex-1 group-hover:border-green-600 group-hover:text-green-600 transition-colors">
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

        {/* Coverage Details */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What's Covered?</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive protection against life's unexpected events
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coverageDetails.map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                        <item.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Considerations */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Regional Coverage Considerations</h2>
                <p className="text-xl text-muted-foreground">
                  Each province has unique risks that affect your home insurance needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {regions.map((region, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                          <MapPin className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{region.name}</CardTitle>
                          <CardDescription>Common risks: {region.risk}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link to={`/insurance/home/${region.name.toLowerCase()}`}>
                          Get {region.name} Quote
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Protect Your Home Today</h2>
              <p className="text-xl text-green-100 mb-8">
                Get personalized home insurance quotes from Canada's top providers
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Your Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to an Expert
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

export default HomeInsuranceTypes;
