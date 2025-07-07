
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { 
  Star, 
  CreditCard, 
  Gift, 
  Zap, 
  Calendar,
  DollarSign,
  ArrowRight,
  Check,
  X,
  ExternalLink,
  Sparkles
} from "lucide-react";

interface CreditCard {
  name: string;
  issuer: string;
  card_type: string;
  annual_fee: number;
  welcome_bonus_value: number;
  welcome_bonus_requirement: number | null;
  welcome_bonus_timeframe: number | null;
  promotional_offer: string | null;
  cashback_rate_general: number;
  cashback_rate_grocery: number;
  cashback_rate_gas: number;
  cashback_rate_dining: number;
  cashback_rate_travel: number;
  points_per_dollar: number;
  rewards_program: string | null;
  features: string[];
  pros: string[];
  cons: string[];
  apply_url: string | null;
}

const Promotions = () => {
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<CreditCard | null>(null);

  useEffect(() => {
    fetchPromotionalCards();
  }, []);

  const fetchPromotionalCards = async () => {
    try {
      const { data, error } = await supabase
        .from('credit_cards')
        .select('name, issuer, card_type, annual_fee, welcome_bonus_value, welcome_bonus_requirement, welcome_bonus_timeframe, promotional_offer, cashback_rate_general, cashback_rate_grocery, cashback_rate_gas, cashback_rate_dining, cashback_rate_travel, points_per_dollar, rewards_program, features, pros, cons, apply_url')
        .eq('is_active', true)
        .or('promotional_offer.not.is.null,welcome_bonus_value.gt.0')
        .order('welcome_bonus_value', { ascending: false })
        .limit(20);

      if (error) throw error;
      
      // Transform the data to ensure proper typing
      const transformedCards: CreditCard[] = (data || []).map(card => ({
        ...card,
        features: Array.isArray(card.features) ? card.features.filter((f): f is string => typeof f === 'string') : [],
        pros: Array.isArray(card.pros) ? card.pros.filter((p): p is string => typeof p === 'string') : [],
        cons: Array.isArray(card.cons) ? card.cons.filter((c): c is string => typeof c === 'string') : [],
        welcome_bonus_requirement: card.welcome_bonus_requirement || null,
        welcome_bonus_timeframe: card.welcome_bonus_timeframe || null,
        promotional_offer: card.promotional_offer || null,
        rewards_program: card.rewards_program || null,
        apply_url: card.apply_url || null,
      }));
      
      setCards(transformedCards);
    } catch (error) {
      console.error('Error fetching promotional cards:', error);
    } finally {
      setLoading(false);
    }
  };

  const welcomeBonusCards = cards.filter(card => card.welcome_bonus_value > 0);
  const noFeeCards = cards.filter(card => card.annual_fee === 0);
  const highValueCards = cards.filter(card => card.welcome_bonus_value >= 50000);
  const limitedTimeCards = cards.filter(card => card.promotional_offer);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatPoints = (points: number) => {
    return new Intl.NumberFormat('en-CA').format(points);
  };

  const getCardTypeColor = (cardType: string) => {
    switch (cardType.toLowerCase()) {
      case 'travel': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'cashback': return 'bg-green-100 text-green-700 border-green-200';
      case 'rewards': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const CardDetailDialog = ({ card }: { card: CreditCard }) => (
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">{card.name}</DialogTitle>
        <DialogDescription className="text-lg">
          {card.issuer} • {card.card_type.charAt(0).toUpperCase() + card.card_type.slice(1)} Card
        </DialogDescription>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Welcome Bonus */}
        {card.welcome_bonus_value > 0 && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="h-5 w-5 text-yellow-600" />
              <h3 className="font-bold text-yellow-800">Welcome Bonus</h3>
            </div>
            <p className="text-lg font-semibold text-yellow-900">
              {formatPoints(card.welcome_bonus_value)} {card.card_type === 'cashback' ? 'cash back' : 'points'}
            </p>
            {card.welcome_bonus_requirement && (
              <p className="text-sm text-yellow-700 mt-1">
                After spending {formatCurrency(card.welcome_bonus_requirement)} 
                {card.welcome_bonus_timeframe && ` in ${card.welcome_bonus_timeframe} months`}
              </p>
            )}
          </div>
        )}

        {/* Key Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Annual Fee</span>
              <span className="font-bold">{card.annual_fee === 0 ? 'No Fee' : formatCurrency(card.annual_fee)}</span>
            </div>
            
            {card.cashback_rate_general > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Cash Back Rates</h4>
                <div className="space-y-1 text-sm">
                  {card.cashback_rate_general > 0 && <div>General: {card.cashback_rate_general}%</div>}
                  {card.cashback_rate_grocery > 0 && <div>Grocery: {card.cashback_rate_grocery}%</div>}
                  {card.cashback_rate_gas > 0 && <div>Gas: {card.cashback_rate_gas}%</div>}
                  {card.cashback_rate_dining > 0 && <div>Dining: {card.cashback_rate_dining}%</div>}
                  {card.cashback_rate_travel > 0 && <div>Travel: {card.cashback_rate_travel}%</div>}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            {card.points_per_dollar > 0 && (
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Points Per Dollar</span>
                <span className="font-bold">{card.points_per_dollar}x</span>
              </div>
            )}
            
            {card.rewards_program && (
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Rewards Program</span>
                <span className="font-bold">{card.rewards_program}</span>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        {card.features && card.features.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {card.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6">
          {card.pros && card.pros.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-green-700">Pros</h4>
              <div className="space-y-2">
                {card.pros.map((pro, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{pro}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {card.cons && card.cons.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-red-700">Cons</h4>
              <div className="space-y-2">
                {card.cons.map((con, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Promotional Offer */}
        {card.promotional_offer && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-blue-800">Special Promotion</h4>
            </div>
            <p className="text-blue-700">{card.promotional_offer}</p>
          </div>
        )}

        {/* Apply Button */}
        {card.apply_url && (
          <div className="flex gap-3 pt-4 border-t">
            <Button asChild className="flex-1">
              <a href={card.apply_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Apply Now
              </a>
            </Button>
            <Button variant="outline">
              Compare Cards
            </Button>
          </div>
        )}
      </div>
    </DialogContent>
  );

  const PromotionalCard = ({ card }: { card: CreditCard }) => (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {card.welcome_bonus_value >= 50000 && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <Star className="h-3 w-3 mr-1" />
            High Value
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <Badge className={getCardTypeColor(card.card_type)} variant="outline">
              {card.card_type.charAt(0).toUpperCase() + card.card_type.slice(1)}
            </Badge>
            <CardTitle className="text-lg mt-2 line-clamp-2">{card.name}</CardTitle>
            <CardDescription className="text-sm">{card.issuer}</CardDescription>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-muted-foreground">Annual Fee:</span>
            <span className="font-semibold ml-1">
              {card.annual_fee === 0 ? 'No Fee' : formatCurrency(card.annual_fee)}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Welcome Bonus */}
        {card.welcome_bonus_value > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Gift className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-800">Welcome Bonus</span>
            </div>
            <p className="font-bold text-lg text-blue-900">
              {formatPoints(card.welcome_bonus_value)} {card.card_type === 'cashback' ? 'cash back' : 'points'}
            </p>
            {card.welcome_bonus_requirement && (
              <p className="text-xs text-blue-700 mt-1">
                Spend {formatCurrency(card.welcome_bonus_requirement)}
                {card.welcome_bonus_timeframe && ` in ${card.welcome_bonus_timeframe} months`}
              </p>
            )}
          </div>
        )}

        {/* Key Rates */}
        <div className="space-y-2">
          {card.cashback_rate_general > 0 && (
            <div className="flex justify-between text-sm">
              <span>Cash Back Rate:</span>
              <span className="font-semibold">{card.cashback_rate_general}%</span>
            </div>
          )}
          {card.points_per_dollar > 0 && (
            <div className="flex justify-between text-sm">
              <span>Points Per Dollar:</span>
              <span className="font-semibold">{card.points_per_dollar}x</span>
            </div>
          )}
        </div>

        {/* Promotional Offer */}
        {card.promotional_offer && (
          <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
            <div className="flex items-center gap-1 mb-1">
              <Zap className="h-3 w-3 text-yellow-600" />
              <span className="text-xs font-semibold text-yellow-800">Limited Time</span>
            </div>
            <p className="text-xs text-yellow-700 line-clamp-2">{card.promotional_offer}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1">
                View Details
              </Button>
            </DialogTrigger>
            <CardDetailDialog card={card} />
          </Dialog>
          
          {card.apply_url && (
            <Button size="sm" className="flex-1" asChild>
              <a href={card.apply_url} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading promotional offers...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                <Sparkles className="h-3 w-3 mr-1" />
                Limited Time Offers
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Credit Card Promotions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't miss out on these exclusive welcome bonuses and limited-time offers from Canada's top credit card issuers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Gift className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-2xl text-blue-600">{welcomeBonusCards.length}</div>
                    <div className="text-sm text-muted-foreground">Welcome Bonuses</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-2xl text-green-600">{noFeeCards.length}</div>
                    <div className="text-sm text-muted-foreground">No Fee Cards</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="font-bold text-2xl text-yellow-600">{highValueCards.length}</div>
                    <div className="text-sm text-muted-foreground">High Value Offers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="welcome-bonus" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="welcome-bonus">Welcome Bonuses</TabsTrigger>
                <TabsTrigger value="no-fee">No Fee Cards</TabsTrigger>
                <TabsTrigger value="high-value">High Value</TabsTrigger>
                <TabsTrigger value="limited-time">Limited Time</TabsTrigger>
              </TabsList>

              {/* Welcome Bonus Cards */}
              <TabsContent value="welcome-bonus" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Welcome Bonus Offers</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Earn valuable rewards with these attractive welcome bonus offers.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {welcomeBonusCards.map((card, index) => (
                    <PromotionalCard key={index} card={card} />
                  ))}
                </div>
              </TabsContent>

              {/* No Fee Cards */}
              <TabsContent value="no-fee" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">No Annual Fee Cards</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Build credit and earn rewards without paying an annual fee.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {noFeeCards.map((card, index) => (
                    <PromotionalCard key={index} card={card} />
                  ))}
                </div>
              </TabsContent>

              {/* High Value Cards */}
              <TabsContent value="high-value" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">High Value Offers</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Premium cards with exceptional welcome bonuses worth 50,000+ points.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {highValueCards.map((card, index) => (
                    <PromotionalCard key={index} card={card} />
                  ))}
                </div>
              </TabsContent>

              {/* Limited Time Cards */}
              <TabsContent value="limited-time" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Limited Time Promotions</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Exclusive offers that won't last long - act fast!
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {limitedTimeCards.length > 0 ? (
                    limitedTimeCards.map((card, index) => (
                      <PromotionalCard key={index} card={card} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Active Promotions</h3>
                      <p className="text-muted-foreground">Check back soon for new limited-time offers!</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
              <p className="text-xl mb-8 opacity-90">
                These promotional offers have limited availability. Apply today to secure your welcome bonus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/card-finder">
                    Find My Perfect Card
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <a href="/credit-cards/best-overall">
                    View All Cards
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Promotions;
