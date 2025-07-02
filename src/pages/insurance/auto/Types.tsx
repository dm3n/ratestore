
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AutoInsuranceTypes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">All Auto Insurance Types</h1>
        <p className="text-muted-foreground">
          Understanding different types of auto insurance coverage available.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AutoInsuranceTypes;
