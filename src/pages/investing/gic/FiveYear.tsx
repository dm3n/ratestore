
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GICRateEngine } from "@/components/GICRateEngine";

const FiveYearGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <GICRateEngine 
                title="Best 5-Year GIC Rates"
                subtitle="Secure long-term guaranteed returns with 5-year investment certificates from trusted Canadian institutions"
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

export default FiveYearGIC;
