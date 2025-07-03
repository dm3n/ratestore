
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, Users, Calculator, CheckCircle, ArrowRight, 
  Briefcase, Heart, Clock, TrendingUp, DollarSign, AlertTriangle 
} from "lucide-react";
import { Link } from "react-router-dom";

const DisabilityInsurance = () => {
  const disabilityTypes = [
    {
      title: "Short-Term Disability",
      description: "Coverage for temporary disabilities lasting weeks to months",
      price: "From $25/month",
      features: ["3-12 month coverage", "50-70% income replacement", "Quick benefit start", "Lower premiums"],
      bestFor: "Recent illnesses, injuries, surgeries"
    },
    {
      title: "Long-Term Disability",
      description: "Extended protection for disabilities lasting years or permanently",
      price: "From $45/month",
      features: ["Coverage until age 65", "60-80% income replacement", "Cost of living adjustments", "Comprehensive coverage"],
      bestFor: "Serious illnesses, permanent disabilities",
      popular: true
    },
    {
      title: "Own-Occupation Coverage",
      description: "Premium protection that pays if you can't perform your specific job",
      price: "From $65/month",
      features: ["Profession-specific coverage", "Highest benefit levels", "Residual benefits", "Premium protection"],
      bestFor: "Professionals, specialists, high earners"
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Income Protection", description: "Replace 60-80% of your income during disability" },
    { icon: Shield, title: "Medical Coverage", description: "Maintain health benefits while unable to work" },
    { icon: Clock, title: "Flexible Benefits", description: "Choose benefit periods and waiting periods" },
    { icon: TrendingUp, title: "COLA Adjustments", description: "Benefits increase with cost of living" }
  ];

  const statistics = [
    { stat: "1 in 4", description: "Workers will experience a disability before retirement" },
    { stat: "90%", description: "Of disabilities are due to illness, not accidents" },
    { stat: "3.7 years", description: "Average duration of long-term disability claims" },
    { stat: "$0", description: "Average savings of disabled workers after 6 months" }
  ];

  const providers = [
    { name: "Sun Life", rating: 4.8, premium: "$42/month", features: ["Own-occupation coverage", "Rehabilitation benefits"] },
    { name: "Manulife", rating: 4.7, premium: "$38/month", features: ["Flexible benefit periods", "Cost of living adjustments"] },
    { name: "Great-West Life", rating: 4.6, premium: "$45/month", features: ["Residual benefits", "Future increase options"] },
    { name: "RBC Insurance", rating: 4.5, premium: "$41/month", features: ["Quick claims processing", "Return to work support"] }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2" />
                Income Protection
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Disability Insurance
                <span className="block bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                  Protect Your Paycheck
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Your income is your most valuable asset. Disability insurance ensures you can 
                maintain your lifestyle even when illness or injury prevents you from working.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Calculate Coverage <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Disability Insurance Matters</h2>
                <p className="text-xl text-muted-foreground">
                  The statistics show why protecting your income is crucial
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {statistics.map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardContent className="pt-8">
                      <div className="text-4xl font-bold text-green-600 mb-2">{item.stat}</div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disability Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Types of Disability Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Choose the coverage that best protects your income and lifestyle
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {disabilityTypes.map((type, index) => (
                  <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {type.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-base">{type.description}</CardDescription>
                      <div className="text-2xl font-bold text-green-600 mt-2">{type.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-4">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-green-50 p-3 rounded-lg mb-6">
                        <p className="text-sm text-green-800">
                          <strong>Best for:</strong> {type.bestFor}
                        </p>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                        <Link to="/insurance/life/quotes">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive protection when you need it most
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                        <benefit.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
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
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Top Disability Insurance Providers</h2>
                <p className="text-xl text-muted-foreground">
                  Compare quotes from Canada's leading disability insurance companies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {providers.map((provider, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                        <div className="text-lg font-semibold text-green-600 mb-3">{provider.premium}</div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {provider.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Don't Wait Until It's Too Late</h2>
              <p className="text-xl text-green-100 mb-8">
                Protect your income and financial security with comprehensive disability insurance coverage
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto" asChild>
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

export default DisabilityInsurance;
