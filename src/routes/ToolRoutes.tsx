
import { Route } from "react-router-dom";
import MortgageCalculator from "@/pages/tools/MortgageCalculator";
import AffordabilityCalculator from "@/pages/tools/AffordabilityCalculator";
import DownPaymentCalculator from "@/pages/tools/DownPaymentCalculator";
import AmortizationSchedule from "@/pages/tools/AmortizationSchedule";
import ExtraPaymentCalculator from "@/pages/tools/ExtraPaymentCalculator";
import RenewalCalculator from "@/pages/tools/RenewalCalculator";
import LandTransferTaxCalculator from "@/pages/tools/LandTransferTaxCalculator";
import TFSACalculator from "@/pages/tools/TFSACalculator";

export const ToolRoutes = () => (
  <>
    <Route path="/tools/mortgage-calculator" element={<MortgageCalculator />} />
    <Route path="/tools/affordability" element={<AffordabilityCalculator />} />
    <Route path="/tools/down-payment" element={<DownPaymentCalculator />} />
    <Route path="/tools/amortization" element={<AmortizationSchedule />} />
    <Route path="/tools/extra-payment" element={<ExtraPaymentCalculator />} />
    <Route path="/tools/renewal" element={<RenewalCalculator />} />
    <Route path="/tools/land-transfer-tax" element={<LandTransferTaxCalculator />} />
    <Route path="/tools/tfsa-calculator" element={<TFSACalculator />} />
  </>
);
