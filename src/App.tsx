import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ChatbotTrigger } from "./components/ChatbotTrigger";

// Main pages
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AuthPage from "./pages/Auth";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Banking pages
import Banking from "./pages/Banking";
import BestSavings from "./pages/banking/BestSavings";
import BestChequing from "./pages/banking/BestChequing";
import Awards from "./pages/banking/Awards";
import HighInterestSavings from "./pages/banking/savings/HighInterest";
import TFSASavings from "./pages/banking/savings/TFSA";
import RRSPSavings from "./pages/banking/savings/RRSP";
import YouthSavings from "./pages/banking/savings/Youth";
import FirstHomeSavings from "./pages/banking/savings/FirstHome";
import RESPSavings from "./pages/banking/savings/RESP";
import CompareSavings from "./pages/banking/savings/Compare";
import CompareChequing from "./pages/banking/chequing/Compare";
import PersonalChequing from "./pages/banking/chequing/Personal";
import StudentChequing from "./pages/banking/chequing/Student";
import YouthChequing from "./pages/banking/chequing/Youth";
import SeniorChequing from "./pages/banking/chequing/Senior";
import NewcomerChequing from "./pages/banking/chequing/Newcomer";

// Credit Cards pages
import CreditCards from "./pages/CreditCards";
import CardFinder from "./pages/CardFinder";
import BestOverall from "./pages/credit-cards/BestOverall";
import Promotions from "./pages/credit-cards/Promotions";
import CreditCardAwards from "./pages/credit-cards/Awards";
import Aeroplan from "./pages/credit-cards/Aeroplan";
import CashBack from "./pages/credit-cards/CashBack";
import Grocery from "./pages/credit-cards/Grocery";
import Rewards from "./pages/credit-cards/Rewards";
import Store from "./pages/credit-cards/Store";
import Travel from "./pages/credit-cards/Travel";
import Dining from "./pages/credit-cards/Dining";
import Gas from "./pages/credit-cards/Gas";
import BalanceTransfer from "./pages/credit-cards/BalanceTransfer";
import Business from "./pages/credit-cards/Business";
import InstantApproval from "./pages/credit-cards/InstantApproval";
import LowInterest from "./pages/credit-cards/LowInterest";
import Newcomers from "./pages/credit-cards/Newcomers";
import NoFee from "./pages/credit-cards/NoFee";
import NoFXFee from "./pages/credit-cards/NoFXFee";
import Secured from "./pages/credit-cards/Secured";
import Student from "./pages/credit-cards/Student";
import TravelInsurance from "./pages/credit-cards/TravelInsurance";
import Amex from "./pages/credit-cards/Amex";
import BMO from "./pages/credit-cards/BMO";
import CIBC from "./pages/credit-cards/CIBC";
import Mastercard from "./pages/credit-cards/Mastercard";
import MBNA from "./pages/credit-cards/MBNA";
import NationalBank from "./pages/credit-cards/NationalBank";
import PCFinancial from "./pages/credit-cards/PCFinancial";
import RBC from "./pages/credit-cards/RBC";
import Scotiabank from "./pages/credit-cards/Scotiabank";
import TD from "./pages/credit-cards/TD";
import Tangerine from "./pages/credit-cards/Tangerine";
import Visa from "./pages/credit-cards/Visa";

// Mortgages pages
import Mortgages from "./pages/Mortgages";
import BestRates from "./pages/mortgages/BestRates";
import RenewalRates from "./pages/mortgages/RenewalRates";
import HELOCRates from "./pages/mortgages/HELOCRates";
import BankRates from "./pages/mortgages/BankRates";
import Alberta from "./pages/mortgages/Alberta";
import BC from "./pages/mortgages/BC";
import Ontario from "./pages/mortgages/Ontario";
import Quebec from "./pages/mortgages/Quebec";
import TwoYearFixed from "./pages/mortgages/TwoYearFixed";
import ThreeYearFixed from "./pages/mortgages/ThreeYearFixed";
import FiveYearFixed from "./pages/mortgages/FiveYearFixed";
import ThreeYearVariable from "./pages/mortgages/ThreeYearVariable";
import FiveYearVariable from "./pages/mortgages/FiveYearVariable";
import Historical from "./pages/mortgages/Historical";
import Terms from "./pages/mortgages/Terms";
import Lenders from "./pages/mortgages/Lenders";
import Brokers from "./pages/mortgages/Brokers";
import Compare from "./pages/mortgages/Compare";

// Investing pages
import Investing from "./pages/Investing";
import BestGIC from "./pages/investing/gic/Best";
import OneYearGIC from "./pages/investing/gic/OneYear";
import FiveYearGIC from "./pages/investing/gic/FiveYear";
import TFSAGIC from "./pages/investing/gic/TFSA";
import RegisteredGIC from "./pages/investing/gic/Registered";
import USDGIC from "./pages/investing/gic/USD";
import CompareGIC from "./pages/investing/gic/Compare";
import BestRESP from "./pages/investing/resp/Best";

// Stocks & ETFs pages
import RoboAdvisors from "./pages/investing/RoboAdvisors";
import Brokerages from "./pages/investing/Brokerages";
import Crypto from "./pages/investing/Crypto";

// Insurance pages
import Insurance from "./pages/Insurance";
// Auto Insurance
import AutoInsuranceQuotes from "./pages/insurance/auto/Quotes";
import AutoInsuranceTypes from "./pages/insurance/auto/Types";
import AutoInsuranceRegions from "./pages/insurance/auto/Regions";
import MotorcycleInsurance from "./pages/insurance/auto/Motorcycle";
import OntarioAutoInsurance from "./pages/insurance/auto/Ontario";
import AlbertaAutoInsurance from "./pages/insurance/auto/Alberta";
import QuebecAutoInsurance from "./pages/insurance/auto/Quebec";
import TorontoAutoInsurance from "./pages/insurance/auto/Toronto";
import CalgaryAutoInsurance from "./pages/insurance/auto/Calgary";
import MontrealAutoInsurance from "./pages/insurance/auto/Montreal";
// Home Insurance
import HomeInsuranceQuotes from "./pages/insurance/home/Quotes";
import HomeInsuranceTypes from "./pages/insurance/home/Types";
import HomeInsuranceRegions from "./pages/insurance/home/Regions";
import TenantInsurance from "./pages/insurance/home/Tenant";
import CondoInsurance from "./pages/insurance/home/Condo";
import LandlordInsurance from "./pages/insurance/home/Landlord";
import OntarioHomeInsurance from "./pages/insurance/home/Ontario";
import AlbertaHomeInsurance from "./pages/insurance/home/Alberta";
import BCHomeInsurance from "./pages/insurance/home/BC";
import QuebecHomeInsurance from "./pages/insurance/home/Quebec";
// Life Insurance
import LifeInsuranceQuotes from "./pages/insurance/life/Quotes";
import LifeInsuranceTypes from "./pages/insurance/life/Types";
import TermLifeInsurance from "./pages/insurance/life/Term";
import PermanentLifeInsurance from "./pages/insurance/life/Permanent";
import DisabilityInsurance from "./pages/insurance/life/Disability";
import CriticalIllnessInsurance from "./pages/insurance/life/CriticalIllness";
import GroupInsurance from "./pages/insurance/life/Group";
// Travel Insurance
import TravelInsuranceQuotes from "./pages/insurance/travel/Quotes";
import TravelInsuranceTypes from "./pages/insurance/travel/Types";
import TravelMedicalInsurance from "@/pages/insurance/travel/Medical";
import MultiTripInsurance from "@/pages/insurance/travel/MultiTrip";
import TripCancellationInsurance from "@/pages/insurance/travel/Cancellation";
import SeniorTravelInsurance from "@/pages/insurance/travel/Senior";
// Business Insurance
import BusinessInsurance from "./pages/insurance/Business";
import BusinessInsuranceQuotes from "./pages/insurance/business/Quotes";
import General from "./pages/insurance/business/General";
import Professional from "./pages/insurance/business/Professional";
import Property from "./pages/insurance/business/Property";
import CyberInsurance from "./pages/insurance/business/Cyber";
import DO from "./pages/insurance/business/DO";

// Tools pages
import CompoundInterestCalculator from "./pages/tools/CompoundInterestCalculator";
import TFSACalculator from "./pages/tools/TFSACalculator";
import MortgageCalculator from "./pages/tools/MortgageCalculator";
import AffordabilityCalculator from "./pages/tools/AffordabilityCalculator";
import DownPaymentCalculator from "./pages/tools/DownPaymentCalculator";
import AmortizationSchedule from "./pages/tools/AmortizationSchedule";
import ExtraPaymentCalculator from "./pages/tools/ExtraPaymentCalculator";
import RenewalCalculator from "./pages/tools/RenewalCalculator";
import LandTransferTaxCalculator from "./pages/tools/LandTransferTaxCalculator";
import RetirementCalculator from "./pages/tools/RetirementCalculator";
import EmergencyFundCalculator from "./pages/tools/EmergencyFundCalculator";
import DebtPayoffCalculator from "./pages/tools/DebtPayoffCalculator";
import ROICalculator from "./pages/tools/ROICalculator";
import LoanComparisonTool from "./pages/tools/LoanComparisonTool";
import CalculatorsHub from "./pages/tools/CalculatorsHub";

// Guide pages
import EducationCentre from "./pages/guides/EducationCentre";
import GICGuide from "./pages/guides/GIC";
import RRSPGuide from "./pages/guides/RRSP";
import RRSPContributionGuide from "./pages/guides/RRSPContribution";
import TFSAGuide from "./pages/guides/TFSA";
import HomeBuying from "./pages/guides/HomeBuying";
import MortgageRenewal from "./pages/guides/MortgageRenewal";
import Refinancing from "./pages/guides/Refinancing";
import FirstTimeBuyer from "./pages/guides/FirstTimeBuyer";
import PrimeRate from "./pages/guides/PrimeRate";
import VariableVsFixed from "./pages/guides/VariableVsFixed";
import OvernightRate from "./pages/guides/OvernightRate";
import CreditCardsEducation from "./pages/guides/CreditCardsEducation";
import CreditCardBasics from "./pages/guides/CreditCardBasics";
import CreditCardTypes from "./pages/guides/CreditCardTypes";
import RewardsCreditCards from "./pages/guides/RewardsCreditCards";
import CreditCardInsurance from "./pages/guides/CreditCardInsurance";
import SavingsAccount from "./pages/guides/SavingsAccount";
import TieredSavings from "./pages/guides/TieredSavings";
import SavingsAlternatives from "./pages/guides/SavingsAlternatives";

// Other pages
import Refinance from "./pages/Refinance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
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
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            {/* Banking routes */}
            <Route path="/banking" element={<Banking />} />
            <Route path="/banking/best-savings" element={<BestSavings />} />
            <Route path="/banking/best-chequing" element={<BestChequing />} />
            <Route path="/banking/awards" element={<Awards />} />
            <Route path="/banking/savings/high-interest" element={<HighInterestSavings />} />
            <Route path="/banking/savings/tfsa" element={<TFSASavings />} />
            <Route path="/banking/savings/rrsp" element={<RRSPSavings />} />
            <Route path="/banking/savings/youth" element={<YouthSavings />} />
            <Route path="/banking/savings/first-home" element={<FirstHomeSavings />} />
            <Route path="/banking/savings/resp" element={<RESPSavings />} />
            <Route path="/banking/savings/compare" element={<CompareSavings />} />
            <Route path="/banking/chequing/compare" element={<CompareChequing />} />
            <Route path="/banking/chequing/personal" element={<PersonalChequing />} />
            <Route path="/banking/chequing/student" element={<StudentChequing />} />
            <Route path="/banking/chequing/youth" element={<YouthChequing />} />
            <Route path="/banking/chequing/senior" element={<SeniorChequing />} />
            <Route path="/banking/chequing/newcomer" element={<NewcomerChequing />} />
            
            {/* Credit Cards routes */}
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/card-finder" element={<CardFinder />} />
            <Route path="/credit-cards/best-overall" element={<BestOverall />} />
            <Route path="/credit-cards/promotions" element={<Promotions />} />
            <Route path="/credit-cards/awards" element={<CreditCardAwards />} />
            <Route path="/credit-cards/aeroplan" element={<Aeroplan />} />
            <Route path="/credit-cards/cash-back" element={<CashBack />} />
            <Route path="/credit-cards/grocery" element={<Grocery />} />
            <Route path="/credit-cards/rewards" element={<Rewards />} />
            <Route path="/credit-cards/store" element={<Store />} />
            <Route path="/credit-cards/travel" element={<Travel />} />
            <Route path="/credit-cards/dining" element={<Dining />} />
            <Route path="/credit-cards/gas" element={<Gas />} />
            <Route path="/credit-cards/balance-transfer" element={<BalanceTransfer />} />
            <Route path="/credit-cards/business" element={<Business />} />
            <Route path="/credit-cards/instant-approval" element={<InstantApproval />} />
            <Route path="/credit-cards/low-interest" element={<LowInterest />} />
            <Route path="/credit-cards/newcomers" element={<Newcomers />} />
            <Route path="/credit-cards/no-fee" element={<NoFee />} />
            <Route path="/credit-cards/no-fx-fee" element={<NoFXFee />} />
            <Route path="/credit-cards/secured" element={<Secured />} />
            <Route path="/credit-cards/student" element={<Student />} />
            <Route path="/credit-cards/travel-insurance" element={<TravelInsurance />} />
            <Route path="/credit-cards/amex" element={<Amex />} />
            <Route path="/credit-cards/bmo" element={<BMO />} />
            <Route path="/credit-cards/cibc" element={<CIBC />} />
            <Route path="/credit-cards/mastercard" element={<Mastercard />} />
            <Route path="/credit-cards/mbna" element={<MBNA />} />
            <Route path="/credit-cards/national-bank" element={<NationalBank />} />
            <Route path="/credit-cards/pc-financial" element={<PCFinancial />} />
            <Route path="/credit-cards/rbc" element={<RBC />} />
            <Route path="/credit-cards/scotiabank" element={<Scotiabank />} />
            <Route path="/credit-cards/tangerine" element={<Tangerine />} />
            <Route path="/credit-cards/td" element={<TD />} />
            <Route path="/credit-cards/visa" element={<Visa />} />
            
            {/* Mortgages routes */}
            <Route path="/mortgages" element={<Mortgages />} />
            <Route path="/mortgages/best-rates" element={<BestRates />} />
            <Route path="/mortgages/renewal-rates" element={<RenewalRates />} />
            <Route path="/mortgages/heloc-rates" element={<HELOCRates />} />
            <Route path="/mortgages/bank-rates" element={<BankRates />} />
            <Route path="/mortgages/alberta" element={<Alberta />} />
            <Route path="/mortgages/bc" element={<BC />} />
            <Route path="/mortgages/ontario" element={<Ontario />} />
            <Route path="/mortgages/quebec" element={<Quebec />} />
            <Route path="/mortgages/two-year-fixed" element={<TwoYearFixed />} />
            <Route path="/mortgages/three-year-fixed" element={<ThreeYearFixed />} />
            <Route path="/mortgages/five-year-fixed" element={<FiveYearFixed />} />
            <Route path="/mortgages/three-year-variable" element={<ThreeYearVariable />} />
            <Route path="/mortgages/five-year-variable" element={<FiveYearVariable />} />
            <Route path="/mortgages/historical" element={<Historical />} />
            <Route path="/mortgages/terms" element={<Terms />} />
            <Route path="/mortgages/lenders" element={<Lenders />} />
            <Route path="/mortgages/brokers" element={<Brokers />} />
            <Route path="/mortgages/compare" element={<Compare />} />
            
            {/* Investing routes */}
            <Route path="/investing" element={<Investing />} />
            <Route path="/investing/gic/best" element={<BestGIC />} />
            <Route path="/investing/gic/1-year" element={<OneYearGIC />} />
            <Route path="/investing/gic/5-year" element={<FiveYearGIC />} />
            <Route path="/investing/gic/tfsa" element={<TFSAGIC />} />
            <Route path="/investing/gic/registered" element={<RegisteredGIC />} />
            <Route path="/investing/gic/usd" element={<USDGIC />} />
            <Route path="/investing/gic/compare" element={<CompareGIC />} />
            <Route path="/investing/resp/best" element={<BestRESP />} />
            
            {/* Stocks & ETFs routes */}
            <Route path="/investing/robo-advisors" element={<RoboAdvisors />} />
            <Route path="/investing/brokerages" element={<Brokerages />} />
            <Route path="/investing/crypto" element={<Crypto />} />
            
            {/* Insurance routes */}
            <Route path="/insurance" element={<Insurance />} />
            
            {/* Auto Insurance routes */}
            <Route path="/insurance/auto" element={<AutoInsuranceTypes />} />
            <Route path="/insurance/auto/quotes" element={<AutoInsuranceQuotes />} />
            <Route path="/insurance/auto/types" element={<AutoInsuranceTypes />} />
            <Route path="/insurance/auto/regions" element={<AutoInsuranceRegions />} />
            <Route path="/insurance/auto/motorcycle" element={<MotorcycleInsurance />} />
            <Route path="/insurance/auto/ontario" element={<OntarioAutoInsurance />} />
            <Route path="/insurance/auto/alberta" element={<AlbertaAutoInsurance />} />
            <Route path="/insurance/auto/quebec" element={<QuebecAutoInsurance />} />
            <Route path="/insurance/auto/toronto" element={<TorontoAutoInsurance />} />
            <Route path="/insurance/auto/calgary" element={<CalgaryAutoInsurance />} />
            <Route path="/insurance/auto/montreal" element={<MontrealAutoInsurance />} />
            
            {/* Home Insurance routes */}
            <Route path="/insurance/home" element={<HomeInsuranceTypes />} />
            <Route path="/insurance/home/quotes" element={<HomeInsuranceQuotes />} />
            <Route path="/insurance/home/types" element={<HomeInsuranceTypes />} />
            <Route path="/insurance/home/regions" element={<HomeInsuranceRegions />} />
            <Route path="/insurance/home/tenant" element={<TenantInsurance />} />
            <Route path="/insurance/home/condo" element={<CondoInsurance />} />
            <Route path="/insurance/home/landlord" element={<LandlordInsurance />} />
            <Route path="/insurance/home/ontario" element={<OntarioHomeInsurance />} />
            <Route path="/insurance/home/alberta" element={<AlbertaHomeInsurance />} />
            <Route path="/insurance/home/bc" element={<BCHomeInsurance />} />
            <Route path="/insurance/home/quebec" element={<QuebecHomeInsurance />} />
            
            {/* Life Insurance routes */}
            <Route path="/insurance/life" element={<LifeInsuranceTypes />} />
            <Route path="/insurance/life/quotes" element={<LifeInsuranceQuotes />} />
            <Route path="/insurance/life/types" element={<LifeInsuranceTypes />} />
            <Route path="/insurance/life/term" element={<TermLifeInsurance />} />
            <Route path="/insurance/life/permanent" element={<PermanentLifeInsurance />} />
            <Route path="/insurance/life/disability" element={<DisabilityInsurance />} />
            <Route path="/insurance/life/critical-illness" element={<CriticalIllnessInsurance />} />
            <Route path="/insurance/life/group" element={<GroupInsurance />} />
            
            {/* Travel Insurance routes */}
            <Route path="/insurance/travel" element={<TravelInsuranceTypes />} />
            <Route path="/insurance/travel/quotes" element={<TravelInsuranceQuotes />} />
            <Route path="/insurance/travel/types" element={<TravelInsuranceTypes />} />
            <Route path="/insurance/travel/medical" element={<TravelMedicalInsurance />} />
            <Route path="/insurance/travel/multi-trip" element={<MultiTripInsurance />} />
            <Route path="/insurance/travel/cancellation" element={<TripCancellationInsurance />} />
            <Route path="/insurance/travel/senior" element={<SeniorTravelInsurance />} />
            
            {/* Business Insurance routes */}
            <Route path="/insurance/business" element={<BusinessInsurance />} />
            <Route path="/insurance/business/quotes" element={<BusinessInsuranceQuotes />} />
            <Route path="/insurance/business/general" element={<General />} />
            <Route path="/insurance/business/professional" element={<Professional />} />
            <Route path="/insurance/business/property" element={<Property />} />
            <Route path="/insurance/business/cyber" element={<CyberInsurance />} />
            <Route path="/insurance/business/do" element={<DO />} />
            
            {/* Tools routes */}
            <Route path="/tools/compound-interest" element={<CompoundInterestCalculator />} />
            <Route path="/tools/tfsa-calculator" element={<TFSACalculator />} />
            <Route path="/tools/mortgage-calculator" element={<MortgageCalculator />} />
            <Route path="/tools/affordability-calculator" element={<AffordabilityCalculator />} />
            <Route path="/tools/down-payment-calculator" element={<DownPaymentCalculator />} />
            <Route path="/tools/amortization-schedule" element={<AmortizationSchedule />} />
            <Route path="/tools/extra-payment-calculator" element={<ExtraPaymentCalculator />} />
            <Route path="/tools/renewal-calculator" element={<RenewalCalculator />} />
            <Route path="/tools/land-transfer-tax-calculator" element={<LandTransferTaxCalculator />} />
            <Route path="/tools/retirement-calculator" element={<RetirementCalculator />} />
            <Route path="/tools/emergency-fund-calculator" element={<EmergencyFundCalculator />} />
            <Route path="/tools/debt-payoff-calculator" element={<DebtPayoffCalculator />} />
            <Route path="/tools/roi-calculator" element={<ROICalculator />} />
            <Route path="/tools/loan-comparison-tool" element={<LoanComparisonTool />} />
            <Route path="/tools/calculators" element={<CalculatorsHub />} />
            
            {/* Guide routes */}
            <Route path="/guides/education-centre" element={<EducationCentre />} />
            <Route path="/guides/gic" element={<GICGuide />} />
            <Route path="/guides/gic-types" element={<GICGuide />} />
            <Route path="/guides/rrsp" element={<RRSPGuide />} />
            <Route path="/guides/rrsp-contribution" element={<RRSPContributionGuide />} />
            <Route path="/guides/rrsp-withdrawals" element={<RRSPGuide />} />
            <Route path="/guides/tfsa" element={<TFSAGuide />} />
            <Route path="/guides/tfsa-contributions" element={<TFSAGuide />} />
            <Route path="/guides/tfsa-investments" element={<TFSAGuide />} />
            <Route path="/guides/resp-basics" element={<RRSPGuide />} />
            <Route path="/guides/resp" element={<RRSPGuide />} />
            <Route path="/guides/resp-contributions" element={<RRSPGuide />} />
            <Route path="/guides/resp-limit" element={<RRSPGuide />} />
            <Route path="/guides/home-buying" element={<HomeBuying />} />
            <Route path="/guides/mortgage-renewal" element={<MortgageRenewal />} />
            <Route path="/guides/refinancing" element={<Refinancing />} />
            <Route path="/guides/first-time-buyer" element={<FirstTimeBuyer />} />
            <Route path="/guides/prime-rate" element={<PrimeRate />} />
            <Route path="/guides/variable-vs-fixed" element={<VariableVsFixed />} />
            <Route path="/guides/overnight-rate" element={<OvernightRate />} />
            <Route path="/guides/credit-cards-education" element={<CreditCardsEducation />} />
            <Route path="/guides/credit-card-basics" element={<CreditCardBasics />} />
            <Route path="/guides/credit-card-types" element={<CreditCardTypes />} />
            <Route path="/guides/rewards-credit-cards" element={<RewardsCreditCards />} />
            <Route path="/guides/credit-card-insurance" element={<CreditCardInsurance />} />
            <Route path="/guides/credit-score" element={<CreditCardBasics />} />
            <Route path="/guides/savings-account" element={<SavingsAccount />} />
            <Route path="/guides/tiered-savings" element={<TieredSavings />} />
            <Route path="/guides/savings-alternatives" element={<SavingsAlternatives />} />
            <Route path="/guides/chequing-basics" element={<SavingsAccount />} />
            <Route path="/guides/chequing-types" element={<SavingsAccount />} />
            <Route path="/guides/chequing-fees" element={<SavingsAccount />} />
            
            {/* Other routes */}
            <Route path="/refinance" element={<Refinance />} />
          </Routes>
          <ChatbotTrigger />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
