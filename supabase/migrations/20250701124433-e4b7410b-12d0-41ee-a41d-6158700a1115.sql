
-- Create a table to store mortgage rates that can be updated via spreadsheet
CREATE TABLE public.mortgage_rates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lender_name TEXT NOT NULL,
  lender_type TEXT NOT NULL CHECK (lender_type IN ('bank', 'credit_union', 'alternative', 'home')),
  rate_type TEXT NOT NULL CHECK (rate_type IN ('fixed', 'variable')),
  term TEXT NOT NULL CHECK (term IN ('1-yr', '2-yr', '3-yr', '4-yr', '5-yr', '7-yr', '10-yr')),
  base_rate DECIMAL(5,4) NOT NULL,
  min_down_payment DECIMAL(5,4) DEFAULT 0.05,
  max_loan_to_value DECIMAL(5,4) DEFAULT 0.95,
  transaction_types TEXT[] DEFAULT ARRAY['buying', 'refinancing', 'renewal'],
  prime_discount TEXT NULL, -- For variable rates like "Prime - 0.80%"
  special_conditions JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index for faster queries
CREATE INDEX idx_mortgage_rates_active ON public.mortgage_rates (is_active);
CREATE INDEX idx_mortgage_rates_lookup ON public.mortgage_rates (rate_type, term, is_active);

-- Insert some sample data
INSERT INTO public.mortgage_rates (lender_name, lender_type, rate_type, term, base_rate, prime_discount) VALUES
('TD Bank', 'bank', 'fixed', '2-yr', 4.24, NULL),
('TD Bank', 'bank', 'fixed', '3-yr', 3.89, NULL),
('TD Bank', 'bank', 'fixed', '5-yr', 3.84, NULL),
('RBC', 'bank', 'fixed', '3-yr', 3.92, NULL),
('RBC', 'bank', 'variable', '3-yr', 4.15, 'Prime - 0.80%'),
('BMO', 'bank', 'fixed', '5-yr', 3.87, NULL),
('BMO', 'bank', 'variable', '5-yr', 3.95, 'Prime - 1.00%'),
('Scotiabank', 'bank', 'fixed', '5-yr', 3.86, NULL),
('CIBC', 'bank', 'variable', '5-yr', 3.98, 'Prime - 1.00%'),
('Alternative Lender', 'alternative', 'fixed', '2-yr', 4.19, NULL),
('Credit Union Plus', 'credit_union', 'fixed', '3-yr', 3.84, NULL),
('Canadian Lender', 'alternative', 'fixed', '5-yr', 3.79, NULL),
('Canadian Lender', 'alternative', 'variable', '5-yr', 3.90, 'Prime - 1.00%');

-- Make the table publicly readable (you can adjust this based on your needs)
ALTER TABLE public.mortgage_rates ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read the rates
CREATE POLICY "Anyone can view mortgage rates" 
  ON public.mortgage_rates 
  FOR SELECT 
  USING (true);

-- Create a policy for updating rates (you might want to restrict this to admin users)
CREATE POLICY "Allow rate updates" 
  ON public.mortgage_rates 
  FOR ALL
  USING (true);
