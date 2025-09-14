
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";

const YouthChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-400/5 via-background to-yellow-500/10 py-20 md:py-28">
          <div className="absolute inset-0 opacity-50">
            <svg width="120" height="120" viewBox="0 0 120 120" className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="polygons" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <polygon points="120,0 120,120 60,120 0,60 60,0" fill="hsl(var(--primary))" fillOpacity="0.02" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#polygons)" />
            </svg>
          </div>
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400/15 to-yellow-500/10 text-amber-600 px-6 py-3 rounded-full text-sm font-bold mb-8 animate-fade-in border border-amber-200/40">
                <span className="text-xl animate-bounce">🌟</span>
                Ages 13-17 Welcome
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                  Youth Banking
                </span>
                <span className="block text-4xl md:text-5xl text-foreground mt-2">
                  Made Fun & Safe
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Start your financial journey right! Teen-friendly accounts with parental controls, 
                educational tools, and zero fees to help you learn smart money habits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="group relative bg-card/70 backdrop-blur-sm border border-border/70 rounded-3xl p-8 hover:bg-card hover:border-amber-200/50 transition-all duration-500 hover:scale-105 animate-fade-in hover:shadow-xl hover:shadow-amber-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/15 rounded-3xl flex items-center justify-center mb-6 group-hover:from-green-400/30 group-hover:to-emerald-500/25 transition-all duration-300 mx-auto">
                      <span className="text-4xl animate-pulse">🎯</span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-3">Free</div>
                    <div className="text-base font-bold text-muted-foreground mb-2">Always No Fees</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Banking stays free throughout your teens</p>
                  </div>
                </div>
                
                <div className="group relative bg-card/70 backdrop-blur-sm border border-border/70 rounded-3xl p-8 hover:bg-card hover:border-amber-200/50 transition-all duration-500 hover:scale-105 animate-fade-in hover:shadow-xl hover:shadow-amber-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400/20 to-yellow-500/15 rounded-3xl flex items-center justify-center mb-6 group-hover:from-amber-400/30 group-hover:to-yellow-500/25 transition-all duration-300 mx-auto">
                      <span className="text-4xl animate-bounce">📚</span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent mb-3">Learn</div>
                    <div className="text-base font-bold text-muted-foreground mb-2">Financial Education</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Interactive tools to build money skills</p>
                  </div>
                </div>
                
                <div className="group relative bg-card/70 backdrop-blur-sm border border-border/70 rounded-3xl p-8 hover:bg-card hover:border-amber-200/50 transition-all duration-500 hover:scale-105 animate-fade-in hover:shadow-xl hover:shadow-amber-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/15 rounded-3xl flex items-center justify-center mb-6 group-hover:from-blue-400/30 group-hover:to-indigo-500/25 transition-all duration-300 mx-auto">
                      <span className="text-4xl animate-pulse">🛡️</span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-3">Safe</div>
                    <div className="text-base font-bold text-muted-foreground mb-2">Parental Controls</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Built-in oversight and spending limits</p>
                  </div>
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
                accountType="chequing"
                title="Youth Chequing Account Comparison"
                description="Compare youth chequing accounts designed for teenagers with educational features"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthChequing;
