
-- Add province column to mortgage_rates table
ALTER TABLE public.mortgage_rates 
ADD COLUMN province TEXT DEFAULT 'BC';

-- Add an index for better query performance
CREATE INDEX idx_mortgage_rates_province ON public.mortgage_rates(province);

-- Update existing rates to have a default province if needed
UPDATE public.mortgage_rates 
SET province = 'BC' 
WHERE province IS NULL;
