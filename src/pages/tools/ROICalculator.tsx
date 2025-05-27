
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Calculator } from "lucide-react";

const ROICalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalValue, setFinalValue] = useState(12000);
  const [timePeriod, setTimePeriod] = useState(2);
  const [result, setResult] = useState<any>(null);

  const calculateROI = () => {
    const totalReturn = finalValue - initialInvestment;
    const roiPercentage = (totalReturn / initialInvestment) * 100;
    const annualizedROI = Math.pow(finalValue / initialInvestment, 1 / timePeriod) - 1;

    setResult({
      totalReturn,
      roiPercentage,
      annualizedROI: annualizedROI * 100
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                Investment Analysis
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                ROI Calculator
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Calculate the return on investment for any investment or business decision.
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
                      <TrendingUp className="h-5 w-5" />
                      Investment Details
                    </CardTitle>
                    <CardDescription>Enter your investment information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="initial">Initial Investment</Label>
                      <Input
                        id="initial"
                        type="number"
                        value={initialInvestment}
                        onChange={(e) => setInitialInvestment(Number(e.target.value))}
                        placeholder="10000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="final">Final Value</Label>
                      <Input
                        id="final"
                        type="number"
                        value={finalValue}
                        onChange={(e) => setFinalValue(Number(e.target.value))}
                        placeholder="12000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Time Period (Years)</Label>
                      <Input
                        id="time"
                        type="number"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(Number(e.target.value))}
                        placeholder="2"
                      />
                    </div>
                    <Button onClick={calculateROI} className="w-full gap-2">
                      <Calculator className="h-4 w-4" />
                      Calculate ROI
                    </Button>
                  </CardContent>
                </Card>

                {result && (
                  <Card>
                    <CardHeader>
                      <CardTitle>ROI Results</CardTitle>
                      <CardDescription>Your investment performance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-3xl font-bold text-green-600">
                            {result.roiPercentage.toFixed(2)}%
                          </div>
                          <div className="text-sm text-muted-foreground">Total ROI</div>
                        </div>
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold">
                            {result.annualizedROI.toFixed(2)}%
                          </div>
                          <div className="text-sm text-muted-foreground">Annualized ROI</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Total Return:</span>
                          <span className={`font-semibold ${result.totalReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ${result.totalReturn.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Initial Investment:</span>
                          <span className="font-semibold">${initialInvestment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Final Value:</span>
                          <span className="font-semibold">${finalValue.toLocaleString()}</span>
                        </div>
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

export default ROICalculator;
