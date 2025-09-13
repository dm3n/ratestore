
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompoundInterestCalculator as Calculator } from "@/components/CompoundInterestCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle, Lightbulb, Target, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const CompoundInterestCalculator = () => {
  const tips = [
    {
      title: "Start Early",
      description: "Time is your greatest asset. Even small amounts can grow significantly over decades.",
      icon: Clock,
      color: "blue"
    },
    {
      title: "Be Consistent",
      description: "Regular monthly contributions compound your returns and build wealth faster.",
      icon: Target,
      color: "green"
    },
    {
      title: "Reinvest Returns",
      description: "Let your earnings generate their own earnings for exponential growth.",
      icon: TrendingUp,
      color: "purple"
    },
    {
      title: "Maximize Contributions",
      description: "Increase contributions as your income grows to accelerate wealth building.",
      icon: DollarSign,
      color: "orange"
    }
  ];

  const examples = [
    {
      scenario: "Conservative Saver",
      initial: "$5,000",
      monthly: "$200",
      rate: "4%",
      years: "30",
      result: "$237,000",
      description: "High-interest savings account or GICs"
    },
    {
      scenario: "Balanced Investor",
      initial: "$10,000",
      monthly: "$500",
      rate: "7%",
      years: "30",
      result: "$739,000",
      description: "Diversified portfolio with index funds"
    },
    {
      scenario: "Growth Focused",
      initial: "$15,000",
      monthly: "$1,000",
      rate: "9%",
      years: "25",
      result: "$1,067,000",
      description: "Aggressive growth stocks and equity funds"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/50 via-background to-blue-50/30 py-16 md:py-24">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-6">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Investment Planning Tool
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Compound Interest
                </span>
                <br />
                <span className="text-foreground">Calculator</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground/80 mb-6 max-w-3xl mx-auto leading-relaxed">
                Discover the incredible power of compound interest and see how your investments 
                can grow exponentially over time with consistent contributions.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span>Exponential Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>Time is Your Asset</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>Einstein's 8th Wonder</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/investing/gic/best">
                    Find GIC Rates <DollarSign className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="gap-2 border-2 hover:bg-emerald-50 transition-all duration-300" asChild>
                  <Link to="/banking/savings/high-interest">
                    High-Interest Savings <TrendingUp className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                <div>
                  <Calculator />
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="bg-green-50 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        The Magic of Compounding
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">Your money earns returns</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">Those returns earn their own returns</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">Growth accelerates exponentially</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">Time amplifies the effect dramatically</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-blue-50 rounded-t-lg">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-blue-600" />
                        Einstein's 8th Wonder
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <blockquote className="text-sm italic text-muted-foreground border-l-4 border-blue-200 pl-4">
                        "Compound interest is the eighth wonder of the world. 
                        He who understands it, earns it; he who doesn't, pays it."
                      </blockquote>
                      <p className="text-sm mt-3">
                        Start investing early and let compound interest work its magic 
                        to build substantial wealth over time.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-primary/5 rounded-t-lg">
                      <CardTitle className="text-lg">Quick Investment Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3 text-sm">
                        <p><strong>Diversify:</strong> Don't put all eggs in one basket</p>
                        <p><strong>Dollar-Cost Average:</strong> Invest regularly regardless of market conditions</p>
                        <p><strong>Stay Disciplined:</strong> Stick to your investment plan</p>
                        <p><strong>Review Regularly:</strong> Adjust strategy as goals change</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Strategies */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Smart Investment Strategies</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map((tip, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardHeader className="text-center">
                      <div className={`mb-4 bg-${tip.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto`}>
                        <tip.icon className={`h-8 w-8 text-${tip.color}-600`} />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {tip.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Example Scenarios */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Real-World Examples</h2>
              <p className="text-center text-muted-foreground mb-8">
                See how different investment approaches can impact your wealth over time
              </p>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {examples.map((example, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-center">{example.scenario}</CardTitle>
                      <CardDescription className="text-center text-sm">
                        {example.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Initial:</span>
                            <div className="font-semibold">{example.initial}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Monthly:</span>
                            <div className="font-semibold">{example.monthly}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Rate:</span>
                            <div className="font-semibold">{example.rate}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Years:</span>
                            <div className="font-semibold">{example.years}</div>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Final Amount</div>
                            <div className="text-2xl font-bold text-green-600">{example.result}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Related Tools & Resources</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Retirement Calculator</CardTitle>
                    <CardDescription className="text-sm">
                      Plan your retirement savings strategy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/retirement">Calculate</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">TFSA Calculator</CardTitle>
                    <CardDescription className="text-sm">
                      Maximize your tax-free savings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/tfsa-calculator">Calculate</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">GIC Rates</CardTitle>
                    <CardDescription className="text-sm">
                      Find guaranteed investment returns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing/gic/best">Compare Rates</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Lightbulb className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">Investment Guide</CardTitle>
                    <CardDescription className="text-sm">
                      Learn investment fundamentals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompoundInterestCalculator;
