import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import MortgageRates from "@/pages/mortgages/MortgageRates";
import CreditCards from "@/pages/credit-cards/CreditCards";
import Banking from "@/pages/banking/Banking";
import Investing from "@/pages/investing/Investing";
import Insurance from "@/pages/insurance/Insurance";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import Admin from "@/pages/Admin";
import Unauthorized from "@/pages/Unauthorized";
import Missing from "@/pages/Missing";
import Editor from "@/pages/Editor";
import RequireAuth from "@/components/RequireAuth";
import PersistLogin from "@/components/PersistLogin";
import RequireRole from "@/components/RequireRole";
import EditorMortgageRates from "@/pages/EditorMortgageRates";
import EditorCreditCards from "@/pages/EditorCreditCards";
import EditorBanking from "@/pages/EditorBanking";
import EditorInvesting from "@/pages/EditorInvesting";
import EditorInsurance from "@/pages/EditorInsurance";
import NoFee from "@/pages/credit-cards/NoFee";
import Travel from "@/pages/credit-cards/Travel";
import BestCanadian from "@/pages/credit-cards/BestCanadian";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mortgages" element={<MortgageRates />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/investing" element={<Investing />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Missing />} />

            {/* Protected Routes */}
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="/profile" element={<Profile />} />

                <Route element={<RequireRole allowedRoles={['Editor', 'Admin']} />}>
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/editor/mortgage-rates" element={<EditorMortgageRates />} />
                  <Route path="/editor/credit-cards" element={<EditorCreditCards />} />
                  <Route path="/editor/banking" element={<EditorBanking />} />
                  <Route path="/editor/investing" element={<EditorInvesting />} />
                  <Route path="/editor/insurance" element={<EditorInsurance />} />
                </Route>

                <Route element={<RequireRole allowedRoles={['Admin']} />}>
                  <Route path="/admin" element={<Admin />} />
                </Route>
              </Route>
            </Route>

            <Route path="/credit-cards/no-fee" element={<NoFee />} />
            <Route path="/credit-cards/travel" element={<Travel />} />
            <Route path="/credit-cards/best-canadian" element={<BestCanadian />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
