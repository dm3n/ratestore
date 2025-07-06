
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Join our team to build cutting-edge financial tools and user experiences."
  },
  {
    id: 2,
    title: "Financial Data Analyst",
    department: "Data",
    location: "New York, NY",
    type: "Full-time",
    salary: "$80k - $110k",
    description: "Analyze financial market data to provide insights for our rate comparison platform."
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $90k",
    description: "Help our users achieve their financial goals through exceptional support and guidance."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Join Our Team
              </h1>
              <p className="text-lg text-muted-foreground">
                Help us build the future of financial technology and empower millions to make better financial decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-3 mb-12">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Remote-First</CardTitle>
                    <CardDescription>
                      Work from anywhere with flexible hours and a focus on results.
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Growth Focused</CardTitle>
                    <CardDescription>
                      Continuous learning opportunities and career development support.
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Impact Driven</CardTitle>
                    <CardDescription>
                      Build products that help millions make better financial decisions.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">Open Positions</h2>
                
                {jobOpenings.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <Badge variant="outline" className="mt-2">{job.department}</Badge>
                        </div>
                        <Button asChild>
                          <Link to="/contact">Apply Now</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
