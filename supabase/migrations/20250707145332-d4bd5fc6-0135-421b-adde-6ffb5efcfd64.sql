
-- Insert realistic Canadian mortgage rates for testing
-- Big 5 Banks
INSERT INTO public.mortgage_rates (lender_name, lender_type, rate_type, term, base_rate, min_down_payment, max_loan_to_value, transaction_types, prime_discount, province) VALUES
-- RBC
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0639, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0695, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.80%', 'BC'),
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 0.0649, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('RBC Royal Bank', 'bank', 'variable', '3-yr', 0.0705, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.70%', 'BC'),
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 0.0659, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

-- TD Canada Trust
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0644, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0690, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.85%', 'BC'),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 0.0654, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('TD Canada Trust', 'bank', 'variable', '3-yr', 0.0700, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.75%', 'BC'),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 0.0664, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

-- Scotiabank
('Scotiabank', 'bank', 'fixed', '5-yr', 0.0649, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('Scotiabank', 'bank', 'variable', '5-yr', 0.0685, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.90%', 'BC'),
('Scotiabank', 'bank', 'fixed', '3-yr', 0.0659, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('Scotiabank', 'bank', 'variable', '3-yr', 0.0695, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.80%', 'BC'),
('Scotiabank', 'bank', 'fixed', '2-yr', 0.0669, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

-- BMO Bank of Montreal
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 0.0634, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 0.0680, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.95%', 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 0.0644, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '3-yr', 0.0690, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.85%', 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 0.0654, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

-- CIBC
('CIBC', 'bank', 'fixed', '5-yr', 0.0641, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('CIBC', 'bank', 'variable', '5-yr', 0.0687, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.88%', 'BC'),
('CIBC', 'bank', 'fixed', '3-yr', 0.0651, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('CIBC', 'bank', 'variable', '3-yr', 0.0697, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.78%', 'BC'),
('CIBC', 'bank', 'fixed', '2-yr', 0.0661, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

-- Alternative lenders with competitive rates
('First National Financial', 'home', 'fixed', '5-yr', 0.0584, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('First National Financial', 'home', 'variable', '5-yr', 0.0640, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.35%', 'BC'),
('First National Financial', 'home', 'fixed', '3-yr', 0.0594, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('First National Financial', 'home', 'fixed', '2-yr', 0.0604, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

('MCAP', 'home', 'fixed', '5-yr', 0.0589, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('MCAP', 'home', 'variable', '5-yr', 0.0645, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.30%', 'BC'),
('MCAP', 'home', 'fixed', '3-yr', 0.0599, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('MCAP', 'home', 'fixed', '2-yr', 0.0609, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

('Tangerine', 'bank', 'fixed', '5-yr', 0.0619, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('Tangerine', 'bank', 'variable', '5-yr', 0.0665, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.10%', 'BC'),
('Tangerine', 'bank', 'fixed', '3-yr', 0.0629, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

('Desjardins', 'credit_union', 'fixed', '5-yr', 0.0629, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('Desjardins', 'credit_union', 'variable', '5-yr', 0.0675, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.00%', 'BC'),
('Desjardins', 'credit_union', 'fixed', '3-yr', 0.0639, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

('Meridian Credit Union', 'credit_union', 'fixed', '5-yr', 0.0609, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('Meridian Credit Union', 'credit_union', 'variable', '5-yr', 0.0655, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.20%', 'BC'),
('Meridian Credit Union', 'credit_union', 'fixed', '3-yr', 0.0619, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),

('Paymi', 'alternative', 'fixed', '5-yr', 0.0579, 0.10, 0.90, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('Paymi', 'alternative', 'variable', '5-yr', 0.0635, 0.10, 0.90, ARRAY['buying', 'refinancing'], 'Prime - 1.40%', 'BC'),

('Butler Mortgage', 'home', 'fixed', '5-yr', 0.0574, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('Butler Mortgage', 'home', 'variable', '5-yr', 0.0630, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.45%', 'BC'),

('nesto', 'home', 'fixed', '5-yr', 0.0569, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, 'BC'),
('nesto', 'home', 'variable', '5-yr', 0.0625, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.50%', 'BC'),

-- Add HELOC rates
('RBC Royal Bank', 'bank', 'variable', '1-yr', 0.0775, 0.20, 0.80, ARRAY['heloc'], 'Prime + 1.00%', 'BC'),
('TD Canada Trust', 'bank', 'variable', '1-yr', 0.0770, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.95%', 'BC'),
('Scotiabank', 'bank', 'variable', '1-yr', 0.0780, 0.20, 0.80, ARRAY['heloc'], 'Prime + 1.05%', 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '1-yr', 0.0765, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.90%', 'BC'),
('CIBC', 'bank', 'variable', '1-yr', 0.0772, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.97%', 'BC'),

-- Add renewal rates
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0654, 0.00, 1.00, ARRAY['renewal'], NULL, 'BC'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0659, 0.00, 1.00, ARRAY['renewal'], NULL, 'BC'),
('Scotiabank', 'bank', 'fixed', '5-yr', 0.0664, 0.00, 1.00, ARRAY['renewal'], NULL, 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 0.0649, 0.00, 1.00, ARRAY['renewal'], NULL, 'BC'),
('CIBC', 'bank', 'fixed', '5-yr', 0.0656, 0.00, 1.00, ARRAY['renewal'], NULL, 'BC');
