
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, DollarSign, TrendingUp, Shield, FileText, Mail, Calendar, Info, ExternalLink, Calculator } from "lucide-react";

const Disclosure = () => {
  const disclosures = [
    {
      id: "affiliate",
      title: "1. Affiliate Relationships & Compensation",
      icon: <DollarSign className="h-5 w-5" />,
      severity: "high",
      content: (
        <div className="space-y-4">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Important Disclosure
            </h4>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              RateStore may receive compensation from financial institutions when users click on certain links or apply for products through our platform.
            </p>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-medium">How We Earn Revenue:</h5>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Referral Commissions:</strong> When you apply for a product through our links, we may receive a commission from the financial institution</li>
              <li><strong>Lead Generation:</strong> Some partners pay us for qualified customer referrals</li>
              <li><strong>Display Advertising:</strong> We may display sponsored content and advertisements</li>
              <li><strong>Premium Listings:</strong> Financial institutions may pay for enhanced visibility in our comparisons</li>
            </ul>
          </div>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Our Promise</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              These partnerships help us maintain our free service while remaining committed to providing unbiased, accurate rate comparisons. Our editorial content is never influenced by compensation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "rates",
      title: "2. Rate Information Accuracy",
      icon: <TrendingUp className="h-5 w-5" />,
      severity: "high",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Interest rates and terms displayed on RateStore are sourced from publicly available information and direct partnerships with financial institutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2 text-green-600 dark:text-green-400">What We Provide</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Real-time rate aggregation</li>
                <li>• Regular data updates</li>
                <li>• Multiple source verification</li>
                <li>• Historical rate tracking</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2 text-amber-600 dark:text-amber-400">Important Limitations</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Rates change frequently</li>
                <li>• Your rate may vary</li>
                <li>• Credit approval required</li>
                <li>• Terms and conditions apply</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <h4 className="font-semibold text-destructive mb-2">Always Verify Directly</h4>
            <p className="text-sm text-destructive">
              Rates shown are for informational purposes only. Always verify current rates, terms, and your eligibility directly with the financial institution before making any financial decisions.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "calculators",
      title: "3. Financial Calculator Limitations",
      icon: <Calculator className="h-5 w-5" />,
      severity: "medium",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Our financial calculators are designed to provide helpful estimates based on the information you provide. However, there are important limitations to understand:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Calculator Purpose</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Educational and illustrative purposes only</li>
                <li>• General estimates, not personalized advice</li>
                <li>• Based on standard financial formulas</li>
                <li>• Assumes consistent market conditions</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">What Calculators Don't Include</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Your specific financial situation</li>
                <li>• Credit score impact on rates</li>
                <li>• Market volatility and changes</li>
                <li>• Institution-specific fees and terms</li>
                <li>• Tax implications</li>
                <li>• Insurance requirements</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Professional Consultation Recommended</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              Calculator results should not be considered as guaranteed outcomes or professional financial advice. Always consult with qualified financial advisors for personalized guidance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "data-sources",
      title: "4. Data Sources & Methodology",
      icon: <FileText className="h-5 w-5" />,
      severity: "medium",  
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We aggregate rate information from multiple sources to provide comprehensive comparisons. Understanding our data collection helps you make informed decisions.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Primary Sources</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Direct institution APIs</li>
                <li>• Official bank websites</li>
                <li>• Regulatory filings</li>
                <li>• Licensed data providers</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Update Frequency</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Daily rate updates</li>
                <li>• Real-time for major changes</li>
                <li>• Weekly comprehensive reviews</li>
                <li>• Monthly data validation</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Quality Controls</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Multi-source verification</li>
                <li>• Automated accuracy checks</li>
                <li>• Manual review processes</li>
                <li>• User feedback integration</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Data Accuracy Commitment</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              While we strive for maximum accuracy, financial markets change rapidly. We recommend verifying all rates and terms directly with institutions before making financial commitments.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "not-advice",
      title: "5. Educational Content Disclaimer",
      icon: <Info className="h-5 w-5" />,
      severity: "high",
      content: (
        <div className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Not Financial Advice
            </h4>
            <p className="text-sm text-destructive">
              RateStore does not provide personalized financial advice. All information is for educational and comparison purposes only.
            </p>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-medium">What We Provide:</h5>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>General financial education and information</li>
              <li>Rate comparisons and market analysis</li>
              <li>Financial tools and calculators</li>
              <li>Industry news and trends</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-medium">What We Don't Provide:</h5>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Personalized financial advice or recommendations</li>
              <li>Investment advice or portfolio management</li>
              <li>Tax, legal, or accounting advice</li>
              <li>Guaranteed outcomes or results</li>
            </ul>
          </div>
          
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Seek Professional Guidance</h4>
            <p className="text-sm text-green-700 dark:text-green-400">
              For personalized financial advice, always consult with licensed financial advisors, accountants, or other qualified professionals who can assess your specific circumstances.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "regulatory",
      title: "6. Regulatory Information",
      icon: <Shield className="h-5 w-5" />,
      severity: "low",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            RateStore operates as an independent financial information service and is not a financial institution, broker, or advisor.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Our Role</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Information aggregator</li>
                <li>• Comparison platform</li>
                <li>• Educational resource</li>
                <li>• Technology provider</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Compliance</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Consumer protection laws</li>
                <li>• Privacy regulations</li>
                <li>• Advertising standards</li>
                <li>• Data protection requirements</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            All financial products and services are provided by licensed financial institutions. RateStore is not responsible for the products, services, or actions of these third-party providers.
          </p>
        </div>
      )
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "amber";
      case "low": return "blue";
      default: return "primary";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">
                Legal Disclosures
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Important Disclosures
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transparency is fundamental to our service. Please review these important disclosures about our business practices, data sources, and limitations.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 15, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                    <h3 className="font-semibold mb-2">Affiliate Disclosure</h3>
                    <p className="text-sm text-muted-foreground">We may earn commissions from partner referrals</p>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-500/20 bg-blue-500/5">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                    <h3 className="font-semibold mb-2">Rate Accuracy</h3>
                    <p className="text-sm text-muted-foreground">Rates change frequently and may vary</p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-500/20 bg-green-500/5">
                  <CardContent className="p-6 text-center">
                    <Info className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <h3 className="font-semibold mb-2">Educational Only</h3>
                    <p className="text-sm text-muted-foreground">Information is not personalized advice</p>
                  </CardContent>
                </Card>
              </div>

              {/* Table of Contents */}
              <Card className="mb-12 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Disclosure Sections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {disclosures.map((disclosure) => (
                      <a
                        key={disclosure.id}
                        href={`#${disclosure.id}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1 rounded bg-primary/10 text-primary">
                            {disclosure.icon}
                          </div>
                          <span className="font-medium">{disclosure.title}</span>
                        </div>
                        <Badge variant={getSeverityColor(disclosure.severity) as any} className="text-xs">
                          {disclosure.severity.toUpperCase()}
                        </Badge>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Disclosure Sections */}
              <div className="space-y-8">
                {disclosures.map((disclosure, index) => (
                  <Card key={disclosure.id} id={disclosure.id} className="border-border/50 hover:border-primary/20 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xl">
                          <div className="p-2 rounded-lg bg-primary/5 text-primary">
                            {disclosure.icon}
                          </div>
                          {disclosure.title}
                        </div>
                        <Badge variant={getSeverityColor(disclosure.severity) as any}>
                          {disclosure.severity.toUpperCase()}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none dark:prose-invert">
                      {disclosure.content}
                    </CardContent>
                    {index < disclosures.length - 1 && <Separator className="mx-6" />}
                  </Card>
                ))}
              </div>

              {/* Contact Section */}
              <Card className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/10">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">Questions About Our Disclosures?</h3>
                    <p className="text-muted-foreground mb-6">
                      We're committed to transparency. If you have questions about any of these disclosures or our business practices, please contact us.
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">Email: legal@ratestore.com</p>
                      <p className="text-sm text-muted-foreground">We respond to disclosure inquiries within 1 business day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclosure;
