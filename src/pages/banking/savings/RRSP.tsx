
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { PiggyBank, TrendingUp, Shield, Target } from "lucide-react";

const RRSPSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                <PiggyBank className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best RRSP Savings Accounts 
                <span className="block text-white/95">in Canada</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Compare RRSP savings account rates and plan your retirement with tax-deductible contributions. 
                <span className="font-semibold text-white"> Find the best rates to grow your retirement savings.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Tax Deductible</div>
                  <div className="text-white/80 font-medium">Annual Contributions</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-green-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Tax-Free</div>
                  <div className="text-white/80 font-medium">Investment Growth</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-purple-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Retirement</div>
                  <div className="text-white/80 font-medium">Strategic Planning</div>
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
                accountType="rrsp"
                title="RRSP Savings Account Calculator"
                description="Compare RRSP savings rates, calculate tax-deferred growth, and plan your retirement savings strategy"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RRSPSavings;
