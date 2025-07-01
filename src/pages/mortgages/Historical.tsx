
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Calendar } from "lucide-react";

const Historical = () => {
  const historicalData = [
    { year: "2019", rate: 2.79 },
    { year: "2020", rate: 2.14 },
    { year: "2021", rate: 1.75 },
    { year: "2022", rate: 3.25 },
    { year: "2023", rate: 4.85 },
    { year: "2024", rate: 3.84 },
  ];

  const milestones = [
    { year: "2020", event: "COVID-19 Rate Cuts", rate: "2.14%", impact: "Historic lows" },
    { year: "2022", event: "Inflation Fighting", rate: "3.25%", impact: "Sharp increases" },
    { year: "2023", event: "Rate Peak", rate: "4.85%", impact: "Cooling market" },
    { year: "2024", event: "Market Stabilization", rate: "3.84%", impact: "Gradual decline" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-gray-50 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 bg-gray-100 text-gray-700 border-gray-200">
                <Calendar className="h-3 w-3 mr-1" />
                Historical Data
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Historical Mortgage Rates
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Track mortgage rate trends over time and understand how economic events 
                have shaped Canada's mortgage market.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">5-Year Fixed Rate History</CardTitle>
                  <CardDescription>Average rates from 2019 to 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis domain={[0, 6]} />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Mortgage Rate']}
                          labelStyle={{ color: '#000' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="rate" 
                          stroke="#2563eb" 
                          strokeWidth={3}
                          dot={{ fill: '#2563eb', strokeWidth: 2, r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Market Events</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Major economic events that influenced mortgage rates in Canada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{milestone.year}</CardTitle>
                        <Badge variant="outline" className="text-lg font-bold">
                          {milestone.rate}
                        </Badge>
                      </div>
                      <CardDescription className="font-medium text-base">
                        {milestone.event}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {milestone.impact.includes('increase') || milestone.impact.includes('Sharp') ? (
                          <TrendingUp className="h-4 w-4 text-red-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-green-500" />
                        )}
                        {milestone.impact}
                      </div>
                    </CardContent>
                  </Card>
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

export default Historical;
