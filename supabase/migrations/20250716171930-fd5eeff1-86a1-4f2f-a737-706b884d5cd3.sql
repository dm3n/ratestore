-- First, let's see what HELOC rates currently exist
SELECT lender_name, rate_type, term, base_rate, transaction_types 
FROM mortgage_rates 
WHERE 'heloc' = ANY(transaction_types) 
ORDER BY term, rate_type, base_rate;

-- Delete any existing HELOC rates to start fresh
DELETE FROM mortgage_rates WHERE 'heloc' = ANY(transaction_types);

-- Insert comprehensive HELOC rates for all terms and rate types
INSERT INTO mortgage_rates (
  lender_name, lender_type, rate_type, term, base_rate, 
  transaction_types, province, min_down_payment, max_loan_to_value, prime_discount
) VALUES 
-- 1-year HELOC rates - Fixed
('RBC Royal Bank', 'Big 5 Bank', 'fixed', '1-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.75%'),
('TD Bank', 'Big 5 Bank', 'fixed', '1-year', 7.40, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.70%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'fixed', '1-year', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.65%'),
('Scotiabank', 'Big 5 Bank', 'fixed', '1-year', 7.30, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.60%'),
('CIBC', 'Big 5 Bank', 'fixed', '1-year', 7.25, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.55%'),

-- 1-year HELOC rates - Variable
('RBC Royal Bank', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'Credit Union', 'variable', '1-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'Credit Union', 'variable', '1-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'Alternative Lender', 'variable', '1-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- 2-year HELOC rates - Fixed
('RBC Royal Bank', 'Big 5 Bank', 'fixed', '2-year', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.65%'),
('TD Bank', 'Big 5 Bank', 'fixed', '2-year', 7.30, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.60%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'fixed', '2-year', 7.25, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.55%'),
('Scotiabank', 'Big 5 Bank', 'fixed', '2-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'Big 5 Bank', 'fixed', '2-year', 7.15, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.45%'),

-- 2-year HELOC rates - Variable
('RBC Royal Bank', 'Big 5 Bank', 'variable', '2-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '2-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '2-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'Credit Union', 'variable', '2-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'Credit Union', 'variable', '2-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'Alternative Lender', 'variable', '2-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- 3-year HELOC rates - Fixed
('RBC Royal Bank', 'Big 5 Bank', 'fixed', '3-year', 7.25, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.55%'),
('TD Bank', 'Big 5 Bank', 'fixed', '3-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'fixed', '3-year', 7.15, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.45%'),
('Scotiabank', 'Big 5 Bank', 'fixed', '3-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('CIBC', 'Big 5 Bank', 'fixed', '3-year', 7.05, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.35%'),

-- 3-year HELOC rates - Variable
('RBC Royal Bank', 'Big 5 Bank', 'variable', '3-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '3-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '3-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'Credit Union', 'variable', '3-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'Credit Union', 'variable', '3-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'Alternative Lender', 'variable', '3-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- 5-year HELOC rates - Fixed
('RBC Royal Bank', 'Big 5 Bank', 'fixed', '5-year', 7.15, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.45%'),
('TD Bank', 'Big 5 Bank', 'fixed', '5-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'fixed', '5-year', 7.05, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.35%'),
('Scotiabank', 'Big 5 Bank', 'fixed', '5-year', 7.00, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.30%'),
('CIBC', 'Big 5 Bank', 'fixed', '5-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),

-- 5-year HELOC rates - Variable
('RBC Royal Bank', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'Credit Union', 'variable', '5-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'Credit Union', 'variable', '5-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('BlueShore Financial', 'Credit Union', 'variable', '5-year', 7.05, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.35%'),
('First National', 'Alternative Lender', 'variable', '5-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),
('MCAP', 'Alternative Lender', 'variable', '5-year', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.65%'),
('Merix Financial', 'Alternative Lender', 'variable', '5-year', 7.40, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.70%');

-- Verify the insert worked
SELECT COUNT(*) as total_heloc_rates FROM mortgage_rates WHERE 'heloc' = ANY(transaction_types);