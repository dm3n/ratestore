
import { useState } from "react";
import { CompoundInterestCalculator } from "@/components/CompoundInterestCalculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesTable } from "@/components/SavingsRatesTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, PiggyBank, BarChart3, Shield, CheckCircle, Home, CreditCard, Building2, Briefcase, TrendingDown, Car, Plane, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("mortgages");

  const categories = [
    { id: "mortgages", name: "Mortgages", icon: Home },
    { id: "credit-cards", name: "Credit cards", icon: CreditCard },
    { id: "banking", name: "Banking", icon: Building2 },
    { id: "investing", name: "Investing", icon: TrendingUp },
    { id: "insurance", name: "Insurance", icon: Shield }
  ];

  const mortgageContent = {
    featured: [
      { lender: "Canadian Lender", rate: "3.84%", term: "5-yr Fixed" },
      { lender: "Canadian Lender", rate: "3.95%", term: "5-yr Variable" },
      { lender: "Scotiabank", rate: "4.64%", term: "3-yr Fixed" }
    ],
    sections: [
      {
        title: "Compare mortgage rates",
        links: ["Best mortgage rates", "Best mortgage renewal rates", "HELOC mortgage rates", "Best bank mortgage rates", "Alberta mortgage rates", "BC mortgage rates", "Ontario mortgage rates", "Quebec mortgage rates"]
      },
      {
        title: "Mortgage terms",
        links: ["2-year fixed rates", "3-year fixed rates", "5-year fixed rates", "3-year variable rates", "5-year variable rates", "Compare all rates", "Historical rates"]
      },
      {
        title: "Calculators",
        links: ["Mortgage payment calculator", "Mortgage affordability calculator", "Mortgage renewal calculator", "Mortgage refinance calculator", "Mortgage down payment calculator", "Land transfer tax calculator"]
      },
      {
        title: "Mortgage providers",
        links: ["Popular mortgage lenders", "Find a mortgage broker"]
      },
      {
        title: "Education centre",
        links: ["Home buying guide", "Mortgage renewal guide", "Mortgage refinancing guide", "First time home buyer programs", "Prime rate", "Variable vs. fixed mortgage rates", "Bank of Canada Overnight rate"]
      }
    ]
  };

  const creditCardContent = {
    sections: [
      {
        title: "Compare credit cards",
        links: ["CardFinder", "Best overall credit cards", "Top credit card promotions", "RateHub's 2025 credit card awards"]
      },
      {
        title: "Reward credit cards",
        links: ["Aeroplan", "Cash back", "Grocery", "Rewards", "Store", "Travel"]
      },
      {
        title: "Type of credit cards",
        links: ["Balance Transfer", "Business", "Instant approval", "Low Interest", "Newcomers", "No Fee", "No FX fee", "Secured", "Student", "Travel Insurance"]
      },
      {
        title: "Banks & Networks",
        links: ["American Express", "BMO", "CIBC", "Mastercard", "MBNA", "National Bank", "PC Financial", "RBC", "Scotiabank", "Tangerine", "TD", "Visa"]
      },
      {
        title: "Education centre",
        links: ["Credit card basics", "Types of credit cards", "Rewards credit cards guide", "Credit card insurance guide", "Credit score and fraud guide", "Credit card interest calculator"]
      }
    ]
  };

  const bankingContent = {
    sections: [
      {
        title: "Best of",
        links: ["Best savings accounts", "Best chequing accounts", "Personal Finance Awards 2025"]
      },
      {
        title: "Savings accounts",
        links: ["Compare all savings accounts", "High-interest savings accounts", "TFSA savings accounts", "RRSP savings accounts", "Youth savings accounts", "First home saving accounts", "RESP accounts"]
      },
      {
        title: "Chequing accounts",
        links: ["Compare all chequing accounts", "Personal chequing accounts", "Student chequing accounts", "Youth chequing accounts", "Senior chequing accounts", "Newcomer chequing accounts"]
      },
      {
        title: "Education centre",
        links: ["What is a savings account", "Tiered savings accounts", "Savings account alternatives", "Chequing account basics", "Chequing account types", "Chequing account fees", "RESP basics", "RESP contribution limit and withdrawals"]
      },
      {
        title: "Calculators",
        links: ["TFSA contribution room calculator"]
      }
    ]
  };

  const investingContent = {
    sections: [
      {
        title: "Best of",
        links: ["Best GIC rates", "Best RESPs"]
      },
      {
        title: "GIC terms and types",
        links: ["1-year", "5-year", "Registered GICs", "TFSA GIC rates", "USD GIC rates", "Compare all GICs"]
      },
      {
        title: "Stocks & ETFs",
        links: ["Best robo-advisors 2025", "Best online brokerages 2025", "Best crypto exchanges 2025"]
      },
      {
        title: "Education centre",
        links: ["GIC basics", "GIC types", "RRSP basics", "RRSP contribution", "RRSP withdrawals", "TFSA basics", "TFSA contributions, withdrawals, transfers", "RESP basics", "TFSA investments", "RESP contribution limit and withdrawals"]
      },
      {
        title: "Calculators",
        links: ["Compound interest calculator"]
      }
    ]
  };

  const insuranceContent = {
    sections: [
      {
        title: "Auto insurance",
        links: ["Auto insurance quotes", "Motorcycle insurance", "All auto insurance types", "Ontario car insurance", "Toronto car insurance", "Alberta car insurance", "Calgary car insurance", "Quebec car insurance", "Montreal car insurance", "All car insurance regions"]
      },
      {
        title: "Home insurance",
        links: ["Home insurance quotes", "Tenant insurance", "Condo insurance", "Landlord insurance", "All home insurance types", "Ontario home insurance", "Alberta home insurance", "BC home insurance", "Quebec home insurance", "All home insurance regions"]
      },
      {
        title: "Life insurance",
        links: ["Life insurance quotes", "Term life insurance", "Permanent life insurance", "Disability insurance", "Critical illness insurance", "Group insurance", "All life insurance types", "Life insurance by region", "Life insurance education", "Life insurance companies"]
      },
      {
        title: "Travel insurance",
        links: ["Travel insurance quotes", "Multi-trip insurance", "Travel medical insurance", "Trip cancellation insurance", "Senior travel insurance", "Pre-existing condition", "Visitors to Canada", "Travel insurance programs", "Travel insurance types", "Travel insurance reviews"]
      },
      {
        title: "Business insurance",
        links: ["Business insurance quotes", "Professional liability", "D&O insurance", "Commercial general liability", "Product liability insurance", "Business interruption insurance", "Contractor insurance", "Non-profit insurance", "Cyber insurance", "Technology insurance", "Fitness insurance"]
      }
    ]
  };

  const getContentForCategory = (categoryId: string) => {
    switch (categoryId) {
      case "mortgages":
        return mortgageContent;
      case "credit-cards":
        return { sections: creditCardContent.sections };
      case "banking":
        return { sections: bankingContent.sections };
      case "investing":
        return { sections: investingContent.sections };
      case "insurance":
        return { sections: insuranceContent.sections };
      default:
        return mortgageContent;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Featured Rates Section - Only for Mortgages */}
              {selectedCategory === "mortgages" && (
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Featured Mortgage Rates</h2>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      Advertising disclosure
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {mortgageContent.featured.map((rate, index) => (
                      <Card key={index} className="border-0 shadow-lg">
                        <CardHeader className="text-center pb-4">
                          <Badge variant="outline" className="self-center mb-2">
                            - featured -
                          </Badge>
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Home className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="font-medium">{rate.lender}</span>
                          </div>
                          <div className="text-3xl font-bold">{rate.rate}</div>
                          <div className="text-sm text-muted-foreground">{rate.term}</div>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            inquire
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button variant="link" className="text-blue-600">
                      compare all →
                    </Button>
                  </div>
                </div>
              )}

              {/* Category Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2 px-6 py-3"
                  >
                    <category.icon className="h-5 w-5" />
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Category Content */}
              <div className="grid md:grid-cols-5 gap-8">
                {getContentForCategory(selectedCategory).sections?.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-4 text-sm">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link 
                            to={`/${selectedCategory}`} 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                <Button size="lg" className="px-8 py-3">
                  I'm buying a home
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  I'm renewing/refinancing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How it works on RateStore</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Compare</h3>
                      <p className="text-muted-foreground">
                        Tell us about your financial needs and we'll show you personalized rates from Canada's top banks and lenders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Apply</h3>
                      <p className="text-muted-foreground">
                        Choose the best rate, complete your online application and book a phone appointment with one of our award-winning financial experts.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">Compare rates.</h4>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-8 h-1 bg-blue-600 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Based on the information you provided, below are the best rates you may qualify for.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">TD</span>
                          </div>
                          <div>
                            <div className="font-semibold">2.09%</div>
                            <div className="text-xs text-muted-foreground">$3,422/mo</div>
                          </div>
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          inquire
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">M</span>
                          </div>
                          <div>
                            <div className="font-semibold">Meridian Credit Union</div>
                            <div className="text-xs text-muted-foreground">973 reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Icons Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-5 gap-8">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/${category.id}`}
                    className="text-center group hover:bg-white rounded-lg p-6 transition-colors"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                      <category.icon className={`h-8 w-8 ${
                        category.id === 'mortgages' ? 'text-blue-500' :
                        category.id === 'credit-cards' ? 'text-green-500' :
                        category.id === 'banking' ? 'text-yellow-500' :
                        category.id === 'investing' ? 'text-red-500' :
                        'text-purple-500'
                      }`} />
                    </div>
                    <h3 className="font-semibold">{category.name}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
