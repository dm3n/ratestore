
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";

// Main pages
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/Auth";

// Banking pages
import Banking from "./pages/Banking";
import BestSavings from "./pages/banking/BestSavings";
import BestChequing from "./pages/banking/BestChequing";
import HighInterestSavings from "./pages/banking/savings/HighInterestSavings";
import TFSASavings from "./pages/banking/savings/TFSASavings";
import RRSPSavings from "./pages/banking/savings/RRSPSavings";

// Credit Cards pages
import CreditCards from "./pages/CreditCards";
import CardFinder from "./pages/CardFinder";

// Mortgages pages
import Mortgages from "./pages/Mortgages";

// Investing pages
import Investing from "./pages/Investing";
import BestGIC from "./pages/investing/gic/Best";
import OneYearGIC from "./pages/investing/gic/OneYear";
import FiveYearGIC from "./pages/investing/gic/FiveYear";
import TFSAGIC from "./pages/investing/gic/TFSA";
import RegisteredGIC from "./pages/investing/gic/Registered";
import USDGIC from "./pages/investing/gic/USD";
import CompareGIC from "./pages/investing/gic/Compare";

// Insurance pages
import Insurance from "./pages/Insurance";

// Tools pages
import CompoundInterestCalculator from "./pages/tools/CompoundInterestCalculator";
import TFSACalculator from "./pages/tools/TFSACalculator";

// Guide pages
import EducationCentre from "./pages/guides/EducationCentre";
import GICGuide from "./pages/guides/GIC";
import RRSPGuide from "./pages/guides/RRSP";
import RRSPContributionGuide from "./pages/guides/RRSPContribution";
import TFSAGuide from "./pages/guides/TFSA";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AuthProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<AuthPage />} />
              
              {/* Banking routes */}
              <Route path="/banking" element={<Banking />} />
              <Route path="/banking/best-savings" element={<BestSavings />} />
              <Route path="/banking/best-chequing" element={<BestChequing />} />
              <Route path="/banking/savings/high-interest" element={<HighInterestSavings />} />
              <Route path="/banking/savings/tfsa" element={<TFSASavings />} />
              <Route path="/banking/savings/rrsp" element={<RRSPSavings />} />
              
              {/* Credit Cards routes */}
              <Route path="/credit-cards" element={<CreditCards />} />
              <Route path="/card-finder" element={<CardFinder />} />
              
              {/* Mortgages routes */}
              <Route path="/mortgages" element={<Mortgages />} />
              
              {/* Investing routes */}
              <Route path="/investing" element={<Investing />} />
              <Route path="/investing/gic/best" element={<BestGIC />} />
              <Route path="/investing/gic/1-year" element={<OneYearGIC />} />
              <Route path="/investing/gic/5-year" element={<FiveYearGIC />} />
              <Route path="/investing/gic/tfsa" element={<TFSAGIC />} />
              <Route path="/investing/gic/registered" element={<RegisteredGIC />} />
              <Route path="/investing/gic/usd" element={<USDGIC />} />
              <Route path="/investing/gic/compare" element={<CompareGIC />} />
              
              {/* Insurance routes */}
              <Route path="/insurance" element={<Insurance />} />
              
              {/* Tools routes */}
              <Route path="/tools/compound-interest" element={<CompoundInterestCalculator />} />
              <Route path="/tools/tfsa-calculator" element={<TFSACalculator />} />
              
              {/* Guide routes */}
              <Route path="/guides/education-centre" element={<EducationCentre />} />
              <Route path="/guides/gic" element={<GICGuide />} />
              <Route path="/guides/rrsp" element={<RRSPGuide />} />
              <Route path="/guides/rrsp-contribution" element={<RRSPContributionGuide />} />
              <Route path="/guides/tfsa" element={<TFSAGuide />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
