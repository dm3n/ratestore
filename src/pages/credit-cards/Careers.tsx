
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Careers at RateStore
              </h1>
              <p className="text-lg text-muted-foreground">
                Join our team and help Canadians make better financial decisions
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Work With Us</CardTitle>
                  <CardDescription>
                    We're always looking for talented individuals to join our mission of helping Canadians find the best financial products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Check back soon for open positions or reach out to us directly if you're interested in joining our team.</p>
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

export default Careers;
