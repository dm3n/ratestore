
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Car, Shield, Truck, Bike, Users, MapPin, Calculator, 
  CheckCircle, ArrowRight, Star, Clock, Phone, TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";

const AutoInsuranceTypes = () => {
  const coverageTypes = [
    {
      title: "Comprehensive Auto Insurance",
      description: "Complete protection for your vehicle against all risks",
      icon: Shield,
      features: ["Collision Coverage", "Comprehensive Coverage", "Liability Protection", "Accident Benefits"],
      popular: true,
      price: "From $89/month"
    },
    {
      title: "Liability Only",
      description: "Basic legal requirement coverage for third-party damages",
      icon: Car,
      features: ["Third-Party Liability", "Accident Benefits", "Uninsured Motorist", "Direct Compensation"],
      popular: false,
      price: "From $45/month"
    },
    {
      title: "Commercial Vehicle Insurance",
      description: "Specialized coverage for business and commercial vehicles",
      icon: Truck,
      features: ["Fleet Coverage", "Commercial Liability", "Cargo Protection", "Business Use"],
      popular: false,
      price: "From $120/month"
    },
    {
      title: "Motorcycle Insurance",
      description: "Tailored protection for motorcycles and riders",
      icon: Bike,
      features: ["Collision & Comprehensive", "Liability Coverage", "Medical Payments", "Accessory Coverage"],
      popular: false,
      price: "From $35/month"
    }
  ];

  const regions = [
    { name: "Ontario", description: "Navigate Ontario's unique insurance regulations", popular: true },
    { name: "Alberta", description: "Competitive rates in Alberta's private system", popular: true },
    { name: "British Columbia", description: "ICBC and private insurance options", popular: true },
    { name: "Quebec", description: "Understanding Quebec's mixed public-private system", popular: true },
    { name: "Toronto", description: "Urban driving solutions for Canada's largest city", popular: false },
    { name: "Calgary", description: "Prairie-specific coverage and considerations", popular: false },
    { name: "Montreal", description: "Bilingual service and Quebec compliance", popular: false }
  ];

  const whyAutoInsurance = [
    {
      icon: Shield,
      title: "Legal Requirement",
      description: "Auto insurance is mandatory in all Canadian provinces"
    },
    {
      icon: TrendingUp,
      title: "Financial Protection",
      description: "Protect yourself from costly accident claims and repairs"
    },
    {
      icon: Clock,
      title: "Peace of Mind",
      description: "Drive confidently knowing you're covered"
    },
    {
      icon: Users,
      title: "Family Security",
      description: "Protect your loved ones and other road users"
    }
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
                <Car className="h-4 w-4 mr-2" />
                Canada's Auto Insurance Experts
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Auto Insurance
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Compare auto insurance quotes from Canada's top providers. 
                Get comprehensive coverage tailored to your driving needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto">
                  Get Auto Quote <Car className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Auto Insurance Coverage Types</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose the right level of protection for your vehicle, driving habits, and budget
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
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <coverage.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                              {coverage.title}
                            </CardTitle>
                            <div className="text-right">
                              <div className="text-lg font-bold text-blue-600">
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
                        <Button className="flex-1 group-hover:bg-blue-600 transition-colors" asChild>
                          <Link to="/insurance/auto/quotes">
                            Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="flex-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
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
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Auto Insurance by Region</h2>
                <p className="text-xl text-muted-foreground">
                  Get location-specific coverage that meets your province's requirements
                </p>
              </div>
              
              <Tabs defaultValue="provinces" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="provinces">Provinces</TabsTrigger>
                  <TabsTrigger value="cities">Major Cities</TabsTrigger>
                </TabsList>
                
                <TabsContent value="provinces">
                  <div className="grid md:grid-cols-2 gap-6">
                    {regions.filter(r => r.popular).map((region, index) => (
                      <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow group">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                              <MapPin className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{region.name}</CardTitle>
                              <CardDescription>{region.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Button asChild className="w-full">
                            <Link to={`/insurance/auto/${region.name.toLowerCase()}`}>
                              Get {region.name} Quote
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="cities">
                  <div className="grid md:grid-cols-3 gap-6">
                    {regions.filter(r => !r.popular).map((region, index) => (
                      <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="text-center">
                          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-lg">{region.name}</CardTitle>
                          <CardDescription>{region.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild className="w-full" variant="outline">
                            <Link to={`/insurance/auto/${region.name.toLowerCase()}`}>
                              View Options
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Why You Need Auto Insurance */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why You Need Auto Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Beyond being legally required, auto insurance provides essential financial protection
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyAutoInsurance.map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <item.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Compare Auto Insurance?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized quotes from Canada's top auto insurance providers in minutes
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
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

export default AutoInsuranceTypes;
