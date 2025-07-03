
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, PiggyBank, Calculator, Target, CheckCircle, AlertCircle, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const RRSPGuide = () => {
  const benefits = [
    {
      title: "Tax Deduction",
      description: "Reduce your taxable income with contributions",
      icon: Percent,
      color: "green"
    },
    {
      title: "Tax-Deferred Growth",
      description: "Investments grow tax-free until withdrawal",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "Retirement Planning",
      description: "Build wealth for your golden years",
      icon: Target,
      color: "purple"
    },
    {
      title: "Government Benefits",
      description: "Potentially increase your benefits and credits",
      icon: Shield,
      color: "orange"
    }
  ];

  const investmentOptions = [
    {
      name: "RRSP GICs",
      description: "Guaranteed returns with no risk",
      rate: "Up to 5.5%",
      risk: "None",
      link: "/investing/gic/registered"
    },
    {
      name: "RRSP Savings",
      description: "High-interest savings accounts",
      rate: "Up to 4.5%",
      risk: "None",
      link: "/banking/savings/rrsp"
    },
    {
      name: "Mutual Funds",
      description: "Professional portfolio management",
      rate: "5-7% avg",
      risk: "Medium",
      link: "/investing/robo-advisors"
    },
    {
      name: "Self-Directed",
      description: "Stocks, bonds, and ETFs",
      rate: "Variable",
      risk: "High",
      link: "/investing/brokerages"
    }
  ];

  const withdrawalPrograms = [
    {
      name: "Home Buyers' Plan (HBP)",
      description: "Withdraw up to $35,000 for your first home",
      amount: "$35,000",
      repayment: "15 years"
    },
    {
      name: "Lifelong Learning Plan (LLP)",
      description: "Fund education for you or your spouse",
      amount: "$20,000",
      repayment: "10 years"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Complete RRSP Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                RRSP Basics: Your Retirement Savings Guide
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Master the Registered Retirement Savings Plan - Canada's premier tax-advantaged 
                account for building retirement wealth while reducing your current tax burden.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/banking/savings/rrsp">
                    Find RRSP Rates <TrendingUp className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/tools/retirement">
                    Retirement Calculator <Calculator className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is RRSP */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">What is an RRSP?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  A Registered Retirement Savings Plan (RRSP) is a retirement savings account 
                  registered with the Canadian government. It's designed to help you save for 
                  retirement while providing immediate tax benefits through deductible contributions.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Key Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>• Immediate tax deduction on contributions</li>
                        <li>• Tax-deferred growth on investments</li>
                        <li>• Lower tax bracket in retirement</li>
                        <li>• Spousal RRSP options available</li>
                        <li>• Special withdrawal programs</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-orange-200 bg-orange-50">
                    <CardHeader>
                      <CardTitle className="text-orange-800 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Important Rules
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-orange-700">
                        <li>• Contribution limits based on income</li>
                        <li>• Unused room carries forward</li>
                        <li>• Must convert to RRIF by 71</li>
                        <li>• Withdrawals are fully taxable</li>
                        <li>• Withholding tax on withdrawals</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Use an RRSP?</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardHeader className="text-center">
                      <div className={`mb-4 bg-${benefit.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto`}>
                        <benefit.icon className={`h-8 w-8 text-${benefit.color}-600`} />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      <CardDescription>
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">RRSP Investment Options</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {investmentOptions.map((option, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{option.name}</CardTitle>
                          <CardDescription className="mt-2">
                            {option.description}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-4">
                          {option.rate}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Risk Level: <span className="font-medium">{option.risk}</span>
                        </span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={option.link}>Learn More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Limits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">RRSP Contribution Limits</h2>
              
              <Card className="mb-8">
                <CardHeader className="bg-blue-50 rounded-t-lg">
                  <CardTitle className="text-2xl text-center">2024 Contribution Limit</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$31,560</div>
                    <p className="text-muted-foreground">Maximum annual limit for 2024</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      (18% of previous year's income, up to the maximum)
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How It's Calculated</CardTitle>
                    <CardDescription>
                      Your contribution room is based on
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• 18% of previous year's earned income</li>
                      <li>• Up to the annual maximum limit</li>
                      <li>• Minus pension adjustments</li>
                      <li>• Plus unused room from prior years</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Deadline & Penalties</CardTitle>
                    <CardDescription>
                      Important dates and consequences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Contribution deadline: March 1st</li>
                      <li>• Over-contribution penalty: 1% per month</li>
                      <li>• Unused room carries forward indefinitely</li>
                      <li>• Check Notice of Assessment for room</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Special Withdrawal Programs</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {withdrawalPrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{program.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Maximum Amount</span>
                          <span className="text-lg font-semibold text-blue-600">
                            {program.amount}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Repayment Period</span>
                          <span className="text-lg font-semibold">
                            {program.repayment}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          No tax on withdrawal if repaid within the required timeframe
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Start Your RRSP Journey</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <PiggyBank className="h-6 w-6 text-green-600" />
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
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">RRSP GICs</CardTitle>
                    <CardDescription className="text-sm">
                      Guaranteed returns in your RRSP
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing/gic/registered">View GIC Rates</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Investment Options</CardTitle>
                    <CardDescription className="text-sm">
                      Grow your RRSP with investments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing/robo-advisors">Explore Options</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Calculator className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">Retirement Planning</CardTitle>
                    <CardDescription className="text-sm">
                      Plan your retirement strategy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/retirement">Use Calculator</Link>
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

export default RRSPGuide;
