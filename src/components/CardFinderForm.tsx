
import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

interface CardFinderFormProps {
  onBack: () => void;
}

type FormStep = 'card-type' | 'eligibility' | 'results';

interface FormData {
  cardPurpose: string;
  dateOfBirth: {
    month: string;
    day: string;
    year: string;
  };
  address: string;
  annualIncome: string;
  creditScore: string;
}

export const CardFinderForm = ({ onBack }: CardFinderFormProps) => {
  const [currentStep, setCurrentStep] = useState<FormStep>('card-type');
  const [formData, setFormData] = useState<FormData>({
    cardPurpose: '',
    dateOfBirth: { month: '', day: '', year: '' },
    address: '',
    annualIncome: '',
    creditScore: ''
  });

  const cardPurposes = [
    'Earn rewards',
    'Pay low interest',
    'Build credit',
    'Transfer balance',
    'Travel benefits'
  ];

  const incomeRanges = [
    '$0 - $14,999',
    '$15,000 - $39,999',
    '$40,000 - $59,999',
    '$60,000 - $79,999',
    '$80,000+',
    'Prefer not to say'
  ];

  const creditScoreRanges = [
    'Excellent (750+)',
    'Good (650-749)',
    'Fair (550-649)',
    'Poor (300-549)',
    "I don't know"
  ];

  const handleCardPurposeSelect = (purpose: string) => {
    setFormData({ ...formData, cardPurpose: purpose });
    setCurrentStep('eligibility');
  };

  const handleIncomeSelect = (income: string) => {
    setFormData({ ...formData, annualIncome: income });
  };

  const handleCreditScoreSelect = (score: string) => {
    setFormData({ ...formData, creditScore: score });
  };

  const handleNext = () => {
    setCurrentStep('results');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center space-x-4 mb-8">
      <div className={`flex items-center ${currentStep === 'card-type' ? 'text-blue-600' : 'text-green-600'}`}>
        {currentStep === 'card-type' ? (
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-2">1</div>
        ) : (
          <CheckCircle className="w-8 h-8 mr-2" />
        )}
        <span className="font-medium">CARD TYPE</span>
      </div>
      <div className="flex-1 h-px bg-gray-300"></div>
      <div className={`flex items-center ${
        currentStep === 'eligibility' ? 'text-blue-600' : 
        currentStep === 'results' ? 'text-green-600' : 'text-gray-400'
      }`}>
        {currentStep === 'results' ? (
          <CheckCircle className="w-8 h-8 mr-2" />
        ) : (
          <div className={`w-8 h-8 ${currentStep === 'eligibility' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-sm font-medium mr-2`}>
            2
          </div>
        )}
        <span className="font-medium">ELIGIBILITY</span>
      </div>
      <div className="flex-1 h-px bg-gray-300"></div>
      <div className={`flex items-center ${currentStep === 'results' ? 'text-blue-600' : 'text-gray-400'}`}>
        <div className={`w-8 h-8 ${currentStep === 'results' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} rounded-full flex items-center justify-center text-sm font-medium mr-2`}>
          3
        </div>
        <span className="font-medium">RESULTS</span>
      </div>
    </div>
  );

  const renderCardTypeStep = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          CardFinder is moments away from showing your personalized card matches
          <span className="text-blue-600">.</span>
        </h1>
        <div className="flex justify-center items-center space-x-4 mb-8 opacity-60">
          <span className="text-sm">Tangerine</span>
          <span className="text-sm">TD Bank</span>
          <span className="text-sm">American Express</span>
          <span className="text-sm">CIBC</span>
          <span className="text-sm">Scotiabank</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">What's your top reason for wanting a new card?</h2>
        <div className="space-y-3">
          {cardPurposes.map((purpose) => (
            <button
              key={purpose}
              onClick={() => handleCardPurposeSelect(purpose)}
              className={`w-full p-4 text-left border rounded-lg hover:border-blue-300 transition-colors ${
                formData.cardPurpose === purpose ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {purpose}
            </button>
          ))}
        </div>
      </div>

      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        disabled={!formData.cardPurpose}
        onClick={() => setCurrentStep('eligibility')}
      >
        continue
      </Button>
    </div>
  );

  const renderEligibilityStep = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Date of Birth */}
      <div>
        <h2 className="text-xl font-semibold mb-4">What is your date of birth?</h2>
        <div className="grid grid-cols-3 gap-4">
          <Input 
            placeholder="MM" 
            maxLength={2}
            value={formData.dateOfBirth.month}
            onChange={(e) => setFormData({
              ...formData,
              dateOfBirth: { ...formData.dateOfBirth, month: e.target.value }
            })}
          />
          <Input 
            placeholder="DD" 
            maxLength={2}
            value={formData.dateOfBirth.day}
            onChange={(e) => setFormData({
              ...formData,
              dateOfBirth: { ...formData.dateOfBirth, day: e.target.value }
            })}
          />
          <Input 
            placeholder="YYYY" 
            maxLength={4}
            value={formData.dateOfBirth.year}
            onChange={(e) => setFormData({
              ...formData,
              dateOfBirth: { ...formData.dateOfBirth, year: e.target.value }
            })}
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <h2 className="text-xl font-semibold mb-4">What is your address?</h2>
        <Input 
          placeholder="Type to search"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="mb-2"
        />
        <button className="text-blue-600 text-sm hover:underline">enter manually</button>
      </div>

      {/* Annual Income */}
      <div>
        <h2 className="text-xl font-semibold mb-4">What is your annual income?</h2>
        <div className="grid grid-cols-3 gap-3">
          {incomeRanges.map((range) => (
            <button
              key={range}
              onClick={() => handleIncomeSelect(range)}
              className={`p-3 text-sm border rounded-lg hover:border-blue-300 transition-colors ${
                formData.annualIncome === range ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Credit Score */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Do you know your credit score?</h2>
        <p className="text-sm text-gray-600 mb-4">
          If our soft credit check still can't determine your credit score, we'll select card matches based on your answer here.
        </p>
        <div className="space-y-2">
          {creditScoreRanges.map((score) => (
            <button
              key={score}
              onClick={() => handleCreditScoreSelect(score)}
              className={`w-full p-3 text-left border rounded-lg hover:border-blue-300 transition-colors ${
                formData.creditScore === score ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {score}
            </button>
          ))}
        </div>
      </div>

      <Button 
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"
        onClick={handleNext}
        disabled={!formData.dateOfBirth.month || !formData.dateOfBirth.day || !formData.dateOfBirth.year || !formData.address || !formData.annualIncome}
      >
        next
      </Button>
    </div>
  );

  const renderResultsStep = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Your personalized card matches are ready!
        </h1>
        <p className="text-muted-foreground mb-6">
          Based on your preferences for "{formData.cardPurpose.toLowerCase()}" and your profile, 
          we've found the best credit card options for you.
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <Badge className="mb-4 bg-green-100 text-green-700">Top Match</Badge>
          <h3 className="text-xl font-semibold mb-2">Chase Sapphire Preferred</h3>
          <p className="text-muted-foreground mb-4">Perfect for earning travel rewards with 2x points on travel and dining</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">60,000 points bonus</span>
            <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
          </div>
        </CardContent>
      </Card>

      <Button 
        variant="outline" 
        onClick={onBack}
        className="w-full"
      >
        View All Matches
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to CardFinder
            </Button>

            {/* Progress Indicator */}
            {renderStepIndicator()}

            {/* Time Estimate */}
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-600">estimated 1 minute to complete</span>
            </div>

            {/* Step Content */}
            {currentStep === 'card-type' && renderCardTypeStep()}
            {currentStep === 'eligibility' && renderEligibilityStep()}
            {currentStep === 'results' && renderResultsStep()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
