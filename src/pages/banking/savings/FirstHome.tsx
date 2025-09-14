
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Home, Banknote, TrendingUp, Shield } from "lucide-react";

const FirstHomeSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-white/5 to-accent/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                <Home className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best First Home Savings Account 
                <span className="block text-accent-foreground/90">(FHSA) in Canada</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Compare FHSA rates and save for your first home with the best of both worlds - 
                <span className="font-semibold text-accent-foreground"> tax-deductible contributions</span> AND 
                <span className="font-semibold text-accent-foreground"> tax-free withdrawals</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Banknote className="w-8 h-8 text-green-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$40,000</div>
                  <div className="text-white/80 font-medium">Lifetime Contribution Limit</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Tax Deductible</div>
                  <div className="text-white/80 font-medium">Annual Contributions</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-orange-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Tax-Free</div>
                  <div className="text-white/80 font-medium">Home Purchase Withdrawals</div>
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
                accountType="fhsa"
                title="First Home Savings Account Calculator"
                description="Compare FHSA rates and calculate tax-advantaged savings for your first home purchase"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FirstHomeSavings;
