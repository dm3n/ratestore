-- Fix GIC rates that are showing in hundreds (like 475 instead of 4.75%)
UPDATE gic_rates 
SET rate = CASE 
  WHEN rate > 15.0 THEN rate / 100  -- Convert rates in hundreds back to reasonable percentage
  ELSE rate 
END
WHERE rate > 15.0 AND is_active = true;

-- Ensure all GIC rates are in reasonable range (1-10%)
UPDATE gic_rates 
SET rate = GREATEST(1.0, LEAST(10.0, rate))
WHERE is_active = true;