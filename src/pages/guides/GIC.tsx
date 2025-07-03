
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Clock, Calculator, PiggyBank, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const GICGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Complete GIC Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                GIC Basics: Your Complete Guide
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to know about Guaranteed Investment Certificates - 
                from basics to advanced strategies for maximizing your returns.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/investing/gic/best">
                    Compare GIC Rates <TrendingUp className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/tools/compound-interest">
                    GIC Calculator <Calculator className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is a GIC */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">What is a GIC?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  A Guaranteed Investment Certificate (GIC) is a secure investment that guarantees 
                  the return of your principal plus interest over a specified period. Think of it 
                  as a loan you give to a financial institution - they pay you interest in return.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features of GICs</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="text-center">
                    <div className="mb-4 bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Government Protected</CardTitle>
                    <CardDescription>
                      GICs are insured by CDIC up to $100,000 per depositor per institution
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader className="text-center">
                    <div className="mb-4 bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Guaranteed Returns</CardTitle>
                    <CardDescription>
                      Your principal and interest are guaranteed, regardless of market conditions
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader className="text-center">
                    <div className="mb-4 bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                      <Clock className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Flexible Terms</CardTitle>
                    <CardDescription>
                      Choose from terms ranging from 30 days to 10 years to match your goals
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Types of GICs */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Types of GICs</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5" />
                      Non-Registered GICs
                    </CardTitle>
                    <CardDescription>Regular taxable investment accounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Interest is taxable in the year earned</li>
                      <li>• No contribution limits</li>
                      <li>• Flexible for any investment goal</li>
                      <li>• Can be cashed early (with penalties)</li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline" asChild>
                      <Link to="/investing/gic/best">View Non-Registered Rates</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Registered GICs
                    </CardTitle>
                    <CardDescription>Tax-advantaged accounts (TFSA, RRSP)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• TFSA: Tax-free growth and withdrawals</li>
                      <li>• RRSP: Tax-deferred growth</li>
                      <li>• Annual contribution limits apply</li>
                      <li>• Perfect for retirement savings</li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline" asChild>
                      <Link to="/investing/gic/registered">View Registered Rates</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Explore GIC Options</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Best Rates</CardTitle>
                    <CardDescription className="text-sm">
                      Top GIC rates across Canada
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
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">1-Year GICs</CardTitle>
                    <CardDescription className="text-sm">
                      Short-term guaranteed returns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing/gic/1-year">View 1-Year</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">TFSA GICs</CardTitle>
                    <CardDescription className="text-sm">
                      Tax-free investment growth
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/investing/gic/tfsa">View TFSA</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mb-2 bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                      <Calculator className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">GIC Calculator</CardTitle>
                    <CardDescription className="text-sm">
                      Calculate your returns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/compound-interest">Use Calculator</Link>
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

export default GICGuide;
