
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LandlordInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Landlord Insurance</h1>
        <p className="text-muted-foreground">
          Insurance protection for rental property owners and landlords.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordInsurance;
