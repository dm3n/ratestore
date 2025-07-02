
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, CreditCard, DollarSign, Gift, ExternalLink } from "lucide-react";
import { CardRecommendation } from '@/hooks/useCardFinder';

interface CardRecommendationsProps {
  recommendations: CardRecommendation[];
  onBack: () => void;
}

export const CardRecommendations = ({ recommendations, onBack }: CardRecommendationsProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getCardTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'cashback': 'bg-blue-100 text-blue-800',
      'travel': 'bg-purple-100 text-purple-800',
      'rewards': 'bg-green-100 text-green-800',
      'low_interest': 'bg-orange-100 text-orange-800',
      'balance_transfer': 'bg-red-100 text-red-800',
      'secured': 'bg-gray-100 text-gray-800',
      'student': 'bg-indigo-100 text-indigo-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to CardFinder
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Your Personalized Card Matches
            </h1>
            <p className="text-xl text-muted-foreground">
              We found {recommendations.length} cards perfectly matched to your needs
            </p>
          </div>

          <div className="grid gap-6">
            {recommendations.map((card, index) => (
              <Card key={card.id} className={`${index === 0 ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {index === 0 && <Badge className="bg-blue-600">Top Match</Badge>}
                        <Badge className={getCardTypeColor(card.card_type)}>
                          {card.card_type.replace('_', ' ').toUpperCase()}
                        </Badge>
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${getScoreColor(card.match_score)} mr-2`}></div>
                          <span className="text-sm font-medium">{card.match_score}% Match</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{card.name}</CardTitle>
                      <p className="text-lg text-muted-foreground">{card.issuer}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Annual Fee</div>
                      <div className="text-2xl font-bold">
                        {card.annual_fee === 0 ? 'FREE' : formatCurrency(card.annual_fee)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Match Reasons */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Why This Card Matches You
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {card.match_reasons.map((reason, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {reason}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Welcome Bonus */}
                    {card.welcome_bonus_value > 0 && (
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <Gift className="w-5 h-5 text-green-600 mr-2" />
                        <div>
                          <div className="font-semibold text-green-800">
                            {formatCurrency(card.welcome_bonus_value)} Bonus
                          </div>
                          <div className="text-xs text-green-600">
                            Spend ${card.welcome_bonus_requirement}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rewards Rate */}
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                      <div>
                        <div className="font-semibold text-blue-800">
                          Up to {Math.max(
                            card.cashback_rate_general,
                            card.cashback_rate_grocery,
                            card.cashback_rate_gas,
                            card.cashback_rate_dining,
                            card.cashback_rate_travel
                          )}% Back
                        </div>
                        <div className="text-xs text-blue-600">On purchases</div>
                      </div>
                    </div>

                    {/* Annual Fee */}
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
                      <div>
                        <div className="font-semibold text-purple-800">
                          {card.annual_fee === 0 ? 'No Fee' : formatCurrency(card.annual_fee)}
                        </div>
                        <div className="text-xs text-purple-600">Annual fee</div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Rewards */}
                  {(card.cashback_rate_grocery > 0 || card.cashback_rate_dining > 0 || 
                    card.cashback_rate_gas > 0 || card.cashback_rate_travel > 0) && (
                    <div>
                      <h4 className="font-semibold mb-2">Rewards Breakdown</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        {card.cashback_rate_grocery > 0 && (
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-semibold">{card.cashback_rate_grocery}%</div>
                            <div className="text-xs text-gray-600">Groceries</div>
                          </div>
                        )}
                        {card.cashback_rate_dining > 0 && (
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-semibold">{card.cashback_rate_dining}%</div>
                            <div className="text-xs text-gray-600">Dining</div>
                          </div>
                        )}
                        {card.cashback_rate_gas > 0 && (
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-semibold">{card.cashback_rate_gas}%</div>
                            <div className="text-xs text-gray-600">Gas</div>
                          </div>
                        )}
                        {card.cashback_rate_travel > 0 && (
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-semibold">{card.cashback_rate_travel}%</div>
                            <div className="text-xs text-gray-600">Travel</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {card.features && card.features.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="text-sm space-y-1">
                        {card.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {card.pros && card.pros.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                        <ul className="text-sm space-y-1">
                          {card.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {card.cons && card.cons.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                        <ul className="text-sm space-y-1">
                          {card.cons.slice(0, 3).map((con, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2">-</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Apply Button */}
                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                      asChild
                    >
                      <a href={card.apply_url} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              These recommendations are based on your preferences and spending patterns. 
              Always review terms and conditions before applying.
            </p>
            <Button variant="outline" onClick={onBack}>
              Start New Search
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
