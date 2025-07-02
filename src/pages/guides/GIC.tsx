
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const GICGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">GIC Basics</h1>
        <p className="text-muted-foreground">
          Understanding Guaranteed Investment Certificates and how they work.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default GICGuide;
