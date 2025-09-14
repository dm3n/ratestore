
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";

const PersonalChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-28">
          <div className="absolute inset-0 opacity-40">
            <svg width="60" height="60" viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="4" fill="hsl(var(--primary))" fillOpacity="0.03" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Most Popular Choice
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-8 leading-tight animate-fade-in">
                Personal Chequing
                <span className="block text-4xl md:text-6xl text-primary">Made Simple</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Discover chequing accounts that adapt to your lifestyle. Compare features, fees, and benefits 
                to find the perfect banking partner for your everyday needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                    <div className="text-sm text-muted-foreground font-medium">Monthly Fees Available</div>
                    <p className="text-xs text-muted-foreground mt-2">Many no-fee options to choose from</p>
                  </div>
                </div>
                
                <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">Unlimited</div>
                    <div className="text-sm text-muted-foreground font-medium">Transaction Options</div>
                    <p className="text-xs text-muted-foreground mt-2">Debit, online, and mobile banking</p>
                  </div>
                </div>
                
                <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground font-medium">Digital Banking</div>
                    <p className="text-xs text-muted-foreground mt-2">Mobile apps and online access</p>
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
                title="Personal Chequing Account Comparison"
                description="Compare chequing account fees, features, and find the best account for your daily banking"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PersonalChequing;
