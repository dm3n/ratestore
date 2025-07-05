
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Trash2, Plus, Save, X, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GICRate {
  id: string;
  institution: string;
  rate: number;
  term: string;
  gic_type: string;
  min_investment: number;
  max_investment: number | null;
  province: string;
  special_features: string[];
  promotional_rate: boolean;
  promotional_expires_at: string | null;
  is_featured: boolean;
  is_sponsored: boolean;
  is_active: boolean;
}

export function AdminGICRateManager() {
  const [rates, setRates] = useState<GICRate[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const [newRate, setNewRate] = useState({
    institution: '',
    rate: 0,
    term: '1-year',
    gic_type: 'non-registered',
    min_investment: 100,
    max_investment: null as number | null,
    province: 'All',
    special_features: [] as string[],
    promotional_rate: false,
    promotional_expires_at: null as string | null,
    is_featured: false,
    is_sponsored: false,
    is_active: true
  });

  const fetchRates = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('gic_rates')
        .select('*')
        .order('institution', { ascending: true });

      if (error) throw error;
      setRates(data || []);
    } catch (error) {
      console.error('Error fetching GIC rates:', error);
      toast({
        title: "Error",
        description: "Failed to fetch GIC rates",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const handleSave = async (rate: GICRate) => {
    try {
      const { error } = await supabase
        .from('gic_rates')
        .update({
          institution: rate.institution,
          rate: rate.rate,
          term: rate.term,
          gic_type: rate.gic_type,
          min_investment: rate.min_investment,
          max_investment: rate.max_investment,
          province: rate.province,
          special_features: rate.special_features,
          promotional_rate: rate.promotional_rate,
          promotional_expires_at: rate.promotional_expires_at,
          is_featured: rate.is_featured,
          is_sponsored: rate.is_sponsored,
          is_active: rate.is_active,
          updated_at: new Date().toISOString()
        })
        .eq('id', rate.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "GIC rate updated successfully"
      });

      setEditingId(null);
      fetchRates();
    } catch (error) {
      console.error('Error updating GIC rate:', error);
      toast({
        title: "Error",
        description: "Failed to update GIC rate",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this GIC rate?')) return;

    try {
      const { error } = await supabase
        .from('gic_rates')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "GIC rate deleted successfully"
      });

      fetchRates();
    } catch (error) {
      console.error('Error deleting GIC rate:', error);
      toast({
        title: "Error",
        description: "Failed to delete GIC rate",
        variant: "destructive"
      });
    }
  };

  const handleAddRate = async () => {
    try {
      const { error } = await supabase
        .from('gic_rates')
        .insert([newRate]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "GIC rate added successfully"
      });

      setShowAddForm(false);
      setNewRate({
        institution: '',
        rate: 0,
        term: '1-year',
        gic_type: 'non-registered',
        min_investment: 100,
        max_investment: null,
        province: 'All',
        special_features: [],
        promotional_rate: false,
        promotional_expires_at: null,
        is_featured: false,
        is_sponsored: false,
        is_active: true
      });
      fetchRates();
    } catch (error) {
      console.error('Error adding GIC rate:', error);
      toast({
        title: "Error",
        description: "Failed to add GIC rate",
        variant: "destructive"
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            GIC Rate Manager
            {isLoading && <RefreshCw className="h-4 w-4 animate-spin" />}
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchRates} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Rate
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {showAddForm && (
          <Card className="mb-6 p-4">
            <h3 className="text-lg font-semibold mb-4">Add New GIC Rate</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label>Institution</Label>
                <Input
                  value={newRate.institution}
                  onChange={(e) => setNewRate({...newRate, institution: e.target.value})}
                />
              </div>
              <div>
                <Label>Rate (decimal)</Label>
                <Input
                  type="number"
                  step="0.0001"
                  value={newRate.rate}
                  onChange={(e) => setNewRate({...newRate, rate: parseFloat(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Term</Label>
                <Select value={newRate.term} onValueChange={(value) => setNewRate({...newRate, term: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30-day">30 Day</SelectItem>
                    <SelectItem value="60-day">60 Day</SelectItem>
                    <SelectItem value="90-day">90 Day</SelectItem>
                    <SelectItem value="6-month">6 Month</SelectItem>
                    <SelectItem value="1-year">1 Year</SelectItem>
                    <SelectItem value="18-month">18 Month</SelectItem>
                    <SelectItem value="2-year">2 Year</SelectItem>
                    <SelectItem value="3-year">3 Year</SelectItem>
                    <SelectItem value="4-year">4 Year</SelectItem>
                    <SelectItem value="5-year">5 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>GIC Type</Label>
                <Select value={newRate.gic_type} onValueChange={(value) => setNewRate({...newRate, gic_type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-registered">Non-registered</SelectItem>
                    <SelectItem value="tfsa">TFSA</SelectItem>
                    <SelectItem value="rrsp">RRSP</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Min Investment</Label>
                <Input
                  type="number"
                  value={newRate.min_investment}
                  onChange={(e) => setNewRate({...newRate, min_investment: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newRate.is_featured}
                  onCheckedChange={(checked) => setNewRate({...newRate, is_featured: checked})}
                />
                <Label>Featured</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newRate.is_sponsored}
                  onCheckedChange={(checked) => setNewRate({...newRate, is_sponsored: checked})}
                />
                <Label>Sponsored</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newRate.is_active}
                  onCheckedChange={(checked) => setNewRate({...newRate, is_active: checked})}
                />
                <Label>Active</Label>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={handleAddRate}>Add Rate</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </Card>
        )}

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Institution</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Term</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Min Investment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rates.map((rate) => (
                <TableRow key={rate.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {rate.institution}
                      {rate.is_featured && <Badge variant="default" className="text-xs">Featured</Badge>}
                      {rate.is_sponsored && <Badge variant="secondary" className="text-xs">Sponsored</Badge>}
                    </div>
                  </TableCell>
                  <TableCell>{(rate.rate * 100).toFixed(2)}%</TableCell>
                  <TableCell>{rate.term}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{rate.gic_type}</Badge>
                  </TableCell>
                  <TableCell>${rate.min_investment.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={rate.is_active ? 'default' : 'destructive'}>
                      {rate.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingId(rate.id)}
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(rate.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
