-- Fix HELOC rates that are stored as decimals instead of percentages
UPDATE mortgage_rates 
SET base_rate = CASE 
  WHEN base_rate < 1.0 AND 'heloc' = ANY(transaction_types) THEN base_rate * 100  -- Convert decimal rates to percentage
  ELSE base_rate 
END
WHERE 'heloc' = ANY(transaction_types) AND base_rate < 1.0 AND is_active = true;

-- Delete any HELOC rates that might be duplicates or inconsistent
DELETE FROM mortgage_rates 
WHERE 'heloc' = ANY(transaction_types) AND base_rate > 15.0;

-- Add comprehensive HELOC rates to ensure complete coverage
-- Main banks for all provinces
INSERT INTO mortgage_rates (
  lender_name, lender_type, rate_type, term, base_rate, 
  transaction_types, province, min_down_payment, max_loan_to_value, prime_discount
) VALUES 
-- HELOC term should be 'HELOC' for variable credit line products
('RBC Royal Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.50%'),
('RBC Royal Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.50%'),
('RBC Royal Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'AB', 0.20, 0.80, 'Prime + 0.50%'),

('TD Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'AB', 0.20, 0.80, 'Prime + 0.50%'),

('BMO Bank of Montreal', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'AB', 0.20, 0.80, 'Prime + 0.50%'),

('Scotiabank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'AB', 0.20, 0.80, 'Prime + 0.50%'),

('CIBC', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'AB', 0.20, 0.80, 'Prime + 0.50%'),

-- Credit unions with better rates
('Vancity', 'credit_union', 'variable', 'HELOC', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Vancity', 'credit_union', 'variable', 'HELOC', 6.95, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.25%'),

('Coast Capital Savings', 'credit_union', 'variable', 'HELOC', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('Coast Capital Savings', 'credit_union', 'variable', 'HELOC', 7.10, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.40%'),

('Desjardins', 'credit_union', 'variable', 'HELOC', 6.95, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.25%'),

('Servus Credit Union', 'credit_union', 'variable', 'HELOC', 7.05, ARRAY['heloc'], 'AB', 0.20, 0.80, 'Prime + 0.35%'),

-- Alternative lenders
('First National', 'alternative', 'variable', 'HELOC', 7.45, ARRAY['heloc'], 'ON', 0.20, 0.75, 'Prime + 0.75%'),
('First National', 'alternative', 'variable', 'HELOC', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),
('First National', 'alternative', 'variable', 'HELOC', 7.45, ARRAY['heloc'], 'AB', 0.20, 0.75, 'Prime + 0.75%'),
('First National', 'alternative', 'variable', 'HELOC', 7.45, ARRAY['heloc'], 'QC', 0.20, 0.75, 'Prime + 0.75%'),

('MCAP', 'alternative', 'variable', 'HELOC', 7.35, ARRAY['heloc'], 'ON', 0.20, 0.75, 'Prime + 0.65%'),
('MCAP', 'alternative', 'variable', 'HELOC', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.65%'),
('MCAP', 'alternative', 'variable', 'HELOC', 7.35, ARRAY['heloc'], 'AB', 0.20, 0.75, 'Prime + 0.65%'),
('MCAP', 'alternative', 'variable', 'HELOC', 7.35, ARRAY['heloc'], 'QC', 0.20, 0.75, 'Prime + 0.65%'),

('nesto', 'alternative', 'variable', 'HELOC', 7.25, ARRAY['heloc'], 'ON', 0.20, 0.75, 'Prime + 0.55%'),
('nesto', 'alternative', 'variable', 'HELOC', 7.25, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.55%'),
('nesto', 'alternative', 'variable', 'HELOC', 7.25, ARRAY['heloc'], 'QC', 0.20, 0.75, 'Prime + 0.55%'),

-- National Bank
('National Bank', 'bank', 'variable', 'HELOC', 7.30, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.60%'),
('National Bank', 'bank', 'variable', 'HELOC', 7.30, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.60%'),

-- Tangerine
('Tangerine', 'bank', 'variable', 'HELOC', 7.15, ARRAY['heloc'], 'ON', 0.20, 0.80, 'Prime + 0.45%'),
('Tangerine', 'bank', 'variable', 'HELOC', 7.15, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.45%'),
('Tangerine', 'bank', 'variable', 'HELOC', 7.15, ARRAY['heloc'], 'AB', 0.20, 0.80, 'Prime + 0.45%'),
('Tangerine', 'bank', 'variable', 'HELOC', 7.15, ARRAY['heloc'], 'QC', 0.20, 0.80, 'Prime + 0.45%')

ON CONFLICT DO NOTHING;