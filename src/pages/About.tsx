import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Shield, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Active Users", value: "1M+", icon: Users },
    { label: "Loans Processed", value: "$50B+", icon: TrendingUp },
    { label: "Years Experience", value: "15+", icon: Clock },
    { label: "Lender Partners", value: "500+", icon: Award },
  ];

  const values = [
    {
      title: "Transparency",
      description: "Clear, upfront pricing with no hidden fees or surprises.",
      icon: Shield,
    },
    {
      title: "Speed",
      description: "Fast approvals and streamlined processes to get you into your home quickly.",
      icon: Clock,
    },
    {
      title: "Support",
      description: "Expert guidance from our team of mortgage professionals every step of the way.",
      icon: Users,
    },
    {
      title: "Trust",
      description: "Thousands of satisfied customers and industry-leading security standards.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                About RateStore
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Your Trusted Mortgage Partner
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                For over 15 years, RateStore has been helping Americans find the best mortgage rates and achieve their homeownership dreams. We've processed over $50 billion in loans and helped more than 1 million families.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Get Started Today <CheckCircle className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground">How we became America's trusted mortgage platform</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Founded on Trust and Innovation</h3>
                  <p className="text-muted-foreground mb-4">
                    RateStore was founded in 2009 with a simple mission: make the mortgage process transparent, fast, and affordable for everyone. We saw how complicated and stressful getting a mortgage could be, and we knew there had to be a better way.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Today, we're proud to be one of the most trusted names in mortgage lending, with cutting-edge technology and a team of experts dedicated to helping you find the perfect loan.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">A+ Better Business Bureau Rating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Licensed in all 50 states</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Award-winning customer service</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop&crop=center" 
                    alt="Our team"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Our headquarters in Austin, Texas, where innovation meets expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardHeader>
                    <value.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
