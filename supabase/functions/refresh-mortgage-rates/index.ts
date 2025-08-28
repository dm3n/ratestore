import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MortgageRateData {
  row_number: number;
  Record_ID: string;
  Province: string;
  Transaction_Type: string;
  Property_Type: string;
  Amortization_Category: string;
  Mortgage_Size_Range: string;
  Down_Payment_Range: string;
  Term_Years: number;
  Rate_Type: string;
  Interest_Rate_Decimal: number;
  Interest_Rate_Percentage: string;
  Last_Updated?: string;
}

const N8N_API_ENDPOINT = 'https://n8n.growthshaft.com/webhook/3d1792db-bbd4-4ec5-ac72-9ad18d4cb276';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting mortgage rates refresh...');
    
    // Call the n8n API to get fresh rates data
    const response = await fetch(N8N_API_ENDPOINT);
    
    if (!response.ok) {
      console.error(`Failed to fetch rates: ${response.status} ${response.statusText}`);
      throw new Error(`API request failed: ${response.status}`);
    }

    const rawData: MortgageRateData[] = await response.json();
    console.log(`Received ${rawData.length} rate records from API`);

    if (!Array.isArray(rawData)) {
      console.error('Invalid data format received - not an array');
      throw new Error('Invalid data format received from API');
    }

    // Filter and process the data (similar to the frontend logic)
    const filtered = rawData.filter(rate => 
      rate.Property_Type === 'Owner Occupied' &&
      ['ONTARIO', 'BRITISH COLUMBIA', 'ALBERTA', 'QUEBEC', 'ON', 'BC', 'AB', 'QC'].includes(rate.Province) &&
      rate.Transaction_Type === 'PURCHASES'
    );

    console.log(`Filtered to ${filtered.length} relevant rate records`);

    // Sort by interest rate (lowest first)
    const sorted = filtered.sort((a, b) => a.Interest_Rate_Decimal - b.Interest_Rate_Decimal);

    // Take top 20 rates
    const topRates = sorted.slice(0, 20);

    // Transform the data for frontend consumption
    const transformedRates = topRates.map((rate, index) => ({
      id: rate.Record_ID,
      lender: getLenderName(rate),
      rate: rate.Interest_Rate_Percentage,
      term: `${rate.Term_Years}-yr ${rate.Rate_Type}`,
      type: index < 6 ? 'featured' : 'regular',
      savings: index < 3 ? calculateSavings(rate.Interest_Rate_Decimal) : undefined,
      province: rate.Province.length > 2 ? rate.Province.substring(0, 2).toUpperCase() : rate.Province,
      transactionType: rate.Transaction_Type,
      mortgageSize: rate.Mortgage_Size_Range,
      downPaymentRange: rate.Down_Payment_Range,
      lastUpdated: rate.Last_Updated || new Date().toISOString().split('T')[0]
    }));

    console.log('Successfully processed and transformed rate data');

    const responseData = {
      success: true,
      timestamp: new Date().toISOString(),
      totalRatesReceived: rawData.length,
      filteredRates: filtered.length,
      topRates: transformedRates.length,
      rates: transformedRates,
      metadata: {
        apiEndpoint: N8N_API_ENDPOINT,
        lastRefresh: new Date().toISOString()
      }
    };

    return new Response(JSON.stringify(responseData), {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json' 
      },
    });

  } catch (error) {
    console.error('Error in refresh-mortgage-rates function:', error);
    
    const errorResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: new Date().toISOString()
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json' 
      },
    });
  }
});

// Helper function to generate consistent lender names
function getLenderName(rate: MortgageRateData): string {
  const lenderNames = [
    'Prime Mortgage Corp',
    'Canadian Direct Lending',
    'Secure Home Finance',
    'Maple Leaf Mortgages',
    'Northern Trust Lending',
    'Coast Capital',
    'First National',
    'MCAP',
    'Mortgage Intelligence',
    'Dominion Lending'
  ];
  
  // Use Record_ID to consistently assign lender names
  const hash = rate.Record_ID.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return lenderNames[Math.abs(hash) % lenderNames.length];
}

// Helper function to calculate potential savings
function calculateSavings(rate: number): string | undefined {
  const baseRate = 0.055; // 5.5% base rate
  const savingsRate = Math.max(0, baseRate - rate);
  const estimatedSavings = Math.round(savingsRate * 500000); // Assume $500k mortgage
  
  if (estimatedSavings > 1000) {
    return `Save $${Math.round(estimatedSavings / 1000)}k`;
  }
  return estimatedSavings > 0 ? `Save $${estimatedSavings}` : undefined;
}