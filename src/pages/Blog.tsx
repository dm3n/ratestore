
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock, TrendingUp, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const categories = ["All", "Mortgage News", "Savings", "Credit Cards", "Home Buying", "Investing", "Mortgages"];

const Blog = () => {
  const { posts, loading, error, refetch } = useBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterEmailValid, setIsNewsletterEmailValid] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setNewsletterEmail(email);
    setIsNewsletterEmailValid(email === '' || validateEmail(email));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(newsletterEmail)) {
      setIsNewsletterEmailValid(false);
      return;
    }
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', newsletterEmail);
    setNewsletterEmail('');
  };

  const featuredPost = posts.find(post => post.is_featured) || posts[0];
  const regularPosts = posts.filter(post => post.id !== featuredPost?.id);

  const filteredPosts = selectedCategory === "All" 
    ? regularPosts 
    : regularPosts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-slate-600">Loading blog posts...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Unable to Load Blog</h1>
            <p className="text-slate-600 mb-6">We're having trouble loading the blog posts. Please try again.</p>
            <p className="text-sm text-slate-500 mb-6">Error: {error}</p>
            <Button onClick={refetch} className="inline-flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">No Blog Posts Found</h1>
            <p className="text-slate-600 mb-8">Check back soon for new content!</p>
            <Button onClick={refetch} className="inline-flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/20 border-b">
          <div className="container py-16 lg:py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Financial Intelligence
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Stay Ahead of the
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Market</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl leading-relaxed">
                Expert insights, market analysis, and actionable advice to help you make smarter financial decisions in Canada's evolving economic landscape.
              </p>
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full px-4 py-2 font-medium transition-all ${
                      category === selectedCategory
                        ? "bg-slate-900 hover:bg-slate-800 text-white" 
                        : "hover:bg-slate-50 border-slate-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-12 lg:py-16 border-b bg-white">
            <div className="container">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-red-100 text-red-700 border-red-200 font-semibold">
                        Featured
                      </Badge>
                      <Badge variant="outline" className="font-medium">
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    {featuredPost.excerpt && (
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-6 mb-8 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.created_at).toLocaleDateString('en-CA', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.read_time}</span>
                      </div>
                    </div>
                    <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold" asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Full Analysis
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative group overflow-hidden rounded-2xl bg-slate-100">
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <TrendingUp className="h-24 w-24 text-blue-400" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 lg:py-20 bg-slate-50/50">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Latest Insights</h2>
                  <p className="text-lg text-slate-600">Stay informed with our latest financial analysis and market updates</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="block">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden h-full cursor-pointer">
                      <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-slate-600" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs font-medium">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-slate-500">{post.read_time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm text-slate-500">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{new Date(post.created_at).toLocaleDateString('en-CA', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                          <div className="text-blue-600 group-hover:text-blue-700 p-2">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              {filteredPosts.length > 6 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="px-8 py-3 font-semibold border-2 hover:bg-slate-50">
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-20 bg-slate-900 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Never Miss a Market Update
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get weekly insights on rates, market trends, and financial strategies delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={handleNewsletterEmailChange}
                    className={`w-full px-4 py-3 rounded-lg font-medium ${
                      isNewsletterEmailValid 
                        ? 'text-slate-900' 
                        : 'text-slate-900 border-2 border-red-500'
                    }`}
                    required
                  />
                  {!isNewsletterEmailValid && (
                    <p className="text-red-300 text-sm mt-1 text-left">Please enter a valid email address</p>
                  )}
                </div>
                <Button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 font-semibold"
                  disabled={!newsletterEmail || !isNewsletterEmailValid}
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-slate-400 mt-4">
                Join 50,000+ Canadians who trust our financial insights
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
