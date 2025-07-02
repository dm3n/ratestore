
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const OneYearGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">1-Year GIC Rates</h1>
        <p className="text-muted-foreground">
          Compare 1-year guaranteed investment certificate rates from top providers.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default OneYearGIC;
