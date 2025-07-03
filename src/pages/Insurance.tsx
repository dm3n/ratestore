
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, Car, Home, Heart, Plane, Briefcase, Calculator, 
  MapPin, Star, CheckCircle, ArrowRight, Users, Clock, 
  TrendingUp, Award, Phone, Mail 
} from "lucide-react";
import { Link } from "react-router-dom";

const Insurance = () => {
  const insuranceTypes = [
    {
      title: "Auto Insurance",
      description: "Comprehensive vehicle protection for Canadian drivers",
      icon: Car,
      color: "blue",
      features: ["Collision & Comprehensive", "Liability Protection", "Accident Benefits"],
      link: "/insurance/auto",
      popular: true,
      startingPrice: "From $89/month"
    },
    {
      title: "Home Insurance",
      description: "Complete protection for your property and belongings",
      icon: Home,
      color: "green",
      features: ["Property Coverage", "Contents Protection", "Liability Insurance"],
      link: "/insurance/home",
      popular: true,
      startingPrice: "From $45/month"
    },
    {
      title: "Life Insurance",
      description: "Financial security for your loved ones",
      icon: Heart,
      color: "red",
      features: ["Term & Permanent Options", "Critical Illness", "Disability Coverage"],
      link: "/insurance/life",
      popular: false,
      startingPrice: "From $25/month"
    },
    {
      title: "Travel Insurance",
      description: "Stay protected during your travels worldwide",
      icon: Plane,
      color: "purple",
      features: ["Medical Coverage", "Trip Cancellation", "Emergency Evacuation"],
      link: "/insurance/travel",
      popular: false,
      startingPrice: "From $15/trip"
    }
  ];

  const provinces = [
    { name: "Ontario", code: "ON", popular: true },
    { name: "British Columbia", code: "BC", popular: true },
    { name: "Alberta", code: "AB", popular: true },
    { name: "Quebec", code: "QC", popular: true },
    { name: "Manitoba", code: "MB", popular: false },
    { name: "Saskatchewan", code: "SK", popular: false },
    { name: "Nova Scotia", code: "NS", popular: false },
    { name: "New Brunswick", code: "NB", popular: false },
    { name: "Newfoundland", code: "NL", popular: false },
    { name: "PEI", code: "PE", popular: false }
  ];

  const whyChooseUs = [
    { icon: Star, title: "Expert Guidance", description: "Professional advice from licensed brokers" },
    { icon: Shield, title: "Comprehensive Coverage", description: "Protection tailored to your needs" },
    { icon: TrendingUp, title: "Competitive Rates", description: "Best prices from top Canadian insurers" },
    { icon: Clock, title: "Quick Claims", description: "Fast and hassle-free claim processing" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "Saved over $300 on my auto insurance while getting better coverage!"
    },
    {
      name: "Mike Chen",
      location: "Vancouver, BC",
      rating: 5,
      text: "The home insurance comparison was incredibly helpful and easy to use."
    },
    {
      name: "Emily Davis",
      location: "Calgary, AB",
      rating: 5,
      text: "Great customer service and found me the perfect life insurance policy."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2" />
                Canada's Trusted Insurance Marketplace
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Find the Perfect
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Insurance Coverage
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Compare quotes from Canada's top insurance providers. Get comprehensive coverage 
                at competitive rates with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Providers <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-blue-200 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$2M+</div>
                  <div className="text-blue-200 text-sm">Total Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Insurance Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  Award-Winning Coverage
                </Badge>
                <h2 className="text-4xl font-bold mb-4">Insurance Coverage Options</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection for every aspect of your life, backed by Canada's most trusted insurers
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
                    
                    <div className={`absolute inset-0 bg-gradient-to-br from-${insurance.color}-50 to-${insurance.color}-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`bg-${insurance.color}-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <insurance.icon className={`h-8 w-8 text-${insurance.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                              {insurance.title}
                            </CardTitle>
                            <div className="text-right">
                              <div className={`text-lg font-bold text-${insurance.color}-600`}>
                                {insurance.startingPrice}
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
                        <Button className="flex-1 group-hover:bg-blue-600 transition-colors" asChild>
                          <Link to={insurance.link}>
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

        {/* Province Selection */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Insurance by Province</h2>
                <p className="text-xl text-muted-foreground">
                  Get location-specific insurance quotes and information tailored to your province
                </p>
              </div>
              
              <Tabs defaultValue="popular" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="popular">Popular Provinces</TabsTrigger>
                  <TabsTrigger value="all">All Provinces</TabsTrigger>
                </TabsList>
                
                <TabsContent value="popular">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {provinces.filter(p => p.popular).map((province, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-16 text-base font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group"
                        asChild
                      >
                        <Link to={`/insurance/${province.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          <div className="flex flex-col items-center gap-1">
                            <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            <span>{province.name}</span>
                          </div>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="all">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {provinces.map((province, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-14 text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                        asChild
                      >
                        <Link to={`/insurance/${province.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          {province.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Choose RateStore Insurance?</h2>
                <p className="text-xl text-muted-foreground">
                  We make finding the right insurance simple, fast, and affordable
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((item, index) => (
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

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of satisfied customers across Canada
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                        </div>
                      </div>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Save on Insurance?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized quotes from Canada's top insurance providers in minutes
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto">
                  Start Comparing Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-INSURANCE
                </Button>
              </div>
              <p className="text-blue-200">
                Questions? Email us at <a href="mailto:info@ratestore.ca" className="underline hover:text-white">info@ratestore.ca</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insurance;
