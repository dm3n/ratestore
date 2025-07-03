
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GICRateEngine } from "@/components/GICRateEngine";

const USDGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <GICRateEngine 
                title="USD GIC Rates"
                subtitle="Diversify your portfolio with US Dollar guaranteed investment certificates"
                filterType="usd"
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

export default USDGIC;
