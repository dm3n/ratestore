-- Insert sample blog posts for testing
INSERT INTO public.blog_posts (
  title,
  content,
  excerpt,
  author,
  category,
  read_time,
  is_featured,
  is_published
) VALUES 
(
  'Canadian Mortgage Rates Drop to 3-Year Low: What This Means for Homebuyers',
  '<h2>Major Rate Cuts Signal New Opportunities</h2>
  <p>In a surprising turn of events, Canadian mortgage rates have dropped to their lowest levels in three years, with 5-year fixed rates now averaging 4.79% across major lenders. This significant decrease represents a 0.75% drop from peak rates seen just six months ago.</p>
  
  <h3>Key Factors Driving the Decrease</h3>
  <p>Several economic factors have contributed to this dramatic shift:</p>
  <ul>
    <li>Bank of Canada''s recent rate cuts in response to cooling inflation</li>
    <li>Increased competition among major lenders</li>
    <li>Improved market confidence following stable employment data</li>
  </ul>
  
  <h3>Impact on Homebuyers</h3>
  <p>For prospective homebuyers, this presents a unique opportunity. A typical $500,000 mortgage with a 20% down payment would now save approximately $185 per month compared to rates from earlier this year.</p>
  
  <h3>What Experts Recommend</h3>
  <p>Financial advisors suggest that qualified buyers should consider locking in these rates quickly, as economic uncertainty could lead to future increases. However, thorough financial planning remains essential before making any major purchase decisions.</p>',
  'Canadian mortgage rates have dropped to 3-year lows, presenting new opportunities for homebuyers. Learn how this could impact your home purchasing decisions.',
  'Sarah Thompson',
  'Mortgage News',
  '5 min read',
  true,
  true
),
(
  'High-Interest Savings Accounts: Best Options for Canadians in 2024',
  '<h2>Maximize Your Savings with These Top Picks</h2>
  <p>With inflation concerns and economic uncertainty, finding the right high-interest savings account has never been more important for Canadian savers.</p>
  
  <h3>Top Performers This Quarter</h3>
  <p>Several financial institutions are offering competitive rates:</p>
  <ul>
    <li>EQ Bank: 5.25% promotional rate for new customers</li>
    <li>Tangerine: 4.85% for the first 5 months</li>
    <li>Simplii Financial: 4.50% ongoing rate</li>
  </ul>
  
  <h3>What to Consider</h3>
  <p>When choosing a high-interest savings account, consider factors beyond just the interest rate, including account fees, minimum balance requirements, and accessibility to your funds.</p>',
  'Discover the best high-interest savings accounts available to Canadians in 2024, with rates up to 5.25%.',
  'Michael Chen',
  'Savings',
  '4 min read',
  false,
  true
),
(
  'Credit Card Rewards: Maximizing Cash Back and Travel Points',
  '<h2>Smart Strategies for Reward Optimization</h2>
  <p>Canadian credit card rewards programs have become increasingly sophisticated, offering substantial value for strategic users.</p>
  
  <h3>Cash Back Champions</h3>
  <p>The best cash back cards currently offer:</p>
  <ul>
    <li>2% on all purchases with premium cards</li>
    <li>5% on rotating categories</li>
    <li>Up to 10% on specific merchant partnerships</li>
  </ul>
  
  <h3>Travel Rewards Excellence</h3>
  <p>For travel enthusiasts, cards like the American Express Aeroplan and RBC Avion offer exceptional value when used strategically.</p>',
  'Learn how to maximize your credit card rewards with smart strategies for cash back and travel points.',
  'Jennifer Davis',
  'Credit Cards',
  '6 min read',
  false,
  true
),
(
  'First-Time Home Buyer Programs: Your Complete Guide to Canadian Incentives',
  '<h2>Government Programs to Help You Buy Your First Home</h2>
  <p>Canada offers several programs designed to help first-time homebuyers enter the market, despite rising prices in many regions.</p>
  
  <h3>Federal Programs</h3>
  <ul>
    <li>First-Time Home Buyer Incentive</li>
    <li>Home Buyers'' Plan (HBP)</li>
    <li>First-Time Home Buyer Tax Credit</li>
  </ul>
  
  <h3>Provincial Programs</h3>
  <p>Each province offers additional support through various rebate and assistance programs tailored to local market conditions.</p>',
  'Comprehensive guide to first-time home buyer programs and incentives available across Canada.',
  'Robert Kim',
  'Home Buying',
  '8 min read',
  false,
  true
),
(
  'TFSA vs RRSP: Which Investment Account is Right for You?',
  '<h2>Understanding Your Registered Account Options</h2>
  <p>Tax-Free Savings Accounts and Registered Retirement Savings Plans each offer unique advantages for Canadian investors.</p>
  
  <h3>TFSA Benefits</h3>
  <ul>
    <li>Tax-free growth and withdrawals</li>
    <li>Flexible contribution room</li>
    <li>No mandatory withdrawals</li>
  </ul>
  
  <h3>RRSP Advantages</h3>
  <ul>
    <li>Immediate tax deduction</li>
    <li>Higher contribution limits</li>
    <li>Employer matching opportunities</li>
  </ul>',
  'Compare TFSA and RRSP accounts to determine the best investment strategy for your financial goals.',
  'Amanda Foster',
  'Investing',
  '7 min read',
  false,
  true
);