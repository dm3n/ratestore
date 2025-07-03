
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, Shield, Building, Users, Calculator, CheckCircle, 
  ArrowRight, Star, Phone, TrendingUp, Clock, Zap 
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeInsuranceTypes = () => {
  const coverageTypes = [
    {
      title: "Homeowners Insurance",
      description: "Complete protection for your home and belongings",
      icon: Home,
      features: ["Dwelling Coverage", "Personal Property", "Liability Protection", "Additional Living Expenses"],
      popular: true,
      price: "From $75/month"
    },
    {
      title: "Tenant Insurance",
      description: "Essential coverage for renters and their belongings",
      icon: Building,
      features: ["Personal Property", "Liability Coverage", "Additional Living Expenses", "Medical Payments"],
      popular: true,
      price: "From $25/month"
    },
    {
      title: "Condo Insurance",
      description: "Specialized coverage for condominium owners",
      icon: Shield,
      features: ["Unit Improvements", "Personal Property", "Liability Coverage", "Loss Assessment"],
      popular: false,
      price: "From $40/month"
    },
    {
      title: "Landlord Insurance",
      description: "Protection for rental property owners",
      icon: Users,
      features: ["Property Coverage", "Rental Income Protection", "Liability Coverage", "Legal Expenses"],
      popular: false,
      price: "From $95/month"
    }
  ];

  const regions = [
    { name: "Ontario", description: "Comprehensive home coverage with provincial considerations", popular: true },
    { name: "Alberta", description: "Weather-specific protection for Alberta homes", popular: true },
    { name: "British Columbia", description: "Earthquake and flood coverage for BC properties", popular: true },
    { name: "Quebec", description: "Coverage meeting Quebec's unique requirements", popular: true }
  ];

  const whyHomeInsurance = [
    {
      icon: Shield,
      title: "Property Protection",
      description: "Protect your home and belongings from damage and theft"
    },
    {
      icon: TrendingUp,
      title: "Financial Security",
      description: "Avoid devastating financial losses from unexpected events"
    },
    {
      icon: Clock,
      title: "Peace of Mind",
      description: "Rest easy knowing your most valuable asset is protected"
    },
    {
      icon: Users,
      title: "Liability Coverage",
      description: "Protection against lawsuits and liability claims"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Home className="h-4 w-4 mr-2" />
                Canada's Home Insurance Experts
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Home Insurance
                <span className="block bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Protect your home and belongings with comprehensive coverage from Canada's 
                most trusted insurance providers. Get personalized quotes in minutes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto">
                  Get Home Quote <Home className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Home Insurance Coverage Types</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose the right protection for your living situation and coverage needs
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {coverageTypes.map((coverage, index) => (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {coverage.popular && (
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
                          <coverage.icon className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                              {coverage.title}
                            </CardTitle>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">
                                {coverage.price}
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-base mt-2">
                            {coverage.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3 mb-6">
                        {coverage.features.map((feature, featureIndex) => (
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

        {/* Regional Coverage */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Home Insurance by Region</h2>
                <p className="text-xl text-muted-foreground">
                  Get coverage tailored to your province's specific risks and requirements
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {regions.map((region, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                          <Home className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{region.name}</CardTitle>
                          <CardDescription>{region.description}</CardDescription>
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

        {/* Why You Need Home Insurance */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why You Need Home Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Protect your most valuable investment and ensure financial security
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyHomeInsurance.map((item, index) => (
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Home?</h2>
              <p className="text-xl text-green-100 mb-8">
                Get personalized home insurance quotes from Canada's top providers in minutes
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Start Comparing <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Expert Help
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
