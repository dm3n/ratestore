
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Mock blog post data - in a real app this would come from an API
const blogPostData = {
  1: {
    title: "Bank of Canada Cuts Interest Rates: What This Means for Your Mortgage",
    content: `
      <p>The Bank of Canada's recent interest rate cut has significant implications for Canadian homeowners and prospective buyers. This comprehensive analysis breaks down what you need to know.</p>
      
      <h2>Immediate Impact on Mortgage Payments</h2>
      <p>Variable rate mortgage holders will see immediate relief, with monthly payments potentially decreasing by $100-300 depending on your mortgage balance. Fixed-rate mortgage holders won't see changes until renewal.</p>
      
      <h2>Renewal Strategies</h2>
      <p>If your mortgage is up for renewal in the next 6-12 months, consider these strategies to maximize your savings...</p>
      
      <h2>What to Expect Next</h2>
      <p>Economic indicators suggest further rate adjustments may be coming. Here's how to prepare your mortgage strategy...</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Mortgage News",
    readTime: "8 min read",
  },
  2: {
    title: "5 Strategies to Maximize Your High-Interest Savings Returns in 2024",
    content: `
      <p>With interest rates at multi-year highs, Canadian savers have unprecedented opportunities to grow their wealth. Here are five proven strategies.</p>
      
      <h2>1. Ladder Your GICs</h2>
      <p>GIC laddering allows you to take advantage of high rates while maintaining flexibility...</p>
      
      <h2>2. High-Interest Savings Account Optimization</h2>
      <p>Not all high-interest accounts are created equal. Here's how to find the best rates...</p>
    `,
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Savings",
    readTime: "6 min read",
  }
  // Add more mock data as needed
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPostData[id as keyof typeof blogPostData];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <article className="py-12 lg:py-16">
          <div className="container max-w-4xl">
            {/* Back to Blog */}
            <div className="mb-8">
              <Button variant="ghost" asChild className="text-slate-600 hover:text-slate-900">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <Badge variant="outline" className="mb-4 font-medium">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-CA', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Get More Financial Insights
                </h3>
                <p className="text-slate-600 mb-6">
                  Subscribe to our newsletter for weekly updates on rates, market trends, and financial strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-900"
                  />
                  <Button className="bg-slate-900 hover:bg-slate-800 px-6">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
