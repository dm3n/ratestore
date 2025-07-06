
-- Create the blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL,
  featured_image_url TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read published blog posts
CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (is_published = true);

-- Create policy to allow admins to manage all blog posts
CREATE POLICY "Admins can manage blog posts" 
  ON public.blog_posts 
  FOR ALL 
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Insert some sample blog posts
INSERT INTO public.blog_posts (title, content, excerpt, author, category, read_time, is_featured) VALUES
('Understanding Canadian Mortgage Rates in 2024', '<h2>Current Market Overview</h2><p>The Canadian mortgage market has seen significant changes in 2024, with rates fluctuating in response to Bank of Canada policy decisions...</p>', 'A comprehensive guide to navigating the current mortgage rate environment in Canada.', 'Sarah Johnson', 'Mortgage News', '8 min read', true),
('Best High-Interest Savings Accounts This Month', '<h2>Top Performers</h2><p>Here are the savings accounts offering the highest interest rates this month...</p>', 'Compare the best high-interest savings accounts available to Canadians right now.', 'Mike Chen', 'Savings', '5 min read', false),
('Credit Card Rewards: Maximizing Your Benefits', '<h2>Reward Categories</h2><p>Understanding how to maximize your credit card rewards can save you hundreds of dollars annually...</p>', 'Learn strategies to get the most value from your credit card reward programs.', 'Emma Wilson', 'Credit Cards', '6 min read', false);
