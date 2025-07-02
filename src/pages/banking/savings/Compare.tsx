
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CompareSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Compare All Savings Accounts</h1>
        <p className="text-muted-foreground">
          Compare savings accounts from all major Canadian banks and credit unions.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CompareSavings;
