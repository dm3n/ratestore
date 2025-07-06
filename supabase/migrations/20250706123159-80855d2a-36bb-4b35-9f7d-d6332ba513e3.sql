
-- Create a table for blog posts
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL,
  featured_image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for blog posts
CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (is_published = true);

CREATE POLICY "Admins can manage all blog posts" 
  ON public.blog_posts 
  FOR ALL 
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_blog_post_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating timestamps
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_blog_post_updated_at();

-- Insert existing blog posts data
INSERT INTO public.blog_posts (id, title, content, excerpt, author, category, read_time, is_featured, created_at) VALUES
(1, 'Bank of Canada Cuts Interest Rates: What This Means for Your Mortgage', 
'<p>The Bank of Canada''s recent interest rate cut has significant implications for Canadian homeowners and prospective buyers. This comprehensive analysis breaks down what you need to know about the current market conditions and how they affect your mortgage strategy.</p>

<h2>Immediate Impact on Mortgage Payments</h2>
<p>Variable rate mortgage holders will see immediate relief from the rate cut, with monthly payments potentially decreasing by $100-300 depending on your mortgage balance. This change takes effect within 1-2 billing cycles after the announcement.</p>

<p>For a typical $400,000 mortgage with a variable rate, homeowners could save approximately $200 per month. Over the course of a year, this translates to savings of $2,400 – a substantial amount that can be redirected toward other financial goals or debt reduction.</p>

<h2>Fixed-Rate vs. Variable-Rate Considerations</h2>
<p>While variable rate holders benefit immediately, fixed-rate mortgage holders won''t see changes until their renewal date. However, this rate environment creates interesting opportunities for strategic planning:</p>

<ul>
<li><strong>Current fixed-rate holders:</strong> Start planning your renewal strategy 6-12 months before your term expires</li>
<li><strong>Variable-rate holders:</strong> Consider whether to lock in current rates if you expect further volatility</li>
<li><strong>New buyers:</strong> Evaluate whether variable rates now offer better long-term value</li>
</ul>

<h2>Renewal Strategies to Maximize Savings</h2>
<p>If your mortgage is up for renewal in the next 6-12 months, consider these proven strategies to maximize your savings:</p>

<h3>1. Shop Around Early</h3>
<p>Don''t wait until the last minute. Start comparing rates from different lenders 120 days before your renewal date. This gives you leverage in negotiations and time to complete applications with alternative lenders if needed.</p>

<h3>2. Consider Alternative Lenders</h3>
<p>Credit unions, mortgage investment corporations, and online lenders often offer more competitive rates than the Big Six banks. These lenders may also provide more flexible terms and faster approval processes.</p>

<h3>3. Negotiate with Your Current Lender</h3>
<p>Armed with competing offers, approach your current lender for a rate match or better terms. Many banks will offer discounts to retain existing customers, especially those with good payment history and strong credit profiles.</p>

<h2>What to Expect in the Coming Months</h2>
<p>Economic indicators suggest that further rate adjustments may be coming. Here''s how to prepare your mortgage strategy for different scenarios:</p>

<blockquote>
<p>"The key to navigating uncertain rate environments is flexibility and preparation. Having multiple options ready allows you to act quickly when opportunities arise."</p>
</blockquote>', 
'The latest rate cut could save homeowners thousands. Our analysis breaks down the immediate impact on mortgage payments, renewal strategies, and what to expect next.',
'Sarah Johnson', 'Mortgage News', '8 min read', true, '2024-01-15'),

(2, '5 Strategies to Maximize Your High-Interest Savings Returns in 2024',
'<p>With interest rates at multi-year highs, Canadian savers have unprecedented opportunities to grow their wealth. The current environment offers rates we haven''t seen since before the 2008 financial crisis, making it crucial to optimize your savings strategy now.</p>

<h2>1. Master the Art of GIC Laddering</h2>
<p>GIC laddering allows you to take advantage of high rates while maintaining flexibility for future opportunities. This strategy involves purchasing GICs with different maturity dates to create a steady stream of maturing investments.</p>

<h3>How to Build Your GIC Ladder</h3>
<p>Start by dividing your investment into equal portions – typically 5 parts for a 5-year ladder. Purchase GICs maturing in 1, 2, 3, 4, and 5 years respectively. When each GIC matures, reinvest the proceeds in a new 5-year GIC at current rates.</p>

<p><strong>Example:</strong> With $50,000 to invest, purchase five $10,000 GICs with staggered maturity dates. This provides annual liquidity while capturing long-term rates.</p>

<h2>2. High-Interest Savings Account Optimization</h2>
<p>Not all high-interest accounts are created equal. The key is finding accounts that offer consistently competitive rates without excessive conditions or fees.</p>

<h3>Top Features to Look For</h3>
<ul>
<li><strong>No monthly fees:</strong> Avoid accounts with maintenance charges that erode your returns</li>
<li><strong>No minimum balance requirements:</strong> Maintain flexibility in your cash management</li>
<li><strong>Unlimited transactions:</strong> Access your money when you need it</li>
<li><strong>Competitive promotional rates:</strong> Many banks offer higher rates for new customers</li>
</ul>

<blockquote>
<p>"Every dollar of interest earned in your TFSA is tax-free forever. This makes TFSAs the most powerful savings vehicle for most Canadians."</p>
</blockquote>',
'With rates at multi-year highs, now''s the time to optimize your savings strategy. Discover proven methods to boost your returns while maintaining liquidity.',
'Michael Chen', 'Savings', '6 min read', false, '2024-01-12');
