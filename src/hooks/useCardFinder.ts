
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface UserPreferences {
  cardPurpose: string;
  dateOfBirth: {
    month: string;
    day: string;
    year: string;
  };
  address: string;
  annualIncomeRange: string;
  creditScoreRange: string;
  monthlySpending: {
    groceries: number;
    dining: number;
    gas: number;
    travel: number;
    general: number;
  };
  primarySpendingCategories: string[];
  travelFrequency: string;
  balanceTransferAmount?: number;
  preferredFeatures: string[];
  maxAnnualFee: number;
  currentCards: string[];
}

export interface CardRecommendation {
  id: string;
  name: string;
  issuer: string;
  card_type: string;
  annual_fee: number;
  welcome_bonus_value: number;
  welcome_bonus_requirement: number;
  cashback_rate_general: number;
  cashback_rate_grocery: number;
  cashback_rate_gas: number;
  cashback_rate_dining: number;
  cashback_rate_travel: number;
  features: string[];
  pros: string[];
  cons: string[];
  apply_url: string;
  match_score: number;
  match_reasons: string[];
  rank: number;
}

export const useCardFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CardRecommendation[]>([]);
  const { user } = useAuth();

  const generateSessionId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const calculateMatchScore = (card: any, preferences: UserPreferences): { score: number; reasons: string[] } => {
    let score = 0;
    const reasons: string[] = [];

    // Credit Score Compatibility (30% weight)
    const creditScoreMapping: { [key: string]: number } = {
      'Excellent (750+)': 4,
      'Good (650-749)': 3,
      'Fair (550-649)': 2,
      'Poor (300-549)': 1,
      "I don't know": 2.5
    };

    const cardCreditMapping: { [key: string]: number } = {
      'excellent': 4,
      'good': 3,
      'fair': 2,
      'poor': 1
    };

    const userCreditScore = creditScoreMapping[preferences.creditScoreRange] || 2.5;
    const cardRequiredScore = cardCreditMapping[card.credit_score_required] || 2;

    if (userCreditScore >= cardRequiredScore) {
      score += 30;
      reasons.push('Matches your credit score requirements');
    } else if (userCreditScore >= cardRequiredScore - 0.5) {
      score += 15;
      reasons.push('Close match for your credit score');
    }

    // Card Purpose Alignment (25% weight)
    const purposeMapping: { [key: string]: string[] } = {
      'Earn rewards': ['rewards', 'travel', 'cashback'],
      'Pay low interest': ['low_interest', 'balance_transfer'],
      'Build credit': ['secured', 'student', 'cashback'],
      'Transfer balance': ['balance_transfer', 'low_interest'],
      'Travel benefits': ['travel', 'rewards']
    };

    if (purposeMapping[preferences.cardPurpose]?.includes(card.card_type)) {
      score += 25;
      reasons.push(`Perfect for ${preferences.cardPurpose.toLowerCase()}`);
    }

    // Annual Fee Preference (15% weight)
    const annualFee = card.annual_fee || 0;
    if (annualFee <= preferences.maxAnnualFee) {
      score += 15;
      if (annualFee === 0) {
        reasons.push('No annual fee');
      } else {
        reasons.push(`Annual fee within your budget ($${annualFee})`);
      }
    } else {
      score -= 10;
    }

    // Spending Category Rewards (20% weight)
    let categoryScore = 0;
    const totalSpending = Object.values(preferences.monthlySpending).reduce((a, b) => a + b, 0);
    
    if (totalSpending > 0) {
      // Calculate weighted reward rates based on spending
      const groceryWeight = preferences.monthlySpending.groceries / totalSpending;
      const diningWeight = preferences.monthlySpending.dining / totalSpending;
      const gasWeight = preferences.monthlySpending.gas / totalSpending;
      const travelWeight = preferences.monthlySpending.travel / totalSpending;
      const generalWeight = preferences.monthlySpending.general / totalSpending;

      const weightedRewardRate = 
        ((card.cashback_rate_grocery || 0) * groceryWeight) +
        ((card.cashback_rate_dining || 0) * diningWeight) +
        ((card.cashback_rate_gas || 0) * gasWeight) +
        ((card.cashback_rate_travel || 0) * travelWeight) +
        ((card.cashback_rate_general || 0) * generalWeight);

      categoryScore = Math.min(weightedRewardRate * 4, 20); // Cap at 20 points
      
      if (weightedRewardRate > 2) {
        reasons.push('Excellent rewards for your spending categories');
      } else if (weightedRewardRate > 1.5) {
        reasons.push('Good rewards for your spending patterns');
      }
    }
    score += categoryScore;

    // Welcome Bonus Value (10% weight)
    const welcomeBonusValue = card.welcome_bonus_value || 0;
    if (welcomeBonusValue > 0) {
      const bonusScore = Math.min((welcomeBonusValue / 500) * 10, 10);
      score += bonusScore;
      reasons.push(`${welcomeBonusValue} welcome bonus`);
    }

    return { score: Math.round(score), reasons };
  };

  const findRecommendations = async (preferences: UserPreferences) => {
    setIsLoading(true);
    try {
      // Fetch all active credit cards
      const { data: cards, error: cardsError } = await supabase
        .from('credit_cards')
        .select('*')
        .eq('is_active', true);

      if (cardsError) throw cardsError;

      // Calculate match scores for each card and transform to proper types
      const scoredCards = cards.map(card => {
        const { score, reasons } = calculateMatchScore(card, preferences);
        
        // Transform the card data to match CardRecommendation interface
        return {
          id: card.id,
          name: card.name,
          issuer: card.issuer,
          card_type: card.card_type,
          annual_fee: card.annual_fee || 0,
          welcome_bonus_value: card.welcome_bonus_value || 0,
          welcome_bonus_requirement: card.welcome_bonus_requirement || 0,
          cashback_rate_general: card.cashback_rate_general || 0,
          cashback_rate_grocery: card.cashback_rate_grocery || 0,
          cashback_rate_gas: card.cashback_rate_gas || 0,
          cashback_rate_dining: card.cashback_rate_dining || 0,
          cashback_rate_travel: card.cashback_rate_travel || 0,
          features: Array.isArray(card.features) ? card.features as string[] : [],
          pros: Array.isArray(card.pros) ? card.pros as string[] : [],
          cons: Array.isArray(card.cons) ? card.cons as string[] : [],
          apply_url: card.apply_url || '',
          match_score: score,
          match_reasons: reasons,
          rank: 0 // Will be set below
        };
      });

      // Sort by match score and rank
      const rankedCards = scoredCards
        .sort((a, b) => b.match_score - a.match_score)
        .map((card, index) => ({
          ...card,
          rank: index + 1
        }))
        .slice(0, 5); // Top 5 recommendations

      // Save submission to database
      const sessionId = user?.id || generateSessionId();
      const { data: submission, error: submissionError } = await supabase
        .from('card_finder_submissions')
        .insert({
          user_id: user?.id || null,
          session_id: sessionId,
          card_purpose: preferences.cardPurpose,
          date_of_birth: preferences.dateOfBirth.year ? 
            `${preferences.dateOfBirth.year}-${preferences.dateOfBirth.month.padStart(2, '0')}-${preferences.dateOfBirth.day.padStart(2, '0')}` : null,
          annual_income_range: preferences.annualIncomeRange,
          credit_score_range: preferences.creditScoreRange,
          monthly_spending: preferences.monthlySpending,
          primary_spending_categories: preferences.primarySpendingCategories,
          travel_frequency: preferences.travelFrequency,
          balance_transfer_amount: preferences.balanceTransferAmount,
          preferred_features: preferences.preferredFeatures,
          max_annual_fee: preferences.maxAnnualFee,
          current_cards: preferences.currentCards
        })
        .select()
        .single();

      if (submissionError) throw submissionError;

      // Save recommendations
      const recommendationsToInsert = rankedCards.map(card => ({
        submission_id: submission.id,
        card_id: card.id,
        match_score: card.match_score,
        match_reasons: card.match_reasons,
        rank: card.rank
      }));

      const { error: recsError } = await supabase
        .from('card_recommendations')
        .insert(recommendationsToInsert);

      if (recsError) throw recsError;

      setRecommendations(rankedCards);
    } catch (error) {
      console.error('Error finding recommendations:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    findRecommendations,
    recommendations,
    isLoading
  };
};
