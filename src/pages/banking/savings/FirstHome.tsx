
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FirstHomeSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">First Home Savings Accounts</h1>
        <p className="text-muted-foreground">
          Save for your first home with tax-advantaged First Home Savings Accounts.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default FirstHomeSavings;
