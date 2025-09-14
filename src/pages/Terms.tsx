
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Scale, FileText, AlertTriangle, Mail, Calendar } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            By accessing, browsing, or using the RateStore website ("Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy.
          </p>
          <p className="text-muted-foreground">
            If you do not agree with any part of these terms, you must not use our Service. These terms apply to all visitors, users, and others who access or use the Service.
          </p>
        </div>
      )
    },
    {
      id: "eligibility",
      title: "2. Eligibility and Account Registration",
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You must be at least 18 years old and have the legal capacity to enter into contracts to use our Service. By creating an account, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>All information you provide is accurate, current, and complete</li>
            <li>You will maintain the accuracy of such information</li>
            <li>You are responsible for safeguarding your account credentials</li>
            <li>You will notify us immediately of any unauthorized use of your account</li>
          </ul>
        </div>
      )
    },
    {
      id: "license",
      title: "3. License to Use",
      icon: <Scale className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Service for your personal, non-commercial use.
          </p>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <h4 className="font-semibold text-destructive mb-2">You may NOT:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm text-destructive">
              <li>Modify, copy, distribute, or create derivative works</li>
              <li>Use automated systems to access the Service</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the Service or servers</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "financial-info",
      title: "4. Financial Information and Calculators",
      icon: <AlertTriangle className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Important Disclaimer</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              RateStore provides financial rate comparisons and calculators for informational purposes only. This information should NOT be considered as financial advice.
            </p>
          </div>
          <p className="text-muted-foreground">
            All rates, calculations, and financial information displayed on our platform are estimates and may not reflect actual rates available to you. Interest rates are subject to change without notice and may vary based on your individual circumstances.
          </p>
          <p className="text-muted-foreground">
            Always consult with qualified financial professionals before making financial decisions. We strongly recommend verifying all rates and terms directly with financial institutions.
          </p>
        </div>
      )
    },
    {
      id: "content",
      title: "5. Content and Intellectual Property",
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            All content on RateStore, including but not limited to text, graphics, logos, images, and software, is our property or that of our licensors and is protected by copyright and other intellectual property laws.
          </p>
          <p className="text-muted-foreground">
            You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
          </p>
        </div>
      )
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, RateStore shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use.
          </p>
          <p className="text-muted-foreground">
            Our total liability for any claim arising out of or relating to these Terms or the Service shall not exceed $100.
          </p>
        </div>
      )
    },
    {
      id: "termination",
      title: "7. Termination",
      icon: <AlertTriangle className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including if you breach these Terms.
          </p>
          <p className="text-muted-foreground">
            Upon termination, your right to use the Service will cease immediately, and any data associated with your account may be deleted.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      title: "8. Changes to Terms",
      icon: <Calendar className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>
          <p className="text-muted-foreground">
            Your continued use of the Service after any changes constitutes acceptance of the new Terms.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">
                Legal Documents
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Terms of Use
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Please read these terms carefully before using our services. Your use of RateStore constitutes acceptance of these terms.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 15, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Table of Contents */}
              <Card className="mb-12 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Table of Contents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors text-sm"
                      >
                        {section.icon}
                        <span>{section.title}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Terms Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <Card key={section.id} id={section.id} className="border-border/50 hover:border-primary/20 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 rounded-lg bg-primary/5 text-primary">
                          {section.icon}
                        </div>
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none dark:prose-invert">
                      {section.content}
                    </CardContent>
                    {index < sections.length - 1 && <Separator className="mx-6" />}
                  </Card>
                ))}
              </div>

              {/* Contact Section */}
              <Card className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/10">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
                    <p className="text-muted-foreground mb-6">
                      If you have any questions about these Terms of Use, please don't hesitate to contact our legal team.
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">Email: legal@ratestore.com</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 2 business days</p>
                    </div>
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
