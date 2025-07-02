
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import Mortgages from "@/pages/Mortgages";
import CreditCards from "@/pages/CreditCards";
import Banking from "@/pages/banking/Banking";
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
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
