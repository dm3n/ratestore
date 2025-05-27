
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, CreditCard, PiggyBank, TrendingUp, Building } from 'lucide-react';
import { AddAccountDialog } from './AddAccountDialog';

interface AccountsOverviewProps {
  accounts: any[];
  onRefresh: () => void;
}

export function AccountsOverview({ accounts, onRefresh }: AccountsOverviewProps) {
  const [addAccountOpen, setAddAccountOpen] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount || 0);
  };

  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'savings':
        return PiggyBank;
      case 'checking':
        return CreditCard;
      case 'investment':
        return TrendingUp;
      case 'credit_card':
        return CreditCard;
      case 'loan':
        return Building;
      default:
        return CreditCard;
    }
  };

  const getAccountTypeColor = (type: string) => {
    switch (type) {
      case 'savings':
        return 'bg-green-100 text-green-800';
      case 'checking':
        return 'bg-blue-100 text-blue-800';
      case 'investment':
        return 'bg-purple-100 text-purple-800';
      case 'credit_card':
        return 'bg-red-100 text-red-800';
      case 'loan':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Accounts</CardTitle>
              <CardDescription>Your financial accounts overview</CardDescription>
            </div>
            <Button size="sm" onClick={() => setAddAccountOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Account
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {accounts.length === 0 ? (
            <div className="text-center py-8">
              <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No accounts added yet</p>
              <Button onClick={() => setAddAccountOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Account
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {accounts.map((account) => {
                const Icon = getAccountIcon(account.account_type);
                return (
                  <div key={account.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 text-gray-600" />
                      <div>
                        <p className="font-medium">{account.account_name}</p>
                        <div className="flex items-center space-x-2">
                          <Badge className={getAccountTypeColor(account.account_type)}>
                            {account.account_type.replace('_', ' ')}
                          </Badge>
                          {account.institution && (
                            <span className="text-sm text-gray-500">{account.institution}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatCurrency(account.balance)}</p>
                      {account.interest_rate && (
                        <p className="text-sm text-gray-500">{account.interest_rate}% APY</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <AddAccountDialog
        open={addAccountOpen}
        onOpenChange={setAddAccountOpen}
        onRefresh={onRefresh}
      />
    </>
  );
}
