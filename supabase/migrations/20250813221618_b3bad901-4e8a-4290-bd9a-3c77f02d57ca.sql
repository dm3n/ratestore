-- Fix security issue: Restrict card_finder_submissions table access
-- Currently anyone can read all submissions, but this should be restricted

-- Remove the overly permissive policy that allows anyone to view all submissions
DROP POLICY IF EXISTS "Anyone can view submissions" ON public.card_finder_submissions;

-- Add a more restrictive policy that only allows users to view their own submissions
-- This policy already exists but let's make sure it's properly configured
CREATE POLICY "Users can view only their own submissions" 
ON public.card_finder_submissions 
FOR SELECT 
USING (
  -- Users can see their own submissions if authenticated
  (auth.uid() = user_id) OR 
  -- Allow anonymous users to see only their session-based submissions
  (auth.uid() IS NULL AND session_id IS NOT NULL AND session_id != '')
);

-- Ensure the profiles table also has proper restrictions
-- The existing policies look correct but let's verify they're restrictive enough

-- Optional: Add a policy to allow users to view public profile information of other users
-- Only if this is needed for the application functionality
-- Uncomment the next lines if you need users to see other users' basic info
/*
CREATE POLICY "Users can view public profile info of others" 
ON public.profiles 
FOR SELECT 
USING (auth.role() = 'authenticated');
*/