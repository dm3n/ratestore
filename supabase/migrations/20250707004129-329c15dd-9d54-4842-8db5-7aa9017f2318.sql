
-- Create a table for banking account rates (chequing and savings)
CREATE TABLE public.banking_rates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  institution TEXT NOT NULL,
  account_name TEXT NOT NULL,
  account_type TEXT NOT NULL CHECK (account_type IN ('chequing', 'savings')),
  account_category TEXT, -- e.g., 'personal', 'student', 'senior', 'youth', 'newcomer', 'business'
  interest_rate NUMERIC DEFAULT 0, -- Annual interest rate as decimal (e.g., 0.025 for 2.5%)
  monthly_fee NUMERIC DEFAULT 0,
  transaction_limit INTEGER, -- NULL for unlimited
  minimum_balance NUMERIC DEFAULT 0,
  features JSONB DEFAULT '[]'::jsonb, -- Array of features
  special_offers TEXT, -- Promotional offers or bonuses
  fee_waiver_conditions TEXT, -- Conditions to waive monthly fee
  province TEXT DEFAULT 'All',
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security
ALTER TABLE public.banking_rates ENABLE ROW LEVEL SECURITY;

-- Policy for admins to manage all banking rates
CREATE POLICY "Admins can manage banking rates" 
  ON public.banking_rates 
  FOR ALL 
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy for anyone to view active banking rates
CREATE POLICY "Anyone can view active banking rates" 
  ON public.banking_rates 
  FOR SELECT 
  USING (is_active = true);

-- Insert sample chequing account rates
INSERT INTO public.banking_rates (institution, account_name, account_type, account_category, interest_rate, monthly_fee, transaction_limit, minimum_balance, features, special_offers, fee_waiver_conditions, province) VALUES
-- RBC Chequing Accounts
('RBC', 'RBC Day to Day Banking', 'chequing', 'personal', 0.0005, 4.00, 12, 0, '["Interac e-Transfer", "Online Banking", "Mobile App"]', NULL, 'Minimum balance of $1,000', 'All'),
('RBC', 'RBC No Limit Banking', 'chequing', 'personal', 0.0005, 15.95, NULL, 0, '["Unlimited transactions", "Free Interac e-Transfer", "Premium support"]', NULL, 'Minimum balance of $4,000', 'All'),
('RBC', 'RBC Student Banking', 'chequing', 'student', 0.0005, 0.00, 25, 0, '["No monthly fee", "Free Interac e-Transfer", "Student discounts"]', 'Free for students', 'Valid student ID required', 'All'),
('RBC', 'RBC Seniors Banking', 'chequing', 'senior', 0.0005, 0.00, 25, 0, '["No monthly fee", "Free Interac e-Transfer", "Senior benefits"]', 'Free for seniors 60+', 'Age 60 or older', 'All'),

-- TD Chequing Accounts
('TD', 'TD Minimum Chequing', 'chequing', 'personal', 0.0001, 3.95, 10, 0, '["Basic banking", "Online Banking", "Mobile App"]', NULL, 'Minimum balance of $1,000', 'All'),
('TD', 'TD Unlimited Chequing', 'chequing', 'personal', 0.0001, 16.95, NULL, 0, '["Unlimited transactions", "Free Interac e-Transfer", "Premium features"]', NULL, 'Minimum balance of $4,000', 'All'),
('TD', 'TD Student Chequing', 'chequing', 'student', 0.0001, 0.00, NULL, 0, '["No monthly fee", "Unlimited transactions", "Student benefits"]', 'Free for students', 'Valid student enrollment', 'All'),
('TD', 'TD Youth Account', 'chequing', 'youth', 0.0001, 0.00, NULL, 0, '["No monthly fee", "Youth benefits", "Financial education"]', 'Free for youth under 19', 'Age under 19', 'All'),

-- Scotiabank Chequing Accounts
('Scotiabank', 'Scotia Basic Banking', 'chequing', 'personal', 0.0001, 3.95, 12, 500, '["Basic transactions", "Online Banking"]', NULL, 'Minimum balance of $1,500', 'All'),
('Scotiabank', 'Scotia Preferred Package', 'chequing', 'personal', 0.0001, 30.95, NULL, 0, '["Unlimited transactions", "Multi-product package", "Premium benefits"]', NULL, 'Multi-product relationship', 'All'),
('Scotiabank', 'Scotia Student Banking Advantage', 'chequing', 'student', 0.0001, 0.00, NULL, 0, '["No monthly fee", "Unlimited transactions", "Student rewards"]', 'Free for students', 'Valid student status', 'All'),

-- BMO Chequing Accounts
('BMO', 'BMO Practical Plan', 'chequing', 'personal', 0.0001, 4.00, 12, 0, '["Basic banking", "Online Banking", "Mobile App"]', NULL, 'Minimum balance of $1,000', 'All'),
('BMO', 'BMO Premium Plan', 'chequing', 'personal', 0.0001, 30.00, NULL, 0, '["Unlimited transactions", "Premium services", "Investment discounts"]', NULL, 'Minimum balance of $6,000', 'All'),
('BMO', 'BMO Student Plan', 'chequing', 'student', 0.0001, 0.00, NULL, 0, '["No monthly fee", "Student benefits", "Financial planning"]', 'Free for students', 'Valid student enrollment', 'All'),

-- CIBC Chequing Accounts
('CIBC', 'CIBC Everyday Chequing', 'chequing', 'personal', 0.0001, 4.95, 12, 0, '["Basic banking", "Online Banking"]', NULL, 'Minimum balance of $1,000', 'All'),
('CIBC', 'CIBC Unlimited Chequing', 'chequing', 'personal', 0.0001, 16.95, NULL, 0, '["Unlimited transactions", "Premium banking"]', NULL, 'Minimum balance of $4,000', 'All'),
('CIBC', 'CIBC Student Chequing', 'chequing', 'student', 0.0001, 0.00, NULL, 0, '["No monthly fee", "Student benefits"]', 'Free for students', 'Valid student ID', 'All'),

-- Sample Savings Accounts
('RBC', 'RBC High Interest eSavings', 'savings', 'personal', 0.025, 0.00, NULL, 0, '["High interest rate", "Online only", "No monthly fee"]', 'Promotional rate for 6 months', NULL, 'All'),
('RBC', 'RBC TFSA Savings', 'savings', 'personal', 0.015, 0.00, NULL, 0, '["Tax-free savings", "Flexible deposits"]', NULL, NULL, 'All'),
('TD', 'TD High Interest Savings', 'savings', 'personal', 0.022, 0.00, NULL, 0, '["Competitive rate", "Online banking"]', NULL, NULL, 'All'),
('TD', 'TD Youth Savings', 'savings', 'youth', 0.01, 0.00, NULL, 0, '["No monthly fee", "Youth benefits"]', 'Bonus interest for youth', 'Age under 19', 'All'),
('Scotiabank', 'Scotia Momentum PLUS Savings', 'savings', 'personal', 0.023, 0.00, NULL, 0, '["High interest", "Bonus features"]', NULL, NULL, 'All'),
('BMO', 'BMO Savings Builder', 'savings', 'personal', 0.02, 0.00, NULL, 0, '["Growing interest rate", "Flexible access"]', NULL, NULL, 'All'),
('CIBC', 'CIBC Bonus Savings', 'savings', 'personal', 0.021, 0.00, NULL, 0, '["Bonus interest tiers", "Online banking"]', NULL, NULL, 'All'),

-- Credit Union Examples
('Vancity', 'Vancity Base Account', 'chequing', 'personal', 0.0001, 5.00, 10, 0, '["Community banking", "Ethical investing options"]', NULL, NULL, 'BC'),
('Vancity', 'Vancity Youth Account', 'chequing', 'youth', 0.0001, 0.00, NULL, 0, '["No monthly fee", "Financial literacy programs"]', 'Free for youth under 19', 'Age under 19', 'BC'),
('ATB Financial', 'ATB Everyday Banking', 'chequing', 'personal', 0.0001, 15.95, NULL, 0, '["Unlimited transactions", "Alberta-focused"]', NULL, 'Minimum balance of $3,000', 'AB'),
('Desjardins', 'Desjardins Transaction Account', 'chequing', 'personal', 0.0001, 12.00, 25, 0, '["French service", "Quebec-focused"]', NULL, 'Minimum balance of $1,500', 'QC');
