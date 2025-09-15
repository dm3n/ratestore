
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, Shield, Calculator, CheckCircle, ArrowRight, 
  Users, Star, Clock, TrendingUp, DollarSign, Award 
} from "lucide-react";
import { Link } from "react-router-dom";

const TermLifeInsurance = () => {
  const termLengths = [
    {
      term: "10 Year Term",
      description: "Short-term protection with lowest premiums",
      price: "From $18/month",
      features: ["Lowest cost option", "Good for temporary needs", "Renewable at end of term"],
      bestFor: "Young adults, recent graduates"
    },
    {
      term: "20 Year Term",
      description: "Most popular choice for families",
      price: "From $28/month",
      features: ["Balanced cost and coverage", "Covers mortgage period", "Level premiums guaranteed"],
      bestFor: "Young families, new homeowners",
      popular: true
    },
    {
      term: "30 Year Term",
      description: "Long-term protection until retirement",
      price: "From $45/month",
      features: ["Longest coverage period", "Protection until retirement", "Conversion options available"],
      bestFor: "Parents with young children"
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Affordable Premiums", description: "Lowest cost life insurance option available" },
    { icon: Shield, title: "High Coverage Amounts", description: "Get $1M+ coverage for less than $50/month" },
    { icon: Clock, title: "Level Premiums", description: "Guaranteed rates that won't increase during term" },
    { icon: TrendingUp, title: "Conversion Options", description: "Convert to permanent insurance without medical exam" }
  ];

  const coverageAmounts = [
    { amount: "$250,000", monthly: "$15", annual: "$180" },
    { amount: "$500,000", monthly: "$25", annual: "$300" },
    { amount: "$1,000,000", monthly: "$45", annual: "$540" },
    { amount: "$2,000,000", monthly: "$85", annual: "$1,020" }
  ];

  const providers = [
    { name: "Sun Life", rating: 4.8, termPrice: "$22/month", features: ["No medical exam options", "Conversion privileges"] },
    { name: "Manulife", rating: 4.7, termPrice: "$19/month", features: ["Competitive rates", "Online application"] },
    { name: "Great-West Life", rating: 4.6, termPrice: "$26/month", features: ["Flexible terms", "Family discounts"] },
    { name: "Canada Life", rating: 4.5, termPrice: "$24/month", features: ["Quick approval", "Health incentives"] }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-red-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Heart className="h-4 w-4 mr-2" />
                Term Life Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Affordable Protection
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  When You Need It Most
                </span>
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get maximum life insurance coverage at the lowest cost. Term life insurance 
                provides essential protection for your family during your most vulnerable years.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-red-700 border-white text-white hover:bg-red-600 font-semibold px-8 py-4 h-auto">
                  Compare Rates <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Term Lengths */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Choose Your Term Length</h2>
                <p className="text-xl text-muted-foreground">
                  Select the coverage period that best fits your financial goals
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {termLengths.map((term, index) => (
                  <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {term.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{term.term}</CardTitle>
                      <CardDescription className="text-base">{term.description}</CardDescription>
                      <div className="text-2xl font-bold text-red-600 mt-2">{term.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-4">
                        {term.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gray-50 p-3 rounded-lg mb-6">
                        <p className="text-sm text-gray-600">
                          <strong>Best for:</strong> {term.bestFor}
                        </p>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                        <Link to="/insurance/life/quotes">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Amounts */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Coverage Amount Examples</h2>
                <p className="text-xl text-muted-foreground">
                  See how affordable term life insurance can be (rates for healthy 35-year-old non-smoker)
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coverageAmounts.map((coverage, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold text-red-600 mb-2">{coverage.amount}</div>
                      <div className="text-lg font-semibold mb-1">{coverage.monthly}/month</div>
                      <div className="text-sm text-gray-600 mb-4">{coverage.annual}/year</div>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/insurance/life/quotes">Get This Rate</Link>
                      </Button>
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
                <h2 className="text-4xl font-bold mb-4">Why Choose Term Life Insurance?</h2>
                <p className="text-xl text-muted-foreground">
                  The most cost-effective way to protect your family's financial future
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
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

        {/* Providers */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Top Term Life Insurance Providers</h2>
                <p className="text-xl text-muted-foreground">
                  Compare quotes from Canada's most trusted life insurance companies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {providers.map((provider, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                        <div className="flex items-center justify-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">{provider.rating}</span>
                        </div>
                        <div className="text-lg font-semibold text-red-600 mb-3">{provider.termPrice}</div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {provider.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                        <Link to="/insurance/life/quotes">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Family?</h2>
              <p className="text-xl text-red-100 mb-8">
                Get affordable term life insurance quotes in minutes and secure your family's financial future
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/types">
                    Compare All Types <Calculator className="ml-2 h-5 w-5" />
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

export default TermLifeInsurance;
