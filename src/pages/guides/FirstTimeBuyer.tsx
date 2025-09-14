
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, DollarSign, FileText, Shield, Calculator, TrendingUp, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FirstTimeBuyer = () => {
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
              <Home className="h-3 w-3 mr-1" />
              First-Time Buyers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              First-Time Home Buyer Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover government programs, incentives, and resources designed specifically 
              to help first-time home buyers achieve homeownership in Canada.
            </p>
          </motion.div>

          {/* Program Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Tabs defaultValue="federal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="federal">Federal Programs</TabsTrigger>
                <TabsTrigger value="provincial">Provincial Programs</TabsTrigger>
                <TabsTrigger value="municipal">Municipal Programs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="federal" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Home className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">First-Time Home Buyer Incentive (FTHBI)</CardTitle>
                          <Badge variant="outline" className="mt-2 bg-red-50 text-red-700">
                            Shared Equity Program
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        The Government of Canada provides 5% or 10% of the home's purchase price as a shared equity mortgage.
                      </CardDescription>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Eligibility Requirements</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                              Household income under $120,000
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                              First-time home buyer
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                              Minimum 5% down payment
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                              Mortgage + incentive ≤ 4x income
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Benefits</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              5% for resale homes, 10% for new builds
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              No monthly payments on incentive
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Repay when you sell or after 25 years
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Lower monthly mortgage payments
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Home Buyers' Plan (HBP)</CardTitle>
                          <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700">
                            RRSP Withdrawal
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        Withdraw up to $35,000 from your RRSP to buy or build your first home without paying tax.
                      </CardDescription>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                              Up to $35,000 per person ($70,000 for couples)
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                              No immediate tax consequences
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                              15-year repayment period
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                              RRSP funds must be in account for 90+ days
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Repayment</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Start repaying in year 2 after withdrawal
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Minimum 1/15th of withdrawal annually
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Missed payments become taxable income
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Can repay more than minimum anytime
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Shield className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">First Home Savings Account (FHSA)</CardTitle>
                          <Badge variant="outline" className="mt-2 bg-purple-50 text-purple-700">
                            New 2023
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        A new registered savings account combining the benefits of RRSP and TFSA for first-time home buyers.
                      </CardDescription>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Contribution Limits</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0" />
                              $8,000 annual contribution limit
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0" />
                              $40,000 lifetime contribution limit
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0" />
                              Unused room carries forward
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 shrink-0" />
                              Available until age 71
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Tax Benefits</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Tax deductible contributions
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Tax-free investment growth
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              Tax-free withdrawals for home purchase
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                              No repayment required
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="provincial" className="space-y-6">
                <div className="grid gap-6">
                  {[
                    {
                      province: "Ontario",
                      program: "Land Transfer Tax Rebate",
                      amount: "Up to $4,000",
                      description: "Rebate on land transfer tax for first-time buyers purchasing homes under $500,000.",
                      icon: "🏠",
                      color: "blue"
                    },
                    {
                      province: "British Columbia",
                      program: "First Time Home Buyers' Program",
                      amount: "Up to $8,000",
                      description: "Reduction or elimination of property transfer tax for eligible first-time buyers.",
                      icon: "🏔️",
                      color: "green"
                    },
                    {
                      province: "Alberta",
                      program: "First-Time Home Buyer Incentive",
                      amount: "Up to $10,000",
                      description: "Tax credit for first-time home buyers purchasing new or existing homes.",
                      icon: "⛽",
                      color: "red"
                    },
                    {
                      province: "Manitoba",
                      program: "First-Time Home Buyers Tax Credit",
                      amount: "Up to $1,500",
                      description: "Non-refundable tax credit for eligible first-time home buyers.",
                      icon: "🌾",
                      color: "yellow"
                    }
                  ].map((program, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-${program.color}-100 rounded-lg flex items-center justify-center text-2xl`}>
                            {program.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{program.province} - {program.program}</CardTitle>
                            <Badge variant="outline" className={`mt-2 bg-${program.color}-50 text-${program.color}-700`}>
                              {program.amount}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {program.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="municipal" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Municipal First-Time Buyer Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-6">
                        Many municipalities offer additional programs to help first-time buyers. Here are some examples:
                      </CardDescription>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Toronto</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                              Housing Charter Renovation Loan Program
                            </li>
                            <li className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                              Affordable Housing Programs
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Vancouver</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                              First-Time Home Buyer Assistance Program
                            </li>
                            <li className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                              Housing Assistance Programs
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.section>

          {/* Tools and Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">First-Time Buyer Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use these calculators and tools to plan your first home purchase.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Down Payment Calculator</CardTitle>
                  <CardDescription>
                    Calculate how much you need to save and create a savings timeline.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/tools/down-payment-calculator">Calculate Down Payment</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Affordability Calculator</CardTitle>
                  <CardDescription>
                    Determine how much house you can afford with your income.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/tools/affordability-calculator">Check Affordability</Link>
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
                    Step-by-step guide to the complete home buying process.
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

          {/* Qualification Checklist */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">First-Time Buyer Qualification Checklist</CardTitle>
                <CardDescription className="text-center">
                  Make sure you meet these requirements before applying for first-time buyer programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-green-700">✓ Financial Requirements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Credit score of 600+ (680+ for best rates)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Stable employment history (2+ years)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Down payment saved (minimum 5%)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Debt-to-income ratio under 43%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Emergency fund (3-6 months expenses)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-blue-700">📋 Documentation Needed</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Proof of income (pay stubs, T4s)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Employment letter</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Bank statements (3 months)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Credit report</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                        <span className="text-sm">Government-issued ID</span>
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

export default FirstTimeBuyer;
