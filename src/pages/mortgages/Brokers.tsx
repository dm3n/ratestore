
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserCheck, MapPin, Star, Phone, Mail, Globe, Search, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface MortgageBroker {
  id: string;
  name: string;
  company: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  description: string;
  experience: number;
  provinces: string[];
  phone?: string;
  email?: string;
  website?: string;
  languages: string[];
  credentials: string[];
}

const brokers: MortgageBroker[] = [
  {
    id: "broker1",
    name: "Sarah Johnson",
    company: "Prime Mortgage Solutions",
    rating: 4.9,
    reviewCount: 127,
    specialties: ["First-time buyers", "Self-employed", "Investment properties"],
    description: "Experienced mortgage broker specializing in complex financing scenarios with access to 50+ lenders.",
    experience: 12,
    provinces: ["ON", "BC"],
    phone: "416-555-0123",
    email: "sarah@primemortgage.ca",
    website: "primemortgage.ca",
    languages: ["English", "French"],
    credentials: ["AMP", "CAAMP Member"]
  },
  {
    id: "broker2",
    name: "Michael Chen",
    company: "Urban Mortgage Group",
    rating: 4.8,
    reviewCount: 89,
    specialties: ["New to Canada", "Commercial", "Refinancing"],
    description: "Bilingual mortgage professional with expertise in helping newcomers navigate Canadian mortgage market.",
    experience: 8,
    provinces: ["ON", "AB"],
    phone: "647-555-0456",
    email: "michael@urbanmortgage.ca",
    website: "urbanmortgage.ca",
    languages: ["English", "Mandarin", "Cantonese"],
    credentials: ["AMP", "MBRCC Certified"]
  },
  {
    id: "broker3",
    name: "Jennifer Thompson",
    company: "Atlantic Mortgage Partners",
    rating: 4.7,
    reviewCount: 156,
    specialties: ["Rural properties", "Construction loans", "Bad credit"],
    description: "Maritime mortgage specialist with deep knowledge of regional lending programs and rural financing.",
    experience: 15,
    provinces: ["NS", "NB", "PE"],
    phone: "902-555-0789",
    email: "jennifer@atlanticmortgage.ca",
    website: "atlanticmortgage.ca",
    languages: ["English", "French"],
    credentials: ["AMP", "NSMA Member"]
  },
  {
    id: "broker4",
    name: "David Kim",
    company: "West Coast Lending",
    rating: 4.9,
    reviewCount: 203,
    specialties: ["Luxury homes", "Foreign buyers", "Bridge financing"],
    description: "Vancouver-based broker specializing in high-value properties and international client services.",
    experience: 10,
    provinces: ["BC"],
    phone: "604-555-0321",
    email: "david@westcoastlending.ca",
    website: "westcoastlending.ca",
    languages: ["English", "Korean", "Mandarin"],
    credentials: ["AMP", "BCMBA Member", "CIM"]
  },
  {
    id: "broker5",
    name: "Marie Dubois",
    company: "Quebec Mortgage Solutions",
    rating: 4.6,
    reviewCount: 94,
    specialties: ["Quebec programs", "French service", "First-time buyers"],
    description: "Bilingual Quebec mortgage specialist with expertise in provincial programs and French-language service.",
    experience: 9,
    provinces: ["QC"],
    phone: "514-555-0654",
    email: "marie@qcmortgage.ca",
    website: "qcmortgage.ca",
    languages: ["French", "English"],
    credentials: ["AMP", "ACCEQ Member"]
  },
  {
    id: "broker6",
    name: "Robert Anderson",
    company: "Prairie Mortgage Network",
    rating: 4.8,
    reviewCount: 78,
    specialties: ["Agricultural", "Investment properties", "Renewals"],
    description: "Prairie-focused broker with agricultural lending expertise and strong relationships with regional lenders.",
    experience: 18,
    provinces: ["AB", "SK", "MB"],
    phone: "403-555-0987",
    email: "robert@prairiemortgage.ca",
    website: "prairiemortgage.ca",
    languages: ["English"],
    credentials: ["AMP", "AMBOA Member", "AFI"]
  }
];

const Brokers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const allSpecialties = Array.from(new Set(brokers.flatMap(broker => broker.specialties)));

  const filteredBrokers = brokers.filter(broker => {
    const matchesSearch = broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         broker.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         broker.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = selectedProvince === "all" || broker.provinces.includes(selectedProvince);
    const matchesSpecialty = selectedSpecialty === "all" || broker.specialties.includes(selectedSpecialty);
    
    return matchesSearch && matchesProvince && matchesSpecialty;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
              <UserCheck className="h-3 w-3 mr-1" />
              Mortgage Brokers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Find a Mortgage Broker
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with experienced mortgage brokers who can help you navigate the lending landscape, 
              compare options from multiple lenders, and secure the best mortgage for your needs.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">{brokers.length}</div>
                <div className="text-sm text-muted-foreground">Brokers</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-muted-foreground">Lenders</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">Free</div>
                <div className="text-sm text-muted-foreground">Service</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600">Expert</div>
                <div className="text-sm text-muted-foreground">Advice</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search brokers or companies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-white"
                  >
                    <option value="all">All Provinces</option>
                    <option value="ON">Ontario</option>
                    <option value="BC">British Columbia</option>
                    <option value="AB">Alberta</option>
                    <option value="QC">Quebec</option>
                    <option value="MB">Manitoba</option>
                    <option value="SK">Saskatchewan</option>
                    <option value="NB">New Brunswick</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="NL">Newfoundland</option>
                  </select>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-white"
                  >
                    <option value="all">All Specialties</option>
                    {allSpecialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Brokers Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-green-500" />
              <h2 className="text-2xl font-bold">Available Mortgage Brokers</h2>
              <Badge variant="outline" className="ml-2">
                {filteredBrokers.length} brokers
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredBrokers.map((broker, index) => (
                <motion.div
                  key={broker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <UserCheck className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{broker.name}</CardTitle>
                            <p className="text-muted-foreground font-medium">{broker.company}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(broker.rating)
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                                <span className="text-sm text-muted-foreground ml-1">
                                  {broker.rating} ({broker.reviewCount} reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-600">
                          {broker.experience} years exp.
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <CardDescription className="mb-4 text-base">
                        {broker.description}
                      </CardDescription>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Specialties</h4>
                          <div className="flex flex-wrap gap-1">
                            {broker.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Languages</h4>
                          <div className="flex flex-wrap gap-1">
                            {broker.languages.map((language, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {language}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Credentials</h4>
                          <div className="flex flex-wrap gap-1">
                            {broker.credentials.map((credential, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                {credential}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Serving</h4>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {broker.provinces.join(", ")}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button className="flex-1 bg-green-600 hover:bg-green-700">
                            Contact Broker
                          </Button>
                          <div className="flex gap-2">
                            {broker.phone && (
                              <Button variant="outline" size="sm">
                                <Phone className="h-4 w-4" />
                              </Button>
                            )}
                            {broker.email && (
                              <Button variant="outline" size="sm">
                                <Mail className="h-4 w-4" />
                              </Button>
                            )}
                            {broker.website && (
                              <Button variant="outline" size="sm">
                                <Globe className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* No Results */}
          {filteredBrokers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <UserCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No brokers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}

          {/* Why Use a Broker Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Use a Mortgage Broker?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mortgage brokers work for you, not the lenders, providing unbiased advice and access to multiple lending options.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Access to Multiple Lenders",
                  description: "Brokers have relationships with 50+ lenders, including banks, credit unions, and alternative lenders.",
                  icon: "🏦"
                },
                {
                  title: "Expert Guidance",
                  description: "Professional advice on mortgage products, rates, and terms to help you make informed decisions.",
                  icon: "🎯"
                },
                {
                  title: "No Cost to You",
                  description: "Broker services are typically free to borrowers - they're paid by the lender upon successful completion.",
                  icon: "💰"
                }
              ].map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </Card>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Brokers;
