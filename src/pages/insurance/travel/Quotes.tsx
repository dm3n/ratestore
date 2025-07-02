
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TravelInsuranceQuotes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Travel Insurance Quotes</h1>
        <p className="text-muted-foreground">
          Get travel insurance quotes to protect yourself while traveling.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TravelInsuranceQuotes;
