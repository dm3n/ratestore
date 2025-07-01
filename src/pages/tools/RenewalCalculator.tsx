
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Calculator, TrendingDown, TrendingUp, DollarSign, Calendar, Percent } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RenewalResults {
  currentPayment: number;
  newPayment: number;
  monthlySavings: number;
  totalSavings: number;
  breakEvenMonths: number;
  recommendation: string;
}

const RenewalCalculator = () => {
  const [currentBalance, setCurrentBalance] = useState("350000");
  const [currentRate, setCurrentRate] = useState("5.5");
  const [newRate, setNewRate] = useState("4.2");
  const [remainingTerm, setRemainingTerm] = useState("20");
  const [renewalCosts, setRenewalCosts] = useState("2500");
  const [results, setResults] = useState<RenewalResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateRenewal = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const balance = parseFloat(currentBalance);
      const oldRate = parseFloat(currentRate) / 100 / 12;
      const newRateMonthly = parseFloat(newRate) / 100 / 12;
      const termMonths = parseFloat(remainingTerm) * 12;
      const costs = parseFloat(renewalCosts);

      // Calculate current payment
      const currentPayment = balance * (oldRate * Math.pow(1 + oldRate, termMonths)) / (Math.pow(1 + oldRate, termMonths) - 1);
      
      // Calculate new payment
      const newPayment = balance * (newRateMonthly * Math.pow(1 + newRateMonthly, termMonths)) / (Math.pow(1 + newRateMonthly, termMonths) - 1);
      
      const monthlySavings = currentPayment - newPayment;
      const totalSavings = monthlySavings * termMonths - costs;
      const breakEvenMonths = costs / monthlySavings;
      
      let recommendation = "";
      if (totalSavings > 0 && breakEvenMonths < 24) {
        recommendation = "Highly Recommended - Great savings opportunity!";
      } else if (totalSavings > 0 && breakEvenMonths < 48) {
        recommendation = "Recommended - Moderate savings potential";
      } else if (totalSavings > 0) {
        recommendation = "Consider - Long-term savings only";
      } else {
        recommendation = "Not Recommended - Costs exceed savings";
      }

      setResults({
        currentPayment,
        newPayment,
        monthlySavings,
        totalSavings,
        breakEvenMonths,
        recommendation
      });
      setIsCalculating(false);
    }, 1000);
  };

  useEffect(() => {
    if (currentBalance && currentRate && newRate && remainingTerm) {
      const timer = setTimeout(calculateRenewal, 500);
      return () => clearTimeout(timer);
    }
  }, [currentBalance, currentRate, newRate, remainingTerm, renewalCosts]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
              <RefreshCw className="h-3 w-3 mr-1" />
              Renewal Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Mortgage Renewal Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare your current mortgage with renewal options to maximize your savings
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-orange-100 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                    <CardTitle className="flex items-center text-2xl">
                      <Calculator className="h-6 w-6 mr-2 text-orange-600" />
                      Renewal Comparison
                    </CardTitle>
                    <CardDescription>
                      Enter your current mortgage details and new rate options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <Tabs defaultValue="current" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="current">Current Mortgage</TabsTrigger>
                        <TabsTrigger value="new">New Rate Option</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="current" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentBalance" className="text-base font-medium">Outstanding Balance</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="currentBalance"
                              type="number"
                              value={currentBalance}
                              onChange={(e) => setCurrentBalance(e.target.value)}
                              className="pl-10 text-lg"
                              placeholder="350,000"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currentRate" className="text-base font-medium">Current Rate (%)</Label>
                          <div className="relative">
                            <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="currentRate"
                              type="number"
                              step="0.1"
                              value={currentRate}
                              onChange={(e) => setCurrentRate(e.target.value)}
                              className="pl-10 text-lg"
                              placeholder="5.5"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="remainingTerm" className="text-base font-medium">Remaining Term (years)</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="remainingTerm"
                              type="number"
                              value={remainingTerm}
                              onChange={(e) => setRemainingTerm(e.target.value)}
                              className="pl-10 text-lg"
                              placeholder="20"
                            />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="new" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="newRate" className="text-base font-medium">New Rate (%)</Label>
                          <div className="relative">
                            <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="newRate"
                              type="number"
                              step="0.1"
                              value={newRate}
                              onChange={(e) => setNewRate(e.target.value)}
                              className="pl-10 text-lg"
                              placeholder="4.2"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="renewalCosts" className="text-base font-medium">Renewal Costs</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="renewalCosts"
                              type="number"
                              value={renewalCosts}
                              onChange={(e) => setRenewalCosts(e.target.value)}
                              className="pl-10 text-lg"
                              placeholder="2,500"
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <Button 
                      onClick={calculateRenewal} 
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg py-6"
                      disabled={isCalculating}
                    >
                      {isCalculating ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Calculating...
                        </div>
                      ) : (
                        <>
                          <RefreshCw className="h-5 w-5 mr-2" />
                          Compare Options
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <AnimatePresence>
                {results && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6"
                  >
                    {/* Results Summary */}
                    <Card className="border-2 border-red-100 shadow-xl">
                      <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                        <CardTitle className="flex items-center text-2xl">
                          <TrendingDown className="h-6 w-6 mr-2 text-red-600" />
                          Renewal Analysis
                        </CardTitle>
                        <CardDescription>
                          Comparison results and savings breakdown
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                              <div className="text-xs text-muted-foreground">Current Payment</div>
                            </div>
                            <div className="text-lg font-bold text-blue-600">
                              {formatCurrency(results.currentPayment)}
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <TrendingDown className="h-4 w-4 text-green-600 mr-1" />
                              <div className="text-xs text-muted-foreground">New Payment</div>
                            </div>
                            <div className="text-lg font-bold text-green-600">
                              {formatCurrency(results.newPayment)}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Monthly Savings:</span>
                            <span className="text-lg font-bold text-green-600">
                              {formatCurrency(results.monthlySavings)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Total Savings:</span>
                            <span className="text-lg font-bold text-green-600">
                              {formatCurrency(results.totalSavings)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Break-even Period:</span>
                            <span className="text-lg font-bold">
                              {Math.round(results.breakEvenMonths)} months
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Recommendation */}
                    <Card className="border-2 border-orange-100 shadow-xl">
                      <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                        <CardTitle className="flex items-center text-xl">
                          <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
                          Recommendation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className={`p-4 rounded-lg border-2 ${
                          results.recommendation.includes('Highly') ? 'bg-green-50 border-green-200' :
                          results.recommendation.includes('Recommended') ? 'bg-blue-50 border-blue-200' :
                          results.recommendation.includes('Consider') ? 'bg-yellow-50 border-yellow-200' :
                          'bg-red-50 border-red-200'
                        }`}>
                          <div className="font-bold text-lg mb-2">{results.recommendation}</div>
                          <div className="text-sm text-muted-foreground">
                            {results.totalSavings > 0 
                              ? `You could save ${formatCurrency(results.totalSavings)} over the term of your mortgage.`
                              : 'The costs of renewal exceed the potential savings.'
                            }
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RenewalCalculator;
