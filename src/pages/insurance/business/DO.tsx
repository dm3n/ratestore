
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, CheckCircle, ArrowRight, Star, Phone, AlertCircle,
  Shield, Scale, FileText, TrendingUp, Award, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const DO = () => {
  const coverageAreas = [
    {
      title: "Directors Coverage",
      description: "Personal liability protection for company directors",
      icon: Users,
      features: ["Personal asset protection", "Legal defense costs", "Settlement payments", "Regulatory investigations"]
    },
    {
      title: "Officers Coverage",
      description: "Liability protection for company officers and executives",
      icon: Shield,
      features: ["Executive decision protection", "Employment practices", "Fiduciary liability", "Crime coverage"]
    },
    {
      title: "Entity Coverage",
      description: "Protection for the company itself",
      icon: Scale,
      features: ["Corporate reimbursement", "Securities claims", "Derivative lawsuits", "Entity liability"]
    },
    {
      title: "Side A Coverage",
      description: "Individual director and officer protection",
      icon: FileText,
      features: ["Personal protection", "Non-indemnifiable claims", "Bankruptcy protection", "Priority coverage"]
    }
  ];

  const claims = [
    { name: "Securities Litigation", description: "Shareholder lawsuits and securities violations" },
    { name: "Employment Practices", description: "Wrongful termination and discrimination claims" },
    { name: "Regulatory Investigations", description: "Government and regulatory body investigations" },
    { name: "Fiduciary Breaches", description: "Breach of fiduciary duty claims" },
    { name: "Mergers & Acquisitions", description: "Transaction-related liability claims" },
    { name: "Bankruptcy Claims", description: "Claims arising from insolvency proceedings" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Executive Protection",
      description: "Comprehensive protection for directors and officers"
    },
    {
      icon: DollarSign,
      title: "Asset Protection",
      description: "Protect personal assets from corporate liability"
    },
    {
      icon: TrendingUp,
      title: "Attract Talent",
      description: "Recruit top executives with confidence"
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Meet corporate governance requirements"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white py-20">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20">
                <Users className="h-4 w-4 mr-2" />
                Directors & Officers Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Directors & Officers
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Insurance
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Protect your company's directors, officers, and executives from personal liability. 
                Essential coverage for corporate leadership and governance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4 h-auto" asChild>
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
                <h2 className="text-4xl font-bold mb-4">D&O Coverage Components</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive protection for directors, officers, and the entity
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coverageAreas.map((area, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <area.icon className="h-6 w-6 text-indigo-600" />
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

        {/* Common Claims */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Common D&O Claims</h2>
                <p className="text-xl text-muted-foreground">
                  Protect against these frequent director and officer liability risks
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {claims.map((claim, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{claim.name}</h3>
                      <p className="text-gray-600">{claim.description}</p>
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
                <h2 className="text-4xl font-bold mb-4">Why You Need D&O Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Essential protection for corporate leadership
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Protect Your Leadership Team</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Don't let personal liability exposure deter top talent. Get D&O insurance protection today.
              </p>
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-4 h-auto" asChild>
                <Link to="/insurance/business/quotes">
                  Get D&O Quote <ArrowRight className="ml-2 h-5 w-5" />
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

export default DO;
