
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PermanentLifeInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Permanent Life Insurance</h1>
        <p className="text-muted-foreground">
          Whole life and universal life insurance for lifelong protection.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PermanentLifeInsurance;
