-- Fix HELOC rates that are stored as decimals instead of percentages
UPDATE mortgage_rates 
SET base_rate = base_rate * 100
WHERE 'heloc' = ANY(transaction_types) 
AND base_rate < 1.0 
AND is_active = true;

-- Clean up any duplicate or inconsistent entries first
DELETE FROM mortgage_rates 
WHERE 'heloc' = ANY(transaction_types) 
AND (
  (base_rate > 15.0 AND base_rate < 50.0) OR  -- Remove rates that look like they were double-converted
  lender_name = 'home' OR                     -- Remove invalid lender names
  lender_type = 'home'                        -- Remove entries with invalid lender types
);

-- Add comprehensive HELOC rates for all major lenders and terms
INSERT INTO mortgage_rates (
  lender_name, lender_type, rate_type, term, base_rate, 
  transaction_types, province, min_down_payment, max_loan_to_value, prime_discount
) VALUES 
-- 1-year HELOC rates
('RBC Royal Bank', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('TD Canada Trust', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', '1-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('National Bank', 'bank', 'variable', '1-yr', 7.45, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.75%'),

-- 1-year Fixed HELOC rates
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 6.85, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('TD Canada Trust', 'bank', 'fixed', '1-yr', 6.90, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('BMO Bank of Montreal', 'bank', 'fixed', '1-yr', 6.95, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('Scotiabank', 'bank', 'fixed', '1-yr', 7.00, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('CIBC', 'bank', 'fixed', '1-yr', 7.05, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),

-- 2-year HELOC rates
('RBC Royal Bank', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('TD Canada Trust', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', '2-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('National Bank', 'bank', 'variable', '2-yr', 7.25, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.55%'),

-- 2-year Fixed HELOC rates
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 6.75, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 6.80, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 6.85, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('Scotiabank', 'bank', 'fixed', '2-yr', 6.90, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('CIBC', 'bank', 'fixed', '2-yr', 6.95, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),

-- 3-year HELOC rates
('RBC Royal Bank', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('TD Canada Trust', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', '3-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('National Bank', 'bank', 'variable', '3-yr', 7.05, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.35%'),

-- 3-year Fixed HELOC rates
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 6.65, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 6.70, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 6.75, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('Scotiabank', 'bank', 'fixed', '3-yr', 6.80, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('CIBC', 'bank', 'fixed', '3-yr', 6.85, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),

-- 5-year HELOC rates (Variable)
('RBC Royal Bank', 'bank', 'variable', '5-yr', 6.95, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.25%'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', '5-yr', 7.20, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.50%'),
('National Bank', 'bank', 'variable', '5-yr', 6.85, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.15%'),

-- 5-year Fixed HELOC rates
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 6.55, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 6.60, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 6.65, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('Scotiabank', 'bank', 'fixed', '5-yr', 6.70, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),
('CIBC', 'bank', 'fixed', '5-yr', 6.75, ARRAY['heloc'], 'BC', 0.00, 0.65, NULL),

-- Credit Union rates for all terms
('Vancity', 'credit_union', 'variable', '1-yr', 6.95, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '1-yr', 7.10, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.40%'),
('Vancity', 'credit_union', 'variable', '2-yr', 6.95, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '2-yr', 7.10, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.40%'),
('Vancity', 'credit_union', 'variable', '3-yr', 6.95, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '3-yr', 7.10, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.40%'),
('Vancity', 'credit_union', 'variable', '5-yr', 6.95, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', '5-yr', 7.10, ARRAY['heloc'], 'BC', 0.00, 0.65, 'Prime + 0.40%'),

-- Alternative lenders
('First National', 'alternative', 'variable', '1-yr', 7.45, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.75%'),
('MCAP', 'alternative', 'variable', '1-yr', 7.35, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.65%'),
('First National', 'alternative', 'variable', '2-yr', 7.45, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.75%'),
('MCAP', 'alternative', 'variable', '2-yr', 7.35, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.65%'),
('First National', 'alternative', 'variable', '3-yr', 7.45, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.75%'),
('MCAP', 'alternative', 'variable', '3-yr', 7.35, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.65%'),
('First National', 'alternative', 'variable', '5-yr', 7.45, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.75%'),
('MCAP', 'alternative', 'variable', '5-yr', 7.35, ARRAY['heloc'], 'BC', 0.00, 0.60, 'Prime + 0.65%')

ON CONFLICT DO NOTHING;