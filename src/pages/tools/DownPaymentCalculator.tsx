
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PiggyBank, Target, TrendingUp } from "lucide-react";

const DownPaymentCalculator = () => {
  const [homePrice, setHomePrice] = useState<string>("400000");
  const [currentSavings, setCurrentSavings] = useState<string>("50000");
  const [monthlySavings, setMonthlySavings] = useState<string>("2000");
  const [targetDown, setTargetDown] = useState<string>("20");

  const calculateDownPayment = () => {
    const price = parseFloat(homePrice);
    const savings = parseFloat(currentSavings);
    const monthly = parseFloat(monthlySavings);
    const target = parseFloat(targetDown) / 100;

    const targetAmount = price * target;
    const needed = Math.max(0, targetAmount - savings);
    const monthsToSave = needed > 0 ? Math.ceil(needed / monthly) : 0;
    const progressPercent = Math.min(100, (savings / targetAmount) * 100);

    return {
      targetAmount,
      needed,
      monthsToSave,
      progressPercent,
      currentSavings: savings
    };
  };

  const results = calculateDownPayment();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                Savings Planner
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Down Payment Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Plan your down payment strategy and track your savings progress.
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
                      <Target className="h-5 w-5" />
                      Savings Plan
                    </CardTitle>
                    <CardDescription>
                      Set your home price and savings goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="homePrice">Target Home Price</Label>
                      <Input
                        id="homePrice"
                        type="number"
                        value={homePrice}
                        onChange={(e) => setHomePrice(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="targetDown">Down Payment Percentage (%)</Label>
                      <Input
                        id="targetDown"
                        type="number"
                        value={targetDown}
                        onChange={(e) => setTargetDown(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentSavings">Current Savings</Label>
                      <Input
                        id="currentSavings"
                        type="number"
                        value={currentSavings}
                        onChange={(e) => setCurrentSavings(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlySavings">Monthly Savings Amount</Label>
                      <Input
                        id="monthlySavings"
                        type="number"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PiggyBank className="h-5 w-5" />
                        Savings Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress to Goal</span>
                            <span>{results.progressPercent.toFixed(1)}%</span>
                          </div>
                          <Progress value={results.progressPercent} className="h-3" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold">${results.currentSavings.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Current Savings</div>
                          </div>
                          <div className="text-center p-3 bg-primary/10 rounded-lg">
                            <div className="text-lg font-bold text-primary">${results.targetAmount.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Target Amount</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Amount Still Needed</span>
                          <span className="font-medium">${results.needed.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Months to Save</span>
                          <span className="font-medium">
                            {results.monthsToSave === 0 ? "Goal Reached!" : `${results.monthsToSave} months`}
                          </span>
                        </div>
                        {results.monthsToSave > 0 && (
                          <div className="flex justify-between">
                            <span className="text-sm">Target Date</span>
                            <span className="font-medium">
                              {new Date(Date.now() + results.monthsToSave * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownPaymentCalculator;
