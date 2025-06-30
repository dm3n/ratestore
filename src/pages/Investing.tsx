import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Calculator, BookOpen, PiggyBank, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Investing = () => {
  const bestGICRates = [
    { institution: "Tangerine Bank", rate: "4.75%", term: "1 Year", type: "featured" },
    { institution: "EQ Bank", rate: "4.65%", term: "1 Year", type: "featured" },
    { institution: "Oaken Financial", rate: "4.85%", term: "2 Year", type: "featured" },
    { institution: "Canadian Western Bank", rate: "4.55%", term: "1 Year", type: "regular" },
    { institution: "Achieva Financial", rate: "4.60%", term: "1 Year", type: "regular" }
  ];

  const investmentOptions = [
    {
      title: "GICs & Term Deposits",
      description: "Guaranteed returns with flexible terms",
      icon: PiggyBank,
      color: "blue"
    },
    {
      title: "RRSPs & TFSAs",
      description: "Tax-advantaged investment accounts",
      icon: Target,
      color: "green"
    },
    {
      title: "Robo-Advisors",
      description: "Automated portfolio management",
      icon: BarChart3,
      color: "purple"
    },
    {
      title: "Online Brokerages",
      description: "Self-directed investing platforms",
      icon: TrendingUp,
      color: "orange"
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
              <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200">
                Compare investment options across Canada
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Grow Your Wealth with Smart Investing
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find the best GIC rates, compare investment accounts, and discover 
                top-rated robo-advisors and online brokerages to maximize your returns.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Compare GIC Rates <TrendingUp className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Investment Calculator <Calculator className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Best GIC Rates */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Best GIC Rates Today</h2>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  Rates updated daily
                </Badge>
              </div>
              
              <div className="grid gap-6">
                {/* Featured GIC Rates */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {bestGICRates.filter(rate => rate.type === "featured").map((rate, index) => (
                    <Card key={index} className="border-2 border-green-200 shadow-lg">
                      <CardHeader className="text-center pb-4">
                        <Badge variant="outline" className="self-center mb-2 bg-green-100 text-green-700">
                          - best rate -
                        </Badge>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <PiggyBank className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="font-medium text-sm">{rate.institution}</span>
                        </div>
                        <div className="text-3xl font-bold text-green-600">{rate.rate}</div>
                        <div className="text-sm text-muted-foreground">{rate.term}</div>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Get Rate
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Other Competitive Rates */}
                <Card>
                  <CardHeader>
                    <CardTitle>More Competitive GIC Rates</CardTitle>
                    <CardDescription>Additional guaranteed investment options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bestGICRates.filter(rate => rate.type === "regular").map((rate, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <PiggyBank className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-semibold">{rate.institution}</div>
                              <div className="text-sm text-muted-foreground">{rate.term}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">{rate.rate}</div>
                            <Button variant="outline" size="sm" className="mt-2">
                              Compare
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
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
                      <Button variant="outline" className="w-full">
                        Learn More
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
                    <CardTitle>TFSA vs RRSP Guide</CardTitle>
                    <CardDescription>
                      Understand the differences and choose the right account for your goals.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/guides/tfsa-vs-rrsp">Read Guide</Link>
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
