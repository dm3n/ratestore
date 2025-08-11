
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdminRateSheetManager } from "@/components/AdminRateSheetManager";

const RateManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Rate Sheet Management</h1>
              <p className="text-muted-foreground mt-2">
                Manage the canonical mortgage rate sheet used across calculators. Changes are live immediately.
              </p>
            </div>
            
            <AdminRateSheetManager />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RateManagement;
