
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AutoInsuranceQuotes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Auto Insurance Quotes</h1>
        <p className="text-muted-foreground">
          Get competitive auto insurance quotes from top Canadian providers.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AutoInsuranceQuotes;
