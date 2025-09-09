
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName?: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
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
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          full_name: fullName || email,
        },
      },
    });
    return { data, error };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const signOut = async () => {
    try {
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

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
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
