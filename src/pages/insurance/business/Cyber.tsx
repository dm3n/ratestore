
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, CheckCircle, ArrowRight, Star, Phone, AlertCircle,
  Shield, Lock, FileText, TrendingUp, Award, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const Cyber = () => {
  const coverageAreas = [
    {
      title: "Data Breach Response",
      description: "Comprehensive response to data security incidents",
      icon: Shield,
      features: ["Breach notification costs", "Credit monitoring services", "Public relations support"]
    },
    {
      title: "Cyber Extortion",
      description: "Protection against ransomware and cyber threats",
      icon: Lock,
      features: ["Ransomware payments", "Cyber extortion demands", "Digital forensic investigation"]
    },
    {
      title: "Business Interruption",
      description: "Coverage for income loss due to cyber incidents",
      icon: TrendingUp,
      features: ["Lost revenue protection", "Extra expense coverage", "System restoration costs"]
    },
    {
      title: "Regulatory Fines",
      description: "Protection against privacy law violations",
      icon: FileText,
      features: ["PIPEDA compliance", "Provincial privacy laws", "Regulatory investigation costs"]
    }
  ];

  const threats = [
    { name: "Ransomware Attacks", description: "Malicious software that encrypts data for ransom" },
    { name: "Data Breaches", description: "Unauthorized access to sensitive customer information" },
    { name: "Phishing Scams", description: "Fraudulent attempts to steal login credentials" },
    { name: "Business Email Compromise", description: "Email account takeovers for financial fraud" },
    { name: "Denial of Service", description: "Attacks that overwhelm and shut down systems" },
    { name: "Social Engineering", description: "Manipulation tactics to gain unauthorized access" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "All-in-one coverage for modern cyber threats"
    },
    {
      icon: DollarSign,
      title: "Financial Recovery",
      description: "Protection against costly cyber incident expenses"
    },
    {
      icon: TrendingUp,
      title: "Business Continuity",
      description: "Keep operations running after a cyber attack"
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Access to cybersecurity and legal experts"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-red-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20">
                <Zap className="h-4 w-4 mr-2" />
                Cyber Liability Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Cyber Liability
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Insurance
                </span>
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Protect your business from cyber threats, data breaches, and ransomware attacks. 
                Essential coverage in today's digital business environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
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
                <h2 className="text-4xl font-bold mb-4">Cyber Protection Coverage</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive coverage for all aspects of cyber incidents
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coverageAreas.map((area, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <area.icon className="h-6 w-6 text-red-600" />
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

        {/* Cyber Threats */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Common Cyber Threats</h2>
                <p className="text-xl text-muted-foreground">
                  Protect your business from these growing cyber risks
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {threats.map((threat, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{threat.name}</h3>
                      <p className="text-gray-600">{threat.description}</p>
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
                <h2 className="text-4xl font-bold mb-4">Why You Need Cyber Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Essential protection in the digital age
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
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
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Don't Wait for a Cyber Attack</h2>
              <p className="text-xl text-red-100 mb-8">
                Cyber criminals don't discriminate by business size. Get protected before it's too late.
              </p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
                <Link to="/insurance/business/quotes">
                  Get Cyber Protection <ArrowRight className="ml-2 h-5 w-5" />
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

export default Cyber;
