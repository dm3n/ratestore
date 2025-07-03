
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GICRateEngine } from "@/components/GICRateEngine";

const TFSAGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <GICRateEngine 
                title="TFSA GIC Rates"
                subtitle="Maximize your tax-free savings with GICs in your Tax-Free Savings Account"
                filterType="tfsa"
                showTypeFilter={false}
                showLocationFilter={true}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TFSAGIC;
