
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Car, Shield, Users, AlertTriangle, 
  ArrowRight, Phone, CheckCircle, DollarSign, Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const AutoInsuranceTypes = () => {
  const mandatoryCoverage = [
    {
      title: "Third Party Liability",
      description: "Required by law in all provinces",
      icon: Users,
      amount: "$200K - $1M minimum",
      details: "Covers bodily injury and property damage to others"
    },
    {
      title: "Accident Benefits",
      description: "Medical and rehabilitation coverage",
      icon: Shield,
      amount: "Varies by province",
      details: "Covers medical expenses and income replacement"
    },
    {
      title: "Uninsured Motorist",
      description: "Protection against uninsured drivers",
      icon: AlertTriangle,
      amount: "Up to $1M",
      details: "Covers hit-and-run and uninsured driver accidents"
    }
  ];

  const optionalCoverage = [
    {
      title: "Collision Coverage",
      description: "Repairs to your vehicle after an accident",
      icon: Car,
      benefits: ["Covers accident damage", "Includes single-vehicle accidents", "Pays regardless of fault"]
    },
    {
      title: "Comprehensive Coverage",
      description: "Protection against theft, vandalism, and weather",
      icon: Shield,
      benefits: ["Theft protection", "Weather damage", "Vandalism coverage"]
    },
    {
      title: "Specified Perils",
      description: "Limited coverage for specific risks",
      icon: AlertTriangle,
      benefits: ["Fire damage", "Theft protection", "Windstorm coverage"]
    }
  ];

  const provinces = [
    { name: "Ontario", minLiability: "$200,000" },
    { name: "Alberta", minLiability: "$200,000" },
    { name: "British Columbia", minLiability: "$200,000" },
    { name: "Quebec", minLiability: "$50,000" },
    { name: "Manitoba", minLiability: "$200,000" },
    { name: "Saskatchewan", minLiability: "$200,000" }
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
                <Car className="h-4 w-4 mr-2" />
                Auto Insurance Types
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Auto Insurance Types
                <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Complete Guide
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Understand the different types of auto insurance coverage available in Canada. 
                From mandatory coverage to optional protection, we explain it all.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
                    Get Auto Quote <Shield className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Rates <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mandatory Coverage */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Mandatory Auto Insurance Coverage</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Required by law in all Canadian provinces and territories
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {mandatoryCoverage.map((coverage, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                        <coverage.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                        {coverage.title}
                      </CardTitle>
                      <div className="text-lg font-bold text-red-600 mt-2">
                        {coverage.amount}
                      </div>
                      <CardDescription className="text-base">
                        {coverage.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">
                        {coverage.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Optional Coverage */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Optional Auto Insurance Coverage</h2>
                <p className="text-xl text-muted-foreground">
                  Additional protection for your vehicle and peace of mind
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {optionalCoverage.map((coverage, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <coverage.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{coverage.title}</CardTitle>
                      <CardDescription className="text-base">
                        {coverage.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {coverage.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
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

        {/* Provincial Requirements */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Provincial Minimum Requirements</h2>
                <p className="text-xl text-muted-foreground">
                  Minimum liability coverage varies by province
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {provinces.map((province, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-lg">{province.name}</h3>
                          <p className="text-sm text-gray-600">Minimum Liability</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600">
                            {province.minLiability}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Choosing Coverage */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">How to Choose the Right Coverage</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Assess Your Risk</h3>
                        <p className="text-gray-600">Consider your driving habits, vehicle value, and financial situation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Vehicle Value</h3>
                        <p className="text-gray-600">Newer, more expensive vehicles need comprehensive coverage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Budget Considerations</h3>
                        <p className="text-gray-600">Balance coverage needs with premium affordability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Deductible Choice</h3>
                        <p className="text-gray-600">Higher deductibles mean lower premiums but more out-of-pocket costs</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border-0 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <DollarSign className="h-8 w-8" />
                        Coverage Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="border-b pb-3">
                          <h4 className="font-semibold">New Vehicle (0-3 years)</h4>
                          <p className="text-sm text-gray-600">Full coverage including collision and comprehensive</p>
                        </div>
                        <div className="border-b pb-3">
                          <h4 className="font-semibold">Older Vehicle (8+ years)</h4>
                          <p className="text-sm text-gray-600">Consider liability plus specified perils</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">High-Value Vehicle</h4>
                          <p className="text-sm text-gray-600">Maximum coverage with low deductibles</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Find the Right Coverage?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Compare auto insurance quotes and find the perfect coverage for your needs
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
                    Get Auto Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Expert
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

export default AutoInsuranceTypes;
