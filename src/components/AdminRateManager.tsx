
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Trash2, Plus, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MortgageRate {
  id: string;
  lender_name: string;
  lender_type: string;
  rate_type: string;
  term: string;
  base_rate: number;
  min_down_payment: number;
  max_loan_to_value: number;
  transaction_types: string[];
  prime_discount: string | null;
  is_active: boolean;
}

export function AdminRateManager() {
  const [rates, setRates] = useState<MortgageRate[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingRate, setEditingRate] = useState<MortgageRate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const [newRate, setNewRate] = useState({
    lender_name: '',
    lender_type: 'bank',
    rate_type: 'fixed',
    term: '5-yr',
    base_rate: 0,
    min_down_payment: 0.05,
    max_loan_to_value: 0.95,
    transaction_types: ['buying'],
    prime_discount: '',
    is_active: true
  });

  const fetchRates = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('mortgage_rates')
        .select('*')
        .order('lender_name', { ascending: true });

      if (error) throw error;
      setRates(data || []);
    } catch (error) {
      console.error('Error fetching rates:', error);
      toast({
        title: "Error",
        description: "Failed to fetch rates",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const handleEdit = (rate: MortgageRate) => {
    setEditingId(rate.id);
    setEditingRate({ ...rate });
  };

  const handleSave = async () => {
    if (!editingRate) return;

    try {
      const { error } = await supabase
        .from('mortgage_rates')
        .update({
          lender_name: editingRate.lender_name,
          lender_type: editingRate.lender_type,
          rate_type: editingRate.rate_type,
          term: editingRate.term,
          base_rate: editingRate.base_rate,
          min_down_payment: editingRate.min_down_payment,
          max_loan_to_value: editingRate.max_loan_to_value,
          transaction_types: editingRate.transaction_types,
          prime_discount: editingRate.prime_discount || null,
          is_active: editingRate.is_active,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingRate.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Rate updated successfully"
      });

      setEditingId(null);
      setEditingRate(null);
      fetchRates();
    } catch (error) {
      console.error('Error updating rate:', error);
      toast({
        title: "Error",
        description: "Failed to update rate",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this rate?')) return;

    try {
      const { error } = await supabase
        .from('mortgage_rates')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Rate deleted successfully"
      });

      fetchRates();
    } catch (error) {
      console.error('Error deleting rate:', error);
      toast({
        title: "Error",
        description: "Failed to delete rate",
        variant: "destructive"
      });
    }
  };

  const handleAddRate = async () => {
    try {
      const { error } = await supabase
        .from('mortgage_rates')
        .insert([{
          ...newRate,
          prime_discount: newRate.prime_discount || null
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Rate added successfully"
      });

      setShowAddForm(false);
      setNewRate({
        lender_name: '',
        lender_type: 'bank',
        rate_type: 'fixed',
        term: '5-yr',
        base_rate: 0,
        min_down_payment: 0.05,
        max_loan_to_value: 0.95,
        transaction_types: ['buying'],
        prime_discount: '',
        is_active: true
      });
      fetchRates();
    } catch (error) {
      console.error('Error adding rate:', error);
      toast({
        title: "Error",
        description: "Failed to add rate",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Mortgage Rate Management</CardTitle>
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Rate
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showAddForm && (
          <Card className="mb-6 p-4">
            <h3 className="text-lg font-semibold mb-4">Add New Rate</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label>Lender Name</Label>
                <Input
                  value={newRate.lender_name}
                  onChange={(e) => setNewRate({...newRate, lender_name: e.target.value})}
                />
              </div>
              <div>
                <Label>Lender Type</Label>
                <Select value={newRate.lender_type} onValueChange={(value) => setNewRate({...newRate, lender_type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Bank</SelectItem>
                    <SelectItem value="credit_union">Credit Union</SelectItem>
                    <SelectItem value="alternative">Alternative</SelectItem>
                    <SelectItem value="home">Home</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Rate Type</Label>
                <Select value={newRate.rate_type} onValueChange={(value) => setNewRate({...newRate, rate_type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixed">Fixed</SelectItem>
                    <SelectItem value="variable">Variable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Term</Label>
                <Select value={newRate.term} onValueChange={(value) => setNewRate({...newRate, term: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-yr">1 Year</SelectItem>
                    <SelectItem value="2-yr">2 Year</SelectItem>
                    <SelectItem value="3-yr">3 Year</SelectItem>
                    <SelectItem value="4-yr">4 Year</SelectItem>
                    <SelectItem value="5-yr">5 Year</SelectItem>
                    <SelectItem value="7-yr">7 Year</SelectItem>
                    <SelectItem value="10-yr">10 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Base Rate (decimal)</Label>
                <Input
                  type="number"
                  step="0.0001"
                  value={newRate.base_rate}
                  onChange={(e) => setNewRate({...newRate, base_rate: parseFloat(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Prime Discount (optional)</Label>
                <Input
                  value={newRate.prime_discount}
                  onChange={(e) => setNewRate({...newRate, prime_discount: e.target.value})}
                  placeholder="e.g., Prime - 0.80%"
                />
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
                <TableHead>Lender</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Rate Type</TableHead>
                <TableHead>Term</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Prime Discount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rates.map((rate) => (
                <TableRow key={rate.id}>
                  <TableCell>
                    {editingId === rate.id ? (
                      <Input
                        value={editingRate?.lender_name || ''}
                        onChange={(e) => setEditingRate(prev => prev ? {...prev, lender_name: e.target.value} : null)}
                      />
                    ) : (
                      rate.lender_name
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{rate.lender_type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={rate.rate_type === 'fixed' ? 'default' : 'secondary'}>
                      {rate.rate_type}
                    </Badge>
                  </TableCell>
                  <TableCell>{rate.term}</TableCell>
                  <TableCell>
                    {editingId === rate.id ? (
                      <Input
                        type="number"
                        step="0.0001"
                        value={editingRate?.base_rate || 0}
                        onChange={(e) => setEditingRate(prev => prev ? {...prev, base_rate: parseFloat(e.target.value) || 0} : null)}
                      />
                    ) : (
                      `${(rate.base_rate * 100).toFixed(2)}%`
                    )}
                  </TableCell>
                  <TableCell>{rate.prime_discount || '-'}</TableCell>
                  <TableCell>
                    <Badge variant={rate.is_active ? 'default' : 'destructive'}>
                      {rate.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {editingId === rate.id ? (
                        <>
                          <Button size="sm" variant="outline" onClick={handleSave}>
                            <Save className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => {setEditingId(null); setEditingRate(null);}}>
                            <X className="h-3 w-3" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm" variant="outline" onClick={() => handleEdit(rate)}>
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDelete(rate.id)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </>
                      )}
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
