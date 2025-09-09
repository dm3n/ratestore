import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Check, X, Loader2 } from 'lucide-react';

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [errorMessage, setErrorMessage] = useState('');
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = searchParams.get('token');
    const type = searchParams.get('type');
    
    if (token && type === 'signup') {
      verifyEmailToken(token);
    } else {
      // No token found, show manual verification option
      setLoading(false);
      setVerificationStatus('error');
      setErrorMessage('Invalid verification link');
    }
  }, [searchParams]);

  const verifyEmailToken = async (token: string) => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        token_hash: token,
        type: 'signup'
      });

      if (error) {
        throw error;
      }

      if (data?.user) {
        setVerificationStatus('success');
        toast({
          title: 'Email Verified!',
          description: 'Your account has been successfully verified.',
        });
        
        // Redirect to dashboard after a brief delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error: any) {
      console.error('Email verification error:', error);
      setVerificationStatus('error');
      setErrorMessage(error.message || 'Failed to verify email');
    } finally {
      setLoading(false);
    }
  };

  const resendVerificationEmail = async () => {
    setResending(true);
    try {
      const email = searchParams.get('email') || '';
      if (!email) {
        throw new Error('Email not found. Please try signing up again.');
      }

      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/verify-email`,
        }
      });

      if (error) throw error;

      toast({
        title: 'Verification Email Sent',
        description: 'Please check your email for the verification link.',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to resend verification email',
        variant: 'destructive',
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            {loading && <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />}
            {verificationStatus === 'success' && <Check className="h-8 w-8 text-green-600" />}
            {verificationStatus === 'error' && <X className="h-8 w-8 text-red-600" />}
            {verificationStatus === 'pending' && !loading && <Mail className="h-8 w-8 text-blue-600" />}
          </div>
          
          <CardTitle className="text-2xl font-bold">
            {loading && 'Verifying Your Email...'}
            {verificationStatus === 'success' && 'Email Verified!'}
            {verificationStatus === 'error' && 'Verification Failed'}
            {verificationStatus === 'pending' && !loading && 'Check Your Email'}
          </CardTitle>
          
          <CardDescription>
            {loading && 'Please wait while we verify your email address...'}
            {verificationStatus === 'success' && 'Your account has been successfully verified. Redirecting to dashboard...'}
            {verificationStatus === 'error' && errorMessage}
            {verificationStatus === 'pending' && !loading && 'We\'ve sent a verification link to your email address'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {verificationStatus === 'success' && (
            <div className="text-center">
              <Button 
                onClick={() => navigate('/dashboard')}
                className="w-full"
              >
                Go to Dashboard
              </Button>
            </div>
          )}
          
          {verificationStatus === 'error' && (
            <div className="space-y-3">
              <Button 
                onClick={resendVerificationEmail}
                disabled={resending}
                className="w-full"
                variant="outline"
              >
                {resending ? 'Sending...' : 'Resend Verification Email'}
              </Button>
              
              <Button 
                onClick={() => navigate('/auth')}
                variant="ghost"
                className="w-full"
              >
                Back to Sign In
              </Button>
            </div>
          )}
          
          {verificationStatus === 'pending' && !loading && (
            <div className="space-y-3 text-center">
              <p className="text-sm text-muted-foreground">
                Didn't receive the email? Check your spam folder or click below to resend.
              </p>
              
              <Button 
                onClick={resendVerificationEmail}
                disabled={resending}
                variant="outline"
                className="w-full"
              >
                {resending ? 'Sending...' : 'Resend Verification Email'}
              </Button>
              
              <Button 
                onClick={() => navigate('/auth')}
                variant="ghost"
                className="w-full"
              >
                Back to Sign In
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;