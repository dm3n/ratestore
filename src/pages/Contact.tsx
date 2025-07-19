
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Clock, Shield, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
                <MessageCircle className="h-4 w-4" />
                Get Expert Financial Guidance
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to take control of your financial future? Our team of experts is here to guide you through every step of your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Choose Your Preferred Way to Connect</h2>
                <p className="text-muted-foreground">We're available through multiple channels to serve you better</p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-4">Speak directly with our experts</p>
                    <p className="font-semibold text-primary text-lg">1-800-RATESTORE</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-4">Get detailed responses to your questions</p>
                    <p className="font-semibold text-primary">support@ratestore.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                    <p className="text-muted-foreground mb-4">Instant help when you need it</p>
                    <Button variant="outline" className="mt-2">Start Chat</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-2 items-start">
                {/* Form */}
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                    <p className="text-muted-foreground text-lg">
                      Have a specific question? Fill out the form below and we'll get back to you with personalized advice.
                    </p>
                  </div>

                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="John" 
                            className="h-12 border-2 focus:border-primary/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Doe" 
                            className="h-12 border-2 focus:border-primary/50 transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          className="h-12 border-2 focus:border-primary/50 transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          className="h-12 border-2 focus:border-primary/50 transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your financial goals or questions..." 
                          className="min-h-32 border-2 focus:border-primary/50 transition-colors resize-none"
                        />
                      </div>
                      
                      <Button className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all">
                        Send Message
                      </Button>
                      
                      <p className="text-sm text-muted-foreground text-center">
                        We'll respond within 24 hours during business days
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Info Sidebar */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">Trusted by Thousands</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Join over 50,000 Canadians who trust us with their financial decisions. Our expert team has helped save millions in interest and fees.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">Quick Response Time</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Our dedicated support team typically responds to inquiries within 2-4 hours during business days.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">Expert Team</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Our certified financial advisors have decades of combined experience in Canadian banking and finance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-muted/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">Visit Our Office</h3>
                      </div>
                      <address className="text-muted-foreground not-italic">
                        123 Financial Street<br />
                        Toronto, ON M5V 3A8<br />
                        Canada
                      </address>
                      <p className="text-sm text-muted-foreground mt-3">
                        By appointment only
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-12">
                Find quick answers to common questions about our services
              </p>
              
              <div className="grid gap-4 text-left">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">How quickly can I get a quote?</h3>
                    <p className="text-muted-foreground">
                      Most quotes are generated instantly through our online tools. For complex situations, our team will provide a detailed quote within 24 hours.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Is your service really free?</h3>
                    <p className="text-muted-foreground">
                      Yes! Our comparison tools and expert advice are completely free. We're compensated by our financial partners when you choose their products.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do you work with all major banks?</h3>
                    <p className="text-muted-foreground">
                      We partner with over 50 financial institutions across Canada, including all major banks, credit unions, and alternative lenders.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
