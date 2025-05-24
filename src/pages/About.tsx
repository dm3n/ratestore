
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Shield, Phone, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Est. 2018
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                About RateStore
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We're on a mission to make home financing transparent, accessible, and stress-free for everyone.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Mission */}
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  To empower homeowners and homebuyers with the tools, information, and access to lenders they need to make informed decisions about their mortgage.
                </p>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">1M+</CardTitle>
                    <CardDescription>Happy Customers</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">500+</CardTitle>
                    <CardDescription>Lending Partners</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">$50B+</CardTitle>
                    <CardDescription>Loans Facilitated</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Story */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Story</h3>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2018, RateStore began with a simple observation: the mortgage process was too complicated and opaque for most people.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We set out to change that by creating a platform that puts transparency first, giving you access to real rates from real lenders without the runaround.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we're proud to be a trusted resource for over 1 million homeowners and homebuyers across the country.
                  </p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Our Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <div>
                          <strong>Transparency:</strong> No hidden fees or surprises
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <div>
                          <strong>Simplicity:</strong> Making complex processes easy
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <div>
                          <strong>Trust:</strong> Your information is always secure
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Have questions? We're here to help.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">(555) 123-4567</div>
                        <div className="text-sm text-muted-foreground">Mon-Fri 8AM-8PM EST</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">hello@ratestore.com</div>
                        <div className="text-sm text-muted-foreground">24/7 email support</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">San Francisco, CA</div>
                        <div className="text-sm text-muted-foreground">Headquarters</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full md:w-auto">Contact Our Team</Button>
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

export default About;
