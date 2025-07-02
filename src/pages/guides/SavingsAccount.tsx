
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SavingsAccountGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">What is a Savings Account</h1>
        <p className="text-muted-foreground">
          Learn about savings accounts and how they can help you grow your money.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SavingsAccountGuide;
