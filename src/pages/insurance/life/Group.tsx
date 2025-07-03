
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, Shield, Calculator, CheckCircle, ArrowRight, 
  Briefcase, Heart, Clock, TrendingUp, DollarSign, Building 
} from "lucide-react";
import { Link } from "react-router-dom";

const GroupInsurance = () => {
  const groupTypes = [
    {
      title: "Employee Benefits",
      description: "Comprehensive coverage for your workforce",
      icon: Briefcase,
      features: ["Group life insurance", "Disability coverage", "Extended health benefits", "Dental coverage"],
      benefits: ["Lower premiums", "Guaranteed acceptance", "Payroll deduction", "Tax advantages"]
    },
    {
      title: "Association Plans",
      description: "Coverage for professional and trade associations",
      icon: Users,
      features: ["Professional liability", "Group life insurance", "Disability insurance", "Travel coverage"],
      benefits: ["Group buying power", "Flexible options", "Portable coverage", "Member discounts"]
    },
    {
      title: "Creditor Insurance",
      description: "Protection for loans and mortgages",
      icon: Shield,
      features: ["Mortgage protection", "Loan coverage", "Credit card insurance", "Line of credit protection"],
      benefits: ["Debt protection", "Family security", "Peace of mind", "Automatic coverage"]
    }
  ];

  const employeeBenefits = [
    { 
      category: "Life Insurance",
      description: "Basic and supplemental life insurance coverage",
      details: ["1-2x annual salary basic coverage", "Up to 8x salary voluntary coverage", "Spousal and child coverage", "Accidental death benefits"]
    },
    {
      category: "Disability Insurance", 
      description: "Short and long-term disability protection",
      details: ["Short-term: 15-26 weeks", "Long-term: to age 65", "60-70% income replacement", "Own occupation coverage"]
    },
    {
      category: "Health Benefits",
      description: "Extended health and wellness coverage",
      details: ["Prescription drugs", "Paramedical services", "Vision care", "Wellness programs"]
    },
    {
      category: "Dental Coverage",
      description: "Comprehensive dental care benefits",
      details: ["Preventive care 100%", "Basic services 80%", "Major services 50%", "Orthodontics available"]
    }
  ];

  const advantages = [
    { icon: DollarSign, title: "Cost Effective", description: "Lower premiums through group buying power and risk pooling" },
    { icon: Shield, title: "Guaranteed Coverage", description: "No medical exams or health questions for basic coverage" },
    { icon: Clock, title: "Immediate Coverage", description: "Benefits start as soon as you join the group" },
    { icon: TrendingUp, title: "Tax Advantages", description: "Employer contributions are tax-deductible business expenses" }
  ];

  const businessSizes = [
    { size: "Small Business", employees: "2-25", features: ["Simplified underwriting", "Flexible plan design", "Basic coverage options", "Cost-effective premiums"] },
    { size: "Medium Business", employees: "26-100", features: ["Comprehensive benefits", "Wellness programs", "Flexible spending accounts", "Employee assistance programs"] },
    { size: "Large Enterprise", employees: "100+", features: ["Fully customizable plans", "Self-funded options", "Advanced wellness programs", "Executive benefits"] }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Users className="h-4 w-4 mr-2" />
                Group Coverage
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Group Insurance
                <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Better Together
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Comprehensive insurance solutions for businesses, associations, and groups. 
                Protect your team with affordable, quality coverage that everyone can access.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Group Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Plan Builder <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Group Types */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Types of Group Insurance</h2>
                <p className="text-xl text-muted-foreground">
                  Tailored solutions for different groups and organizations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {groupTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center">
                          <type.icon className="h-7 w-7 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{type.title}</CardTitle>
                          <CardDescription className="text-base">{type.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-blue-600">Coverage Options:</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-blue-600">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
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

        {/* Employee Benefits */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Employee Benefit Components</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive coverage options for your workforce
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {employeeBenefits.map((benefit, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-600">{benefit.category}</CardTitle>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {benefit.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
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

        {/* Advantages */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Choose Group Insurance?</h2>
                <p className="text-xl text-muted-foreground">
                  Advantages of group coverage over individual policies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                        <advantage.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Sizes */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Solutions by Business Size</h2>
                <p className="text-xl text-muted-foreground">
                  Tailored group insurance plans for businesses of all sizes
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {businessSizes.map((business, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-600">{business.size}</CardTitle>
                      <CardDescription className="text-base">{business.employees} employees</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {business.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Team?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get comprehensive group insurance coverage that attracts talent and protects your workforce
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/life/quotes">
                    Get Group Quote Now <ArrowRight className="ml-2 h-5 w-5" />
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

export default GroupInsurance;
