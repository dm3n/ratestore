
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HomeInsuranceQuotes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Home Insurance Quotes</h1>
        <p className="text-muted-foreground">
          Get home insurance quotes to protect your property and belongings.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HomeInsuranceQuotes;
