import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, Users, Shield, Calculator, FileText, Check, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanDetails {
  companyName: string;
  industry: string;
  employeeCount: number;
  province: string;
  coverageAmount: number;
  coverageType: string;
  employeeContribution: number;
  waitingPeriod: string;
  beneficiaryOptions: string[];
  additionalBenefits: string[];
}

export default function GroupPlanBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [planDetails, setPlanDetails] = useState<PlanDetails>({
    companyName: "",
    industry: "",
    employeeCount: 50,
    province: "",
    coverageAmount: 100000,
    coverageType: "basic",
    employeeContribution: 0,
    waitingPeriod: "immediate",
    beneficiaryOptions: [],
    additionalBenefits: []
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updatePlanDetails = (field: keyof PlanDetails, value: any) => {
    setPlanDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleBenefitToggle = (benefit: string, checked: boolean) => {
    if (checked) {
      updatePlanDetails('additionalBenefits', [...planDetails.additionalBenefits, benefit]);
    } else {
      updatePlanDetails('additionalBenefits', planDetails.additionalBenefits.filter(b => b !== benefit));
    }
  };

  const calculateEstimatedCost = () => {
    const baseCost = (planDetails.coverageAmount / 1000) * planDetails.employeeCount * 0.5;
    const industryMultiplier = planDetails.industry === 'construction' || planDetails.industry === 'mining' ? 1.5 : 1.0;
    const additionalBenefitsCost = planDetails.additionalBenefits.length * 50 * planDetails.employeeCount;
    
    return Math.round((baseCost * industryMultiplier + additionalBenefitsCost) * (1 - planDetails.employeeContribution / 100));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Company Information</h2>
              <p className="text-gray-600">Tell us about your organization</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Enter your company name"
                  value={planDetails.companyName}
                  onChange={(e) => updatePlanDetails('companyName', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select value={planDetails.industry} onValueChange={(value) => updatePlanDetails('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="employeeCount">Number of Employees</Label>
                <div className="space-y-4">
                  <Slider
                    value={[planDetails.employeeCount]}
                    onValueChange={(value) => updatePlanDetails('employeeCount', value[0])}
                    max={1000}
                    min={2}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>2</span>
                    <span className="font-medium">{planDetails.employeeCount} employees</span>
                    <span>1000+</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="province">Province</Label>
                <Select value={planDetails.province} onValueChange={(value) => updatePlanDetails('province', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AB">Alberta</SelectItem>
                    <SelectItem value="BC">British Columbia</SelectItem>
                    <SelectItem value="MB">Manitoba</SelectItem>
                    <SelectItem value="NB">New Brunswick</SelectItem>
                    <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                    <SelectItem value="NS">Nova Scotia</SelectItem>
                    <SelectItem value="ON">Ontario</SelectItem>
                    <SelectItem value="PE">Prince Edward Island</SelectItem>
                    <SelectItem value="QC">Quebec</SelectItem>
                    <SelectItem value="SK">Saskatchewan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coverage Details</h2>
              <p className="text-gray-600">Configure your life insurance coverage</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="coverageType">Coverage Type</Label>
                <Select value={planDetails.coverageType} onValueChange={(value) => updatePlanDetails('coverageType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select coverage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Life Insurance</SelectItem>
                    <SelectItem value="enhanced">Enhanced Life Insurance</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive Life Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="coverageAmount">Coverage Amount per Employee</Label>
                <div className="space-y-4">
                  <Slider
                    value={[planDetails.coverageAmount]}
                    onValueChange={(value) => updatePlanDetails('coverageAmount', value[0])}
                    max={500000}
                    min={25000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$25,000</span>
                    <span className="font-medium">${planDetails.coverageAmount.toLocaleString()}</span>
                    <span>$500,000</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="waitingPeriod">Waiting Period</Label>
                <Select value={planDetails.waitingPeriod} onValueChange={(value) => updatePlanDetails('waitingPeriod', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select waiting period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate Coverage</SelectItem>
                    <SelectItem value="30days">30 Days</SelectItem>
                    <SelectItem value="60days">60 Days</SelectItem>
                    <SelectItem value="90days">90 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="employeeContribution">Employee Contribution (%)</Label>
                <div className="space-y-4">
                  <Slider
                    value={[planDetails.employeeContribution]}
                    onValueChange={(value) => updatePlanDetails('employeeContribution', value[0])}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0% (Employer pays all)</span>
                    <span className="font-medium">{planDetails.employeeContribution}%</span>
                    <span>100% (Employee pays all)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Additional Benefits</h2>
              <p className="text-gray-600">Enhance your plan with optional benefits</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Accidental Death & Dismemberment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="add"
                      checked={planDetails.additionalBenefits.includes('add')}
                      onCheckedChange={(checked) => handleBenefitToggle('add', checked as boolean)}
                    />
                    <Label htmlFor="add" className="text-sm">
                      Additional coverage for accidental death and dismemberment
                    </Label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+$50/employee/month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dependent Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dependent"
                      checked={planDetails.additionalBenefits.includes('dependent')}
                      onCheckedChange={(checked) => handleBenefitToggle('dependent', checked as boolean)}
                    />
                    <Label htmlFor="dependent" className="text-sm">
                      Life insurance coverage for employee dependents
                    </Label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+$30/employee/month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Waiver of Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="waiver"
                      checked={planDetails.additionalBenefits.includes('waiver')}
                      onCheckedChange={(checked) => handleBenefitToggle('waiver', checked as boolean)}
                    />
                    <Label htmlFor="waiver" className="text-sm">
                      Waives premiums if employee becomes disabled
                    </Label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+$25/employee/month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Portability Option</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="portability"
                      checked={planDetails.additionalBenefits.includes('portability')}
                      onCheckedChange={(checked) => handleBenefitToggle('portability', checked as boolean)}
                    />
                    <Label htmlFor="portability" className="text-sm">
                      Employees can continue coverage after leaving
                    </Label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+$15/employee/month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conversion Privilege</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="conversion"
                      checked={planDetails.additionalBenefits.includes('conversion')}
                      onCheckedChange={(checked) => handleBenefitToggle('conversion', checked as boolean)}
                    />
                    <Label htmlFor="conversion" className="text-sm">
                      Convert group coverage to individual policy
                    </Label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+$20/employee/month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Business Travel Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="travel"
                      checked={planDetails.additionalBenefits.includes('travel')}
                      onCheckedChange={(checked) => handleBenefitToggle('travel', checked as boolean)}
                    />
                    <Label htmlFor="travel" className="text-sm">
                      Enhanced coverage during business travel
                    </Label>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+$35/employee/month</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Plan Summary</h2>
              <p className="text-gray-600">Review your customized group life insurance plan</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Company Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company:</span>
                      <span className="font-medium">{planDetails.companyName || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Industry:</span>
                      <span className="font-medium capitalize">{planDetails.industry || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employees:</span>
                      <span className="font-medium">{planDetails.employeeCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Province:</span>
                      <span className="font-medium">{planDetails.province || 'Not specified'}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Coverage Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage Type:</span>
                      <span className="font-medium capitalize">{planDetails.coverageType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage Amount:</span>
                      <span className="font-medium">${planDetails.coverageAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Waiting Period:</span>
                      <span className="font-medium capitalize">{planDetails.waitingPeriod.replace('days', ' days')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employee Contribution:</span>
                      <span className="font-medium">{planDetails.employeeContribution}%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Cost Estimate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        ${calculateEstimatedCost().toLocaleString()}
                      </div>
                      <p className="text-gray-600 mb-4">Estimated monthly premium</p>
                      <div className="text-sm text-gray-500">
                        <p>Per employee: ${Math.round(calculateEstimatedCost() / planDetails.employeeCount)}/month</p>
                        <p>Annual cost: ${(calculateEstimatedCost() * 12).toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {planDetails.additionalBenefits.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Additional Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {planDetails.additionalBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span className="text-sm capitalize">
                              {benefit.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 pt-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <FileText className="mr-2 h-5 w-5" />
                Generate Proposal
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3" asChild>
                <Link to="/insurance/life/quotes">
                  Get Formal Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/insurance/life/group">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Group Life Insurance
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Group Life Insurance Plan Builder</h1>
            <p className="text-xl text-gray-600">Create a customized life insurance plan for your organization</p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i + 1 <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i + 1 <= currentStep ? <Check className="h-5 w-5" /> : i + 1}
                  </div>
                  {i < totalSteps - 1 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      i + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Company Info</span>
              <span>Coverage Details</span>
              <span>Additional Benefits</span>
              <span>Summary</span>
            </div>
          </div>

          {/* Step Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-6 py-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}