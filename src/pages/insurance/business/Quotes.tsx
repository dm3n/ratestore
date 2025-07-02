
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BusinessInsuranceQuotes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Business Insurance Quotes</h1>
        <p className="text-muted-foreground">
          Comprehensive business insurance solutions to protect your company.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessInsuranceQuotes;
