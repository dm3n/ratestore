
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TFSAGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">TFSA Basics</h1>
        <p className="text-muted-foreground">
          Everything you need to know about Tax-Free Savings Accounts.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TFSAGuide;
