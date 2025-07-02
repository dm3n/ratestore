
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Home, Calculator, FileText, Key, AlertTriangle, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface BuyingStep {
  id: number;
  title: string;
  description: string;
  timeframe: string;
  tasks: string[];
  tips: string[];
  completed?: boolean;
}

const buyingSteps: BuyingStep[] = [
  {
    id: 1,
    title: "Assess Your Financial Readiness",
    description: "Evaluate your finances and determine how much you can afford to spend on a home.",
    timeframe: "1-2 weeks",
    tasks: [
      "Check your credit score and report",
      "Calculate your debt-to-income ratio",
      "Determine your budget and affordability",
      "Start saving for down payment and closing costs",
      "Gather financial documents"
    ],
    tips: [
      "Aim for a credit score of 680+ for best rates",
      "Keep debt-to-income ratio below 43%",
      "Save 3-6 months of expenses as emergency fund",
      "Don't make major purchases before buying"
    ]
  },
  {
    id: 2,
    title: "Get Pre-approved for a Mortgage",
    description: "Secure pre-approval to understand your borrowing capacity and show sellers you're serious.",
    timeframe: "1-2 weeks",
    tasks: [
      "Research mortgage lenders and rates",
      "Submit mortgage pre-approval application",
      "Provide required documentation",
      "Receive pre-approval letter",
      "Understand your mortgage terms"
    ],
    tips: [
      "Shop around with multiple lenders",
      "Pre-approval is valid for 60-120 days",
      "Don't exceed your comfortable payment amount",
      "Consider working with a mortgage broker"
    ]
  },
  {
    id: 3,
    title: "Find a Real Estate Agent",
    description: "Choose an experienced agent who knows your target area and can guide you through the process.",
    timeframe: "1 week",
    tasks: [
      "Research local real estate agents",
      "Interview potential agents",
      "Check references and reviews",
      "Sign buyer representation agreement",
      "Discuss your needs and preferences"
    ],
    tips: [
      "Look for agents specializing in your price range",
      "Ask about their recent sales in your area",
      "Ensure good communication and availability",
      "Understand their commission structure"
    ]
  },
  {
    id: 4,
    title: "Start House Hunting",
    description: "Begin searching for properties that meet your needs and budget constraints.",
    timeframe: "2-8 weeks",
    tasks: [
      "Define your must-haves vs. nice-to-haves",
      "Search online listings and attend open houses",
      "Schedule private showings",
      "Research neighborhoods and schools",
      "Keep detailed notes on properties viewed"
    ],
    tips: [
      "Be flexible on your wish list",
      "Consider future resale value",
      "Visit neighborhoods at different times",
      "Don't rush - the right home will come"
    ]
  },
  {
    id: 5,
    title: "Make an Offer",
    description: "Submit a competitive offer on your chosen property with appropriate terms and conditions.",
    timeframe: "1-3 days",
    tasks: [
      "Analyze comparable sales (comps)",
      "Determine your maximum offer price",
      "Include appropriate conditions",
      "Submit offer through your agent",
      "Negotiate terms if needed"
    ],
    tips: [
      "Don't lowball in competitive markets",
      "Include financing and inspection conditions",
      "Be prepared for counteroffers",
      "Have backup properties in mind"
    ]
  },
  {
    id: 6,
    title: "Complete Due Diligence",
    description: "Conduct inspections and finalize your mortgage to ensure everything is in order.",
    timeframe: "2-4 weeks",
    tasks: [
      "Schedule and attend home inspection",
      "Finalize mortgage application",
      "Review property disclosure documents",
      "Arrange home insurance",
      "Complete final walkthrough"
    ],
    tips: [
      "Don't skip the home inspection",
      "Review all documents carefully",
      "Shop for competitive insurance rates",
      "Stay in touch with your lender"
    ]
  },
  {
    id: 7,
    title: "Close on Your Home",
    description: "Complete the final steps to transfer ownership and receive your keys.",
    timeframe: "1 day",
    tasks: [
      "Review closing documents",
      "Bring certified funds for closing costs",
      "Sign mortgage and title documents",
      "Receive keys and possession",
      "Register utilities and services"
    ],
    tips: [
      "Arrive early to closing appointment",
      "Bring photo ID and certified funds",
      "Read all documents before signing",
      "Keep all closing documents safe"
    ]
  }
];

const HomeBuying = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const progressPercentage = (completedSteps.length / buyingSteps.length) * 100;

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
              Complete Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Home Buying Guide for Canadians
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your complete step-by-step guide to buying your first home in Canada. 
              From financial preparation to closing day, we'll walk you through every step.
            </p>
            
            {/* Progress Tracker */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Your Progress</span>
                <span className="text-sm text-muted-foreground">
                  {completedSteps.length} of {buyingSteps.length} steps
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">30-90</div>
                <div className="text-sm text-muted-foreground">Days to close</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-green-600">5-20%</div>
                <div className="text-sm text-muted-foreground">Down payment</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-purple-600">2-4%</div>
                <div className="text-sm text-muted-foreground">Closing costs</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-orange-600">680+</div>
                <div className="text-sm text-muted-foreground">Credit score</div>
              </div>
            </div>
          </motion.section>

          {/* Step-by-Step Guide */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Step-by-Step Home Buying Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow this comprehensive guide to navigate your home buying journey with confidence.
              </p>
            </div>

            <div className="space-y-6">
              {buyingSteps.map((step, index) => {
                const isCompleted = completedSteps.includes(step.id);
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className={`hover:shadow-lg transition-all duration-300 ${isCompleted ? 'border-green-200 bg-green-50' : ''}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                              isCompleted ? 'bg-green-100' : 'bg-blue-100'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle className="h-6 w-6 text-green-600" />
                              ) : (
                                <span className="text-blue-600 font-bold">{step.id}</span>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                <Badge variant="outline" className="bg-gray-50">
                                  {step.timeframe}
                                </Badge>
                              </div>
                              <CardDescription className="text-base">
                                {step.description}
                              </CardDescription>
                            </div>
                          </div>
                          <Button
                            variant={isCompleted ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleStepCompletion(step.id)}
                            className={isCompleted ? "bg-green-600 hover:bg-green-700" : ""}
                          >
                            {isCompleted ? "Completed" : "Mark Complete"}
                          </Button>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Key Tasks
                            </h4>
                            <ul className="space-y-2">
                              {step.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              Pro Tips
                            </h4>
                            <ul className="space-y-2">
                              {step.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Resources Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Helpful Resources & Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use these tools and resources to support your home buying journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Affordability Calculator</CardTitle>
                  <CardDescription>
                    Calculate how much house you can afford based on your income and expenses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/tools/affordability">Use Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Mortgage Calculator</CardTitle>
                  <CardDescription>
                    Calculate your monthly mortgage payments and compare different scenarios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/tools/mortgage-calculator">Calculate Payments</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Find a Broker</CardTitle>
                  <CardDescription>
                    Connect with experienced mortgage brokers who can help you find the best rates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/mortgages/brokers">Find Brokers</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Common Mistakes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-orange-900">Common First-Time Buyer Mistakes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Financial Mistakes</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Not getting pre-approved before house hunting
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Maxing out your budget without buffer
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Forgetting about closing costs and moving expenses
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Making major purchases before closing
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Process Mistakes</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Skipping the home inspection
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Not researching the neighborhood thoroughly
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Falling in love with the first house you see
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Not reading all documents carefully
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

export default HomeBuying;
