
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star, Calculator, PiggyBank, CheckCircle, GraduationCap } from "lucide-react";

const YouthSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <Users className="h-3 w-3 mr-1" />
                Ages 13-17
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Best Youth Savings Accounts in Canada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Special savings accounts designed for young Canadians to start their financial journey 
                with competitive rates and educational tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Compare Youth Accounts
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <PiggyBank className="h-5 w-5" />
                  Start Saving Early
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
                accountType="youth"
                title="Youth Savings Account Rates"
                description="Compare savings accounts designed specifically for young Canadians"
              />
            </div>
          </div>
        </section>

        {/* Youth Benefits */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Start Saving Young?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Youth savings accounts offer special benefits to help young people build financial habits
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-green-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">No Monthly Fees</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Most youth accounts have no monthly maintenance fees to maximize savings growth.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$0</div>
                      <div className="text-sm text-green-700">Monthly fees</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Financial Education</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Access to educational resources and tools to learn about money management.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">Free</div>
                      <div className="text-sm text-blue-700">Financial literacy tools</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-100 bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Easy Transition</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Seamlessly upgrade to adult accounts when you turn 18 or 19.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">18+</div>
                      <div className="text-sm text-purple-700">Automatic upgrade age</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Age Requirements */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Account Requirements by Age</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-blue-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Ages 0-12</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">Joint account with parent/guardian required</p>
                    <div className="text-lg font-bold text-primary">Full supervision</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-2 border-green-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-green-700">Ages 13-17</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-green-700 mb-3">Youth account with parent consent</p>
                    <div className="text-lg font-bold text-green-600">Guided independence</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Ages 18+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">Full adult account privileges</p>
                    <div className="text-lg font-bold text-primary">Complete control</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthSavings;
