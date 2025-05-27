
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Target, Shield, Edit } from 'lucide-react';
import { useState } from 'react';
import { EditStatsDialog } from './EditStatsDialog';

interface DashboardStatsProps {
  stats: any;
  onRefresh: () => void;
}

export function DashboardStats({ stats, onRefresh }: DashboardStatsProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount || 0);
  };

  const statsCards = [
    {
      title: 'Total Savings',
      value: formatCurrency(stats?.total_savings || 0),
      description: 'Your total savings across all accounts',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Monthly Budget',
      value: formatCurrency(stats?.monthly_budget || 0),
      description: 'Your planned monthly budget',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Savings Goal',
      value: formatCurrency(stats?.savings_goal || 0),
      description: 'Your target savings amount',
      icon: Target,
      color: 'text-purple-600'
    },
    {
      title: 'Emergency Fund',
      value: formatCurrency(stats?.emergency_fund || 0),
      description: 'Your emergency fund balance',
      icon: Shield,
      color: 'text-orange-600'
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Manage your financial goals and budgets</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => setEditDialogOpen(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Goals
            </Button>
          </div>
        </CardHeader>
      </Card>

      <EditStatsDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        stats={stats}
        onRefresh={onRefresh}
      />
    </>
  );
}
