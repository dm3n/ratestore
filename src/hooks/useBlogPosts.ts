
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  category: string;
  read_time: string;
  featured_image_url?: string;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching blog posts...');
      
      const { data, error } = await (supabase as any)
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      console.log('Blog posts response:', { data, error });

      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }
      
      setPosts(data || []);
      console.log('Successfully set posts:', data?.length || 0, 'posts');
    } catch (err) {
      console.error('Error in fetchPosts:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching blog posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, refetch: fetchPosts };
};

export const useBlogPost = (id: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching blog post with id:', id);
        
        const { data, error } = await (supabase as any)
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .eq('is_published', true)
          .single();

        console.log('Single blog post response:', { data, error });

        if (error) {
          console.error('Error fetching blog post:', error);
          throw error;
        }
        
        setPost(data);
        console.log('Successfully set post:', data?.title);
      } catch (err) {
        console.error('Error in fetchPost:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching the blog post');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, loading, error };
};
