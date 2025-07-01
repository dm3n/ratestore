
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { PiggyBank, Calculator, DollarSign, TrendingUp, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const DownPaymentCalculator = () => {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [currentSavings, setCurrentSavings] = useState(15000);
  const [monthlySavings, setMonthlySavings] = useState(1000);
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<any>(null);

  const calculateDownPayment = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
      const remainingToSave = Math.max(0, downPaymentAmount - currentSavings);
      const monthsToSave = remainingToSave > 0 ? Math.ceil(remainingToSave / monthlySavings) : 0;
      const loanAmount = homePrice - downPaymentAmount;
      const savingsProgress = (currentSavings / downPaymentAmount) * 100;
      
      // Calculate PMI if down payment is less than 20%
      const needsPMI = downPaymentPercent < 20;
      const pmiAmount = needsPMI ? (loanAmount * 0.005) / 12 : 0; // 0.5% annually
      
      setResults({
        downPaymentAmount,
        remainingToSave,
        monthsToSave,
        loanAmount,
        savingsProgress,
        needsPMI,
        pmiAmount,
        totalMonthlyCost: pmiAmount
      });
      
      setIsCalculating(false);
    }, 800);
  };

  useEffect(() => {
    calculateDownPayment();
  }, [homePrice, downPaymentPercent, currentSavings, monthlySavings]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatMonths = (months: number) => {
    if (months === 0) return "Goal achieved!";
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${remainingMonths} months`;
    if (remainingMonths === 0) return `${years} ${years === 1 ? 'year' : 'years'}`;
    return `${years}y ${remainingMonths}m`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
              <PiggyBank className="h-3 w-3 mr-1" />
              Down Payment Planning
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Down Payment Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan your down payment savings strategy and timeline for homeownership
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-green-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardTitle className="flex items-center text-2xl">
                    <Calculator className="h-6 w-6 mr-2 text-green-600" />
                    Savings Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="home-price" className="text-base font-medium">
                      Target Home Price
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="home-price"
                        type="number"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="400,000"
                      />
                    </div>
                    <Slider
                      value={[homePrice]}
                      onValueChange={(value) => setHomePrice(value[0])}
                      min={100000}
                      max={2000000}
                      step={10000}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="down-payment-percent" className="text-base font-medium">
                      Down Payment Percentage: {downPaymentPercent}%
                    </Label>
                    <Slider
                      value={[downPaymentPercent]}
                      onValueChange={(value) => setDownPaymentPercent(value[0])}
                      min={3}
                      max={30}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>3%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="current-savings" className="text-base font-medium">
                      Current Savings
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="current-savings"
                        type="number"
                        value={currentSavings}
                        onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="15,000"
                      />
                    </div>
                    <Slider
                      value={[currentSavings]}
                      onValueChange={(value) => setCurrentSavings(value[0])}
                      min={0}
                      max={200000}
                      step={1000}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-savings" className="text-base font-medium">
                      Monthly Savings Amount
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="monthly-savings"
                        type="number"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="1,000"
                      />
                    </div>
                    <Slider
                      value={[monthlySavings]}
                      onValueChange={(value) => setMonthlySavings(value[0])}
                      min={100}
                      max={5000}
                      step={50}
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-2 border-blue-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                  <CardTitle className="flex items-center text-2xl">
                    <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
                    Savings Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <AnimatePresence mode="wait">
                    {isCalculating ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center h-64"
                      >
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                      </motion.div>
                    ) : results ? (
                      <motion.div
                        key="results"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-600 mb-2">
                            {formatCurrency(results.downPaymentAmount)}
                          </div>
                          <div className="text-lg text-muted-foreground">Required Down Payment</div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Savings Progress</span>
                            <span className="text-sm font-bold text-green-600">
                              {results.savingsProgress.toFixed(1)}%
                            </span>
                          </div>
                          <Progress value={results.savingsProgress} className="h-3" />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">
                              {formatCurrency(results.remainingToSave)}
                            </div>
                            <div className="text-sm text-muted-foreground">Still Need to Save</div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                              {formatMonths(results.monthsToSave)}
                            </div>
                            <div className="text-sm text-muted-foreground">Time to Goal</div>
                          </div>
                        </div>

                        {results.needsPMI && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <div className="flex items-start space-x-2">
                              <Info className="h-5 w-5 text-amber-600 mt-0.5" />
                              <div>
                                <div className="font-medium text-amber-800">PMI Required</div>
                                <div className="text-sm text-amber-700 mt-1">
                                  With less than 20% down, you'll pay ~{formatCurrency(results.pmiAmount)}/month in PMI
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-2">Loan Amount</div>
                          <div className="text-xl font-bold">{formatCurrency(results.loanAmount)}</div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownPaymentCalculator;
