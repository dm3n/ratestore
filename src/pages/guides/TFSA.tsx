
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, PiggyBank, Calculator, Target, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TFSAGuide = () => {
  const benefits = [
    {
      title: "Tax-Free Growth",
      description: "All investment gains grow completely tax-free",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Tax-Free Withdrawals",
      description: "No taxes when you withdraw your money",
      icon: PiggyBank,
      color: "blue"
    },
    {
      title: "Flexible Access",
      description: "Access your money anytime without penalties",
      icon: Shield,
      color: "purple"
    },
    {
      title: "Contribution Room",
      description: "Unused room carries forward indefinitely",
      icon: Target,
      color: "orange"
    }
  ];

  const investmentOptions = [
    {
      name: "GICs",
      description: "Guaranteed returns with no risk",
      rate: "Up to 5.5%",
      risk: "None",
      link: "/investing/gic/tfsa"
    },
    {
      name: "High-Interest Savings",
      description: "Easy access with competitive rates",
      rate: "Up to 4.5%",
      risk: "None",
      link: "/banking/savings/tfsa"
    },
    {
      name: "Index Funds",
      description: "Diversified market exposure",
      rate: "6-8% avg",
      risk: "Medium",
      link: "/investing/robo-advisors"
    },
    {
      name: "Individual Stocks",
      description: "Direct company ownership",
      rate: "Variable",
      risk: "High",
      link: "/investing/brokerages"
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
                Complete TFSA Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                TFSA Basics: Your Complete Guide
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Master the Tax-Free Savings Account - Canada's most flexible investment tool 
                for building wealth without paying taxes on growth or withdrawals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/banking/savings/tfsa">
                    Find TFSA Rates <TrendingUp className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/tools/tfsa-calculator">
                    TFSA Calculator <Calculator className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is TFSA */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">What is a TFSA?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  A Tax-Free Savings Account (TFSA) is a registered savings account that allows 
                  Canadian residents to earn tax-free investment income. Despite its name, a TFSA 
                  can hold much more than just savings - including GICs, stocks, bonds, and mutual funds.
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
                        <li>• Tax-free growth on all investments</li>
                        <li>• No tax on withdrawals</li>
                        <li>• Contribution room re-accumulates</li>
                        <li>• No required withdrawals at any age</li>
                        <li>• Flexible investment options</li>
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
                        <li>• Annual contribution limits apply</li>
                        <li>• Over-contributions are penalized</li>
                        <li>• Must be 18+ and Canadian resident</li>
                        <li>• No tax deduction for contributions</li>
                        <li>• Withdrawal room returns next year</li>
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
              <h2 className="text-3xl font-bold text-center mb-12">Why Use a TFSA?</h2>
              
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
              <h2 className="text-3xl font-bold text-center mb-12">TFSA Investment Options</h2>
              
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
              <h2 className="text-3xl font-bold text-center mb-12">TFSA Contribution Limits</h2>
              
              <Card className="mb-8">
                <CardHeader className="bg-blue-50 rounded-t-lg">
                  <CardTitle className="text-2xl text-center">2024 Contribution Limit</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$7,000</div>
                    <p className="text-muted-foreground">Annual limit for 2024</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cumulative Room (Since 2009)</CardTitle>
                    <CardDescription>
                      If you've never contributed to a TFSA
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600 mb-2">$95,000</div>
                    <p className="text-sm text-muted-foreground">
                      Total room available for someone who was 18+ in 2009
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Room Calculation</CardTitle>
                    <CardDescription>
                      How your contribution room works
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Room = Unused + Withdrawals + New limit</li>
                      <li>• Withdrawals restore room next year</li>
                      <li>• Room accumulates if not used</li>
                      <li>• Check CRA account for exact amount</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Start Your TFSA Journey</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <PiggyBank className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">TFSA Savings</CardTitle>
                    <CardDescription className="text-sm">
                      High-interest TFSA accounts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/banking/savings/tfsa">Compare Rates</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">TFSA GICs</CardTitle>
                    <CardDescription className="text-sm">
                      Guaranteed returns in your TFSA
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing/gic/tfsa">View GIC Rates</Link>
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
                      Grow your TFSA with investments
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
                    <CardTitle className="text-lg">TFSA Calculator</CardTitle>
                    <CardDescription className="text-sm">
                      Plan your TFSA strategy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/tfsa-calculator">Use Calculator</Link>
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

export default TFSAGuide;
