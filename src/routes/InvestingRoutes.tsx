
import { Route } from "react-router-dom";
import BestGIC from "@/pages/investing/gic/Best";
import BestRESP from "@/pages/investing/resp/Best";
import OneYearGIC from "@/pages/investing/gic/OneYear";
import FiveYearGIC from "@/pages/investing/gic/FiveYear";
import RegisteredGIC from "@/pages/investing/gic/Registered";
import TFSAGIC from "@/pages/investing/gic/TFSA";
import USDGIC from "@/pages/investing/gic/USD";
import CompareGIC from "@/pages/investing/gic/Compare";
import RoboAdvisors from "@/pages/investing/RoboAdvisors";
import Brokerages from "@/pages/investing/Brokerages";
import Crypto from "@/pages/investing/Crypto";

export const InvestingRoutes = () => (
  <>
    <Route path="/investing/gic/best" element={<BestGIC />} />
    <Route path="/investing/resp/best" element={<BestRESP />} />
    <Route path="/investing/gic/1-year" element={<OneYearGIC />} />
    <Route path="/investing/gic/5-year" element={<FiveYearGIC />} />
    <Route path="/investing/gic/registered" element={<RegisteredGIC />} />
    <Route path="/investing/gic/tfsa" element={<TFSAGIC />} />
    <Route path="/investing/gic/usd" element={<USDGIC />} />
    <Route path="/investing/gic/compare" element={<CompareGIC />} />
    <Route path="/investing/robo-advisors" element={<RoboAdvisors />} />
    <Route path="/investing/brokerages" element={<Brokerages />} />
    <Route path="/investing/crypto" element={<Crypto />} />
  </>
);
