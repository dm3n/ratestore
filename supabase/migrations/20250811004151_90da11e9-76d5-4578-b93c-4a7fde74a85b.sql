-- Create table for admin-editable mortgage rate overrides
create table if not exists public.rate_overrides (
  id uuid primary key default gen_random_uuid(),
  lender text not null,
  rate numeric not null check (rate >= 0), -- stored as decimal, e.g. 0.0399
  term text not null,                     -- e.g., '5-yr' or '5 year' or 'HELOC'
  rate_type text not null check (rate_type in ('fixed','variable')),
  transaction_type text not null check (transaction_type in ('buying','renewing','refinancing')),
  has_insurance boolean not null default false,
  ltv_min numeric not null default 0,
  ltv_max numeric not null default 1,
  min_down_payment numeric,               -- nullable
  max_down_payment numeric,               -- nullable
  province text not null default 'ALL',   -- province code or 'ALL'
  min_credit_score integer,
  active boolean not null default true,
  created_by uuid,                        -- auth user id (nullable)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Ensure updated_at gets refreshed on update
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger rate_overrides_set_updated_at
before update on public.rate_overrides
for each row execute function public.set_updated_at();

-- Enable Row Level Security
alter table public.rate_overrides enable row level security;

-- Policies
-- Public read (rates are public-facing)
create policy "Public can read rate overrides"
  on public.rate_overrides
  for select
  using (true);

-- Only authenticated users can insert/update/delete (admin UI is gated in app)
create policy "Authenticated can insert rate overrides"
  on public.rate_overrides
  for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated can update rate overrides"
  on public.rate_overrides
  for update
  using (auth.role() = 'authenticated');

create policy "Authenticated can delete rate overrides"
  on public.rate_overrides
  for delete
  using (auth.role() = 'authenticated');