
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { securityAudit } from '@/lib/security-audit';

export function useAdmin() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking admin status:', error);
          
          // Log suspicious admin check failures
          await securityAudit.logSecurityEvent({
            user_id: user.id,
            action: 'admin_check_failed',
            details: { 
              error_code: error.code,
              error_message: error.message,
              user_email: user.email 
            },
            severity: 'medium'
          });
        }

        const hasAdminRole = !!data;
        setIsAdmin(hasAdminRole);

        // Log admin access attempts for auditing
        if (hasAdminRole) {
          await securityAudit.logSecurityEvent({
            user_id: user.id,
            action: 'admin_access_verified',
            details: { user_email: user.email },
            severity: 'low'
          });
        }

      } catch (error: any) {
        console.error('Error checking admin status:', error);
        
        // Log unexpected errors during admin verification
        await securityAudit.logSecurityEvent({
          user_id: user.id,
          action: 'admin_check_error',
          details: { 
            error: error.message,
            user_email: user.email 
          },
          severity: 'high'
        });
        
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [user]);

  return { isAdmin, loading };
}
