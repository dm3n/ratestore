import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { RateOverride } from "@/hooks/useRateOverrides";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initial?: Partial<RateOverride>;
  onSave: (row: RateOverride) => Promise<void> | void;
}

const defaultRow: RateOverride = {
  lender: "",
  rate: 0.04,
  term: "5-yr",
  rateType: "fixed",
  transactionType: "buying",
  hasInsurance: true,
  ltvMin: 0.8,
  ltvMax: 0.95,
  minDownPayment: 0.05,
  maxDownPayment: 0.2,
  province: "ON",
  minCreditScore: 600,
};

export function RateEditDialog({ open, onOpenChange, initial, onSave }: Props) {
  const [row, setRow] = useState<RateOverride>(defaultRow);

  useEffect(() => {
    if (initial) {
      setRow({ ...defaultRow, ...initial });
    } else {
      setRow(defaultRow);
    }
  }, [initial, open]);

  const handleSubmit = async () => {
    // Basic validation
    if (!row.lender || !row.term || !row.rateType || !row.transactionType) return;
    await onSave(row);
    onOpenChange(false);
  };

  const pctToStr = (v?: number | null) => (v != null ? String(Math.round(v * 10000) / 100) : "");
  const strToPct = (s: string) => (s === "" ? undefined : Math.max(0, Number(s) / 100));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{row.id ? "Edit Rate" : "Add Rate"}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Lender</Label>
            <Input value={row.lender} onChange={(e) => setRow({ ...row, lender: e.target.value })} />
          </div>

          <div className="space-y-2">
            <Label>Term</Label>
            <Input placeholder="e.g., 5-yr" value={row.term} onChange={(e) => setRow({ ...row, term: e.target.value })} />
          </div>

          <div className="space-y-2">
            <Label>Rate Type</Label>
            <Select value={row.rateType} onValueChange={(v: "fixed" | "variable") => setRow({ ...row, rateType: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="fixed">Fixed</SelectItem>
                <SelectItem value="variable">Variable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Transaction</Label>
            <Select value={row.transactionType} onValueChange={(v: any) => setRow({ ...row, transactionType: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="buying">Buying</SelectItem>
                <SelectItem value="renewing">Renewing</SelectItem>
                <SelectItem value="refinancing">Refinancing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Interest Rate (%)</Label>
            <Input type="number" step="0.01"
              value={(row.rate * 100).toFixed(2)}
              onChange={(e) => setRow({ ...row, rate: Math.max(0, Number(e.target.value) / 100) })}
            />
          </div>

          <div className="space-y-2">
            <Label>Province</Label>
            <Select value={row.province} onValueChange={(v) => setRow({ ...row, province: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All</SelectItem>
                <SelectItem value="ON">Ontario</SelectItem>
                <SelectItem value="BC">British Columbia</SelectItem>
                <SelectItem value="AB">Alberta</SelectItem>
                <SelectItem value="QC">Quebec</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Insured?</Label>
            <div className="h-10 flex items-center"><Switch checked={row.hasInsurance} onCheckedChange={(v) => setRow({ ...row, hasInsurance: v })} /></div>
          </div>

          <div className="space-y-2">
            <Label>Min Credit Score</Label>
            <Input type="number" value={row.minCreditScore ?? ""} onChange={(e) => setRow({ ...row, minCreditScore: e.target.value === "" ? null : Number(e.target.value) })} />
          </div>

          <div className="space-y-2">
            <Label>LTV Min (%)</Label>
            <Input type="number" step="0.01" value={pctToStr(row.ltvMin)} onChange={(e) => setRow({ ...row, ltvMin: strToPct(e.target.value) ?? 0 })} />
          </div>
          <div className="space-y-2">
            <Label>LTV Max (%)</Label>
            <Input type="number" step="0.01" value={pctToStr(row.ltvMax)} onChange={(e) => setRow({ ...row, ltvMax: strToPct(e.target.value) ?? 1 })} />
          </div>

          <div className="space-y-2">
            <Label>Down Payment Min (%)</Label>
            <Input type="number" step="0.01" value={pctToStr(row.minDownPayment ?? undefined)} onChange={(e) => setRow({ ...row, minDownPayment: strToPct(e.target.value) ?? null })} />
          </div>
          <div className="space-y-2">
            <Label>Down Payment Max (%)</Label>
            <Input type="number" step="0.01" value={pctToStr(row.maxDownPayment ?? undefined)} onChange={(e) => setRow({ ...row, maxDownPayment: strToPct(e.target.value) ?? null })} />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RateEditDialog;
