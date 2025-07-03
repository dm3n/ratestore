
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
import { 
  Plane, Globe, Heart, Shield, CheckCircle, ArrowRight, 
  Users, Star, Phone, Mail, MapPin, Calendar, AlertTriangle 
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TravelInsuranceQuotes = () => {
  const [formData, setFormData] = useState({
    tripType: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: "",
    ages: "",
    coverage: "",
    preExisting: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const coverageOptions = [
    {
      title: "Single Trip",
      description: "Perfect for one-time vacations",
      price: "From $15/trip",
      features: ["Emergency medical", "Trip cancellation", "Baggage protection", "Flight delay"],
      popular: true
    },
    {
      title: "Multi-Trip Annual",
      description: "For frequent travelers",
      price: "From $89/year",
      features: ["Unlimited trips", "Emergency medical", "Trip interruption", "24/7 assistance"],
      popular: false
    },
    {
      title: "Medical Only",
      description: "Essential emergency medical coverage",
      price: "From $8/trip",
      features: ["Emergency medical", "Hospital coverage", "Medical evacuation", "Prescription drugs"],
      popular: false
    }
  ];

  const destinations = [
    { region: "USA", coverage: "Up to $5M", premium: "$25" },
    { region: "Europe", coverage: "Up to $2M", premium: "$45" },
    { region: "Asia", coverage: "Up to $2M", premium: "$65" },
    { region: "Worldwide", coverage: "Up to $5M", premium: "$85" }
  ];

  const benefits = [
    { icon: Heart, title: "Emergency Medical", description: "Comprehensive medical coverage abroad" },
    { icon: Plane, title: "Trip Protection", description: "Cancellation and interruption coverage" },
    { icon: Shield, title: "24/7 Assistance", description: "Round-the-clock emergency support" },
    { icon: Globe, title: "Worldwide Coverage", description: "Protection anywhere you travel" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-purple-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Plane className="h-4 w-4 mr-2" />
                Travel Insurance Quotes
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Travel with
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Complete Confidence
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get comprehensive travel insurance quotes from Canada's top providers. 
                Protect your trip investment and stay covered anywhere in the world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Plans <Globe className="ml-2 h-5 w-5" />
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
                <h2 className="text-4xl font-bold mb-4">Get Your Travel Insurance Quote</h2>
                <p className="text-xl text-muted-foreground">
                  Tell us about your trip and we'll find the best coverage options for you
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Travel Insurance Quote Form</CardTitle>
                  <CardDescription>Get instant quotes from top Canadian insurers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label>Trip Type</Label>
                    <RadioGroup value={formData.tripType} onValueChange={(value) => handleInputChange('tripType', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single">Single Trip</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multi" id="multi" />
                        <Label htmlFor="multi">Multi-Trip Annual Plan</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Primary Destination</Label>
                      <Select value={formData.destination} onValueChange={(value) => handleInputChange('destination', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="caribbean">Caribbean</SelectItem>
                          <SelectItem value="mexico">Mexico</SelectItem>
                          <SelectItem value="worldwide">Worldwide</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Travelers</Label>
                      <Select value={formData.travelers} onValueChange={(value) => handleInputChange('travelers', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Traveler</SelectItem>
                          <SelectItem value="2">2 Travelers</SelectItem>
                          <SelectItem value="3">3 Travelers</SelectItem>
                          <SelectItem value="4">4 Travelers</SelectItem>
                          <SelectItem value="5+">5+ Travelers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="departure">Departure Date</Label>
                      <Input
                        id="departure"
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => handleInputChange('departureDate', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="return">Return Date</Label>
                      <Input
                        id="return"
                        type="date"
                        value={formData.returnDate}
                        onChange={(e) => handleInputChange('returnDate', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ages">Ages of All Travelers (comma separated)</Label>
                    <Input
                      id="ages"
                      placeholder="e.g., 35, 32, 8, 5"
                      value={formData.ages}
                      onChange={(e) => handleInputChange('ages', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Coverage Amount</Label>
                    <Select value={formData.coverage} onValueChange={(value) => handleInputChange('coverage', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select coverage amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000000">$1,000,000</SelectItem>
                        <SelectItem value="2000000">$2,000,000</SelectItem>
                        <SelectItem value="5000000">$5,000,000</SelectItem>
                        <SelectItem value="10000000">$10,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="preExisting" 
                      checked={formData.preExisting}
                      onCheckedChange={(checked) => handleInputChange('preExisting', checked as boolean)}
                    />
                    <Label htmlFor="preExisting" className="text-sm">
                      I have pre-existing medical conditions that need coverage
                    </Label>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <p className="font-medium mb-1">Important Note:</p>
                        <p>Travel insurance should be purchased within 7 days of your initial trip deposit for full coverage benefits.</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 text-lg">
                    Get My Free Quotes <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Travel Insurance Coverage Options</h2>
                <p className="text-xl text-muted-foreground">
                  Choose the right protection for your travel needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {coverageOptions.map((option, index) => (
                  <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {option.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                      <CardDescription className="text-base">{option.description}</CardDescription>
                      <div className="text-2xl font-bold text-purple-600 mt-2">{option.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Destination Coverage */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage by Destination</h2>
                <p className="text-xl text-muted-foreground">
                  Different destinations require different coverage levels
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinations.map((dest, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                    <CardContent className="pt-6">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{dest.region}</h3>
                      <p className="text-gray-600 mb-2">{dest.coverage}</p>
                      <div className="text-lg font-semibold text-purple-600 mb-4">Starting at {dest.premium}</div>
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
        <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why You Need Travel Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Protect yourself from unexpected travel expenses and emergencies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Travel with Confidence?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Get comprehensive travel insurance quotes and protect your next adventure
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 h-auto">
                  Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-TRAVEL-INS
                </Button>
              </div>
              <p className="text-purple-200">
                Questions? Email us at <a href="mailto:travel@ratestore.ca" className="underline hover:text-white">travel@ratestore.ca</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelInsuranceQuotes;
