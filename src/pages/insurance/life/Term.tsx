
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermLifeInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Term Life Insurance</h1>
        <p className="text-muted-foreground">
          Affordable term life insurance coverage for temporary protection needs.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermLifeInsurance;
