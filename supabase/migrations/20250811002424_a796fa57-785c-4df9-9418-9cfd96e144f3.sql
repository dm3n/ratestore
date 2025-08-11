-- Remove all manually added mortgage rates so only Google Sheets data is used by the app
BEGIN;
  DELETE FROM public.mortgage_rates;
COMMIT;