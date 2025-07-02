
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RoboAdvisors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Best Robo-Advisors 2025</h1>
        <p className="text-muted-foreground">
          Compare Canada's top robo-advisors for automated investment management.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RoboAdvisors;
