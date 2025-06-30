
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
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
import Terms from '@/pages/Terms';
import Disclosure from '@/pages/Disclosure';
import CDRates from '@/pages/CDRates';
import Mortgages from '@/pages/Mortgages';
import Investing from '@/pages/Investing';
import Insurance from '@/pages/Insurance';
import CompoundInterestCalculator from '@/pages/tools/CompoundInterestCalculator';
import DebtPayoffCalculator from '@/pages/tools/DebtPayoffCalculator';
import ROICalculator from '@/pages/tools/ROICalculator';
import RetirementCalculator from '@/pages/tools/RetirementCalculator';
import EmergencyFundCalculator from '@/pages/tools/EmergencyFundCalculator';
import LoanComparisonTool from '@/pages/tools/LoanComparisonTool';
import './App.css';

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
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* Financial Products */}
          <Route path="/mortgages" element={<Mortgages />} />
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclosure" element={<Disclosure />} />
          
          {/* Financial Tools */}
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
