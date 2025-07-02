
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TenantInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Tenant Insurance</h1>
        <p className="text-muted-foreground">
          Protect your belongings and liability as a renter with tenant insurance.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TenantInsurance;
