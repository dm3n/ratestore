
-- Insert sample mortgage rates for testing
INSERT INTO mortgage_rates (
  lender_name,
  lender_type,
  rate_type,
  term,
  base_rate,
  min_down_payment,
  max_loan_to_value,
  transaction_types,
  prime_discount,
  province,
  is_active
) VALUES
-- RBC Rates
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0479, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0545, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 0.10%', 'ON', true),
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 0.0464, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('RBC Royal Bank', 'bank', 'variable', '3-yr', 0.0545, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 0.10%', 'ON', true),
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 0.0449, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

-- TD Bank Rates
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0484, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0550, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 0.05%', 'ON', true),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 0.0469, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('TD Canada Trust', 'bank', 'variable', '3-yr', 0.0550, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 0.05%', 'ON', true),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 0.0454, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

-- Scotiabank Rates
('Scotiabank', 'bank', 'fixed', '5-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('Scotiabank', 'bank', 'variable', '5-yr', 0.0555, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime + 0.00%', 'ON', true),
('Scotiabank', 'bank', 'fixed', '3-yr', 0.0474, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('Scotiabank', 'bank', 'variable', '3-yr', 0.0555, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime + 0.00%', 'ON', true),
('Scotiabank', 'bank', 'fixed', '2-yr', 0.0459, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

-- BMO Rates
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 0.0487, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 0.0552, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 0.03%', 'ON', true),
('BMO Bank of Montreal', 'bank', 'fixed', '3-yr', 0.0472, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('BMO Bank of Montreal', 'bank', 'variable', '3-yr', 0.0552, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 0.03%', 'ON', true),
('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 0.0457, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

-- CIBC Rates
('CIBC', 'bank', 'fixed', '5-yr', 0.0492, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('CIBC', 'bank', 'variable', '5-yr', 0.0557, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime + 0.02%', 'ON', true),
('CIBC', 'bank', 'fixed', '3-yr', 0.0477, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('CIBC', 'bank', 'variable', '3-yr', 0.0557, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime + 0.02%', 'ON', true),
('CIBC', 'bank', 'fixed', '2-yr', 0.0462, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

-- Alternative Lenders - Better Rates
('Canadian Lender', 'alternative', 'fixed', '5-yr', 0.0384, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('Canadian Lender', 'alternative', 'variable', '5-yr', 0.0395, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.60%', 'ON', true),
('Canadian Lender', 'alternative', 'fixed', '3-yr', 0.0379, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('Canadian Lender', 'alternative', 'variable', '3-yr', 0.0395, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.60%', 'ON', true),
('Canadian Lender', 'alternative', 'fixed', '2-yr', 0.0369, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

-- More Alternative Lenders
('First National', 'alternative', 'fixed', '5-yr', 0.0404, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('First National', 'alternative', 'variable', '5-yr', 0.0415, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.40%', 'ON', true),
('First National', 'alternative', 'fixed', '3-yr', 0.0399, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

('MCAP', 'alternative', 'fixed', '5-yr', 0.0409, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('MCAP', 'alternative', 'variable', '5-yr', 0.0420, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.35%', 'ON', true),
('MCAP', 'alternative', 'fixed', '3-yr', 0.0404, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

('Merix Financial', 'alternative', 'fixed', '5-yr', 0.0414, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('Merix Financial', 'alternative', 'variable', '5-yr', 0.0425, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.30%', 'ON', true),
('Merix Financial', 'alternative', 'fixed', '3-yr', 0.0409, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),

('Canwise Financial', 'alternative', 'fixed', '5-yr', 0.0419, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('Canwise Financial', 'alternative', 'variable', '5-yr', 0.0430, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.25%', 'ON', true),

('Nesto', 'alternative', 'fixed', '5-yr', 0.0424, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('Nesto', 'alternative', 'variable', '5-yr', 0.0435, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.20%', 'ON', true),

('True North Mortgage', 'alternative', 'fixed', '5-yr', 0.0429, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'ON', true),
('True North Mortgage', 'alternative', 'variable', '5-yr', 0.0440, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime - 1.15%', 'ON', true),

-- HELOC Rates
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0720, 0.20, 0.65, ARRAY['heloc'], 'Prime + 0.50%', 'ON', true),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0725, 0.20, 0.65, ARRAY['heloc'], 'Prime + 0.55%', 'ON', true),
('Scotiabank', 'bank', 'variable', '5-yr', 0.0730, 0.20, 0.65, ARRAY['heloc'], 'Prime + 0.60%', 'ON', true),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 0.0728, 0.20, 0.65, ARRAY['heloc'], 'Prime + 0.58%', 'ON', true),
('CIBC', 'bank', 'variable', '5-yr', 0.0732, 0.20, 0.65, ARRAY['heloc'], 'Prime + 0.62%', 'ON', true),

-- Provincial Rates (Alberta)
('ATB Financial', 'bank', 'fixed', '5-yr', 0.0494, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'AB', true),
('ATB Financial', 'bank', 'variable', '5-yr', 0.0562, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime + 0.07%', 'AB', true),

-- Provincial Rates (BC)
('Vancity', 'credit_union', 'fixed', '5-yr', 0.0491, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'BC', true),
('Vancity', 'credit_union', 'variable', '5-yr', 0.0559, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime + 0.04%', 'BC', true),

-- Provincial Rates (Quebec)
('Desjardins', 'credit_union', 'fixed', '5-yr', 0.0496, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], NULL, 'QC', true),
('Desjardins', 'credit_union', 'variable', '5-yr', 0.0564, 0.05, 0.95, ARRAY['buying', 'renewal', 'refinancing'], 'Prime + 0.09%', 'QC', true);
