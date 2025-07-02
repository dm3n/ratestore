
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, MapPin, DollarSign, FileText, Users, CheckCircle, Star, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const federalPrograms = [
  {
    name: "First-Time Home Buyers' Tax Credit",
    amount: "Up to $750 tax credit",
    description: "Non-refundable tax credit for qualifying first-time home buyers",
    eligibility: [
      "Must be a first-time home buyer",
      "Home must be your principal residence",
      "Acquired after January 27, 2009"
    ],
    benefits: ["$5,000 tax credit", "Reduces federal income tax", "One-time benefit"],
    howToApply: "Claim on your annual tax return using Form T1"
  },
  {
    name: "Home Buyers' Plan (HBP)",
    amount: "Up to $60,000 ($120,000 for couples)",
    description: "Withdraw from your RRSP to buy or build a qualifying home",
    eligibility: [
      "First-time home buyer or didn't own a home in the past 4 years",
      "Must have RRSP funds available",
      "Plan to occupy home as principal residence"
    ],
    benefits: ["No immediate tax on withdrawal", "15-year repayment period", "Can be combined with spouse's HBP"],
    howToApply: "Complete Form T1036 and submit to your RRSP administrator"
  },
  {
    name: "First Home Savings Account (FHSA)",
    amount: "$8,000 annual / $40,000 lifetime",
    description: "Tax-free savings and withdrawal for first home purchase",
    eligibility: [
      "Canadian resident aged 18 or older",
      "First-time home buyer",
      "Not owned a home in the year or previous 4 years"
    ],
    benefits: ["Tax-deductible contributions", "Tax-free growth", "Tax-free withdrawals for home purchase"],
    howToApply: "Open an FHSA with participating financial institutions"
  }
];

const provincialPrograms = [
  {
    province: "Ontario",
    programs: [
      {
        name: "Land Transfer Tax Rebate",
        amount: "Up to $4,000",
        description: "Rebate on land transfer tax for first-time buyers",
        website: "ontario.ca"
      },
      {
        name: "Ontario Down Payment Assistance Program",
        amount: "Up to $40,000",
        description: "Shared-equity loan program for qualifying buyers",
        website: "ontario.ca"
      }
    ]
  },
  {
    province: "British Columbia",
    programs: [
      {
        name: "First Time Home Buyers' Tax Exemption",
        amount: "Up to $8,000",
        description: "Property transfer tax exemption for eligible first-time buyers",
        website: "gov.bc.ca"
      },
      {
        name: "BC Home Owner Mortgage and Equity Partnership",
        amount: "Up to $37,500",
        description: "Down payment assistance for eligible first-time buyers",
        website: "bchousing.org"
      }
    ]
  },
  {
    province: "Alberta",
    programs: [
      {
        name: "First-Time Home Buyer Incentive",
        amount: "Up to $10,000",
        description: "Tax credit for first-time home buyers",
        website: "alberta.ca"
      }
    ]
  },
  {
    province: "Quebec",
    programs: [
      {
        name: "Welcome Tax Refund",
        amount: "Up to $6,000",
        description: "Partial refund of transfer duties for first-time buyers",
        website: "revenuquebec.ca"
      }
    ]
  },
  {
    province: "Nova Scotia",
    programs: [
      {
        name: "First-Time Home Buyers Program",
        amount: "Up to $1,500",
        description: "Rebate on deed transfer tax",
        website: "novascotia.ca"
      }
    ]
  },
  {
    province: "Manitoba",
    programs: [
      {
        name: "First-Time Home Buyers Tax Credit",
        amount: "Up to $1,500",
        description: "Tax credit for eligible first-time home buyers",
        website: "manitoba.ca"
      }
    ]
  }
];

const municipalPrograms = [
  {
    city: "Toronto",
    programs: [
      {
        name: "Toronto First-Time Homebuyer Incentive Program",
        amount: "Up to $40,000",
        description: "Down payment assistance for moderate-income households",
        details: "Interest-free loan, must be repaid when selling or after 30 years"
      },
      {
        name: "Housing Charter Secretariat Programs",
        amount: "Varies",
        description: "Various affordable housing programs and incentives",
        details: "Multiple programs for different income levels and housing types"
      }
    ]
  },
  {
    city: "Vancouver",
    programs: [
      {
        name: "First-Time Home Buyer Loan Program",
        amount: "Up to $40,000",
        description: "Down payment assistance for first-time buyers",
        details: "0% interest loan, repayable when selling or refinancing"
      }
    ]
  },
  {
    city: "Calgary",
    programs: [
      {
        name: "Attainable Home Ownership Corporation (AHOC)",
        amount: "Up to 5% of purchase price",
        description: "Down payment assistance for qualifying families",
        details: "Shared equity program with income requirements"
      }
    ]
  },
  {
    city: "Ottawa",
    programs: [
      {
        name: "Homeownership Program",
        amount: "Up to $40,000",
        description: "Down payment assistance for moderate-income households",
        details: "Forgivable loan over 20 years"
      }
    ]
  }
];

const FirstTimePrograms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50">
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
              <Home className="h-3 w-3 mr-1" />
              Government Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              First-Time Home Buyer Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive guide to federal, provincial, and municipal programs designed 
              to help first-time home buyers achieve homeownership in Canada.
            </p>
          </motion.div>

          {/* Key Statistics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">$60K</div>
                <div className="text-sm text-muted-foreground">Max HBP withdrawal</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-green-600">$8K</div>
                <div className="text-sm text-muted-foreground">Annual FHSA limit</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-purple-600">$40K</div>
                <div className="text-sm text-muted-foreground">Max down payment assistance</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-orange-600">13</div>
                <div className="text-sm text-muted-foreground">Provinces & territories</div>
              </div>
            </div>
          </motion.section>

          {/* Program Tabs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Tabs defaultValue="federal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                <TabsTrigger value="federal" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Federal
                </TabsTrigger>
                <TabsTrigger value="provincial" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Provincial
                </TabsTrigger>
                <TabsTrigger value="municipal" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Municipal
                </TabsTrigger>
              </TabsList>

              {/* Federal Programs */}
              <TabsContent value="federal">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Federal Programs</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Canada-wide programs available to all eligible first-time home buyers.
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    {federalPrograms.map((program, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="hover:shadow-lg transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-xl flex items-center gap-2">
                                  <Star className="h-5 w-5 text-yellow-500" />
                                  {program.name}
                                </CardTitle>
                                <CardDescription className="text-base mt-2">
                                  {program.description}
                                </CardDescription>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                                {program.amount}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-500" />
                                  Eligibility
                                </h4>
                                <ul className="space-y-2">
                                  {program.eligibility.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <DollarSign className="h-4 w-4 text-green-500" />
                                  Benefits
                                </h4>
                                <ul className="space-y-2">
                                  {program.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-orange-500" />
                                  How to Apply
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {program.howToApply}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Provincial Programs */}
              <TabsContent value="provincial">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Provincial Programs</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Province-specific programs with varying eligibility requirements and benefits.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {provincialPrograms.map((province, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-blue-500" />
                              {province.province}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {province.programs.map((program, idx) => (
                                <div key={idx} className="border-l-4 border-blue-200 pl-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-sm">{program.name}</h4>
                                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600">
                                      {program.amount}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {program.description}
                                  </p>
                                  <p className="text-xs text-blue-600">
                                    More info: {program.website}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Municipal Programs */}
              <TabsContent value="municipal">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Municipal Programs</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      City-specific programs offering additional support for local first-time buyers.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {municipalPrograms.map((city, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2">
                              <Building className="h-5 w-5 text-green-500" />
                              {city.city}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {city.programs.map((program, idx) => (
                                <div key={idx} className="border-l-4 border-green-200 pl-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-sm">{program.name}</h4>
                                    <Badge variant="outline" className="text-xs bg-green-50 text-green-600">
                                      {program.amount}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {program.description}
                                  </p>
                                  <p className="text-xs text-green-600">
                                    {program.details}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.section>

          {/* Quick Tools */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Planning Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use these tools to plan your home purchase and understand your options.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Affordability Calculator</CardTitle>
                  <CardDescription>
                    Calculate how much house you can afford with government assistance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/tools/affordability">Calculate Affordability</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Down Payment Calculator</CardTitle>
                  <CardDescription>
                    Plan your down payment with HBP and FHSA contributions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/tools/down-payment">Calculate Down Payment</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Home Buying Guide</CardTitle>
                  <CardDescription>
                    Step-by-step guide to buying your first home in Canada.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/guides/home-buying">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Important Notes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Important Program Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">General Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Programs can be combined (federal + provincial + municipal)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Eligibility requirements vary by program and location
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Most programs require the home to be your principal residence
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Income limits may apply to certain programs
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Application Tips</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Apply for programs early in your home buying process
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Keep detailed records of all applications and approvals
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Consult with a tax professional about optimal program combinations
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                        Program availability and amounts may change annually
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FirstTimePrograms;
