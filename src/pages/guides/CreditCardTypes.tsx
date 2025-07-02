
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Gift, Plane, ShoppingCart, TrendingDown, Shield, GraduationCap, Building, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CreditCardTypes = () => {
  const cardTypes = [
    {
      title: "Rewards Credit Cards",
      icon: Gift,
      description: "Earn points, cash back, or miles on every purchase",
      benefits: [
        "Cash back on purchases (1-5%)",
        "Points for travel and merchandise",
        "Bonus categories for extra rewards",
        "Sign-up bonuses"
      ],
      bestFor: "People who pay their balance in full each month",
      considerations: "Usually have annual fees and higher interest rates",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Travel Credit Cards",
      icon: Plane,
      description: "Designed for frequent travelers with travel-specific benefits",
      benefits: [
        "Travel insurance coverage",
        "Airport lounge access",
        "No foreign transaction fees",
        "Travel points and airline miles",
        "Priority boarding and upgrades"
      ],
      bestFor: "Frequent travelers and business professionals",
      considerations: "Higher annual fees but valuable travel perks",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Cash Back Credit Cards",
      icon: ShoppingCart,
      description: "Simple rewards that give you money back on purchases",
      benefits: [
        "Straightforward cash rewards",
        "No points to manage or redeem",
        "Higher rates on specific categories",
        "Often no annual fee options"
      ],
      bestFor: "Those who want simple, straightforward rewards",
      considerations: "May have lower reward rates than points cards",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Low Interest Credit Cards",
      icon: TrendingDown,
      description: "Lower interest rates for those who carry a balance",
      benefits: [
        "Lower APR (8-13% vs 19-25%)",
        "Save money on interest charges",
        "Good for debt consolidation",
        "Often no annual fee"
      ],
      bestFor: "People who occasionally carry a balance",
      considerations: "Usually offer minimal or no rewards",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Balance Transfer Cards",
      icon: TrendingDown,
      description: "Special promotional rates for transferring existing debt",
      benefits: [
        "0% introductory APR (6-21 months)",
        "Consolidate multiple debts",
        "Lower monthly payments",
        "Debt payoff timeline"
      ],
      bestFor: "Those with existing credit card debt",
      considerations: "Balance transfer fees and promotional rate ends",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Secured Credit Cards",
      icon: Shield,
      description: "Require a security deposit but help build credit",
      benefits: [
        "Available with poor/no credit",
        "Builds credit history",
        "Graduate to unsecured cards",
        "Deposit protects the lender"
      ],
      bestFor: "Building or rebuilding credit",
      considerations: "Requires upfront deposit and may have fees",
      color: "bg-gray-100 text-gray-600"
    },
    {
      title: "Student Credit Cards",
      icon: GraduationCap,
      description: "Designed for students with limited credit history",
      benefits: [
        "Easier approval requirements",
        "Lower credit limits",
        "Educational resources",
        "Potential to graduate to better cards"
      ],
      bestFor: "College and university students",
      considerations: "Lower credit limits and fewer rewards",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Business Credit Cards",
      icon: Building,
      description: "Designed for business expenses and cash flow management",
      benefits: [
        "Separate business and personal expenses",
        "Higher credit limits",
        "Business-specific rewards",
        "Expense tracking tools",
        "Employee cards"
      ],
      bestFor: "Business owners and entrepreneurs",
      considerations: "May require business documentation",
      color: "bg-indigo-100 text-indigo-600"
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
              <span className="text-foreground">Types of Credit Cards</span>
            </nav>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Gift className="h-3 w-3 mr-1" />
              Card Types
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Types of Credit Cards: Complete Guide</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Understand the different types of credit cards available in Canada and find the right one for your financial needs and lifestyle.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: December 2024</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-4">
                Not all credit cards are created equal. With dozens of different types available, choosing the right 
                credit card depends on your spending habits, financial goals, and credit history. This comprehensive 
                guide breaks down the main types of credit cards to help you make an informed decision.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Quick Tip:</strong> The best credit card for you depends on how you plan to use it. 
                  If you pay your balance in full each month, focus on rewards cards. If you carry a balance, 
                  prioritize low interest rates.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card Types Grid */}
          <div className="space-y-8">
            {cardTypes.map((cardType, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${cardType.color}`}>
                      <cardType.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{cardType.title}</CardTitle>
                      <CardDescription className="text-base">{cardType.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">Key Benefits</h4>
                      <ul className="space-y-2">
                        {cardType.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">Best For</h4>
                      <p className="text-sm text-muted-foreground mb-4">{cardType.bestFor}</p>
                      <h4 className="font-semibold mb-3 text-orange-700">Considerations</h4>
                      <p className="text-sm text-muted-foreground">{cardType.considerations}</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Button asChild className="w-full mb-2">
                        <Link to={`/credit-cards/${cardType.title.toLowerCase().replace(/\s+/g, '-').replace('credit-cards', '').replace('--', '-')}`}>
                          View {cardType.title}
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/card-finder">Find My Card</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Quick Comparison Guide</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Card Type</th>
                        <th className="text-left p-4 font-semibold">Annual Fee</th>
                        <th className="text-left p-4 font-semibold">Interest Rate</th>
                        <th className="text-left p-4 font-semibold">Best Feature</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Rewards Cards</td>
                        <td className="p-4 text-sm">$0-$700+</td>
                        <td className="p-4 text-sm">19-25%</td>
                        <td className="p-4 text-sm">Earn points/cash back</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Low Interest</td>
                        <td className="p-4 text-sm">$0-$50</td>
                        <td className="p-4 text-sm">8-13%</td>
                        <td className="p-4 text-sm">Lower borrowing costs</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Balance Transfer</td>
                        <td className="p-4 text-sm">$0-$100</td>
                        <td className="p-4 text-sm">0% intro rate</td>
                        <td className="p-4 text-sm">Debt consolidation</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Secured</td>
                        <td className="p-4 text-sm">$0-$50</td>
                        <td className="p-4 text-sm">19-25%</td>
                        <td className="p-4 text-sm">Build credit history</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Student</td>
                        <td className="p-4 text-sm">$0-$25</td>
                        <td className="p-4 text-sm">19-22%</td>
                        <td className="p-4 text-sm">Easy approval</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Decision Guide */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">How to Choose the Right Card Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Ask Yourself:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Do I pay my balance in full each month?</li>
                    <li>• What do I spend the most money on?</li>
                    <li>• Do I travel frequently?</li>
                    <li>• Am I building or rebuilding credit?</li>
                    <li>• Do I have existing credit card debt?</li>
                    <li>• Am I comfortable with annual fees?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Decision Framework:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-green-50 rounded">
                      <strong>Pay balance in full?</strong><br />
                      → Consider rewards cards
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <strong>Carry a balance sometimes?</strong><br />
                      → Look at low interest cards
                    </div>
                    <div className="p-3 bg-orange-50 rounded">
                      <strong>Have existing debt?</strong><br />
                      → Consider balance transfer cards
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <strong>Building credit?</strong><br />
                      → Start with secured or student cards
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Ready to Find Your Perfect Card?</h3>
              <p className="text-muted-foreground mb-6">
                Now that you understand the different types of credit cards, use our CardFinder tool to get 
                personalized recommendations based on your specific needs and spending patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/card-finder">
                    Find My Perfect Card
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/guides/rewards-credit-cards">
                    Learn About Rewards Cards
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

export default CreditCardTypes;
