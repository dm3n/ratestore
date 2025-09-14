
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { UserPlus, Shield, ShieldOff, Search, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { securityAudit } from "@/lib/security-audit";

interface UserWithRole {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  role?: 'admin' | 'user';
}

export function AdminUserManager() {
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserWithRole[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
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
      setFilteredUsers(usersWithRoles);
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

  // Filter users based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => 
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.full_name && user.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const makeUserAdmin = async (email: string, userId: string) => {
    try {
      // Input validation
      if (!email || !userId) {
        throw new Error('Invalid user data');
      }

      // Verify user exists before granting admin
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('id, email')
        .eq('id', userId)
        .eq('email', email)
        .single();

      if (userError || !userData) {
        throw new Error('User not found or email mismatch');
      }

      const { error } = await supabase.rpc('make_user_admin', {
        target_user_id: userId,
        user_email: email
      });

      if (error) throw error;

      // Log the admin privilege grant
      await securityAudit.logAdminAction('grant_admin', userId, email);

      toast({
        title: "Success",
        description: `${email} has been made an admin`
      });

      fetchUsersWithRoles();
    } catch (error: any) {
      console.error('Error making user admin:', error);
      
      // Log failed admin privilege attempt
      await securityAudit.logSecurityEvent({
        action: 'admin_grant_failed',
        details: { 
          target_email: email, 
          target_user_id: userId,
          error_message: error.message 
        },
        severity: 'high'
      });

      toast({
        title: "Error",
        description: error.message || "Failed to make user admin",
        variant: "destructive"
      });
    }
  };

  const removeAdminRole = async (userId: string, email: string) => {
    try {
      // Input validation
      if (!email || !userId) {
        throw new Error('Invalid user data');
      }

      // Verify user exists and is actually an admin before removal
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('id, email')
        .eq('id', userId)
        .eq('email', email)
        .single();

      if (userError || !userData) {
        throw new Error('User not found or email mismatch');
      }

      // Check if user is actually an admin
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .single();

      if (roleError || !roleData) {
        throw new Error('User is not an admin');
      }

      const { error } = await supabase.rpc('remove_admin_role', {
        target_user_id: userId,
        user_email: email
      });

      if (error) throw error;

      // Log the admin privilege revocation
      await securityAudit.logAdminAction('revoke_admin', userId, email);

      toast({
        title: "Success",
        description: `Admin role removed from ${email}`
      });

      fetchUsersWithRoles();
    } catch (error: any) {
      console.error('Error removing admin role:', error);

      // Log failed admin privilege removal attempt
      await securityAudit.logSecurityEvent({
        action: 'admin_revoke_failed',
        details: { 
          target_email: email, 
          target_user_id: userId,
          error_message: error.message 
        },
        severity: 'high'
      });

      toast({
        title: "Error",
        description: error.message || "Failed to remove admin role",
        variant: "destructive"
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            User Management
            {isLoading && <RefreshCw className="h-4 w-4 animate-spin" />}
          </CardTitle>
          <Button variant="outline" onClick={fetchUsersWithRoles} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-4">
          <div>
            <Label htmlFor="userSearch" className="text-base font-semibold">Search Users</Label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="userSearch"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by email or name..."
                className="pl-10"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Find users to assign admin privileges
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              All Users ({filteredUsers.length})
            </h3>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                {filteredUsers.filter(u => u.role === 'admin').length} Admins
              </Badge>
              <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
                {filteredUsers.filter(u => u.role === 'user').length} Users
              </Badge>
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
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.full_name || 'No name'}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-mono text-sm">{user.email}</div>
                    </TableCell>
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
                          onClick={() => removeAdminRole(user.id, user.email)}
                          disabled={isLoading}
                        >
                          <ShieldOff className="h-3 w-3 mr-1" />
                          Remove Admin
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => makeUserAdmin(user.email, user.id)}
                          disabled={isLoading}
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

          {filteredUsers.length === 0 && !isLoading && (
            <div className="text-center py-8">
              <div className="text-muted-foreground">
                {searchQuery ? 'No users found matching your search.' : 'No users found.'}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
