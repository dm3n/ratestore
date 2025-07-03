
import { Route } from "react-router-dom";
import Compare from "@/pages/mortgages/Compare";
import MortgageTerms from "@/pages/mortgages/Terms";
import BestRates from "@/pages/mortgages/BestRates";
import RenewalRates from "@/pages/mortgages/RenewalRates";
import HELOCRates from "@/pages/mortgages/HELOCRates";
import BankRates from "@/pages/mortgages/BankRates";
import Alberta from "@/pages/mortgages/Alberta";
import BC from "@/pages/mortgages/BC";
import Ontario from "@/pages/mortgages/Ontario";
import Quebec from "@/pages/mortgages/Quebec";
import TwoYearFixed from "@/pages/mortgages/TwoYearFixed";
import ThreeYearFixed from "@/pages/mortgages/ThreeYearFixed";
import FiveYearFixed from "@/pages/mortgages/FiveYearFixed";
import ThreeYearVariable from "@/pages/mortgages/ThreeYearVariable";
import FiveYearVariable from "@/pages/mortgages/FiveYearVariable";
import Historical from "@/pages/mortgages/Historical";
import Lenders from "@/pages/mortgages/Lenders";
import Brokers from "@/pages/mortgages/Brokers";

export const MortgageRoutes = () => (
  <>
    <Route path="/mortgages/compare" element={<Compare />} />
    <Route path="/mortgages/terms" element={<MortgageTerms />} />
    <Route path="/mortgages/best-rates" element={<BestRates />} />
    <Route path="/mortgages/renewal-rates" element={<RenewalRates />} />
    <Route path="/mortgages/heloc" element={<HELOCRates />} />
    <Route path="/mortgages/bank-rates" element={<BankRates />} />
    <Route path="/mortgages/alberta" element={<Alberta />} />
    <Route path="/mortgages/bc" element={<BC />} />
    <Route path="/mortgages/ontario" element={<Ontario />} />
    <Route path="/mortgages/quebec" element={<Quebec />} />
    <Route path="/mortgages/2-year-fixed" element={<TwoYearFixed />} />
    <Route path="/mortgages/3-year-fixed" element={<ThreeYearFixed />} />
    <Route path="/mortgages/5-year-fixed" element={<FiveYearFixed />} />
    <Route path="/mortgages/3-year-variable" element={<ThreeYearVariable />} />
    <Route path="/mortgages/5-year-variable" element={<FiveYearVariable />} />
    <Route path="/mortgages/historical" element={<Historical />} />
    <Route path="/mortgages/lenders" element={<Lenders />} />
    <Route path="/mortgages/brokers" element={<Brokers />} />
  </>
);
