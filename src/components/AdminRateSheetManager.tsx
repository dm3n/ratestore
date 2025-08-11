import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRateSheet, RateSheetRate } from "@/hooks/useRateSheet";
import { useToast } from "@/hooks/use-toast";
import { Plus, RefreshCw, Save, Trash2 } from "lucide-react";

export const AdminRateSheetManager = () => {
  const { rates, isLoading, error, fetchRates, upsertRate, removeRate } = useRateSheet();
  const { toast } = useToast();

  const [filters, setFilters] = useState({ province: "", transaction_type: "", rate_type: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, RateSheetRate>>({});
  const [newRow, setNewRow] = useState<RateSheetRate>({
    active: true,
    product_type: "mortgage",
    transaction_type: "buying",
    has_insurance: true,
    amortization_max_years: 25,
    term_years: 5,
    rate_type: "fixed",
    rate: 0.049,
    province: "ON",
    bracket_type: "ltv",
    bracket_min: 0.8,
    bracket_max: 0.95,
    occupancy: "owner_occupied",
    lender: "",
    notes: "",
  });

  const filtered = useMemo(() => {
    return rates.filter((r) =>
      (!filters.province || r.province === filters.province) &&
      (!filters.transaction_type || r.transaction_type === filters.transaction_type) &&
      (!filters.rate_type || r.rate_type === filters.rate_type)
    );
  }, [rates, filters]);

  useEffect(() => {
    // refetch when filters change to keep table light for large datasets
    fetchRates({
      province: filters.province || undefined,
      transaction_type: filters.transaction_type || undefined,
      rate_type: filters.rate_type || undefined,
      active: true,
    });
  }, [filters.province, filters.transaction_type, filters.rate_type]);

  const startEdit = (row: RateSheetRate) => {
    setEditingId(row.id!);
    setDrafts((d) => ({ ...d, [row.id!]: { ...row } }));
  };

  const cancelEdit = (id: string) => {
    setEditingId(null);
    setDrafts((d) => {
      const copy = { ...d };
      delete copy[id];
      return copy;
    });
  };

  const saveRow = async (id: string) => {
    try {
      const payload = drafts[id];
      await upsertRate(payload);
      toast({ title: "Saved", description: "Rate updated successfully." });
      cancelEdit(id);
    } catch (e: any) {
      toast({ title: "Save failed", description: e?.message || "Could not save rate", variant: "destructive" });
    }
  };

  const addRow = async () => {
    try {
      await upsertRate(newRow);
      toast({ title: "Added", description: "New rate added." });
      setNewRow({ ...newRow, rate: 0.049, lender: "" });
    } catch (e: any) {
      toast({ title: "Add failed", description: e?.message || "Could not add rate", variant: "destructive" });
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this rate?")) return;
    try {
      await removeRate(id);
      toast({ title: "Deleted", description: "Rate removed." });
    } catch (e: any) {
      toast({ title: "Delete failed", description: e?.message || "Could not delete", variant: "destructive" });
    }
  };

  const provinces = ["ALL", "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];

  const renderCell = (row: RateSheetRate, key: keyof RateSheetRate, type: "text" | "number" = "text") => {
    const isEditing = editingId === row.id;
    const value = (drafts[row.id!] || row)[key] as any;
    const onChange = (val: any) => setDrafts((d) => ({ ...d, [row.id!]: { ...(d[row.id!] || row), [key]: val } }));

    if (!isEditing) return <span className="text-sm">{String(value ?? "-")}</span>;

    if (key === "has_insurance" || key === "active") {
      return <Switch checked={Boolean(value)} onCheckedChange={(v) => onChange(v)} />;
    }

    if (key === "rate_type") {
      return (
        <Select value={(value as any) || ""} onValueChange={(v) => onChange(v)}>
          <SelectTrigger className="w-[140px]"><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="fixed">fixed</SelectItem>
            <SelectItem value="variable">variable</SelectItem>
          </SelectContent>
        </Select>
      );
    }

    if (key === "transaction_type") {
      return (
        <Select value={(value as any) || ""} onValueChange={(v) => onChange(v)}>
          <SelectTrigger className="w-[150px]"><SelectValue placeholder="Transaction" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="buying">buying</SelectItem>
            <SelectItem value="renewing">renewing</SelectItem>
            <SelectItem value="refinancing">refinancing</SelectItem>
            <SelectItem value="heloc">heloc</SelectItem>
          </SelectContent>
        </Select>
      );
    }

    if (key === "province") {
      return (
        <Select value={(value as any) || ""} onValueChange={(v) => onChange(v)}>
          <SelectTrigger className="w-[110px]"><SelectValue placeholder="Province" /></SelectTrigger>
          <SelectContent>
            {provinces.map((p) => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    if (typeof value === "number" || type === "number") {
      return (
        <Input
          type="number"
          value={value ?? 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-[120px]"
        />
      );
    }

    return <Input value={value ?? ""} onChange={(e) => onChange(e.target.value)} className="w-[160px]"/>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Rate Sheet Manager</h2>
          <p className="text-muted-foreground text-sm">Edit mortgage rate sheet entries. Changes take effect immediately.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => fetchRates()} disabled={isLoading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Filters</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label>Province</Label>
            <Select value={filters.province} onValueChange={(v) => setFilters((f) => ({ ...f, province: v }))}>
              <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="">All</SelectItem>
                {provinces.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label>Transaction Type</Label>
            <Select value={filters.transaction_type} onValueChange={(v) => setFilters((f) => ({ ...f, transaction_type: v }))}>
              <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="">All</SelectItem>
                <SelectItem value="buying">Buying</SelectItem>
                <SelectItem value="renewing">Renewing</SelectItem>
                <SelectItem value="refinancing">Refinancing</SelectItem>
                <SelectItem value="heloc">HELOC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label>Rate Type</Label>
            <Select value={filters.rate_type} onValueChange={(v) => setFilters((f) => ({ ...f, rate_type: v }))}>
              <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="">All</SelectItem>
                <SelectItem value="fixed">Fixed</SelectItem>
                <SelectItem value="variable">Variable</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Add Row</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 items-end">
          <div className="space-y-1"><Label>Lender</Label><Input value={newRow.lender || ''} onChange={(e) => setNewRow({ ...newRow, lender: e.target.value })} /></div>
          <div className="space-y-1"><Label>Province</Label>
            <Select value={newRow.province} onValueChange={(v) => setNewRow({ ...newRow, province: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {provinces.map((p) => (<SelectItem key={p} value={p}>{p}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1"><Label>Txn</Label>
            <Select value={newRow.transaction_type} onValueChange={(v) => setNewRow({ ...newRow, transaction_type: v as any })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="buying">buying</SelectItem>
                <SelectItem value="renewing">renewing</SelectItem>
                <SelectItem value="refinancing">refinancing</SelectItem>
                <SelectItem value="heloc">heloc</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1"><Label>Term (yrs)</Label><Input type="number" value={newRow.term_years ?? 0} onChange={(e) => setNewRow({ ...newRow, term_years: Number(e.target.value) })} /></div>
          <div className="space-y-1"><Label>Type</Label>
            <Select value={newRow.rate_type ?? undefined} onValueChange={(v) => setNewRow({ ...newRow, rate_type: v as any })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="fixed">fixed</SelectItem>
                <SelectItem value="variable">variable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1"><Label>Rate</Label><Input type="number" step="0.0001" value={newRow.rate} onChange={(e) => setNewRow({ ...newRow, rate: Number(e.target.value) })} /></div>
          <div className="space-y-1"><Label>Bracket</Label>
            <Select value={newRow.bracket_type} onValueChange={(v) => setNewRow({ ...newRow, bracket_type: v as any })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ltv">ltv</SelectItem>
                <SelectItem value="down_payment">down_payment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1 flex gap-2"><div className="flex-1"><Label>Min</Label><Input type="number" step="0.01" value={newRow.bracket_min ?? 0} onChange={(e) => setNewRow({ ...newRow, bracket_min: Number(e.target.value) })} /></div><div className="flex-1"><Label>Max</Label><Input type="number" step="0.01" value={newRow.bracket_max ?? 0} onChange={(e) => setNewRow({ ...newRow, bracket_max: Number(e.target.value) })} /></div></div>
          <div className="space-y-1"><Label>Insured</Label><Switch checked={newRow.has_insurance} onCheckedChange={(v) => setNewRow({ ...newRow, has_insurance: v })} /></div>
          <div className="space-y-1"><Label>Active</Label><Switch checked={newRow.active} onCheckedChange={(v) => setNewRow({ ...newRow, active: v })} /></div>
          <div className="space-y-1"><Label>&nbsp;</Label><Button onClick={addRow} className="w-full"><Plus className="mr-2 h-4 w-4"/>Add</Button></div>
        </CardContent>
      </Card>

      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lender</TableHead>
              <TableHead>Province</TableHead>
              <TableHead>Txn</TableHead>
              <TableHead>Term</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Bracket</TableHead>
              <TableHead>Min</TableHead>
              <TableHead>Max</TableHead>
              <TableHead>Insured</TableHead>
              <TableHead>Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{renderCell(row, "lender")}</TableCell>
                <TableCell>{renderCell(row, "province")}</TableCell>
                <TableCell>{renderCell(row, "transaction_type")}</TableCell>
                <TableCell>{renderCell(row, "term_years", "number")}</TableCell>
                <TableCell>{renderCell(row, "rate_type")}</TableCell>
                <TableCell>{renderCell(row, "rate", "number")}</TableCell>
                <TableCell>{renderCell(row, "bracket_type")}</TableCell>
                <TableCell>{renderCell(row, "bracket_min", "number")}</TableCell>
                <TableCell>{renderCell(row, "bracket_max", "number")}</TableCell>
                <TableCell>{renderCell(row, "has_insurance")}</TableCell>
                <TableCell>{renderCell(row, "active")}</TableCell>
                <TableCell className="text-right space-x-2">
                  {editingId === row.id ? (
                    <>
                      <Button size="sm" onClick={() => saveRow(row.id!)}><Save className="h-4 w-4 mr-1"/>Save</Button>
                      <Button size="sm" variant="outline" onClick={() => cancelEdit(row.id!)}>Cancel</Button>
                    </>
                  ) : (
                    <>
                      <Button size="sm" variant="outline" onClick={() => startEdit(row)}>Edit</Button>
                      <Button size="sm" variant="destructive" onClick={() => remove(row.id!)}><Trash2 className="h-4 w-4 mr-1"/>Delete</Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {!filtered.length && (
              <TableRow>
                <TableCell colSpan={12} className="text-center text-muted-foreground">No rates found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminRateSheetManager;
