
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, Shield, Calculator, CheckCircle, ArrowRight, 
  Users, Star, Clock, TrendingUp, DollarSign, Award, 
  Briefcase, PiggyBank, Building 
} from "lucide-react";
import { Link } from "react-router-dom";

const PermanentLifeInsurance = () => {
  const permanentTypes = [
    {
      title: "Whole Life Insurance",
      description: "Traditional permanent coverage with guaranteed cash value",
      price: "From $125/month",
      features: ["Lifetime coverage guarantee", "Fixed premiums", "Guaranteed cash value growth", "Dividend potential"],
      pros: ["Predictable growth", "No investment risk", "Simplified structure"],
      cons: ["Higher premiums", "Lower potential returns"],
      bestFor: "Conservative investors, estate planning"
    },
    {
      title: "Universal Life Insurance",
      description: "Flexible permanent coverage with investment options",
      price: "From $95/month",
      features: ["Flexible premiums", "Investment choices", "Tax-advantaged growth", "Adjustable death benefit"],
      pros: ["Premium flexibility", "Higher growth potential", "Tax advantages"],
      cons: ["Investment risk", "Complex structure"],
      bestFor: "Sophisticated investors, business owners",
      popular: true
    },
    {
      title: "Variable Life Insurance",
      description: "Permanent coverage with market-linked investments",
      price: "From $110/month",
      features: ["Market investment options", "Potential high returns", "Professional management", "Tax deferral"],
      pros: ["High growth potential", "Professional management", "Tax benefits"],
      cons: ["Market risk", "Higher fees"],
      bestFor: "Long-term investors, high earners"
    }
  ];

  const benefits = [
    { icon: Shield, title: "Lifetime Protection", description: "Coverage that never expires as long as premiums are paid" },
    { icon: PiggyBank, title: "Cash Value Growth", description: "Build wealth with tax-advantaged cash accumulation" },
    { icon: DollarSign, title: "Tax Benefits", description: "Tax-free death benefits and tax-deferred cash growth" },
    { icon: Briefcase, title: "Estate Planning", description: "Efficient wealth transfer to beneficiaries" }
  ];

  const cashValueExample = [
    { year: 5, cashValue: "$2,800", totalPaid: "$7,500" },
    { year: 10, cashValue: "$8,200", totalPaid: "$15,000" },
    { year: 15, cashValue: "$16,500", totalPaid: "$22,500" },
    { year: 20, cashValue: "$28,000", totalPaid: "$30,000" }
  ];

  const useCases = [
    {
      icon: Building,
      title: "Estate Planning",
      description: "Provide tax-free inheritance to beneficiaries",
      details: ["Tax-free death benefit", "Immediate liquidity", "Bypass probate"]
    },
    {
      icon: Briefcase,
      title: "Business Planning",
      description: "Key person insurance and buy-sell agreements",
      details: ["Key person coverage", "Buy-sell funding", "Business continuity"]
    },
    {
      icon: PiggyBank,
      title: "Retirement Supplement",
      description: "Tax-advantaged retirement income source",
      details: ["Tax-deferred growth", "Flexible withdrawals", "Loan options"]
    },
    {
      icon: Heart,
      title: "Charitable Giving",
      description: "Maximize charitable impact with life insurance",
      details: ["Charitable remainder trusts", "Donation leverage", "Tax benefits"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2" />
                Permanent Life Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Lifetime Protection
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Plus Wealth Building
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Combine life insurance protection with tax-advantaged investment growth. 
                Build wealth while protecting your family for life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent font-semibold px-8 py-4 h-auto">
                  Compare Options <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Permanent Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Types of Permanent Life Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Choose the permanent life insurance that best fits your financial strategy
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {permanentTypes.map((type, index) => (
                  <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {type.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Most Flexible
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-base">{type.description}</CardDescription>
                      <div className="text-2xl font-bold text-blue-600 mt-2">{type.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Tabs defaultValue="pros" className="mb-6">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="pros">Pros</TabsTrigger>
                          <TabsTrigger value="cons">Cons</TabsTrigger>
                        </TabsList>
                        <TabsContent value="pros" className="mt-3">
                          <ul className="space-y-1">
                            {type.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="text-sm text-green-700 flex items-center gap-2">
                                <CheckCircle className="h-3 w-3" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="cons" className="mt-3">
                          <ul className="space-y-1">
                            {type.cons.map((con, conIndex) => (
                              <li key={conIndex} className="text-sm text-red-700 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                      
                      <div className="bg-blue-50 p-3 rounded-lg mb-4">
                        <p className="text-sm text-blue-800">
                          <strong>Best for:</strong> {type.bestFor}
                        </p>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                        <Link to="/insurance/life/quotes">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cash Value Growth */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Cash Value Growth Example</h2>
                <p className="text-xl text-muted-foreground">
                  See how your cash value can grow over time (Universal Life, $500K coverage, $125/month premium)
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cashValueExample.map((example, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">Year {example.year}</div>
                      <div className="text-lg font-semibold mb-1">Cash Value</div>
                      <div className="text-2xl font-bold text-green-600 mb-2">{example.cashValue}</div>
                      <div className="text-sm text-gray-600">Total Paid: {example.totalPaid}</div>
                      <div className="mt-3 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                          style={{ width: `${(parseInt(example.cashValue.replace(/[$,]/g, '')) / parseInt(example.totalPaid.replace(/[$,]/g, ''))) * 100}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Choose Permanent Life Insurance?</h2>
                <p className="text-xl text-muted-foreground">
                  Lifetime protection with wealth-building benefits
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Common Uses for Permanent Life Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Discover how permanent life insurance can fit into your financial strategy
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <useCase.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                          <p className="text-gray-600 mb-4">{useCase.description}</p>
                          <ul className="space-y-2">
                            {useCase.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Build Wealth While Protecting Your Family?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Discover how permanent life insurance can provide lifetime protection and tax-advantaged growth
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/term">
                    Compare vs Term <Calculator className="ml-2 h-5 w-5" />
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
};

export default PermanentLifeInsurance;
