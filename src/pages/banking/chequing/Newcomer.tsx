
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";

const NewcomerChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              {/* Welcome Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium animate-fade-in">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Welcome to Canada
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
                  Banking Made Simple<br />
                  <span className="text-3xl md:text-5xl text-primary">for New Canadians</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Start your Canadian journey with confidence. Compare newcomer chequing accounts designed specifically for new residents, complete with settlement support and multilingual service.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1">
                    <span className="flex items-center gap-2">
                      Find Your Account
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  <button className="group bg-background border border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Get Expert Help
                    </span>
                  </button>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Free Banking</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Up to 12 months of free banking with no monthly fees for newcomers</p>
                </div>

                <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Settlement Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Dedicated newcomer specialists to help you navigate Canadian banking</p>
                </div>

                <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Multilingual Service</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Get help in your preferred language with 24/7 multilingual support</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Banking Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">100k+</div>
                  <div className="text-xs text-muted-foreground">New Canadians</div>
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
                title="Newcomer Chequing Account Comparison"
                description="Compare newcomer chequing accounts with special benefits for new Canadians"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewcomerChequing;
