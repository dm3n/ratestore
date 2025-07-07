
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";

const HighInterestSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Best High Interest Savings Accounts in Canada
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Compare the highest interest savings rates from Canada's top banks and credit unions. 
                Find the perfect account to maximize your savings growth.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator
                accountType="savings"
                title="High Interest Savings Account Calculator"
                description="Compare interest rates, calculate earnings, and find the best high-yield savings account for your needs"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HighInterestSavings;
