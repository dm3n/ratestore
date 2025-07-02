
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TFSASavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">TFSA Savings Accounts</h1>
        <p className="text-muted-foreground">
          Tax-free savings accounts to help you save without paying taxes on your earnings.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TFSASavings;
