
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Home, Shield, Calculator, CheckCircle, 
  ArrowRight, Phone, MapPin, DollarSign, Clock, Users
} from "lucide-react";
import { useState } from "react";

const HomeInsuranceQuotes = () => {
  const [formData, setFormData] = useState({
    postalCode: "",
    homeType: "",
    yearBuilt: "",
    homeValue: ""
  });

  const coverageTypes = [
    {
      title: "Dwelling Coverage",
      description: "Protects the structure of your home",
      icon: Home,
      coverage: "Up to $1M+"
    },
    {
      title: "Personal Property",
      description: "Covers your belongings and furniture",
      icon: Shield,
      coverage: "Up to $500K"
    },
    {
      title: "Liability Protection",
      description: "Protects against lawsuits and injuries",
      icon: Users,
      coverage: "Up to $2M"
    }
  ];

  const provinces = [
    "Ontario", "British Columbia", "Alberta", "Quebec", 
    "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick",
    "Newfoundland and Labrador", "Prince Edward Island",
    "Northwest Territories", "Nunavut", "Yukon"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                    <Home className="h-4 w-4 mr-2" />
                    Home Insurance Quotes
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                    Protect Your Home
                    <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                      Save Up to 25%
                    </span>
                  </h1>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Compare home insurance quotes from Canada's top providers. 
                    Get comprehensive coverage at competitive rates in minutes.
                  </p>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>2-minute quotes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      <span>Free comparison</span>
                    </div>
                  </div>
                </div>
                
                {/* Quote Form */}
                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-900">Get Your Free Quote</CardTitle>
                    <CardDescription className="text-gray-600">
                      Compare rates from top Canadian insurers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input
                        id="postal-code"
                        placeholder="e.g., M5V 3A8"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="home-type">Property Type</Label>
                      <Select value={formData.homeType} onValueChange={(value) => setFormData({...formData, homeType: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="detached">Detached House</SelectItem>
                          <SelectItem value="semi-detached">Semi-Detached</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="year-built">Year Built</Label>
                      <Input
                        id="year-built"
                        placeholder="e.g., 1995"
                        value={formData.yearBuilt}
                        onChange={(e) => setFormData({...formData, yearBuilt: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="home-value">Estimated Home Value</Label>
                      <Input
                        id="home-value"
                        placeholder="e.g., $500,000"
                        value={formData.homeValue}
                        onChange={(e) => setFormData({...formData, homeValue: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 font-semibold py-3 h-auto">
                      Get Free Quotes <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      No obligation. Compare rates in 2 minutes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What Home Insurance Covers</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection for your home and belongings
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
                        {coverage.coverage}
                      </div>
                      <CardDescription className="text-base">
                        {coverage.description}
                      </CardDescription>
                    </CardHeader>
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
                  <h2 className="text-4xl font-bold mb-6">Why Choose Our Service?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Compare Multiple Quotes</h3>
                        <p className="text-gray-600">Get quotes from Canada's top insurers in one place</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Save Time & Money</h3>
                        <p className="text-gray-600">Find the best rates without calling multiple companies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Expert Support</h3>
                        <p className="text-gray-600">Get help from licensed insurance professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">No Hidden Fees</h3>
                        <p className="text-gray-600">Our service is completely free with no obligations</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <DollarSign className="h-8 w-8" />
                        Average Savings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">$347</div>
                        <p className="text-gray-600 mb-4">Average annual savings when you compare</p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600">Based on 2024 customer data</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Save on Home Insurance?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized quotes from top Canadian insurers in minutes
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quotes <ArrowRight className="ml-2 h-5 w-5" />
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

export default HomeInsuranceQuotes;
