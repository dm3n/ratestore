
-- Add comprehensive youth savings account rates
INSERT INTO banking_rates (institution, account_name, account_type, account_category, interest_rate, monthly_fee, minimum_balance, transaction_limit, features, special_offers, fee_waiver_conditions, province, is_featured, is_active) VALUES

-- Big 5 Banks Youth Savings Accounts
('RBC', 'RBC Leo Young Savers Account', 'youth', 'personal', 0.0250, 0, 0, null, '["No monthly fee", "No minimum balance", "Online banking", "Financial literacy tools", "Parental oversight", "Age 12-17"]', null, 'Must be under 18', 'All', true, true),
('TD Canada Trust', 'TD Youth Savings Account', 'youth', 'personal', 0.0225, 0, 0, null, '["No fees", "Educational resources", "Branch access", "Online banking", "Mobile app", "Age 13-17"]', null, 'Must be under 18', 'All', true, true),
('Scotiabank', 'Scotia PowerSave Youth Account', 'youth', 'personal', 0.0200, 0, 0, null, '["No monthly fee", "Financial education", "Branch access", "Online banking", "Age 13-18"]', null, 'Must be under 19', 'All', false, true),
('BMO', 'BMO Smart Start Savings', 'youth', 'personal', 0.0180, 0, 0, null, '["No fees", "Educational tools", "Branch access", "Online banking", "Age 13-17"]', null, 'Must be under 18', 'All', false, true),
('CIBC', 'CIBC Advantage for Youth', 'youth', 'personal', 0.0150, 0, 0, null, '["No monthly fee", "Financial literacy", "Branch access", "Online banking", "Age 12-18"]', null, 'Must be under 19', 'All', false, true),

-- Online Banks Youth Savings
('Tangerine Bank', 'Tangerine Children Savings Account', 'youth', 'personal', 0.0300, 0, 0, null, '["High interest", "No minimum balance", "Online banking", "Parental controls", "Educational content", "Age 0-17"]', 'Bonus interest for first 6 months', 'Must be under 18', 'All', true, true),
('EQ Bank', 'EQ Bank Youth Savings', 'youth', 'personal', 0.0275, 0, 0, null, '["High interest rate", "No fees", "Online management", "Financial education", "Age 13-17"]', null, 'Must be under 18', 'All', true, true),
('Simplii Financial', 'Simplii No-Fee Youth Savings', 'youth', 'personal', 0.0250, 0, 0, null, '["No monthly fee", "Online banking", "Financial tools", "Age 12-17"]', null, 'Must be under 18', 'All', false, true),

-- Credit Unions Youth Savings
('Vancity', 'Vancity Youth Account', 'youth', 'personal', 0.0220, 0, 0, null, '["Community banking", "Financial literacy programs", "Environmental focus", "Age 13-17"]', null, 'Must be under 18', 'BC', false, true),
('ATB Financial', 'ATB Generation Account', 'youth', 'personal', 0.0200, 0, 0, null, '["Alberta focused", "No fees", "Educational workshops", "Age 12-17"]', null, 'Must be under 18', 'AB', false, true),
('Desjardins', 'Desjardins Jeune Coop Account', 'youth', 'personal', 0.0190, 0, 0, null, '["Quebec focused", "French service", "Financial education", "Age 12-17"]', null, 'Must be under 18', 'QC', false, true),

-- Additional Youth-Focused Options
('Coast Capital Savings', 'Coast Capital Youth Savings', 'youth', 'personal', 0.0210, 0, 0, null, '["Credit union benefits", "No fees", "Financial education", "Age 13-17"]', null, 'Must be under 18', 'BC', false, true),
('Meridian Credit Union', 'Meridian Youth Advantage', 'youth', 'personal', 0.0195, 0, 0, null, '["Ontario credit union", "No monthly fee", "Educational resources", "Age 12-17"]', null, 'Must be under 18', 'ON', false, true),
('PC Financial', 'PC Financial Youth Account', 'youth', 'personal', 0.0175, 0, 0, null, '["No fees", "PC Optimum points", "Online banking", "Age 13-17"]', 'Earn points on deposits', 'Must be under 18', 'All', false, true)

ON CONFLICT (id) DO NOTHING;
