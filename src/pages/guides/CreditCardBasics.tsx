
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CreditCard, CheckCircle, AlertCircle, TrendingUp, Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CreditCardBasics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/guides/education-centre" className="hover:text-primary">Education Centre</Link>
              <span>/</span>
              <Link to="/guides/credit-cards" className="hover:text-primary">Credit Cards</Link>
              <span>/</span>
              <span className="text-foreground">Credit Card Basics</span>
            </nav>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <CreditCard className="h-3 w-3 mr-1" />
              Fundamentals
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Credit Card Basics: A Complete Guide</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Learn the fundamentals of credit cards, how they work, and how to use them responsibly to build your financial future.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: December 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><a href="#what-is-credit-card" className="text-primary hover:underline">What is a Credit Card?</a></li>
                <li><a href="#how-they-work" className="text-primary hover:underline">How Credit Cards Work</a></li>
                <li><a href="#types-overview" className="text-primary hover:underline">Types of Credit Cards</a></li>
                <li><a href="#benefits" className="text-primary hover:underline">Benefits of Using Credit Cards</a></li>
                <li><a href="#responsible-use" className="text-primary hover:underline">Using Credit Cards Responsibly</a></li>
                <li><a href="#getting-started" className="text-primary hover:underline">Getting Your First Credit Card</a></li>
              </ul>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-8">
            <section id="what-is-credit-card">
              <h2 className="text-2xl font-bold mb-4">What is a Credit Card?</h2>
              <p className="mb-4">
                A credit card is a financial tool that allows you to borrow money from a bank or financial institution 
                to make purchases. Unlike a debit card that uses your own money from your bank account, a credit card 
                gives you access to a line of credit that you must pay back later.
              </p>
              <Card className="mb-4">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Key Point:</p>
                      <p className="text-sm text-muted-foreground">
                        Credit cards are essentially a short-term loan that you can use for purchases, 
                        with the expectation that you'll pay back the borrowed amount.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            <section id="how-they-work">
              <h2 className="text-2xl font-bold mb-4">How Credit Cards Work</h2>
              <p className="mb-4">
                When you use a credit card, the card issuer pays the merchant on your behalf. You then owe 
                that money to the card issuer. Here's the basic process:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Credit Limit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The maximum amount you can borrow on your card. This is determined by your 
                      creditworthiness and income.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Billing Cycle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Usually 28-31 days long. At the end of each cycle, you receive a statement 
                      showing your balance and minimum payment due.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Grace Period</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Typically 21 days after your statement date to pay your balance in full 
                      without incurring interest charges.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Interest Rate (APR)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The cost of borrowing money if you don't pay your full balance. 
                      In Canada, this is typically 19-25% annually.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section id="types-overview">
              <h2 className="text-2xl font-bold mb-4">Types of Credit Cards</h2>
              <p className="mb-4">
                There are several types of credit cards designed for different needs and financial situations:
              </p>
              <div className="space-y-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Rewards Credit Cards</CardTitle>
                    <CardDescription>Earn points, cash back, or miles on purchases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Best for people who pay their balance in full each month and want to earn rewards on spending.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Low Interest Credit Cards</CardTitle>
                    <CardDescription>Lower interest rates for carrying a balance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Ideal if you occasionally carry a balance and want to minimize interest charges.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Balance Transfer Cards</CardTitle>
                    <CardDescription>Special rates for transferring debt from other cards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Helpful for consolidating debt and paying it off with lower interest rates.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Secured Credit Cards</CardTitle>
                    <CardDescription>Require a security deposit to open</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Great for building or rebuilding credit history with a required deposit.</p>
                  </CardContent>
                </Card>
              </div>
              <Button asChild variant="outline">
                <Link to="/guides/credit-card-types">
                  Learn More About Card Types
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </section>

            <Separator />

            <section id="benefits">
              <h2 className="text-2xl font-bold mb-4">Benefits of Using Credit Cards</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Build Credit History</p>
                      <p className="text-sm text-muted-foreground">
                        Responsible use helps establish and improve your credit score
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Fraud Protection</p>
                      <p className="text-sm text-muted-foreground">
                        Better protection against fraudulent transactions than debit cards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Rewards and Benefits</p>
                      <p className="text-sm text-muted-foreground">
                        Earn cash back, points, or miles on purchases
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Purchase Protection</p>
                      <p className="text-sm text-muted-foreground">
                        Insurance coverage for damaged or stolen items
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Emergency Access to Funds</p>
                      <p className="text-sm text-muted-foreground">
                        Available credit for unexpected expenses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Travel Benefits</p>
                      <p className="text-sm text-muted-foreground">
                        Travel insurance, airport lounge access, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section id="responsible-use">
              <h2 className="text-2xl font-bold mb-4">Using Credit Cards Responsibly</h2>
              <Card className="mb-4 border-yellow-200 bg-yellow-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Important:</p>
                      <p className="text-sm text-yellow-700">
                        Credit cards can be powerful financial tools when used responsibly, 
                        but they can also lead to debt if mismanaged.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold">Best Practices:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Pay your balance in full each month to avoid interest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Keep your credit utilization below 30% of your limit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Make payments on time to maintain good credit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Only spend what you can afford to pay back</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Monitor your statements regularly for errors or fraud</span>
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            <section id="getting-started">
              <h2 className="text-2xl font-bold mb-4">Getting Your First Credit Card</h2>
              <p className="mb-4">
                Ready to apply for your first credit card? Here's what you need to know:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Age 18+ (19+ in some provinces)</li>
                      <li>• Canadian resident</li>
                      <li>• Steady income</li>
                      <li>• Valid identification</li>
                      <li>• Good credit history (or willingness to start with secured card)</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Application Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Compare cards and choose one that fits your needs</li>
                      <li>• Fill out the application with accurate information</li>
                      <li>• Wait for approval (instant to several days)</li>
                      <li>• Receive your card in the mail</li>
                      <li>• Activate your card and start using responsibly</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Next Steps */}
          <Card className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 border-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Ready to Find Your Perfect Credit Card?</h3>
              <p className="text-muted-foreground mb-6">
                Use our CardFinder tool to get personalized recommendations based on your spending habits and financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/card-finder">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Find My Perfect Card
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/guides/credit-card-types">
                    Learn About Card Types
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

export default CreditCardBasics;
