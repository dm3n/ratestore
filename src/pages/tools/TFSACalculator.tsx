
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TFSACalculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">TFSA Contribution Room Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your available TFSA contribution room.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TFSACalculator;
