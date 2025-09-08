
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAdmin } from '@/hooks/useAdmin';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { DollarSign, TrendingUp, Target, Shield, Plus, CreditCard, PiggyBank, TrendingDown, Settings } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DashboardStats } from '@/components/DashboardStats';
import { AccountsOverview } from '@/components/AccountsOverview';
import { RecentTransactions } from '@/components/RecentTransactions';
import { QuickActions } from '@/components/QuickActions';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    stats: null,
    accounts: [],
    transactions: []
  });

  useEffect(() => {
    if (user && !adminLoading) {
      fetchDashboardData();
    }
  }, [user, adminLoading]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch or create dashboard stats
      let { data: stats, error: statsError } = await supabase
        .from('user_dashboard_stats')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (statsError && statsError.code === 'PGRST116') {
        // No stats found, create default ones
        const { data: newStats, error: createError } = await supabase
          .from('user_dashboard_stats')
          .insert({ user_id: user.id })
          .select()
          .single();
        
        if (createError) throw createError;
        stats = newStats;
      } else if (statsError) {
        throw statsError;
      }

      // Fetch accounts
      const { data: accounts, error: accountsError } = await supabase
        .from('user_accounts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (accountsError) throw accountsError;

      // Fetch recent transactions
      const { data: transactions, error: transactionsError } = await supabase
        .from('user_transactions')
        .select(`
          *,
          user_accounts (account_name, account_type)
        `)
        .eq('user_id', user.id)
        .order('transaction_date', { ascending: false })
        .limit(10);

      if (transactionsError) throw transactionsError;

      setDashboardData({
        stats,
        accounts: accounts || [],
        transactions: transactions || []
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading || adminLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user?.user_metadata?.full_name || user?.email}
              </h1>
              {isAdmin && (
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  Admin
                </div>
              )}
            </div>
            {isAdmin && (
              <Button onClick={() => navigate('/admin')} className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Admin Dashboard
              </Button>
            )}
          </div>
          <p className="text-gray-600 mt-2">Here's your financial overview</p>
        </div>

        <div className="grid gap-6">
          {/* Regular Dashboard Stats */}
          <DashboardStats stats={dashboardData.stats} onRefresh={fetchDashboardData} />
          
          {/* Quick Actions */}
          <QuickActions onRefresh={fetchDashboardData} />
          
          {/* Accounts and Transactions */}
          <div className="grid md:grid-cols-2 gap-6">
            <AccountsOverview accounts={dashboardData.accounts} onRefresh={fetchDashboardData} />
            <RecentTransactions transactions={dashboardData.transactions} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
