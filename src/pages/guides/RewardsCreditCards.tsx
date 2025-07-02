
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Gift, Star, Calculator, TrendingUp, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RewardsCreditCards = () => {
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
              <span className="text-foreground">Rewards Credit Cards</span>
            </nav>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-green-100 text-green-700">
              <Gift className="h-3 w-3 mr-1" />
              Rewards
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Rewards Credit Cards: Maximize Your Benefits</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Learn how to choose and use rewards credit cards to earn maximum points, cash back, and miles on your everyday spending.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: December 2024</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><a href="#types-of-rewards" className="text-primary hover:underline">Types of Rewards Programs</a></li>
                <li><a href="#maximizing-rewards" className="text-primary hover:underline">Maximizing Your Rewards</a></li>
                <li><a href="#choosing-right-card" className="text-primary hover:underline">Choosing the Right Rewards Card</a></li>
                <li><a href="#redemption-strategies" className="text-primary hover:underline">Redemption Strategies</a></li>
                <li><a href="#common-mistakes" className="text-primary hover:underline">Common Mistakes to Avoid</a></li>
                <li><a href="#best-practices" className="text-primary hover:underline">Best Practices for Rewards Cards</a></li>
              </ul>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-8">
            <section id="types-of-rewards">
              <h2 className="text-2xl font-bold mb-4">Types of Rewards Programs</h2>
              <p className="mb-6">
                Rewards credit cards come in several different formats, each with unique benefits and optimal use cases:
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">$</span>
                      </div>
                      Cash Back Cards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Earn a percentage of your purchases back as cash or statement credits.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">How They Work:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Flat rate: 1-2% on all purchases</li>
                          <li>• Tiered: Different rates for different categories</li>
                          <li>• Rotating: Bonus categories change quarterly</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Best For:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Simple rewards without complexity</li>
                          <li>• Those who want immediate value</li>
                          <li>• People who don't want to track categories</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Star className="text-blue-600 h-4 w-4" />
                      </div>
                      Points Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Earn points that can be redeemed for travel, merchandise, or cash equivalents.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Popular Programs:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Aeroplan (Air Canada)</li>
                          <li>• Scene+ (Cineplex/Scotiabank)</li>
                          <li>• Membership Rewards (Amex)</li>
                          <li>• Avion (RBC)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Advantages:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Higher value potential</li>
                          <li>• Flexible redemption options</li>
                          <li>• Partner benefits and bonuses</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">✈</span>
                      </div>
                      Airline Miles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Earn miles directly with airline loyalty programs for flights and upgrades.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Free flights and upgrades</li>
                          <li>• Elite status benefits</li>
                          <li>• Priority boarding and lounge access</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Considerations:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Limited to specific airlines</li>
                          <li>• Award availability restrictions</li>
                          <li>• Best for frequent travelers</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section id="maximizing-rewards">
              <h2 className="text-2xl font-bold mb-4">Maximizing Your Rewards</h2>
              <p className="mb-6">
                The key to maximizing rewards is strategic spending and understanding how different cards work together:
              </p>

              <div className="space-y-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">Strategy 1: Category Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 mb-4">Use different cards for different spending categories to maximize rewards.</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span>Groceries (5x points)</span>
                        <span className="font-semibold">American Express Cobalt</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span>Gas (3x points)</span>
                        <span className="font-semibold">Canadian Tire Triangle</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span>Everything Else (2% cash back)</span>
                        <span className="font-semibold">Tangerine Money-Back</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800">Strategy 2: Welcome Bonus Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 mb-4">Time large purchases with new card applications to meet welcome bonus requirements.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Typical Requirements:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Spend $1,000-$5,000 in first 3 months</li>
                          <li>• Make minimum number of transactions</li>
                          <li>• Apply by specific deadline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Planning Tips:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Time with large purchases</li>
                          <li>• Pay bills and recurring expenses</li>
                          <li>• Don't overspend just for bonuses</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-800">Strategy 3: Partner Bonuses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-700 mb-4">Take advantage of limited-time partner promotions and bonus categories.</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span>Shop through reward portals for extra points</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span>Use partner dining and shopping programs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <span>Stack promotions with existing category bonuses</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section id="choosing-right-card">
              <h2 className="text-2xl font-bold mb-4">Choosing the Right Rewards Card</h2>
              <p className="mb-6">
                The best rewards card depends on your spending patterns, financial habits, and personal preferences:
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Decision Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Step 1: Analyze Your Spending</h4>
                      <p className="text-sm text-muted-foreground mb-2">Look at your last 3-6 months of expenses:</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Groceries: $___/month</li>
                        <li>• Gas: $___/month</li>
                        <li>• Dining: $___/month</li>
                        <li>• Travel: $___/year</li>
                        <li>• Everything else: $___/month</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Step 2: Calculate Potential Value</h4>
                      <p className="text-sm text-muted-foreground">Use this formula for each card you're considering:</p>
                      <div className="bg-gray-50 p-3 rounded mt-2 text-sm">
                        <code>Annual Rewards - Annual Fee = Net Benefit</code>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Step 3: Consider Your Preferences</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium mb-2">Prefer Simplicity?</p>
                          <p>→ Flat-rate cash back cards</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Want Maximum Value?</p>
                          <p>→ Points cards with category bonuses</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Travel Frequently?</p>
                          <p>→ Travel rewards or airline cards</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Organized Spender?</p>
                          <p>→ Multiple cards for different categories</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            <section id="redemption-strategies">
              <h2 className="text-2xl font-bold mb-4">Redemption Strategies</h2>
              <p className="mb-6">
                How you redeem your rewards can significantly impact their value:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">High-Value Redemptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Travel bookings (often 1.25-2¢ per point)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Transfer to airline partners</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Statement credits for travel purchases</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Limited-time bonus redemptions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700">Lower-Value Redemptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span>Gift cards (usually 0.8-1¢ per point)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span>Merchandise (often poor value)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span>Cash back from points programs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span>Last-minute, restricted travel</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 text-blue-800">Pro Tip: Track Point Values</h4>
                  <p className="text-sm text-blue-700">
                    Keep a simple spreadsheet tracking how much value you get per point/mile for different redemptions. 
                    This helps you identify the best uses for your rewards over time.
                  </p>
                </CardContent>
              </Card>
            </section>

            <Separator />

            <section id="common-mistakes">
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-4">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Chasing Rewards Without a Plan</h4>
                        <p className="text-sm text-red-700">
                          Don't change your spending habits just to earn more rewards. The interest and fees 
                          from overspending will quickly outweigh any rewards earned.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Ignoring Annual Fees</h4>
                        <p className="text-sm text-orange-700">
                          Always calculate whether your rewards will exceed the annual fee. A $120 annual fee 
                          requires $6,000+ in spending at 2% cash back just to break even.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Letting Points Expire</h4>
                        <p className="text-sm text-yellow-700">
                          Many rewards programs have expiration dates. Set calendar reminders and use points 
                          before they expire, even for lower-value redemptions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section id="best-practices">
              <h2 className="text-2xl font-bold mb-4">Best Practices for Rewards Cards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Smart Habits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Pay balance in full every month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Set up automatic payments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Track spending across all cards</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Review statements monthly</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Use rewards regularly</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Organization Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Keep a wallet "cheat sheet" for category bonuses</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Set calendar reminders for annual fees</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Use apps to track rewards balances</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Monitor for new card offers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Keep redemption value records</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Next Steps */}
          <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Ready to Start Earning Rewards?</h3>
              <p className="text-muted-foreground mb-6">
                Use our CardFinder tool to discover rewards cards that match your spending patterns and maximize your earning potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/card-finder">
                    <Gift className="h-4 w-4 mr-2" />
                    Find My Rewards Card
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/credit-cards/cash-back">
                    Compare Cash Back Cards
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

export default RewardsCreditCards;
