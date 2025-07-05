
import { AdminRateManager } from "./AdminRateManager";
import { AdminUserManager } from "./AdminUserManager";
import { AdminGICRateManager } from "./AdminGICRateManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Users, TrendingUp, ArrowLeft, PiggyBank } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-6 w-6" />
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        <Button 
          variant="outline" 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Admin Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Manage mortgage rates, GIC rates, and user permissions across the entire site. All rate changes will automatically update across all calculators and rate displays.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="mortgage-rates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mortgage-rates" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Mortgage Rates
          </TabsTrigger>
          <TabsTrigger value="gic-rates" className="flex items-center gap-2">
            <PiggyBank className="h-4 w-4" />
            GIC Rates
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            User Management
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mortgage-rates" className="space-y-6">
          <AdminRateManager />
        </TabsContent>

        <TabsContent value="gic-rates" className="space-y-6">
          <AdminGICRateManager />
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <AdminUserManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}
