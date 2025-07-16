-- Add comprehensive HELOC rates for all major lenders
INSERT INTO public.mortgage_rates (
  lender_name, 
  lender_type, 
  rate_type, 
  term, 
  base_rate, 
  transaction_types, 
  province,
  min_down_payment,
  max_loan_to_value,
  prime_discount
) VALUES 
-- Big 5 Banks HELOC rates
('RBC Royal Bank', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'Big 5 Bank', 'variable', '1-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),

-- Credit Union HELOC rates
('Vancity', 'Credit Union', 'variable', '1-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'Credit Union', 'variable', '1-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('BlueShore Financial', 'Credit Union', 'variable', '1-year', 7.05, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.35%'),

-- Alternative Lenders HELOC rates
('First National', 'Alternative Lender', 'variable', '1-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),
('MCAP', 'Alternative Lender', 'variable', '1-year', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.65%'),
('Merix Financial', 'Alternative Lender', 'variable', '1-year', 7.40, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.70%'),

-- Multi-year HELOC rates (2-year)
('RBC Royal Bank', 'Big 5 Bank', 'variable', '2-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '2-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '2-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'Credit Union', 'variable', '2-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('First National', 'Alternative Lender', 'variable', '2-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- Multi-year HELOC rates (3-year)
('RBC Royal Bank', 'Big 5 Bank', 'variable', '3-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '3-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '3-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'Credit Union', 'variable', '3-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('First National', 'Alternative Lender', 'variable', '3-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),

-- 5-year HELOC rates
('RBC Royal Bank', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'Big 5 Bank', 'variable', '5-year', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'Credit Union', 'variable', '5-year', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'Credit Union', 'variable', '5-year', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'Alternative Lender', 'variable', '5-year', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),
('MCAP', 'Alternative Lender', 'variable', '5-year', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.65%');