import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useGoogleSheetsRates } from "@/hooks/useGoogleSheetsRates";

// Local type aligned with GoogleSheetsService
interface SheetRate {
  lender: string;
  rate: number; // decimal (e.g., 0.0399)
  term: string; // e.g., "5-yr"
  rateType: "fixed" | "variable";
  transactionType: "buying" | "renewing" | "refinancing";
  hasInsurance: boolean;
  ltvMin: number; // 0-1
  ltvMax: number; // 0-1
  minDownPayment?: number; // 0-1
  maxDownPayment?: number; // 0-1
  province: string; // e.g., "ON"
  minCreditScore?: number;
}

function pctRangeLabel(min?: number, max?: number, prefix = "") {
  const toPct = (v?: number) => (typeof v === "number" ? `${(v * 100).toFixed(v < 0.1 ? 2 : 0)}%` : "");
  const minStr = toPct(min);
  const maxStr = toPct(max);
  if (minStr && maxStr) return `${prefix}${minStr} - ${maxStr}`;
  if (minStr && !maxStr) return `${prefix}>= ${minStr}`;
  if (!minStr && maxStr) return `${prefix}<= ${maxStr}`;
  return prefix ? prefix.trim() : "All";
}

function groupBy<T, K extends string | number>(arr: T[], keyFn: (i: T) => K) {
  return arr.reduce((acc, item) => {
    const k = keyFn(item);
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

function normalizeTerm(term: string) {
  // Accepts formats like "5-yr", "5 year" and returns "1 year", "2 year" etc.
  const lower = term.toLowerCase().replace("yrs", "year").replace("yr", "year").replace("years", "year");
  if (/(^\d+)\s*[- ]?year/.test(lower)) {
    const m = lower.match(/(^\d+)/);
    return m ? `${m[1]} year` : term;
  }
  return term;
}

function buildTermRow(rates: SheetRate[]) {
  // Map term -> { fixed?: number, variable?: number }
  const byTerm = groupBy(rates, (r) => normalizeTerm(r.term));
  const rows = Object.entries(byTerm).map(([term, bucket]) => {
    const fixed = bucket.find((r) => r.rateType === "fixed")?.rate;
    const variable = bucket.find((r) => r.rateType === "variable")?.rate;
    return { term, fixed, variable };
  });
  // Sort numerically by term start number if possible
  return rows.sort((a, b) => {
    const na = parseInt(a.term);
    const nb = parseInt(b.term);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    return a.term.localeCompare(b.term);
  });
}

function RatesTable({ data }: { data: SheetRate[] }) {
  const rows = useMemo(() => buildTermRow(data), [data]);
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Term</TableHead>
            <TableHead>Fixed Rate</TableHead>
            <TableHead>Variable Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.term}>
              <TableCell className="whitespace-nowrap">{row.term}</TableCell>
              <TableCell>{typeof row.fixed === "number" ? `${(row.fixed * 100).toFixed(2)}%` : "—"}</TableCell>
              <TableCell>{typeof row.variable === "number" ? `${(row.variable * 100).toFixed(2)}%` : "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function AdminRatesMenu() {
  const { rates, isLoading, error, lastUpdated } = useGoogleSheetsRates();
  const [province, setProvince] = useState<string>("ON");

  const filtered = useMemo(() => {
    return rates.filter((r) => !province || province === "ALL" || r.province === province);
  }, [rates, province]);

  const buying = filtered.filter((r) => r.transactionType === "buying");
  const renewing = filtered.filter((r) => r.transactionType === "renewing");
  const refinancing = filtered.filter((r) => r.transactionType === "refinancing" && r.term !== "HELOC");
  const heloc = filtered.filter((r) => r.term === "HELOC");

  // Buying grouped by down payment range label and insurance flag
  const buyingGroups = useMemo(() => {
    return groupBy(buying, (r) => {
      const label = pctRangeLabel(r.minDownPayment, r.maxDownPayment, "Down Payment - ");
      const ins = r.hasInsurance ? "Insured" : "Uninsured";
      return `${ins} | ${label}`;
    });
  }, [buying]);

  // Renewing grouped by insurance and LTV range
  const renewingGroups = useMemo(() => {
    return groupBy(renewing, (r) => {
      const ins = r.hasInsurance ? "CMHC Insurance — YES" : "CMHC Insurance — NO";
      const ltv = pctRangeLabel(r.ltvMin, r.ltvMax, "Loan to Value - ");
      return `${ins} | ${ltv}`;
    });
  }, [renewing]);

  // Refinancing grouped by LTV range
  const refinancingGroups = useMemo(() => {
    return groupBy(refinancing, (r) => pctRangeLabel(r.ltvMin, r.ltvMax, "Loan to Value - "));
  }, [refinancing]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle>Rates Structure (Read‑only)</CardTitle>
          <div className="text-sm text-muted-foreground">
            Source: Google Sheet • {lastUpdated ? `Updated ${lastUpdated.toLocaleString()}` : "Fetching..."}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex items-center">
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>LTV is (Property Value − Down Payment) ÷ Property Value.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="min-w-[180px]">
            <Select value={province} onValueChange={setProvince}>
              <SelectTrigger>
                <SelectValue placeholder="Province" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Provinces</SelectItem>
                <SelectItem value="ON">Ontario</SelectItem>
                <SelectItem value="BC">British Columbia</SelectItem>
                <SelectItem value="AB">Alberta</SelectItem>
                <SelectItem value="QC">Quebec</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="text-destructive mb-4">{error}</div>
        )}
        {isLoading && !rates.length ? (
          <div className="text-sm text-muted-foreground">Loading rates…</div>
        ) : (
          <Accordion type="multiple" className="space-y-4">
            {/* Buying a Home */}
            <AccordionItem value="buying">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>Buying a Home</span>
                  <Badge variant="outline">{Object.keys(buyingGroups).length} groups</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" className="pl-2">
                  {Object.entries(buyingGroups).map(([label, items]) => (
                    <AccordionItem key={label} value={`buying-${label}`}>
                      <AccordionTrigger>{label}</AccordionTrigger>
                      <AccordionContent>
                        <RatesTable data={items as SheetRate[]} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Renewing */}
            <AccordionItem value="renewing">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>Renewing</span>
                  <Badge variant="outline">{Object.keys(renewingGroups).length} groups</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" className="pl-2">
                  {Object.entries(renewingGroups).map(([label, items]) => (
                    <AccordionItem key={label} value={`renew-${label}`}>
                      <AccordionTrigger>{label}</AccordionTrigger>
                      <AccordionContent>
                        <RatesTable data={items as SheetRate[]} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Refinancing */}
            <AccordionItem value="refinancing">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>Refinancing</span>
                  <Badge variant="outline">{Object.keys(refinancingGroups).length} groups</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" className="pl-2">
                  {Object.entries(refinancingGroups).map(([label, items]) => (
                    <AccordionItem key={label} value={`refi-${label}`}>
                      <AccordionTrigger>{label}</AccordionTrigger>
                      <AccordionContent>
                        <RatesTable data={items as SheetRate[]} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* HELOC */}
            {!!heloc.length && (
              <AccordionItem value="heloc">
                <AccordionTrigger>HELOC</AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Lender</TableHead>
                          <TableHead>Rate</TableHead>
                          <TableHead>Min Credit Score</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {heloc
                          .sort((a, b) => a.rate - b.rate)
                          .map((h) => (
                            <TableRow key={`${h.lender}-${h.rate}`}>
                              <TableCell>{h.lender}</TableCell>
                              <TableCell>{(h.rate * 100).toFixed(2)}%</TableCell>
                              <TableCell>{h.minCreditScore ?? "—"}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
}

export default AdminRatesMenu;
