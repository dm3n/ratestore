
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon } from 'lucide-react';

interface RecentTransactionsProps {
  transactions: any[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Math.abs(amount) || 0);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'income':
        return <ArrowUpIcon className="h-4 w-4 text-green-600" />;
      case 'expense':
        return <ArrowDownIcon className="h-4 w-4 text-red-600" />;
      case 'transfer':
        return <ArrowRightIcon className="h-4 w-4 text-blue-600" />;
      default:
        return <ArrowRightIcon className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'income':
        return 'text-green-600';
      case 'expense':
        return 'text-red-600';
      case 'transfer':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest financial activity</CardDescription>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <div className="text-center py-8">
            <ArrowRightIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No transactions yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {transactions.slice(0, 8).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getTransactionIcon(transaction.transaction_type)}
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{formatDate(transaction.transaction_date)}</span>
                      {transaction.user_accounts && (
                        <span>• {transaction.user_accounts.account_name}</span>
                      )}
                      {transaction.category && (
                        <Badge variant="outline" className="text-xs">
                          {transaction.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`font-semibold ${getTransactionColor(transaction.transaction_type)}`}>
                  {transaction.transaction_type === 'expense' ? '-' : '+'}
                  {formatCurrency(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
