
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FiveYearGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">5-Year GIC Rates</h1>
        <p className="text-muted-foreground">
          Long-term guaranteed investment certificates for secure returns.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default FiveYearGIC;
