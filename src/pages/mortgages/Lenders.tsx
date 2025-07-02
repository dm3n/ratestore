
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Building2, Shield, Users, TrendingUp, Search, Filter, Phone, Globe, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface MortgageLender {
  id: string;
  name: string;
  type: "bank" | "credit-union" | "monoline" | "alternative";
  rating: number;
  minRate: number;
  specialties: string[];
  description: string;
  features: string[];
  provinces: string[];
  phone?: string;
  website?: string;
  logo?: string;
  established?: number;
}

const lenders: MortgageLender[] = [
  {
    id: "rbc",
    name: "RBC Royal Bank",
    type: "bank",
    rating: 4.5,
    minRate: 4.24,
    specialties: ["First-time buyers", "Investment properties", "Commercial"],
    description: "Canada's largest bank offering comprehensive mortgage solutions with competitive rates and extensive branch network.",
    features: ["Pre-approval in 24 hours", "Mobile mortgage specialist", "Rate protection", "Flexible payment options"],
    provinces: ["ON", "BC", "AB", "MB", "SK", "QC", "NB", "NS", "PE", "NL"],
    phone: "1-800-769-2511",
    website: "rbc.com",
    established: 1869
  },
  {
    id: "td",
    name: "TD Canada Trust",
    type: "bank",
    rating: 4.3,
    minRate: 4.19,
    specialties: ["New to Canada", "Self-employed", "Refinancing"],
    description: "Leading Canadian bank with innovative digital tools and personalized mortgage advice.",
    features: ["MyMortgage app", "Extended hours", "New to Canada program", "Professional advice"],
    provinces: ["ON", "BC", "AB", "MB", "SK", "QC", "NB", "NS", "PE", "NL"],
    phone: "1-866-222-3456",
    website: "td.com",
    established: 1855
  },
  {
    id: "scotiabank",
    name: "Scotiabank",
    type: "bank",
    rating: 4.2,
    minRate: 4.29,
    specialties: ["International clients", "Investment properties", "Construction loans"],
    description: "International bank with strong presence in Canada offering diverse mortgage products.",
    features: ["Scotia Total Equity Plan", "International experience", "Construction financing", "Flexible terms"],
    provinces: ["ON", "BC", "AB", "MB", "SK", "QC", "NB", "NS", "PE", "NL"],
    phone: "1-800-472-6842",
    website: "scotiabank.com",
    established: 1832
  },
  {
    id: "bmo",
    name: "BMO Bank of Montreal",
    type: "bank",
    rating: 4.1,
    minRate: 4.34,
    specialties: ["Smart Fixed", "Variable rate", "Professional programs"],
    description: "Canada's oldest bank providing innovative mortgage solutions and expert financial advice.",
    features: ["Smart Fixed mortgage", "Rate guarantee", "Professional programs", "Digital tools"],
    provinces: ["ON", "BC", "AB", "MB", "SK", "QC", "NB", "NS", "PE", "NL"],
    phone: "1-877-225-5266",
    website: "bmo.com",
    established: 1817
  },
  {
    id: "cibc",
    name: "CIBC",
    type: "bank",
    rating: 4.0,
    minRate: 4.39,
    specialties: ["Smart Start", "New Canadians", "Investment properties"],
    description: "Major Canadian bank offering comprehensive mortgage services with personalized approach.",
    features: ["Smart Start program", "Mortgage payment calculator", "Rate hold", "Flexible prepayment"],
    provinces: ["ON", "BC", "AB", "MB", "SK", "QC", "NB", "NS", "PE", "NL"],
    phone: "1-800-465-2422",
    website: "cibc.com",
    established: 1961
  },
  {
    id: "tangerine",
    name: "Tangerine",
    type: "bank",
    rating: 4.4,
    minRate: 4.15,
    specialties: ["Online mortgages", "Simple process", "Competitive rates"],
    description: "Digital-first bank offering streamlined online mortgage process with competitive rates.",
    features: ["100% online process", "No appointment needed", "Quick approval", "Transparent pricing"],
    provinces: ["ON", "BC", "AB"],
    phone: "1-888-826-4374",
    website: "tangerine.ca",
    established: 1997
  },
  {
    id: "hsbc",
    name: "HSBC Bank Canada",
    type: "bank",
    rating: 4.1,
    minRate: 4.25,
    specialties: ["International clients", "Premier banking", "Investment properties"],
    description: "International bank serving Canadian clients with global banking expertise.",
    features: ["International experience", "Premier services", "Global transfers", "Specialized programs"],
    provinces: ["ON", "BC", "AB"],
    phone: "1-888-310-4722",
    website: "hsbc.ca",
    established: 1981
  },
  {
    id: "firstnational",
    name: "First National",
    type: "monoline",
    rating: 4.6,
    minRate: 3.84,
    specialties: ["Competitive rates", "Broker channel", "Refinancing"],
    description: "Canada's largest non-bank mortgage lender offering competitive rates through mortgage professionals.",
    features: ["Lowest rates", "Fast approval", "Flexible terms", "Professional service"],
    provinces: ["ON", "BC", "AB", "MB", "SK", "QC", "NB", "NS"],
    phone: "1-888-871-8888",
    website: "firstnational.ca",
    established: 1988
  },
  {
    id: "mcap",
    name: "MCAP",
    type: "monoline",
    rating: 4.5,
    minRate: 3.89,
    specialties: ["Competitive rates", "Alternative lending", "Commercial"],
    description: "Leading mortgage finance company providing innovative lending solutions across Canada.",
    features: ["Competitive rates", "Fast processing", "Flexible solutions", "Expert underwriting"],
    provinces: ["ON", "BC", "AB", "MB", "SK", "QC", "NB", "NS"],
    phone: "1-800-265-1615",
    website: "mcap.com",
    established: 1999
  },
  {
    id: "meridian",
    name: "Meridian Credit Union",
    type: "credit-union",
    rating: 4.7,
    minRate: 4.05,
    specialties: ["Member-focused", "Local service", "Competitive rates"],
    description: "Ontario's largest credit union providing personalized mortgage services to members.",
    features: ["Member ownership", "Local decision making", "Competitive rates", "Personal service"],
    provinces: ["ON"],
    phone: "1-800-263-7436",
    website: "meridiancu.ca",
    established: 2005
  }
];

const lenderTypes = [
  { id: "all", name: "All Lenders", icon: Building2 },
  { id: "bank", name: "Banks", icon: Building2 },
  { id: "credit-union", name: "Credit Unions", icon: Users },
  { id: "monoline", name: "Monoline Lenders", icon: TrendingUp },
  { id: "alternative", name: "Alternative Lenders", icon: Shield }
];

const Lenders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProvince, setSelectedProvince] = useState("all");

  const filteredLenders = lenders.filter(lender => {
    const matchesSearch = lender.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lender.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || lender.type === selectedType;
    const matchesProvince = selectedProvince === "all" || lender.provinces.includes(selectedProvince);
    
    return matchesSearch && matchesType && matchesProvince;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "bank": return "bg-blue-100 text-blue-700 border-blue-200";
      case "credit-union": return "bg-green-100 text-green-700 border-green-200";
      case "monoline": return "bg-purple-100 text-purple-700 border-purple-200";
      case "alternative": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <Building2 className="h-3 w-3 mr-1" />
              Mortgage Providers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Find Your Perfect Mortgage Lender
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Compare Canada's top mortgage lenders, banks, credit unions, and alternative lenders. 
              Find the best rates and services for your home financing needs.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{lenders.length}</div>
                <div className="text-sm text-muted-foreground">Lenders</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">{Math.min(...lenders.map(l => l.minRate)).toFixed(2)}%</div>
                <div className="text-sm text-muted-foreground">Lowest Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">10</div>
                <div className="text-sm text-muted-foreground">Provinces</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600">Free</div>
                <div className="text-sm text-muted-foreground">Comparison</div>
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
                      placeholder="Search lenders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-white"
                  >
                    {lenderTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
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
                </div>
              </div>
            </div>
          </motion.section>

          {/* Lenders Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-blue-500" />
              <h2 className="text-2xl font-bold">
                {selectedType === "all" ? "All Lenders" : 
                 lenderTypes.find(t => t.id === selectedType)?.name}
              </h2>
              <Badge variant="outline" className="ml-2">
                {filteredLenders.length} lenders
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredLenders.map((lender, index) => (
                <motion.div
                  key={lender.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{lender.name}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(lender.rating)
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                                <span className="text-sm text-muted-foreground ml-1">
                                  {lender.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{lender.minRate}%</div>
                          <div className="text-sm text-muted-foreground">from</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className={getTypeColor(lender.type)}>
                          {lender.type.charAt(0).toUpperCase() + lender.type.slice(1).replace('-', ' ')}
                        </Badge>
                        {lender.established && (
                          <Badge variant="outline" className="bg-gray-50 text-gray-600">
                            Est. {lender.established}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <CardDescription className="mb-4 text-base">
                        {lender.description}
                      </CardDescription>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Specialties</h4>
                          <div className="flex flex-wrap gap-1">
                            {lender.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                          <ul className="text-sm space-y-1">
                            {lender.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button className="flex-1">
                            Get Quote
                          </Button>
                          <div className="flex gap-2">
                            {lender.phone && (
                              <Button variant="outline" size="sm">
                                <Phone className="h-4 w-4" />
                              </Button>
                            )}
                            {lender.website && (
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
          {filteredLenders.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No lenders found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Lenders;
