
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Disclosure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Disclosures
              </h1>
              <p className="text-lg text-muted-foreground">
                Important information about our services and partnerships
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Affiliate Relationships</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>RateStore may receive compensation from financial institutions when users click on certain links or apply for products through our platform. This compensation helps us maintain and improve our services.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rate Information</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>Interest rates and terms displayed on RateStore are subject to change without notice. Rates shown are for informational purposes and may not reflect the actual rate you receive when applying for a product.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calculator Limitations</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>Our financial calculators provide estimates based on the information you provide. Results are for illustrative purposes only and should not be considered as guaranteed outcomes or financial advice.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Sources</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>Rate information is collected from publicly available sources and direct partnerships with financial institutions. While we strive for accuracy, rates may change frequently and should be verified directly with the institution.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Not Financial Advice</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>RateStore does not provide personalized financial advice. Information on our platform is educational and should not replace consultation with qualified financial professionals.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclosure;
