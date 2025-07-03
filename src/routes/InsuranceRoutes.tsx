
import { Route } from "react-router-dom";
import AutoInsuranceQuotes from "@/pages/insurance/auto/Quotes";
import MotorcycleInsurance from "@/pages/insurance/auto/Motorcycle";
import AutoInsuranceTypes from "@/pages/insurance/auto/Types";
import AutoInsuranceRegions from "@/pages/insurance/auto/Regions";
import OntarioAutoInsurance from "@/pages/insurance/auto/Ontario";
import TorontoAutoInsurance from "@/pages/insurance/auto/Toronto";
import AlbertaAutoInsurance from "@/pages/insurance/auto/Alberta";
import CalgaryAutoInsurance from "@/pages/insurance/auto/Calgary";
import QuebecAutoInsurance from "@/pages/insurance/auto/Quebec";
import MontrealAutoInsurance from "@/pages/insurance/auto/Montreal";
import HomeInsuranceQuotes from "@/pages/insurance/home/Quotes";
import TenantInsurance from "@/pages/insurance/home/Tenant";
import CondoInsurance from "@/pages/insurance/home/Condo";
import LandlordInsurance from "@/pages/insurance/home/Landlord";
import HomeInsuranceTypes from "@/pages/insurance/home/Types";
import HomeInsuranceRegions from "@/pages/insurance/home/Regions";
import OntarioHomeInsurance from "@/pages/insurance/home/Ontario";
import AlbertaHomeInsurance from "@/pages/insurance/home/Alberta";
import BCHomeInsurance from "@/pages/insurance/home/BC";
import QuebecHomeInsurance from "@/pages/insurance/home/Quebec";
import LifeInsuranceQuotes from "@/pages/insurance/life/Quotes";
import TermLifeInsurance from "@/pages/insurance/life/Term";
import PermanentLifeInsurance from "@/pages/insurance/life/Permanent";
import LifeInsuranceTypes from "@/pages/insurance/life/Types";
import TravelInsuranceQuotes from "@/pages/insurance/travel/Quotes";
import TravelInsuranceTypes from "@/pages/insurance/travel/Types";
import BusinessInsuranceQuotes from "@/pages/insurance/business/Quotes";

export const InsuranceRoutes = () => (
  <>
    <Route path="/insurance/auto/quotes" element={<AutoInsuranceQuotes />} />
    <Route path="/insurance/auto/motorcycle" element={<MotorcycleInsurance />} />
    <Route path="/insurance/auto/types" element={<AutoInsuranceTypes />} />
    <Route path="/insurance/auto/regions" element={<AutoInsuranceRegions />} />
    <Route path="/insurance/auto/ontario" element={<OntarioAutoInsurance />} />
    <Route path="/insurance/auto/toronto" element={<TorontoAutoInsurance />} />
    <Route path="/insurance/auto/alberta" element={<AlbertaAutoInsurance />} />
    <Route path="/insurance/auto/calgary" element={<CalgaryAutoInsurance />} />
    <Route path="/insurance/auto/quebec" element={<QuebecAutoInsurance />} />
    <Route path="/insurance/auto/montreal" element={<MontrealAutoInsurance />} />
    <Route path="/insurance/home/quotes" element={<HomeInsuranceQuotes />} />
    <Route path="/insurance/home/tenant" element={<TenantInsurance />} />
    <Route path="/insurance/home/condo" element={<CondoInsurance />} />
    <Route path="/insurance/home/landlord" element={<LandlordInsurance />} />
    <Route path="/insurance/home/types" element={<HomeInsuranceTypes />} />
    <Route path="/insurance/home/regions" element={<HomeInsuranceRegions />} />
    <Route path="/insurance/home/ontario" element={<OntarioHomeInsurance />} />
    <Route path="/insurance/home/alberta" element={<AlbertaHomeInsurance />} />
    <Route path="/insurance/home/bc" element={<BCHomeInsurance />} />
    <Route path="/insurance/home/quebec" element={<QuebecHomeInsurance />} />
    <Route path="/insurance/life/quotes" element={<LifeInsuranceQuotes />} />
    <Route path="/insurance/life/term" element={<TermLifeInsurance />} />
    <Route path="/insurance/life/permanent" element={<PermanentLifeInsurance />} />
    <Route path="/insurance/life/types" element={<LifeInsuranceTypes />} />
    <Route path="/insurance/travel/quotes" element={<TravelInsuranceQuotes />} />
    <Route path="/insurance/travel/types" element={<TravelInsuranceTypes />} />
    <Route path="/insurance/business/quotes" element={<BusinessInsuranceQuotes />} />
  </>
);
