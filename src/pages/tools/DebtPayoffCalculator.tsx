
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  Calculator, 
  Plus, 
  Trash2, 
  TrendingDown, 
  DollarSign,
  Calendar,
  Target,
  Zap,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown,
  Info
} from "lucide-react";

interface Debt {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
  type: string;
}

interface PayoffResult {
  months: number;
  years: number;
  totalPaid: number;
  totalInterest: number;
  monthlySchedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

const DebtPayoffCalculator = () => {
  const [debts, setDebts] = useState<Debt[]>([
    {
      id: '1',
      name: 'Credit Card',
      balance: 5000,
      interestRate: 18.5,
      minimumPayment: 150,
      type: 'credit_card'
    }
  ]);
  
  const [extraPayment, setExtraPayment] = useState(0);
  const [payoffStrategy, setPayoffStrategy] = useState<'avalanche' | 'snowball' | 'minimum'>('avalanche');
  const [activeTab, setActiveTab] = useState('calculator');
  const [results, setResults] = useState<{[key: string]: PayoffResult}>({});
  const [strategyComparison, setStrategyComparison] = useState<any>(null);

  const debtTypes = [
    { value: 'credit_card', label: 'Credit Card', icon: '💳' },
    { value: 'personal_loan', label: 'Personal Loan', icon: '🏦' },
    { value: 'student_loan', label: 'Student Loan', icon: '🎓' },
    { value: 'auto_loan', label: 'Auto Loan', icon: '🚗' },
    { value: 'mortgage', label: 'Mortgage', icon: '🏠' },
    { value: 'other', label: 'Other', icon: '📄' }
  ];

  const addDebt = () => {
    const newDebt: Debt = {
      id: Date.now().toString(),
      name: `Debt ${debts.length + 1}`,
      balance: 1000,
      interestRate: 15,
      minimumPayment: 50,
      type: 'credit_card'
    };
    setDebts([...debts, newDebt]);
  };

  const removeDebt = (id: string) => {
    setDebts(debts.filter(debt => debt.id !== id));
  };

  const updateDebt = (id: string, field: keyof Debt, value: any) => {
    setDebts(debts.map(debt => 
      debt.id === id ? { ...debt, [field]: value } : debt
    ));
  };

  const calculateDebtPayoff = (debt: Debt, extraPayment: number = 0): PayoffResult => {
    const monthlyRate = debt.interestRate / 100 / 12;
    const totalMonthlyPayment = debt.minimumPayment + extraPayment;
    
    if (totalMonthlyPayment <= (debt.balance * monthlyRate)) {
      // Payment is too low to ever pay off the debt
      return {
        months: Infinity,
        years: Infinity,
        totalPaid: Infinity,
        totalInterest: Infinity,
        monthlySchedule: []
      };
    }

    let balance = debt.balance;
    let totalPaid = 0;
    let totalInterest = 0;
    let month = 0;
    const schedule = [];

    while (balance > 0.01 && month < 600) { // Max 50 years
      const interestPayment = balance * monthlyRate;
      const principalPayment = Math.min(totalMonthlyPayment - interestPayment, balance);
      const actualPayment = interestPayment + principalPayment;
      
      balance -= principalPayment;
      totalPaid += actualPayment;
      totalInterest += interestPayment;
      month++;

      schedule.push({
        month,
        payment: actualPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance)
      });
    }

    return {
      months: month,
      years: month / 12,
      totalPaid,
      totalInterest,
      monthlySchedule: schedule
    };
  };

  const calculateStrategyComparison = () => {
    const totalMinimumPayment = debts.reduce((sum, debt) => sum + debt.minimumPayment, 0);
    const totalExtraPayment = extraPayment;
    const totalAvailable = totalMinimumPayment + totalExtraPayment;

    // Avalanche Strategy (highest interest first)
    const avalancheDebts = [...debts].sort((a, b) => b.interestRate - a.interestRate);
    const avalancheResult = calculateDebtStrategy(avalancheDebts, totalAvailable);

    // Snowball Strategy (lowest balance first)
    const snowballDebts = [...debts].sort((a, b) => a.balance - b.balance);
    const snowballResult = calculateDebtStrategy(snowballDebts, totalAvailable);

    // Minimum payment only
    const minimumResult = debts.map(debt => calculateDebtPayoff(debt, 0));
    const minimumTotals = {
      months: Math.max(...minimumResult.map(r => r.months)),
      totalPaid: minimumResult.reduce((sum, r) => sum + r.totalPaid, 0),
      totalInterest: minimumResult.reduce((sum, r) => sum + r.totalInterest, 0)
    };

    setStrategyComparison({
      avalanche: avalancheResult,
      snowball: snowballResult,
      minimum: minimumTotals
    });
  };

  const calculateDebtStrategy = (sortedDebts: Debt[], totalPayment: number) => {
    const debtsCopy = sortedDebts.map(debt => ({ ...debt, currentBalance: debt.balance }));
    let month = 0;
    let totalPaid = 0;
    let totalInterest = 0;

    while (debtsCopy.some(debt => debt.currentBalance > 0) && month < 600) {
      month++;
      let remainingPayment = totalPayment;

      // Pay minimum on all debts first
      for (const debt of debtsCopy) {
        if (debt.currentBalance > 0) {
          const monthlyRate = debt.interestRate / 100 / 12;
          const interestPayment = debt.currentBalance * monthlyRate;
          const minimumPrincipal = Math.min(debt.minimumPayment - interestPayment, debt.currentBalance);
          const actualMinimum = Math.min(debt.minimumPayment, debt.currentBalance + interestPayment);
          
          debt.currentBalance -= minimumPrincipal;
          totalPaid += actualMinimum;
          totalInterest += interestPayment;
          remainingPayment -= actualMinimum;
        }
      }

      // Apply extra payment to first debt with balance
      const targetDebt = debtsCopy.find(debt => debt.currentBalance > 0);
      if (targetDebt && remainingPayment > 0) {
        const extraPrincipal = Math.min(remainingPayment, targetDebt.currentBalance);
        targetDebt.currentBalance -= extraPrincipal;
        totalPaid += extraPrincipal;
      }
    }

    return {
      months: month,
      totalPaid,
      totalInterest
    };
  };

  useEffect(() => {
    if (debts.length > 0) {
      const newResults: {[key: string]: PayoffResult} = {};
      debts.forEach(debt => {
        newResults[debt.id] = calculateDebtPayoff(debt);
      });
      setResults(newResults);
      calculateStrategyComparison();
    }
  }, [debts, extraPayment]);

  const totalDebt = debts.reduce((sum, debt) => sum + debt.balance, 0);
  const totalMinimumPayment = debts.reduce((sum, debt) => sum + debt.minimumPayment, 0);
  const averageInterestRate = debts.length > 0 
    ? debts.reduce((sum, debt) => sum + (debt.interestRate * debt.balance), 0) / totalDebt 
    : 0;

  const formatCurrency = (amount: number) => {
    if (amount === Infinity) return "∞";
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatMonths = (months: number) => {
    if (months === Infinity) return "Never";
    if (months <= 12) return `${Math.ceil(months)} months`;
    const years = Math.floor(months / 12);
    const remainingMonths = Math.ceil(months % 12);
    return remainingMonths > 0 ? `${years}y ${remainingMonths}m` : `${years} years`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-medium">
                <TrendingDown className="mr-2 h-4 w-4" />
                Debt Freedom Tool
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Smart Debt Payoff Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Create a strategic plan to become debt-free faster. Compare payment strategies, 
                visualize your progress, and save thousands in interest.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-100">
                  <div className="text-2xl font-bold text-red-600 mb-1">{formatCurrency(totalDebt)}</div>
                  <div className="text-sm text-gray-600">Total Debt</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{formatCurrency(totalMinimumPayment)}</div>
                  <div className="text-sm text-gray-600">Monthly Minimum</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-100">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">{averageInterestRate.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Avg Interest Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Calculator */}
        <section className="pb-16">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                <div className="flex justify-center">
                  <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="calculator" className="flex items-center gap-2">
                      <Calculator className="h-4 w-4" />
                      Calculator
                    </TabsTrigger>
                    <TabsTrigger value="strategy" className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Strategy
                    </TabsTrigger>
                    <TabsTrigger value="timeline" className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Timeline
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="calculator" className="space-y-8">
                  <div className="grid gap-8 lg:grid-cols-12">
                    {/* Debt Input Section */}
                    <div className="lg:col-span-8 space-y-6">
                      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                        <CardHeader className="border-b bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
                          <CardTitle className="flex items-center gap-3">
                            <CreditCard className="h-6 w-6" />
                            Your Debts
                          </CardTitle>
                          <CardDescription className="text-red-100">
                            Add all your debts to create a comprehensive payoff plan
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            {debts.map((debt, index) => (
                              <div key={debt.id} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                                      {index + 1}
                                    </span>
                                    Debt #{index + 1}
                                  </h3>
                                  {debts.length > 1 && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => removeDebt(debt.id)}
                                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  )}
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                  <div>
                                    <Label htmlFor={`name-${debt.id}`} className="text-sm font-medium">Debt Name</Label>
                                    <Input
                                      id={`name-${debt.id}`}
                                      value={debt.name}
                                      onChange={(e) => updateDebt(debt.id, 'name', e.target.value)}
                                      placeholder="Credit Card"
                                      className="mt-1"
                                    />
                                  </div>
                                  
                                  <div>
                                    <Label htmlFor={`type-${debt.id}`} className="text-sm font-medium">Type</Label>
                                    <Select
                                      value={debt.type}
                                      onValueChange={(value) => updateDebt(debt.id, 'type', value)}
                                    >
                                      <SelectTrigger className="mt-1">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {debtTypes.map((type) => (
                                          <SelectItem key={type.value} value={type.value}>
                                            <span className="flex items-center gap-2">
                                              <span>{type.icon}</span>
                                              {type.label}
                                            </span>
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  
                                  <div>
                                    <Label htmlFor={`balance-${debt.id}`} className="text-sm font-medium">Current Balance</Label>
                                    <Input
                                      id={`balance-${debt.id}`}
                                      type="number"
                                      value={debt.balance}
                                      onChange={(e) => updateDebt(debt.id, 'balance', Number(e.target.value))}
                                      placeholder="5000"
                                      className="mt-1"
                                    />
                                  </div>
                                  
                                  <div>
                                    <Label htmlFor={`rate-${debt.id}`} className="text-sm font-medium">Interest Rate (%)</Label>
                                    <Input
                                      id={`rate-${debt.id}`}
                                      type="number"
                                      step="0.1"
                                      value={debt.interestRate}
                                      onChange={(e) => updateDebt(debt.id, 'interestRate', Number(e.target.value))}
                                      placeholder="18.5"
                                      className="mt-1"
                                    />
                                  </div>
                                  
                                  <div className="md:col-span-2">
                                    <Label htmlFor={`payment-${debt.id}`} className="text-sm font-medium">Minimum Monthly Payment</Label>
                                    <Input
                                      id={`payment-${debt.id}`}
                                      type="number"
                                      value={debt.minimumPayment}
                                      onChange={(e) => updateDebt(debt.id, 'minimumPayment', Number(e.target.value))}
                                      placeholder="150"
                                      className="mt-1"
                                    />
                                  </div>
                                  
                                  {/* Quick Stats for this debt */}
                                  <div className="md:col-span-2">
                                    {results[debt.id] && (
                                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                                        <div className="text-center">
                                          <div className="text-lg font-bold text-gray-900">
                                            {formatMonths(results[debt.id].months)}
                                          </div>
                                          <div className="text-xs text-gray-500">Payoff Time</div>
                                        </div>
                                        <div className="text-center">
                                          <div className="text-lg font-bold text-red-600">
                                            {formatCurrency(results[debt.id].totalInterest)}
                                          </div>
                                          <div className="text-xs text-gray-500">Total Interest</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                            
                            <Button
                              onClick={addDebt}
                              variant="outline"
                              className="w-full border-dashed border-2 py-8 text-gray-600 hover:text-gray-900 hover:border-gray-400"
                            >
                              <Plus className="mr-2 h-5 w-5" />
                              Add Another Debt
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Extra Payment Section */}
                    <div className="lg:col-span-4 space-y-6">
                      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                        <CardHeader className="border-b bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                          <CardTitle className="flex items-center gap-3">
                            <Zap className="h-6 w-6" />
                            Extra Payment
                          </CardTitle>
                          <CardDescription className="text-green-100">
                            Accelerate your debt payoff
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                          <div>
                            <Label className="text-sm font-medium mb-4 block">
                              Additional Monthly Payment: {formatCurrency(extraPayment)}
                            </Label>
                            <Slider
                              value={[extraPayment]}
                              onValueChange={(value) => setExtraPayment(value[0])}
                              max={1000}
                              step={25}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                              <span>$0</span>
                              <span>$1,000</span>
                            </div>
                          </div>
                          
                          <Separator />
                          
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-900">Payment Strategy</h4>
                            <div className="space-y-3">
                              {[
                                { value: 'avalanche', label: 'Debt Avalanche', desc: 'Pay highest interest first' },
                                { value: 'snowball', label: 'Debt Snowball', desc: 'Pay smallest balance first' },
                                { value: 'minimum', label: 'Minimum Only', desc: 'No extra payments' }
                              ].map((strategy) => (
                                <div
                                  key={strategy.value}
                                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                                    payoffStrategy === strategy.value 
                                      ? 'bg-blue-50 border-blue-200' 
                                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                  }`}
                                  onClick={() => setPayoffStrategy(strategy.value as any)}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-4 h-4 rounded-full border-2 ${
                                      payoffStrategy === strategy.value 
                                        ? 'bg-blue-500 border-blue-500' 
                                        : 'border-gray-300'
                                    }`} />
                                    <div>
                                      <div className="font-medium text-sm">{strategy.label}</div>
                                      <div className="text-xs text-gray-500">{strategy.desc}</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="strategy" className="space-y-8">
                  {strategyComparison && (
                    <div className="grid gap-6 md:grid-cols-3">
                      {Object.entries(strategyComparison).map(([strategy, data]: [string, any]) => (
                        <Card key={strategy} className={`bg-white/90 backdrop-blur-sm border-0 shadow-xl ${
                          strategy === 'avalanche' ? 'ring-2 ring-blue-500' : ''
                        }`}>
                          <CardHeader className={`text-white rounded-t-lg ${
                            strategy === 'avalanche' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                            strategy === 'snowball' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                            'bg-gradient-to-r from-gray-500 to-gray-600'
                          }`}>
                            <CardTitle className="flex items-center gap-2">
                              {strategy === 'avalanche' && <TrendingDown className="h-5 w-5" />}
                              {strategy === 'snowball' && <Target className="h-5 w-5" />}
                              {strategy === 'minimum' && <Calendar className="h-5 w-5" />}
                              {strategy === 'avalanche' ? 'Debt Avalanche' :
                               strategy === 'snowball' ? 'Debt Snowball' : 'Minimum Payment'}
                            </CardTitle>
                            {strategy === 'avalanche' && (
                              <Badge variant="secondary" className="w-fit">Recommended</Badge>
                            )}
                          </CardHeader>
                          <CardContent className="p-6 space-y-4">
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Payoff Time:</span>
                                <span className="font-semibold">{formatMonths(data.months)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Total Paid:</span>
                                <span className="font-semibold">{formatCurrency(data.totalPaid)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Total Interest:</span>
                                <span className="font-semibold text-red-600">{formatCurrency(data.totalInterest)}</span>
                              </div>
                            </div>
                            
                            {strategy !== 'minimum' && strategyComparison.minimum && (
                              <div className="pt-3 border-t">
                                <div className="text-sm text-green-600 font-medium">
                                  Savings vs Minimum:
                                </div>
                                <div className="text-sm space-y-1">
                                  <div>Interest: {formatCurrency(strategyComparison.minimum.totalInterest - data.totalInterest)}</div>
                                  <div>Time: {formatMonths(strategyComparison.minimum.months - data.months)} sooner</div>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="timeline" className="space-y-8">
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Debt Payoff Timeline
                      </CardTitle>
                      <CardDescription>
                        Visualize your journey to debt freedom
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {debts.map((debt, index) => {
                          const result = results[debt.id];
                          if (!result) return null;
                          
                          return (
                            <div key={debt.id} className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="font-medium">{debt.name}</div>
                                <div className="text-sm text-gray-500">
                                  {formatMonths(result.months)}
                                </div>
                              </div>
                              <Progress 
                                value={Math.min(100, (debt.minimumPayment * 12) / debt.balance * 100)} 
                                className="h-3"
                              />
                              <div className="flex justify-between text-sm text-gray-500">
                                <span>{formatCurrency(debt.balance)}</span>
                                <span>{formatCurrency(result.totalInterest)} interest</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DebtPayoffCalculator;
