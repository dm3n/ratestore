
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const YouthChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Youth Chequing Accounts</h1>
        <p className="text-muted-foreground">
          Banking accounts designed for young people to learn financial responsibility.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default YouthChequing;
