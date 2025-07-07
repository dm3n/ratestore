import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";

const PreApproval = () => {
  const [formData, setFormData] = useState({
    purchasePrice: "",
    downPayment: "",
    annualIncome: "",
    monthlyDebt: "",
    employmentType: "",
    creditScore: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pre-approval application submitted:", formData);
    // Handle form submission
  };

  const benefits = [
    {
      icon: Clock,
      title: "Get Approved in Minutes",
      description: "Fast, streamlined application process with instant pre-approval decisions."
    },
    {
      icon: Shield,
      title: "Rate Protection",
      description: "Lock in your rate for up to 120 days while you shop for your home."
    },
    {
      icon: TrendingUp,
      title: "Strengthen Your Offer",
      description: "Show sellers you're a serious buyer with pre-approved financing."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Get Pre-Approved Today
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Secure your mortgage pre-approval in minutes and shop with confidence. 
                Know exactly how much you can afford before you start house hunting.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Get Pre-Approved?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Pre-approval gives you the advantage in today's competitive market.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardTitle className="text-2xl font-bold">Mortgage Pre-Approval Application</CardTitle>
                  <CardDescription>
                    Complete this form to get your pre-approval in minutes. All information is secure and confidential.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Property Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Property Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="purchasePrice">Purchase Price</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="purchasePrice"
                              type="text"
                              value={formData.purchasePrice}
                              onChange={(e) => handleInputChange("purchasePrice", e.target.value)}
                              className="pl-8"
                              placeholder="500,000"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="downPayment">Down Payment</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="downPayment"
                              type="text"
                              value={formData.downPayment}
                              onChange={(e) => handleInputChange("downPayment", e.target.value)}
                              className="pl-8"
                              placeholder="100,000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Financial Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Financial Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="annualIncome">Annual Income</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="annualIncome"
                              type="text"
                              value={formData.annualIncome}
                              onChange={(e) => handleInputChange("annualIncome", e.target.value)}
                              className="pl-8"
                              placeholder="75,000"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="monthlyDebt">Monthly Debt Payments</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                            <Input
                              id="monthlyDebt"
                              type="text"
                              value={formData.monthlyDebt}
                              onChange={(e) => handleInputChange("monthlyDebt", e.target.value)}
                              className="pl-8"
                              placeholder="500"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employmentType">Employment Type</Label>
                          <Select value={formData.employmentType} onValueChange={(value) => handleInputChange("employmentType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select employment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full-time Employee</SelectItem>
                              <SelectItem value="self-employed">Self-employed</SelectItem>
                              <SelectItem value="part-time">Part-time Employee</SelectItem>
                              <SelectItem value="contract">Contract Worker</SelectItem>
                              <SelectItem value="retired">Retired</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="creditScore">Credit Score Range</Label>
                          <Select value={formData.creditScore} onValueChange={(value) => handleInputChange("creditScore", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select credit score range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="excellent">Excellent (750+)</SelectItem>
                              <SelectItem value="good">Good (650-749)</SelectItem>
                              <SelectItem value="fair">Fair (550-649)</SelectItem>
                              <SelectItem value="poor">Poor (Below 550)</SelectItem>
                              <SelectItem value="unknown">I don't know</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Submit Pre-Approval Application
                    </Button>
                  </form>
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

export default PreApproval;