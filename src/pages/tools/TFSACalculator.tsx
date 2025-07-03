
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Calculator, PiggyBank, TrendingUp, AlertCircle, BookOpen, Target, DollarSign } from "lucide-react";

const TFSACalculator = () => {
  const [birthYear, setBirthYear] = useState<string>("");
  const [currentContributions, setCurrentContributions] = useState<string>("");
  const [withdrawals, setWithdrawals] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [results, setResults] = useState<{
    totalRoom: number;
    availableRoom: number;
    maxAnnualContribution: number;
    ageEligible: number;
  } | null>(null);

  // TFSA contribution limits by year
  const contributionLimits: { [key: number]: number } = {
    2009: 5000, 2010: 5000, 2011: 5000, 2012: 5000, 2013: 5500,
    2014: 5500, 2015: 10000, 2016: 5500, 2017: 5500, 2018: 5500,
    2019: 6000, 2020: 6000, 2021: 6000, 2022: 6000, 2023: 6500,
    2024: 7000, 2025: 7000
  };

  const calculateTFSA = () => {
    if (!birthYear) return;

    const birth = parseInt(birthYear);
    const currentYear = new Date().getFullYear();
    const ageIn2009 = 2009 - birth;
    const eligibleYear = ageIn2009 >= 18 ? 2009 : birth + 18;
    
    // Calculate total contribution room
    let totalRoom = 0;
    for (let year = Math.max(eligibleYear, 2009); year <= currentYear; year++) {
      totalRoom += contributionLimits[year] || 7000;
    }

    const contributions = parseFloat(currentContributions) || 0;
    const totalWithdrawals = parseFloat(withdrawals) || 0;
    const availableRoom = totalRoom - contributions + totalWithdrawals;

    setResults({
      totalRoom,
      availableRoom: Math.max(0, availableRoom),
      maxAnnualContribution: contributionLimits[currentYear] || 7000,
      ageEligible: Math.max(18, currentYear - birth)
    });
  };

  useEffect(() => {
    if (birthYear && results) {
      calculateTFSA();
    }
  }, [birthYear, currentContributions, withdrawals]);

  const benefits = [
    {
      icon: DollarSign,
      title: "Tax-Free Growth",
      description: "All investment income earned in your TFSA is completely tax-free, including interest, dividends, and capital gains."
    },
    {
      icon: PiggyBank,
      title: "Flexible Withdrawals",
      description: "Withdraw money anytime without tax penalties. Withdrawn amounts can be re-contributed in future years."
    },
    {
      icon: TrendingUp,
      title: "No Age Limit",
      description: "Continue contributing to your TFSA throughout your lifetime with no forced withdrawals at any age."
    },
    {
      icon: Target,
      title: "Multiple Goals",
      description: "Use your TFSA for any savings goal - emergency fund, vacation, home purchase, or retirement."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Free Financial Tool
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                TFSA Contribution Room Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Calculate your available Tax-Free Savings Account contribution room and 
                plan your tax-free investment strategy for maximum savings growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">$7,000</div>
                  <div className="text-sm text-gray-600">2025 Annual Limit</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">0%</div>
                  <div className="text-sm text-gray-600">Tax on Growth</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">18+</div>
                  <div className="text-sm text-gray-600">Eligible Age</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="calculator" className="space-y-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="calculator">TFSA Calculator</TabsTrigger>
                  <TabsTrigger value="benefits">Why Use TFSA?</TabsTrigger>
                  <TabsTrigger value="guide">TFSA Guide</TabsTrigger>
                </TabsList>

                <TabsContent value="calculator" className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calculator className="h-5 w-5 text-green-600" />
                          Calculate Your TFSA Room
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="birthYear">Birth Year *</Label>
                          <Input
                            id="birthYear"
                            type="number"
                            placeholder="e.g., 1985"
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                            min="1900"
                            max={new Date().getFullYear() - 18}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contributions">Total TFSA Contributions to Date</Label>
                          <Input
                            id="contributions"
                            type="number"
                            placeholder="e.g., 25000"
                            value={currentContributions}
                            onChange={(e) => setCurrentContributions(e.target.value)}
                            min="0"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="withdrawals">Total TFSA Withdrawals</Label>
                          <Input
                            id="withdrawals"
                            type="number"
                            placeholder="e.g., 5000"
                            value={withdrawals}
                            onChange={(e) => setWithdrawals(e.target.value)}
                            min="0"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="province">Province (Optional)</Label>
                          <Select value={province} onValueChange={setProvince}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your province" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="AB">Alberta</SelectItem>
                              <SelectItem value="BC">British Columbia</SelectItem>
                              <SelectItem value="MB">Manitoba</SelectItem>
                              <SelectItem value="NB">New Brunswick</SelectItem>
                              <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                              <SelectItem value="NS">Nova Scotia</SelectItem>
                              <SelectItem value="ON">Ontario</SelectItem>
                              <SelectItem value="PE">Prince Edward Island</SelectItem>
                              <SelectItem value="QC">Quebec</SelectItem>
                              <SelectItem value="SK">Saskatchewan</SelectItem>
                              <SelectItem value="NT">Northwest Territories</SelectItem>
                              <SelectItem value="NU">Nunavut</SelectItem>
                              <SelectItem value="YT">Yukon</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button 
                          onClick={calculateTFSA} 
                          className="w-full"
                          disabled={!birthYear}
                        >
                          Calculate TFSA Room
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Results */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                          Your TFSA Results
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {results ? (
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center p-4 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">
                                  ${results.availableRoom.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">Available Room</div>
                              </div>
                              <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">
                                  ${results.totalRoom.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">Total Room</div>
                              </div>
                            </div>

                            <Separator />

                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600">2025 Annual Limit:</span>
                                <span className="font-medium">${results.maxAnnualContribution.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Your Current Age:</span>
                                <span className="font-medium">{results.ageEligible}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Eligible Since:</span>
                                <span className="font-medium">
                                  {parseInt(birthYear) + 18 <= 2009 ? "2009" : (parseInt(birthYear) + 18).toString()}
                                </span>
                              </div>
                            </div>

                            <Alert>
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription>
                                <strong>Important:</strong> This is an estimate. Verify with CRA or your financial institution 
                                for your exact contribution room, especially if you've made contributions or withdrawals.
                              </AlertDescription>
                            </Alert>
                          </div>
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p>Enter your birth year to calculate your TFSA contribution room</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Additional Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>TFSA Contribution Limits by Year</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {Object.entries(contributionLimits).map(([year, limit]) => (
                          <div key={year} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="font-semibold text-sm">{year}</div>
                            <div className="text-xs text-gray-600">${limit.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Why Use a TFSA?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {benefits.map((benefit, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-green-100 rounded-lg">
                                <benefit.icon className="h-6 w-6 text-green-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>TFSA vs RRSP Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3">Feature</th>
                              <th className="text-left p-3">TFSA</th>
                              <th className="text-left p-3">RRSP</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Tax on Contributions</td>
                              <td className="p-3">After-tax dollars</td>
                              <td className="p-3">Pre-tax dollars (deductible)</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Tax on Withdrawals</td>
                              <td className="p-3">Tax-free</td>
                              <td className="p-3">Fully taxable</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Withdrawal Flexibility</td>
                              <td className="p-3">Anytime, no penalty</td>
                              <td className="p-3">Penalty for early withdrawal</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Contribution Room</td>
                              <td className="p-3">Returns next year</td>
                              <td className="p-3">Lost permanently</td>
                            </tr>
                            <tr>
                              <td className="p-3 font-medium">Mandatory Withdrawal</td>
                              <td className="p-3">None</td>
                              <td className="p-3">RRIF at age 71</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="guide" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Complete TFSA Guide</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            Getting Started
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Eligibility</h4>
                            <p className="text-gray-600 text-sm">
                              Canadian residents 18+ with a valid SIN can open a TFSA. 
                              Non-residents cannot contribute but can maintain existing accounts.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">How to Open</h4>
                            <p className="text-gray-600 text-sm">
                              Visit any bank, credit union, or online broker. You'll need 
                              government-issued ID and your Social Insurance Number.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Investment Options</h4>
                            <p className="text-gray-600 text-sm">
                              Cash, GICs, bonds, stocks, ETFs, mutual funds, and other 
                              qualified investments are all TFSA-eligible.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-orange-600" />
                            Important Rules
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Over-Contribution Penalty</h4>
                            <p className="text-gray-600 text-sm">
                              1% per month tax on excess contributions. Track your room carefully 
                              and withdraw excess amounts immediately.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Business Activities</h4>
                            <p className="text-gray-600 text-sm">
                              Don't carry on business activities in your TFSA or it may become 
                              taxable. This includes day trading and flipping properties.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Multiple Accounts</h4>
                            <p className="text-gray-600 text-sm">
                              You can have multiple TFSAs at different institutions, but your 
                              total contributions cannot exceed your available room.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Maximizing Your TFSA Strategy</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Best Practices</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>• Contribute early in the year to maximize growth time</li>
                              <li>• Hold your highest-growth investments in TFSA</li>
                              <li>• Consider automatic monthly contributions</li>
                              <li>• Re-contribute withdrawn amounts in January</li>
                              <li>• Keep foreign withholding tax implications in mind</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Common Mistakes</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li>• Not tracking contribution room accurately</li>
                              <li>• Re-contributing too quickly after withdrawal</li>
                              <li>• Holding cash instead of investing for growth</li>
                              <li>• Not maximizing annual contribution limits</li>
                              <li>• Using TFSA for frequent trading</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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

export default TFSACalculator;
