
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Mortgage from '@/pages/Mortgage';
import Refinance from '@/pages/Refinance';
import Rates from '@/pages/Rates';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import AffordabilityCalculator from '@/pages/tools/AffordabilityCalculator';
import DownPaymentCalculator from '@/pages/tools/DownPaymentCalculator';
import AmortizationSchedule from '@/pages/tools/AmortizationSchedule';
import ExtraPaymentCalculator from '@/pages/tools/ExtraPaymentCalculator';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mortgage" element={<Mortgage />} />
        <Route path="/refinance" element={<Refinance />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools/affordability" element={<AffordabilityCalculator />} />
        <Route path="/tools/down-payment" element={<DownPaymentCalculator />} />
        <Route path="/tools/amortization" element={<AmortizationSchedule />} />
        <Route path="/tools/extra-payment" element={<ExtraPaymentCalculator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
