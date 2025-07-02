
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BestRESP = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Best RESPs</h1>
        <p className="text-muted-foreground">
          Compare the best Registered Education Savings Plans for your child's future.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BestRESP;
