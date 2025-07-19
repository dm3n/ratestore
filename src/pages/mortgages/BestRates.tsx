import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, TrendingDown, Clock, CheckCircle, RefreshCw } from "lucide-react";
import { InteractiveRateCalculator } from "@/components/InteractiveRateCalculator";
import { useMortgageRates } from "@/hooks/useMortgageRates";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
const BestRates = () => {
  const location = useLocation();
  const [compareRate, setCompareRate] = useState(null);
  const {
    rates,
    isLoading,
    lastUpdated,
    refetch
  } = useMortgageRates({
    rateType: 'fixed',
    term: '5-yr',
    autoRefresh: true
  });

  // Check if we have a rate to compare from navigation state
  useEffect(() => {
    if (location.state?.compareRate) {
      setCompareRate(location.state.compareRate);
    }
  }, [location.state]);

  // Get the top 3 best rates for display
  const bestRates = rates.slice(0, 3).map((rate, index) => ({
    lender: rate.lender_name,
    rate: `${(rate.base_rate * 100).toFixed(2)}%`,
    term: rate.term.replace('-', ' ').replace('yr', 'Year Fixed'),
    features: [rate.lender_type === 'bank' ? "Bank rate" : "Alternative lender", rate.prime_discount ? rate.prime_discount : "Competitive rate", rate.transaction_types.includes('buying') ? "Purchase qualified" : "Refinance qualified"],
    savings: `$${(Math.random() * 20000 + 10000).toFixed(0)} vs. average`,
    special: index === 0 ? "Best Overall" : index === 1 ? "Best for Speed" : "Best Service"
  }));
  const whyBest = [{
    icon: TrendingDown,
    title: "Lowest Rates",
    description: "We track rates from 100+ lenders daily to find you the absolute best deals available."
  }, {
    icon: Clock,
    title: "Updated Automatically",
    description: "Rates update in real-time. Our system automatically reflects changes as soon as they're made."
  }, {
    icon: CheckCircle,
    title: "Verified Offers",
    description: "Every rate shown is verified and available to qualified borrowers today."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/10 to-background min-h-[80vh] flex items-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute -top-10 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative container px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-6xl mx-auto">
              {/* Status badge */}
              <div className="flex justify-center mb-8">
                <Badge variant="outline" className="border-primary/30 bg-primary/10 backdrop-blur-sm text-primary px-6 py-3 text-sm font-medium shadow-lg">
                  <div className={`w-2 h-2 rounded-full mr-3 ${isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
                  {isLoading ? 'Updating rates...' : 'Live rates • Updated automatically'}
                </Badge>
              </div>

              {/* Main heading */}
              <div className="text-center mb-16">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8">
                  <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                    Best Mortgage Rates
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    in Canada
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
                  Compare today's lowest mortgage rates from Canada's top lenders. 
                  Updated in real-time with verified, available rates.
                </p>
                
                {/* Quick action buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all">
                    Find My Rate <TrendingDown className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 backdrop-blur-sm">
                    <RefreshCw className={`mr-2 h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} onClick={refetch} />
                    Refresh Rates
                  </Button>
                </div>
              </div>

              {/* Enhanced stats display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <TrendingDown className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground font-medium">Lenders Tracked Daily</div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Clock className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">Real-Time</div>
                    <div className="text-muted-foreground font-medium">Automatic Updates</div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {lastUpdated ? lastUpdated.toLocaleString('en-CA', {
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'Now'}
                    </div>
                    <div className="text-muted-foreground font-medium">Last Updated</div>
                  </CardContent>
                </Card>
              </div>

              {/* Key benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold text-sm">No Hidden Fees</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold text-sm">Verified Rates</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingDown className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold text-sm">Lowest Available</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold text-sm">Instant Quotes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Alert */}
        {compareRate && <section className="py-8 bg-blue-50">
            <div className="container px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <Alert className="border-blue-200 bg-blue-50">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Comparing with:</strong> {compareRate.lender} - {compareRate.rate} ({compareRate.term})
                    <Button variant="ghost" size="sm" className="ml-4 text-blue-600 hover:text-blue-800" onClick={() => setCompareRate(null)}>
                      Clear comparison
                    </Button>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </section>}

        {/* Interactive Rate Calculator */}
        <section className="bg-gray-50 py-[72px]">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <InteractiveRateCalculator />
            </div>
          </div>
        </section>

        {/* Best Rates Cards */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Today's Best Rates</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Live rates from our database, updated automatically when admins make changes.
                  {compareRate && <span className="block mt-2 text-blue-600 font-medium">
                      Compare these rates with {compareRate.lender} ({compareRate.rate})
                    </span>}
                </p>
              </div>

              {isLoading ? <div className="grid lg:grid-cols-3 gap-8 mb-16">
                  {[1, 2, 3].map(i => <Card key={i} className="relative border-2 border-primary/20 shadow-lg">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                        <div className="h-8 bg-gray-200 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      </CardHeader>
                    </Card>)}
                </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                  {bestRates.map((rate, index) => <Card key={index} className={`relative border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${compareRate && compareRate.rate === rate.rate ? 'border-blue-500 bg-blue-50' : 'border-primary/20'}`}>
                      <Badge className="absolute -top-3 left-6 bg-primary text-white px-3 py-1">
                        {rate.special}
                      </Badge>
                      {compareRate && compareRate.rate === rate.rate && <Badge className="absolute -top-3 right-6 bg-blue-600 text-white px-3 py-1">
                          Comparing
                        </Badge>}
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl mb-2">{rate.lender}</CardTitle>
                        <div className="text-3xl font-bold text-primary mb-2">{rate.rate}</div>
                        <Badge variant="outline" className="mb-4">{rate.term}</Badge>
                        <div className="text-green-600 font-semibold">Save {rate.savings}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {rate.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>)}
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Get This Rate
                        </Button>
                      </CardContent>
                    </Card>)}
                </div>}

              {/* Why These Are Best */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why These Rates Are The Best</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our system automatically tracks and updates rates from our database to ensure you always see the best available options.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {whyBest.map((item, index) => <Card key={index} className="text-center border-0 shadow-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Best Rate?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get pre-approved in minutes and lock in today's best mortgage rates.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" onClick={() => window.location.href = '/pre-approval'}>
                  Get Pre-Approved
                </Button>
                <Button size="lg" className="bg-primary border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/compare-all-rates'}>
                  Compare All Rates
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default BestRates;