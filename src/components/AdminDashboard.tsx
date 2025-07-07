
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AdminUserManager } from './AdminUserManager';
import { AdminRateManager } from './AdminRateManager';
import { AdminGICRateManager } from './AdminGICRateManager';
import { AdminBlogManager } from './AdminBlogManager';
import { AdminBankingRateManager } from './AdminBankingRateManager';
import { Users, TrendingUp, Database, FileText, Building2 } from 'lucide-react';

export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your application settings and content</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="rates">Mortgage Rates</TabsTrigger>
          <TabsTrigger value="banking-rates">Banking Rates</TabsTrigger>
          <TabsTrigger value="gic-rates">GIC Rates</TabsTrigger>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Rates</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+2 new this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Banking Products</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85</div>
                <p className="text-xs text-muted-foreground">Chequing & Savings</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+3 published this month</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="space-y-2">
                  <div className="text-sm">New user registration: john.doe@example.com</div>
                  <div className="text-sm">Rate update: BMO 5-year fixed rate changed to 5.24%</div>
                  <div className="text-sm">New blog post published: "Market Analysis Q1 2024"</div>
                  <div className="text-sm">Banking rate updated: RBC Day to Day Banking fee increased</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm cursor-pointer hover:underline">Update mortgage rates</div>
                  <div className="text-sm cursor-pointer hover:underline">Add banking products</div>
                  <div className="text-sm cursor-pointer hover:underline">Create new blog post</div>
                  <div className="text-sm cursor-pointer hover:underline">Review user feedback</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <AdminUserManager />
        </TabsContent>

        <TabsContent value="rates">
          <AdminRateManager />
        </TabsContent>

        <TabsContent value="banking-rates">
          <AdminBankingRateManager />
        </TabsContent>
        
        <TabsContent value="gic-rates">
          <AdminGICRateManager />
        </TabsContent>

        <TabsContent value="blog">
          <AdminBlogManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};
