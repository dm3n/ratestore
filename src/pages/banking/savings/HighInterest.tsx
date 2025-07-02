
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HighInterestSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">High-Interest Savings Accounts</h1>
        <p className="text-muted-foreground">
          Find high-interest savings accounts to maximize your savings growth.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HighInterestSavings;
