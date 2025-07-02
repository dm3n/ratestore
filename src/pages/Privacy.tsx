
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">Privacy Policy</CardTitle>
                  <CardDescription>
                    Learn how we collect, use, and protect your personal information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <div className="text-muted-foreground">
                    <p className="mb-4">This privacy policy is currently being drafted and will be available soon.</p>
                    <p>We are committed to protecting your privacy and will provide comprehensive details about our data practices.</p>
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

export default Privacy;
