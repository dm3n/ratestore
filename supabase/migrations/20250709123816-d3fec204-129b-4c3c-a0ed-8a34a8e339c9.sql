-- Add missing HELOC fixed rates to populate the calculator properly
INSERT INTO mortgage_rates (
  lender_name, lender_type, rate_type, term, base_rate, 
  min_down_payment, max_loan_to_value, transaction_types, 
  prime_discount, province, is_active
) VALUES
-- Add fixed HELOC rates for major banks
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 0.0450, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 0.0475, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 0.0460, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 0.0485, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 0.0465, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 0.0490, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('CIBC', 'bank', 'fixed', '2-yr', 0.0470, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('CIBC', 'bank', 'fixed', '3-yr', 0.0495, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('Scotiabank', 'bank', 'fixed', '2-yr', 0.0475, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),
('Scotiabank', 'bank', 'fixed', '3-yr', 0.0500, 0.20, 0.80, ARRAY['heloc'], NULL, 'BC', true),

-- Add missing 1-yr HELOC rates for all major lenders
('TD Canada Trust', 'bank', 'variable', '1-yr', 0.0760, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.85%', 'BC', true),
('BMO Bank of Montreal', 'bank', 'variable', '1-yr', 0.0755, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.80%', 'BC', true),
('Tangerine', 'bank', 'variable', '1-yr', 0.0725, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.50%', 'BC', true),
('First National Financial', 'home', 'variable', '1-yr', 0.0720, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.45%', 'BC', true),
('MCAP', 'home', 'variable', '1-yr', 0.0715, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.40%', 'BC', true),
('nesto', 'home', 'variable', '1-yr', 0.0710, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.35%', 'BC', true),

-- Add more provincial coverage for existing lenders
('RBC Royal Bank', 'bank', 'variable', '1-yr', 0.0765, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.90%', 'ON', true),
('RBC Royal Bank', 'bank', 'variable', '2-yr', 0.0755, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.80%', 'ON', true),
('RBC Royal Bank', 'bank', 'variable', '3-yr', 0.0765, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.90%', 'ON', true),

('TD Canada Trust', 'bank', 'variable', '1-yr', 0.0760, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.85%', 'ON', true),
('BMO Bank of Montreal', 'bank', 'variable', '1-yr', 0.0755, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.80%', 'ON', true),
('CIBC', 'bank', 'variable', '1-yr', 0.0762, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.87%', 'ON', true),
('Scotiabank', 'bank', 'variable', '1-yr', 0.0770, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.95%', 'ON', true);