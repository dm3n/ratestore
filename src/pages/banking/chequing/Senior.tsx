
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";

const SeniorChequing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Best Senior Chequing Accounts in Canada
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Compare senior chequing accounts with special benefits and discounted fees for Canadians 60+. 
                Enjoy personalized service and senior-focused features.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">60+</div>
                  <div className="text-sm text-gray-600">Age Requirement</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">Discounts</div>
                  <div className="text-sm text-gray-600">Senior Benefits</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-teal-600">Personal</div>
                  <div className="text-sm text-gray-600">Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <SavingsRatesCalculator
                accountType="chequing"
                title="Senior Chequing Account Comparison"
                description="Compare senior chequing accounts with special benefits for Canadians 60 and over"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SeniorChequing;
