
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Home, Calculator, DollarSign, TrendingUp, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAffordabilityCalculatorApi } from "@/hooks/useAffordabilityCalculatorApi";

const AffordabilityCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(20000);
  const [interestRate, setInterestRate] = useState(5.5);
  
  const { calculateAffordability, isLoading, results, error } = useAffordabilityCalculatorApi();

  // Calculate affordability using API
  const handleCalculation = async () => {
    try {
      await calculateAffordability({
        annual_income: annualIncome,
        monthly_debt: monthlyDebts,
        down_payment: downPayment,
        interest_rate: interestRate
      });
    } catch (error) {
      console.error('Calculation failed:', error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleCalculation();
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [annualIncome, monthlyDebts, downPayment, interestRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <Home className="h-3 w-3 mr-1" />
              Home Affordability
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Home Affordability Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how much home you can afford based on your income and financial situation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-blue-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="flex items-center text-2xl">
                    <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                    Your Financial Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="annual-income" className="text-base font-medium">
                      Annual Gross Income
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="annual-income"
                        type="number"
                        value={annualIncome}
                        onChange={(e) => setAnnualIncome(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="80,000"
                      />
                    </div>
                    <Slider
                      value={[annualIncome]}
                      onValueChange={(value) => setAnnualIncome(value[0])}
                      min={30000}
                      max={300000}
                      step={5000}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-debts" className="text-base font-medium">
                      Monthly Debt Payments
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="monthly-debts"
                        type="number"
                        value={monthlyDebts}
                        onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="500"
                      />
                    </div>
                    <Slider
                      value={[monthlyDebts]}
                      onValueChange={(value) => setMonthlyDebts(value[0])}
                      min={0}
                      max={5000}
                      step={50}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="down-payment" className="text-base font-medium">
                      Down Payment Available
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="down-payment"
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="pl-10 text-lg"
                        placeholder="20,000"
                      />
                    </div>
                    <Slider
                      value={[downPayment]}
                      onValueChange={(value) => setDownPayment(value[0])}
                      min={5000}
                      max={200000}
                      step={1000}
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
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-2 border-green-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardTitle className="flex items-center text-2xl">
                    <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
                    Affordability Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <AnimatePresence mode="wait">
                    {isLoading ? (
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
                            {formatCurrency(results.max_home_price)}
                          </div>
                          <div className="text-lg text-muted-foreground">Maximum Home Price</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">
                              {formatCurrency(results.max_monthly_payment)}
                            </div>
                            <div className="text-sm text-muted-foreground">Max Monthly Payment</div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                              {formatCurrency(results.max_loan_amount)}
                            </div>
                            <div className="text-sm text-muted-foreground">Max Loan Amount</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Total Debt Service (TDS) Ratio</span>
                            <span className={`text-sm font-bold ${results.tds_ratio <= 0.44 ? 'text-green-600' : 'text-red-600'}`}>
                              {(results.tds_ratio * 100).toFixed(1)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${results.tds_ratio <= 0.44 ? 'bg-green-500' : 'bg-red-500'}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(results.tds_ratio * 100, 100)}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Gross Debt Service (GDS) Ratio</span>
                            <span className={`text-sm font-bold ${results.gds_ratio <= 0.39 ? 'text-green-600' : 'text-red-600'}`}>
                              {(results.gds_ratio * 100).toFixed(1)}%
                            </span>
                          </div>
                          {(results.tds_ratio > 0.44 || results.gds_ratio > 0.39) && (
                            <div className="flex items-center text-amber-600 text-sm">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              Consider reducing debt or increasing income
                            </div>
                          )}
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

export default AffordabilityCalculator;
