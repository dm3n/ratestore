
import { AdminRateManager } from "./AdminRateManager";
import { AdminUserManager } from "./AdminUserManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, TrendingUp } from "lucide-react";

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Admin Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Manage mortgage rates across the entire site and user permissions. All rate changes will automatically update across all calculators and rate displays.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="rates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rates" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Rate Management
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            User Management
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rates" className="space-y-6">
          <AdminRateManager />
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <AdminUserManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}
