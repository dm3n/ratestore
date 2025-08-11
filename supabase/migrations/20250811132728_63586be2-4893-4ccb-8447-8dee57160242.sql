-- Phase 1: Create a single source of truth table for all rates
-- This table will replace mortgage_rates, rate_overrides, banking_rates, and gic_rates usage

-- 1) Create rate_sheet_rates table
CREATE TABLE IF NOT EXISTS public.rate_sheet_rates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_type text NOT NULL CHECK (product_type IN ('mortgage','heloc')),
  province text NOT NULL DEFAULT 'ON',
  transaction_type text NOT NULL DEFAULT 'buying' CHECK (transaction_type IN ('buying','renewing','refinancing')),
  has_insurance boolean NOT NULL DEFAULT false,

  -- Bracketing strategy for the sheet (down payment or LTV or none)
  bracket_type text NOT NULL CHECK (bracket_type IN ('down_payment','ltv','none')),
  bracket_min numeric NULL,  -- decimal representation (e.g., 0.20)
  bracket_max numeric NULL,
  mortgage_size_bracket text NULL, -- e.g. '<$299k' if needed by the sheet

  occupancy text NOT NULL DEFAULT 'owner_occupied',
  amortization_max_years integer NOT NULL DEFAULT 25,

  -- Term/rate info (null for HELOC rows)
  term_years integer NULL,
  rate_type text NULL CHECK (rate_type IN ('fixed','variable')),
  rate numeric NULL,                 -- decimal representation (e.g., 0.0399)

  -- Optional lender breakdown per cell
  lender text NULL,
  dollar_figure numeric NULL,        -- for HELOC or display needs
  notes text NULL,

  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 2) Enable RLS and add policies
ALTER TABLE public.rate_sheet_rates ENABLE ROW LEVEL SECURITY;

-- Public can read active rows
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'rate_sheet_rates'
      AND policyname = 'Anyone can view active rate sheet rates'
  ) THEN
    CREATE POLICY "Anyone can view active rate sheet rates"
    ON public.rate_sheet_rates
    FOR SELECT
    USING (active = true);
  END IF;
END $$;

-- Admins can manage (ALL)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'rate_sheet_rates'
      AND policyname = 'Admins can manage rate sheet rates'
  ) THEN
    CREATE POLICY "Admins can manage rate sheet rates"
    ON public.rate_sheet_rates
    FOR ALL
    USING (has_role(auth.uid(), 'admin'))
    WITH CHECK (has_role(auth.uid(), 'admin'));
  END IF;
END $$;

-- 3) Trigger to maintain updated_at
DO $$
BEGIN
  -- Drop existing trigger if present
  IF EXISTS (
    SELECT 1 FROM pg_trigger
    WHERE tgname = 'set_rate_sheet_updated_at'
  ) THEN
    DROP TRIGGER set_rate_sheet_updated_at ON public.rate_sheet_rates;
  END IF;
END $$;

CREATE TRIGGER set_rate_sheet_updated_at
BEFORE UPDATE ON public.rate_sheet_rates
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- 4) Helpful indexes for query performance
CREATE INDEX IF NOT EXISTS idx_rate_sheet_active ON public.rate_sheet_rates (active);
CREATE INDEX IF NOT EXISTS idx_rate_sheet_region ON public.rate_sheet_rates (province);
CREATE INDEX IF NOT EXISTS idx_rate_sheet_txn ON public.rate_sheet_rates (transaction_type);
CREATE INDEX IF NOT EXISTS idx_rate_sheet_ins ON public.rate_sheet_rates (has_insurance);
CREATE INDEX IF NOT EXISTS idx_rate_sheet_bracket ON public.rate_sheet_rates (bracket_type, bracket_min, bracket_max);
CREATE INDEX IF NOT EXISTS idx_rate_sheet_term ON public.rate_sheet_rates (term_years);
CREATE INDEX IF NOT EXISTS idx_rate_sheet_rate_type ON public.rate_sheet_rates (rate_type);

-- Composite for common filtering patterns
CREATE INDEX IF NOT EXISTS idx_rate_sheet_filter ON public.rate_sheet_rates (
  active, province, transaction_type, has_insurance, bracket_type, term_years, rate_type
);

-- 5) Data cleanup: Remove all existing legacy rate data (keep tables for now)
-- These deletes fulfill the request to remove all pre-existing rates while we migrate the app
DO $$
BEGIN
  IF to_regclass('public.mortgage_rates') IS NOT NULL THEN
    DELETE FROM public.mortgage_rates;
  END IF;
  IF to_regclass('public.rate_overrides') IS NOT NULL THEN
    DELETE FROM public.rate_overrides;
  END IF;
  IF to_regclass('public.banking_rates') IS NOT NULL THEN
    DELETE FROM public.banking_rates;
  END IF;
  IF to_regclass('public.gic_rates') IS NOT NULL THEN
    DELETE FROM public.gic_rates;
  END IF;
END $$;