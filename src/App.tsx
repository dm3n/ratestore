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
import EducationCentre from "@/pages/guides/EducationCentre";
import CreditCardsEducation from "@/pages/guides/CreditCardsEducation";
import CreditCardBasics from "@/pages/guides/CreditCardBasics";
import CreditCardTypes from "@/pages/guides/CreditCardTypes";
import RewardsCreditCards from "@/pages/guides/RewardsCreditCards";
import CreditCardInsurance from "@/pages/guides/CreditCardInsurance";

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
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
            </Route>

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
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
