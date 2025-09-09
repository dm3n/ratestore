import { createClient } from '@supabase/supabase-js';

const EXTERNAL_RATES_URL = "https://kbudopggxkmzerjekjby.supabase.co";
const EXTERNAL_RATES_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtidWRvcGdneGttemVyamVramJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NjUxODMsImV4cCI6MjA3MjM0MTE4M30.v14rCnHpMmCUfAoIRZd5QLJ0c9KS80RaNBF5vXJQncI";

export const externalRatesClient = createClient(EXTERNAL_RATES_URL, EXTERNAL_RATES_ANON_KEY);

// City to Province mapping
export const cityProvinceMap = {
  'Victoria': 'BC',
  'Edmonton': 'AB',
  'Regina': 'SK',
  'Winnipeg': 'MB',
  'Toronto': 'ON',
  'Quebec City': 'QC',
  'Fredericton': 'NB',
  'Halifax': 'NS',
  'Charlottetown': 'PE',
  "St. John's": 'NL'
} as const;

export type City = keyof typeof cityProvinceMap;
export type Province = typeof cityProvinceMap[City];

export interface ExternalRateData {
  RateId: number;
  City: string | null;
  Province: string | null;
  Scenario: string | null;
  Amortization: number | null;
  IsOwnerOccupied: number | null;
  IsInsured: number | null;
  IsBigBank: number | null;
  Term: number | null;
  Type: string | null;
  Rate: number | null;
  Lender: string | null;
  Description: string | null;
  MonthlyPrepayment: number | null;
  LumpSumPrepayment: number | null;
  RateHold: number | null;
  PreApproval: boolean | null;
}

export type TransactionType = 'purchase' | 'refinance' | 'renewal' | 'heloc';

export const getTableName = (transactionType: TransactionType): string => {
  const tableName = `rate_store_${transactionType}`;
  console.log('🗃️ [getTableName] Mapping transaction type to table:', {
    transactionType,
    tableName,
    availableTables: ['rate_store_purchase', 'rate_store_refinance', 'rate_store_renewal', 'rate_store_heloc']
  });
  return tableName;
};