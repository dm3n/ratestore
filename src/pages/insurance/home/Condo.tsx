import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Shield, Users, Calculator, CheckCircle, ArrowRight, Phone, TrendingUp, Clock, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
const CondoInsurance = () => {
  const coverageTypes = [{
    title: "Unit Improvements & Betterments",
    description: "Covers renovations and improvements you've made to your unit",
    icon: Wrench,
    features: ["Kitchen renovations", "Flooring upgrades", "Built-in fixtures", "Custom millwork"]
  }, {
    title: "Personal Property Coverage",
    description: "Protection for your belongings inside your condo unit",
    icon: Home,
    features: ["Furniture & electronics", "Clothing & jewelry", "Art & collectibles", "Off-premises coverage"]
  }, {
    title: "Liability Protection",
    description: "Coverage for accidents and injuries in your condo unit",
    icon: Users,
    features: ["Visitor injuries", "Property damage claims", "Legal defense costs", "Medical payments"]
  }, {
    title: "Loss Assessment Coverage",
    description: "Protection against special assessments from your condo corporation",
    icon: Shield,
    features: ["Building repairs", "Liability claims", "Deductible coverage", "Special assessments"]
  }];
  const condoVsHomeowner = [{
    aspect: "Building Structure",
    condo: "Covered by condo corporation",
    homeowner: "Your responsibility"
  }, {
    aspect: "Unit Interior",
    condo: "Your responsibility (improvements)",
    homeowner: "Your responsibility"
  }, {
    aspect: "Common Areas",
    condo: "Covered by condo corporation",
    homeowner: "N/A"
  }, {
    aspect: "Personal Property",
    condo: "Your responsibility",
    homeowner: "Your responsibility"
  }];
  const tips = [{
    title: "Review Your Condo Corporation's Policy",
    description: "Understand what your building's master policy covers to avoid gaps in coverage."
  }, {
    title: "Document Your Improvements",
    description: "Keep receipts and photos of all renovations and improvements for claims purposes."
  }, {
    title: "Consider Loss Assessment Coverage",
    description: "Protect yourself from unexpected special assessments from your condo board."
  }, {
    title: "Bundle for Savings",
    description: "Combine condo insurance with auto insurance for significant discounts."
  }];
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-purple-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Building className="h-4 w-4 mr-2" />
                Specialized Condo Coverage
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Condo Insurance
                <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Tailored Protection
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Specialized insurance coverage for condominium owners. Protect your unit improvements, 
                personal property, and guard against special assessments.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto">
                  Get Condo Quote <Building className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">What Condo Insurance Covers</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection designed specifically for condominium owners
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {coverageTypes.map((coverage, index) => <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                          <coverage.icon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
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
                        {coverage.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>)}
                      </ul>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* Condo vs Homeowner Comparison */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Condo vs Homeowner Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Understanding the key differences in coverage responsibilities
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="bg-purple-600 text-white p-6 text-center font-semibold">
                    Coverage Aspect
                  </div>
                  <div className="bg-purple-500 text-white p-6 text-center font-semibold">
                    Condo Insurance
                  </div>
                  <div className="bg-purple-400 text-white p-6 text-center font-semibold">
                    Homeowner Insurance
                  </div>
                </div>
                {condoVsHomeowner.map((item, index) => <div key={index} className="grid md:grid-cols-3 gap-0 border-b border-gray-200 last:border-b-0">
                    <div className="p-6 font-medium bg-gray-50">
                      {item.aspect}
                    </div>
                    <div className="p-6 text-center">
                      {item.condo}
                    </div>
                    <div className="p-6 text-center">
                      {item.homeowner}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Expert Tips */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Expert Tips for Condo Owners</h2>
                <p className="text-xl text-muted-foreground">
                  Essential advice to ensure you have the right coverage
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {tips.map((tip, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                          <CheckCircle className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                          {tip.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Condo?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Get specialized condo insurance quotes from Canada's top providers. 
                Ensure you have the right coverage for your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Condo Quote <ArrowRight className="ml-2 h-5 w-5" />
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
    </div>;
};
export default CondoInsurance;