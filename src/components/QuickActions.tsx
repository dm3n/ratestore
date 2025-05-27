
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowUpDown, Calculator, Settings } from 'lucide-react';
import { AddTransactionDialog } from './AddTransactionDialog';
import { Link } from 'react-router-dom';

interface QuickActionsProps {
  onRefresh: () => void;
}

export function QuickActions({ onRefresh }: QuickActionsProps) {
  const [addTransactionOpen, setAddTransactionOpen] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-24 flex-col space-y-2"
              onClick={() => setAddTransactionOpen(true)}
            >
              <Plus className="h-6 w-6" />
              <span className="text-sm">Add Transaction</span>
            </Button>
            
            <Button variant="outline" className="h-24 flex-col space-y-2" asChild>
              <Link to="/tools/compound-interest">
                <Calculator className="h-6 w-6" />
                <span className="text-sm">Calculators</span>
              </Link>
            </Button>
            
            <Button variant="outline" className="h-24 flex-col space-y-2" asChild>
              <Link to="/profile">
                <Settings className="h-6 w-6" />
                <span className="text-sm">Profile</span>
              </Link>
            </Button>
            
            <Button variant="outline" className="h-24 flex-col space-y-2" asChild>
              <Link to="/savings-rates">
                <ArrowUpDown className="h-6 w-6" />
                <span className="text-sm">Rate Compare</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <AddTransactionDialog
        open={addTransactionOpen}
        onOpenChange={setAddTransactionOpen}
        onRefresh={onRefresh}
      />
    </>
  );
}
