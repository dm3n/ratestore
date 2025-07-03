
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { 
  Briefcase, Shield, Building, Users, CheckCircle, ArrowRight, 
  Star, Phone, Mail, TrendingUp, Award, AlertCircle, DollarSign 
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BusinessInsuranceQuotes = () => {
  const [formData, setFormData] = useState({
    businessType: "",
    industry: "",
    employees: "",
    revenue: "",
    location: "",
    coverage: [],
    businessAge: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const coverageTypes = [
    {
      title: "General Liability",
      description: "Protection against third-party claims",
      price: "From $25/month",
      features: ["Bodily injury coverage", "Property damage", "Personal injury claims", "Legal defense costs"],
      essential: true
    },
    {
      title: "Professional Liability",
      description: "Coverage for professional errors & omissions",
      price: "From $45/month",
      features: ["Errors & omissions", "Negligence claims", "Defense costs", "Regulatory proceedings"],
      essential: false
    },
    {
      title: "Commercial Property",
      description: "Protection for business property & equipment",
      price: "From $35/month",
      features: ["Building coverage", "Equipment protection", "Inventory coverage", "Business interruption"],
      essential: true
    },
    {
      title: "Cyber Liability",
      description: "Protection against cyber threats & data breaches",
      price: "From $55/month",
      features: ["Data breach response", "Cyber extortion", "Business interruption", "Regulatory fines"],
      essential: false
    }
  ];

  const industries = [
    { name: "Technology", risk: "Medium", avgPremium: "$180/month" },
    { name: "Healthcare", risk: "High", avgPremium: "$320/month" },
    { name: "Retail", risk: "Medium", avgPremium: "$150/month" },
    { name: "Construction", risk: "High", avgPremium: "$280/month" },
    { name: "Consulting", risk: "Low", avgPremium: "$120/month" },
    { name: "Manufacturing", risk: "High", avgPremium: "$340/month" }
  ];

  const benefits = [
    { icon: Shield, title: "Legal Protection", description: "Defense against lawsuits and claims" },
    { icon: DollarSign, title: "Financial Security", description: "Protect your business assets" },
    { icon: TrendingUp, title: "Business Continuity", description: "Keep operations running after incidents" },
    { icon: Award, title: "Professional Credibility", description: "Build trust with clients and partners" }
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
                Business Insurance Quotes
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
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Policies <Building className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Get Your Business Insurance Quote</h2>
                <p className="text-xl text-muted-foreground">
                  Tell us about your business and we'll provide customized coverage recommendations
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Business Insurance Quote Form</CardTitle>
                  <CardDescription>Get personalized quotes from top Canadian insurers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Business Type</Label>
                      <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="llc">Limited Liability Company</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Industry</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Number of Employees</Label>
                      <Select value={formData.employees} onValueChange={(value) => handleInputChange('employees', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Just me (1)</SelectItem>
                          <SelectItem value="2-5">2-5 employees</SelectItem>
                          <SelectItem value="6-10">6-10 employees</SelectItem>
                          <SelectItem value="11-25">11-25 employees</SelectItem>
                          <SelectItem value="26-50">26-50 employees</SelectItem>
                          <SelectItem value="51-100">51-100 employees</SelectItem>
                          <SelectItem value="100+">100+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Annual Revenue</Label>
                      <Select value={formData.revenue} onValueChange={(value) => handleInputChange('revenue', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select revenue range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                          <SelectItem value="500k-1m">$500,000 - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m+">$5M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Business Location</Label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select province" />
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
                    <div className="space-y-2">
                      <Label>Business Age</Label>
                      <Select value={formData.businessAge} onValueChange={(value) => handleInputChange('businessAge', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business age" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup (0-1 years)</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Coverage Types Needed (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-4">
                      {["General Liability", "Professional Liability", "Commercial Property", "Cyber Liability", "Workers' Compensation", "Commercial Auto"].map((coverage) => (
                        <div key={coverage} className="flex items-center space-x-2">
                          <Checkbox
                            id={coverage}
                            checked={formData.coverage.includes(coverage)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleInputChange('coverage', [...formData.coverage, coverage]);
                              } else {
                                handleInputChange('coverage', formData.coverage.filter(c => c !== coverage));
                              }
                            }}
                          />
                          <Label htmlFor={coverage} className="text-sm">{coverage}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Briefly describe your business activities..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Why This Information Matters:</p>
                        <p>Your business details help us recommend the most appropriate coverage and provide accurate quotes from insurers.</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg">
                    Get My Free Quotes <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Business Insurance Coverage Types</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive protection for every aspect of your business
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coverageTypes.map((type, index) => (
                  <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {type.essential && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Essential
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
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
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Insights */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Insurance Costs by Industry</h2>
                <p className="text-xl text-muted-foreground">
                  Understanding average premiums helps you budget for business insurance
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <CardContent className="pt-6">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                      <Badge variant="outline" className={`mb-2 ${
                        industry.risk === 'High' ? 'border-red-200 text-red-600' :
                        industry.risk === 'Medium' ? 'border-yellow-200 text-yellow-600' :
                        'border-green-200 text-green-600'
                      }`}>
                        {industry.risk} Risk
                      </Badge>
                      <div className="text-lg font-semibold text-blue-600 mb-4">{industry.avgPremium}</div>
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

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get comprehensive business insurance quotes and safeguard your company's future
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
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

export default BusinessInsuranceQuotes;
