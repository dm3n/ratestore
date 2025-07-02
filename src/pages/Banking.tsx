
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, PiggyBank, CreditCard, Calculator } from "lucide-react";

export function Banking() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Banking Products & Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare the best banking products in Canada including savings accounts, chequing accounts, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <PiggyBank className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Savings Accounts</CardTitle>
              <CardDescription>
                High-interest savings accounts to grow your money
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/banking/savings">
                  Compare Savings Accounts
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CreditCard className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Chequing Accounts</CardTitle>
              <CardDescription>
                Everyday banking accounts for your daily transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/banking/chequing">
                  Compare Chequing Accounts
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Banknote className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Youth Accounts</CardTitle>
              <CardDescription>
                Banking products designed for young Canadians
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/banking/youth">
                  View Youth Accounts
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Banking Calculators
          </h2>
          <p className="text-gray-600 mb-6">
            Use our calculators to make informed banking decisions
          </p>
          <Button asChild>
            <Link to="/tools/calculators">
              View All Calculators
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Banking;
