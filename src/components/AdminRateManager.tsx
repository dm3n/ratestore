
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Trash2, Plus, Save, X, Building2 } from "lucide-react";
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
  province: string;
}

export function AdminRateManager() {
  const [rates, setRates] = useState<MortgageRate[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingRate, setEditingRate] = useState<MortgageRate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string>("all");
  const [selectedRateCategory, setSelectedRateCategory] = useState<string>("mortgage");
  const [activeTab, setActiveTab] = useState<string>("big5");
  const { toast } = useToast();

  const provinces = [
    { value: "all", label: "All Provinces" },
    { value: "BC", label: "British Columbia" },
    { value: "AB", label: "Alberta" },
    { value: "ON", label: "Ontario" },  
    { value: "QC", label: "Quebec" }
  ];

  const rateCategories = [
    { value: "mortgage", label: "Mortgage Rates" },
    { value: "heloc", label: "HELOC Rates" },
    { value: "renewal", label: "Renewal Rates" }
  ];

  // Big 5 Canadian banks
  const big5Banks = ['RBC', 'TD', 'Scotiabank', 'BMO', 'CIBC'];

  const [newRate, setNewRate] = useState({
    lender_name: '',
    lender_type: 'bank',
    rate_type: 'fixed',
    term: '5-yr',
    base_rate: 3.84,
    min_down_payment: 0.05,
    max_loan_to_value: 0.95,
    transaction_types: ['buying'],
    prime_discount: '',
    is_active: true,
    province: 'BC'
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
    setEditingRate({ 
      ...rate, 
      base_rate: rate.base_rate * 100 
    });
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
          base_rate: editingRate.base_rate / 100,
          min_down_payment: editingRate.min_down_payment,
          max_loan_to_value: editingRate.max_loan_to_value,
          transaction_types: editingRate.transaction_types,
          prime_discount: editingRate.prime_discount || null,
          is_active: editingRate.is_active,
          province: editingRate.province,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingRate.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Rate updated successfully - changes will reflect across all calculators"
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
    const provinceToAdd = selectedProvince === "all" ? "BC" : selectedProvince;
    
    // Set transaction types based on selected category
    let transactionTypes = ['buying'];
    if (selectedRateCategory === 'heloc') {
      transactionTypes = ['heloc'];
    } else if (selectedRateCategory === 'renewal') {
      transactionTypes = ['renewal'];
    }
    
    try {
      const { error } = await supabase
        .from('mortgage_rates')
        .insert([{
          lender_name: newRate.lender_name,
          lender_type: newRate.lender_type,
          rate_type: newRate.rate_type,
          term: newRate.term,
          base_rate: newRate.base_rate / 100,
          min_down_payment: newRate.min_down_payment,
          max_loan_to_value: newRate.max_loan_to_value,
          transaction_types: transactionTypes,
          prime_discount: newRate.prime_discount || null,
          is_active: newRate.is_active,
          province: provinceToAdd
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: `${selectedRateCategory.toUpperCase()} rate added successfully to ${provinceToAdd} - available across all calculators`
      });

      setShowAddForm(false);
      setNewRate({
        lender_name: '',
        lender_type: 'bank',
        rate_type: 'fixed',
        term: '5-yr',
        base_rate: 3.84,
        min_down_payment: 0.05,
        max_loan_to_value: 0.95,
        transaction_types: transactionTypes,
        prime_discount: '',
        is_active: true,
        province: provinceToAdd
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

  const getBig5BankRates = (province: string, category: string) => {
    let filteredRates = rates.filter(rate => 
      big5Banks.some(bank => 
        rate.lender_name.toLowerCase().includes(bank.toLowerCase()) ||
        (bank === 'RBC' && rate.lender_name.toLowerCase().includes('royal bank')) ||
        (bank === 'TD' && rate.lender_name.toLowerCase().includes('td canada trust')) ||
        (bank === 'BMO' && rate.lender_name.toLowerCase().includes('bank of montreal'))
      )
    );
    
    // Filter by province
    if (province !== "all") {
      filteredRates = filteredRates.filter(rate => rate.province === province);
    }
    
    // Filter by rate category
    if (category === "heloc") {
      filteredRates = filteredRates.filter(rate => 
        rate.transaction_types?.includes('heloc')
      );
    } else if (category === "renewal") {
      filteredRates = filteredRates.filter(rate => 
        rate.transaction_types?.includes('renewal')
      );
    } else if (category === "mortgage") {
      filteredRates = filteredRates.filter(rate => 
        rate.transaction_types?.includes('buying') || 
        rate.transaction_types?.includes('refinancing')
      );
    }
    
    return filteredRates;
  };

  const getFilteredRates = (province: string, category: string) => {
    let filteredRates = rates;
    
    // Filter by province
    if (province !== "all") {
      filteredRates = filteredRates.filter(rate => rate.province === province);
    }
    
    // Filter by rate category
    if (category === "heloc") {
      filteredRates = filteredRates.filter(rate => 
        rate.transaction_types?.includes('heloc')
      );
    } else if (category === "renewal") {
      filteredRates = filteredRates.filter(rate => 
        rate.transaction_types?.includes('renewal')
      );
    } else if (category === "mortgage") {
      filteredRates = filteredRates.filter(rate => 
        rate.transaction_types?.includes('buying') || 
        rate.transaction_types?.includes('refinancing')
      );
    }
    
    return filteredRates;
  };

  const getProvinceForNewRate = () => {
    return selectedProvince === "all" ? "BC" : selectedProvince;
  };

  const renderRatesTable = (filteredRates: MortgageRate[]) => (
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
            <TableHead>Transaction Types</TableHead>
            <TableHead>Province</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRates.map((rate) => (
            <TableRow key={rate.id}>
              <TableCell>
                {editingId === rate.id ? (
                  <Input
                    value={editingRate?.lender_name || ''}
                    onChange={(e) => setEditingRate(prev => prev ? {...prev, lender_name: e.target.value} : null)}
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    {big5Banks.some(bank => 
                      rate.lender_name.toLowerCase().includes(bank.toLowerCase()) ||
                      (bank === 'RBC' && rate.lender_name.toLowerCase().includes('royal bank')) ||
                      (bank === 'TD' && rate.lender_name.toLowerCase().includes('td canada trust')) ||
                      (bank === 'BMO' && rate.lender_name.toLowerCase().includes('bank of montreal'))
                    ) && <Building2 className="h-4 w-4 text-blue-600" />}
                    {rate.lender_name}
                  </div>
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
                    step="0.01"
                    min="1"
                    max="10"
                    value={editingRate?.base_rate || 0}
                    onChange={(e) => setEditingRate(prev => prev ? {...prev, base_rate: parseFloat(e.target.value) || 0} : null)}
                  />
                ) : (
                  `${(rate.base_rate * 100).toFixed(2)}%`
                )}
              </TableCell>
              <TableCell>{rate.prime_discount || '-'}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {rate.transaction_types?.map((type, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{rate.province || 'N/A'}</Badge>
              </TableCell>
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
  );

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Mortgage Rate Management</CardTitle>
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add {selectedRateCategory.toUpperCase()} Rate
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showAddForm && (
          <Card className="mb-6 p-4">
            <h3 className="text-lg font-semibold mb-4">
              Add New {selectedRateCategory.toUpperCase()} Rate to {getProvinceForNewRate()}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label>Lender Name</Label>
                <Input
                  value={newRate.lender_name}
                  onChange={(e) => setNewRate({...newRate, lender_name: e.target.value})}
                />
              </div>
              <div>
                <Label>Province</Label>
                <Select 
                  value={getProvinceForNewRate()} 
                  onValueChange={(value) => setNewRate({...newRate, province: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BC">British Columbia</SelectItem>
                    <SelectItem value="AB">Alberta</SelectItem>
                    <SelectItem value="ON">Ontario</SelectItem>
                    <SelectItem value="QC">Quebec</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label>Base Rate (%)</Label>
                <Input
                  type="number"
                  step="0.01"
                  min="1"
                  max="10"
                  value={newRate.base_rate}
                  onChange={(e) => setNewRate({...newRate, base_rate: parseFloat(e.target.value) || 0})}
                  placeholder="e.g., 3.84"
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

        <div className="mb-4">
          <Label>Rate Category</Label>
          <Select value={selectedRateCategory} onValueChange={setSelectedRateCategory}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {rateCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="big5" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Big 5 Banks
            </TabsTrigger>
            <TabsTrigger value="all">All Lenders</TabsTrigger>
          </TabsList>

          <TabsContent value="big5" className="space-y-4">
            <Tabs value={selectedProvince} onValueChange={setSelectedProvince} className="space-y-4">
              <TabsList className="grid w-full grid-cols-5">
                {provinces.map((province) => (
                  <TabsTrigger key={province.value} value={province.value}>
                    {province.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {provinces.map((province) => (
                <TabsContent key={province.value} value={province.value}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        Big 5 Banks - {province.label} {rateCategories.find(c => c.value === selectedRateCategory)?.label} ({getBig5BankRates(province.value, selectedRateCategory).length})
                      </CardTitle>
                      <CardDescription>
                        Manage rates for RBC, TD, Scotiabank, BMO, and CIBC in {province.label}. Changes update automatically across all calculators and the bank rates page.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {renderRatesTable(getBig5BankRates(province.value, selectedRateCategory))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <Tabs value={selectedProvince} onValueChange={setSelectedProvince} className="space-y-4">
              <TabsList className="grid w-full grid-cols-5">
                {provinces.map((province) => (
                  <TabsTrigger key={province.value} value={province.value}>
                    {province.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {provinces.map((province) => (
                <TabsContent key={province.value} value={province.value}>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {province.label} {rateCategories.find(c => c.value === selectedRateCategory)?.label} ({getFilteredRates(province.value, selectedRateCategory).length})
                      </CardTitle>
                      <CardDescription>
                        Manage {selectedRateCategory} rates for {province.label}. Changes update automatically across all calculators.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {renderRatesTable(getFilteredRates(province.value, selectedRateCategory))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
