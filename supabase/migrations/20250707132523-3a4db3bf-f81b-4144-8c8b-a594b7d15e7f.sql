
-- First, let's see what the current constraint allows and update it to include 'tfsa'
ALTER TABLE banking_rates DROP CONSTRAINT IF EXISTS banking_rates_account_type_check;

-- Add a new constraint that includes 'tfsa' along with the other valid account types
ALTER TABLE banking_rates ADD CONSTRAINT banking_rates_account_type_check 
CHECK (account_type IN ('savings', 'chequing', 'tfsa', 'rrsp', 'resp', 'fhsa', 'youth'));

-- Now insert the TFSA rates again (in case they weren't inserted due to the constraint)
INSERT INTO banking_rates (institution, account_name, account_type, account_category, interest_rate, monthly_fee, minimum_balance, transaction_limit, features, special_offers, fee_waiver_conditions, province, is_featured, is_active) VALUES

-- High Interest TFSA Accounts
('Tangerine Bank', 'Tax-Free Savings Account', 'tfsa', 'personal', 0.0425, 0, 0, null, '["Tax-free growth", "No minimum balance", "Online banking", "Contribution room tracking"]', 'New customers: 5.25% for 6 months', null, 'All', true, true),
('EQ Bank', 'TFSA Savings Plus', 'tfsa', 'personal', 0.0400, 0, 0, null, '["Tax-free earnings", "No fees", "Mobile app", "Contribution tracking"]', null, null, 'All', true, true),
('Simplii Financial', 'TFSA High Interest Savings', 'tfsa', 'personal', 0.0350, 0, 0, null, '["Tax-free growth", "No monthly fee", "Online banking", "No minimum balance"]', null, null, 'All', false, true),
('Motusbank', 'TFSA Savvy Savings', 'tfsa', 'personal', 0.0380, 0, 0, null, '["Tax-free interest", "High interest rate", "No fees", "Online banking"]', null, null, 'All', false, true),

-- Big 5 Bank TFSA Accounts  
('RBC', 'TFSA High Interest eSavings', 'tfsa', 'personal', 0.0275, 0, 0, null, '["Tax-free growth", "Online banking", "No minimum balance", "Contribution tracking"]', null, null, 'All', false, true),
('TD Canada Trust', 'TFSA High Interest Savings', 'tfsa', 'personal', 0.0250, 0, 0, null, '["Tax-free growth", "Branch access", "Online banking", "Contribution room tracking"]', null, null, 'All', false, true),
('Scotiabank', 'TFSA Momentum Plus Savings', 'tfsa', 'personal', 0.0225, 0, 0, null, '["Tax-free earnings", "Branch and online access", "No minimum balance", "Scene+ rewards eligible"]', null, null, 'All', false, true),
('BMO', 'TFSA Smart Saver', 'tfsa', 'personal', 0.0200, 0, 0, null, '["Tax-free growth", "Branch access", "Online banking", "Mobile banking"]', null, null, 'All', false, true),
('CIBC', 'TFSA Premium Rate Savings', 'tfsa', 'personal', 0.0230, 0, 0, null, '["Tax-free earnings", "Branch access", "Online banking", "Mobile app"]', null, null, 'All', false, true),

-- Credit Union TFSA Accounts
('Vancity', 'TFSA High Interest Savings', 'tfsa', 'personal', 0.0360, 0, 0, null, '["Tax-free growth", "Community banking", "Ethical investing options", "No minimum balance"]', null, null, 'BC', false, true),
('ATB Financial', 'TFSA Advantage Savings', 'tfsa', 'personal', 0.0340, 0, 0, null, '["Tax-free earnings", "Alberta focused", "Branch access", "Online banking"]', null, null, 'AB', false, true),
('Desjardins', 'TFSA High Interest Savings', 'tfsa', 'personal', 0.0320, 0, 0, null, '["Tax-free growth", "Quebec focused", "Branch access", "French service"]', null, null, 'QC', false, true)

ON CONFLICT (id) DO NOTHING;
