
import { Route } from "react-router-dom";
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
import Unauthorized from "@/pages/Unauthorized";
import NotFound from "@/pages/NotFound";
import Blog from "@/pages/Blog";
import Privacy from "@/pages/Privacy";
import TermsOfUse from "@/pages/Terms";
import Disclosure from "@/pages/Disclosure";
import Careers from "@/pages/Careers";

export const MainRoutes = () => (
  <>
    <Route path="/" element={<Index />} />
    <Route path="/mortgages" element={<Mortgages />} />
    <Route path="/credit-cards" element={<CreditCards />} />
    <Route path="/card-finder" element={<CardFinder />} />
    <Route path="/banking" element={<Banking />} />
    <Route path="/investing" element={<Investing />} />
    <Route path="/insurance" element={<Insurance />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<TermsOfUse />} />
    <Route path="/disclosure" element={<Disclosure />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/login" element={<Auth />} />
    <Route path="/register" element={<Auth />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<NotFound />} />
  </>
);
