
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LifeInsuranceQuotes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Life Insurance Quotes</h1>
        <p className="text-muted-foreground">
          Get life insurance quotes to protect your family's financial future.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LifeInsuranceQuotes;
