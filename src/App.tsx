
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import SavingsRates from '@/pages/SavingsRates';
import PersonalLoans from '@/pages/PersonalLoans';
import CreditCards from '@/pages/CreditCards';
import About from '@/pages/About';
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
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
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
    </Router>
  );
}

export default App;
