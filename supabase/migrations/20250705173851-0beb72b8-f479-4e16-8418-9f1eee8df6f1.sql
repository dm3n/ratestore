
-- Create GIC rates table
CREATE TABLE public.gic_rates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  institution TEXT NOT NULL,
  rate DECIMAL(5,4) NOT NULL,
  term TEXT NOT NULL CHECK (term IN ('30-day', '60-day', '90-day', '6-month', '1-year', '18-month', '2-year', '3-year', '4-year', '5-year')),
  gic_type TEXT NOT NULL CHECK (gic_type IN ('non-registered', 'tfsa', 'rrsp', 'usd')),
  min_investment DECIMAL(10,2) DEFAULT 100,
  max_investment DECIMAL(12,2),
  province TEXT DEFAULT 'All',
  special_features JSONB DEFAULT '[]',
  promotional_rate BOOLEAN DEFAULT false,
  promotional_expires_at DATE,
  is_featured BOOLEAN DEFAULT false,
  is_sponsored BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for better performance
CREATE INDEX idx_gic_rates_active ON public.gic_rates (is_active);
CREATE INDEX idx_gic_rates_lookup ON public.gic_rates (gic_type, term, is_active);

-- Enable RLS
ALTER TABLE public.gic_rates ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active GIC rates" 
  ON public.gic_rates 
  FOR SELECT 
  USING (is_active = true);

CREATE POLICY "Admins can manage GIC rates"
  ON public.gic_rates
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Insert sample GIC rates data
INSERT INTO public.gic_rates (institution, rate, term, gic_type, min_investment, is_featured, is_sponsored, special_features) VALUES
('EQ Bank', 0.0475, '1-year', 'non-registered', 100, true, true, '["No fees", "Flexible terms", "CDIC insured"]'),
('Tangerine Bank', 0.0465, '1-year', 'non-registered', 500, true, false, '["CDIC insured", "Online banking", "No monthly fees"]'),
('MCAN Wealth', 0.0485, '1-year', 'non-registered', 1000, false, false, '["High yields", "CDIC insured", "Professional service"]'),
('Oaken Financial', 0.048, '1-year', 'tfsa', 500, false, false, '["Tax-free", "CDIC insured", "Flexible contributions"]'),
('Canadian Western Bank', 0.0455, '5-year', 'non-registered', 1000, false, false, '["5-year guarantee", "CDIC insured", "Stable returns"]'),
('Meridian Credit Union', 0.047, '2-year', 'non-registered', 500, false, false, '["Credit union benefits", "CDIC insured"]'),
('Achieva Financial', 0.0465, '3-year', 'rrsp', 1000, false, false, '["RRSP eligible", "Tax deferred", "CDIC insured"]'),
('Implicity Financial', 0.0455, '18-month', 'non-registered', 1000, false, false, '["Competitive rates", "CDIC insured"]'),
('Steinbach Credit Union', 0.044, '6-month', 'non-registered', 1000, false, false, '["Short term", "CDIC insured"]'),
('Alterna Bank', 0.043, '90-day', 'tfsa', 500, false, false, '["Short term TFSA", "CDIC insured"]');
