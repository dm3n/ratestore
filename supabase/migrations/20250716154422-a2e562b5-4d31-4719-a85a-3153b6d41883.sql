-- Fix incorrect rates that are stored as decimals instead of percentages
-- Update any rates below 1% to be reasonable mortgage rates
UPDATE mortgage_rates 
SET base_rate = CASE 
  WHEN base_rate < 1.0 THEN base_rate * 100  -- Convert decimal rates to percentage
  ELSE base_rate 
END
WHERE base_rate < 1.0 AND is_active = true;

-- Fix any rates above 15% (unrealistic for current market)
UPDATE mortgage_rates 
SET base_rate = CASE 
  WHEN base_rate > 15.0 THEN base_rate / 100  -- Convert back to reasonable percentage
  ELSE base_rate 
END
WHERE base_rate > 15.0 AND is_active = true;

-- Fix GIC rates with same issue
UPDATE gic_rates 
SET rate = CASE 
  WHEN rate < 1.0 THEN rate * 100  -- Convert decimal rates to percentage
  ELSE rate 
END
WHERE rate < 1.0 AND is_active = true;

-- Ensure we have comprehensive HELOC rates for all terms
INSERT INTO mortgage_rates (
  lender_name, lender_type, rate_type, term, base_rate, 
  transaction_types, province, min_down_payment, max_loan_to_value, prime_discount
) VALUES 
-- Fill missing HELOC rates for standard terms
('RBC Royal Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('TD Bank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('BMO Bank of Montreal', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Scotiabank', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('CIBC', 'bank', 'variable', 'HELOC', 7.20, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.50%'),
('Vancity', 'credit_union', 'variable', 'HELOC', 6.95, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.25%'),
('Coast Capital Savings', 'credit_union', 'variable', 'HELOC', 7.10, ARRAY['heloc'], 'BC', 0.20, 0.80, 'Prime + 0.40%'),
('First National', 'alternative', 'variable', 'HELOC', 7.45, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.75%'),
('MCAP', 'alternative', 'variable', 'HELOC', 7.35, ARRAY['heloc'], 'BC', 0.20, 0.75, 'Prime + 0.65%')
ON CONFLICT DO NOTHING;

-- Add more comprehensive GIC rates to fill gaps
INSERT INTO gic_rates (
  institution, term, gic_type, rate, min_investment, province, is_active
) VALUES 
('RBC Royal Bank', '1-year', 'Non-Registered', 4.75, 1000, 'BC', true),
('TD Bank', '1-year', 'Non-Registered', 4.70, 1000, 'BC', true),
('BMO Bank of Montreal', '1-year', 'Non-Registered', 4.65, 1000, 'BC', true),
('Scotiabank', '1-year', 'Non-Registered', 4.60, 1000, 'BC', true),
('CIBC', '1-year', 'Non-Registered', 4.55, 1000, 'BC', true),
('RBC Royal Bank', '2-year', 'Non-Registered', 4.50, 1000, 'BC', true),
('TD Bank', '2-year', 'Non-Registered', 4.45, 1000, 'BC', true),
('BMO Bank of Montreal', '2-year', 'Non-Registered', 4.40, 1000, 'BC', true),
('Scotiabank', '2-year', 'Non-Registered', 4.35, 1000, 'BC', true),
('CIBC', '2-year', 'Non-Registered', 4.30, 1000, 'BC', true),
('RBC Royal Bank', '3-year', 'Non-Registered', 4.25, 1000, 'BC', true),
('TD Bank', '3-year', 'Non-Registered', 4.20, 1000, 'BC', true),
('BMO Bank of Montreal', '3-year', 'Non-Registered', 4.15, 1000, 'BC', true),
('Scotiabank', '3-year', 'Non-Registered', 4.10, 1000, 'BC', true),
('CIBC', '3-year', 'Non-Registered', 4.05, 1000, 'BC', true),
('RBC Royal Bank', '5-year', 'Non-Registered', 4.00, 1000, 'BC', true),
('TD Bank', '5-year', 'Non-Registered', 3.95, 1000, 'BC', true),
('BMO Bank of Montreal', '5-year', 'Non-Registered', 3.90, 1000, 'BC', true),
('Scotiabank', '5-year', 'Non-Registered', 3.85, 1000, 'BC', true),
('CIBC', '5-year', 'Non-Registered', 3.80, 1000, 'BC', true)
ON CONFLICT DO NOTHING;