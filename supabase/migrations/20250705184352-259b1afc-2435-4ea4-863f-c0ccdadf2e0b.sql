
-- Add comprehensive sample mortgage rates for all provinces
INSERT INTO public.mortgage_rates (lender_name, lender_type, rate_type, term, base_rate, min_down_payment, max_loan_to_value, transaction_types, prime_discount, is_active, province) VALUES

-- British Columbia (BC) rates
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 0.0599, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 0.0549, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 0.0499, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0484, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0595, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.00%', true, 'BC'),

('TD Canada Trust', 'bank', 'fixed', '1-yr', 0.0589, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 0.0539, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0474, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0585, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.10%', true, 'BC'),

('Scotiabank', 'bank', 'fixed', '1-yr', 0.0594, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('Scotiabank', 'bank', 'fixed', '2-yr', 0.0544, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('Scotiabank', 'bank', 'fixed', '3-yr', 0.0494, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('Scotiabank', 'bank', 'fixed', '5-yr', 0.0479, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('Scotiabank', 'bank', 'variable', '5-yr', 0.0590, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.05%', true, 'BC'),

('BMO Bank of Montreal', 'bank', 'fixed', '2-yr', 0.0534, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 0.0469, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '5-yr', 0.0580, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.15%', true, 'BC'),

('CIBC', 'bank', 'fixed', '3-yr', 0.0504, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('CIBC', 'bank', 'fixed', '5-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('CIBC', 'bank', 'variable', '5-yr', 0.0595, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.00%', true, 'BC'),

-- BC Credit Unions and Alternative Lenders
('Vancity', 'credit_union', 'fixed', '5-yr', 0.0459, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('Coast Capital Savings', 'credit_union', 'fixed', '5-yr', 0.0464, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),
('First National', 'alternative', 'fixed', '5-yr', 0.0449, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'BC'),

-- Alberta (AB) rates
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 0.0604, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 0.0554, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 0.0504, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0600, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.95%', true, 'AB'),

('TD Canada Trust', 'bank', 'fixed', '1-yr', 0.0594, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 0.0544, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 0.0494, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0479, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0590, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.05%', true, 'AB'),

('ATB Financial', 'bank', 'fixed', '1-yr', 0.0589, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('ATB Financial', 'bank', 'fixed', '3-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('ATB Financial', 'bank', 'fixed', '5-yr', 0.0464, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('ATB Financial', 'bank', 'variable', '5-yr', 0.0575, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.20%', true, 'AB'),

('Servus Credit Union', 'credit_union', 'fixed', '5-yr', 0.0454, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),
('Connect First Credit Union', 'credit_union', 'fixed', '5-yr', 0.0459, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'AB'),

-- Ontario (ON) rates
('RBC Royal Bank', 'bank', 'fixed', '1-yr', 0.0609, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('RBC Royal Bank', 'bank', 'fixed', '2-yr', 0.0559, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('RBC Royal Bank', 'bank', 'fixed', '3-yr', 0.0509, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0494, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0605, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.90%', true, 'ON'),

('TD Canada Trust', 'bank', 'fixed', '1-yr', 0.0599, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('TD Canada Trust', 'bank', 'fixed', '2-yr', 0.0549, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('TD Canada Trust', 'bank', 'fixed', '3-yr', 0.0499, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0484, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0595, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.00%', true, 'ON'),

('Scotiabank', 'bank', 'fixed', '2-yr', 0.0554, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('Scotiabank', 'bank', 'fixed', '5-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('BMO Bank of Montreal', 'bank', 'fixed', '5-yr', 0.0479, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('CIBC', 'bank', 'fixed', '5-yr', 0.0494, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),

-- Ontario Credit Unions and Alternative Lenders
('Meridian Credit Union', 'credit_union', 'fixed', '5-yr', 0.0449, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('DUCA Credit Union', 'credit_union', 'fixed', '5-yr', 0.0454, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),
('Tangerine Bank', 'bank', 'fixed', '5-yr', 0.0469, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'ON'),

-- Quebec (QC) rates
('RBC Banque Royale', 'bank', 'fixed', '1-yr', 0.0614, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('RBC Banque Royale', 'bank', 'fixed', '2-yr', 0.0564, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('RBC Banque Royale', 'bank', 'fixed', '3-yr', 0.0514, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('RBC Banque Royale', 'bank', 'fixed', '5-yr', 0.0499, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('RBC Banque Royale', 'bank', 'variable', '5-yr', 0.0610, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 0.85%', true, 'QC'),

('Banque TD', 'bank', 'fixed', '1-yr', 0.0604, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('Banque TD', 'bank', 'fixed', '2-yr', 0.0554, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('Banque TD', 'bank', 'fixed', '5-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),

('Banque Nationale', 'bank', 'fixed', '1-yr', 0.0599, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('Banque Nationale', 'bank', 'fixed', '3-yr', 0.0489, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('Banque Nationale', 'bank', 'fixed', '5-yr', 0.0474, 0.05, 0.95, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('Banque Nationale', 'bank', 'variable', '5-yr', 0.0585, 0.05, 0.95, ARRAY['buying', 'refinancing'], 'Prime - 1.10%', true, 'QC'),

-- Quebec Credit Unions
('Desjardins', 'credit_union', 'fixed', '1-yr', 0.0589, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('Desjardins', 'credit_union', 'fixed', '3-yr', 0.0479, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),
('Desjardins', 'credit_union', 'fixed', '5-yr', 0.0464, 0.05, 0.90, ARRAY['buying', 'refinancing'], NULL, true, 'QC'),

-- HELOC rates for all provinces
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0695, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.00%', true, 'BC'),
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0695, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.00%', true, 'AB'),
('RBC Royal Bank', 'bank', 'variable', '5-yr', 0.0695, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.00%', true, 'ON'),
('RBC Banque Royale', 'bank', 'variable', '5-yr', 0.0695, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.00%', true, 'QC'),

('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0720, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.25%', true, 'BC'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0720, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.25%', true, 'AB'),
('TD Canada Trust', 'bank', 'variable', '5-yr', 0.0720, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.25%', true, 'ON'),
('Banque TD', 'bank', 'variable', '5-yr', 0.0720, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.25%', true, 'QC'),

-- Renewal rates for all provinces
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0534, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'BC'),
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0539, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'AB'),
('RBC Royal Bank', 'bank', 'fixed', '5-yr', 0.0544, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'ON'),
('RBC Banque Royale', 'bank', 'fixed', '5-yr', 0.0549, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'QC'),

('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0524, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'BC'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0529, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'AB'),
('TD Canada Trust', 'bank', 'fixed', '5-yr', 0.0534, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'ON'),
('Banque TD', 'bank', 'fixed', '5-yr', 0.0539, 0.00, 0.95, ARRAY['renewal'], NULL, true, 'QC');
