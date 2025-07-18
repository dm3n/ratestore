-- Add more comprehensive mortgage rates for better filtering functionality

-- 1. Add rates with different down payment requirements and transaction types
-- High ratio rates (5% down payment)
INSERT INTO mortgage_rates (lender_name, lender_type, rate_type, term, base_rate, min_down_payment, max_loan_to_value, transaction_types, province)
VALUES
-- High ratio rates - requiring CMHC insurance
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 6.49, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '1-yr', 6.54, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '1-yr', 6.59, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '1-yr', 6.64, 0.05, 0.95, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '1-yr', 6.69, 0.05, 0.95, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '2-yr', 6.19, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 6.24, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 6.29, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '2-yr', 6.34, 0.05, 0.95, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '2-yr', 6.39, 0.05, 0.95, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '3-yr', 5.89, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 5.94, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 5.99, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '3-yr', 6.04, 0.05, 0.95, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '3-yr', 6.09, 0.05, 0.95, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '5-yr', 5.49, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 5.54, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 5.59, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '5-yr', 5.64, 0.05, 0.95, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '5-yr', 5.69, 0.05, 0.95, ARRAY['buying'], 'BC'),

-- Conventional rates (20% down payment) - better rates
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 6.29, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '1-yr', 6.34, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '1-yr', 6.39, 0.20, 0.80, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '1-yr', 6.44, 0.20, 0.80, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '1-yr', 6.49, 0.20, 0.80, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '2-yr', 5.99, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 6.04, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 6.09, 0.20, 0.80, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '2-yr', 6.14, 0.20, 0.80, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '2-yr', 6.19, 0.20, 0.80, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '3-yr', 5.69, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 5.74, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 5.79, 0.20, 0.80, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '3-yr', 5.84, 0.20, 0.80, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '3-yr', 5.89, 0.20, 0.80, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '5-yr', 5.29, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 5.34, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 5.39, 0.20, 0.80, ARRAY['buying'], 'BC'),
('Scotiabank', 'bank', 'fixed', '5-yr', 5.44, 0.20, 0.80, ARRAY['buying'], 'BC'),
('CIBC', 'bank', 'fixed', '5-yr', 5.49, 0.20, 0.80, ARRAY['buying'], 'BC'),

-- Refinancing rates (typically higher)
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 6.79, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '1-yr', 6.84, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '1-yr', 6.89, 0.20, 0.80, ARRAY['refinancing'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '2-yr', 6.49, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 6.54, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 6.59, 0.20, 0.80, ARRAY['refinancing'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '3-yr', 6.19, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 6.24, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 6.29, 0.20, 0.80, ARRAY['refinancing'], 'BC'),

('RBC Royal Bank', 'bank', 'fixed', '5-yr', 5.79, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 5.84, 0.20, 0.80, ARRAY['refinancing'], 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 5.89, 0.20, 0.80, ARRAY['refinancing'], 'BC'),

-- Variable rates for different scenarios
('RBC Royal Bank', 'bank', 'variable', '1-yr', 6.95, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '1-yr', 7.00, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '1-yr', 7.05, 0.05, 0.95, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'variable', '2-yr', 6.85, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '2-yr', 6.90, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '2-yr', 6.95, 0.05, 0.95, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'variable', '3-yr', 6.75, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '3-yr', 6.80, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '3-yr', 6.85, 0.05, 0.95, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'variable', '5-yr', 6.65, 0.05, 0.95, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 6.70, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 6.75, 0.05, 0.95, ARRAY['buying'], 'BC'),

-- Conventional variable rates (20% down)
('RBC Royal Bank', 'bank', 'variable', '1-yr', 6.75, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '1-yr', 6.80, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '1-yr', 6.85, 0.20, 0.80, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'variable', '2-yr', 6.65, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '2-yr', 6.70, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '2-yr', 6.75, 0.20, 0.80, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'variable', '3-yr', 6.55, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '3-yr', 6.60, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '3-yr', 6.65, 0.20, 0.80, ARRAY['buying'], 'BC'),

('RBC Royal Bank', 'bank', 'variable', '5-yr', 6.45, 0.20, 0.80, ARRAY['buying'], 'BC'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 6.50, 0.20, 0.80, ARRAY['buying'], 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 6.55, 0.20, 0.80, ARRAY['buying'], 'BC'),

-- Alternative lender rates (typically higher)
('First National', 'alternative', 'fixed', '1-yr', 7.19, 0.05, 0.95, ARRAY['buying'], 'BC'),
('MCAP', 'alternative', 'fixed', '1-yr', 7.24, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Merix Financial', 'alternative', 'fixed', '1-yr', 7.29, 0.05, 0.95, ARRAY['buying'], 'BC'),

('First National', 'alternative', 'fixed', '2-yr', 6.89, 0.05, 0.95, ARRAY['buying'], 'BC'),
('MCAP', 'alternative', 'fixed', '2-yr', 6.94, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Merix Financial', 'alternative', 'fixed', '2-yr', 6.99, 0.05, 0.95, ARRAY['buying'], 'BC'),

('First National', 'alternative', 'fixed', '3-yr', 6.59, 0.05, 0.95, ARRAY['buying'], 'BC'),
('MCAP', 'alternative', 'fixed', '3-yr', 6.64, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Merix Financial', 'alternative', 'fixed', '3-yr', 6.69, 0.05, 0.95, ARRAY['buying'], 'BC'),

('First National', 'alternative', 'fixed', '5-yr', 6.29, 0.05, 0.95, ARRAY['buying'], 'BC'),
('MCAP', 'alternative', 'fixed', '5-yr', 6.34, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Merix Financial', 'alternative', 'fixed', '5-yr', 6.39, 0.05, 0.95, ARRAY['buying'], 'BC'),

-- Credit union competitive rates
('Vancity', 'credit_union', 'fixed', '1-yr', 6.39, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Coast Capital', 'credit_union', 'fixed', '1-yr', 6.44, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BlueShore Financial', 'credit_union', 'fixed', '1-yr', 6.49, 0.05, 0.95, ARRAY['buying'], 'BC'),

('Vancity', 'credit_union', 'fixed', '2-yr', 6.09, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Coast Capital', 'credit_union', 'fixed', '2-yr', 6.14, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BlueShore Financial', 'credit_union', 'fixed', '2-yr', 6.19, 0.05, 0.95, ARRAY['buying'], 'BC'),

('Vancity', 'credit_union', 'fixed', '3-yr', 5.79, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Coast Capital', 'credit_union', 'fixed', '3-yr', 5.84, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BlueShore Financial', 'credit_union', 'fixed', '3-yr', 5.89, 0.05, 0.95, ARRAY['buying'], 'BC'),

('Vancity', 'credit_union', 'fixed', '5-yr', 5.39, 0.05, 0.95, ARRAY['buying'], 'BC'),
('Coast Capital', 'credit_union', 'fixed', '5-yr', 5.44, 0.05, 0.95, ARRAY['buying'], 'BC'),
('BlueShore Financial', 'credit_union', 'fixed', '5-yr', 5.49, 0.05, 0.95, ARRAY['buying'], 'BC');

-- Update some existing rates to ensure proper filtering
UPDATE mortgage_rates 
SET transaction_types = ARRAY['buying'] 
WHERE transaction_types = ARRAY['buying', 'refinancing', 'renewal'] 
AND lender_type = 'alternative' 
AND min_down_payment = 0.05;