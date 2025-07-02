
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">Terms of Use</CardTitle>
                  <CardDescription>
                    Terms and conditions for using our financial services platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <div className="text-muted-foreground">
                    <p className="mb-4">Our terms of use are currently being finalized and will be available soon.</p>
                    <p>These terms will outline the conditions for using our platform and services.</p>
                  </div>
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

export default Terms;
