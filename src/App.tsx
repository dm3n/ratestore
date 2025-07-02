
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import Mortgages from "@/pages/Mortgages";
import CreditCards from "@/pages/CreditCards";
import CardFinder from "@/pages/CardFinder";
import Banking from "@/pages/Banking";
import Investing from "@/pages/Investing";
import Insurance from "@/pages/Insurance";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Auth from "@/pages/Auth";
import Profile from "@/pages/Profile";
import Admin from "@/pages/Admin";
import Unauthorized from "@/pages/Unauthorized";
import NotFound from "@/pages/NotFound";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// New pages that need to be created
import Blog from "@/pages/Blog";
import Privacy from "@/pages/Privacy";
import TermsOfUse from "@/pages/Terms";
import Disclosure from "@/pages/Disclosure";
import Careers from "@/pages/Careers";

// Credit Card Category Routes
import NoFee from "@/pages/credit-cards/NoFee";
import Travel from "@/pages/credit-cards/Travel";
import BestCanadian from "@/pages/credit-cards/BestCanadian";
import CashBack from "@/pages/credit-cards/CashBack";
import BalanceTransfer from "@/pages/credit-cards/BalanceTransfer";
import Business from "@/pages/credit-cards/Business";
import InstantApproval from "@/pages/credit-cards/InstantApproval";
import LowInterest from "@/pages/credit-cards/LowInterest";
import Newcomers from "@/pages/credit-cards/Newcomers";
import NoFXFee from "@/pages/credit-cards/NoFXFee";
import Secured from "@/pages/credit-cards/Secured";
import Student from "@/pages/credit-cards/Student";
import TravelInsurance from "@/pages/credit-cards/TravelInsurance";
import Gas from "@/pages/credit-cards/Gas";
import Grocery from "@/pages/credit-cards/Grocery";
import Rewards from "@/pages/credit-cards/Rewards";
import Store from "@/pages/credit-cards/Store";
import Aeroplan from "@/pages/credit-cards/Aeroplan";

// Bank & Network Routes
import Amex from "@/pages/credit-cards/Amex";
import BMO from "@/pages/credit-cards/BMO";
import CIBC from "@/pages/credit-cards/CIBC";
import Mastercard from "@/pages/credit-cards/Mastercard";
import MBNA from "@/pages/credit-cards/MBNA";
import NationalBank from "@/pages/credit-cards/NationalBank";
import PCFinancial from "@/pages/credit-cards/PCFinancial";
import RBC from "@/pages/credit-cards/RBC";
import Scotiabank from "@/pages/credit-cards/Scotiabank";
import Tangerine from "@/pages/credit-cards/Tangerine";
import TD from "@/pages/credit-cards/TD";
import Visa from "@/pages/credit-cards/Visa";

// Education Centre Routes
import EducationCentre from "@/pages/guides/EducationCentre";
import CreditCardsEducation from "@/pages/guides/CreditCardsEducation";
import CreditCardBasics from "@/pages/guides/CreditCardBasics";
import CreditCardTypes from "@/pages/guides/CreditCardTypes";
import RewardsCreditCards from "@/pages/guides/RewardsCreditCards";
import CreditCardInsurance from "@/pages/guides/CreditCardInsurance";

// Mortgage pages
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

// Tools pages
import MortgageCalculator from "@/pages/tools/MortgageCalculator";
import AffordabilityCalculator from "@/pages/tools/AffordabilityCalculator";
import DownPaymentCalculator from "@/pages/tools/DownPaymentCalculator";
import AmortizationSchedule from "@/pages/tools/AmortizationSchedule";
import ExtraPaymentCalculator from "@/pages/tools/ExtraPaymentCalculator";
import RenewalCalculator from "@/pages/tools/RenewalCalculator";
import LandTransferTaxCalculator from "@/pages/tools/LandTransferTaxCalculator";

// Guide pages
import HomeBuying from "@/pages/guides/HomeBuying";
import MortgageRenewal from "@/pages/guides/MortgageRenewal";
import Refinancing from "@/pages/guides/Refinancing";
import FirstTimeBuyer from "@/pages/guides/FirstTimeBuyer";
import PrimeRate from "@/pages/guides/PrimeRate";
import VariableVsFixed from "@/pages/guides/VariableVsFixed";
import OvernightRate from "@/pages/guides/OvernightRate";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mortgages" element={<Mortgages />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/card-finder" element={<CardFinder />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/investing" element={<Investing />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
            </Route>

            {/* Mortgage Routes */}
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

            {/* Tools Routes */}
            <Route path="/tools/mortgage-calculator" element={<MortgageCalculator />} />
            <Route path="/tools/affordability" element={<AffordabilityCalculator />} />
            <Route path="/tools/down-payment" element={<DownPaymentCalculator />} />
            <Route path="/tools/amortization" element={<AmortizationSchedule />} />
            <Route path="/tools/extra-payment" element={<ExtraPaymentCalculator />} />
            <Route path="/tools/renewal" element={<RenewalCalculator />} />
            <Route path="/tools/land-transfer-tax" element={<LandTransferTaxCalculator />} />

            {/* Guide Routes */}
            <Route path="/guides/home-buying" element={<HomeBuying />} />
            <Route path="/guides/mortgage-renewal" element={<MortgageRenewal />} />
            <Route path="/guides/refinancing" element={<Refinancing />} />
            <Route path="/guides/first-time-buyer" element={<FirstTimeBuyer />} />
            <Route path="/guides/prime-rate" element={<PrimeRate />} />
            <Route path="/guides/variable-vs-fixed" element={<VariableVsFixed />} />
            <Route path="/guides/overnight-rate" element={<OvernightRate />} />

            {/* Credit Card Category Routes */}
            <Route path="/credit-cards/no-fee" element={<NoFee />} />
            <Route path="/credit-cards/travel" element={<Travel />} />
            <Route path="/credit-cards/best-canadian" element={<BestCanadian />} />
            <Route path="/credit-cards/cash-back" element={<CashBack />} />
            <Route path="/credit-cards/balance-transfer" element={<BalanceTransfer />} />
            <Route path="/credit-cards/business" element={<Business />} />
            <Route path="/credit-cards/instant-approval" element={<InstantApproval />} />
            <Route path="/credit-cards/low-interest" element={<LowInterest />} />
            <Route path="/credit-cards/newcomers" element={<Newcomers />} />
            <Route path="/credit-cards/no-fx-fee" element={<NoFXFee />} />
            <Route path="/credit-cards/secured" element={<Secured />} />
            <Route path="/credit-cards/student" element={<Student />} />
            <Route path="/credit-cards/travel-insurance" element={<TravelInsurance />} />

            {/* Bank & Network Routes */}
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

            {/* Education Centre Routes */}
            <Route path="/guides/education-centre" element={<EducationCentre />} />
            <Route path="/guides/credit-cards" element={<CreditCardsEducation />} />
            <Route path="/guides/credit-card-basics" element={<CreditCardBasics />} />
            <Route path="/guides/credit-card-types" element={<CreditCardTypes />} />
            <Route path="/guides/rewards-credit-cards" element={<RewardsCreditCards />} />
            <Route path="/guides/credit-card-insurance" element={<CreditCardInsurance />} />

            {/* Additional Credit Card Routes from Navigation */}
            <Route path="/credit-cards/aeroplan" element={<Aeroplan />} />
            <Route path="/credit-cards/grocery" element={<Grocery />} />
            <Route path="/credit-cards/rewards" element={<Rewards />} />
            <Route path="/credit-cards/store" element={<Store />} />
            <Route path="/credit-cards/gas" element={<Gas />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
