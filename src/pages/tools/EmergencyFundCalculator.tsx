
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Calculator } from "lucide-react";

const EmergencyFundCalculator = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(3000);
  const [monthsOfExpenses, setMonthsOfExpenses] = useState("6");
  const [currentSavings, setCurrentSavings] = useState(5000);
  const [monthlySavings, setMonthlySavings] = useState(250);
  const [result, setResult] = useState<any>(null);

  const calculateEmergencyFund = () => {
    const targetAmount = monthlyExpenses * Number(monthsOfExpenses);
    const shortfall = Math.max(0, targetAmount - currentSavings);
    const monthsToTarget = monthlySavings > 0 ? Math.ceil(shortfall / monthlySavings) : 0;

    setResult({
      targetAmount,
      shortfall,
      monthsToTarget,
      currentSavings,
      percentComplete: (currentSavings / targetAmount) * 100
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Financial Security
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Emergency Fund Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Calculate how much you need in your emergency fund and track your progress.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Emergency Fund Planning
                    </CardTitle>
                    <CardDescription>Plan your financial safety net</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="monthlyExpenses">Monthly Expenses</Label>
                      <Input
                        id="monthlyExpenses"
                        type="number"
                        value={monthlyExpenses}
                        onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                        placeholder="3000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="months">Months of Expenses to Save</Label>
                      <Select value={monthsOfExpenses} onValueChange={setMonthsOfExpenses}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select months" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 months</SelectItem>
                          <SelectItem value="6">6 months</SelectItem>
                          <SelectItem value="9">9 months</SelectItem>
                          <SelectItem value="12">12 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="currentSavings">Current Emergency Savings</Label>
                      <Input
                        id="currentSavings"
                        type="number"
                        value={currentSavings}
                        onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        placeholder="5000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlySavings">Monthly Savings Amount</Label>
                      <Input
                        id="monthlySavings"
                        type="number"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(Number(e.target.value))}
                        placeholder="250"
                      />
                    </div>
                    <Button onClick={calculateEmergencyFund} className="w-full gap-2">
                      <Calculator className="h-4 w-4" />
                      Calculate Emergency Fund
                    </Button>
                  </CardContent>
                </Card>

                {result && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Emergency Fund Plan</CardTitle>
                      <CardDescription>Your financial safety net progress</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center p-6 bg-orange-50 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">
                          ${result.targetAmount.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Target Amount</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Current Progress:</span>
                          <span className="font-semibold">{result.percentComplete.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-orange-500 h-3 rounded-full transition-all duration-300" 
                            style={{ width: `${Math.min(100, result.percentComplete)}%` }}
                          ></div>
                        </div>
                        
                        {result.shortfall > 0 && (
                          <>
                            <div className="flex justify-between">
                              <span>Amount Needed:</span>
                              <span className="font-semibold text-red-600">${result.shortfall.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Months to Target:</span>
                              <span className="font-semibold">{result.monthsToTarget}</span>
                            </div>
                          </>
                        )}
                        
                        {result.shortfall <= 0 && (
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-green-600 font-semibold">
                              🎉 Congratulations! You've reached your emergency fund goal!
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmergencyFundCalculator;
