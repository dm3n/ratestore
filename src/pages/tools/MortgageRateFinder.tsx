import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RateSheetCalculator } from "@/components/RateSheetCalculator";

const MortgageRateFinder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Find Your Perfect Mortgage Rate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get personalized mortgage rate recommendations based on your specific situation. 
            Our advanced matching system finds the best rates from our comprehensive database.
          </p>
        </div>

        <RateSheetCalculator />
      </main>

      <Footer />
    </div>
  );
};

export default MortgageRateFinder;