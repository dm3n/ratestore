
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { securityAudit } from '@/lib/security-audit';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ data?: any; error?: AuthError | null; needsVerification?: boolean }>;
  signIn: (email: string, password: string) => Promise<{ data?: any; error?: AuthError | null }>;
  signOut: () => Promise<void>;
  resendConfirmation: (email: string) => Promise<{ error?: AuthError | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Create profile for new users (including Google OAuth) - deferred to avoid deadlocks
        if (event === 'SIGNED_IN' && session?.user) {
          setTimeout(async () => {
            const { data: existingProfile } = await supabase
              .from('profiles')
              .select('id')
              .eq('user_id', session.user.id)
              .single();
              
            if (!existingProfile) {
              await supabase
                .from('profiles')
                .insert({
                  user_id: session.user.id,
                  full_name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email,
                  email: session.user.email,
                });
            }
          }, 0);
        }
        
        setLoading(false);
      }
    );

    // Get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      // Create profile for existing sessions (on app load) - deferred to avoid issues
      if (session?.user) {
        setTimeout(async () => {
          const { data: existingProfile } = await supabase
            .from('profiles')
            .select('id')
            .eq('user_id', session.user.id)
            .single();
            
          if (!existingProfile) {
            await supabase
              .from('profiles')
              .insert({
                user_id: session.user.id,
                full_name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email,
                email: session.user.email,
              });
          }
        }, 0);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      // Basic input validation
      if (!email || !password) {
        const error = new Error('Email and password are required') as AuthError;
        error.name = 'ValidationError';
        return { data: null, error };
      }

      if (password.length < 8) {
        const error = new Error('Password must be at least 8 characters long') as AuthError;
        error.name = 'ValidationError';
        return { data: null, error };
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/verify-email`,
          data: {
            full_name: fullName || email,
          },
        },
      });

      if (error) {
        await securityAudit.logSecurityEvent({
          action: 'signup_failed',
          details: { email, error_message: error.message },
          severity: 'low'
        });
      } else {
        await securityAudit.logSecurityEvent({
          action: 'signup_success',
          details: { email },
          severity: 'low'
        });
      }
      
      // Handle the case where user already exists but is unverified
      if (data?.user && !data.session) {
        // User exists but needs email verification
        return { 
          data, 
          error: null,
          needsVerification: true 
        };
      }
      
      return { data, error };
    } catch (err: any) {
      await securityAudit.logSecurityEvent({
        action: 'signup_error',
        details: { email, error: err.message },
        severity: 'medium'
      });
      return { data: null, error: err };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Check rate limiting
      if (securityAudit.isRateLimited(email)) {
        const error = new Error('Too many failed attempts. Please try again in 15 minutes.') as AuthError;
        error.name = 'RateLimitError';
        return { data: null, error };
      }

      // Basic input validation
      if (!email || !password) {
        const error = new Error('Email and password are required') as AuthError;
        error.name = 'ValidationError';
        return { data: null, error };
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Record failed attempt for rate limiting
        const isLocked = securityAudit.recordFailedAttempt(email);
        
        await securityAudit.logSecurityEvent({
          action: 'login_failed',
          details: { 
            email, 
            error_message: error.message,
            rate_limited: isLocked 
          },
          severity: isLocked ? 'high' : 'medium'
        });
      } else {
        // Clear failed attempts on successful login
        securityAudit.clearFailedAttempts(email);
        
        await securityAudit.logSecurityEvent({
          user_id: data.user?.id,
          action: 'login_success',
          details: { email },
          severity: 'low'
        });
      }

      return { data, error };
    } catch (err: any) {
      await securityAudit.logSecurityEvent({
        action: 'login_error',
        details: { email, error: err.message },
        severity: 'high'
      });
      return { data: null, error: err };
    }
  };

  const signOut = async () => {
    const currentUser = user;
    try {
      // Log sign out event
      if (currentUser) {
        await securityAudit.logSecurityEvent({
          user_id: currentUser.id,
          action: 'logout',
          details: { email: currentUser.email },
          severity: 'low'
        });
      }

      // Try global sign out first, but don't hang forever
      const signOutPromise = supabase.auth.signOut();
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Sign out timeout')), 7000));
      await Promise.race([signOutPromise, timeout]);
    } catch (err) {
      // Fallback to local sign out to clear client session in case of network issues
      try {
        await supabase.auth.signOut({ scope: 'local' });
      } catch (_) {
        // ignore
      }
    } finally {
      // Ensure UI updates immediately
      setSession(null);
      setUser(null);
    }
  };

  const resendConfirmation = async (email: string) => {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email,
      options: {
        emailRedirectTo: `${window.location.origin}/verify-email`,
      }
    });
    
    return { error };
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resendConfirmation,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
