
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const USDGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">USD GIC Rates</h1>
        <p className="text-muted-foreground">
          US Dollar guaranteed investment certificates for currency diversification.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default USDGIC;
