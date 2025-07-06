import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { UserMenu } from "./UserMenu";
import { DesktopNavDropdown } from "./DesktopNavDropdown";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Import the navigation data from DesktopNavDropdown
const navCategories = [
  {
    title: "Mortgages",
    href: "/mortgages",
    sections: [
      {
        title: "Compare mortgage rates",
        href: "/mortgages/compare-rates",
        links: [
          { name: "Best mortgage rates", href: "/mortgages/best-rates" },
          { name: "Best mortgage renewal rates", href: "/mortgages/renewal-rates" },
          { name: "HELOC mortgage rates", href: "/mortgages/heloc" },
          { name: "Best bank mortgage rates", href: "/mortgages/bank-rates" },
          { name: "Alberta mortgage rates", href: "/mortgages/alberta" },
          { name: "BC mortgage rates", href: "/mortgages/bc" },
          { name: "Ontario mortgage rates", href: "/mortgages/ontario" },
          { name: "Quebec mortgage rates", href: "/mortgages/quebec" },
        ]
      },
      {
        title: "Mortgage terms",
        href: "/mortgages/terms",
        links: [
          { name: "2-year fixed rates", href: "/mortgages/2-year-fixed" },
          { name: "3-year fixed rates", href: "/mortgages/3-year-fixed" },
          { name: "5-year fixed rates", href: "/mortgages/5-year-fixed" },
          { name: "3-year variable rates", href: "/mortgages/3-year-variable" },
          { name: "5-year variable rates", href: "/mortgages/5-year-variable" },
          { name: "Compare all rates", href: "/mortgages/compare" },
          { name: "Historical rates", href: "/mortgages/historical" },
        ]
      },
      {
        title: "Calculators",
        href: "/mortgages/calculators",
        links: [
          { name: "Mortgage payment calculator", href: "/tools/mortgage-calculator" },
          { name: "Mortgage affordability calculator", href: "/tools/affordability" },
          { name: "Mortgage renewal calculator", href: "/tools/renewal" },
          { name: "Mortgage refinance calculator", href: "/tools/refinance" },
          { name: "Mortgage down payment calculator", href: "/tools/down-payment" },
          { name: "Land transfer tax calculator", href: "/tools/land-transfer-tax" },
        ]
      }
    ]
  },
  {
    title: "Credit Cards",
    href: "/credit-cards",
    sections: [
      {
        title: "Compare credit cards",
        href: "/credit-cards/compare",
        links: [
          { name: "CardFinder", href: "/credit-cards/card-finder" },
          { name: "Best overall credit cards", href: "/credit-cards/best" },
          { name: "Top credit card promotions", href: "/credit-cards/promotions" },
          { name: "RateStore's 2025 credit card awards", href: "/credit-cards/awards" },
        ]
      },
      {
        title: "Reward credit cards",
        href: "/credit-cards/rewards",
        links: [
          { name: "Aeroplan", href: "/credit-cards/aeroplan" },
          { name: "Cash back", href: "/credit-cards/cash-back" },
          { name: "Grocery", href: "/credit-cards/grocery" },
          { name: "Rewards", href: "/credit-cards/rewards" },
          { name: "Store", href: "/credit-cards/store" },
          { name: "Travel", href: "/credit-cards/travel" },
        ]
      },
      {
        title: "Type of credit cards",
        href: "/credit-cards/types",
        links: [
          { name: "Balance Transfer", href: "/credit-cards/balance-transfer" },
          { name: "Business", href: "/credit-cards/business" },
          { name: "Instant approval", href: "/credit-cards/instant-approval" },
          { name: "Low Interest", href: "/credit-cards/low-interest" },
          { name: "Newcomers", href: "/credit-cards/newcomers" },
          { name: "No Fee", href: "/credit-cards/no-fee" },
          { name: "No FX fee", href: "/credit-cards/no-fx-fee" },
          { name: "Secured", href: "/credit-cards/secured" },
          { name: "Student", href: "/credit-cards/student" },
          { name: "Travel Insurance", href: "/credit-cards/travel-insurance" },
        ]
      }
    ]
  },
  {
    title: "Banking",
    href: "/banking",
    sections: [
      {
        title: "Best of",
        href: "/banking/best",
        links: [
          { name: "Best savings accounts", href: "/banking/best-savings" },
          { name: "Best chequing accounts", href: "/banking/best-chequing" },
          { name: "Personal Finance Awards 2025", href: "/banking/awards" },
        ]
      },
      {
        title: "Savings accounts",
        href: "/banking/savings",
        links: [
          { name: "Compare all savings accounts", href: "/banking/savings/compare" },
          { name: "High-interest savings accounts", href: "/banking/savings/high-interest" },
          { name: "TFSA savings accounts", href: "/banking/savings/tfsa" },
          { name: "RRSP savings accounts", href: "/banking/savings/rrsp" },
          { name: "Youth savings accounts", href: "/banking/savings/youth" },
          { name: "First home saving accounts", href: "/banking/savings/first-home" },
          { name: "RESP accounts", href: "/banking/savings/resp" },
        ]
      },
      {
        title: "Chequing accounts",
        href: "/banking/chequing",
        links: [
          { name: "Compare all chequing accounts", href: "/banking/chequing/compare" },
          { name: "Personal chequing accounts", href: "/banking/chequing/personal" },
          { name: "Student chequing accounts", href: "/banking/chequing/student" },
          { name: "Youth chequing accounts", href: "/banking/chequing/youth" },
          { name: "Senior chequing accounts", href: "/banking/chequing/senior" },
          { name: "Newcomer chequing accounts", href: "/banking/chequing/newcomer" },
        ]
      }
    ]
  },
  {
    title: "Personal Loans",
    href: "/personal-loans",
    sections: [
      {
        title: "Compare loans",
        href: "/personal-loans/compare",
        links: [
          { name: "Best personal loan rates", href: "/personal-loans/best-rates" },
          { name: "Debt consolidation loans", href: "/personal-loans/debt-consolidation" },
          { name: "Bad credit loans", href: "/personal-loans/bad-credit" },
        ]
      }
    ]
  },
  {
    title: "Investing",
    href: "/investing",
    sections: [
      {
        title: "Best of",
        href: "/investing/best",
        links: [
          { name: "Best GIC rates", href: "/investing/gic/best" },
          { name: "Best RESPs", href: "/investing/resp/best" },
        ]
      },
      {
        title: "GIC terms and types",
        href: "/investing/gic",
        links: [
          { name: "1-year", href: "/investing/gic/1-year" },
          { name: "5-year", href: "/investing/gic/5-year" },
          { name: "Registered GICs", href: "/investing/gic/registered" },
          { name: "TFSA GIC rates", href: "/investing/gic/tfsa" },
          { name: "USD GIC rates", href: "/investing/gic/usd" },
          { name: "Compare all GICs", href: "/investing/gic/compare" },
        ]
      },
      {
        title: "Education centre",
        href: "/guides/education-centre",
        links: [
          { name: "GIC basics", href: "/guides/gic" },
          { name: "RRSP basics", href: "/guides/rrsp" },
          { name: "RRSP contribution", href: "/guides/rrsp-contribution" },
          { name: "TFSA basics", href: "/guides/tfsa" },
          { name: "TFSA contributions", href: "/guides/tfsa-contributions" },
          { name: "RESP basics", href: "/guides/resp-basics" },
        ]
      },
      {
        title: "Calculators",
        href: "/tools",
        links: [
          { name: "Compound interest calculator", href: "/tools/compound-interest" },
          { name: "TFSA calculator", href: "/tools/tfsa-calculator" },
          { name: "Retirement calculator", href: "/tools/retirement" },
        ]
      }
    ]
  },
  {
    title: "Insurance",
    href: "/insurance",
    sections: [
      {
        title: "Auto insurance",
        href: "/insurance/auto",
        links: [
          { name: "Auto insurance quotes", href: "/insurance/auto/quotes" },
          { name: "Motorcycle insurance", href: "/insurance/auto/motorcycle" },
          { name: "Ontario car insurance", href: "/insurance/auto/ontario" },
          { name: "Alberta car insurance", href: "/insurance/auto/alberta" },
        ]
      },
      {
        title: "Home insurance",
        href: "/insurance/home",
        links: [
          { name: "Home insurance quotes", href: "/insurance/home/quotes" },
          { name: "Tenant insurance", href: "/insurance/home/tenant" },
          { name: "Condo insurance", href: "/insurance/home/condo" },
          { name: "Landlord insurance", href: "/insurance/home/landlord" },
        ]
      },
      {
        title: "Life insurance",
        href: "/insurance/life",
        links: [
          { name: "Life insurance quotes", href: "/insurance/life/quotes" },
          { name: "Term life insurance", href: "/insurance/life/term" },
          { name: "Permanent life insurance", href: "/insurance/life/permanent" },
          { name: "Disability insurance", href: "/insurance/life/disability" },
        ]
      }
    ]
  }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user } = useAuth();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Show mobile menu for tablets and mobile (up to 1024px instead of 768px)
  const shouldShowMobileMenu = window.innerWidth < 1024;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">ratestore.ca</span>
          </Link>
        </div>
        
        {/* Desktop navigation - only show on larger screens (1024px+) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <DesktopNavDropdown />
        </div>
        
        <div className="flex items-center gap-2">
          {/* User menu - always visible when user is logged in */}
          {user && <UserMenu />}
          
          {/* Desktop sign in button - only show on larger screens */}
          {!user && (
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
          
          {/* Mobile menu button - show on tablets and mobile */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 md:w-96 p-0">
              <SheetHeader className="p-4 sm:p-6 pb-4 border-b">
                <SheetTitle className="text-left text-lg sm:text-xl font-bold text-primary">
                  ratestore.ca
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex-1 px-4 sm:px-6 py-4 overflow-y-auto">
                  <MobileNavLinks onLinkClick={closeMobileMenu} />
                </nav>
                {!user && (
                  <div className="p-4 sm:p-6 border-t bg-gray-50/50">
                    <Button 
                      variant="default" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                      asChild
                      onClick={closeMobileMenu}
                    >
                      <Link to="/auth">Sign In</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

interface MobileNavLinksProps {
  onLinkClick: () => void;
}

function MobileNavLinks({ onLinkClick }: MobileNavLinksProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [openSubSections, setOpenSubSections] = useState<string[]>([]);
  const [expandedSubSections, setExpandedSubSections] = useState<string[]>([]);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const toggleSubSection = (subSectionTitle: string) => {
    setOpenSubSections(prev => 
      prev.includes(subSectionTitle) 
        ? prev.filter(s => s !== subSectionTitle)
        : [...prev, subSectionTitle]
    );
  };

  const toggleSubSectionExpansion = (subSectionTitle: string) => {
    setExpandedSubSections(prev => 
      prev.includes(subSectionTitle) 
        ? prev.filter(s => s !== subSectionTitle)
        : [...prev, subSectionTitle]
    );
  };

  const shouldShowMoreButton = (links: any[]) => links.length > 5;
  const getVisibleLinks = (links: any[], sectionTitle: string) => {
    const isExpanded = expandedSubSections.includes(sectionTitle);
    return isExpanded ? links : links.slice(0, 5);
  };

  return (
    <div className="space-y-1 sm:space-y-2">
      {navCategories.map((category) => (
        <Collapsible 
          key={category.title}
          open={openSections.includes(category.title)}
          onOpenChange={() => toggleSection(category.title)}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-3 text-sm sm:text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            <span>{category.title}</span>
            {openSections.includes(category.title) ? (
              <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-2 sm:ml-3 mt-2 space-y-1">
            {/* Main category link */}
            <Link
              to={category.href}
              onClick={onLinkClick}
              className="flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-primary rounded-lg hover:bg-gray-50 transition-colors"
            >
              View All {category.title}
            </Link>
            
            {/* Subcategory sections with nested expansion */}
            {category.sections.map((section) => (
              <Collapsible
                key={section.title}
                open={openSubSections.includes(section.title)}
                onOpenChange={() => toggleSubSection(section.title)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-left">{section.title}</span>
                  {openSubSections.includes(section.title) ? (
                    <ChevronDown className="h-3 w-3 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-3 w-3 text-gray-400 flex-shrink-0" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-3 sm:ml-4 mt-1 space-y-1">
                  {getVisibleLinks(section.links, section.title).map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={onLinkClick}
                      className="block px-3 py-2 text-xs text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  {/* More/Less button */}
                  {shouldShowMoreButton(section.links) && (
                    <button
                      onClick={() => toggleSubSectionExpansion(section.title)}
                      className="block px-3 py-2 text-xs text-primary font-medium rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
                    >
                      {expandedSubSections.includes(section.title) ? 'less' : 'more'}
                    </button>
                  )}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
      
      {/* Blog link (non-collapsible) */}
      <Link
        to="/blog"
        onClick={onLinkClick}
        className="flex items-center justify-between px-3 py-3 text-sm sm:text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span>Blog</span>
        <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
      </Link>
    </div>
  );
}
