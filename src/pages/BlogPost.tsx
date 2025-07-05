
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark, TrendingUp, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Bank of Canada Cuts Interest Rates: What This Means for Your Mortgage",
    excerpt: "The latest rate cut could save homeowners thousands. Our analysis breaks down the immediate impact on mortgage payments, renewal strategies, and what to expect next.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead text-xl text-slate-600 mb-8">The Bank of Canada's recent decision to cut the overnight rate by 25 basis points marks a pivotal moment for Canadian homeowners and prospective buyers. This comprehensive analysis examines the immediate and long-term implications for mortgage holders across the country.</p>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Immediate Impact on Mortgage Payments</h2>
        <p class="mb-6">Variable-rate mortgage holders will see an immediate reduction in their monthly payments. For a typical $500,000 mortgage, this translates to approximately $65 less per month—savings of nearly $800 annually.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 class="text-lg font-semibold text-blue-900 mb-2">Quick Calculation Example</h3>
          <ul class="text-blue-800 space-y-2">
            <li>• $500,000 mortgage at 5.45% → 5.20%</li>
            <li>• Monthly savings: ~$65</li>
            <li>• Annual savings: ~$780</li>
            <li>• Total interest savings over 25 years: ~$19,500</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategic Renewal Considerations</h2>
        <p class="mb-6">For those approaching renewal, the rate environment creates both opportunities and challenges. Fixed-rate mortgages remain elevated compared to pre-pandemic levels, while variable rates have become more attractive.</p>
        
        <h3 class="text-xl font-semibold text-slate-900 mt-6 mb-4">Key Renewal Strategies:</h3>
        <ol class="list-decimal list-inside space-y-3 mb-6">
          <li><strong>Rate Shopping:</strong> Don't automatically renew with your current lender. Rate differences of 0.5-1.0% are common between lenders.</li>
          <li><strong>Term Selection:</strong> Consider shorter terms (2-3 years) to maintain flexibility as rates potentially decline further.</li>
          <li><strong>Blend and Extend:</strong> Some lenders offer blend-and-extend options that can provide immediate savings.</li>
        </ol>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Market Predictions and Economic Context</h2>
        <p class="mb-6">Economic indicators suggest further rate cuts are likely throughout 2024. Inflation has moderated to within the Bank's target range, and employment data shows cooling labor market conditions.</p>
        
        <blockquote class="border-l-4 border-slate-300 pl-6 italic text-lg text-slate-600 my-8">
          "We anticipate additional rate cuts of 50-75 basis points over the next 12 months, providing further relief to mortgage holders while supporting economic growth."
          <footer class="text-sm text-slate-500 mt-2">— Senior Economist, RateStore Research</footer>
        </blockquote>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Action Items for Homeowners</h2>
        <div class="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-green-900 mb-4">Immediate Steps to Take:</h3>
          <ul class="text-green-800 space-y-2">
            <li>✓ Review your current mortgage terms and rate type</li>
            <li>✓ Calculate potential savings from rate shopping</li>
            <li>✓ Consider accelerating payments to reduce principal</li>
            <li>✓ Explore refinancing options if rates drop significantly</li>
            <li>✓ Consult with a mortgage broker for personalized advice</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Regional Variations and Lender Responses</h2>
        <p class="mb-6">Major banks have already announced corresponding reductions to their prime rates, with some credit unions and alternative lenders offering even more competitive rates to attract new business.</p>
        
        <p class="mb-6">Regional real estate markets are responding differently to the rate environment. Toronto and Vancouver markets show signs of renewed activity, while smaller markets continue to experience price adjustments.</p>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-yellow-900 mb-2">Important Disclaimer</h3>
          <p class="text-yellow-800 text-sm">Interest rate predictions are based on current economic conditions and may change rapidly. Always consult with qualified financial professionals before making mortgage decisions.</p>
        </div>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Looking Ahead: What to Watch</h2>
        <p class="mb-6">Key indicators to monitor include inflation trends, employment data, and global economic conditions. The Bank of Canada's next rate announcement is scheduled for March 6th, with most economists expecting at least one more cut.</p>
        
        <p class="text-lg font-medium text-slate-700">Stay informed with our mortgage rate tracker and sign up for rate alerts to ensure you never miss an opportunity to save on your mortgage.</p>
      </div>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Mortgage News",
    readTime: "8 min read",
    tags: ["Bank of Canada", "Interest Rates", "Mortgage Renewal", "Variable Rates"]
  },
  {
    id: 2,
    title: "5 Strategies to Maximize Your High-Interest Savings Returns in 2024",
    excerpt: "With rates at multi-year highs, now's the time to optimize your savings strategy. Discover proven methods to boost your returns while maintaining liquidity.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead text-xl text-slate-600 mb-8">High-interest savings accounts are offering rates not seen since before the 2008 financial crisis. With some accounts now yielding over 5%, it's crucial to optimize your savings strategy to maximize returns while maintaining the liquidity you need.</p>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategy 1: Ladder Your Savings Across Multiple Institutions</h2>
        <p class="mb-6">Don't put all your savings in one basket. By spreading your funds across multiple high-yield accounts, you can take advantage of promotional rates and maximize CDIC insurance coverage.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 class="text-lg font-semibold text-blue-900 mb-2">Optimal Allocation Strategy</h3>
          <ul class="text-blue-800 space-y-2">
            <li>• Primary account: $100,000 at highest rate (CDIC protected)</li>
            <li>• Secondary account: $100,000 at second-highest rate</li>
            <li>• Promotional accounts: Take advantage of limited-time offers</li>
            <li>• Total potential coverage: $600,000+ across multiple institutions</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategy 2: Optimize Your TFSA and RRSP Contributions</h2>
        <p class="mb-6">High-yield savings accounts within registered accounts can significantly boost your after-tax returns. With TFSA contribution room at $7,000 for 2024, prioritizing tax-free growth is essential.</p>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategy 3: Take Advantage of Promotional Rates</h2>
        <p class="mb-6">Many financial institutions offer promotional rates for new customers. These can range from 6-8% for the first few months, providing substantial short-term returns on your savings.</p>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategy 4: Consider Short-Term GICs</h2>
        <p class="mb-6">With interest rates potentially peaking, short-term GICs (3-12 months) can lock in current high rates while maintaining relative liquidity compared to longer terms.</p>
        
        <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategy 5: Automate Your Savings Growth</h2>
        <p class="mb-6">Set up automatic transfers to consistently grow your high-yield savings. Even small amounts compound significantly at current rates.</p>
        
        <div class="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-green-900 mb-4">Monthly Savings Impact</h3>
          <p class="text-green-800">$500/month at 5.25% = $6,161 in annual interest on a $100,000 balance</p>
        </div>
      </div>
    `,
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Savings",
    readTime: "6 min read",
    tags: ["High-Interest Savings", "TFSA", "GICs", "Investment Strategy"]
  },
  // Add other blog posts with similar detailed content structure...
];

const relatedPosts = [
  {
    id: 3,
    title: "Credit Card Rewards Revolution: New Programs Worth Switching For",
    category: "Credit Cards",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "First-Time Home Buyer Programs: $40,000 in Government Assistance",
    category: "Home Buying",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Investment Outlook 2024: GICs vs. High-Yield Savings",
    category: "Investing",
    readTime: "9 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
            <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or may have been moved.</p>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
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
        {/* Breadcrumb */}
        <section className="bg-slate-50 border-b py-4">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Link to="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-slate-400">{post.category}</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-slate-900 font-medium truncate">{post.title}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-8 -ml-4 text-slate-600 hover:text-slate-900">
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 font-semibold">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pb-8 border-b border-slate-200">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{post.author}</div>
                        <div className="text-sm text-slate-500">Senior Financial Analyst</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-CA', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-0 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  {post.tags && (
                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <h3 className="text-sm font-semibold text-slate-900 mb-4">Related Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-8">
                    {/* Author Card */}
                    <Card className="p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="h-8 w-8 text-slate-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">{post.author}</h3>
                        <p className="text-sm text-slate-600 mb-4">Senior Financial Analyst with 10+ years experience in Canadian markets</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Follow
                        </Button>
                      </div>
                    </Card>
                    
                    {/* Newsletter CTA */}
                    <Card className="p-6 bg-slate-900 text-white">
                      <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                      <p className="text-sm text-slate-300 mb-4">Get weekly market insights delivered to your inbox</p>
                      <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">
                        Subscribe
                      </Button>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                        <TrendingUp className="h-12 w-12 text-slate-400" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {relatedPost.category}
                        </Badge>
                        <span className="text-xs text-slate-500">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        <Link to={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
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

export default BlogPost;
