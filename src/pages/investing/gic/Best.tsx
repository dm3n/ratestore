
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GICRateEngine } from "@/components/GICRateEngine";

const BestGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <GICRateEngine 
                title="Best GIC Rates in Canada"
                subtitle="Find the highest guaranteed investment certificate rates from Canada's top financial institutions"
                showTypeFilter={true}
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

export default BestGIC;
