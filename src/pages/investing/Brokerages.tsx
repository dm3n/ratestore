
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Brokerages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Best Online Brokerages 2025</h1>
        <p className="text-muted-foreground">
          Find the best online brokerages for self-directed investing in Canada.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Brokerages;
