
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Maximize Your Savings Account Returns",
    excerpt: "Discover strategies to get the most out of your savings with high-yield accounts and smart banking choices.",
    content: `
      <p>In today's financial landscape, making your money work harder for you is more important than ever. While traditional savings accounts offer security and liquidity, there are several strategies you can employ to maximize your returns without sacrificing peace of mind.</p>
      
      <h2>1. Choose High-Yield Savings Accounts</h2>
      <p>The first and most straightforward way to increase your savings returns is to move your money to a high-yield savings account. These accounts typically offer interest rates that are 10-20 times higher than traditional savings accounts.</p>
      
      <h2>2. Consider Online Banks</h2>
      <p>Online banks often offer higher interest rates than their brick-and-mortar counterparts because they have lower overhead costs. This allows them to pass on the savings to customers in the form of better rates.</p>
      
      <h2>3. Ladder Your Certificates of Deposit</h2>
      <p>CD laddering involves purchasing multiple CDs with different maturity dates. This strategy allows you to take advantage of higher rates for longer terms while maintaining some liquidity.</p>
      
      <h2>4. Automate Your Savings</h2>
      <p>Set up automatic transfers to your savings account to ensure consistent growth. Even small amounts can add up significantly over time thanks to compound interest.</p>
      
      <h2>5. Take Advantage of Bank Bonuses</h2>
      <p>Many banks offer sign-up bonuses for new customers who meet certain requirements. These bonuses can provide an immediate boost to your savings.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Savings",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding Compound Interest: Your Money's Best Friend",
    excerpt: "Learn how compound interest works and why starting early can dramatically impact your financial future.",
    content: `
      <p>Albert Einstein allegedly called compound interest "the eighth wonder of the world," and for good reason. This powerful financial concept can transform modest savings into substantial wealth over time.</p>
      
      <h2>What is Compound Interest?</h2>
      <p>Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods. Simply put, it's earning interest on your interest.</p>
      
      <h2>The Power of Time</h2>
      <p>The longer your money compounds, the more dramatic the effect becomes. Starting to save and invest early in life gives you the greatest advantage when it comes to building wealth.</p>
      
      <h2>Real-World Examples</h2>
      <p>Consider two people: Person A starts saving $200 per month at age 25, while Person B starts saving $400 per month at age 35. Assuming a 7% annual return, Person A will have more money at retirement despite contributing less total money.</p>
      
      <h2>Making Compound Interest Work for You</h2>
      <p>To maximize the benefits of compound interest, focus on starting early, being consistent with contributions, and choosing investments with reasonable expected returns.</p>
    `,
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Investment",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Personal Loan vs Credit Card: Which Is Right for You?",
    excerpt: "Compare the pros and cons of personal loans and credit cards to make the best borrowing decision.",
    content: `
      <p>When you need to borrow money, you're often faced with a choice between a personal loan and a credit card. Each option has its advantages and drawbacks, and the best choice depends on your specific situation.</p>
      
      <h2>Personal Loans: The Basics</h2>
      <p>Personal loans are typically unsecured loans with fixed interest rates and fixed monthly payments. They're ideal for specific, one-time expenses where you know exactly how much you need to borrow.</p>
      
      <h2>Credit Cards: Flexibility at a Cost</h2>
      <p>Credit cards offer revolving credit, meaning you can borrow up to your credit limit, pay it back, and borrow again. This flexibility comes with variable interest rates that are often higher than personal loans.</p>
      
      <h2>When to Choose a Personal Loan</h2>
      <p>Personal loans are typically better for large, one-time expenses like home improvements, debt consolidation, or major purchases. The fixed payments make budgeting easier.</p>
      
      <h2>When to Choose a Credit Card</h2>
      <p>Credit cards are better for ongoing expenses, emergency funds, or when you can pay off the balance quickly. Many cards offer rewards and consumer protections.</p>
      
      <h2>Making the Right Choice</h2>
      <p>Consider the total cost of borrowing, your repayment ability, and your spending habits when making this decision.</p>
    `,
    author: "Emily Rodriguez",
    date: "2024-01-05",
    category: "Loans",
    readTime: "6 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Button asChild>
              <Link to="/blog">← Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl mb-4">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
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

export default BlogPost;
