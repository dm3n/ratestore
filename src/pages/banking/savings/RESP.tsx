
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RESPAccounts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">RESP Accounts</h1>
        <p className="text-muted-foreground">
          Registered Education Savings Plans to save for your child's education.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default RESPAccounts;
