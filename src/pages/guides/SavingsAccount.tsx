
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  PiggyBank, 
  TrendingUp, 
  Shield, 
  Clock, 
  Calculator,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Building,
  Users,
  ArrowRight,
  Lightbulb,
  Target
} from "lucide-react";

const SavingsAccountGuide = () => {
  const benefits = [
    { icon: Shield, title: "CDIC Protected", description: "Your deposits are insured up to $100,000" },
    { icon: TrendingUp, title: "Earn Interest", description: "Watch your money grow with competitive rates" },
    { icon: Clock, title: "Easy Access", description: "Access your funds when you need them" },
    { icon: PiggyBank, title: "No Risk", description: "Principal amount is always protected" }
  ];

  const accountTypes = [
    {
      type: "High-Interest Savings",
      rate: "4.5% - 5.2%",
      minBalance: "$0 - $1,000",
      features: ["Higher interest rates", "May have conditions", "Online-focused"]
    },
    {
      type: "Traditional Savings",
      rate: "0.5% - 2.0%",
      minBalance: "$0 - $500",
      features: ["Basic savings account", "Branch access", "Lower rates"]
    },
    {
      type: "Premium Savings",
      rate: "2.5% - 3.5%",
      minBalance: "$5,000+",
      features: ["Higher balance required", "Better rates", "Premium features"]
    }
  ];

  const steps = [
    { step: 1, title: "Choose Account Type", description: "Compare rates and features" },
    { step: 2, title: "Gather Documents", description: "ID, SIN, proof of address" },
    { step: 3, title: "Apply Online/In-Branch", description: "Complete application process" },
    { step: 4, title: "Make Initial Deposit", description: "Fund your new account" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <PiggyBank className="h-8 w-8" />
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Banking Guide
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                What is a Savings Account?
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Learn everything you need to know about savings accounts, how they work, 
                and how to choose the right one for your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/savings-rates">
                    <Calculator className="mr-2 h-4 w-4" />
                    Compare Savings Rates
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-blue-700 border-white text-white hover:bg-white/10">
                  <Link to="/banking/savings/high-interest">
                    Find Best Accounts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Overview */}
          <section className="mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  <CardTitle className="text-2xl">Quick Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A savings account is a deposit account held at a bank or credit union that pays interest 
                  on your deposited funds. It's designed to help you save money while earning a modest return, 
                  with easy access to your funds when needed.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Benefits Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose a Savings Account?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Account Types Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Types of Savings Accounts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {accountTypes.map((account, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{account.type}</CardTitle>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">{account.rate}</span>
                    </div>
                    <CardDescription>Minimum Balance: {account.minBalance}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {account.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How to Open Account */}
          <section className="mb-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-2">How to Open a Savings Account</CardTitle>
                <CardDescription className="text-center text-lg">
                  Follow these simple steps to start saving today
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Detailed Information Tabs */}
          <section className="mb-12">
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basics">Basics</TabsTrigger>
                <TabsTrigger value="interest">Interest Rates</TabsTrigger>
                <TabsTrigger value="fees">Fees & Limits</TabsTrigger>
                <TabsTrigger value="tips">Pro Tips</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Savings Account Basics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What is a Savings Account?</h4>
                      <p className="text-gray-700">
                        A savings account is a basic type of financial product that allows you to deposit money, 
                        keep it safe, and withdraw funds, all while earning interest. Most banks and credit unions 
                        offer savings accounts, and they're a great way to keep your emergency fund or save for 
                        short-term goals.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">How Does It Work?</h4>
                      <p className="text-gray-700">
                        You deposit money into the account, and the bank pays you interest on your balance. 
                        The interest is typically calculated daily and paid monthly. Your money remains accessible, 
                        though there may be limits on the number of withdrawals you can make per month.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="interest" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Understanding Interest Rates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Annual Percentage Yield (APY)</h4>
                      <p className="text-gray-700">
                        APY is the real rate of return earned on your savings account over a year, taking into 
                        account the effect of compounding interest. Higher APY means more money earned.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Interest Rate Factors</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Bank of Canada policy rate</li>
                        <li>Account balance tiers</li>
                        <li>Promotional offers</li>
                        <li>Account type and features</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fees" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fees and Account Limits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Common Fees</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Monthly maintenance fees</li>
                        <li>Minimum balance fees</li>
                        <li>Excess withdrawal fees</li>
                        <li>Paper statement fees</li>
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Transaction Limits</h4>
                      <p className="text-gray-700">
                        Most savings accounts limit you to 6 withdrawals per month. Exceeding this limit 
                        may result in fees or account conversion to a chequing account.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tips" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pro Tips for Maximum Savings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Set Savings Goals</h4>
                            <p className="text-sm text-gray-600">Define clear objectives for your savings</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Automate Deposits</h4>
                            <p className="text-sm text-gray-600">Set up automatic transfers to build consistency</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Compare Rates Regularly</h4>
                            <p className="text-sm text-gray-600">Rates change, so shop around for better deals</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Read the Fine Print</h4>
                            <p className="text-sm text-gray-600">Understand fees, limits, and requirements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
                <p className="text-xl mb-8 text-blue-100">
                  Compare the best savings account rates and find the perfect account for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    <Link to="/banking/savings/compare">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Compare Savings Accounts
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/banking/savings/high-interest">
                      View High-Interest Accounts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SavingsAccountGuide;
