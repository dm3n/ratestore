
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AddAccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRefresh: () => void;
}

export function AddAccountDialog({ open, onOpenChange, onRefresh }: AddAccountDialogProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    account_name: '',
    account_type: '',
    balance: 0,
    interest_rate: 0,
    institution: '',
  });

  const accountTypes = [
    { value: 'savings', label: 'Savings Account' },
    { value: 'checking', label: 'Checking Account' },
    { value: 'investment', label: 'Investment Account' },
    { value: 'credit_card', label: 'Credit Card' },
    { value: 'loan', label: 'Loan' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !formData.account_name || !formData.account_type) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('user_accounts')
        .insert({
          user_id: user.id,
          ...formData,
        });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Account added successfully',
      });
      
      setFormData({
        account_name: '',
        account_type: '',
        balance: 0,
        interest_rate: 0,
        institution: '',
      });
      
      onRefresh();
      onOpenChange(false);
    } catch (error) {
      console.error('Error adding account:', error);
      toast({
        title: 'Error',
        description: 'Failed to add account',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Account</DialogTitle>
          <DialogDescription>
            Add a new financial account to track your money.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account_name">Account Name</Label>
            <Input
              id="account_name"
              placeholder="e.g., My Savings Account"
              value={formData.account_name}
              onChange={(e) => setFormData(prev => ({ ...prev, account_name: e.target.value }))}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="account_type">Account Type</Label>
            <Select value={formData.account_type} onValueChange={(value) => setFormData(prev => ({ ...prev, account_type: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                {accountTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="balance">Current Balance ($)</Label>
            <Input
              id="balance"
              type="number"
              step="0.01"
              value={formData.balance}
              onChange={(e) => setFormData(prev => ({ ...prev, balance: parseFloat(e.target.value) || 0 }))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interest_rate">Interest Rate (% APY)</Label>
            <Input
              id="interest_rate"
              type="number"
              step="0.01"
              value={formData.interest_rate}
              onChange={(e) => setFormData(prev => ({ ...prev, interest_rate: parseFloat(e.target.value) || 0 }))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="institution">Institution (Optional)</Label>
            <Input
              id="institution"
              placeholder="e.g., Chase Bank"
              value={formData.institution}
              onChange={(e) => setFormData(prev => ({ ...prev, institution: e.target.value }))}
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || !formData.account_name || !formData.account_type}>
              {loading ? 'Adding...' : 'Add Account'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
