
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, Shield, Users, Calculator, CheckCircle, 
  ArrowRight, Phone, TrendingUp, DollarSign, Home, Gavel 
} from "lucide-react";
import { Link } from "react-router-dom";

const LandlordInsurance = () => {
  const coverageTypes = [
    {
      title: "Property Coverage",
      description: "Protection for your rental property structure and fixtures",
      icon: Home,
      features: ["Building structure", "Attached fixtures", "Appliances included", "Detached structures"]
    },
    {
      title: "Rental Income Protection",
      description: "Coverage for lost rental income due to covered damage",
      icon: DollarSign,
      features: ["Monthly rent coverage", "Up to 12 months", "Tenant displacement", "Repair period coverage"]
    },
    {
      title: "Liability Coverage", 
      description: "Protection against tenant and visitor injury claims",
      icon: Users,
      features: ["Slip and fall claims", "Property damage liability", "Legal defense costs", "Medical payments"]
    },
    {
      title: "Legal Expense Coverage",
      description: "Protection for legal costs related to tenant disputes",
      icon: Gavel,
      features: ["Eviction proceedings", "Tenant disputes", "Legal representation", "Court costs"]
    }
  ];

  const propertyTypes = [
    {
      type: "Single Family Homes",
      description: "Comprehensive coverage for standalone rental properties",
      features: ["Dwelling coverage", "Detached structures", "Yard liability", "Tenant screening"]
    },
    {
      type: "Multi-Unit Properties",
      description: "Specialized coverage for duplexes, triplexes, and small apartment buildings",
      features: ["Multiple unit coverage", "Common area liability", "Rental income protection", "Tenant management"]
    },
    {
      type: "Condos & Townhouses",
      description: "Tailored coverage for rental condominiums and townhouse properties",
      features: ["Unit improvements", "HOA considerations", "Liability protection", "Loss assessment"]
    }
  ];

  const benefits = [
    "Protect your investment property from damage and liability",
    "Maintain cash flow with rental income protection",
    "Legal protection for tenant-related disputes and evictions",
    "Coverage for tenant-caused damage beyond security deposits",
    "Liability protection for injuries on your rental property",
    "Optional coverage for vacancy periods"
  ];

  const tips = [
    {
      title: "Screen Tenants Carefully",
      description: "Good tenants reduce claims and protect your property investment."
    },
    {
      title: "Regular Property Inspections",
      description: "Identify potential issues before they become expensive problems."
    },
    {
      title: "Maintain Detailed Records",
      description: "Document all maintenance, repairs, and tenant communications."
    },
    {
      title: "Consider Umbrella Coverage",
      description: "Additional liability protection for high-value properties or multiple units."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-orange-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 via-orange-700 to-red-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Building2 className="h-4 w-4 mr-2" />
                Investment Property Protection
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Landlord Insurance
                <span className="block bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent">
                  Protect Your Investment
                </span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Comprehensive insurance protection for rental property owners. 
                Safeguard your investment with coverage for property damage, liability, and lost rental income.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Landlord Quote <Building2 className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-orange-600/80 border-2 border-white text-white hover:bg-orange-700/80 backdrop-blur-sm font-semibold px-8 py-4 h-auto"
                  onClick={() => {
                    const protectionSection = document.querySelector('.benefits-section');
                    protectionSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Calculate Coverage <Calculator className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Comprehensive Landlord Protection</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Specialized coverage designed for rental property owners and real estate investors
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {coverageTypes.map((coverage, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                          <coverage.icon className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                            {coverage.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-1">
                            {coverage.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {coverage.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
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

        {/* Property Types */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage for All Property Types</h2>
                <p className="text-xl text-muted-foreground">
                  Tailored insurance solutions for different rental property investments
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {propertyTypes.map((property, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                    <CardHeader className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                        <Building2 className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                        {property.type}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {property.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {property.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
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

        {/* Benefits Section */}
        <section className="py-20 benefits-section">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Why Landlords Need Specialized Insurance</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Standard homeowner's insurance doesn't cover rental properties. 
                    Protect your investment with coverage designed for landlords.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Shield className="h-8 w-8" />
                        Protection Example
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Property Damage</span>
                          <span className="font-bold">$500,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Liability Coverage</span>
                          <span className="font-bold">$2,000,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Lost Rental Income</span>
                          <span className="font-bold">12 months</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Legal Expenses</span>
                          <span className="font-bold">$25,000</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Monthly Premium</span>
                          <span className="text-orange-600">$95</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Tips */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Expert Tips for Landlords</h2>
                <p className="text-xl text-muted-foreground">
                  Best practices to protect your rental property investment
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {tips.map((tip, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                          <CheckCircle className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                          {tip.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Rental Property?</h2>
              <p className="text-xl text-orange-100 mb-8">
                Get specialized landlord insurance quotes from Canada's top providers. 
                Ensure your investment property is properly protected.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Landlord Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Expert
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

export default LandlordInsurance;
