
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, Shield, Calculator, CheckCircle, ArrowRight, 
  AlertTriangle, Activity, Clock, TrendingUp, DollarSign, Stethoscope 
} from "lucide-react";
import { Link } from "react-router-dom";

const CriticalIllnessInsurance = () => {
  const coverageTypes = [
    {
      title: "Basic Critical Illness",
      description: "Coverage for the most common critical illnesses",
      price: "From $35/month",
      features: ["Heart attack coverage", "Stroke protection", "Cancer coverage", "Kidney failure"],
      conditions: 4
    },
    {
      title: "Comprehensive Coverage",
      description: "Extended protection for a wide range of critical conditions",
      price: "From $55/month",
      features: ["25+ conditions covered", "Partial benefit payments", "Return of premium option", "Waiver of premium"],
      conditions: 25,
      popular: true
    },
    {
      title: "Enhanced Protection",
      description: "Maximum coverage with additional benefits and riders",
      price: "From $75/month",
      features: ["50+ conditions covered", "Multiple claim benefits", "Inflation protection", "Family coverage"],
      conditions: 50
    }
  ];

  const coveredConditions = [
    { category: "Cardiovascular", conditions: ["Heart Attack", "Stroke", "Coronary Artery Disease", "Aortic Surgery"] },
    { category: "Cancer", conditions: ["Life-threatening Cancer", "Carcinoma in Situ", "Skin Cancer", "Prostate Cancer"] },
    { category: "Neurological", conditions: ["Multiple Sclerosis", "Parkinson's Disease", "Alzheimer's Disease", "Motor Neuron Disease"] },
    { category: "Organ Failure", conditions: ["Kidney Failure", "Liver Failure", "Lung Disease", "Heart Transplant"] }
  ];

  const benefits = [
    { icon: DollarSign, title: "Lump Sum Payment", description: "Receive a tax-free lump sum upon diagnosis" },
    { icon: Heart, title: "Use As Needed", description: "Spend the money on any expenses - medical or personal" },
    { icon: Shield, title: "Financial Security", description: "Maintain your lifestyle during treatment and recovery" },
    { icon: Clock, title: "Quick Claims", description: "Fast processing once survival period is met" }
  ];

  const useCases = [
    {
      title: "Medical Expenses",
      description: "Cover treatment costs not covered by provincial health insurance",
      examples: ["Private healthcare", "Experimental treatments", "Medical equipment", "Prescription drugs"]
    },
    {
      title: "Income Replacement",
      description: "Replace lost income during treatment and recovery",
      examples: ["Mortgage payments", "Family expenses", "Childcare costs", "Debt payments"]
    },
    {
      title: "Lifestyle Modifications",
      description: "Adapt your home and life for recovery",
      examples: ["Home modifications", "Transportation costs", "Caregiver services", "Recovery travel"]
    },
    {
      title: "Family Support",
      description: "Help family members during your treatment",
      examples: ["Spouse time off work", "Children's education", "Family counseling", "Emergency expenses"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-red-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-pink-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Heart className="h-4 w-4 mr-2" />
                Critical Protection
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Critical Illness
                <span className="block bg-gradient-to-r from-red-200 to-pink-200 bg-clip-text text-transparent">
                  Insurance
                </span>
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                When critical illness strikes, focus on recovery, not finances. Get a tax-free 
                lump sum payment to cover expenses and maintain your lifestyle during treatment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-red-600 border-white text-white hover:bg-red-700 font-semibold px-8 py-4 h-auto">
                  Calculate Coverage <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Choose Your Coverage Level</h2>
                <p className="text-xl text-muted-foreground">
                  Select the protection that fits your health concerns and budget
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {coverageTypes.map((coverage, index) => (
                  <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {coverage.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{coverage.title}</CardTitle>
                      <CardDescription className="text-base">{coverage.description}</CardDescription>
                      <div className="text-2xl font-bold text-red-600 mt-2">{coverage.price}</div>
                      <div className="text-sm text-gray-600">
                        <strong>{coverage.conditions}+ conditions covered</strong>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {coverage.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
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

        {/* Covered Conditions */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">What's Covered</h2>
                <p className="text-xl text-muted-foreground">
                  Common critical illnesses covered by most policies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coveredConditions.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-600">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.conditions.map((condition, conditionIndex) => (
                          <li key={conditionIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{condition}</span>
                          </li>
                        ))}
                      </ul>
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
                <h2 className="text-4xl font-bold mb-4">Why Critical Illness Insurance?</h2>
                <p className="text-xl text-muted-foreground">
                  Financial peace of mind when facing serious health challenges
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

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">How to Use Your Benefit</h2>
                <p className="text-xl text-muted-foreground">
                  The lump sum payment is yours to use as you see fit
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-600">{useCase.title}</CardTitle>
                      <CardDescription className="text-base">{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-pink-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Protect Yourself Against Life's Uncertainties</h2>
              <p className="text-xl text-red-100 mb-8">
                Get the financial security you need to focus on what matters most - your recovery and your family
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 h-auto" asChild>
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

export default CriticalIllnessInsurance;
