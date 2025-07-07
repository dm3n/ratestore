-- Add 2-year and 3-year HELOC rates for Canadian lenders
INSERT INTO public.mortgage_rates (lender_name, lender_type, rate_type, term, base_rate, min_down_payment, max_loan_to_value, transaction_types, prime_discount, province) VALUES

-- Big 5 Banks - 2-year HELOC rates
('RBC Royal Bank', 'bank', 'variable', '2-yr', 0.0765, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.90%', 'BC'),
('TD Canada Trust', 'bank', 'variable', '2-yr', 0.0760, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.85%', 'BC'),
('Scotiabank', 'bank', 'variable', '2-yr', 0.0770, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.95%', 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '2-yr', 0.0755, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.80%', 'BC'),
('CIBC', 'bank', 'variable', '2-yr', 0.0762, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.87%', 'BC'),

-- Big 5 Banks - 3-year HELOC rates
('RBC Royal Bank', 'bank', 'variable', '3-yr', 0.0775, 0.20, 0.80, ARRAY['heloc'], 'Prime + 1.00%', 'BC'),
('TD Canada Trust', 'bank', 'variable', '3-yr', 0.0770, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.95%', 'BC'),
('Scotiabank', 'bank', 'variable', '3-yr', 0.0780, 0.20, 0.80, ARRAY['heloc'], 'Prime + 1.05%', 'BC'),
('BMO Bank of Montreal', 'bank', 'variable', '3-yr', 0.0765, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.90%', 'BC'),
('CIBC', 'bank', 'variable', '3-yr', 0.0772, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.97%', 'BC'),

-- Credit Unions - 2-year HELOC rates
('Meridian Credit Union', 'credit_union', 'variable', '2-yr', 0.0745, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.70%', 'BC'),
('Desjardins', 'credit_union', 'variable', '2-yr', 0.0750, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.75%', 'BC'),
('Coast Capital Savings', 'credit_union', 'variable', '2-yr', 0.0740, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.65%', 'BC'),

-- Credit Unions - 3-year HELOC rates
('Meridian Credit Union', 'credit_union', 'variable', '3-yr', 0.0755, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.80%', 'BC'),
('Desjardins', 'credit_union', 'variable', '3-yr', 0.0760, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.85%', 'BC'),
('Coast Capital Savings', 'credit_union', 'variable', '3-yr', 0.0750, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.75%', 'BC'),

-- Alternative Lenders - 2-year HELOC rates
('Tangerine', 'bank', 'variable', '2-yr', 0.0735, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.60%', 'BC'),
('First National Financial', 'home', 'variable', '2-yr', 0.0730, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.55%', 'BC'),
('MCAP', 'home', 'variable', '2-yr', 0.0725, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.50%', 'BC'),

-- Alternative Lenders - 3-year HELOC rates
('Tangerine', 'bank', 'variable', '3-yr', 0.0745, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.70%', 'BC'),
('First National Financial', 'home', 'variable', '3-yr', 0.0740, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.65%', 'BC'),
('MCAP', 'home', 'variable', '3-yr', 0.0735, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.60%', 'BC'),

-- Online/Digital Lenders - 2-year HELOC rates
('nesto', 'home', 'variable', '2-yr', 0.0720, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.45%', 'BC'),
('Paymi', 'alternative', 'variable', '2-yr', 0.0715, 0.20, 0.75, ARRAY['heloc'], 'Prime + 0.40%', 'BC'),

-- Online/Digital Lenders - 3-year HELOC rates
('nesto', 'home', 'variable', '3-yr', 0.0730, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.55%', 'BC'),
('Paymi', 'alternative', 'variable', '3-yr', 0.0725, 0.20, 0.75, ARRAY['heloc'], 'Prime + 0.50%', 'BC'),

-- Add some Ontario rates for comparison
('RBC Royal Bank', 'bank', 'variable', '2-yr', 0.0770, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.95%', 'ON'),
('TD Canada Trust', 'bank', 'variable', '2-yr', 0.0765, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.90%', 'ON'),
('RBC Royal Bank', 'bank', 'variable', '3-yr', 0.0780, 0.20, 0.80, ARRAY['heloc'], 'Prime + 1.05%', 'ON'),
('TD Canada Trust', 'bank', 'variable', '3-yr', 0.0775, 0.20, 0.80, ARRAY['heloc'], 'Prime + 1.00%', 'ON'),

-- Add some Alberta rates
('ATB Financial', 'credit_union', 'variable', '2-yr', 0.0740, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.65%', 'AB'),
('ATB Financial', 'credit_union', 'variable', '3-yr', 0.0750, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.75%', 'AB'),
('Servus Credit Union', 'credit_union', 'variable', '2-yr', 0.0735, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.60%', 'AB'),
('Servus Credit Union', 'credit_union', 'variable', '3-yr', 0.0745, 0.20, 0.80, ARRAY['heloc'], 'Prime + 0.70%', 'AB');