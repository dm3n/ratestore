
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
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                USD Investment Opportunity
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                USD GIC Rates in Canada
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Diversify your investment portfolio with US Dollar Guaranteed Investment Certificates. 
                Compare the best USD GIC rates from top Canadian financial institutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">4.85%</div>
                  <div className="text-sm text-gray-600">Best 1-Year Rate</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">$1,000</div>
                  <div className="text-sm text-gray-600">Min. Investment</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">CDIC</div>
                  <div className="text-sm text-gray-600">Insured</div>
                </div>
              </div>
            </div>
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
