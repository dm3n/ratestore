
-- Add more comprehensive RRSP savings account rates
INSERT INTO banking_rates (institution, account_name, account_type, account_category, interest_rate, monthly_fee, minimum_balance, transaction_limit, features, special_offers, fee_waiver_conditions, province, is_featured, is_active) VALUES

-- Online Banks RRSP Accounts
('Tangerine Bank', 'RRSP Savings Account', 'rrsp', 'personal', 0.0400, 0, 0, null, '["Tax deductible contributions", "No minimum balance", "Online banking", "Retirement planning tools", "Contribution room tracking"]', 'New customers: 5.00% for 6 months', null, 'All', true, true),
('EQ Bank', 'RRSP Savings Plus', 'rrsp', 'personal', 0.0375, 0, 0, null, '["Retirement focused", "No fees", "Tax benefits", "Online management", "High interest rate"]', null, null, 'All', true, true),
('Simplii Financial', 'RRSP High Interest Savings', 'rrsp', 'personal', 0.0340, 0, 0, null, '["Tax-deferred growth", "No monthly fee", "Online banking", "Retirement planning"]', null, null, 'All', false, true),
('Motusbank', 'RRSP Savvy Savings', 'rrsp', 'personal', 0.0360, 0, 0, null, '["High interest RRSP", "No fees", "Online banking", "Tax advantages"]', null, null, 'All', false, true),

-- Big 5 Bank RRSP Accounts (updated/additional)
('RBC', 'RRSP High Interest eSavings', 'rrsp', 'personal', 0.0250, 0, 0, null, '["Tax-deductible", "Online banking", "Retirement planning", "No minimum balance", "RBC InvestEase integration"]', null, null, 'All', false, true),
('TD Canada Trust', 'RRSP High Interest Savings', 'rrsp', 'personal', 0.0225, 0, 0, null, '["Tax benefits", "Branch access", "Retirement planning", "Online banking", "TD Direct Investment integration"]', null, null, 'All', false, true),
('Scotiabank', 'RRSP Momentum Plus Savings', 'rrsp', 'personal', 0.0210, 0, 0, null, '["Retirement savings", "Branch access", "Tax deductible", "Scotia iTRADE integration"]', null, null, 'All', false, true),
('BMO', 'RRSP Smart Saver', 'rrsp', 'personal', 0.0200, 0, 0, null, '["Tax-deferred growth", "Branch access", "Online banking", "BMO InvestorLine integration"]', null, null, 'All', false, true),
('CIBC', 'RRSP Premium Rate Savings', 'rrsp', 'personal', 0.0215, 0, 0, null, '["Retirement focused", "Branch access", "Online banking", "CIBC Investor''s Edge integration"]', null, null, 'All', false, true),

-- Credit Union RRSP Accounts
('Vancity', 'RRSP High Interest Savings', 'rrsp', 'personal', 0.0330, 0, 0, null, '["Community banking", "Ethical investing options", "Retirement planning", "Tax benefits"]', null, null, 'BC', false, true),
('ATB Financial', 'RRSP Advantage Savings', 'rrsp', 'personal', 0.0310, 0, 0, null, '["Alberta focused", "Branch access", "Retirement savings", "Tax deductible contributions"]', null, null, 'AB', false, true),
('Desjardins', 'RRSP High Interest Savings', 'rrsp', 'personal', 0.0295, 0, 0, null, '["Quebec focused", "Branch access", "French service", "Retirement planning"]', null, null, 'QC', false, true),

-- Additional Online/Digital Banks
('Koodo Mobile Banking', 'RRSP Savings Account', 'rrsp', 'personal', 0.0345, 0, 0, null, '["Mobile-first banking", "High interest", "No fees", "Tax advantages"]', null, null, 'All', false, true),
('PC Financial', 'RRSP No-Fee Savings', 'rrsp', 'personal', 0.0280, 0, 0, null, '["No monthly fees", "PC Optimum points", "Retirement savings", "Online access"]', 'Earn PC Optimum points on contributions', null, 'All', false, true)

ON CONFLICT (id) DO NOTHING;
