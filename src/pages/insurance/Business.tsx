import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, Shield, Building, Users, CheckCircle, ArrowRight, 
  Star, Phone, Mail, TrendingUp, Award, AlertCircle,
  FileText, Zap, Scale
} from "lucide-react";
import { Link } from "react-router-dom";

const Business = () => {
  const insuranceTypes = [
    {
      title: "General Liability",
      description: "Protection against third-party claims and lawsuits",
      icon: Shield,
      price: "From $25/month",
      features: ["Bodily injury coverage", "Property damage", "Personal injury claims", "Legal defense costs"],
      href: "/insurance/business/general"
    },
    {
      title: "Professional Liability", 
      description: "Coverage for professional errors & omissions",
      icon: FileText,
      price: "From $45/month",
      features: ["Errors & omissions", "Negligence claims", "Defense costs", "Regulatory proceedings"],
      href: "/insurance/business/professional"
    },
    {
      title: "Directors & Officers",
      description: "Protection for company leadership and executives",
      icon: Users,
      price: "From $85/month",
      features: ["Personal liability protection", "Securities claims", "Employment practices", "Regulatory investigations"],
      href: "/insurance/business/do"
    },
    {
      title: "Commercial Property",
      description: "Protection for business property & equipment",
      icon: Building,
      price: "From $35/month", 
      features: ["Building coverage", "Equipment protection", "Inventory coverage", "Business interruption"],
      href: "/insurance/business/property"
    },
    {
      title: "Cyber Liability",
      description: "Protection against cyber threats & data breaches",
      icon: Zap,
      price: "From $55/month",
      features: ["Data breach response", "Cyber extortion", "Business interruption", "Regulatory fines"],
      href: "/insurance/business/cyber"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Defense against lawsuits and claims that could devastate your business"
    },
    {
      icon: TrendingUp,
      title: "Business Continuity",
      description: "Keep operations running smoothly even after covered incidents"
    },
    {
      icon: Award,
      title: "Professional Credibility",
      description: "Build trust with clients who require proof of insurance coverage"
    },
    {
      icon: Building,
      title: "Asset Protection",
      description: "Safeguard your business assets and personal wealth from claims"
    }
  ];

  const industries = [
    "Technology & Software",
    "Healthcare & Medical",
    "Construction & Contracting",
    "Professional Services",
    "Manufacturing",
    "Retail & E-commerce",
    "Real Estate",
    "Financial Services"
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
                Business Insurance Canada
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Protect Your Business with
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Comprehensive Coverage
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get tailored business insurance quotes from Canada's leading commercial insurers. 
                Protect your business, employees, and assets with the right coverage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/business/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  1-800-BIZ-INSURE
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
                  Comprehensive protection for every aspect of your business
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insuranceTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <type.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-base">{type.description}</CardDescription>
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

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Your Business Needs Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Business insurance protects your investment and ensures continuity
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

        {/* Industries */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Industries We Cover</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Specialized insurance solutions for businesses across all sectors
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-300 transition-colors">
                    <span className="text-gray-700 font-medium">{industry}</span>
                  </div>
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
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/business/quotes">
                    Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 h-auto border border-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-BIZ-INSURE
                </Button>
              </div>
              <p className="text-blue-200">
                Questions? Email us at <a href="mailto:business@ratestore.ca" className="underline hover:text-white">business@ratestore.ca</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Business;
