
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Users } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="h-4 w-4" />
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let's Start a
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Conversation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Have questions about rates, need financial advice, or want to learn more about our services? 
                Our expert team is here to help you make informed financial decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">24h Response Time</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Expert Support</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <Card className="shadow-lg border-0 bg-background/50 backdrop-blur-sm">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Send className="h-6 w-6 text-primary" />
                        Send us a message
                      </CardTitle>
                      <CardDescription className="text-base">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                            <Input 
                              id="firstName" 
                              placeholder="John" 
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                            <Input 
                              id="lastName" 
                              placeholder="Doe" 
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john.doe@example.com" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                          <Input 
                            id="subject" 
                            placeholder="What can we help you with?" 
                            value={formData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us more about your inquiry..." 
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            required
                            className="min-h-32 mt-1" 
                          />
                        </div>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                        >
                          {isSubmitting ? (
                            "Sending Message..."
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                    <p className="text-muted-foreground">
                      Ready to take control of your finances? Our team of financial experts is here to help you navigate 
                      the complex world of rates, loans, and investments.
                    </p>
                  </div>

                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Mail className="h-5 w-5" />
                        </div>
                        Email Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-foreground">support@ratestore.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        For general inquiries and support
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Phone className="h-5 w-5" />
                        </div>
                        Phone Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-foreground">1-800-RATESTORE</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9AM - 5PM EST</p>
                      <p className="text-sm text-muted-foreground">Weekend: 10AM - 3PM EST</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-primary">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MapPin className="h-5 w-5" />
                        </div>
                        Visit Our Office
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-foreground">
                        123 Financial Street<br />
                        Toronto, ON M5V 3A8<br />
                        Canada
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Open for appointments Monday - Friday
                      </p>
                    </CardContent>
                  </Card>

                  {/* FAQ Section */}
                  <Card className="bg-muted/30">
                    <CardHeader>
                      <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="font-medium text-sm">How quickly do you respond?</p>
                        <p className="text-xs text-muted-foreground">We respond to all inquiries within 24 hours during business days.</p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Do you offer free consultations?</p>
                        <p className="text-xs text-muted-foreground">Yes! All initial consultations are completely free with no obligation.</p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Can you help with all types of financial products?</p>
                        <p className="text-xs text-muted-foreground">We specialize in mortgages, credit cards, savings accounts, and investment products.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
