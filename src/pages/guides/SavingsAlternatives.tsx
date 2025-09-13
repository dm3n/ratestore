
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
  Shield, 
  Clock, 
  DollarSign,
  Banknote,
  Building,
  ChartBar,
  Calculator,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  Target,
  Star,
  Coins,
  CreditCard
} from "lucide-react";

const SavingsAlternativesGuide = () => {
  const alternatives = [
    {
      icon: Building,
      name: "GICs (Term Deposits)",
      rate: "3.5% - 5.5%",
      risk: "None",
      liquidity: "Low",
      term: "30 days - 10 years",
      description: "Guaranteed returns with fixed terms",
      pros: ["CDIC insured", "Guaranteed returns", "Higher rates than savings"],
      cons: ["Money locked in", "Early withdrawal penalties", "Inflation risk"]
    },
    {
      icon: ChartBar,
      name: "Money Market Funds",
      rate: "2.0% - 4.0%",
      risk: "Very Low",
      liquidity: "High",
      term: "No fixed term",
      description: "Professional management of short-term securities",
      pros: ["Professional management", "Daily liquidity", "Stable value"],
      cons: ["Not CDIC insured", "Management fees", "Variable returns"]
    },
    {
      icon: TrendingUp,
      name: "High-Interest ETFs",
      rate: "3.0% - 5.0%",
      risk: "Low",
      liquidity: "High",
      term: "No fixed term",
      description: "Exchange-traded funds focused on income",
      pros: ["Diversified holdings", "Tradeable", "Professional management"],
      cons: ["Market risk", "Management fees", "Not guaranteed"]
    },
    {
      icon: Coins,
      name: "Treasury Bills",
      rate: "3.0% - 4.5%",
      risk: "None",
      liquidity: "Medium",
      term: "1-12 months",
      description: "Government-backed short-term securities",
      pros: ["Government backed", "Predictable returns", "Various terms"],
      cons: ["Minimum investment", "Interest rate risk", "Limited liquidity"]
    },
    {
      icon: CreditCard,
      name: "Corporate Bonds",
      rate: "3.5% - 6.0%",
      risk: "Low-Medium",
      liquidity: "Medium",
      term: "1-30+ years",
      description: "Debt securities issued by corporations",
      pros: ["Higher yields", "Income stream", "Diversification"],
      cons: ["Credit risk", "Interest rate risk", "Complexity"]
    },
    {
      icon: Star,
      name: "Dividend Stocks",
      rate: "2.0% - 8.0%",
      risk: "Medium-High",
      liquidity: "High",
      term: "No fixed term",
      description: "Stocks that pay regular dividends",
      pros: ["Growth potential", "Income stream", "Tax advantages"],
      cons: ["Market volatility", "No guarantees", "Research required"]
    }
  ];

  const riskLevels = [
    { level: "No Risk", color: "bg-green-500", alternatives: ["Savings Accounts", "GICs", "Treasury Bills"] },
    { level: "Very Low Risk", color: "bg-green-400", alternatives: ["Money Market Funds", "High-Grade Bonds"] },
    { level: "Low Risk", color: "bg-yellow-400", alternatives: ["Bond ETFs", "Dividend ETFs"] },
    { level: "Medium Risk", color: "bg-orange-400", alternatives: ["Corporate Bonds", "Preferred Shares"] },
    { level: "High Risk", color: "bg-red-400", alternatives: ["Growth Stocks", "Sector ETFs"] }
  ];

  const scenarios = [
    {
      title: "Emergency Fund (3-6 months expenses)",
      recommendation: "High-Interest Savings Account",
      reasoning: "Need immediate access, capital preservation critical",
      alternatives: ["Money Market Account", "Short-term GIC ladder"]
    },
    {
      title: "Short-term goals (1-2 years)",
      recommendation: "GICs or Treasury Bills",
      reasoning: "Higher returns than savings, principal protected",
      alternatives: ["Money Market Funds", "Short-term Bond ETFs"]
    },
    {
      title: "Medium-term goals (3-5 years)",
      recommendation: "Balanced approach with GICs and Bond ETFs",
      reasoning: "Balance of growth potential and stability",
      alternatives: ["Conservative Balanced Funds", "Dividend ETFs"]
    },
    {
      title: "Long-term wealth building (5+ years)",
      recommendation: "Diversified portfolio with stocks and bonds",
      reasoning: "Time to ride out volatility for higher returns",
      alternatives: ["Growth ETFs", "Index Funds", "Individual Stocks"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-8 w-8" />
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Investment Guide
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Savings Account Alternatives
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Explore investment options that can offer higher returns than traditional savings accounts. 
                Learn about the risks, benefits, and ideal use cases for each alternative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover-scale">
                  <Link to="/compare-all-rates">
                    <Calculator className="mr-2 h-4 w-4" />
                    Compare Options
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/80 text-white hover:bg-white/20 hover:border-white font-semibold shadow-md backdrop-blur-sm transition-all duration-200 hover-scale">
                  <Link to="/tools/calculators-hub">
                    Investment Calculator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Quick Overview */}
          <section className="mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-emerald-600" />
                  <CardTitle className="text-2xl">Why Consider Alternatives?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  While savings accounts offer safety and liquidity, they may not keep pace with inflation 
                  or provide the growth needed for long-term financial goals. Understanding alternatives 
                  can help you optimize your financial strategy.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/60 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Higher Returns</h4>
                    <p className="text-sm text-gray-600">Potential for better long-term growth</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg text-center">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Goal-Specific</h4>
                    <p className="text-sm text-gray-600">Match investments to your timeline</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Diversification</h4>
                    <p className="text-sm text-gray-600">Spread risk across different assets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Alternatives Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Savings Account Alternatives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alternatives.map((alt, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <alt.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{alt.name}</CardTitle>
                        <div className="text-2xl font-bold text-green-600">{alt.rate}</div>
                      </div>
                    </div>
                    <CardDescription>{alt.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Risk:</span>
                        <div className="font-medium">{alt.risk}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Liquidity:</span>
                        <div className="font-medium">{alt.liquidity}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Term:</span>
                        <div className="font-medium text-xs">{alt.term}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-green-600 mb-2">Pros:</h5>
                      <ul className="text-sm space-y-1">
                        {alt.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-orange-600 mb-2">Cons:</h5>
                      <ul className="text-sm space-y-1">
                        {alt.cons.map((con, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <AlertTriangle className="h-3 w-3 text-orange-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Risk Assessment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Risk vs Return Spectrum</h2>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Risk Levels</CardTitle>
                <CardDescription>Higher potential returns typically come with higher risk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskLevels.map((level, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium">{level.level}</div>
                      <div className="flex-1">
                        <div className={`h-6 ${level.color} rounded-lg relative`} style={{width: `${(index + 1) * 20}%`}}>
                          <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">
                            {(index + 1) * 20}%
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 text-sm text-gray-600">
                        {level.alternatives.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Scenario-Based Recommendations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Choose Based on Your Goals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{scenario.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold text-emerald-600">{scenario.recommendation}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-700 text-sm">{scenario.reasoning}</p>
                    <div>
                      <h5 className="font-semibold mb-2">Other Options:</h5>
                      <ul className="text-sm space-y-1">
                        {scenario.alternatives.map((alt, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                            {alt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Tabs */}
          <section className="mb-12">
            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="tax-implications">Tax Considerations</TabsTrigger>
                <TabsTrigger value="portfolio-building">Portfolio Building</TabsTrigger>
                <TabsTrigger value="common-mistakes">Avoid Mistakes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started with Alternatives</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Step 1: Assess Your Situation</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Determine your risk tolerance</li>
                        <li>Identify your time horizon</li>
                        <li>Set clear financial goals</li>
                        <li>Understand your liquidity needs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Step 2: Start Small</h4>
                      <p className="text-gray-700 mb-2">
                        Begin with low-risk alternatives before moving to higher-risk options:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>High-interest savings account first</li>
                        <li>Add GICs for guaranteed growth</li>
                        <li>Consider money market funds</li>
                        <li>Gradually add other investments</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Step 3: Educate Yourself</h4>
                      <p className="text-gray-700">
                        Take time to understand each investment option before committing funds. 
                        Consider speaking with a financial advisor for personalized advice.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tax-implications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tax Considerations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Interest Income</h4>
                      <p className="text-gray-700">
                        Interest from savings accounts, GICs, and bonds is taxed as regular income 
                        at your marginal tax rate. This includes income from money market funds.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Dividend Income</h4>
                      <p className="text-gray-700">
                        Canadian eligible dividends receive preferential tax treatment through the 
                        dividend tax credit, making them more tax-efficient than interest income.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Capital Gains</h4>
                      <p className="text-gray-700">
                        Only 50% of capital gains are taxable, making them more tax-efficient 
                        than interest income for long-term growth strategies.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Tax-Sheltered Accounts</h4>
                      <p className="text-gray-700">
                        Consider holding investments in RRSPs, TFSAs, or other registered accounts 
                        to minimize or eliminate tax implications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="portfolio-building" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Building a Balanced Portfolio</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">The Core-Satellite Approach</h4>
                      <p className="text-gray-700 mb-2">
                        Build a stable foundation with lower-risk investments, then add higher-risk/reward options:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Core (60-80%):</strong> Savings accounts, GICs, broad market ETFs</li>
                        <li><strong>Satellite (20-40%):</strong> Individual stocks, sector ETFs, alternative investments</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Age-Based Allocation</h4>
                      <p className="text-gray-700">
                        A common rule of thumb is to hold your age as a percentage in lower-risk investments. 
                        For example, a 30-year-old might hold 30% in bonds/GICs and 70% in stocks.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Regular Rebalancing</h4>
                      <p className="text-gray-700">
                        Review and rebalance your portfolio annually or when allocations drift 
                        significantly from your target percentages.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="common-mistakes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Common Mistakes to Avoid</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Mistakes to Avoid:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                            <span className="text-sm">Investing money you'll need within 2 years</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                            <span className="text-sm">Putting all money in one investment type</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                            <span className="text-sm">Panicking during market downturns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                            <span className="text-sm">Ignoring fees and expenses</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Best Practices:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Start with an emergency fund in savings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Diversify across different asset types</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Invest regularly through dollar-cost averaging</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span className="text-sm">Focus on long-term goals, not short-term fluctuations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Diversify Your Savings?</h2>
                <p className="text-xl mb-8 text-emerald-100">
                  Explore investment options that align with your goals and risk tolerance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                    <Link to="/investing/gic/compare">
                      <Building className="mr-2 h-4 w-4" />
                      Compare GIC Rates
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/tools/compound-interest">
                      Investment Calculator
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

export default SavingsAlternativesGuide;
