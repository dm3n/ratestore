
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator, CreditCard, Building, Shield, TrendingUp } from "lucide-react";
import { UserMenu } from "./UserMenu";
import { DesktopNavDropdown } from "./DesktopNavDropdown";
import { ToolsDropdown } from "./ToolsDropdown";
import ChatbotTrigger from "./ChatbotTrigger";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-gray-900">RateStore</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <DesktopNavDropdown
                title="Mortgages"
                icon={Building}
                isActive={isActiveRoute('/mortgages') || isActiveRoute('/mortgage')}
                items={[
                  { label: "Best Mortgage Rates", href: "/mortgages/best-rates" },
                  { label: "Compare Rates", href: "/mortgages/compare-rates" },
                  { label: "5-Year Fixed", href: "/mortgages/five-year-fixed" },
                  { label: "5-Year Variable", href: "/mortgages/five-year-variable" },
                  { label: "Mortgage Calculator", href: "/tools/mortgage-calculator" },
                  { label: "Bank Rates", href: "/mortgages/bank-rates" },
                  { label: "Refinancing", href: "/refinance" }
                ]}
              />

              <DesktopNavDropdown
                title="Credit Cards"
                icon={CreditCard}
                isActive={isActiveRoute('/credit-cards')}
                items={[
                  { label: "Best Credit Cards", href: "/credit-cards/best-overall" },
                  { label: "Cash Back Cards", href: "/credit-cards/cash-back" },
                  { label: "Travel Rewards", href: "/credit-cards/travel" },
                  { label: "No Annual Fee", href: "/credit-cards/no-fee" },
                  { label: "Card Finder", href: "/card-finder" },
                  { label: "Low Interest", href: "/credit-cards/low-interest" },
                  { label: "Balance Transfer", href: "/credit-cards/balance-transfer" }
                ]}
              />

              <DesktopNavDropdown
                title="Banking"
                icon={Building}
                isActive={isActiveRoute('/banking') || isActiveRoute('/savings-rates')}
                items={[
                  { label: "High-Interest Savings", href: "/banking/savings/high-interest" },
                  { label: "Best Chequing Accounts", href: "/banking/best-chequing" },
                  { label: "TFSA Accounts", href: "/banking/savings/tfsa" },
                  { label: "RRSP Accounts", href: "/banking/savings/rrsp" },
                  { label: "GIC Rates", href: "/investing/gic/best" },
                  { label: "Youth Banking", href: "/banking/chequing/youth" },
                  { label: "Newcomer Banking", href: "/banking/chequing/newcomer" }
                ]}
              />

              <DesktopNavDropdown
                title="Insurance"
                icon={Shield}
                isActive={isActiveRoute('/insurance')}
                items={[
                  { label: "Life Insurance", href: "/insurance/life/quotes" },
                  { label: "Home Insurance", href: "/insurance/home/quotes" },
                  { label: "Auto Insurance", href: "/insurance/auto/quotes" },
                  { label: "Travel Insurance", href: "/insurance/travel/quotes" },
                  { label: "Business Insurance", href: "/insurance/business/quotes" },
                  { label: "Critical Illness", href: "/insurance/life/critical-illness" },
                  { label: "Disability Insurance", href: "/insurance/life/disability" }
                ]}
              />

              <DesktopNavDropdown
                title="Investing"
                icon={TrendingUp}
                isActive={isActiveRoute('/investing')}
                items={[
                  { label: "GIC Rates", href: "/investing/gic/best" },
                  { label: "TFSA GICs", href: "/investing/gic/tfsa" },
                  { label: "RRSP GICs", href: "/investing/gic/registered" },
                  { label: "Robo Advisors", href: "/investing/robo-advisors" },
                  { label: "Online Brokers", href: "/investing/brokerages" },
                  { label: "RESP Plans", href: "/investing/resp/best" },
                  { label: "Cryptocurrency", href: "/investing/crypto" }
                ]}
              />

              <ToolsDropdown isActive={isActiveRoute('/tools')} />
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Desktop User Menu */}
            <div className="hidden lg:block">
              <UserMenu />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <div className="space-y-2">
                <Link
                  to="/mortgages/best-rates"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mortgages
                </Link>
                <Link
                  to="/credit-cards/best-overall"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Credit Cards
                </Link>
                <Link
                  to="/banking/best-savings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Banking
                </Link>
                <Link
                  to="/insurance/life/quotes"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insurance
                </Link>
                <Link
                  to="/investing/gic/best"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investing
                </Link>
                <Link
                  to="/tools/calculators-overview"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tools
                </Link>
                <div className="pt-4 border-t">
                  <UserMenu />
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
      
      <ChatbotTrigger />
    </>
  );
};
