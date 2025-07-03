
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PiggyBank, 
  CreditCard, 
  Calculator, 
  TrendingUp, 
  Users, 
  GraduationCap,
  User,
  Heart,
  Globe,
  Award,
  ArrowRight,
  DollarSign,
  Building2,
  Star,
  CheckCircle
} from "lucide-react";

export function Banking() {
  const savingsAccounts = [
    {
      title: "High Interest Savings",
      description: "Maximize your earnings with competitive interest rates",
      icon: TrendingUp,
      link: "/banking/savings/high-interest",
      featured: true,
      rate: "5.25% APY"
    },
    {
      title: "TFSA Savings",
      description: "Tax-free savings account for all Canadians",
      icon: PiggyBank,
      link: "/banking/savings/tfsa",
      featured: false,
      rate: "4.80% APY"
    },
    {
      title: "RRSP Savings",
      description: "Retirement savings with tax advantages",
      icon: Building2,
      link: "/banking/savings/rrsp",
      featured: false,
      rate: "4.65% APY"
    },
    {
      title: "Youth Savings",
      description: "Banking designed for young Canadians",
      icon: GraduationCap,
      link: "/banking/savings/youth",
      featured: false,
      rate: "3.50% APY"
    },
    {
      title: "First Home Savings",
      description: "Save for your first home purchase",
      icon: Building2,
      link: "/banking/savings/first-home",
      featured: true,
      rate: "5.00% APY"
    },
    {
      title: "RESP Accounts",
      description: "Education savings for your children",
      icon: GraduationCap,
      link: "/banking/savings/resp",
      featured: false,
      rate: "4.25% APY"
    }
  ];

  const chequingAccounts = [
    {
      title: "Personal Chequing",
      description: "Everyday banking for personal use",
      icon: User,
      link: "/banking/chequing/personal",
      featured: true,
      fee: "$0/month"
    },
    {
      title: "Student Chequing",
      description: "No-fee banking for students",
      icon: GraduationCap,
      link: "/banking/chequing/student",
      featured: false,
      fee: "Free"
    },
    {
      title: "Youth Chequing",
      description: "Banking for teens and young adults",
      icon: Users,
      link: "/banking/chequing/youth",
      featured: false,
      fee: "Free"
    },
    {
      title: "Senior Chequing",
      description: "Special rates and benefits for seniors",
      icon: Heart,
      link: "/banking/chequing/senior",
      featured: false,
      fee: "$4.95/month"
    },
    {
      title: "Newcomer Chequing",
      description: "Banking solutions for new Canadians",
      icon: Globe,
      link: "/banking/chequing/newcomer",
      featured: true,
      fee: "Free for 1 year"
    }
  ];

  const tools = [
    {
      title: "Compare Savings",
      description: "Find the best savings account rates",
      icon: TrendingUp,
      link: "/banking/savings/compare"
    },
    {
      title: "Compare Chequing",
      description: "Compare chequing account features",
      icon: CreditCard,
      link: "/banking/chequing/compare"
    },
    {
      title: "Banking Calculator",
      description: "Calculate interest and savings growth",
      icon: Calculator,
      link: "/tools/calculators"
    },
    {
      title: "TFSA Calculator",
      description: "Maximize your TFSA contributions",
      icon: PiggyBank,
      link: "/tools/tfsa-calculator"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 lg:py-24">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          
          <div className="container relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-8">
                <CheckCircle className="w-4 h-4" />
                Canada's most trusted banking comparison
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-800 bg-clip-text text-transparent">
                  Banking Solution
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Compare savings accounts, chequing accounts, and specialized banking products. 
                Find the best rates and features from Canada's top financial institutions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-xl bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/25" asChild>
                  <Link to="/banking/best-savings">
                    Compare Best Rates
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-slate-50" asChild>
                  <Link to="/banking/savings/compare">
                    View All Accounts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rates */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Today's Best Banking Rates</h2>
                <p className="text-xl text-slate-600">Updated daily from Canada's top financial institutions</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="relative group hover:shadow-xl transition-all duration-300 border-0 shadow-md ring-2 ring-green-500/20 bg-gradient-to-br from-green-50/50 to-white">
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-green-600 text-white px-3 py-1 text-xs font-semibold">
                      ⭐ Best Rate
                    </Badge>
                  </div>
                  <CardHeader className="text-center">
                    <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">High Interest Savings</CardTitle>
                    <div className="text-3xl font-bold text-green-600">5.25%</div>
                    <CardDescription>Annual Percentage Yield</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                      <Link to="/banking/savings/high-interest">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center">
                    <PiggyBank className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">TFSA Savings</CardTitle>
                    <div className="text-3xl font-bold text-blue-600">4.80%</div>
                    <CardDescription>Tax-Free Savings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/banking/savings/tfsa">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center">
                    <CreditCard className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">Free Chequing</CardTitle>
                    <div className="text-3xl font-bold text-purple-600">$0</div>
                    <CardDescription>Monthly Fee</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/banking/chequing/personal">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Accounts Section */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Savings Accounts</h2>
                <p className="text-xl text-slate-600">Grow your money with competitive interest rates</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savingsAccounts.map((account, index) => (
                  <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 ${
                    account.featured ? "ring-2 ring-green-500/20 bg-gradient-to-br from-green-50/50 to-white" : "bg-white"
                  }`}>
                    {account.featured && (
                      <div className="absolute -top-3 left-6">
                        <Badge className="bg-green-600 text-white px-3 py-1 text-xs font-semibold">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          account.featured ? "bg-green-100" : "bg-slate-100"
                        }`}>
                          <account.icon className={`h-6 w-6 ${
                            account.featured ? "text-green-600" : "text-slate-600"
                          }`} />
                        </div>
                        <div className={`text-right ${account.featured ? "text-green-600" : "text-slate-900"}`}>
                          <div className="font-bold text-lg">{account.rate}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{account.title}</CardTitle>
                      <CardDescription>{account.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className={`w-full ${account.featured ? "bg-green-600 hover:bg-green-700" : ""}`}
                        variant={account.featured ? "default" : "outline"}
                        asChild
                      >
                        <Link to={account.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button variant="outline" size="lg" className="gap-2 px-6 py-3 rounded-xl font-semibold" asChild>
                  <Link to="/banking/savings/compare">
                    Compare All Savings Accounts
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Chequing Accounts Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Chequing Accounts</h2>
                <p className="text-xl text-slate-600">Everyday banking solutions for every Canadian</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {chequingAccounts.map((account, index) => (
                  <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 ${
                    account.featured ? "ring-2 ring-blue-500/20 bg-gradient-to-br from-blue-50/50 to-white" : "bg-white"
                  }`}>
                    {account.featured && (
                      <div className="absolute -top-3 left-6">
                        <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold">
                          Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          account.featured ? "bg-blue-100" : "bg-slate-100"
                        }`}>
                          <account.icon className={`h-6 w-6 ${
                            account.featured ? "text-blue-600" : "text-slate-600"
                          }`} />
                        </div>
                        <div className={`text-right ${account.featured ? "text-blue-600" : "text-slate-900"}`}>
                          <div className="font-bold text-lg">{account.fee}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{account.title}</CardTitle>
                      <CardDescription>{account.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className={`w-full ${account.featured ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                        variant={account.featured ? "default" : "outline"}
                        asChild
                      >
                        <Link to={account.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button variant="outline" size="lg" className="gap-2 px-6 py-3 rounded-xl font-semibold" asChild>
                  <Link to="/banking/chequing/compare">
                    Compare All Chequing Accounts
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Resources */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Banking Tools & Resources</h2>
                <p className="text-xl text-slate-600">Make informed banking decisions with our free tools</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 bg-slate-100 group-hover:bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors">
                        <tool.icon className="h-8 w-8 text-slate-600 group-hover:text-green-600 transition-colors" />
                      </div>
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full hover:bg-slate-50" asChild>
                        <Link to={tool.link}>Use Tool</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Award-Winning Banking Comparison</h2>
              <p className="text-xl text-slate-600 mb-8">
                Recognized for providing the most comprehensive and accurate banking comparisons in Canada
              </p>
              <Button size="lg" variant="outline" className="gap-2 px-6 py-3 rounded-xl font-semibold" asChild>
                <Link to="/banking/awards">
                  View Our Awards
                  <Award className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Find Your Perfect Banking Solution?
              </h2>
              <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
                Compare rates, features, and benefits from Canada's top banks and credit unions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/banking/best-savings">
                    Compare Savings Rates
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white" asChild>
                  <Link to="/banking/best-chequing">
                    Compare Chequing Accounts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Banking;
