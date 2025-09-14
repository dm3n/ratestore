
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";
import { Star, BookOpen, Shield, Sparkles } from "lucide-react";

const YouthSavings = () => {
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
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best Youth Savings Accounts 
                <span className="block text-white/95">in Canada</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Compare youth savings account rates and help young Canadians start their financial journey. 
                <span className="font-semibold text-white"> Find accounts with no fees and educational resources.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-green-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">No Fees</div>
                  <div className="text-white/80 font-medium">Monthly Account Charges</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Education</div>
                  <div className="text-white/80 font-medium">Financial Literacy Resources</div>
                </div>
                
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-yellow-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Under 18</div>
                  <div className="text-white/80 font-medium">Age Eligibility Requirement</div>
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
                accountType="youth"
                title="Youth Savings Account Calculator"
                description="Compare youth savings rates and help young people learn about compound interest and saving"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthSavings;
