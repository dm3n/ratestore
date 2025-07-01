import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import Admin from '@/pages/Admin';
import Profile from '@/pages/Profile';
import SavingsRates from '@/pages/SavingsRates';
import PersonalLoans from '@/pages/PersonalLoans';
import CreditCards from '@/pages/CreditCards';
import About from '@/pages/About';
import Auth from '@/pages/Auth';
import NotFound from '@/pages/NotFound';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Careers from '@/pages/Careers';
import Privacy from '@/pages/Privacy';
import TermsPage from '@/pages/Terms';
import Disclosure from '@/pages/Disclosure';
import CDRates from '@/pages/CDRates';
import Mortgages from '@/pages/Mortgages';
import Investing from '@/pages/Investing';
import Insurance from '@/pages/Insurance';
import CompareRates from '@/pages/mortgages/CompareRates';
import BestRates from '@/pages/mortgages/BestRates';
import RenewalRates from '@/pages/mortgages/RenewalRates';
import FiveYearFixed from '@/pages/mortgages/FiveYearFixed';
import TwoYearFixed from '@/pages/mortgages/TwoYearFixed';
import ThreeYearFixed from '@/pages/mortgages/ThreeYearFixed';
import ThreeYearVariable from '@/pages/mortgages/ThreeYearVariable';
import FiveYearVariable from '@/pages/mortgages/FiveYearVariable';
import HELOCRates from '@/pages/mortgages/HELOCRates';
import BankRates from '@/pages/mortgages/BankRates';
import Alberta from '@/pages/mortgages/Alberta';
import BC from '@/pages/mortgages/BC';
import Ontario from '@/pages/mortgages/Ontario';
import Quebec from '@/pages/mortgages/Quebec';
import Historical from '@/pages/mortgages/Historical';
import Mortgage from '@/pages/mortgages/Mortgage';
import Refinance from '@/pages/mortgages/Refinance';
import DownPaymentCalculator from '@/pages/tools/DownPaymentCalculator';
import ExtraPaymentCalculator from '@/pages/tools/ExtraPaymentCalculator';
import CompoundInterestCalculator from '@/pages/tools/CompoundInterestCalculator';
import DebtPayoffCalculator from '@/pages/tools/DebtPayoffCalculator';
import ROICalculator from '@/pages/tools/ROICalculator';
import RetirementCalculator from '@/pages/tools/RetirementCalculator';
import EmergencyFundCalculator from '@/pages/tools/EmergencyFundCalculator';
import LoanComparisonTool from '@/pages/tools/LoanComparisonTool';
import AmortizationSchedule from '@/pages/tools/AmortizationSchedule';
import AffordabilityCalculator from '@/pages/tools/AffordabilityCalculator';
import './App.css';
import Terms from '@/pages/mortgages/Terms';
import Compare from '@/pages/mortgages/Compare';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* Financial Products */}
          <Route path="/mortgages" element={<Mortgages />} />
          <Route path="/mortgages/compare" element={<Compare />} />
          <Route path="/mortgages/terms" element={<Terms />} />
          <Route path="/mortgages/compare-rates" element={<CompareRates />} />
          <Route path="/mortgages/best-rates" element={<BestRates />} />
          <Route path="/mortgages/renewal-rates" element={<RenewalRates />} />
          <Route path="/mortgages/5-year-fixed" element={<FiveYearFixed />} />
          <Route path="/mortgages/2-year-fixed" element={<TwoYearFixed />} />
          <Route path="/mortgages/3-year-fixed" element={<ThreeYearFixed />} />
          <Route path="/mortgages/3-year-variable" element={<ThreeYearVariable />} />
          <Route path="/mortgages/5-year-variable" element={<FiveYearVariable />} />
          <Route path="/mortgages/heloc" element={<HELOCRates />} />
          <Route path="/mortgages/bank-rates" element={<BankRates />} />
          <Route path="/mortgages/alberta" element={<Alberta />} />
          <Route path="/mortgages/bc" element={<BC />} />
          <Route path="/mortgages/ontario" element={<Ontario />} />
          <Route path="/mortgages/quebec" element={<Quebec />} />
          <Route path="/mortgages/historical" element={<Historical />} />
          
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/banking" element={<SavingsRates />} />
          <Route path="/savings-rates" element={<SavingsRates />} />
          <Route path="/personal-loans" element={<PersonalLoans />} />
          <Route path="/cd-rates" element={<CDRates />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/insurance" element={<Insurance />} />
          
          {/* Company Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclosure" element={<Disclosure />} />
          
          {/* Financial Tools */}
          <Route path="/mortgage" element={<Mortgage />} />
          <Route path="/refinance" element={<Refinance />} />
          <Route path="/tools/mortgage-calculator" element={<Mortgage />} />
          <Route path="/tools/affordability" element={<AffordabilityCalculator />} />
          <Route path="/tools/down-payment" element={<DownPaymentCalculator />} />
          <Route path="/tools/amortization" element={<AmortizationSchedule />} />
          <Route path="/tools/extra-payment" element={<ExtraPaymentCalculator />} />
          <Route path="/tools/compound-interest" element={<CompoundInterestCalculator />} />
          <Route path="/tools/debt-payoff" element={<DebtPayoffCalculator />} />
          <Route path="/tools/roi-calculator" element={<ROICalculator />} />
          <Route path="/tools/retirement" element={<RetirementCalculator />} />
          <Route path="/tools/emergency-fund" element={<EmergencyFundCalculator />} />
          <Route path="/tools/loan-comparison" element={<LoanComparisonTool />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
