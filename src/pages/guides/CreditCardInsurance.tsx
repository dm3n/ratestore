
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Plane, Car, ShoppingBag, Heart, FileText, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CreditCardInsurance = () => {
  const insuranceTypes = [
    {
      title: "Travel Insurance",
      icon: Plane,
      description: "Coverage for trip cancellation, medical emergencies, and travel delays",
      coverage: [
        "Emergency medical expenses up to $5M",
        "Trip cancellation/interruption",
        "Baggage loss and delay",
        "Flight accident insurance",
        "Travel delay compensation"
      ],
      typical: "Most premium travel cards",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Purchase Protection",
      icon: ShoppingBag,
      description: "Coverage for damaged, stolen, or defective purchases",
      coverage: [
        "Coverage for 90-120 days after purchase",
        "Protection against theft and damage",
        "Defective item replacement",
        "Coverage up to $1,000-$60,000 per item",
        "Annual limits vary by card"
      ],
      typical: "Most premium and mid-tier cards",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Extended Warranty",
      icon: Shield,
      description: "Extends manufacturer warranty by additional 1-2 years",
      coverage: [
        "Doubles manufacturer warranty (up to 1-2 years)",
        "Covers repair or replacement costs",
        "Applies to electronics, appliances",
        "Coverage limits vary by card",
        "Must register within timeframe"
      ],
      typical: "Premium cards and some mid-tier cards",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Rental Car Insurance",
      icon: Car,
      description: "Coverage for rental car damage and theft",
      coverage: [
        "Collision and comprehensive coverage",
        "Theft protection",
        "Coverage up to actual cash value",
        "Valid for rentals up to 31-48 days",
        "Primary or secondary coverage"
      ],
      typical: "Most cards except basic/student cards",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Life and Disability Insurance",
      icon: Heart,
      description: "Coverage in case of death or disability from covered events",
      coverage: [
        "Flight accident life insurance",
        "Travel accident insurance",
        "Common carrier accident coverage",
        "Coverage amounts vary widely",
        "Automatic enrollment with card use"
      ],
      typical: "Premium cards and some travel cards",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Price Protection",
      icon: FileText,
      description: "Refunds price differences if item goes on sale after purchase",
      coverage: [
        "Price match within 60-120 days",
        "Refund of price difference",
        "Coverage limits per item/year",
        "Valid at competing retailers",
        "Must provide proof of lower price"
      ],
      typical: "Some premium cards (being phased out)",
      color: "bg-gray-100 text-gray-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/guides/education-centre" className="hover:text-primary">Education Centre</Link>
              <span>/</span>
              <Link to="/guides/credit-cards" className="hover:text-primary">Credit Cards</Link>
              <span>/</span>
              <span className="text-foreground">Credit Card Insurance</span>
            </nav>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Shield className="h-3 w-3 mr-1" />
              Insurance
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Credit Card Insurance: Complete Coverage Guide</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Understand the insurance benefits that come with your credit cards and how to maximize their protection value.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: December 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-4">
                Many credit cards come with valuable insurance benefits that can save you hundreds or thousands of dollars. 
                However, these benefits are often underutilized because cardholders don't understand what's covered or 
                how to access the protection.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800 mb-1">Key Insight:</p>
                    <p className="text-sm text-blue-700">
                      Credit card insurance can often replace or supplement separate insurance policies, 
                      potentially saving you money while providing comprehensive protection.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Insurance Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Types of Credit Card Insurance</h2>
            <div className="space-y-6">
              {insuranceTypes.map((insurance, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${insurance.color}`}>
                        <insurance.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{insurance.title}</CardTitle>
                        <CardDescription className="text-base">{insurance.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-3 text-green-700">What's Covered:</h4>
                        <ul className="space-y-2">
                          {insurance.coverage.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Typically Found On:</h4>
                        <p className="text-sm text-muted-foreground mb-4">{insurance.typical}</p>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/credit-cards/travel-insurance">
                            View Cards with This Coverage
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* How to Use Insurance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How to Use Your Credit Card Insurance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Before You Need It</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Review your card's insurance benefits document</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Save insurance company contact numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Understand coverage limits and exclusions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Know which purchases must be made with the card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Keep receipts for major purchases</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When Filing a Claim</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Contact insurance provider immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Report incidents within required timeframe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Gather all required documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Submit complete claim forms promptly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Follow up on claim status regularly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Common Exclusions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Exclusions and Limitations</h2>
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-800 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Important Limitations to Know
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-yellow-800">Travel Insurance Exclusions:</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Pre-existing medical conditions</li>
                      <li>• High-risk activities (extreme sports)</li>
                      <li>• Travel to certain countries</li>
                      <li>• Trips over maximum duration</li>
                      <li>• Mental health and substance abuse</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-yellow-800">Purchase Protection Exclusions:</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Items left unattended</li>
                      <li>• Mysterious disappearance</li>
                      <li>• Business/commercial use items</li>
                      <li>• Certain categories (vehicles, real estate)</li>
                      <li>• Items over specific value limits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Maximizing Value */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Maximizing Your Insurance Value</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800">Smart Shopping</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Use your card for all major purchases</li>
                    <li>• Pay for entire trip with card for travel insurance</li>
                    <li>• Register purchases for extended warranty</li>
                    <li>• Keep detailed records and receipts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Coverage Coordination</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Review existing insurance policies</li>
                    <li>• Understand primary vs secondary coverage</li>
                    <li>• Avoid duplicate coverage costs</li>
                    <li>• Choose cards that complement your needs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-800">Claim Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li>• Take photos of damaged items</li>
                    <li>• Report incidents immediately</li>
                    <li>• Keep all documentation organized</li>
                    <li>• Follow claim procedures exactly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Insurance by Card Tier</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left p-4 font-semibold">Insurance Type</th>
                        <th className="text-left p-4 font-semibold">Basic Cards</th>
                        <th className="text-left p-4 font-semibold">Mid-Tier Cards</th>
                        <th className="text-left p-4 font-semibold">Premium Cards</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Purchase Protection</td>
                        <td className="p-4 text-sm">Limited or None</td>
                        <td className="p-4 text-sm">Up to $1,000/item</td>
                        <td className="p-4 text-sm">Up to $10,000+/item</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Extended Warranty</td>
                        <td className="p-4 text-sm">Rare</td>
                        <td className="p-4 text-sm">1 year extension</td>
                        <td className="p-4 text-sm">2 year extension</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Travel Insurance</td>
                        <td className="p-4 text-sm">Minimal/None</td>
                        <td className="p-4 text-sm">Basic coverage</td>
                        <td className="p-4 text-sm">Comprehensive</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Rental Car</td>
                        <td className="p-4 text-sm">Basic collision</td>
                        <td className="p-4 text-sm">Collision + theft</td>
                        <td className="p-4 text-sm">Primary coverage</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Price Protection</td>
                        <td className="p-4 text-sm">None</td>
                        <td className="p-4 text-sm">Limited</td>
                        <td className="p-4 text-sm">Being phased out</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Find Cards with Great Insurance Benefits</h3>
              <p className="text-muted-foreground mb-6">
                Looking for comprehensive insurance coverage? Compare cards that offer the protection you need 
                for your lifestyle and spending patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/credit-cards/travel-insurance">
                    <Shield className="h-4 w-4 mr-2" />
                    Cards with Travel Insurance
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/card-finder">
                    Find My Perfect Card
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreditCardInsurance;
