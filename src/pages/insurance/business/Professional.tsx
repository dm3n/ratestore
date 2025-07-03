
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, CheckCircle, ArrowRight, Star, Phone, AlertCircle,
  Briefcase, Users, Shield, TrendingUp, Award, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const Professional = () => {
  const coverageAreas = [
    {
      title: "Errors & Omissions",
      description: "Protection against professional mistakes and oversights",
      icon: FileText,
      features: ["Negligent acts coverage", "Failure to deliver services", "Missed deadlines protection"]
    },
    {
      title: "Professional Negligence",
      description: "Coverage for failing to meet professional standards",
      icon: Shield,
      features: ["Breach of duty claims", "Inadequate work quality", "Professional malpractice"]
    },
    {
      title: "Client Disputes",
      description: "Protection from client dissatisfaction claims",
      icon: Users,
      features: ["Breach of contract", "Failure to perform", "Client relationship issues"]
    },
    {
      title: "Legal Defense Costs",
      description: "Coverage for legal expenses and court costs",
      icon: Briefcase,
      features: ["Legal representation", "Court filing fees", "Expert witness costs"]
    }
  ];

  const industries = [
    { name: "Consultants", description: "Business and management consulting" },
    { name: "IT Professionals", description: "Software development and IT services" },
    { name: "Healthcare", description: "Medical and healthcare professionals" },
    { name: "Legal Services", description: "Lawyers and legal advisors" },
    { name: "Accounting", description: "CPAs and bookkeeping services" },
    { name: "Real Estate", description: "Agents and property professionals" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white py-20">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20">
                <FileText className="h-4 w-4 mr-2" />
                Professional Liability Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Professional Liability
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Insurance
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Protect your professional services business from errors, omissions, and negligence claims. 
                Essential coverage for service-based businesses.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto" asChild>
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

        {/* Coverage Areas */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Professional Coverage Areas</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive protection for professional service providers
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coverageAreas.map((area, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <area.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription className="text-base">
                        {area.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {area.features.map((feature, featureIndex) => (
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

        {/* Industries */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Industries We Cover</h2>
                <p className="text-xl text-muted-foreground">
                  Professional liability insurance for various service industries
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Protect Your Professional Reputation</h2>
              <p className="text-xl text-purple-100 mb-8">
                One claim could damage your business reputation and finances. Get professional liability coverage today.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto" asChild>
                <Link to="/insurance/business/quotes">
                  Get Protected Now <ArrowRight className="ml-2 h-5 w-5" />
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

export default Professional;
