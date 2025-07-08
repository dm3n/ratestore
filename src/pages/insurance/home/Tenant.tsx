
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building, Shield, Users, Calculator, CheckCircle, 
  ArrowRight, Phone, TrendingUp, Clock, AlertTriangle, DollarSign 
} from "lucide-react";
import { Link } from "react-router-dom";

const TenantInsurance = () => {
  const coverageTypes = [
    {
      title: "Personal Property Coverage",
      description: "Protection for your belongings inside your rental unit",
      icon: Shield,
      amount: "Up to $50,000",
      details: "Covers furniture, electronics, clothing, and personal items"
    },
    {
      title: "Liability Protection",
      description: "Coverage for accidents that happen in your rental unit",
      icon: Users,
      amount: "Up to $2M",
      details: "Protects against lawsuits from injuries to visitors"
    },
    {
      title: "Additional Living Expenses",
      description: "Temporary housing costs if your unit becomes uninhabitable",
      icon: Building,
      amount: "Up to $10,000",
      details: "Hotel, meals, and other expenses while displaced"
    }
  ];

  const benefits = [
    "Protect your personal belongings from theft, fire, and water damage",
    "Liability coverage for accidents in your rental unit",
    "Additional living expenses if you're temporarily displaced",
    "Coverage for belongings stored off-premises",
    "Identity theft protection and recovery services",
    "Legal expense coverage for tenant disputes"
  ];

  const myths = [
    {
      myth: "My landlord's insurance covers my belongings",
      reality: "Landlord insurance only covers the building structure, not your personal property"
    },
    {
      myth: "Tenant insurance is too expensive",
      reality: "Most policies cost less than $25/month - less than a daily coffee"
    },
    {
      myth: "I don't have enough stuff to insure",
      reality: "You'd be surprised - clothes, electronics, and furniture add up quickly"
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
                <Building className="h-4 w-4 mr-2" />
                Tenant Insurance Protection
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Tenant Insurance
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Starting at $25/month
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Protect your belongings and liability as a renter. Get comprehensive 
                tenant insurance coverage for less than the cost of a daily coffee.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Tenant Quote <Building className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto" onClick={() => document.getElementById('coverage-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Calculate Coverage <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section id="coverage-section" className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What Tenant Insurance Covers</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection for renters at an affordable price
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {coverageTypes.map((coverage, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <coverage.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {coverage.title}
                      </CardTitle>
                      <div className="text-2xl font-bold text-blue-600 mt-2">
                        {coverage.amount}
                      </div>
                      <CardDescription className="text-base">
                        {coverage.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        {coverage.details}
                      </p>
                      <Button variant="outline" className="w-full group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Why Every Renter Needs Tenant Insurance</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Don't let unexpected events leave you financially vulnerable. 
                    Tenant insurance provides essential protection at an affordable price.
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
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <DollarSign className="h-8 w-8" />
                        Coverage Example
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Personal Property</span>
                          <span className="font-bold">$25,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Liability Coverage</span>
                          <span className="font-bold">$1,000,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Additional Living Expenses</span>
                          <span className="font-bold">$5,000</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Monthly Premium</span>
                          <span className="text-blue-600">$25</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Myths vs Reality */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Common Tenant Insurance Myths</h2>
                <p className="text-xl text-muted-foreground">
                  Don't let these misconceptions leave you unprotected
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {myths.map((item, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                        <span className="text-sm font-medium text-red-600">MYTH</span>
                      </div>
                      <CardTitle className="text-lg text-red-600">
                        {item.myth}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <span className="text-sm font-medium text-green-600">REALITY</span>
                      </div>
                      <p className="text-gray-700">{item.reality}</p>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Belongings?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get a tenant insurance quote in minutes. Most renters save money by bundling with auto insurance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Tenant Quote <ArrowRight className="ml-2 h-5 w-5" />
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

export default TenantInsurance;
