
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface EditStatsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stats: any;
  onRefresh: () => void;
}

export function EditStatsDialog({ open, onOpenChange, stats, onRefresh }: EditStatsDialogProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    total_savings: stats?.total_savings || 0,
    monthly_budget: stats?.monthly_budget || 0,
    savings_goal: stats?.savings_goal || 0,
    emergency_fund: stats?.emergency_fund || 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: 'Error',
        description: 'You must be logged in to update financial goals',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {

      // Use upsert to either update existing record or create new one
      const { data, error } = await supabase
        .from('user_dashboard_stats')
        .upsert({
          user_id: user.id,
          total_savings: Number(formData.total_savings),
          monthly_budget: Number(formData.monthly_budget),
          savings_goal: Number(formData.savings_goal),
          emergency_fund: Number(formData.emergency_fund),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id'
        })
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Successfully updated dashboard stats:', data);

      toast({
        title: 'Success',
        description: 'Financial goals updated successfully',
      });
      
      onRefresh();
      onOpenChange(false);
    } catch (error: any) {
      console.error('Error updating stats:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update financial goals',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Financial Goals</DialogTitle>
          <DialogDescription>
            Update your financial targets and budget information.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="total_savings">Total Savings ($)</Label>
            <Input
              id="total_savings"
              type="number"
              step="0.01"
              min="0"
              value={formData.total_savings}
              onChange={(e) => handleInputChange('total_savings', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="monthly_budget">Monthly Budget ($)</Label>
            <Input
              id="monthly_budget"
              type="number"
              step="0.01"
              min="0"
              value={formData.monthly_budget}
              onChange={(e) => handleInputChange('monthly_budget', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="savings_goal">Savings Goal ($)</Label>
            <Input
              id="savings_goal"
              type="number"
              step="0.01"
              min="0"
              value={formData.savings_goal}
              onChange={(e) => handleInputChange('savings_goal', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="emergency_fund">Emergency Fund ($)</Label>
            <Input
              id="emergency_fund"
              type="number"
              step="0.01"
              min="0"
              value={formData.emergency_fund}
              onChange={(e) => handleInputChange('emergency_fund', e.target.value)}
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
