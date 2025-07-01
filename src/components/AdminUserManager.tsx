
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { UserPlus, Shield, ShieldOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserWithRole {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  role?: 'admin' | 'user';
}

export function AdminUserManager() {
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchUsersWithRoles = async () => {
    setIsLoading(true);
    try {
      // First, get all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, email, full_name, created_at')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Then, get all admin roles
      const { data: adminRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id')
        .eq('role', 'admin');

      if (rolesError) throw rolesError;

      const adminUserIds = new Set(adminRoles?.map(role => role.user_id) || []);

      const usersWithRoles = profiles?.map(profile => ({
        ...profile,
        role: adminUserIds.has(profile.id) ? 'admin' as const : 'user' as const
      })) || [];

      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersWithRoles();
  }, []);

  const makeUserAdmin = async (email: string) => {
    try {
      const { error } = await supabase.rpc('make_user_admin', {
        user_email: email
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: `${email} has been made an admin`
      });

      fetchUsersWithRoles();
    } catch (error) {
      console.error('Error making user admin:', error);
      toast({
        title: "Error",
        description: "Failed to make user admin",
        variant: "destructive"
      });
    }
  };

  const removeAdminRole = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', 'admin');

      if (error) throw error;

      toast({
        title: "Success",
        description: "Admin role removed successfully"
      });

      fetchUsersWithRoles();
    } catch (error) {
      console.error('Error removing admin role:', error);
      toast({
        title: "Error",
        description: "Failed to remove admin role",
        variant: "destructive"
      });
    }
  };

  const handleAddAdmin = async () => {
    if (!newAdminEmail) return;
    
    await makeUserAdmin(newAdminEmail);
    setNewAdminEmail('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Add New Admin</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="adminEmail">Email Address</Label>
              <Input
                id="adminEmail"
                type="email"
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>
            <div className="flex items-end">
              <Button onClick={handleAddAdmin} disabled={!newAdminEmail}>
                <UserPlus className="h-4 w-4 mr-2" />
                Make Admin
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.full_name || 'No name'}</div>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                      {user.role === 'admin' ? 'Admin' : 'User'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(user.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {user.role === 'admin' ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeAdminRole(user.id)}
                      >
                        <ShieldOff className="h-3 w-3 mr-1" />
                        Remove Admin
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => makeUserAdmin(user.email)}
                      >
                        <Shield className="h-3 w-3 mr-1" />
                        Make Admin
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
