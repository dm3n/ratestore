
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { GraduationCap, Gift, TrendingUp, Shield } from "lucide-react";

const RESPSavings = () => {
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
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best RESP Savings Accounts 
                <span className="block text-white/95">in Canada</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Compare RESP savings account rates and maximize government grants for your child's education. 
                <span className="font-semibold text-white"> Get up to $7,200 in free government money.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Gift className="w-8 h-8 text-green-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$7,200</div>
                  <div className="text-white/80 font-medium">Max Government Grants</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">20%</div>
                  <div className="text-white/80 font-medium">CESG Contribution Match</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-purple-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Tax-Free</div>
                  <div className="text-white/80 font-medium">Investment Growth</div>
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
                accountType="resp"
                title="RESP Savings Account Calculator"
                description="Compare RESP savings rates, factor in government grants, and plan your child's education savings"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RESPSavings;
