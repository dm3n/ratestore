
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MotorcycleInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Motorcycle Insurance</h1>
        <p className="text-muted-foreground">
          Specialized insurance coverage for motorcycles and riders.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default MotorcycleInsurance;
