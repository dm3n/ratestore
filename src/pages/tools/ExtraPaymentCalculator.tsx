
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Calculator, TrendingUp, Clock, PiggyBank } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExtraPaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [extraPayment, setExtraPayment] = useState(200);
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<any>(null);

  const calculateExtraPayment = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = loanTerm * 12;
      
      // Regular payment calculation
      const regularPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                           (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      // With extra payment
      const totalMonthlyPayment = regularPayment + extraPayment;
      
      // Calculate payoff time with extra payments
      let balance = loanAmount;
      let monthsWithExtra = 0;
      let totalInterestWithExtra = 0;
      
      while (balance > 0 && monthsWithExtra < numPayments) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = Math.min(totalMonthlyPayment - interestPayment, balance);
        
        totalInterestWithExtra += interestPayment;
        balance -= principalPayment;
        monthsWithExtra++;
      }
      
      // Regular loan calculations
      const totalInterestRegular = (regularPayment * numPayments) - loanAmount;
      
      setResults({
        regularPayment,
        totalMonthlyPayment,
        monthsWithExtra,
        yearsWithExtra: monthsWithExtra / 12,
        monthsSaved: numPayments - monthsWithExtra,
        yearsSaved: (numPayments - monthsWithExtra) / 12,
        totalInterestRegular,
        totalInterestWithExtra,
        interestSaved: totalInterestRegular - totalInterestWithExtra,
        totalSaved: (regularPayment * numPayments) - (totalMonthlyPayment * monthsWithExtra)
      });
      
      setIsCalculating(false);
    }, 1000);
  };

  useEffect(() => {
    calculateExtraPayment();
  }, [loanAmount, interestRate, loanTerm, extraPayment]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
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
              Save Money
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Extra Payment Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how extra mortgage payments can save you thousands and reduce your loan term
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
                    Loan Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="loan-amount" className="text-base font-medium">
                      Loan Amount
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="loan-amount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="300,000"
                      />
                    </div>
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      min={50000}
                      max={1000000}
                      step={5000}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest-rate" className="text-base font-medium">
                      Interest Rate (%)
                    </Label>
                    <Input
                      id="interest-rate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="text-lg"
                      placeholder="5.5"
                    />
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      min={3}
                      max={10}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loan-term" className="text-base font-medium">
                      Loan Term (Years)
                    </Label>
                    <Input
                      id="loan-term"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="text-lg"
                      placeholder="30"
                    />
                    <Slider
                      value={[loanTerm]}
                      onValueChange={(value) => setLoanTerm(value[0])}
                      min={10}
                      max={40}
                      step={5}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="extra-payment" className="text-base font-medium">
                      Extra Monthly Payment
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="extra-payment"
                        type="number"
                        value={extraPayment}
                        onChange={(e) => setExtraPayment(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="200"
                      />
                    </div>
                    <Slider
                      value={[extraPayment]}
                      onValueChange={(value) => setExtraPayment(value[0])}
                      min={0}
                      max={2000}
                      step={25}
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
                    Savings Analysis
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
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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
                            {formatCurrency(results.interestSaved)}
                          </div>
                          <div className="text-lg text-muted-foreground">Interest Saved</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-blue-600 mr-1" />
                              <div className="text-sm text-muted-foreground">Time Saved</div>
                            </div>
                            <div className="text-2xl font-bold text-blue-600">
                              {results.yearsSaved?.toFixed(1)} years
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                              <div className="text-sm text-muted-foreground">Total Saved</div>
                            </div>
                            <div className="text-2xl font-bold text-green-600">
                              {formatCurrency(results.totalSaved)}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Regular Payment:</span>
                            <span className="font-bold">{formatCurrency(results.regularPayment)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Total Payment:</span>
                            <span className="font-bold text-green-600">{formatCurrency(results.totalMonthlyPayment)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Payoff Time:</span>
                            <span className="font-bold">{results.yearsWithExtra?.toFixed(1)} years</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Original Term:</span>
                            <span className="text-muted-foreground">{loanTerm} years</span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                          <div className="text-sm font-medium text-center text-green-700">
                            💡 By paying an extra {formatCurrency(extraPayment)} monthly, you'll save {formatCurrency(results.interestSaved)} in interest!
                          </div>
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

export default ExtraPaymentCalculator;
