
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, RefreshCw, Calculator, FileText, TrendingUp, AlertTriangle, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface RenewalStep {
  id: number;
  title: string;
  description: string;
  timeframe: string;
  tasks: string[];
  tips: string[];
  completed?: boolean;
}

const renewalSteps: RenewalStep[] = [
  {
    id: 1,
    title: "Review Your Current Mortgage",
    description: "Analyze your existing mortgage terms and current financial situation.",
    timeframe: "2-3 months before renewal",
    tasks: [
      "Review your current mortgage statement",
      "Check remaining balance and payments made",
      "Evaluate your current interest rate vs market rates",
      "Assess your financial situation changes",
      "Calculate total interest paid so far"
    ],
    tips: [
      "Start the process 4-6 months before renewal",
      "Gather all mortgage documents",
      "Track market rate trends",
      "Consider life changes that affect finances"
    ]
  },
  {
    id: 2,
    title: "Shop Around for Better Rates",
    description: "Compare rates from multiple lenders to ensure you get the best deal.",
    timeframe: "3-4 months before renewal",
    tasks: [
      "Research current market rates",
      "Contact multiple lenders for quotes",
      "Compare your current lender's renewal offer",
      "Consider working with a mortgage broker",
      "Evaluate different term lengths"
    ],
    tips: [
      "Don't accept the first renewal offer",
      "Brokers can access wholesale rates",
      "Consider both rate and terms",
      "Negotiate with your current lender"
    ]
  },
  {
    id: 3,
    title: "Negotiate Terms",
    description: "Work with lenders to get the best possible terms for your renewal.",
    timeframe: "2-3 months before renewal",
    tasks: [
      "Present competing offers to your current lender",
      "Negotiate interest rate reductions",
      "Discuss payment frequency options",
      "Consider prepayment privileges",
      "Evaluate penalty clauses"
    ],
    tips: [
      "Loyalty discounts are often available",
      "Consider switching if savings are significant",
      "Bi-weekly payments can save thousands",
      "Increased prepayment options provide flexibility"
    ]
  },
  {
    id: 4,
    title: "Make Your Decision",
    description: "Choose between staying with your current lender or switching.",
    timeframe: "1-2 months before renewal",
    tasks: [
      "Compare all offers received",
      "Calculate total cost over term",
      "Consider switching costs if applicable",
      "Evaluate lender service quality",
      "Make your final decision"
    ],
    tips: [
      "Factor in all costs, not just rate",
      "Consider the hassle of switching",
      "New lenders often cover switching costs",
      "Don't wait until the last minute"
    ]
  },
  {
    id: 5,
    title: "Complete the Renewal Process",
    description: "Finalize paperwork and complete your mortgage renewal.",
    timeframe: "1 month before renewal",
    tasks: [
      "Submit required documentation",
      "Complete application process",
      "Review and sign renewal documents",
      "Confirm new payment schedule",
      "Update automatic payments if needed"
    ],
    tips: [
      "Read all documents carefully",
      "Confirm rate lock-in period",
      "Update your records with new terms",
      "Set calendar reminders for next renewal"
    ]
  }
];

const MortgageRenewal = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const progressPercentage = (completedSteps.length / renewalSteps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-white to-blue-50">
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
            <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
              <RefreshCw className="h-3 w-3 mr-1" />
              Renewal Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Mortgage Renewal Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your comprehensive guide to renewing your mortgage. Learn how to get the best rates 
              and terms when your mortgage term expires.
            </p>
            
            {/* Progress Tracker */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Your Progress</span>
                <span className="text-sm text-muted-foreground">
                  {completedSteps.length} of {renewalSteps.length} steps
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-orange-600">4-6</div>
                <div className="text-sm text-muted-foreground">Months to start</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">0.5-1%</div>
                <div className="text-sm text-muted-foreground">Potential savings</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-green-600">$5,000+</div>
                <div className="text-sm text-muted-foreground">Average savings</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold text-purple-600">21 days</div>
                <div className="text-sm text-muted-foreground">Notice period</div>
              </div>
            </div>
          </motion.section>

          {/* Step-by-Step Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Renewal Process Timeline</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow this timeline to ensure you get the best possible terms on your mortgage renewal.
              </p>
            </div>

            <div className="space-y-6">
              {renewalSteps.map((step, index) => {
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
                              isCompleted ? 'bg-green-100' : 'bg-orange-100'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle className="h-6 w-6 text-green-600" />
                              ) : (
                                <span className="text-orange-600 font-bold">{step.id}</span>
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
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
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
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Renewal Tools & Resources</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use these tools to make informed decisions about your mortgage renewal.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <Calculator className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Renewal Calculator</CardTitle>
                  <CardDescription>
                    Calculate potential savings by comparing different renewal options.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/tools/renewal">Calculate Savings</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Current Rates</CardTitle>
                  <CardDescription>
                    View the latest renewal rates from major Canadian lenders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/mortgages/renewal-rates">View Rates</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Find a Broker</CardTitle>
                  <CardDescription>
                    Connect with mortgage brokers who specialize in renewals.
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
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-red-900">Common Renewal Mistakes to Avoid</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Process Mistakes</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Automatically accepting the first renewal offer
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Waiting until the last minute to shop around
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Not considering different term lengths
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Ignoring prepayment options and penalties
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Financial Mistakes</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Focusing only on interest rate, not total cost
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Not factoring in switching costs when comparing
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Missing opportunities to increase payment frequency
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                        Not leveraging improved credit score for better rates
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

export default MortgageRenewal;
