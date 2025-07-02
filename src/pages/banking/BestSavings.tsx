
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BestSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Best Savings Accounts</h1>
        <p className="text-muted-foreground">
          Compare the best savings accounts in Canada with competitive interest rates.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BestSavings;
