
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Gift, Calculator, PiggyBank, CheckCircle, DollarSign } from "lucide-react";

const FirstHomeSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                <Home className="h-3 w-3 mr-1" />
                First-Time Buyers
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                First Home Savings Accounts (FHSA)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Save for your first home with tax-advantaged First Home Savings Accounts. 
                Get tax deductions and tax-free withdrawals for your down payment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare FHSA Rates
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Home className="h-5 w-5" />
                  Calculate Savings
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Calculator */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator 
                accountType="fhsa"
                title="First Home Savings Account Rates"
                description="Compare FHSA rates and plan your path to homeownership"
              />
            </div>
          </div>
        </section>

        {/* FHSA Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Double Tax Advantage</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The FHSA combines the best features of RRSPs and TFSAs for first-time homebuyers
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Tax Deductible</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Contributions are tax-deductible, reducing your taxable income immediately.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$8,000</div>
                      <div className="text-sm text-green-700">Annual contribution limit</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Tax-Free Withdrawals</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Withdraw funds tax-free for your first home purchase, including investment growth.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">0%</div>
                      <div className="text-sm text-blue-700">Tax on qualified withdrawals</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-orange-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Homeownership Goal</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Specifically designed for first-time homebuyers to achieve their ownership dreams.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">$40,000</div>
                      <div className="text-sm text-orange-700">Lifetime contribution limit</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FHSA vs Other Accounts */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">FHSA vs Other Savings Options</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left font-medium">Feature</th>
                      <th className="p-4 text-center font-medium text-orange-600">FHSA</th>
                      <th className="p-4 text-center font-medium">TFSA</th>
                      <th className="p-4 text-center font-medium">RRSP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-4 font-medium">Tax Deductible Contributions</td>
                      <td className="p-4 text-center text-green-600">✓</td>
                      <td className="p-4 text-center text-red-500">✗</td>
                      <td className="p-4 text-center text-green-600">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Tax-Free Withdrawals</td>
                      <td className="p-4 text-center text-green-600">✓</td>
                      <td className="p-4 text-center text-green-600">✓</td>
                      <td className="p-4 text-center text-red-500">✗</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">First-Time Buyer Only</td>
                      <td className="p-4 text-center text-green-600">✓</td>
                      <td className="p-4 text-center text-red-500">✗</td>
                      <td className="p-4 text-center text-red-500">✗</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Annual Contribution Limit</td>
                      <td className="p-4 text-center font-medium">$8,000</td>
                      <td className="p-4 text-center font-medium">$7,000</td>
                      <td className="p-4 text-center font-medium">$31,560</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FirstHomeSavings;
