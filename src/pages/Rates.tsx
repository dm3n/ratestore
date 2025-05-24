
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RateTable } from "@/components/RateTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Bell } from "lucide-react";

const Rates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-200">
                Live Rates
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Today's Mortgage Rates
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Compare live mortgage rates from top lenders and find the best deal for your home loan.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="gap-2">
                  Get Personalized Rates <TrendingUp className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Rate Alerts <Bell className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rates Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Compare Mortgage Rates</h2>
                <p className="text-muted-foreground">Updated in real-time from our lending partners</p>
              </div>
              
              <RateTable />
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Rate Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>30-year fixed</span>
                        <span className="text-green-600">↓ 0.125%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>15-year fixed</span>
                        <span className="text-red-600">↑ 0.063%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5/1 ARM</span>
                        <span className="text-gray-600">→ 0.000%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Rate Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Credit score</li>
                      <li>• Down payment amount</li>
                      <li>• Loan term</li>
                      <li>• Property type</li>
                      <li>• Debt-to-income ratio</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Market Update</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Mortgage rates have shown slight movement this week due to economic indicators.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Full Analysis
                    </Button>
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

export default Rates;
