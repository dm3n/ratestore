
import { Route } from "react-router-dom";
import BestSavings from "@/pages/banking/BestSavings";
import BestChequing from "@/pages/banking/BestChequing";
import BankingAwards from "@/pages/banking/Awards";
import CompareSavings from "@/pages/banking/savings/Compare";
import HighInterestSavings from "@/pages/banking/savings/HighInterest";
import TFSASavings from "@/pages/banking/savings/TFSA";
import RRSPSavings from "@/pages/banking/savings/RRSP";
import YouthSavings from "@/pages/banking/savings/Youth";
import FirstHomeSavings from "@/pages/banking/savings/FirstHome";
import RESPAccounts from "@/pages/banking/savings/RESP";
import CompareChequing from "@/pages/banking/chequing/Compare";
import PersonalChequing from "@/pages/banking/chequing/Personal";
import StudentChequing from "@/pages/banking/chequing/Student";
import YouthChequing from "@/pages/banking/chequing/Youth";
import SeniorChequing from "@/pages/banking/chequing/Senior";
import NewcomerChequing from "@/pages/banking/chequing/Newcomer";

export const BankingRoutes = () => (
  <>
    <Route path="/banking/best-savings" element={<BestSavings />} />
    <Route path="/banking/best-chequing" element={<BestChequing />} />
    <Route path="/banking/awards" element={<BankingAwards />} />
    <Route path="/banking/savings/compare" element={<CompareSavings />} />
    <Route path="/banking/savings/high-interest" element={<HighInterestSavings />} />
    <Route path="/banking/savings/tfsa" element={<TFSASavings />} />
    <Route path="/banking/savings/rrsp" element={<RRSPSavings />} />
    <Route path="/banking/savings/youth" element={<YouthSavings />} />
    <Route path="/banking/savings/first-home" element={<FirstHomeSavings />} />
    <Route path="/banking/savings/resp" element={<RESPAccounts />} />
    <Route path="/banking/chequing/compare" element={<CompareChequing />} />
    <Route path="/banking/chequing/personal" element={<PersonalChequing />} />
    <Route path="/banking/chequing/student" element={<StudentChequing />} />
    <Route path="/banking/chequing/youth" element={<YouthChequing />} />
    <Route path="/banking/chequing/senior" element={<SeniorChequing />} />
    <Route path="/banking/chequing/newcomer" element={<NewcomerChequing />} />
  </>
);
