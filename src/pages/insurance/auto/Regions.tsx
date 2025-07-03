
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Car, DollarSign, TrendingUp, AlertTriangle, 
  CheckCircle, ArrowRight, Star, Clock, Shield, Users 
} from "lucide-react";
import { Link } from "react-router-dom";

const AutoInsuranceRegions = () => {
  const regions = [
    {
      name: "Ontario",
      avgCost: "$1,445/year",
      costRank: "High",
      system: "No-fault insurance",
      minCoverage: "$200,000",
      features: ["Statutory Accident Benefits", "Direct Compensation", "Uninsured Automobile Coverage"],
      challenges: ["High fraud rates", "Urban congestion", "Severe weather"],
      cities: ["Toronto", "Ottawa", "Hamilton", "London"],
      color: "red"
    },
    {
      name: "Alberta",
      avgCost: "$1,316/year",
      costRank: "Moderate",
      system: "Tort-based system",
      minCoverage: "$200,000",
      features: ["Minor injury cap", "Diagnostic treatment", "Income replacement"],
      challenges: ["Hail damage", "Rural distances", "Winter conditions"],
      cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge"],
      color: "orange"
    },
    {
      name: "British Columbia",
      avgCost: "$1,832/year",
      costRank: "Highest",
      system: "No-fault (ICBC)",
      minCoverage: "$200,000",
      features: ["Enhanced Care", "Optional coverage", "Roadside assistance"],
      challenges: ["Mountain driving", "Coastal weather", "High vehicle costs"],
      cities: ["Vancouver", "Victoria", "Surrey", "Burnaby"],
      color: "red"
    },
    {
      name: "Quebec",
      avgCost: "$717/year",
      costRank: "Lowest",
      system: "Hybrid system",
      minCoverage: "$50,000",
      features: ["SAAQ coverage", "Property damage", "Public insurance"],
      challenges: ["Ice storms", "Construction zones", "Language requirements"],
      cities: ["Montreal", "Quebec City", "Gatineau", "Sherbrooke"],
      color: "green"
    },
    {
      name: "Saskatchewan",
      avgCost: "$875/year",
      costRank: "Low",
      system: "No-fault (SGI)",
      minCoverage: "$200,000",
      features: ["Injury Protection", "Property damage", "Extension coverage"],
      challenges: ["Rural roads", "Wildlife collisions", "Extreme weather"],
      cities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw"],
      color: "green"
    },
    {
      name: "Manitoba",
      avgCost: "$1,088/year",
      costRank: "Moderate",
      system: "No-fault (MPI)",
      minCoverage: "$200,000",
      features: ["Personal Injury Protection", "All Perils", "Extension coverage"],
      challenges: ["Flooding", "Harsh winters", "Theft rates"],
      cities: ["Winnipeg", "Brandon", "Steinbach", "Thompson"],
      color: "orange"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'red': return 'border-red-200 bg-red-50';
      case 'orange': return 'border-orange-200 bg-orange-50';
      case 'green': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getCostColor = (rank: string) => {
    switch (rank) {
      case 'Highest': return 'text-red-600 bg-red-100';
      case 'High': return 'text-red-500 bg-red-50';
      case 'Moderate': return 'text-orange-600 bg-orange-100';
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Lowest': return 'text-green-700 bg-green-200';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

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
                <MapPin className="h-4 w-4 mr-2" />
                Regional Coverage Guide
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Auto Insurance
                <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Across Canada
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover how auto insurance works in your province, from coverage requirements 
                to average costs and regional considerations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
                    Get Regional Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Provinces <MapPin className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Provincial Auto Insurance Systems</h2>
                <p className="text-xl text-muted-foreground">
                  Each province has unique insurance requirements, costs, and regulations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {regions.map((region, index) => (
                  <Card key={index} className={`border-2 ${getColorClass(region.color)} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{region.name}</CardTitle>
                            <CardDescription className="text-base">{region.system}</CardDescription>
                          </div>
                        </div>
                        <Badge className={`${getCostColor(region.costRank)} border-0 font-semibold`}>
                          {region.costRank}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Cost & Coverage */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg border">
                            <div className="text-sm text-gray-600 mb-1">Average Annual Cost</div>
                            <div className="text-2xl font-bold text-blue-600">{region.avgCost}</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border">
                            <div className="text-sm text-gray-600 mb-1">Minimum Coverage</div>
                            <div className="text-2xl font-bold text-green-600">{region.minCoverage}</div>
                          </div>
                        </div>

                        {/* System Features */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Shield className="h-4 w-4 text-blue-600" />
                            System Features
                          </h4>
                          <ul className="space-y-2">
                            {region.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Regional Challenges */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                            Regional Challenges
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {region.challenges.map((challenge, challengeIndex) => (
                              <Badge key={challengeIndex} variant="outline" className="text-xs">
                                {challenge}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Major Cities */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Users className="h-4 w-4 text-blue-600" />
                            Major Cities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {region.cities.map((city, cityIndex) => (
                              <Badge key={cityIndex} variant="secondary" className="text-xs">
                                {city}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1" asChild>
                            <Link to={`/insurance/auto/${region.name.toLowerCase()}`}>
                              Get {region.name} Quote
                            </Link>
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Average Insurance Costs by Province</h2>
                <p className="text-xl text-muted-foreground">
                  Understanding regional cost differences across Canada
                </p>
              </div>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-8">
                  <div className="space-y-4">
                    {regions
                      .sort((a, b) => parseInt(a.avgCost.replace(/[^\d]/g, '')) - parseInt(b.avgCost.replace(/[^\d]/g, '')))
                      .map((region, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-semibold">{region.name}</h3>
                              <p className="text-sm text-gray-600">{region.system}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">{region.avgCost}</div>
                            <Badge className={`${getCostColor(region.costRank)} border-0 text-xs`}>
                              {region.costRank}
                            </Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Find the Best Rates in Your Province</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized auto insurance quotes tailored to your province's requirements and regulations
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/auto/quotes">
                    Get Provincial Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare All Provinces <TrendingUp className="ml-2 h-5 w-5" />
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

export default AutoInsuranceRegions;
