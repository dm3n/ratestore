
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Calculator, DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PaymentData {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

const AmortizationSchedule = () => {
  const [loanAmount, setLoanAmount] = useState("400000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [schedule, setSchedule] = useState<PaymentData[]>([]);
  const [showSchedule, setShowSchedule] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSchedule = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const principal = parseFloat(loanAmount);
      const rate = parseFloat(interestRate) / 100 / 12;
      const termMonths = parseFloat(loanTerm) * 12;

      const monthlyPayment = principal * (rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1);
      
      const scheduleData: PaymentData[] = [];
      let currentBalance = principal;

      for (let month = 1; month <= Math.min(termMonths, 120); month++) { // Show first 10 years max
        const interestPayment = currentBalance * rate;
        const principalPayment = monthlyPayment - interestPayment;
        currentBalance -= principalPayment;

        scheduleData.push({
          month,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, currentBalance)
        });

        if (currentBalance <= 0) break;
      }

      setSchedule(scheduleData);
      setShowSchedule(true);
      setIsCalculating(false);
    }, 1000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              <FileText className="h-3 w-3 mr-1" />
              Analysis Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Amortization Schedule
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              View detailed month-by-month payment breakdown for your loan
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-purple-100 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                    <CardTitle className="flex items-center text-2xl">
                      <Calculator className="h-6 w-6 mr-2 text-purple-600" />
                      Loan Details
                    </CardTitle>
                    <CardDescription>
                      Enter your loan information to generate the amortization schedule
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="loanAmount" className="text-base font-medium">Loan Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="loanAmount"
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                          className="pl-10 text-lg"
                          placeholder="400,000"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interestRate" className="text-base font-medium">Interest Rate (%)</Label>
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        className="text-lg"
                        placeholder="6.5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loanTerm" className="text-base font-medium">Loan Term (years)</Label>
                      <Input
                        id="loanTerm"
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        className="text-lg"
                        placeholder="30"
                      />
                    </div>
                    <Button 
                      onClick={calculateSchedule} 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6"
                      disabled={isCalculating}
                    >
                      {isCalculating ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Calculating...
                        </div>
                      ) : (
                        <>
                          <Calculator className="h-5 w-5 mr-2" />
                          Generate Schedule
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <AnimatePresence>
                {showSchedule && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Card className="border-2 border-blue-100 shadow-xl">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                        <CardTitle className="flex items-center text-2xl">
                          <FileText className="h-6 w-6 mr-2 text-blue-600" />
                          Payment Schedule (First 10 Years)
                        </CardTitle>
                        <CardDescription>
                          Monthly breakdown of principal and interest payments
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        {schedule.length > 0 && (
                          <div className="space-y-6">
                            {/* Summary Cards */}
                            <div className="grid grid-cols-3 gap-4">
                              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                                  <div className="text-xs text-muted-foreground">Monthly Payment</div>
                                </div>
                                <div className="text-lg font-bold text-green-600">
                                  {formatCurrency(schedule[0]?.payment || 0)}
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                                  <div className="text-xs text-muted-foreground">First Payment Interest</div>
                                </div>
                                <div className="text-lg font-bold text-blue-600">
                                  {formatCurrency(schedule[0]?.interest || 0)}
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <TrendingDown className="h-4 w-4 text-purple-600 mr-1" />
                                  <div className="text-xs text-muted-foreground">First Payment Principal</div>
                                </div>
                                <div className="text-lg font-bold text-purple-600">
                                  {formatCurrency(schedule[0]?.principal || 0)}
                                </div>
                              </div>
                            </div>

                            {/* Schedule Table */}
                            <div className="max-h-96 overflow-y-auto border rounded-lg">
                              <Table>
                                <TableHeader className="sticky top-0 bg-white">
                                  <TableRow>
                                    <TableHead className="font-semibold">Month</TableHead>
                                    <TableHead className="font-semibold">Payment</TableHead>
                                    <TableHead className="font-semibold text-purple-600">Principal</TableHead>
                                    <TableHead className="font-semibold text-blue-600">Interest</TableHead>
                                    <TableHead className="font-semibold">Balance</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {schedule.map((payment, index) => (
                                    <motion.tr
                                      key={payment.month}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: index * 0.02 }}
                                      className="hover:bg-gray-50"
                                    >
                                      <TableCell className="font-medium">{payment.month}</TableCell>
                                      <TableCell className="font-semibold">{formatCurrency(payment.payment)}</TableCell>
                                      <TableCell className="text-purple-600 font-medium">{formatCurrency(payment.principal)}</TableCell>
                                      <TableCell className="text-blue-600 font-medium">{formatCurrency(payment.interest)}</TableCell>
                                      <TableCell className="font-medium">{formatCurrency(payment.balance)}</TableCell>
                                    </motion.tr>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        )}
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

export default AmortizationSchedule;
