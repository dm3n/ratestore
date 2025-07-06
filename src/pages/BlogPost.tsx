
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ModernBlogPost } from "@/components/ModernBlogPost";
import { useBlogPost } from "@/hooks/useBlogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const { post, loading, error } = useBlogPost(id || '');

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
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
      
      <main className="flex-1 py-12 lg:py-16">
        <div className="container">
          <ModernBlogPost post={post} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
