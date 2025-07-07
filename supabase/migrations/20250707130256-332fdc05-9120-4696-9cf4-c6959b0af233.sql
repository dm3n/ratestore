
-- Add more comprehensive banking rate data
INSERT INTO banking_rates (institution, account_name, account_type, account_category, interest_rate, monthly_fee, minimum_balance, transaction_limit, features, special_offers, fee_waiver_conditions, province, is_featured, is_active) VALUES

-- High Interest Savings Accounts
('Tangerine Bank', 'High Interest Savings Account', 'savings', 'personal', 0.0425, 0, 0, null, '["No minimum balance", "No monthly fees", "Online banking", "Mobile app", "Unlimited transactions"]', 'New customers: 5.25% for 6 months', null, 'All', true, true),
('EQ Bank', 'Savings Plus Account', 'savings', 'personal', 0.0400, 0, 0, null, '["No fees", "Unlimited transactions", "Mobile deposit", "Joint accounts available", "No minimum balance"]', null, null, 'All', true, true),
('Simplii Financial', 'High Interest Savings Account', 'savings', 'personal', 0.0350, 0, 0, null, '["No monthly fee", "No minimum balance", "Online banking", "Mobile banking"]', 'Promotional rate: 4.25% for 5 months', null, 'All', false, true),
('Motusbank', 'Savvy Savings Account', 'savings', 'personal', 0.0380, 0, 0, null, '["High interest rate", "No fees", "Online banking", "Mobile app"]', null, null, 'All', false, true),
('Koodo Mobile Banking', 'Savings Account', 'savings', 'personal', 0.0365, 0, 0, null, '["No monthly fees", "Mobile-first banking", "High interest", "No minimum balance"]', null, null, 'All', false, true),

-- Big 5 Bank Savings
('RBC', 'High Interest eSavings', 'savings', 'personal', 0.0275, 0, 0, null, '["Online only", "No minimum balance", "CDIC insured", "RBC Online Banking"]', null, null, 'All', false, true),
('TD Canada Trust', 'High Interest Savings Account', 'savings', 'personal', 0.0250, 0, 0, null, '["Branch access", "Online banking", "Mobile app", "No minimum balance"]', null, null, 'All', false, true),
('Scotiabank', 'Momentum Plus Savings Account', 'savings', 'personal', 0.0225, 0, 0, null, '["Branch and online access", "No minimum balance", "Scene+ rewards eligible"]', null, null, 'All', false, true),
('BMO', 'Smart Saver Account', 'savings', 'personal', 0.0200, 0, 0, null, '["Branch access", "Online banking", "Mobile banking", "No minimum balance"]', null, null, 'All', false, true),
('CIBC', 'Premium Rate Savings Account', 'savings', 'personal', 0.0230, 0, 0, null, '["Branch access", "Online banking", "Mobile app", "No minimum balance"]', null, null, 'All', false, true),

-- TFSA Accounts
('Tangerine Bank', 'Tax-Free Savings Account', 'tfsa', 'personal', 0.0425, 0, 0, null, '["Tax-free growth", "No minimum balance", "Online banking", "Contribution room tracking"]', 'New customers: 5.25% for 6 months', null, 'All', true, true),
('EQ Bank', 'TFSA Savings Plus', 'tfsa', 'personal', 0.0400, 0, 0, null, '["Tax-free earnings", "No fees", "Mobile app", "Contribution tracking"]', null, null, 'All', true, true),
('Simplii Financial', 'TFSA High Interest Savings', 'tfsa', 'personal', 0.0350, 0, 0, null, '["Tax-free growth", "No monthly fee", "Online banking", "No minimum balance"]', null, null, 'All', false, true),
('RBC', 'TFSA High Interest eSavings', 'tfsa', 'personal', 0.0275, 0, 0, null, '["Tax-free growth", "Online banking", "No minimum balance", "Contribution tracking"]', null, null, 'All', false, true),
('TD Canada Trust', 'TFSA High Interest Savings', 'tfsa', 'personal', 0.0250, 0, 0, null, '["Tax-free growth", "Branch access", "Online banking", "Contribution room tracking"]', null, null, 'All', false, true),

-- RRSP Accounts
('Tangerine Bank', 'RRSP Savings Account', 'rrsp', 'personal', 0.0400, 0, 0, null, '["Tax deductible contributions", "No minimum balance", "Online banking", "Retirement planning tools"]', null, null, 'All', true, true),
('EQ Bank', 'RRSP Savings Plus', 'rrsp', 'personal', 0.0375, 0, 0, null, '["Retirement focused", "No fees", "Tax benefits", "Online management"]', null, null, 'All', true, true),
('RBC', 'RRSP High Interest eSavings', 'rrsp', 'personal', 0.0250, 0, 0, null, '["Tax-deductible", "Online banking", "Retirement planning", "No minimum balance"]', null, null, 'All', false, true),
('TD Canada Trust', 'RRSP High Interest Savings', 'rrsp', 'personal', 0.0225, 0, 0, null, '["Tax benefits", "Branch access", "Retirement planning", "Online banking"]', null, null, 'All', false, true),

-- RESP Accounts
('RBC', 'RESP Savings Account', 'resp', 'personal', 0.0375, 0, 0, null, '["Government grants eligible", "Educational focus", "Branch access", "Online banking"]', 'Up to $7,200 in government grants', null, 'All', true, true),
('TD Canada Trust', 'RESP High Interest Savings', 'resp', 'personal', 0.0350, 0, 0, null, '["Education savings", "Government grants", "Branch access", "Online banking"]', 'CESG matching available', null, 'All', false, true),
('Scotiabank', 'RESP Savings Account', 'resp', 'personal', 0.0325, 0, 0, null, '["Education focused", "Government grants eligible", "Branch access", "Planning tools"]', null, null, 'All', false, true),

-- FHSA Accounts
('TD Canada Trust', 'First Home Savings Account', 'fhsa', 'personal', 0.0410, 0, 0, null, '["Tax deductible contributions", "Tax-free withdrawal for first home", "First-time home buyers", "Online banking"]', 'Up to $40,000 lifetime contribution', null, 'All', true, true),
('RBC', 'First Home Savings Account', 'fhsa', 'personal', 0.0385, 0, 0, null, '["First-time buyer focused", "Tax benefits", "Branch access", "Home buying resources"]', 'Exclusive first-time buyer benefits', null, 'All', false, true),
('Scotiabank', 'First Home Savings Account', 'fhsa', 'personal', 0.0375, 0, 0, null, '["Home ownership focused", "Tax advantages", "Branch support", "Mortgage pre-approval"]', null, null, 'All', false, true),

-- Youth Savings Accounts
('RBC', 'Leo''s Young Savers Account', 'youth', 'personal', 0.0350, 0, 0, null, '["No monthly fees", "Financial education", "Parental oversight", "Online banking"]', 'Financial literacy program included', 'Under 18 years old', 'All', true, true),
('TD Canada Trust', 'Young Saver Account', 'youth', 'personal', 0.0325, 0, 0, null, '["Youth focused", "No fees", "Educational resources", "Parental controls"]', null, 'Under 18 years old', 'All', false, true),
('Scotiabank', 'Getting There Savings Program', 'youth', 'personal', 0.0300, 0, 0, null, '["Youth savings", "Educational tools", "No monthly fees", "Branch access"]', 'Scene+ rewards for youth', 'Under 19 years old', 'All', false, true),

-- Chequing Accounts - Personal
('Tangerine Bank', 'Chequing Account', 'chequing', 'personal', 0.0025, 0, 0, null, '["No monthly fee", "Free Interac e-Transfers", "Mobile banking", "No minimum balance"]', null, null, 'All', true, true),
('Simplii Financial', 'No-Fee Chequing Account', 'chequing', 'personal', 0.0015, 0, 0, null, '["No monthly fees", "Free transactions", "Online banking", "Mobile deposit"]', null, null, 'All', true, true),
('PC Financial', 'No-Fee Bank Account', 'chequing', 'personal', 0.0010, 0, 0, null, '["No monthly fees", "PC Optimum points", "Free banking", "Online access"]', 'Earn PC Optimum points', null, 'All', false, true),

-- Chequing Accounts - Big 5 Premium
('RBC', 'VIP Banking Package', 'chequing', 'personal', 0.0005, 31.95, 6000, null, '["Unlimited transactions", "Premium services", "Investment advice", "Travel benefits"]', null, 'Minimum balance of $6,000', 'All', false, true),
('TD Canada Trust', 'All-Inclusive Banking Plan', 'chequing', 'personal', 0.0005, 29.95, 5000, null, '["Unlimited transactions", "Premium features", "Global ATM access", "Investment services"]', null, 'Minimum balance of $5,000', 'All', false, true),
('Scotiabank', 'Ultimate Package', 'chequing', 'personal', 0.0005, 30.95, 5000, null, '["Unlimited banking", "Investment services", "Premium rewards", "Travel benefits"]', null, 'Minimum balance of $5,000', 'All', false, true),
('BMO', 'Premium Plan', 'chequing', 'personal', 0.0005, 29.95, 6000, null, '["Unlimited transactions", "Premium banking", "Investment access", "Travel insurance"]', null, 'Minimum balance of $6,000', 'All', false, true),
('CIBC', 'Unlimited Chequing Account', 'chequing', 'personal', 0.0005, 16.95, 4000, null, '["Unlimited transactions", "Branch access", "Online banking", "Mobile app"]', null, 'Minimum balance of $4,000 to waive fee', 'All', false, true),

-- Student Accounts
('RBC', 'Student Banking Advantage', 'chequing', 'student', 0.0010, 0, 0, null, '["No monthly fees", "Student benefits", "Study abroad support", "Mobile banking"]', 'Free for students', 'Valid student ID required', 'All', false, true),
('TD Canada Trust', 'Student Chequing Account', 'chequing', 'student', 0.0010, 0, 0, null, '["No fees for students", "Branch access", "Online banking", "Student resources"]', null, 'Full-time student status required', 'All', false, true),
('Scotiabank', 'Student Banking Advantage Plan', 'chequing', 'student', 0.0010, 0, 0, null, '["Student focused", "No monthly fees", "Study tools", "Branch support"]', null, 'Student verification required', 'All', false, true),

-- Senior Accounts
('RBC', 'Seniors Chequing Account', 'chequing', 'senior', 0.0015, 7.95, 0, null, '["Senior discounts", "Branch access", "Large print statements", "Personal service"]', null, 'Fee waived with $3,000 minimum balance', 'All', false, true),
('TD Canada Trust', 'Seniors Chequing Account', 'chequing', 'senior', 0.0015, 6.95, 0, null, '["Senior benefits", "Branch access", "Personal banking", "Accessible services"]', null, 'Age 60+ required', 'All', false, true),

-- Newcomer Accounts
('RBC', 'Newcomer Banking Package', 'chequing', 'newcomer', 0.0020, 0, 0, null, '["No fees for 12 months", "Newcomer support", "Settlement services", "Multi-language support"]', 'Free banking for first year', 'New to Canada within 5 years', 'All', false, true),
('TD Canada Trust', 'New to Canada Banking Package', 'chequing', 'newcomer', 0.0020, 0, 0, null, '["Newcomer focused", "No fees initially", "Settlement support", "Branch access"]', 'Free banking package for newcomers', 'Recent immigration required', 'All', false, true),
('Scotiabank', 'StartRight Program', 'chequing', 'newcomer', 0.0020, 0, 0, null, '["Newcomer benefits", "No fees for 12 months", "Settlement services", "Multi-language support"]', null, 'New to Canada within 5 years', 'All', false, true);
