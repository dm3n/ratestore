-- Delete any existing HELOC rates to start fresh
DELETE FROM mortgage_rates WHERE 'heloc' = ANY(transaction_types);

-- Insert comprehensive HELOC rates for all terms and rate types with correct lender_type values
INSERT INTO mortgage_rates (
  lender_name, lender_type, rate_type, term, base_rate, 
  transaction_types, province, min_down_payment, max_loan_to_value, prime_discount
) VALUES 
-- 1-yr HELOC rates - Fixed
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.75%'),
('TD Bank', 'bank', 'fixed', '1-yr', 7.40, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.70%'),
('BMO Bank of Montreal', 'bank', 'fixed', '1-yr', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.65%'),
('Scotiabank', 'bank', 'fixed', '1-yr', 7.30, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.60%'),
('CIBC', 'bank', 'fixed', '1-yr', 7.25, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.55%'),

-- 1-yr HELOC rates - Variable
('RBC Royal Bank', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'credit_union', 'variable', '1-yr', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '1-yr', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'alternative', 'variable', '1-yr', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- 2-yr HELOC rates - Fixed
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.65%'),
('TD Bank', 'bank', 'fixed', '2-yr', 7.30, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.60%'),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 7.25, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.55%'),
('Scotiabank', 'bank', 'fixed', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'bank', 'fixed', '2-yr', 7.15, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.45%'),

-- 2-yr HELOC rates - Variable
('RBC Royal Bank', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'credit_union', 'variable', '2-yr', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '2-yr', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'alternative', 'variable', '2-yr', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- 3-yr HELOC rates - Fixed
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 7.25, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.55%'),
('TD Bank', 'bank', 'fixed', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 7.15, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.45%'),
('Scotiabank', 'bank', 'fixed', '3-yr', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('CIBC', 'bank', 'fixed', '3-yr', 7.05, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.35%'),

-- 3-yr HELOC rates - Variable
('RBC Royal Bank', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'credit_union', 'variable', '3-yr', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '3-yr', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'alternative', 'variable', '3-yr', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- 5-yr HELOC rates - Fixed
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 7.15, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.45%'),
('TD Bank', 'bank', 'fixed', '5-yr', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 7.05, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.35%'),
('Scotiabank', 'bank', 'fixed', '5-yr', 7.00, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.30%'),
('CIBC', 'bank', 'fixed', '5-yr', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),

-- 5-yr HELOC rates - Variable
('RBC Royal Bank', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'credit_union', 'variable', '5-yr', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '5-yr', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('BlueShore Financial', 'credit_union', 'variable', '5-yr', 7.05, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.35%'),
('First National', 'alternative', 'variable', '5-yr', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),
('MCAP', 'alternative', 'variable', '5-yr', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.65%'),
('Merix Financial', 'alternative', 'variable', '5-yr', 7.40, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.70%');

-- Verify the insert worked
SELECT COUNT(*) as total_heloc_rates FROM mortgage_rates WHERE 'heloc' = ANY(transaction_types);