
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SeniorChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Senior Chequing Accounts</h1>
        <p className="text-muted-foreground">
          Chequing accounts with special benefits and reduced fees for seniors.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SeniorChequing;
