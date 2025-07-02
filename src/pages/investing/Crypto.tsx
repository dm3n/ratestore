
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Crypto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Best Crypto Exchanges 2025</h1>
        <p className="text-muted-foreground">
          Compare the top cryptocurrency exchanges available to Canadians.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Crypto;
