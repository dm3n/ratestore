
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, RefreshCw, Calculator, TrendingDown, DollarSign, Home, AlertTriangle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface RefinanceStep {
  id: number;
  title: string;
  description: string;
  timeframe: string;
  tasks: string[];
  tips: string[];
  completed?: boolean;
}

const refinanceSteps: RefinanceStep[] = [
  {
    id: 1,
    title: "Assess Your Financial Goals",
    description: "Determine why you want to refinance and what you hope to achieve.",
    timeframe: "Week 1",
    tasks: [
      "Define your refinancing goals",
      "Calculate current mortgage details",
      "Assess your current financial situation",
      "Determine how much equity you have",
      "Set realistic expectations for savings"
    ],
    tips: [
      "Common goals: lower payments, cash out, debt consolidation",
      "You typically need 20% equity to refinance",
      "Consider all costs, not just interest savings",
      "Factor in your future financial plans"
    ]
  },
  {
    id: 2,
    title: "Check Your Credit & Finances",
    description: "Ensure your credit score and financial documents are in order.",
    timeframe: "Week 1-2",
    tasks: [
      "Check your credit score and report",
      "Gather income documentation",
      "Compile asset statements",
      "Calculate your debt-to-income ratio",
      "Address any credit issues"
    ],
    tips: [
      "Credit score of 620+ typically required",
      "Lower debt-to-income ratio = better rates",
      "Gather 2 years of tax returns and pay stubs",
      "Don't apply for new credit during this process"
    ]
  },
  {
    id: 3,
    title: "Shop for Lenders & Rates",
    description: "Compare offers from multiple lenders to find the best deal.",
    timeframe: "Week 2-3",
    tasks: [
      "Research different lender types",
      "Request quotes from 3-5 lenders",
      "Compare interest rates and terms",
      "Evaluate closing costs and fees",
      "Consider working with a mortgage broker"
    ],
    tips: [
      "Rate shop within 14-28 days to minimize credit impact",
      "Compare APR, not just interest rate",
      "Online lenders often have competitive rates",
      "Credit unions may offer member benefits"
    ]
  },
  {
    id: 4,
    title: "Apply for Pre-approval",
    description: "Submit your application and get pre-approved for your new mortgage.",
    timeframe: "Week 3-4",
    tasks: [
      "Complete mortgage application",
      "Submit required documentation",
      "Respond to lender requests promptly",
      "Review loan estimate carefully",
      "Lock in your interest rate"
    ],
    tips: [
      "Rate locks typically last 30-60 days",
      "Be prepared for additional documentation requests",
      "Don't make major financial changes during processing",
      "Ask questions about anything unclear"
    ]
  },
  {
    id: 5,
    title: "Complete the Process",
    description: "Finalize your refinance and close on your new mortgage.",
    timeframe: "Week 4-6",
    tasks: [
      "Schedule home appraisal if required",
      "Review closing disclosure",
      "Prepare for closing costs",
      "Sign refinance documents",
      "Receive new payment schedule"
    ],
    tips: [
      "Appraisal typically costs $300-500",
      "Review closing disclosure 3 days before closing",
      "Bring certified funds for closing costs",
      "Keep all refinance documents for your records"
    ]
  }
];

const refinanceTypes = [
  {
    type: "Rate-and-Term Refinance",
    description: "Change your interest rate or loan term without taking cash out",
    benefits: ["Lower monthly payments", "Shorter loan term", "Switch from variable to fixed rate"],
    bestFor: "Homeowners wanting to reduce payments or pay off mortgage faster"
  },
  {
    type: "Cash-Out Refinance",
    description: "Refinance for more than you owe and take the difference in cash",
    benefits: ["Access home equity", "Fund major expenses", "Consolidate high-interest debt"],
    bestFor: "Homeowners needing funds for renovations, education, or debt consolidation"
  },
  {
    type: "Cash-In Refinance",
    description: "Bring cash to closing to reduce your loan balance",
    benefits: ["Lower monthly payments", "Eliminate mortgage insurance", "Better interest rate"],
    bestFor: "Homeowners with extra cash wanting to reduce their mortgage balance"
  }
];

const Refinancing = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const progressPercentage = (completedSteps.length / refinanceSteps.length) * 100;

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
              <TrendingDown className="h-3 w-3 mr-1" />
              Refinance Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Mortgage Refinancing Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn when and how to refinance your mortgage to save money, access equity, 
              or achieve your financial goals.
            </p>
            
            {/* Progress Tracker */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Your Progress</span>
                <span className="text-sm text-muted-foreground">
                  {completedSteps.length} of {refinanceSteps.length} steps
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-green-600">1-2%</div>
                <div className="text-sm text-muted-foreground">Rate reduction</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">$200+</div>
                <div className="text-sm text-muted-foreground">Monthly savings</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-purple-600">30-45</div>
                <div className="text-sm text-muted-foreground">Days to close</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-orange-600">80%</div>
                <div className="text-sm text-muted-foreground">Max loan-to-value</div>
              </div>
            </div>
          </motion.section>

          {/* Refinance Types */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Types of Refinancing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the refinancing option that best fits your financial goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {refinanceTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{type.type}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {type.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Best For:</h4>
                          <p className="text-sm text-muted-foreground">{type.bestFor}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Step-by-Step Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Refinancing Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to successfully refinance your mortgage.
              </p>
            </div>

            <div className="space-y-6">
              {refinanceSteps.map((step, index) => {
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
                              <CheckCircle className="h-4 w-4" />
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
                              <TrendingDown className="h-4 w-4" />
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

          {/* Tools & Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Refinancing Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use these tools to determine if refinancing makes sense for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Calculator className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Refinance Calculator</CardTitle>
                  <CardDescription>
                    Calculate potential savings and break-even point for refinancing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/refinance">Calculate Savings</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Current Rates</CardTitle>
                  <CardDescription>
                    Compare current refinance rates from top Canadian lenders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/mortgages/best-rates">View Rates</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Find Lenders</CardTitle>
                  <CardDescription>
                    Connect with lenders and brokers specializing in refinancing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/mortgages/lenders">Find Lenders</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* When NOT to Refinance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-orange-900">When NOT to Refinance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Financial Situations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        You're planning to move within 2-3 years
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Your credit score has significantly decreased
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        You're close to paying off your current mortgage
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        The break-even period is too long
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Market Conditions</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Interest rates are higher than your current rate
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Your home value has significantly decreased
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        You have less than 20% equity in your home
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                        Closing costs outweigh potential savings
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

export default Refinancing;
