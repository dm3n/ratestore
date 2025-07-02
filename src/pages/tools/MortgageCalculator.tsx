
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MortgageCalculator as Calculator } from "@/components/MortgageCalculator";

const MortgageCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Calculator />
      </main>
      <Footer />
    </div>
  );
};

export default MortgageCalculator;
