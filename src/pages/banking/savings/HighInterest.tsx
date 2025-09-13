
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Calculator, 
  PiggyBank, 
  ArrowRight,
  Target,
  Clock,
  DollarSign
} from "lucide-react";

const HighInterestSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <PiggyBank className="h-8 w-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                      High-Yield Savings
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Best High Interest 
                    <span className="text-emerald-200"> Savings Accounts</span>
                  </h1>
                  <p className="text-xl text-emerald-100 leading-relaxed">
                    Earn up to 5.25% on your savings with Canada's top-rated high-interest 
                    savings accounts. Start growing your money today.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                    <Link to="/banking/savings/compare">
                      <Calculator className="mr-2 h-4 w-4" />
                      Compare Rates
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-emerald-700 border-white text-white hover:bg-white/10">
                    <Link to="/tools/compound-interest">
                      Calculate Earnings
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-8 w-8 mx-auto mb-3 text-emerald-200" />
                      <div className="text-3xl font-bold">5.25%</div>
                      <div className="text-sm text-emerald-100">Top Rate</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6 text-center">
                      <Shield className="h-8 w-8 mx-auto mb-3 text-emerald-200" />
                      <div className="text-3xl font-bold">$100K</div>
                      <div className="text-sm text-emerald-100">CDIC Insured</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6 text-center">
                      <Target className="h-8 w-8 mx-auto mb-3 text-emerald-200" />
                      <div className="text-3xl font-bold">$0</div>
                      <div className="text-sm text-emerald-100">Min Balance</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6 text-center">
                      <Clock className="h-8 w-8 mx-auto mb-3 text-emerald-200" />
                      <div className="text-3xl font-bold">Daily</div>
                      <div className="text-sm text-emerald-100">Interest Calc</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator
                accountType="savings"
                title="High Interest Savings Account Calculator"
                description="Compare interest rates, calculate earnings, and find the best high-yield savings account for your needs"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HighInterestSavings;
