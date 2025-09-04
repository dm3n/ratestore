
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  DollarSign, 
  Calculator,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Layers,
  Target,
  Star
} from "lucide-react";

const TieredSavingsGuide = () => {
  const tiers = [
    {
      range: "$0 - $4,999",
      rate: "0.50%",
      color: "from-red-500 to-orange-500",
      description: "Base tier for new savers"
    },
    {
      range: "$5,000 - $24,999",
      rate: "2.25%",
      color: "from-yellow-500 to-amber-500",
      description: "Growing your savings foundation"
    },
    {
      range: "$25,000 - $99,999",
      rate: "3.75%",
      color: "from-blue-500 to-cyan-500",
      description: "Substantial savings rewards"
    },
    {
      range: "$100,000+",
      rate: "4.50%",
      color: "from-green-500 to-emerald-500",
      description: "Premium tier benefits"
    }
  ];

  const examples = [
    {
      balance: "$2,500",
      tier: "Tier 1",
      rate: "0.50%",
      monthlyEarnings: "$1.04",
      annualEarnings: "$12.50"
    },
    {
      balance: "$15,000",
      tier: "Tier 2",
      rate: "2.25%",
      monthlyEarnings: "$28.13",
      annualEarnings: "$337.50"
    },
    {
      balance: "$50,000",
      tier: "Tier 3",
      rate: "3.75%",
      monthlyEarnings: "$156.25",
      annualEarnings: "$1,875.00"
    },
    {
      balance: "$150,000",
      tier: "Tier 4",
      rate: "4.50%",
      monthlyEarnings: "$562.50",
      annualEarnings: "$6,750.00"
    }
  ];

  const strategies = [
    {
      icon: Target,
      title: "Balance Optimization",
      description: "Keep just enough to reach the next tier threshold",
      tip: "Monitor your balance to maximize interest earnings"
    },
    {
      icon: BarChart3,
      title: "Multi-Account Strategy",
      description: "Split funds across multiple tiered accounts",
      tip: "Useful when you exceed the highest tier limit"
    },
    {
      icon: TrendingUp,
      title: "Gradual Building",
      description: "Systematically build towards higher tiers",
      tip: "Set monthly savings goals to reach the next tier"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-8 w-8" />
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Advanced Banking
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Tiered Savings Accounts
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover how tiered interest rates can maximize your savings potential. 
                Learn strategies to optimize your returns across different balance levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate My Earnings
                </Button>
                <Button size="lg" variant="ghost" className="border border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                  Find Tiered Accounts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* What Are Tiered Accounts */}
          <section className="mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Layers className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-2xl">What Are Tiered Savings Accounts?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Tiered savings accounts offer different interest rates based on your account balance. 
                  The more you save, the higher the interest rate you earn on your entire balance.
                </p>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Key Feature:</strong> Unlike some accounts that only pay higher rates on amounts 
                    above certain thresholds, tiered accounts typically apply the higher rate to your entire balance 
                    once you reach each tier.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Interest Rate Tiers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">Interest Rate Tiers</h2>
            <p className="text-center text-gray-600 mb-8">Example tiered structure from a leading Canadian bank</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`}></div>
                  <CardHeader className="text-center pb-2">
                    <Badge variant="outline" className="w-fit mx-auto mb-2">
                      Tier {index + 1}
                    </Badge>
                    <CardTitle className="text-lg">{tier.range}</CardTitle>
                    <div className="text-3xl font-bold text-green-600">{tier.rate}</div>
                    <CardDescription className="text-sm">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${tier.color}`}
                        style={{ width: `${(index + 1) * 25}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Earnings Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Earnings by Balance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {examples.map((example, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{example.balance}</CardTitle>
                      <Badge variant="secondary">{example.tier}</Badge>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{example.rate}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Monthly:</span>
                        <span className="font-semibold">{example.monthlyEarnings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Annual:</span>
                        <span className="font-semibold text-green-600">{example.annualEarnings}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Information Tabs */}
          <section className="mb-12">
            <Tabs defaultValue="how-it-works" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
                <TabsTrigger value="strategies">Strategies</TabsTrigger>
                <TabsTrigger value="comparison">vs Regular Savings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="how-it-works" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How Tiered Savings Work</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        Balance-Based Rates
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Your interest rate is determined by your total account balance. When you reach a new tier, 
                        the higher rate typically applies to your entire balance, not just the amount above the threshold.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm"><strong>Example:</strong> If you have $30,000 and the tier starts at $25,000 
                        with 3.75% APY, you earn 3.75% on the full $30,000, not just on the $5,000 above $25,000.</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                        Monthly Calculation
                      </h4>
                      <p className="text-gray-700">
                        Interest is typically calculated daily based on your daily balance and paid monthly. 
                        Your tier is usually determined by your average daily balance or minimum balance during the period.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pros-cons" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Advantages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span className="text-sm">Higher rates for larger balances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span className="text-sm">Incentive to save more</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span className="text-sm">Competitive rates for high balances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span className="text-sm">Often no monthly fees</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-orange-600 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Considerations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                          <span className="text-sm">Lower rates for smaller balances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                          <span className="text-sm">May require high minimums</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                          <span className="text-sm">Rates can change</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                          <span className="text-sm">Complex fee structures possible</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="strategies" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {strategies.map((strategy, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <strategy.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-lg">{strategy.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-3">{strategy.description}</p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-blue-800">{strategy.tip}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="comparison" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tiered vs Regular Savings Accounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4">Feature</th>
                            <th className="text-left p-4">Tiered Savings</th>
                            <th className="text-left p-4">Regular Savings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Interest Rate</td>
                            <td className="p-4">Variable by balance tier</td>
                            <td className="p-4">Fixed rate for all balances</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Best For</td>
                            <td className="p-4">Large savers ($25K+)</td>
                            <td className="p-4">All balance levels</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Complexity</td>
                            <td className="p-4">More complex structure</td>
                            <td className="p-4">Simple, straightforward</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Maximum Rate</td>
                            <td className="p-4">Often higher</td>
                            <td className="p-4">Consistent across balances</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Savings?</h2>
                <p className="text-xl mb-8 text-purple-100">
                  Find the best tiered savings accounts and start earning more on your money today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                    <Link to="/banking/savings/compare">
                      <Star className="mr-2 h-4 w-4" />
                      Compare Tiered Accounts
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/tools/tfsa-calculator">
                      Calculate Earnings
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TieredSavingsGuide;
