import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";
import { useRateSheet } from "@/hooks/useRateSheet";

export const RateSheetCalculator = () => {
  const { findMatches, isLoading } = useRateSheet();
  const [requirements, setRequirements] = useState({
    transactionType: "buying" as const,
    hasInsurance: true,
    province: "ON",
    termYears: 5,
    rateType: "fixed" as const,
    propertyValue: 500000,
    downPayment: 100000,
    amortizationYears: 25,
    lender: "",
  });
  const [results, setResults] = useState<any[]>([]);
  const [show, setShow] = useState(false);

  const onFind = () => {
    let matches = findMatches(requirements as any);
    
    // Filter by lender if specified
    if (requirements.lender) {
      matches = matches.filter(rate => 
        rate.lender?.toLowerCase().includes(requirements.lender.toLowerCase())
      );
    }
    
    setResults(matches.slice(0, 20));
    setShow(true);
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
          <Button onClick={onFind} disabled={isLoading} className="flex items-center gap-2">
            {isLoading && <RefreshCw className="h-4 w-4 animate-spin" />}
            {isLoading ? 'Updating...' : 'Refresh rates'}
          </Button>
        </CardContent>
      </Card>

      {show && (
        <Card>
          <CardHeader>
            <CardTitle>Matching rates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {!results.length && <div className="text-muted-foreground text-sm">No matches found. Try adjusting inputs.</div>}
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
    </div>
  );
};

export default RateSheetCalculator;
