
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, Shield, Calculator, CheckCircle, ArrowRight, 
  Users, Star, Phone, Mail, Clock, Award, TrendingUp 
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LifeInsuranceQuotes = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    smoker: "",
    coverage: "",
    term: "",
    health: "",
    province: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const insuranceTypes = [
    {
      title: "Term Life Insurance",
      description: "Affordable coverage for a specific period",
      price: "From $25/month",
      features: ["Fixed premiums", "Renewable terms", "Convertible options"],
      popular: true
    },
    {
      title: "Whole Life Insurance",
      description: "Permanent coverage with cash value",
      price: "From $85/month",
      features: ["Lifetime coverage", "Cash value growth", "Dividend potential"],
      popular: false
    },
    {
      title: "Universal Life Insurance",
      description: "Flexible premiums and death benefits",
      price: "From $65/month",
      features: ["Flexible premiums", "Investment options", "Tax advantages"],
      popular: false
    }
  ];

  const benefits = [
    { icon: Shield, title: "Financial Security", description: "Protect your family's financial future" },
    { icon: Heart, title: "Peace of Mind", description: "Know your loved ones are covered" },
    { icon: TrendingUp, title: "Cash Value Growth", description: "Build wealth with permanent policies" },
    { icon: Award, title: "Tax Benefits", description: "Tax-free death benefits for beneficiaries" }
  ];

  const providers = [
    { name: "Sun Life", rating: 4.8, premium: "$32/month" },
    { name: "Manulife", rating: 4.7, premium: "$28/month" },
    { name: "Great-West Life", rating: 4.6, premium: "$35/month" },
    { name: "Desjardins", rating: 4.5, premium: "$30/month" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-red-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Heart className="h-4 w-4 mr-2" />
                Life Insurance Quotes
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Protect Your Family's
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get personalized life insurance quotes from Canada's top providers. 
                Compare coverage options and find the perfect policy for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Providers <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Get Your Life Insurance Quote</h2>
                <p className="text-xl text-muted-foreground">
                  Answer a few questions to receive personalized quotes from top Canadian insurers
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Life Insurance Quote Calculator</CardTitle>
                  <CardDescription>Get instant quotes tailored to your needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Gender</Label>
                      <RadioGroup value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Smoking Status</Label>
                      <Select value={formData.smoker} onValueChange={(value) => handleInputChange('smoker', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select smoking status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="non-smoker">Non-smoker</SelectItem>
                          <SelectItem value="smoker">Smoker</SelectItem>
                          <SelectItem value="former">Former smoker (quit 1+ years ago)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Coverage Amount</Label>
                      <Select value={formData.coverage} onValueChange={(value) => handleInputChange('coverage', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select coverage amount" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100000">$100,000</SelectItem>
                          <SelectItem value="250000">$250,000</SelectItem>
                          <SelectItem value="500000">$500,000</SelectItem>
                          <SelectItem value="1000000">$1,000,000</SelectItem>
                          <SelectItem value="2000000">$2,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Term Length</Label>
                      <Select value={formData.term} onValueChange={(value) => handleInputChange('term', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select term length" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 Years</SelectItem>
                          <SelectItem value="20">20 Years</SelectItem>
                          <SelectItem value="30">30 Years</SelectItem>
                          <SelectItem value="permanent">Permanent/Whole Life</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Health Status</Label>
                      <Select value={formData.health} onValueChange={(value) => handleInputChange('health', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select health status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Province</Label>
                    <Select value={formData.province} onValueChange={(value) => handleInputChange('province', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ON">Ontario</SelectItem>
                        <SelectItem value="QC">Quebec</SelectItem>
                        <SelectItem value="BC">British Columbia</SelectItem>
                        <SelectItem value="AB">Alberta</SelectItem>
                        <SelectItem value="SK">Saskatchewan</SelectItem>
                        <SelectItem value="MB">Manitoba</SelectItem>
                        <SelectItem value="NS">Nova Scotia</SelectItem>
                        <SelectItem value="NB">New Brunswick</SelectItem>
                        <SelectItem value="NL">Newfoundland</SelectItem>
                        <SelectItem value="PE">Prince Edward Island</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg">
                    Get My Free Quotes <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Insurance Types */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Life Insurance Coverage Options</h2>
                <p className="text-xl text-muted-foreground">
                  Choose from different types of life insurance to meet your specific needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {insuranceTypes.map((type, index) => (
                  <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {type.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-base">{type.description}</CardDescription>
                      <div className="text-2xl font-bold text-red-600 mt-2">{type.price}</div>
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
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Life Insurance Matters</h2>
                <p className="text-xl text-muted-foreground">
                  Life insurance provides essential financial protection for your loved ones
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

        {/* Providers Comparison */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Top Life Insurance Providers</h2>
                <p className="text-xl text-muted-foreground">
                  Compare quotes from Canada's most trusted life insurance companies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {providers.map((provider, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                      <div className="flex items-center justify-center mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{provider.rating}</span>
                      </div>
                      <div className="text-lg font-semibold text-red-600 mb-4">{provider.premium}</div>
                      <Button variant="outline" className="w-full">
                        Get Quote
                      </Button>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Family?</h2>
              <p className="text-xl text-red-100 mb-8">
                Get personalized life insurance quotes in minutes and secure your family's financial future
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-LIFE-INS
                </Button>
              </div>
              <p className="text-red-200">
                Questions? Email us at <a href="mailto:life@ratestore.ca" className="underline hover:text-white">life@ratestore.ca</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LifeInsuranceQuotes;
