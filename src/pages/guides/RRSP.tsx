
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RRSPGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">RRSP Basics</h1>
        <p className="text-muted-foreground">
          Learn about Registered Retirement Savings Plans and retirement planning.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RRSPGuide;
