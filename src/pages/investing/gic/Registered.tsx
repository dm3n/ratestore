
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RegisteredGIC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Registered GICs</h1>
        <p className="text-muted-foreground">
          GICs for your RRSP, TFSA, and other registered accounts.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RegisteredGIC;
