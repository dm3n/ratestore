
import { Route } from "react-router-dom";
import EducationCentre from "@/pages/guides/EducationCentre";
import CreditCardsEducation from "@/pages/guides/CreditCardsEducation";
import CreditCardBasics from "@/pages/guides/CreditCardBasics";
import CreditCardTypes from "@/pages/guides/CreditCardTypes";
import RewardsCreditCards from "@/pages/guides/RewardsCreditCards";
import CreditCardInsurance from "@/pages/guides/CreditCardInsurance";
import HomeBuying from "@/pages/guides/HomeBuying";
import MortgageRenewal from "@/pages/guides/MortgageRenewal";
import Refinancing from "@/pages/guides/Refinancing";
import FirstTimeBuyer from "@/pages/guides/FirstTimeBuyer";
import PrimeRate from "@/pages/guides/PrimeRate";
import VariableVsFixed from "@/pages/guides/VariableVsFixed";
import OvernightRate from "@/pages/guides/OvernightRate";
import SavingsAccountGuide from "@/pages/guides/SavingsAccount";
import GICGuide from "@/pages/guides/GIC";
import TFSAGuide from "@/pages/guides/TFSA";
import RRSPGuide from "@/pages/guides/RRSP";

export const GuideRoutes = () => (
  <>
    <Route path="/guides/education-centre" element={<EducationCentre />} />
    <Route path="/guides/credit-cards" element={<CreditCardsEducation />} />
    <Route path="/guides/credit-card-basics" element={<CreditCardBasics />} />
    <Route path="/guides/credit-card-types" element={<CreditCardTypes />} />
    <Route path="/guides/rewards-credit-cards" element={<RewardsCreditCards />} />
    <Route path="/guides/credit-card-insurance" element={<CreditCardInsurance />} />
    <Route path="/guides/home-buying" element={<HomeBuying />} />
    <Route path="/guides/mortgage-renewal" element={<MortgageRenewal />} />
    <Route path="/guides/refinancing" element={<Refinancing />} />
    <Route path="/guides/first-time-buyer" element={<FirstTimeBuyer />} />
    <Route path="/guides/prime-rate" element={<PrimeRate />} />
    <Route path="/guides/variable-vs-fixed" element={<VariableVsFixed />} />
    <Route path="/guides/overnight-rate" element={<OvernightRate />} />
    <Route path="/guides/savings-account" element={<SavingsAccountGuide />} />
    <Route path="/guides/gic" element={<GICGuide />} />
    <Route path="/guides/tfsa" element={<TFSAGuide />} />
    <Route path="/guides/rrsp" element={<RRSPGuide />} />
  </>
);
