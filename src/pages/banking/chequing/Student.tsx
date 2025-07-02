
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const StudentChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Student Chequing Accounts</h1>
        <p className="text-muted-foreground">
          Special chequing accounts for students with reduced fees and great benefits.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default StudentChequing;
