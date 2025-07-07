
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsRatesCalculator } from "@/components/SavingsRatesCalculator";

const YouthSavings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Best Youth Savings Accounts in Canada
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Compare youth savings account rates and help young Canadians start their financial journey. 
                Find accounts with no fees and educational resources.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">No Fees</div>
                  <div className="text-sm text-gray-600">Monthly Charges</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">Education</div>
                  <div className="text-sm text-gray-600">Financial Literacy</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-yellow-600">Under 18</div>
                  <div className="text-sm text-gray-600">Age Requirement</div>
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
                accountType="youth"
                title="Youth Savings Account Calculator"
                description="Compare youth savings rates and help young people learn about compound interest and saving"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouthSavings;
