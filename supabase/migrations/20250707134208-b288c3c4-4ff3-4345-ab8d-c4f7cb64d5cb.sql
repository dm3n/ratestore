
-- Add comprehensive First Home Savings Account (FHSA) rates
INSERT INTO banking_rates (institution, account_name, account_type, account_category, interest_rate, monthly_fee, minimum_balance, transaction_limit, features, special_offers, fee_waiver_conditions, province, is_featured, is_active) VALUES

-- Big 5 Banks FHSA Accounts
('RBC', 'RBC First Home Savings Account', 'fhsa', 'personal', 0.0275, 0, 0, null, '["Tax deductible contributions", "$40,000 lifetime limit", "Tax-free withdrawals for first home", "Online banking", "Branch access"]', null, 'First-time home buyer only', 'All', true, true),
('TD Canada Trust', 'TD First Home Savings Account', 'fhsa', 'personal', 0.0250, 0, 0, null, '["Tax benefits both ways", "First home purchase withdrawals", "Branch support", "Online banking", "Mobile app access"]', null, 'First-time home buyer only', 'All', true, true),
('Scotiabank', 'Scotia First Home Savings Account', 'fhsa', 'personal', 0.0225, 0, 0, null, '["Tax deductible", "Tax-free home purchase", "Branch access", "Online banking", "Investment options"]', null, 'First-time home buyer only', 'All', false, true),
('BMO', 'BMO First Home Savings Account', 'fhsa', 'personal', 0.0200, 0, 0, null, '["Dual tax advantage", "Home buying focus", "Branch access", "Online banking", "Financial planning support"]', null, 'First-time home buyer only', 'All', false, true),
('CIBC', 'CIBC First Home Savings Account', 'fhsa', 'personal', 0.0190, 0, 0, null, '["Tax deductible contributions", "Tax-free withdrawals", "Branch access", "Online banking", "Home buying resources"]', null, 'First-time home buyer only', 'All', false, true),

-- Online Banks FHSA Accounts
('Tangerine Bank', 'FHSA Savings Account', 'fhsa', 'personal', 0.0350, 0, 0, null, '["High interest rate", "No minimum balance", "Online banking", "Tax advantages", "First home focus"]', 'New customers: 4.50% for 6 months', 'First-time home buyer only', 'All', true, true),
('EQ Bank', 'FHSA Savings Plus', 'fhsa', 'personal', 0.0325, 0, 0, null, '["Competitive rate", "No fees", "Tax benefits", "Online management", "Home buying tools"]', null, 'First-time home buyer only', 'All', true, true),
('Simplii Financial', 'FHSA High Interest Account', 'fhsa', 'personal', 0.0300, 0, 0, null, '["No monthly fee", "Tax advantages", "Online banking", "Home purchase focus"]', null, 'First-time home buyer only', 'All', false, true),
('Motusbank', 'FHSA Savvy Account', 'fhsa', 'personal', 0.0315, 0, 0, null, '["High interest", "No fees", "Online banking", "First home savings"]', null, 'First-time home buyer only', 'All', false, true),

-- Credit Union FHSA Accounts
('Vancity', 'FHSA High Interest Account', 'fhsa', 'personal', 0.0290, 0, 0, null, '["Community banking", "Ethical focus", "Tax benefits", "Home buying support"]', null, 'First-time home buyer only', 'BC', false, true),
('ATB Financial', 'FHSA Advantage Account', 'fhsa', 'personal', 0.0275, 0, 0, null, '["Alberta focused", "Branch access", "Tax advantages", "Home buying guidance"]', null, 'First-time home buyer only', 'AB', false, true),
('Desjardins', 'FHSA High Interest Account', 'fhsa', 'personal', 0.0260, 0, 0, null, '["Quebec focused", "French service", "Tax benefits", "Home purchase planning"]', null, 'First-time home buyer only', 'QC', false, true),
('Coast Capital Savings', 'FHSA Savings Account', 'fhsa', 'personal', 0.0280, 0, 0, null, '["Credit union benefits", "No fees", "Tax advantages", "Home buying focus"]', null, 'First-time home buyer only', 'BC', false, true),
('Meridian Credit Union', 'FHSA Premier Account', 'fhsa', 'personal', 0.0270, 0, 0, null, '["Ontario credit union", "No monthly fee", "Tax benefits", "First home focus"]', null, 'First-time home buyer only', 'ON', false, true),

-- Additional FHSA Options
('PC Financial', 'FHSA No-Fee Account', 'fhsa', 'personal', 0.0240, 0, 0, null, '["No monthly fees", "PC Optimum points", "Tax advantages", "Online access"]', 'Earn PC Optimum points on contributions', 'First-time home buyer only', 'All', false, true)

ON CONFLICT (id) DO NOTHING;
