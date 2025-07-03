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
import HighInterestSavings from "./pages/banking/savings/HighInterest";
import TFSASavings from "./pages/banking/savings/TFSA";
import RRSPSavings from "./pages/banking/savings/RRSP";

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

// Stocks & ETFs pages - NEW
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
// Travel Insurance
import TravelInsuranceQuotes from "./pages/insurance/travel/Quotes";
import TravelInsuranceTypes from "./pages/insurance/travel/Types";
// Business Insurance
import BusinessInsuranceQuotes from "./pages/insurance/business/Quotes";

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
              
              {/* Travel Insurance routes */}
              <Route path="/insurance/travel" element={<TravelInsuranceTypes />} />
              <Route path="/insurance/travel/quotes" element={<TravelInsuranceQuotes />} />
              <Route path="/insurance/travel/types" element={<TravelInsuranceTypes />} />
              
              {/* Business Insurance routes */}
              <Route path="/insurance/business" element={<BusinessInsuranceQuotes />} />
              <Route path="/insurance/business/quotes" element={<BusinessInsuranceQuotes />} />
              
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
