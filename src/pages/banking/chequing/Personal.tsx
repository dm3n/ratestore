
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PersonalChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Personal Chequing Accounts</h1>
        <p className="text-muted-foreground">
          Find the right personal chequing account for your everyday banking needs.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalChequing;
