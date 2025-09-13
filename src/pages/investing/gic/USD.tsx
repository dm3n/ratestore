
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GICRateEngine } from "@/components/GICRateEngine";
import { CDRatesTable } from "@/components/CDRatesTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, TrendingUp, DollarSign, Shield, Clock } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const usdGicRates = [
  {
    institution: "Tangerine Bank",
    apy: "4.85%",
    minDeposit: "$1,000 USD",
    term: "1 Year",
    rating: 4.5
  },
  {
    institution: "Simplii Financial",
    apy: "4.75%",
    minDeposit: "$1,000 USD",
    term: "18 Months",
    rating: 4.3
  },
  {
    institution: "CIBC",
    apy: "4.60%",
    minDeposit: "$5,000 USD",
    term: "2 Years",
    rating: 4.4
  },
  {
    institution: "TD Bank",
    apy: "4.50%",
    minDeposit: "$1,000 USD",
    term: "3 Years",
    rating: 4.2
  },
  {
    institution: "RBC",
    apy: "4.45%",
    minDeposit: "$2,500 USD",
    term: "5 Years",
    rating: 4.1
  },
  {
    institution: "Scotiabank",
    apy: "4.40%",
    minDeposit: "$1,000 USD",
    term: "1 Year",
    rating: 4.0
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "USD Currency Exposure",
    description: "Diversify your portfolio with US dollar investments without currency conversion fees during the term."
  },
  {
    icon: Shield,
    title: "CDIC Protected",
    description: "USD GICs are protected by CDIC insurance up to $100,000 USD per depositor per institution."
  },
  {
    icon: TrendingUp,
    title: "Competitive Rates",
    description: "Take advantage of competitive USD interest rates that may exceed CAD GIC offerings."
  },
  {
    icon: Clock,
    title: "Fixed Terms",
    description: "Lock in your rate for the full term, protecting against interest rate fluctuations."
  }
];

const USDGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 md:py-28">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 animate-fade-in">
                <DollarSign className="w-4 h-4 mr-2" />
                USD Investment Opportunity
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
                USD GIC Rates
                <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mt-2">
                  in Canada
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Diversify your investment portfolio with US Dollar Guaranteed Investment Certificates. 
                Compare the best USD GIC rates from top Canadian financial institutions and benefit from currency diversification.
              </p>
              
              {/* Enhanced Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover-scale">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4 mx-auto">
                      <TrendingUp className="w-6 h-6 text-green-300" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.85%</div>
                    <div className="text-blue-200 text-sm font-medium">Best 1-Year Rate</div>
                  </div>
                </div>
                
                <div className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover-scale">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4 mx-auto">
                      <DollarSign className="w-6 h-6 text-blue-300" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">$1,000</div>
                    <div className="text-blue-200 text-sm font-medium">Min. Investment</div>
                  </div>
                </div>
                
                <div className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover-scale">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4 mx-auto">
                      <Shield className="w-6 h-6 text-purple-300" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">CDIC</div>
                    <div className="text-blue-200 text-sm font-medium">Insured Protection</div>
                  </div>
                </div>
              </div>
              
              {/* Call-to-Action */}
              <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="inline-flex items-center gap-2 text-blue-200 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Rates updated daily • CDIC protected up to $100,000 USD</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Alert Section */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Currency Consideration:</strong> USD GICs are denominated in US dollars. 
                  Your returns will be affected by USD/CAD exchange rate fluctuations when converting back to Canadian dollars.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="rates" className="space-y-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="rates">Compare Rates</TabsTrigger>
                  <TabsTrigger value="calculator">Rate Calculator</TabsTrigger>
                  <TabsTrigger value="benefits">Why USD GICs?</TabsTrigger>
                </TabsList>

                <TabsContent value="rates" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Best USD GIC Rates Today</h2>
                    <CDRatesTable 
                      rates={usdGicRates}
                      title="USD GIC Rates Comparison"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          Rate Trends
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">
                          USD GIC rates have been trending upward, following the Federal Reserve's monetary policy. 
                          Current rates are at multi-year highs, making it an attractive time to lock in USD investments.
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>1-Year Avg:</span>
                            <span className="font-medium">4.65%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>3-Year Avg:</span>
                            <span className="font-medium">4.35%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>5-Year Avg:</span>
                            <span className="font-medium">4.25%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-blue-600" />
                          Investment Minimums
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">
                          Most USD GICs have relatively low minimum investment requirements, 
                          making them accessible to a wide range of investors.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span>Tangerine, TD, Scotiabank</span>
                            <Badge variant="outline">$1,000 USD</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span>RBC</span>
                            <Badge variant="outline">$2,500 USD</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span>CIBC</span>
                            <Badge variant="outline">$5,000 USD</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="calculator">
                  <GICRateEngine 
                    title="USD GIC Calculator"
                    subtitle="Calculate your potential returns on US Dollar GIC investments"
                    filterType="usd"
                    showTypeFilter={false}
                    showLocationFilter={true}
                  />
                </TabsContent>

                <TabsContent value="benefits" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Why Choose USD GICs?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {benefits.map((benefit, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <benefit.icon className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Important Considerations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Currency Risk</h4>
                        <p className="text-gray-600">
                          While USD GICs protect your principal in US dollars, you're exposed to currency fluctuations 
                          when converting back to Canadian dollars. This can work in your favor or against you.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Tax Implications</h4>
                        <p className="text-gray-600">
                          Interest earned on USD GICs is taxable in Canada. You'll need to convert the interest to 
                          CAD for tax reporting purposes using the Bank of Canada exchange rate.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Early Redemption</h4>
                        <p className="text-gray-600">
                          Most USD GICs don't allow early redemption. Make sure you won't need the funds before 
                          maturity, as you'll be locked in for the full term.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default USDGIC;
