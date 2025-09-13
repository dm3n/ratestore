
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Calculator, BookOpen, PiggyBank, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { GICRateEngine } from "@/components/GICRateEngine";

const Investing = () => {
  const investmentOptions = [
    {
      title: "GICs & Term Deposits",
      description: "Guaranteed returns with flexible terms",
      icon: PiggyBank,
      color: "blue",
      link: "/investing/gic/best"
    },
    {
      title: "RRSPs & TFSAs",
      description: "Tax-advantaged investment accounts",
      icon: Target,
      color: "green",
      link: "/investing/resp/best"
    },
    {
      title: "Robo-Advisors",
      description: "Automated portfolio management",
      icon: BarChart3,
      color: "purple",
      link: "/investing/robo-advisors"
    },
    {
      title: "Online Brokerages",
      description: "Self-directed investing platforms",
      icon: TrendingUp,
      color: "orange",
      link: "/investing/brokerages"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 lg:py-28">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Compare investment options across Canada
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Grow Your Wealth
                </span>
                <br />
                <span className="text-foreground">with Smart Investing</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground/80 mb-4 max-w-4xl mx-auto leading-relaxed">
                Find the best GIC rates, compare investment accounts, and discover 
                top-rated robo-advisors and online brokerages to maximize your returns.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>500+ Financial Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Real-time Rate Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Expert Analysis</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/investing/gic/compare">
                    Compare GIC Rates <TrendingUp className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-2 hover:bg-primary/5 transition-all duration-300" asChild>
                  <Link to="/tools/compound-interest">
                    Investment Calculator <Calculator className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* GIC Rate Engine */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <GICRateEngine 
                title="Best GIC Rates Today"
                subtitle="Compare guaranteed investment certificates from Canada's top financial institutions"
              />
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Investment Options</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {investmentOptions.map((option, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="text-center">
                      <div className={`mb-2 bg-${option.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto`}>
                        <option.icon className={`h-6 w-6 text-${option.color}-600`} />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {option.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={option.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Investment Education</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>GIC Basics Guide</CardTitle>
                    <CardDescription>
                      Learn everything about guaranteed investment certificates and how they work.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/guides/gic">Read Guide</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Compound Interest Calculator</CardTitle>
                    <CardDescription>
                      See how your investments can grow over time with compound interest.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/compound-interest">Use Calculator</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="mb-2 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Retirement Planning</CardTitle>
                    <CardDescription>
                      Plan for your retirement with our comprehensive calculator and guide.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools/retirement">Plan Retirement</Link>
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

export default Investing;
