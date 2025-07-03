
import { Route } from "react-router-dom";
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
import Promotions from "@/pages/credit-cards/Promotions";
import Awards from "@/pages/credit-cards/Awards";
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

export const CreditCardRoutes = () => (
  <>
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
    <Route path="/credit-cards/promotions" element={<Promotions />} />
    <Route path="/credit-cards/awards" element={<Awards />} />
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
    <Route path="/credit-cards/aeroplan" element={<Aeroplan />} />
    <Route path="/credit-cards/grocery" element={<Grocery />} />
    <Route path="/credit-cards/rewards" element={<Rewards />} />
    <Route path="/credit-cards/store" element={<Store />} />
    <Route path="/credit-cards/gas" element={<Gas />} />
  </>
);
