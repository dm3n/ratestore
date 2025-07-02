
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NewcomerChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Newcomer Chequing Accounts</h1>
        <p className="text-muted-foreground">
          Banking solutions designed specifically for newcomers to Canada.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default NewcomerChequing;
