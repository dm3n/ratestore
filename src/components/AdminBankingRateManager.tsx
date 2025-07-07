
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Trash2, Plus, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BankingRate {
  id: string;
  institution: string;
  account_name: string;
  account_type: string;
  account_category: string | null;
  interest_rate: number;
  monthly_fee: number;
  transaction_limit: number | null;
  minimum_balance: number;
  features: string[];
  special_offers: string | null;
  fee_waiver_conditions: string | null;
  province: string;
  is_featured: boolean;
  is_active: boolean;
}

export function AdminBankingRateManager() {
  const [rates, setRates] = useState<BankingRate[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterType, setFilterType] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const { toast } = useToast();

  const [newRate, setNewRate] = useState({
    institution: '',
    account_name: '',
    account_type: 'chequing',
    account_category: 'personal',
    interest_rate: 0,
    monthly_fee: 0,
    transaction_limit: null as number | null,
    minimum_balance: 0,
    features: [] as string[],
    special_offers: '',
    fee_waiver_conditions: '',
    province: 'All',
    is_featured: false,
    is_active: true
  });

  const fetchRates = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('banking_rates')
        .select('*')
        .order('institution', { ascending: true });

      if (error) throw error;
      setRates(data || []);
    } catch (error) {
      console.error('Error fetching rates:', error);
      toast({
        title: "Error",
        description: "Failed to fetch banking rates",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const handleSave = async (rate: BankingRate) => {
    try {
      const { error } = await supabase
        .from('banking_rates')
        .update({
          institution: rate.institution,
          account_name: rate.account_name,
          account_type: rate.account_type,
          account_category: rate.account_category,
          interest_rate: rate.interest_rate,
          monthly_fee: rate.monthly_fee,
          transaction_limit: rate.transaction_limit,
          minimum_balance: rate.minimum_balance,
          features: rate.features,
          special_offers: rate.special_offers || null,
          fee_waiver_conditions: rate.fee_waiver_conditions || null,
          province: rate.province,
          is_featured: rate.is_featured,
          is_active: rate.is_active,
          updated_at: new Date().toISOString()
        })
        .eq('id', rate.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Banking rate updated successfully"
      });

      setEditingId(null);
      fetchRates();
    } catch (error) {
      console.error('Error updating rate:', error);
      toast({
        title: "Error",
        description: "Failed to update banking rate",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this banking rate?')) return;

    try {
      const { error } = await supabase
        .from('banking_rates')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Banking rate deleted successfully"
      });

      fetchRates();
    } catch (error) {
      console.error('Error deleting rate:', error);
      toast({
        title: "Error",
        description: "Failed to delete banking rate",
        variant: "destructive"
      });
    }
  };

  const handleAddRate = async () => {
    try {
      const { error } = await supabase
        .from('banking_rates')
        .insert([{
          ...newRate,
          special_offers: newRate.special_offers || null,
          fee_waiver_conditions: newRate.fee_waiver_conditions || null
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Banking rate added successfully"
      });

      setShowAddForm(false);
      setNewRate({
        institution: '',
        account_name: '',
        account_type: 'chequing',
        account_category: 'personal',
        interest_rate: 0,
        monthly_fee: 0,
        transaction_limit: null,
        minimum_balance: 0,
        features: [],
        special_offers: '',
        fee_waiver_conditions: '',
        province: 'All',
        is_featured: false,
        is_active: true
      });
      fetchRates();
    } catch (error) {
      console.error('Error adding rate:', error);
      toast({
        title: "Error",
        description: "Failed to add banking rate",
        variant: "destructive"
      });
    }
  };

  const filteredRates = rates.filter(rate => {
    if (filterType !== "all" && rate.account_type !== filterType) return false;
    if (filterCategory !== "all" && rate.account_category !== filterCategory) return false;
    return true;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Banking Rates Manager</CardTitle>
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Rate
          </Button>
        </div>
        
        {/* Filters */}
        <div className="flex gap-4 mt-4">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="chequing">Chequing</SelectItem>
              <SelectItem value="savings">Savings</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
              <SelectItem value="youth">Youth</SelectItem>
              <SelectItem value="newcomer">Newcomer</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        {showAddForm && (
          <Card className="mb-6 p-4">
            <h3 className="text-lg font-semibold mb-4">Add New Banking Rate</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Label>Institution</Label>
                <Input
                  value={newRate.institution}
                  onChange={(e) => setNewRate({...newRate, institution: e.target.value})}
                />
              </div>
              <div>
                <Label>Account Name</Label>
                <Input
                  value={newRate.account_name}
                  onChange={(e) => setNewRate({...newRate, account_name: e.target.value})}
                />
              </div>
              <div>
                <Label>Account Type</Label>
                <Select value={newRate.account_type} onValueChange={(value) => setNewRate({...newRate, account_type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chequing">Chequing</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Category</Label>
                <Select value={newRate.account_category} onValueChange={(value) => setNewRate({...newRate, account_category: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="youth">Youth</SelectItem>
                    <SelectItem value="newcomer">Newcomer</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Interest Rate (%)</Label>
                <Input
                  type="number"
                  step="0.001"
                  value={newRate.interest_rate * 100}
                  onChange={(e) => setNewRate({...newRate, interest_rate: parseFloat(e.target.value) / 100 || 0})}
                />
              </div>
              <div>
                <Label>Monthly Fee ($)</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={newRate.monthly_fee}
                  onChange={(e) => setNewRate({...newRate, monthly_fee: parseFloat(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Transaction Limit</Label>
                <Input
                  type="number"
                  value={newRate.transaction_limit || ''}
                  onChange={(e) => setNewRate({...newRate, transaction_limit: e.target.value ? parseInt(e.target.value) : null})}
                  placeholder="Leave empty for unlimited"
                />
              </div>
              <div>
                <Label>Minimum Balance ($)</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={newRate.minimum_balance}
                  onChange={(e) => setNewRate({...newRate, minimum_balance: parseFloat(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Province</Label>
                <Select value={newRate.province} onValueChange={(value) => setNewRate({...newRate, province: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Canada</SelectItem>
                    <SelectItem value="BC">British Columbia</SelectItem>
                    <SelectItem value="AB">Alberta</SelectItem>
                    <SelectItem value="SK">Saskatchewan</SelectItem>
                    <SelectItem value="MB">Manitoba</SelectItem>
                    <SelectItem value="ON">Ontario</SelectItem>
                    <SelectItem value="QC">Quebec</SelectItem>
                    <SelectItem value="NB">New Brunswick</SelectItem>
                    <SelectItem value="NS">Nova Scotia</SelectItem>
                    <SelectItem value="PE">Prince Edward Island</SelectItem>
                    <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div>
                <Label>Features (comma-separated)</Label>
                <Input
                  value={newRate.features.join(', ')}
                  onChange={(e) => setNewRate({...newRate, features: e.target.value.split(',').map(f => f.trim()).filter(f => f)})}
                  placeholder="e.g., Online Banking, Mobile App, Free Interac e-Transfer"
                />
              </div>
              <div>
                <Label>Special Offers</Label>
                <Textarea
                  value={newRate.special_offers}
                  onChange={(e) => setNewRate({...newRate, special_offers: e.target.value})}
                  placeholder="Any promotional offers or bonuses"
                />
              </div>
              <div>
                <Label>Fee Waiver Conditions</Label>
                <Textarea
                  value={newRate.fee_waiver_conditions}
                  onChange={(e) => setNewRate({...newRate, fee_waiver_conditions: e.target.value})}
                  placeholder="Conditions to waive monthly fee"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newRate.is_featured}
                  onCheckedChange={(checked) => setNewRate({...newRate, is_featured: checked})}
                />
                <Label>Featured</Label>
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
                <TableHead>Account Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Interest Rate</TableHead>
                <TableHead>Monthly Fee</TableHead>
                <TableHead>Transaction Limit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRates.map((rate) => (
                <TableRow key={rate.id}>
                  <TableCell className="font-medium">{rate.institution}</TableCell>
                  <TableCell>{rate.account_name}</TableCell>
                  <TableCell>
                    <Badge variant={rate.account_type === 'chequing' ? 'default' : 'secondary'}>
                      {rate.account_type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{rate.account_category}</Badge>
                  </TableCell>
                  <TableCell>{(rate.interest_rate * 100).toFixed(3)}%</TableCell>
                  <TableCell>${rate.monthly_fee.toFixed(2)}</TableCell>
                  <TableCell>{rate.transaction_limit ? rate.transaction_limit : 'Unlimited'}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant={rate.is_active ? 'default' : 'destructive'}>
                        {rate.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                      {rate.is_featured && (
                        <Badge variant="secondary">Featured</Badge>
                      )}
                    </div>
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
