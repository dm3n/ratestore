
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Home, DollarSign, TrendingUp, AlertTriangle, 
  CheckCircle, ArrowRight, Droplets, Flame, Wind, 
  Zap, Mountain, Snowflake, Sun, CloudRain 
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeInsuranceRegions = () => {
  const regions = [
    {
      name: "Ontario",
      avgCost: "$1,250/year",
      costRank: "High",
      risks: ["Severe storms", "Ice storms", "Flooding", "Wind damage"],
      coverage: "Comprehensive protection against weather events",
      features: ["Overland flood coverage", "Sewer backup", "Ice dam coverage"],
      icon: CloudRain,
      color: "orange"
    },
    {
      name: "Alberta",
      avgCost: "$1,180/year",
      costRank: "High",
      risks: ["Hail storms", "Flooding", "Wildfire", "Extreme weather"],
      coverage: "Specialized hail and flood protection",
      features: ["Hail damage coverage", "Flood protection", "Wildfire coverage"],
      icon: Droplets,
      color: "red"
    },
    {
      name: "British Columbia",
      avgCost: "$1,350/year",
      costRank: "Highest",
      risks: ["Earthquakes", "Flooding", "Wildfire", "Landslides"],
      coverage: "Earthquake and natural disaster protection",
      features: ["Earthquake coverage", "Wildfire protection", "Landslide coverage"],
      icon: Mountain,
      color: "red"
    },
    {
      name: "Quebec",
      avgCost: "$750/year",
      costRank: "Low",
      risks: ["Ice storms", "Flooding", "Wind damage", "Snow load"],
      coverage: "Weather-specific protection",
      features: ["Ice storm coverage", "Flood protection", "Snow load coverage"],
      icon: Snowflake,
      color: "green"
    },
    {
      name: "Saskatchewan",
      avgCost: "$900/year",
      costRank: "Moderate",
      risks: ["Severe weather", "Hail", "Flooding", "Tornadoes"],
      coverage: "Prairie weather protection",
      features: ["Hail coverage", "Tornado protection", "Flood coverage"],
      icon: Wind,
      color: "orange"
    },
    {
      name: "Manitoba",
      avgCost: "$950/year",
      costRank: "Moderate",
      risks: ["Flooding", "Severe storms", "Hail", "Winter damage"],
      coverage: "Flood and storm protection",
      features: ["Flood coverage", "Storm protection", "Winter damage"],
      icon: Droplets,
      color: "orange"
    },
    {
      name: "Atlantic Canada",
      avgCost: "$850/year",
      costRank: "Low",
      risks: ["Hurricanes", "Coastal flooding", "Wind", "Ice storms"],
      coverage: "Hurricane and coastal protection",
      features: ["Hurricane coverage", "Coastal flood protection", "Wind damage"],
      icon: Wind,
      color: "green"
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
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const climateFactors = [
    {
      title: "Weather Patterns",
      description: "Regional weather affects coverage needs",
      icon: CloudRain,
      examples: ["Hail storms in Alberta", "Ice storms in Quebec", "Hurricanes in Atlantic Canada"]
    },
    {
      title: "Natural Disasters",
      description: "Geological and environmental risks",
      icon: Mountain,
      examples: ["Earthquakes in BC", "Flooding in prairies", "Wildfires in forests"]
    },
    {
      title: "Seasonal Risks",
      description: "Time-of-year specific dangers",
      icon: Snowflake,
      examples: ["Winter damage", "Spring flooding", "Summer storms"]
    },
    {
      title: "Urban vs Rural",
      description: "Location impacts risk and cost",
      icon: Home,
      examples: ["City fire services", "Rural response times", "Water access"]
    }
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
                <MapPin className="h-4 w-4 mr-2" />
                Regional Home Insurance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Home Insurance
                <span className="block bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                  Across Canada
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Understand regional risks, coverage needs, and costs for home insurance 
                across different provinces and territories in Canada.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Regional Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare Regions <MapPin className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Breakdown */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Regional Home Insurance Guide</h2>
                <p className="text-xl text-muted-foreground">
                  Each region has unique risks that affect your home insurance needs and costs
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {regions.map((region, index) => (
                  <Card key={index} className={`border-2 ${getColorClass(region.color)} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                            <region.icon className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{region.name}</CardTitle>
                            <CardDescription className="text-base">{region.coverage}</CardDescription>
                          </div>
                        </div>
                        <Badge className={`${getCostColor(region.costRank)} border-0 font-semibold`}>
                          {region.costRank}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Cost */}
                        <div className="bg-white p-4 rounded-lg border text-center">
                          <div className="text-sm text-gray-600 mb-1">Average Annual Cost</div>
                          <div className="text-3xl font-bold text-green-600">{region.avgCost}</div>
                        </div>

                        {/* Regional Risks */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                            Common Risks
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {region.risks.map((risk, riskIndex) => (
                              <Badge key={riskIndex} variant="outline" className="text-xs justify-center">
                                {risk}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Coverage Features */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Key Coverage Features
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

                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1" asChild>
                            <Link to={`/insurance/home/${region.name.toLowerCase().replace(' ', '-')}`}>
                              Get {region.name.split(' ')[0]} Quote
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

        {/* Climate Factors */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Factors Affecting Regional Coverage</h2>
                <p className="text-xl text-muted-foreground">
                  Understanding what drives home insurance needs across different regions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {climateFactors.map((factor, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="pt-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                        <factor.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                      <p className="text-muted-foreground mb-4">{factor.description}</p>
                      <div className="space-y-1">
                        {factor.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="secondary" className="text-xs mx-1">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Chart */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Regional Cost Comparison</h2>
                <p className="text-xl text-muted-foreground">
                  Average home insurance costs across Canadian regions
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
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-semibold">{region.name}</h3>
                              <p className="text-sm text-gray-600">{region.coverage}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">{region.avgCost}</div>
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Protect Your Home with Regional Expertise</h2>
              <p className="text-xl text-green-100 mb-8">
                Get home insurance quotes tailored to your region's specific risks and requirements
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 h-auto" asChild>
                  <Link to="/insurance/home/quotes">
                    Get Regional Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 h-auto">
                  Compare All Regions <TrendingUp className="ml-2 h-5 w-5" />
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

export default HomeInsuranceRegions;
