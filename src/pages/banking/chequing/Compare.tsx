
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CompareChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Compare All Chequing Accounts</h1>
        <p className="text-muted-foreground">
          Compare chequing accounts from all major Canadian financial institutions.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CompareChequing;
