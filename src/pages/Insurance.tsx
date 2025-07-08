import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, Car, Home, Heart, Plane, Briefcase, 
  ArrowRight, CheckCircle, Star, TrendingUp, Users, 
  Phone, Mail, Calculator, Award, Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Insurance = () => {
  const insuranceTypes = [
    {
      title: "Auto Insurance",
      description: "Comprehensive car insurance coverage for all provinces",
      icon: Car,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      features: ["Liability coverage", "Collision protection", "Comprehensive coverage"],
      startingPrice: "From $89/month",
      href: "/insurance/auto",
      quoteHref: "/insurance/auto/quotes"
    },
    {
      title: "Home Insurance", 
      description: "Protect your home and belongings with comprehensive coverage",
      icon: Home,
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      features: ["Property protection", "Contents coverage", "Liability protection"],
      startingPrice: "From $65/month",
      href: "/insurance/home",
      quoteHref: "/insurance/home/quotes"
    },
    {
      title: "Life Insurance",
      description: "Financial protection for your family's future",
      icon: Heart,
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      features: ["Term life coverage", "Permanent life options", "Critical illness"],
      startingPrice: "From $25/month",
      href: "/insurance/life",
      quoteHref: "/insurance/life/quotes"
    },
    {
      title: "Travel Insurance",
      description: "Coverage for medical emergencies and trip protection",
      icon: Plane,
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
      features: ["Medical coverage", "Trip cancellation", "Multi-trip plans"],
      startingPrice: "From $15/trip",
      href: "/insurance/travel",
      quoteHref: "/insurance/travel/quotes"
    },
    {
      title: "Business Insurance",
      description: "Comprehensive protection for your business operations",
      icon: Briefcase,
      color: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700",
      features: ["General liability", "Professional liability", "Property coverage"],
      startingPrice: "From $25/month",
      href: "/insurance/business",
      quoteHref: "/insurance/business/quotes"
    }
  ];

  const stats = [
    { number: "500,000+", label: "Policies Compared", icon: Shield },
    { number: "98%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Phone },
    { number: "50+", label: "Insurance Partners", icon: Users }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Compare & Save",
      description: "Compare quotes from multiple insurers to find the best rates and coverage for your needs."
    },
    {
      icon: Shield,
      title: "Expert Guidance",
      description: "Our insurance experts help you understand your options and choose the right coverage."
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description: "Access exclusive rates and discounts from Canada's top insurance providers."
    },
    {
      icon: Award,
      title: "Trusted Service",
      description: "Award-winning service with thousands of satisfied customers across Canada."
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
                <Shield className="h-4 w-4 mr-2" />
                Insurance Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Find the Right Insurance
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  at the Best Price
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Compare insurance quotes from Canada's top providers. Get comprehensive coverage 
                for auto, home, life, travel, and business insurance - all in one place.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" onClick={() => document.getElementById('insurance-types-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Compare All Insurance <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20" onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section id="insurance-types-section" className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Insurance Coverage Options</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive protection for every aspect of your life
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {insuranceTypes.map((type, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className={`${type.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                      <div className="text-lg font-bold text-blue-600 mt-2">
                        {type.startingPrice}
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <ul className="space-y-2 mb-6">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-2">
                        <Button className={`w-full ${type.color} ${type.hoverColor} text-white`} asChild>
                          <Link to={type.quoteHref}>Get Quote</Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to={type.href}>Learn More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Trusted by Canadians</h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of satisfied customers who trust us with their insurance needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <p className="text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits-section" className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Choose RateStore Insurance?</h2>
                <p className="text-xl text-muted-foreground">
                  We make finding the right insurance simple, fast, and affordable
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Save on Insurance?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Compare quotes from Canada's top insurance providers and find the perfect coverage for your needs
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto">
                  Get All Quotes Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-INSURE-CA
                </Button>
              </div>
              <p className="text-blue-200">
                Questions? Email us at <a href="mailto:insurance@ratestore.ca" className="underline hover:text-white">insurance@ratestore.ca</a>
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
