
import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Clock, CheckCircle, CreditCard, DollarSign, MapPin, User, Target, Star, Gift, TrendingDown, TrendingUp, RefreshCw, Plane, ShoppingCart, UtensilsCrossed, Fuel, Hotel, ShoppingBag } from "lucide-react";
import { useCardFinder, UserPreferences } from '@/hooks/useCardFinder';
import { CardRecommendations } from './CardRecommendations';

interface EnhancedCardFinderFormProps {
  onBack: () => void;
}

type FormStep = 'purpose' | 'personal' | 'financial' | 'spending' | 'preferences' | 'results';

export const EnhancedCardFinderForm = ({ onBack }: EnhancedCardFinderFormProps) => {
  const [currentStep, setCurrentStep] = useState<FormStep>('purpose');
  const [preferences, setPreferences] = useState<UserPreferences>({
    cardPurpose: '',
    dateOfBirth: { month: '', day: '', year: '' },
    address: '',
    annualIncomeRange: '',
    creditScoreRange: '',
    monthlySpending: {
      groceries: 0,
      dining: 0,
      gas: 0,
      travel: 0,
      general: 0
    },
    primarySpendingCategories: [],
    travelFrequency: '',
    preferredFeatures: [],
    maxAnnualFee: 100,
    currentCards: []
  });

  const { findRecommendations, recommendations, isLoading } = useCardFinder();

  const cardPurposes = [
    { id: 'Earn rewards', icon: Gift, title: 'Earn rewards', desc: 'Maximize points, miles, or cashback' },
    { id: 'Pay low interest', icon: TrendingDown, title: 'Pay low interest', desc: 'Minimize interest charges on balances' },
    { id: 'Build credit', icon: TrendingUp, title: 'Build credit', desc: 'Establish or improve credit history' },
    { id: 'Transfer balance', icon: RefreshCw, title: 'Transfer balance', desc: 'Consolidate debt with 0% APR offers' },
    { id: 'Travel benefits', icon: Plane, title: 'Travel benefits', desc: 'Access lounges, insurance, and perks' }
  ];

  const incomeRanges = ['$0 - $29,999', '$30,000 - $49,999', '$50,000 - $74,999', '$75,000 - $99,999', '$100,000+'];
  const creditRanges = ['Excellent (750+)', 'Good (650-749)', 'Fair (550-649)', 'Poor (300-549)', "I don't know"];
  const travelFrequencies = ['Never', 'Once a year', '2-3 times a year', '4+ times a year', 'Monthly'];
  const cardFeatures = [
    'No foreign transaction fees',
    'Airport lounge access',
    'Travel insurance',
    'Purchase protection',
    'Extended warranty',
    'Concierge service',
    'Mobile wallet compatibility',
    'Online account management'
  ];

  const spendingCategories = [
    { key: 'groceries', label: 'Groceries', icon: ShoppingCart },
    { key: 'dining', label: 'Dining & Restaurants', icon: UtensilsCrossed },
    { key: 'gas', label: 'Gas & Transportation', icon: Fuel },
    { key: 'travel', label: 'Travel & Hotels', icon: Hotel },
    { key: 'general', label: 'General Purchases', icon: ShoppingBag }
  ];

  const steps = [
    { id: 'purpose', title: 'Purpose', icon: Target },
    { id: 'personal', title: 'Personal', icon: User },
    { id: 'financial', title: 'Financial', icon: DollarSign },
    { id: 'spending', title: 'Spending', icon: CreditCard },
    { id: 'preferences', title: 'Preferences', icon: Star }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  const handleNext = async () => {
    const stepOrder: FormStep[] = ['purpose', 'personal', 'financial', 'spending', 'preferences'];
    const currentIndex = stepOrder.indexOf(currentStep);
    
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    } else {
      // Submit form and get recommendations
      try {
        await findRecommendations(preferences);
        setCurrentStep('results');
      } catch (error) {
        console.error('Error getting recommendations:', error);
      }
    }
  };

  const handlePrevious = () => {
    const stepOrder: FormStep[] = ['purpose', 'personal', 'financial', 'spending', 'preferences'];
    const currentIndex = stepOrder.indexOf(currentStep);
    
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const renderProgressBar = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => {
        const StepIcon = step.icon;
        const isActive = index === currentStepIndex;
        const isCompleted = index < currentStepIndex;
        
        return (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              isActive ? 'bg-blue-600 text-white' : 
              isCompleted ? 'bg-green-600 text-white' : 
              'bg-gray-200 text-gray-600'
            }`}>
              {isCompleted ? <CheckCircle className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
            </div>
            <span className={`ml-2 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div className={`mx-4 w-12 h-0.5 ${isCompleted ? 'bg-green-600' : 'bg-gray-300'}`} />
            )}
          </div>
        );
      })}
    </div>
  );

  if (currentStep === 'results') {
    return <CardRecommendations recommendations={recommendations} onBack={onBack} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to CardFinder
          </Button>

          {renderProgressBar()}

          <div className="flex items-center justify-center mb-8">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">About 2-3 minutes to complete</span>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              {currentStep === 'purpose' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">What's your main goal?</h2>
                    <p className="text-gray-600">Choose your primary reason for getting a new credit card</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {cardPurposes.map((purpose) => (
                      <button
                        key={purpose.id}
                        onClick={() => setPreferences({ ...preferences, cardPurpose: purpose.id })}
                        className={`p-4 text-left border-2 rounded-lg transition-all ${
                          preferences.cardPurpose === purpose.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 flex items-center justify-center mr-3">
                            <purpose.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{purpose.title}</h3>
                            <p className="text-sm text-gray-600">{purpose.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 'personal' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                    <p className="text-gray-600">Help us understand your eligibility</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Date of Birth</label>
                    <div className="grid grid-cols-3 gap-3">
                      <Input 
                        placeholder="MM" 
                        maxLength={2}
                        value={preferences.dateOfBirth.month}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          dateOfBirth: { ...preferences.dateOfBirth, month: e.target.value }
                        })}
                      />
                      <Input 
                        placeholder="DD" 
                        maxLength={2}
                        value={preferences.dateOfBirth.day}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          dateOfBirth: { ...preferences.dateOfBirth, day: e.target.value }
                        })}
                      />
                      <Input 
                        placeholder="YYYY" 
                        maxLength={4}
                        value={preferences.dateOfBirth.year}
                        onChange={(e) => setPreferences({
                          ...preferences,
                          dateOfBirth: { ...preferences.dateOfBirth, year: e.target.value }
                        })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Address</label>
                    <Input 
                      placeholder="Enter your address"
                      value={preferences.address}
                      onChange={(e) => setPreferences({ ...preferences, address: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {currentStep === 'financial' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Financial Profile</h2>
                    <p className="text-gray-600">This helps us match you with the right cards</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Annual Income</label>
                    <div className="grid grid-cols-1 gap-2">
                      {incomeRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setPreferences({ ...preferences, annualIncomeRange: range })}
                          className={`p-3 text-left border rounded-lg transition-colors ${
                            preferences.annualIncomeRange === range 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Credit Score Range</label>
                    <div className="grid grid-cols-1 gap-2">
                      {creditRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setPreferences({ ...preferences, creditScoreRange: range })}
                          className={`p-3 text-left border rounded-lg transition-colors ${
                            preferences.creditScoreRange === range 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 'spending' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Monthly Spending</h2>
                    <p className="text-gray-600">Tell us how much you spend in each category</p>
                  </div>

                  <div className="space-y-4">
                    {spendingCategories.map((category) => (
                      <div key={category.key}>
                        <label className="flex items-center text-sm font-medium mb-2">
                          <category.icon className="h-4 w-4 mr-2 text-blue-600" />
                          {category.label}
                        </label>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">$0</span>
                          <Slider
                            value={[preferences.monthlySpending[category.key as keyof typeof preferences.monthlySpending]]}
                            onValueChange={(value) => setPreferences({
                              ...preferences,
                              monthlySpending: {
                                ...preferences.monthlySpending,
                                [category.key]: value[0]
                              }
                            })}
                            max={2000}
                            step={25}
                            className="flex-1"
                          />
                          <span className="text-sm text-gray-600">$2000+</span>
                        </div>
                        <div className="text-center mt-1">
                          <span className="text-sm font-medium">
                            ${preferences.monthlySpending[category.key as keyof typeof preferences.monthlySpending]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">How often do you travel?</label>
                    <div className="grid grid-cols-1 gap-2">
                      {travelFrequencies.map((freq) => (
                        <button
                          key={freq}
                          onClick={() => setPreferences({ ...preferences, travelFrequency: freq })}
                          className={`p-3 text-left border rounded-lg transition-colors ${
                            preferences.travelFrequency === freq 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 'preferences' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Card Preferences</h2>
                    <p className="text-gray-600">What features matter most to you?</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Maximum Annual Fee: ${preferences.maxAnnualFee}
                    </label>
                    <Slider
                      value={[preferences.maxAnnualFee]}
                      onValueChange={(value) => setPreferences({ ...preferences, maxAnnualFee: value[0] })}
                      max={500}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$500+</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Preferred Features</label>
                    <div className="grid grid-cols-1 gap-3">
                      {cardFeatures.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox
                            id={feature}
                            checked={preferences.preferredFeatures.includes(feature)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setPreferences({
                                  ...preferences,
                                  preferredFeatures: [...preferences.preferredFeatures, feature]
                                });
                              } else {
                                setPreferences({
                                  ...preferences,
                                  preferredFeatures: preferences.preferredFeatures.filter(f => f !== feature)
                                });
                              }
                            }}
                          />
                          <label htmlFor={feature} className="text-sm">{feature}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {currentStep !== 'purpose' && (
                  <Button variant="outline" onClick={handlePrevious}>
                    Previous
                  </Button>
                )}
                <div className="ml-auto">
                  <Button 
                    onClick={handleNext}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isLoading ? 'Finding Your Perfect Cards...' : 
                     currentStep === 'preferences' ? 'Get My Recommendations' : 'Continue'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
