import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";
import { useRateSheet } from "@/hooks/useRateSheet";
import { useExternalRateApi, type RateLookupCriteria } from "@/hooks/useExternalRateApi";

export const RateSheetCalculator = () => {
  const { findMatches, isLoading } = useRateSheet();
  const { 
    rates: externalRates, 
    isLoading: externalLoading, 
    lookupSpecificRates, 
    fetchAllRates,
    getMortgageSizeBracket,
    getDownPaymentRange,
    findBestRates 
  } = useExternalRateApi();
  const [requirements, setRequirements] = useState({
    transactionType: "buying" as const,
    hasInsurance: true,
    province: "ON",
    termYears: 5,
    rateType: "fixed" as "fixed" | "variable" | "any",
    propertyValue: 500000,
    downPayment: 100000,
    amortizationYears: 25,
    lender: "",
  });
  const [results, setResults] = useState<any[]>([]);
  const [externalResults, setExternalResults] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const [showExternal, setShowExternal] = useState(true);

  const onFind = async () => {
    // Find matches from internal database
    let matches = findMatches(requirements as any);
    
    // Filter by lender if specified
    if (requirements.lender) {
      matches = matches.filter(rate => 
        rate.lender?.toLowerCase().includes(requirements.lender.toLowerCase())
      );
    }
    
    setResults(matches.slice(0, 20));
    setShow(true);

    // Find matches from external API
    const downPaymentPercent = requirements.propertyValue > 0 ? (requirements.downPayment / requirements.propertyValue) * 100 : 20;
    const loanAmount = requirements.propertyValue - requirements.downPayment;
    
    const criteria: RateLookupCriteria = {
      transaction_type: requirements.transactionType === "buying" ? "purchase" : requirements.transactionType,
      province: requirements.province === "ALL" ? undefined : requirements.province,
      term: requirements.termYears,
      rate_type: requirements.rateType === "any" ? undefined : requirements.rateType,
      down_payment_percent: downPaymentPercent,
      property_value: requirements.propertyValue,
      loan_amount: loanAmount,
      ltv: requirements.propertyValue > 0 ? loanAmount / requirements.propertyValue : 0,
      mortgage_size: getMortgageSizeBracket(loanAmount),
      cmhc_insured: requirements.hasInsurance,
    };

    // Use external API rates
    const apiRequest = {
      transaction_type: requirements.transactionType === 'buying' ? 'purchases' as const : 
                       requirements.transactionType === 'renewing' ? 'renewals' as const :
                       requirements.transactionType as 'refinancing' | 'heloc',
      property_value: criteria.property_value || 500000,
      down_payment: criteria.property_value ? criteria.property_value * ((criteria.down_payment_percent || 20) / 100) : 100000,
      province: criteria.province || 'ON',
      terms: criteria.term ? [String(criteria.term)] : ['2', '3', '5'],
      rate_types: criteria.rate_type ? [criteria.rate_type] : ['fixed', 'variable'],
      has_cmhc: criteria.cmhc_insured
    };
    
    const externalResponse = await findBestRates(apiRequest);
    const externalMatches = externalResponse?.rates || [];
    
    // Filter by lender if specified
    let filteredExternalMatches = externalMatches;
    if (requirements.lender) {
      filteredExternalMatches = externalMatches.filter(rate => 
        rate.lender?.toLowerCase().includes(requirements.lender.toLowerCase())
      );
    }
    
    setExternalResults(filteredExternalMatches);
    setShowExternal(true);
  };

  // Auto-update rates when inputs change with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFind();
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [requirements]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Find matching rates</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <label className="text-sm">Transaction type</label>
            <Select value={requirements.transactionType} onValueChange={(v) => setRequirements((r) => ({ ...r, transactionType: v as any }))}>
              <SelectTrigger className="bg-background border border-input z-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border border-input shadow-lg z-50">
                <SelectItem value="buying">Buying</SelectItem>
                <SelectItem value="renewing">Renewing</SelectItem>
                <SelectItem value="refinancing">Refinancing</SelectItem>
                <SelectItem value="heloc">HELOC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Province</label>
              <Select value={requirements.province} onValueChange={(v) => setRequirements((r) => ({ ...r, province: v }))}>
                <SelectTrigger className="bg-background border border-input z-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-input shadow-lg z-50">
                  {["ALL","AB","BC","MB","NB","NL","NS","NT","NU","ON","PE","QC","SK","YT"].map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm">Amortization</label>
              <Input type="number" value={requirements.amortizationYears} onChange={(e) => setRequirements((r) => ({ ...r, amortizationYears: Number(e.target.value) }))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Term (years)</label>
              <Input type="number" value={requirements.termYears ?? 0} onChange={(e) => setRequirements((r) => ({ ...r, termYears: Number(e.target.value) }))} />
            </div>
            <div>
              <label className="text-sm">Rate type</label>
              <Select value={requirements.rateType} onValueChange={(v) => setRequirements((r) => ({ ...r, rateType: v as any }))}>
                <SelectTrigger className="bg-background border border-input z-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-input shadow-lg z-50">
                  <SelectItem value="fixed">Fixed</SelectItem>
                  <SelectItem value="variable">Variable</SelectItem>
                  <SelectItem value="any">Any</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Property value</label>
              <Input type="number" value={requirements.propertyValue} onChange={(e) => setRequirements((r) => ({ ...r, propertyValue: Number(e.target.value) }))} />
            </div>
            <div>
              <label className="text-sm">Down payment</label>
              <Input type="number" value={requirements.downPayment} onChange={(e) => setRequirements((r) => ({ ...r, downPayment: Number(e.target.value) }))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Lender</label>
              <Input 
                type="text" 
                placeholder="Search by lender name..." 
                value={requirements.lender} 
                onChange={(e) => setRequirements((r) => ({ ...r, lender: e.target.value }))} 
              />
            </div>
            <div>
              <label className="text-sm">Insurance</label>
              <Select value={String(requirements.hasInsurance)} onValueChange={(v) => setRequirements((r) => ({ ...r, hasInsurance: v === 'true' }))}>
                <SelectTrigger className="bg-background border border-input z-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-input shadow-lg z-50">
                  <SelectItem value="true">Insured</SelectItem>
                  <SelectItem value="false">Conventional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={onFind} disabled={isLoading || externalLoading} className="flex items-center gap-2 flex-1">
              {(isLoading || externalLoading) && <RefreshCw className="h-4 w-4 animate-spin" />}
              {(isLoading || externalLoading) ? 'Updating...' : 'Find Best Rates'}
            </Button>
            <Button onClick={fetchAllRates} disabled={externalLoading} variant="outline" className="flex items-center gap-2">
              <RefreshCw className={`h-4 w-4 ${externalLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>

      {showExternal && externalResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Live Market Rates</span>
              <Badge variant="outline" className="text-xs">
                {externalResults.length} rates found
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Real-time rates from our comprehensive rate sheet, updated every 30 minutes
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {externalResults.map((r, index) => (
              <div key={`external-${index}`} className="flex items-center justify-between border rounded-md p-3 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div>
                  <div className="font-medium">{r.lender || 'Lender'}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.term} • {r.rate_type} • {r.cmhc_insured ? 'Insured' : 'Conventional'}
                    {r.down_payment_range && ` • DP: ${r.down_payment_range}`}
                    {r.mortgage_size && ` • Size: ${r.mortgage_size}`}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default" className="bg-primary">
                    {r.rate?.toFixed(2) || 'N/A'}%
                  </Badge>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {show && results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Database Rates</span>
              <Badge variant="outline" className="text-xs">
                {results.length} rates found
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {results.map((r) => (
              <div key={r.id} className="flex items-center justify-between border rounded-md p-3">
                <div>
                  <div className="font-medium">{r.lender || 'Lender'}</div>
                  <div className="text-xs text-muted-foreground">{r.term_years ? `${r.term_years}-yr` : 'Open'} • {r.rate_type} • {r.has_insurance ? 'Insured' : 'Conventional'} • {r.province}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{(Number(r.rate) * 100).toFixed(2)}%</Badge>
                  <Button size="sm">Inquire</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {(showExternal && externalResults.length === 0 && !externalLoading) && (show && results.length === 0 && !isLoading) && (
        <Card>
          <CardHeader>
            <CardTitle>No Matching Rates Found</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-sm">
              No rates match your current criteria. Try adjusting your inputs:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Change the down payment amount</li>
                <li>Select a different term or rate type</li>
                <li>Try a different province</li>
                <li>Remove the lender filter</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RateSheetCalculator;
