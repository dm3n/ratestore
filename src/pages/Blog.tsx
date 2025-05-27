
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Maximize Your Savings Account Returns",
    excerpt: "Discover strategies to get the most out of your savings with high-yield accounts and smart banking choices.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Savings",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding Compound Interest: Your Money's Best Friend",
    excerpt: "Learn how compound interest works and why starting early can dramatically impact your financial future.",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Investment",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Personal Loan vs Credit Card: Which Is Right for You?",
    excerpt: "Compare the pros and cons of personal loans and credit cards to make the best borrowing decision.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    category: "Loans",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Financial Insights Blog
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert tips, market insights, and financial guidance to help you make smarter money decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-2xl hover:text-primary transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read More <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
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

export default Blog;
