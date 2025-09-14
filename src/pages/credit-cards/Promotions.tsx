
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
  welcome_bonus_timeframe: string | null;
  promotional_offer: string | null;
  cashback_rate_general: number;
  cashback_rate_grocery: number;
  cashback_rate_gas: number;
  cashback_rate_dining: number;
  cashback_rate_travel: number;
  points_per_dollar: number | null;
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
      // Mock promotional cards data since credit_cards table doesn't exist
      const mockPromotionalCards: CreditCard[] = [
        {
          name: 'Tangerine Money-Back Credit Card',
          issuer: 'Tangerine Bank',
          card_type: 'cashback',
          annual_fee: 0,
          welcome_bonus_value: 100,
          welcome_bonus_requirement: 500,
          welcome_bonus_timeframe: '90 days',
          promotional_offer: 'New customer bonus offer',
          cashback_rate_general: 0.5,
          cashback_rate_grocery: 2.0,
          cashback_rate_gas: 2.0,
          cashback_rate_dining: 2.0,
          cashback_rate_travel: 2.0,
          points_per_dollar: null,
          rewards_program: null,
          features: ['No annual fee', 'Cashback on purchases', 'Online account management'],
          pros: ['No annual fee', 'Good cashback rates', 'Easy approval'],
          cons: ['Limited travel benefits'],
          apply_url: 'https://tangerine.ca/creditcard'
        },
        {
          name: 'CIBC Dividend Visa Infinite',
          issuer: 'CIBC',
          card_type: 'cashback',
          annual_fee: 99,
          welcome_bonus_value: 150,
          welcome_bonus_requirement: 1000,
          welcome_bonus_timeframe: '120 days',
          promotional_offer: 'First year annual fee waived',
          cashback_rate_general: 1.0,
          cashback_rate_grocery: 4.0,
          cashback_rate_gas: 2.0,
          cashback_rate_dining: 2.0,
          cashback_rate_travel: 2.0,
          points_per_dollar: null,
          rewards_program: null,
          features: ['Mobile device insurance', 'Purchase protection', 'Extended warranty'],
          pros: ['High grocery cashback', 'Good insurance coverage'],
          cons: ['Annual fee', 'High income requirement'],
          apply_url: 'https://cibc.com/creditcard'
        }
      ];

      const transformedCards = mockPromotionalCards;
      
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
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-background to-red-50 py-20 md:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          
          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Sparkles className="h-4 w-4" />
                Limited Time Offers - Act Fast!
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                Exclusive Credit Card
                <span className="block bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                  Promotions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
                Don't miss these
                <span className="text-orange-600 font-semibold"> time-sensitive welcome bonuses</span> and 
                <span className="text-red-600 font-semibold"> exclusive offers</span> from Canada's leading credit card issuers
              </p>

              {/* Promotional Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto animate-fade-in">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:shadow-lg transition-all hover:scale-105">
                  <Gift className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="font-bold text-3xl text-orange-600 mb-1">{welcomeBonusCards.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Welcome Bonuses</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:shadow-lg transition-all hover:scale-105">
                  <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="font-bold text-3xl text-green-600 mb-1">{noFeeCards.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">No Fee Cards</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:shadow-lg transition-all hover:scale-105">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <div className="font-bold text-3xl text-yellow-600 mb-1">{highValueCards.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">High Value Offers</div>
                </div>
              </div>

              {/* Countdown Timer Effect */}
              <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Calendar className="h-4 w-4" />
                  Offers updated daily - New promotions added regularly
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  View All Promotions <Zap className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg hover:bg-orange-50 border-orange-200 text-orange-700 transition-all">
                  Compare Welcome Bonuses <Gift className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full blur-xl animate-pulse opacity-60" />
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-red-200 rounded-full blur-lg animate-pulse opacity-40" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-200 rounded-full blur-2xl animate-pulse opacity-30" />
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
                <Button size="lg" variant="ghost" className="bg-primary text-white border-2 border-white hover:bg-white hover:text-primary" asChild>
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
