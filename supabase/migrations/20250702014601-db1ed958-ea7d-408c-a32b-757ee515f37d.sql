
-- Create credit cards table
CREATE TABLE public.credit_cards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  issuer TEXT NOT NULL,
  card_type TEXT NOT NULL, -- 'rewards', 'cashback', 'travel', 'low_interest', 'balance_transfer', 'secured', 'student'
  annual_fee NUMERIC DEFAULT 0,
  intro_apr NUMERIC,
  regular_apr NUMERIC,
  balance_transfer_apr NUMERIC,
  cash_advance_apr NUMERIC,
  intro_period_months INTEGER,
  credit_score_required TEXT, -- 'excellent', 'good', 'fair', 'poor'
  welcome_bonus_value NUMERIC DEFAULT 0,
  welcome_bonus_requirement NUMERIC,
  welcome_bonus_timeframe INTEGER, -- in months
  cashback_rate_general NUMERIC DEFAULT 0,
  cashback_rate_grocery NUMERIC DEFAULT 0,
  cashback_rate_gas NUMERIC DEFAULT 0,
  cashback_rate_dining NUMERIC DEFAULT 0,
  cashback_rate_travel NUMERIC DEFAULT 0,
  rewards_program TEXT,
  points_per_dollar NUMERIC DEFAULT 0,
  travel_benefits JSONB DEFAULT '{}',
  insurance_benefits JSONB DEFAULT '{}',
  foreign_transaction_fee NUMERIC DEFAULT 0,
  balance_transfer_fee NUMERIC DEFAULT 0,
  cash_advance_fee NUMERIC DEFAULT 0,
  late_payment_fee NUMERIC DEFAULT 0,
  overlimit_fee NUMERIC DEFAULT 0,
  minimum_income_required NUMERIC,
  features JSONB DEFAULT '[]',
  pros JSONB DEFAULT '[]',
  cons JSONB DEFAULT '[]',
  promotional_offer TEXT,
  apply_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user card finder submissions table
CREATE TABLE public.card_finder_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  session_id TEXT NOT NULL, -- for anonymous users
  card_purpose TEXT NOT NULL,
  date_of_birth DATE,
  province TEXT,
  city TEXT,
  postal_code TEXT,
  annual_income_range TEXT NOT NULL,
  credit_score_range TEXT NOT NULL,
  current_cards JSONB DEFAULT '[]',
  monthly_spending JSONB DEFAULT '{}', -- categories and amounts
  primary_spending_categories JSONB DEFAULT '[]',
  travel_frequency TEXT,
  balance_transfer_amount NUMERIC,
  preferred_features JSONB DEFAULT '[]',
  max_annual_fee NUMERIC,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create card recommendations table
CREATE TABLE public.card_recommendations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  submission_id UUID REFERENCES public.card_finder_submissions NOT NULL,
  card_id UUID REFERENCES public.credit_cards NOT NULL,
  match_score NUMERIC NOT NULL,
  match_reasons JSONB DEFAULT '[]',
  rank INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies
ALTER TABLE public.credit_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.card_finder_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.card_recommendations ENABLE ROW LEVEL SECURITY;

-- Credit cards are public
CREATE POLICY "Anyone can view active credit cards" 
  ON public.credit_cards 
  FOR SELECT 
  USING (is_active = true);

-- Card finder submissions
CREATE POLICY "Users can view their own submissions" 
  ON public.card_finder_submissions 
  FOR SELECT 
  USING (auth.uid() = user_id OR (auth.uid() IS NULL AND session_id IS NOT NULL));

CREATE POLICY "Anyone can create submissions" 
  ON public.card_finder_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Card recommendations
CREATE POLICY "Users can view their recommendations" 
  ON public.card_recommendations 
  FOR SELECT 
  USING (
    submission_id IN (
      SELECT id FROM public.card_finder_submissions 
      WHERE auth.uid() = user_id OR (auth.uid() IS NULL AND session_id IS NOT NULL)
    )
  );

CREATE POLICY "Anyone can create recommendations" 
  ON public.card_recommendations 
  FOR INSERT 
  WITH CHECK (true);

-- Insert sample credit cards data
INSERT INTO public.credit_cards (name, issuer, card_type, annual_fee, regular_apr, credit_score_required, welcome_bonus_value, welcome_bonus_requirement, cashback_rate_general, cashback_rate_grocery, cashback_rate_gas, cashback_rate_dining, features, pros, cons, apply_url) VALUES
('Chase Freedom Unlimited', 'Chase', 'cashback', 0, 19.99, 'good', 200, 500, 1.5, 1.5, 1.5, 1.5, '["No annual fee", "Unlimited 1.5% cash back", "0% intro APR for 15 months"]', '["Simple unlimited cash back", "Good intro APR offer", "No foreign transaction fees"]', '["Requires good credit", "No bonus categories"]', 'https://creditcards.chase.com/cash-back-credit-cards/freedom-unlimited'),

('Capital One Venture Rewards', 'Capital One', 'travel', 95, 18.99, 'good', 75000, 4000, 0, 0, 0, 0, '["2x miles on all purchases", "No foreign transaction fees", "Transfer partners"]', '["Great for travel", "Flexible redemption", "Good transfer partners"]', '["Annual fee", "No bonus categories"]', 'https://www.capitalone.com/credit-cards/venture/'),

('Discover it Cash Back', 'Discover', 'cashback', 0, 16.99, 'fair', 0, 0, 1, 5, 5, 5, '["5% rotating categories", "Cashback match first year", "No annual fee"]', '["Rotating 5% categories", "First year cashback match", "Good for building credit"]', '["Limited acceptance", "Rotating categories require activation"]', 'https://www.discover.com/credit-cards/cash-back/it-card.html'),

('Citi Simplicity Card', 'Citi', 'low_interest', 0, 14.99, 'fair', 0, 0, 0, 0, 0, 0, '["0% intro APR for 21 months", "No late fees", "No penalty APR"]', '["Long intro APR period", "No late fees ever", "Simple structure"]', '["No rewards", "Balance transfer fee after intro period"]', 'https://www.citi.com/credit-cards/citi-simplicity-credit-card'),

('American Express Gold Card', 'American Express', 'rewards', 250, 19.99, 'excellent', 60000, 4000, 1, 4, 1, 4, '["4x points dining & groceries", "Monthly credits", "Transfer partners"]', '["Excellent rewards rates", "Great transfer partners", "Premium benefits"]', '["High annual fee", "Limited acceptance", "Credits require activation"]', 'https://www.americanexpress.com/us/credit-cards/card/gold-card/');
