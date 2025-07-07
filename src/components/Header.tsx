
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
          { name: "Gas", href: "/credit-cards/gas" },
          { name: "Dining", href: "/credit-cards/dining" },
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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});
  const isMobile = useIsMobile();
  const { user } = useAuth();

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const MobileNavItem = ({ category }: { category: any }) => (
    <Collapsible 
      open={openSections[category.title]} 
      onOpenChange={() => toggleSection(category.title)}
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-muted rounded-lg">
        <span className="font-medium">{category.title}</span>
        <ChevronRight className={cn(
          "h-4 w-4 transition-transform",
          openSections[category.title] && "rotate-90"
        )} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4">
        {category.sections?.map((section: any, idx: number) => (
          <div key={idx} className="py-2">
            <div className="font-medium text-sm text-muted-foreground mb-2">
              {section.title}
            </div>
            {section.links?.map((link: any, linkIdx: number) => (
              <Link 
                key={linkIdx}
                to={link.href}
                className="block py-1 text-sm hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <span className="hidden font-bold sm:inline-block">RateStore</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DesktopNavDropdown />
          </nav>
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>
                <Link 
                  to="/" 
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  RateStore
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-2">
                {navCategories.map((category) => (
                  <MobileNavItem key={category.title} category={category} />
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="mr-6 flex items-center space-x-2 md:hidden" to="/">
              <span className="font-bold">RateStore</span>
            </Link>
          </div>
          <nav className="flex items-center">
            {user ? (
              <UserMenu />
            ) : (
              <Button asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
