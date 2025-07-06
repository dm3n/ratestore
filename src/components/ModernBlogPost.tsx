
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  category: string;
  read_time: string;
  featured_image_url?: string;
  is_featured: boolean;
  created_at: string;
}

interface ModernBlogPostProps {
  post: BlogPost;
}

export const ModernBlogPost = ({ post }: ModernBlogPostProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Back to Blog */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="text-slate-600 hover:text-slate-900 -ml-4">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <header className="mb-12 text-center">
        <Badge variant="outline" className="mb-6 font-medium text-xs uppercase tracking-wide">
          {post.category}
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
          {post.title}
        </h1>
        
        {post.excerpt && (
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-center gap-8 text-sm text-slate-500 mb-8">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.created_at).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.read_time}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      {/* Featured Image Placeholder */}
      {post.featured_image_url && (
        <div className="mb-12">
          <img 
            src={post.featured_image_url} 
            alt={post.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg prose-slate max-w-none">
        <style>{`
          .prose {
            --tw-prose-body: theme(colors.slate.700);
            --tw-prose-headings: theme(colors.slate.900);
            --tw-prose-lead: theme(colors.slate.600);
            --tw-prose-links: theme(colors.blue.600);
            --tw-prose-bold: theme(colors.slate.900);
            --tw-prose-counters: theme(colors.slate.500);
            --tw-prose-bullets: theme(colors.slate.300);
            --tw-prose-hr: theme(colors.slate.200);
            --tw-prose-quotes: theme(colors.slate.900);
            --tw-prose-quote-borders: theme(colors.slate.200);
            --tw-prose-captions: theme(colors.slate.500);
            --tw-prose-code: theme(colors.slate.900);
            --tw-prose-pre-code: theme(colors.slate.200);
            --tw-prose-pre-bg: theme(colors.slate.800);
            --tw-prose-th-borders: theme(colors.slate.300);
            --tw-prose-td-borders: theme(colors.slate.200);
          }
          .prose h1 {
            font-size: 2.5rem;
            line-height: 1.2;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.025em;
          }
          .prose h2 {
            font-size: 2rem;
            line-height: 1.3;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
            letter-spacing: -0.025em;
          }
          .prose h3 {
            font-size: 1.5rem;
            line-height: 1.4;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            font-weight: 600;
          }
          .prose p {
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
            font-weight: 400;
          }
          .prose blockquote {
            border-left: 4px solid theme(colors.blue.500);
            padding-left: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            font-size: 1.25rem;
            line-height: 1.6;
            color: theme(colors.slate.600);
          }
          .prose ul, .prose ol {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
          }
          .prose li {
            margin: 0.75rem 0;
            line-height: 1.7;
          }
          .prose strong {
            font-weight: 600;
            color: theme(colors.slate.900);
          }
          .prose a {
            color: theme(colors.blue.600);
            text-decoration: underline;
            text-underline-offset: 2px;
            transition: color 0.2s;
          }
          .prose a:hover {
            color: theme(colors.blue.700);
          }
        `}</style>
        <div 
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 pt-12 border-t border-slate-200">
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get the latest financial insights and market analysis delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-slate-900 hover:bg-slate-800 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
