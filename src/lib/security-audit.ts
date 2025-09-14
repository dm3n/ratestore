import { supabase } from '@/integrations/supabase/client';

export interface SecurityEvent {
  user_id?: string;
  action: string;
  details: Record<string, any>;
  ip_address?: string;
  user_agent?: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class SecurityAuditLogger {
  private static instance: SecurityAuditLogger;
  private failedAttempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private readonly MAX_ATTEMPTS = 5;
  private readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

  static getInstance(): SecurityAuditLogger {
    if (!SecurityAuditLogger.instance) {
      SecurityAuditLogger.instance = new SecurityAuditLogger();
    }
    return SecurityAuditLogger.instance;
  }

  /**
   * Log security events to console and potentially external monitoring
   */
  async logSecurityEvent(event: Omit<SecurityEvent, 'timestamp'>) {
    const fullEvent: SecurityEvent = {
      ...event,
      timestamp: new Date().toISOString(),
      ip_address: await this.getClientIP(),
      user_agent: navigator.userAgent,
    };

    // Log to console for development
    if (fullEvent.severity === 'high' || fullEvent.severity === 'critical') {
      console.warn('🚨 Security Event:', fullEvent);
    } else {
      console.log('🔐 Security Event:', fullEvent);
    }

    // In production, you might want to send this to an external monitoring service
    // await this.sendToMonitoringService(fullEvent);
  }

  /**
   * Track failed authentication attempts for rate limiting
   */
  recordFailedAttempt(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.failedAttempts.get(identifier) || { count: 0, lastAttempt: 0 };

    // Reset counter if lockout period has passed
    if (now - attempts.lastAttempt > this.LOCKOUT_DURATION) {
      attempts.count = 0;
    }

    attempts.count++;
    attempts.lastAttempt = now;
    this.failedAttempts.set(identifier, attempts);

    // Log security event for multiple failed attempts
    if (attempts.count >= 3) {
      this.logSecurityEvent({
        action: 'multiple_failed_auth_attempts',
        details: { 
          identifier, 
          attempts: attempts.count,
          locked_out: attempts.count >= this.MAX_ATTEMPTS
        },
        severity: attempts.count >= this.MAX_ATTEMPTS ? 'high' : 'medium'
      });
    }

    return attempts.count >= this.MAX_ATTEMPTS;
  }

  /**
   * Check if an identifier is currently rate limited
   */
  isRateLimited(identifier: string): boolean {
    const attempts = this.failedAttempts.get(identifier);
    if (!attempts) return false;

    const now = Date.now();
    if (now - attempts.lastAttempt > this.LOCKOUT_DURATION) {
      this.failedAttempts.delete(identifier);
      return false;
    }

    return attempts.count >= this.MAX_ATTEMPTS;
  }

  /**
   * Clear failed attempts for successful authentication
   */
  clearFailedAttempts(identifier: string) {
    this.failedAttempts.delete(identifier);
  }

  /**
   * Log admin privilege changes
   */
  async logAdminAction(action: 'grant_admin' | 'revoke_admin', targetUserId: string, targetEmail: string) {
    const currentUser = (await supabase.auth.getUser()).data.user;
    
    await this.logSecurityEvent({
      user_id: currentUser?.id,
      action: `admin_privilege_${action}`,
      details: {
        target_user_id: targetUserId,
        target_email: targetEmail,
        performed_by: currentUser?.email
      },
      severity: 'high'
    });
  }

  /**
   * Log suspicious admin activities
   */
  async logSuspiciousActivity(activity: string, details: Record<string, any>) {
    const currentUser = (await supabase.auth.getUser()).data.user;
    
    await this.logSecurityEvent({
      user_id: currentUser?.id,
      action: 'suspicious_activity',
      details: {
        activity,
        ...details,
        user_email: currentUser?.email
      },
      severity: 'critical'
    });
  }

  private async getClientIP(): Promise<string> {
    try {
      // This is a simple way to get client IP, in production you might want to use a more reliable service
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip || 'unknown';
    } catch {
      return 'unknown';
    }
  }
}

export const securityAudit = SecurityAuditLogger.getInstance();