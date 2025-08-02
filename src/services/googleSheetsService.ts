interface GoogleSheetMortgageRate {
  lender: string;
  rate: number;
  term: string;
  maxLtv: number;
  mortgageType: 'insured' | 'uninsured';
  minCreditScore: number;
  province: string;
  rateType?: 'fixed' | 'variable';
}

interface UserMortgageRequirements {
  term: string;
  mortgageType: 'insured' | 'uninsured';
  creditScore: number;
  propertyValue: number;
  downPayment: number;
  province?: string;
}

export class GoogleSheetsService {
  private static SHEET_ID = '1a2xR7aEUemZOSuCcVzOeSjqssClQBPXz';
  private static CSV_URL = `https://docs.google.com/spreadsheets/d/${this.SHEET_ID}/export?format=csv&gid=0`;

  static async fetchMortgageRates(): Promise<GoogleSheetMortgageRate[]> {
    try {
      console.log('Fetching mortgage rates from Google Sheets...');
      const response = await fetch(this.CSV_URL);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch sheet: ${response.status}`);
      }

      const csvText = await response.text();
      const rates = this.parseCSVToRates(csvText);
      console.log('Fetched rates from Google Sheets:', rates);
      return rates;
    } catch (error) {
      console.error('Error fetching Google Sheets data:', error);
      return [];
    }
  }

  private static parseCSVToRates(csvText: string): GoogleSheetMortgageRate[] {
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const rates: GoogleSheetMortgageRate[] = [];

    // Find column indices
    const lenderIndex = headers.findIndex(h => h.includes('lender'));
    const rateIndex = headers.findIndex(h => h.includes('rate') && !h.includes('ltv'));
    const termIndex = headers.findIndex(h => h.includes('term'));
    const ltvIndex = headers.findIndex(h => h.includes('ltv') || h.includes('max ltv'));
    const typeIndex = headers.findIndex(h => h.includes('insured') || h.includes('type'));
    const creditIndex = headers.findIndex(h => h.includes('credit') || h.includes('score'));
    const provinceIndex = headers.findIndex(h => h.includes('province'));

    console.log('Column indices:', { lenderIndex, rateIndex, termIndex, ltvIndex, typeIndex, creditIndex, provinceIndex });

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
      
      if (values.length < headers.length) continue;

      try {
        const rate: GoogleSheetMortgageRate = {
          lender: values[lenderIndex] || '',
          rate: parseFloat(values[rateIndex]) || 0,
          term: values[termIndex] || '',
          maxLtv: parseFloat(values[ltvIndex]) || 0.95,
          mortgageType: values[typeIndex]?.toLowerCase().includes('insured') ? 'insured' : 'uninsured',
          minCreditScore: parseInt(values[creditIndex]) || 600,
          province: values[provinceIndex] || 'ALL',
          rateType: values[termIndex]?.toLowerCase().includes('variable') ? 'variable' : 'fixed'
        };

        if (rate.lender && rate.rate > 0) {
          rates.push(rate);
        }
      } catch (error) {
        console.warn('Error parsing row:', i, error);
      }
    }

    return rates;
  }

  static calculateLTV(propertyValue: number, downPayment: number): number {
    return (propertyValue - downPayment) / propertyValue;
  }

  static findMatchingRates(
    rates: GoogleSheetMortgageRate[], 
    requirements: UserMortgageRequirements
  ): GoogleSheetMortgageRate[] {
    const userLTV = this.calculateLTV(requirements.propertyValue, requirements.downPayment);
    
    console.log('Finding matches for:', { ...requirements, calculatedLTV: userLTV });

    return rates
      .filter(rate => {
        const termMatch = rate.term.toLowerCase().includes(requirements.term.toLowerCase());
        const typeMatch = rate.mortgageType === requirements.mortgageType;
        const creditMatch = requirements.creditScore >= rate.minCreditScore;
        const ltvMatch = userLTV <= rate.maxLtv;
        const provinceMatch = !requirements.province || 
          rate.province === 'ALL' || 
          rate.province.toLowerCase() === requirements.province.toLowerCase();

        console.log(`Rate ${rate.lender}:`, {
          termMatch, typeMatch, creditMatch, ltvMatch, provinceMatch,
          userLTV, maxLtv: rate.maxLtv
        });

        return termMatch && typeMatch && creditMatch && ltvMatch && provinceMatch;
      })
      .sort((a, b) => a.rate - b.rate); // Sort by lowest rate first
  }

  static getBestRatesByTerm(rates: GoogleSheetMortgageRate[]): Record<string, GoogleSheetMortgageRate> {
    const bestRates: Record<string, GoogleSheetMortgageRate> = {};
    
    rates.forEach(rate => {
      const key = `${rate.term}-${rate.mortgageType}`;
      if (!bestRates[key] || rate.rate < bestRates[key].rate) {
        bestRates[key] = rate;
      }
    });

    return bestRates;
  }
}