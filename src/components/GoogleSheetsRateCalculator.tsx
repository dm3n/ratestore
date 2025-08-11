import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useRateOverrides } from '@/hooks/useRateOverrides';
import { Calculator, TrendingDown, Award } from 'lucide-react';

interface GoogleSheetMortgageRate {
  lender: string;
  rate: number;
  term: string;
  rateType: 'fixed' | 'variable';
  transactionType: 'buying' | 'renewing' | 'refinancing';
  hasInsurance: boolean;
  ltvMin: number;
  ltvMax: number;
  minDownPayment?: number;
  maxDownPayment?: number;
  province: string;
  minCreditScore?: number;
}

export const GoogleSheetsRateCalculator = () => {
  const { overrides: rates, isLoading, error, findMatches } = useRateOverrides();
  const [requirements, setRequirements] = useState({
    term: '',
    transactionType: '' as 'buying' | 'renewing' | 'refinancing' | '',
    hasInsurance: false,
    creditScore: 650,
    propertyValue: 500000,
    downPayment: 100000,
    province: 'ON'
  });
  const [matches, setMatches] = useState<GoogleSheetMortgageRate[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateLTV = () => {
    return ((requirements.propertyValue - requirements.downPayment) / requirements.propertyValue * 100).toFixed(1);
  };

  const handleFindRates = () => {
    if (!requirements.term || !requirements.transactionType) {
      return;
    }

    const matchingRates = findMatches({
      term: requirements.term,
      transactionType: requirements.transactionType,
      hasInsurance: requirements.hasInsurance,
      creditScore: requirements.creditScore,
      propertyValue: requirements.propertyValue,
      downPayment: requirements.downPayment,
      province: requirements.province
    });

    setMatches(matchingRates);
    setShowResults(true);
  };

  const formatRate = (rate: number) => {
    return (rate * 100).toFixed(2);
  };

  const calculateMonthlyPayment = (rate: number, principal: number, years: number = 25) => {
    const monthlyRate = rate / 12;
    const numPayments = years * 12;
    const loanAmount = requirements.propertyValue - requirements.downPayment;
    
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment;
  };

  if (error) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="text-center text-red-600">
            <p>Error loading rates: {error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Find Your Perfect Mortgage Rate
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="term">Mortgage Term</Label>
              <Select value={requirements.term} onValueChange={(value) => 
                setRequirements(prev => ({ ...prev, term: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-yr">1 Year Fixed</SelectItem>
                  <SelectItem value="2-yr">2 Year Fixed</SelectItem>
                  <SelectItem value="3-yr">3 Year Fixed</SelectItem>
                  <SelectItem value="4-yr">4 Year Fixed</SelectItem>
                  <SelectItem value="5-yr">5 Year Fixed</SelectItem>
                  <SelectItem value="7-yr">7 Year Fixed</SelectItem>
                  <SelectItem value="10-yr">10 Year Fixed</SelectItem>
                  <SelectItem value="variable">Variable Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transactionType">Transaction Type</Label>
              <Select value={requirements.transactionType} onValueChange={(value: 'buying' | 'renewing' | 'refinancing') => 
                setRequirements(prev => ({ ...prev, transactionType: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select transaction type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buying">Buying a Home</SelectItem>
                  <SelectItem value="renewing">Renewing Mortgage</SelectItem>
                  <SelectItem value="refinancing">Refinancing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hasInsurance">Mortgage Insurance</Label>
              <Select value={requirements.hasInsurance.toString()} onValueChange={(value) => 
                setRequirements(prev => ({ ...prev, hasInsurance: value === 'true' }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select insurance status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Insured (CMHC/High-Ratio)</SelectItem>
                  <SelectItem value="false">Uninsured (Conventional)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select value={requirements.province} onValueChange={(value) => 
                setRequirements(prev => ({ ...prev, province: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ON">Ontario</SelectItem>
                  <SelectItem value="BC">British Columbia</SelectItem>
                  <SelectItem value="AB">Alberta</SelectItem>
                  <SelectItem value="QC">Quebec</SelectItem>
                  <SelectItem value="ALL">All Provinces</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyValue">Property Value</Label>
              <Input
                id="propertyValue"
                type="number"
                value={requirements.propertyValue}
                onChange={(e) => setRequirements(prev => ({ 
                  ...prev, 
                  propertyValue: parseInt(e.target.value) || 0 
                }))}
                placeholder="500000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="downPayment">Down Payment</Label>
              <Input
                id="downPayment"
                type="number"
                value={requirements.downPayment}
                onChange={(e) => setRequirements(prev => ({ 
                  ...prev, 
                  downPayment: parseInt(e.target.value) || 0 
                }))}
                placeholder="100000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="creditScore">Credit Score</Label>
              <Input
                id="creditScore"
                type="number"
                value={requirements.creditScore}
                onChange={(e) => setRequirements(prev => ({ 
                  ...prev, 
                  creditScore: parseInt(e.target.value) || 600 
                }))}
                placeholder="650"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Loan-to-Value Ratio: <strong>{calculateLTV()}%</strong>
            </div>
            <Button 
              onClick={handleFindRates} 
              disabled={isLoading || !requirements.term || !requirements.transactionType}
              className="px-8"
            >
              {isLoading ? 'Loading...' : 'Find Best Rates'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Your Matching Rates ({matches.length} found)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {matches.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No rates found matching your criteria.</p>
                <p className="text-sm mt-2">Try adjusting your requirements or increasing your down payment.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {matches.slice(0, 10).map((rate, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {index === 0 && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            <Award className="h-3 w-3 mr-1" />
                            Best Rate
                          </Badge>
                        )}
                        <div>
                          <h3 className="font-semibold">{rate.lender}</h3>
                          <p className="text-sm text-muted-foreground">
                            {rate.term} {rate.rateType} • {rate.transactionType} • {rate.hasInsurance ? 'Insured' : 'Uninsured'} • {rate.province}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {formatRate(rate.rate)}%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ~${calculateMonthlyPayment(rate.rate, requirements.propertyValue - requirements.downPayment).toLocaleString()}/mo
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                      <span>LTV Range: {(rate.ltvMin * 100).toFixed(0)}% - {(rate.ltvMax * 100).toFixed(0)}%</span>
                      {rate.minCreditScore && <span>Min Credit: {rate.minCreditScore}</span>}
                      {rate.minDownPayment && <span>Down Payment: {(rate.minDownPayment * 100).toFixed(0)}%+</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};