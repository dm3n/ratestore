
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BestGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Best GIC Rates</h1>
        <p className="text-muted-foreground">
          Find the best guaranteed investment certificate rates in Canada.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BestGIC;
