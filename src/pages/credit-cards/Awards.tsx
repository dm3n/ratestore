
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, CreditCard } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      category: "Best Overall Credit Card",
      winner: "TD Aeroplan Visa Infinite",
      icon: Trophy,
      color: "text-yellow-600",
      description: "Outstanding value with flexible rewards and comprehensive insurance coverage"
    },
    {
      category: "Best Cash Back Card",
      winner: "Tangerine Money-Back Credit Card",
      icon: Star,
      color: "text-blue-600",
      description: "Highest cash back rates in popular spending categories with no annual fee"
    },
    {
      category: "Best Travel Card",
      winner: "American Express Platinum Card",
      icon: Award,
      color: "text-purple-600",
      description: "Premium travel benefits and exclusive access to airport lounges worldwide"
    },
    {
      category: "Best No Fee Card",
      winner: "PC Financial Mastercard",
      icon: Star,
      color: "text-green-600",
      description: "Excellent rewards program with no annual fee and strong grocery rewards"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-background to-amber-50 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Award className="h-4 w-4" />
                Annual Excellence Awards - 2025
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                RateStore's 2025
                <span className="block bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">
                  Credit Card Awards
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                Celebrating 
                <span className="text-yellow-600 font-semibold"> excellence in Canadian credit cards</span> 
                based on comprehensive analysis of value, features, and 
                <span className="text-amber-600 font-semibold"> customer satisfaction</span>
              </p>

              {/* Awards Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto animate-fade-in">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-yellow-600 mb-1">4</div>
                  <div className="text-sm text-muted-foreground font-medium">Award Categories</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Star className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-amber-600 mb-1">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Cards Evaluated</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-orange-600 mb-1">2025</div>
                  <div className="text-sm text-muted-foreground font-medium">Award Year</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all hover:scale-105">
                  <CreditCard className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-red-600 mb-1">12</div>
                  <div className="text-sm text-muted-foreground font-medium">Months Research</div>
                </div>
              </div>

              {/* Award Criteria */}
              <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center gap-6 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Value Analysis
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Feature Comparison
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Customer Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-200 rounded-full blur-xl animate-pulse opacity-60" />
          <div className="absolute top-1/4 right-10 w-20 h-20 bg-amber-200 rounded-full blur-lg animate-pulse opacity-40" />
          <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-orange-200 rounded-full blur-2xl animate-pulse opacity-30" />
          <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-red-200 rounded-full blur-lg animate-pulse opacity-50" />
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <Badge variant="outline" className="text-primary border-primary">
                  Annual Awards - 2025
                </Badge>
              </div>
              
              <div className="grid gap-6">
                {awards.map((award, index) => {
                  const IconComponent = award.icon;
                  return (
                    <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-full bg-gray-100 ${award.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{award.category}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-primary">
                              {award.winner}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{award.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Awards;
