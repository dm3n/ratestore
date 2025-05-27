
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import SavingsRates from '@/pages/SavingsRates';
import PersonalLoans from '@/pages/PersonalLoans';
import CreditCards from '@/pages/CreditCards';
import About from '@/pages/About';
import Auth from '@/pages/Auth';
import NotFound from '@/pages/NotFound';
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
          <Route path="/savings-rates" element={<SavingsRates />} />
          <Route path="/personal-loans" element={<PersonalLoans />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/about" element={<About />} />
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
