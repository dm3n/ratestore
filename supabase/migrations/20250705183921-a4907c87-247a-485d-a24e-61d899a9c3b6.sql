
-- Add more comprehensive sample GIC rates across different types and terms
INSERT INTO public.gic_rates (institution, rate, term, gic_type, min_investment, max_investment, province, special_features, promotional_rate, promotional_expires_at, is_featured, is_sponsored) VALUES

-- More Non-registered GICs
('Laurentian Bank', 0.0435, '6-month', 'non-registered', 500, NULL, 'All', '["CDIC insured", "Early redemption available", "Competitive rates"]', false, NULL, false, false),
('HSBC Bank Canada', 0.044, '90-day', 'non-registered', 1000, NULL, 'All', '["CDIC insured", "International banking", "Premium service"]', false, NULL, false, false),
('National Bank', 0.0445, '2-year', 'non-registered', 500, NULL, 'Quebec', '["Quebec-based", "CDIC insured", "Bilingual service"]', false, NULL, false, false),
('Motus Bank', 0.0465, '3-year', 'non-registered', 1000, NULL, 'All', '["Digital banking", "CDIC insured", "No fees"]', false, NULL, false, false),
('Peoples Bank', 0.043, '4-year', 'non-registered', 1000, NULL, 'All', '["Community banking", "CDIC insured", "Personal service"]', false, NULL, false, false),

-- More TFSA GICs
('EQ Bank', 0.047, '2-year', 'tfsa', 100, NULL, 'All', '["Tax-free growth", "CDIC insured", "Flexible terms"]', true, '2025-03-31', true, true),
('Tangerine Bank', 0.0455, '3-year', 'tfsa', 500, NULL, 'All', '["Tax-free", "Online banking", "No monthly fees"]', false, NULL, false, false),
('Canadian Western Bank', 0.044, '90-day', 'tfsa', 500, NULL, 'All', '["Short term TFSA", "CDIC insured", "Flexible"]', false, NULL, false, false),
('Meridian Credit Union', 0.0465, '5-year', 'tfsa', 1000, NULL, 'Ontario', '["Tax-free", "Credit union benefits", "CDIC insured"]', false, NULL, false, false),
('Steinbach Credit Union', 0.0435, '1-year', 'tfsa', 500, NULL, 'Manitoba', '["Tax-free", "Local credit union", "CDIC insured"]', false, NULL, false, false),

-- More RRSP GICs
('EQ Bank', 0.0475, '5-year', 'rrsp', 100, NULL, 'All', '["Tax deferred", "CDIC insured", "Retirement planning"]', false, NULL, true, false),
('Oaken Financial', 0.046, '2-year', 'rrsp', 1000, NULL, 'All', '["RRSP eligible", "High yields", "CDIC insured"]', false, NULL, false, false),
('Implicity Financial', 0.045, '3-year', 'rrsp', 1000, NULL, 'All', '["RRSP eligible", "Competitive rates", "CDIC insured"]', false, NULL, false, false),
('Alterna Bank', 0.0445, '18-month', 'rrsp', 500, NULL, 'All', '["RRSP eligible", "Sustainable banking", "CDIC insured"]', false, NULL, false, false),
('MCAN Wealth', 0.048, '4-year', 'rrsp', 1000, NULL, 'All', '["RRSP eligible", "High yields", "Professional service"]', false, NULL, false, false),

-- USD GICs
('RBC Royal Bank', 0.035, '1-year', 'usd', 5000, NULL, 'All', '["USD denominated", "Big 6 bank", "CDIC insured"]', false, NULL, false, false),
('TD Bank', 0.0345, '2-year', 'usd', 5000, NULL, 'All', '["USD denominated", "Cross-border banking", "CDIC insured"]', false, NULL, false, false),
('BMO Bank of Montreal', 0.034, '6-month', 'usd', 2500, NULL, 'All', '["USD GIC", "Big 6 bank", "CDIC insured"]', false, NULL, false, false),
('Scotiabank', 0.0355, '3-year', 'usd', 5000, NULL, 'All', '["USD denominated", "International banking", "CDIC insured"]', false, NULL, false, false),
('CIBC', 0.0335, '90-day', 'usd', 2500, NULL, 'All', '["Short term USD", "Big 6 bank", "CDIC insured"]', false, NULL, false, false),

-- More short-term options
('B2B Bank', 0.042, '30-day', 'non-registered', 1000, NULL, 'All', '["Ultra short term", "CDIC insured", "Liquidity option"]', false, NULL, false, false),
('Concentra Bank', 0.043, '60-day', 'non-registered', 1000, NULL, 'All', '["Short term", "Western Canada focus", "CDIC insured"]', false, NULL, false, false),
('Haventree Bank', 0.0445, '30-day', 'tfsa', 500, NULL, 'All', '["Tax-free short term", "CDIC insured", "Flexible"]', false, NULL, false, false),

-- Provincial/Regional options
('ATB Financial', 0.044, '1-year', 'non-registered', 500, NULL, 'Alberta', '["Alberta-based", "Provincial crown corp", "CDIC insured"]', false, NULL, false, false),
('Servus Credit Union', 0.0445, '18-month', 'non-registered', 1000, NULL, 'Alberta', '["Alberta credit union", "Member-owned", "CDIC insured"]', false, NULL, false, false),
('Vancity', 0.043, '2-year', 'tfsa', 500, NULL, 'BC', '["BC credit union", "Ethical banking", "CDIC insured"]', false, NULL, false, false),
('Libro Credit Union', 0.0435, '3-year', 'rrsp', 1000, NULL, 'Ontario', '["Ontario credit union", "Community focused", "CDIC insured"]', false, NULL, false, false);
