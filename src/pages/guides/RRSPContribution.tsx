
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Calendar, AlertCircle, CheckCircle, DollarSign, Target, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";

const RRSPContributionGuide = () => {
  const contributionLimits = [
    { year: "2024", limit: "$31,560", pensionAdj: "Yes" },
    { year: "2023", limit: "$30,780", pensionAdj: "Yes" },
    { year: "2022", limit: "$29,210", pensionAdj: "Yes" },
    { year: "2021", limit: "$27,830", pensionAdj: "Yes" },
  ];

  const deadlines = [
    {
      title: "March 1st Deadline",
      description: "Last day to contribute for the previous tax year",
      icon: Calendar,
      color: "red"
    },
    {
      title: "Tax Filing Benefits",
      description: "Claim your deduction on your tax return",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Carry Forward Room",
      description: "Unused room never expires and carries forward",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "Over-Contribution Penalty",
      description: "1% per month on excess contributions",
      icon: AlertCircle,
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                <PiggyBank className="w-10 h-10 text-white" />
              </div>
              
              {/* Badge */}
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Target className="h-4 w-4 mr-2" />
                RRSP Contribution Guide
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                RRSP Contribution Limits 
                <span className="block text-white/95">& Rules</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Master RRSP contribution limits, deadlines, and strategies to maximize your 
                <span className="font-semibold text-white"> tax savings and retirement wealth building potential.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 h-auto shadow-lg" 
                  asChild
                >
                  <Link to="/tools/retirement" className="gap-3">
                    <Calculator className="h-5 w-5" />
                    Calculate Retirement
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 h-auto shadow-lg" 
                  asChild
                >
                  <Link to="/guides/rrsp" className="gap-3">
                    <Target className="h-5 w-5" />
                    RRSP Basics
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Year Limits */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">2024 RRSP Contribution Limits</h2>
              
              <Card className="mb-8">
                <CardHeader className="bg-green-50 rounded-t-lg">
                  <CardTitle className="text-2xl text-center text-green-800">Maximum Contribution</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-4">$31,560</div>
                    <p className="text-lg text-muted-foreground mb-4">
                      18% of previous year's earned income (up to maximum)
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">18%</div>
                        <p className="text-sm text-blue-700">of earned income</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">March 1</div>
                        <p className="text-sm text-purple-700">contribution deadline</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">Forever</div>
                        <p className="text-sm text-orange-700">unused room carries</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How It's Calculated</CardTitle>
                    <CardDescription>Your contribution room formula</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span>18% of earned income</span>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span>Up to annual maximum</span>
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span>Minus pension adjustments</span>
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span>Plus unused room</span>
                        <CheckCircle className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Historical Limits</CardTitle>
                    <CardDescription>Past contribution maximums</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {contributionLimits.map((limit) => (
                        <div key={limit.year} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{limit.year}</span>
                          <span className="font-bold text-primary">{limit.limit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Deadlines */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Dates & Rules</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {deadlines.map((deadline, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardHeader className="text-center">
                      <div className={`mb-4 bg-${deadline.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto`}>
                        <deadline.icon className={`h-8 w-8 text-${deadline.color}-600`} />
                      </div>
                      <CardTitle className="text-lg">{deadline.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {deadline.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Strategies */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Smart Contribution Strategies</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">Early Year Contributions</CardTitle>
                    <CardDescription>
                      Contribute early in the year for maximum growth
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>More time for tax-deferred growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Dollar-cost averaging over the year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Avoid last-minute rush decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Better investment timing flexibility</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">Maximize Your Room</CardTitle>
                    <CardDescription>
                      Use all available contribution space effectively
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Check your Notice of Assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Use carried-forward room from previous years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Consider spousal RRSP contributions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Track contributions carefully</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">Tax Refund Strategy</CardTitle>
                    <CardDescription>
                      Reinvest your tax refund for compound growth
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Contribute to get immediate tax refund</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Reinvest refund into next year's RRSP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Create a virtuous contribution cycle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Accelerate wealth building</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-700">Avoid Common Mistakes</CardTitle>
                    <CardDescription>
                      Stay compliant and maximize benefits
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Don't over-contribute (1% monthly penalty)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Don't miss the March 1st deadline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Don't forget to claim the deduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Don't withdraw early unless necessary</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Start Contributing Today</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">RRSP Savings</CardTitle>
                    <CardDescription className="text-sm">
                      High-interest RRSP accounts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/banking/savings/rrsp">Compare Rates</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">RRSP GICs</CardTitle>
                    <CardDescription className="text-sm">
                      Guaranteed returns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing/gic/registered">View Rates</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Calculator className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Retirement Calculator</CardTitle>
                    <CardDescription className="text-sm">
                      Plan your future
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
                    <div className="mb-2 bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">RRSP Guide</CardTitle>
                    <CardDescription className="text-sm">
                      Learn the basics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/guides/rrsp">Read Guide</Link>
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

export default RRSPContributionGuide;
