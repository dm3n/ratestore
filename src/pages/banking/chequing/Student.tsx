
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";

const StudentChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-500/5 via-background to-indigo-500/10 py-20 md:py-28">
          <div className="absolute inset-0 opacity-30">
            <svg width="80" height="80" viewBox="0 0 80 80" className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="diamonds" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0L80 40L40 80z" fill="hsl(var(--primary))" fillOpacity="0.04" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diamonds)" />
            </svg>
          </div>
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 px-5 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in border border-purple-200/30">
                <span className="text-lg">🎓</span>
                Student Exclusive
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Student Banking
                </span>
                <span className="block text-4xl md:text-5xl text-foreground mt-2">
                  Without the Stress
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Focus on your studies, not banking fees. Compare student accounts designed for your academic journey 
                with exclusive benefits and zero monthly costs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="group relative bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-8 hover:bg-card/90 hover:border-purple-200/40 transition-all duration-500 hover:scale-105 animate-fade-in hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:from-green-500/30 group-hover:to-emerald-500/20 transition-all duration-300">
                      <span className="text-3xl">✨</span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">$0</div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Monthly Fees</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Free banking throughout your studies</p>
                  </div>
                </div>
                
                <div className="group relative bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-8 hover:bg-card/90 hover:border-purple-200/40 transition-all duration-500 hover:scale-105 animate-fade-in hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:from-purple-500/30 group-hover:to-indigo-500/20 transition-all duration-300">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">Perks</div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Student Benefits</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">Exclusive rewards and cashback offers</p>
                  </div>
                </div>
                
                <div className="group relative bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-8 hover:bg-card/90 hover:border-purple-200/40 transition-all duration-500 hover:scale-105 animate-fade-in hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:from-blue-500/30 group-hover:to-cyan-500/20 transition-all duration-300">
                      <span className="text-3xl">🌍</span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">Global</div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Study Abroad Ready</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">International features and support</p>
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
                title="Student Chequing Account Comparison"
                description="Compare student chequing accounts designed for university and college students"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentChequing;
