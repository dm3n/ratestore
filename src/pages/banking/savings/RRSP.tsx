
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RRSPSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">RRSP Savings Accounts</h1>
        <p className="text-muted-foreground">
          Registered retirement savings plans to help you save for retirement.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RRSPSavings;
