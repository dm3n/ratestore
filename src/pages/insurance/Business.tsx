
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, Shield, Building, Users, CheckCircle, ArrowRight, 
  Star, Phone, Mail, TrendingUp, Award, AlertCircle, DollarSign,
  FileText, Zap, Globe, Home
} from "lucide-react";
import { Link } from "react-router-dom";

const Business = () => {
  const insuranceTypes = [
    {
      title: "General Liability",
      description: "Protection against third-party claims and lawsuits",
      icon: Shield,
      price: "From $25/month",
      features: ["Bodily injury coverage", "Property damage", "Personal injury claims"],
      href: "/insurance/business/general"
    },
    {
      title: "Professional Liability",
      description: "Coverage for professional errors and omissions",
      icon: FileText,
      price: "From $45/month",
      features: ["Errors & omissions", "Negligence claims", "Defense costs"],
      href: "/insurance/business/professional"
    },
    {
      title: "Commercial Property",
      description: "Protection for business property and equipment",
      icon: Building,
      price: "From $35/month",
      features: ["Building coverage", "Equipment protection", "Business interruption"],
      href: "/insurance/business/property"
    },
    {
      title: "Cyber Liability",
      description: "Protection against cyber threats and data breaches",
      icon: Zap,
      price: "From $55/month",
      features: ["Data breach response", "Cyber extortion", "Regulatory fines"],
      href: "/insurance/business/cyber"
    }
  ];

  const industries = [
    { name: "Technology", icon: Zap, description: "Software, IT services, and tech startups" },
    { name: "Healthcare", icon: Shield, description: "Medical practices and healthcare providers" },
    { name: "Construction", icon: Building, description: "Contractors and construction companies" },
    { name: "Professional Services", icon: FileText, description: "Consultants, lawyers, and advisors" },
    { name: "Retail", icon: Home, description: "Stores and retail businesses" },
    { name: "Manufacturing", icon: TrendingUp, description: "Production and manufacturing companies" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Defend against lawsuits and liability claims"
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Protect your business assets and cash flow"
    },
    {
      icon: TrendingUp,
      title: "Business Continuity",
      description: "Keep operations running after incidents"
    },
    {
      icon: Award,
      title: "Professional Credibility",
      description: "Build trust with clients and partners"
    }
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
                <Briefcase className="h-4 w-4 mr-2" />
                Business Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Protect Your Business
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Complete Coverage
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Comprehensive business insurance solutions to protect your company, employees, 
                and assets. Get quotes from Canada's leading commercial insurers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/business/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20">
                  Compare Policies <Building className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Business Insurance Types</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive coverage for every aspect of your business
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {insuranceTypes.map((type, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <type.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                      <div className="text-2xl font-bold text-blue-600 mt-2">{type.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                        <Link to={type.href}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage by Industry</h2>
                <p className="text-xl text-muted-foreground">
                  Specialized insurance solutions for different business sectors
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <industry.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/insurance/business/quotes">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
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
                <h2 className="text-4xl font-bold mb-4">Why Your Business Needs Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Protect your investment and ensure business continuity
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
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get comprehensive business insurance quotes and safeguard your company's future
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/business/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Expert
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

export default Business;
