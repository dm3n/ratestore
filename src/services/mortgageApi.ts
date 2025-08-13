const API_BASE_URL = 'https://victorjjma.pythonanywhere.com';

// Types for API requests and responses
export interface MortgagePaymentRequest {
  loan_amount: number;
  interest_rate: number;
  loan_term: number;
}

export interface MortgagePaymentResponse {
  monthly_payment: number;
  total_payment: number;
  total_interest: number;
}

export interface AffordabilityRequest {
  annual_income: number;
  monthly_debt: number;
  down_payment: number;
  interest_rate: number;
}

export interface AffordabilityResponse {
  max_home_price: number;
  max_loan_amount: number;
  max_monthly_payment: number;
  gds_ratio: number;
  tds_ratio: number;
}

export interface DownPaymentRequest {
  home_price: number;
  down_payment_percent: number;
  current_savings: number;
  monthly_savings: number;
}

export interface DownPaymentResponse {
  down_payment_amount: number;
  remaining_to_save: number;
  months_to_goal: number;
  requires_insurance: boolean;
  insurance_premium: number;
}

export interface ExtraPaymentRequest {
  loan_amount: number;
  interest_rate: number;
  loan_term: number;
  extra_payment: number;
}

export interface ExtraPaymentResponse {
  regular_payment: number;
  new_payment: number;
  interest_saved: number;
  time_saved_months: number;
  time_saved_years: number;
}

export interface RenewalRequest {
  outstanding_balance: number;
  current_property_value: number;
  current_rate: number;
  term_years: number;
  rate_type: string;
  has_cmhc: boolean;
}

export interface RenewalResponse {
  ltv_percent: number;
  available_rates: any[];
  monthly_savings: number;
  annual_savings: number;
}

export interface CompoundInterestRequest {
  principal: number;
  annual_rate: number;
  contribution_frequency: string;
  contribution_amount: number;
  time_years: number;
}

export interface CompoundInterestResponse {
  future_value: number;
  total_contributions: number;
  total_interest: number;
}

export interface TFSARequest {
  birth_year: number;
  total_contributions: number;
  total_withdrawals: number;
  province: string;
}

export interface TFSAResponse {
  total_contribution_room: number;
  available_room: number;
  years_eligible: number;
  current_year_limit: number;
}

export interface HELOCRequest {
  property_value: number;
  outstanding_mortgage: number;
}

export interface HELOCResponse {
  available_heloc: number;
  max_total_credit: number;
  heloc_rates: any[];
}

export interface ApiError {
  error: string;
}

class MortgageApiService {
  private async makeRequest<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      const options: RequestInit = {
        method: data ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (data) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(url, options);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }

      return result;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error instanceof Error ? error : new Error('Unknown API error');
    }
  }

  // Calculator endpoints
  async calculateMortgagePayment(data: MortgagePaymentRequest): Promise<MortgagePaymentResponse> {
    return this.makeRequest<MortgagePaymentResponse>('/api/calculator/mortgage-payment', data);
  }

  async calculateAffordability(data: AffordabilityRequest): Promise<AffordabilityResponse> {
    return this.makeRequest<AffordabilityResponse>('/api/calculator/affordability', data);
  }

  async calculateDownPayment(data: DownPaymentRequest): Promise<DownPaymentResponse> {
    return this.makeRequest<DownPaymentResponse>('/api/calculator/down-payment', data);
  }

  async calculateExtraPayment(data: ExtraPaymentRequest): Promise<ExtraPaymentResponse> {
    return this.makeRequest<ExtraPaymentResponse>('/api/calculator/extra-payment', data);
  }

  async calculateRenewal(data: RenewalRequest): Promise<RenewalResponse> {
    return this.makeRequest<RenewalResponse>('/api/calculator/renewal', data);
  }

  async calculateCompoundInterest(data: CompoundInterestRequest): Promise<CompoundInterestResponse> {
    return this.makeRequest<CompoundInterestResponse>('/api/calculator/compound-interest', data);
  }

  async calculateTFSA(data: TFSARequest): Promise<TFSAResponse> {
    return this.makeRequest<TFSAResponse>('/api/calculator/tfsa', data);
  }

  async calculateHELOC(data: HELOCRequest): Promise<HELOCResponse> {
    return this.makeRequest<HELOCResponse>('/api/calculator/heloc', data);
  }

  // Rate data endpoints
  async getAllRates() {
    return this.makeRequest('/api/rates/all');
  }

  async lookupRates(criteria: any) {
    return this.makeRequest('/api/rates/lookup', criteria);
  }

  async checkHealth() {
    return this.makeRequest('/api/health');
  }
}

export const mortgageApi = new MortgageApiService();