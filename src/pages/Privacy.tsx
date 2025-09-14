
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Database, Share2, Lock, Cookie, Calendar, Mail, FileText, Users, AlertTriangle } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      id: "overview",
      title: "1. Privacy Overview",
      icon: <Eye className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            At RateStore, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Our Commitment</h4>
            <p className="text-sm text-muted-foreground">
              We will never sell your personal information to third parties. Your trust is our priority, and we are committed to maintaining the highest standards of data protection.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "collection",
      title: "2. Information We Collect",
      icon: <Database className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Personal Information
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name, email address, and phone number</li>
              <li>Account credentials and profile information</li>
              <li>Communication preferences</li>
              <li>Support inquiries and feedback</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Financial Information
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Calculator inputs (income, expenses, loan amounts)</li>
              <li>Rate preferences and search history</li>
              <li>Financial goals and interests</li>
            </ul>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mt-3">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                <strong>Note:</strong> We do not collect or store sensitive financial data like bank account numbers, credit card information, or SSN.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Usage Information
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Pages visited, time spent, and click patterns</li>
              <li>Device information (browser, OS, screen size)</li>
              <li>IP address and geographic location</li>
              <li>Referring websites and search terms</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We use the information we collect for the following purposes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Service Delivery</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Provide rate comparisons</li>
                <li>• Process calculator requests</li>
                <li>• Maintain user accounts</li>
                <li>• Deliver personalized content</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Communication</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Send service updates</li>
                <li>• Respond to inquiries</li>
                <li>• Share relevant financial insights</li>
                <li>• Notify about rate changes</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Improvement</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Analyze usage patterns</li>
                <li>• Enhance user experience</li>
                <li>• Develop new features</li>
                <li>• Fix technical issues</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Legal Compliance</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Meet regulatory requirements</li>
                <li>• Prevent fraud and abuse</li>
                <li>• Enforce our terms</li>
                <li>• Protect user safety</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "sharing",
      title: "4. Information Sharing and Disclosure",
      icon: <Share2 className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">We Never Sell Your Data</h4>
            <p className="text-sm text-green-700 dark:text-green-400">
              We do not and will never sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </div>
          
          <p className="text-muted-foreground">
            We may share your information only in the following limited circumstances:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 border rounded-lg">
              <h5 className="font-medium mb-2">Service Providers</h5>
              <p className="text-sm text-muted-foreground">
                With trusted third-party service providers who help us operate our platform (hosting, analytics, customer support). These providers are contractually obligated to protect your data.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h5 className="font-medium mb-2">Legal Requirements</h5>
              <p className="text-sm text-muted-foreground">
                When required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h5 className="font-medium mb-2">Business Transfers</h5>
              <p className="text-sm text-muted-foreground">
                In connection with a merger, acquisition, or sale of assets, subject to appropriate data protection commitments.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "security",
      title: "5. Data Security",
      icon: <Lock className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We implement comprehensive security measures to protect your personal information:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <Shield className="h-6 w-6 text-primary mb-2" />
              <h5 className="font-medium mb-2">Encryption</h5>
              <p className="text-sm text-muted-foreground">
                All data is encrypted in transit using SSL/TLS and at rest using industry-standard encryption.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <Lock className="h-6 w-6 text-primary mb-2" />
              <h5 className="font-medium mb-2">Access Controls</h5>
              <p className="text-sm text-muted-foreground">
                Strict access controls ensure only authorized personnel can access your data when necessary.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <AlertTriangle className="h-6 w-6 text-primary mb-2" />
              <h5 className="font-medium mb-2">Monitoring</h5>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring and regular security audits to identify and address potential vulnerabilities.
              </p>
            </div>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Security Incident Response</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              In the unlikely event of a data breach, we will notify affected users within 72 hours and take immediate steps to secure the data and prevent further incidents.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "cookies",
      title: "6. Cookies and Tracking",
      icon: <Cookie className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We use cookies and similar tracking technologies to enhance your experience and gather usage analytics:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 border rounded-lg">
              <h5 className="font-medium mb-2">Essential Cookies</h5>
              <p className="text-sm text-muted-foreground">
                Required for basic site functionality, user authentication, and security. These cannot be disabled.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h5 className="font-medium mb-2">Analytics Cookies</h5>
              <p className="text-sm text-muted-foreground">
                Help us understand how users interact with our site to improve our services. You can opt out of these.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h5 className="font-medium mb-2">Preference Cookies</h5>
              <p className="text-sm text-muted-foreground">
                Remember your settings and preferences to provide a personalized experience.
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            You can manage your cookie preferences through your browser settings or our cookie consent banner.
          </p>
        </div>
      )
    },
    {
      id: "rights",
      title: "7. Your Privacy Rights",
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You have the following rights regarding your personal information:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Access & Portability</h5>
              <p className="text-sm text-muted-foreground">
                Request a copy of your personal data in a portable format.
              </p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Correction</h5>
              <p className="text-sm text-muted-foreground">
                Update or correct inaccurate personal information.
              </p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Deletion</h5>
              <p className="text-sm text-muted-foreground">
                Request deletion of your personal data (subject to legal requirements).
              </p>
            </div>
            
            <div className="p-4 rounded-lg border bg-card">
              <h5 className="font-medium mb-2">Opt-Out</h5>
              <p className="text-sm text-muted-foreground">
                Unsubscribe from marketing communications at any time.
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            To exercise these rights, please contact us at privacy@ratestore.com. We will respond within 30 days.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      title: "8. Policy Updates",
      icon: <Calendar className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
          </p>
          <p className="text-muted-foreground">
            When we make material changes, we will notify you by email or through a prominent notice on our website at least 30 days before the changes take effect.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Stay Informed</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              We recommend reviewing this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </div>
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
                Privacy & Security
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Your privacy is our priority. Learn how we collect, use, and protect your personal information.
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
              {/* Quick Summary */}
              <Card className="mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-center">Privacy at a Glance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold mb-2">We Never Sell Your Data</h3>
                      <p className="text-sm text-muted-foreground">Your personal information is never sold to third parties</p>
                    </div>
                    <div className="text-center">
                      <Lock className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold mb-2">Bank-Grade Security</h3>
                      <p className="text-sm text-muted-foreground">Industry-leading encryption and security measures</p>
                    </div>
                    <div className="text-center">
                      <Eye className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-semibold mb-2">Full Transparency</h3>
                      <p className="text-sm text-muted-foreground">Clear explanation of what we collect and why</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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

              {/* Privacy Sections */}
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
                    <h3 className="text-xl font-semibold mb-4">Have Privacy Questions?</h3>
                    <p className="text-muted-foreground mb-6">
                      Our privacy team is here to help. Contact us with any questions about how we handle your data.
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">Email: privacy@ratestore.com</p>
                      <p className="text-sm text-muted-foreground">We respond to privacy inquiries within 24 hours</p>
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

export default Privacy;
