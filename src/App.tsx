
import { BrowserRouter, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import { MainRoutes } from "@/routes/MainRoutes";
import { MortgageRoutes } from "@/routes/MortgageRoutes";
import { CreditCardRoutes } from "@/routes/CreditCardRoutes";
import { BankingRoutes } from "@/routes/BankingRoutes";
import { InvestingRoutes } from "@/routes/InvestingRoutes";
import { InsuranceRoutes } from "@/routes/InsuranceRoutes";
import { GuideRoutes } from "@/routes/GuideRoutes";
import { ToolRoutes } from "@/routes/ToolRoutes";
import { ProtectedRoutes } from "@/routes/ProtectedRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <MainRoutes />
            <MortgageRoutes />
            <CreditCardRoutes />
            <BankingRoutes />
            <InvestingRoutes />
            <InsuranceRoutes />
            <GuideRoutes />
            <ToolRoutes />
            <ProtectedRoutes />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
