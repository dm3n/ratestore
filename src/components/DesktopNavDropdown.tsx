import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavCategory {
  title: string;
  sections: {
    title: string;
    links: {
      name: string;
      href: string;
    }[];
  }[];
}

const navCategories: NavCategory[] = [
  {
    title: "Mortgages",
    sections: [
      {
        title: "Compare mortgage rates",
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
        links: [
          { name: "2-year fixed rates", href: "/mortgages/2-year-fixed" },
          { name: "3-year fixed rates", href: "/mortgages/3-year-fixed" },
          { name: "5-year fixed rates", href: "/mortgages/5-year-fixed" },
          { name: "3-year variable rates", href: "/mortgages/3-year-variable" },
          { name: "5-year variable rates", href: "/mortgages/5-year-variable" },
          { name: "Historical rates", href: "/mortgages/historical" },
          { name: "View all terms", href: "/mortgages/terms" },
        ]
      },
      {
        title: "Calculators",
        links: [
          { name: "Mortgage payment calculator", href: "/tools/mortgage-calculator" },
          { name: "Mortgage affordability calculator", href: "/tools/affordability" },
          { name: "Down payment calculator", href: "/tools/down-payment" },
          { name: "Amortization schedule", href: "/tools/amortization" },
          { name: "Extra payment calculator", href: "/tools/extra-payment" },
          { name: "Mortgage renewal calculator", href: "/tools/renewal" },
          { name: "Mortgage refinance calculator", href: "/refinance" },
          { name: "Land transfer tax calculator", href: "/tools/land-transfer-tax" },
        ]
      },
      {
        title: "Mortgage providers",
        links: [
          { name: "Popular mortgage lenders", href: "/mortgages/lenders" },
          { name: "Find a mortgage broker", href: "/mortgages/brokers" },
        ]
      },
      {
        title: "Education centre",
        links: [
          { name: "Home buying guide", href: "/guides/home-buying" },
          { name: "Mortgage renewal guide", href: "/guides/mortgage-renewal" },
          { name: "Mortgage refinancing guide", href: "/guides/refinancing" },
          { name: "First time home buyer programs", href: "/guides/first-time-buyer" },
          { name: "Prime rate", href: "/guides/prime-rate" },
          { name: "Variable vs. fixed mortgage rates", href: "/guides/variable-vs-fixed" },
          { name: "Bank of Canada Overnight rate", href: "/guides/overnight-rate" },
        ]
      }
    ]
  },
  {
    title: "Credit Cards",
    sections: [
      {
        title: "Compare credit cards",
        links: [
          { name: "CardFinder", href: "/credit-cards/card-finder" },
          { name: "Best overall credit cards", href: "/credit-cards/best" },
          { name: "Top credit card promotions", href: "/credit-cards/promotions" },
          { name: "Ratehub's 2025 credit card awards", href: "/credit-cards/awards" },
        ]
      },
      {
        title: "Reward credit cards",
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
      },
      {
        title: "Banks & Networks",
        links: [
          { name: "American Express", href: "/credit-cards/amex" },
          { name: "BMO", href: "/credit-cards/bmo" },
          { name: "CIBC", href: "/credit-cards/cibc" },
          { name: "Mastercard", href: "/credit-cards/mastercard" },
          { name: "MBNA", href: "/credit-cards/mbna" },
          { name: "National Bank", href: "/credit-cards/national-bank" },
          { name: "PC Financial", href: "/credit-cards/pc-financial" },
          { name: "RBC", href: "/credit-cards/rbc" },
          { name: "Scotiabank", href: "/credit-cards/scotiabank" },
          { name: "Tangerine", href: "/credit-cards/tangerine" },
          { name: "TD", href: "/credit-cards/td" },
          { name: "Visa", href: "/credit-cards/visa" },
        ]
      },
      {
        title: "Education centre",
        links: [
          { name: "Credit card basics", href: "/guides/credit-cards" },
          { name: "Types of credit cards", href: "/guides/credit-card-types" },
          { name: "Rewards credit cards guide", href: "/guides/rewards-cards" },
          { name: "Credit card insurance guide", href: "/guides/credit-card-insurance" },
          { name: "Credit score and fraud guide", href: "/guides/credit-score" },
          { name: "Credit card interest calculator", href: "/tools/credit-card-calculator" },
        ]
      }
    ]
  },
  {
    title: "Banking",
    sections: [
      {
        title: "Best of",
        links: [
          { name: "Best savings accounts", href: "/banking/best-savings" },
          { name: "Best chequing accounts", href: "/banking/best-chequing" },
          { name: "Personal Finance Awards 2025", href: "/banking/awards" },
        ]
      },
      {
        title: "Savings accounts",
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
        links: [
          { name: "Compare all chequing accounts", href: "/banking/chequing/compare" },
          { name: "Personal chequing accounts", href: "/banking/chequing/personal" },
          { name: "Student chequing accounts", href: "/banking/chequing/student" },
          { name: "Youth chequing accounts", href: "/banking/chequing/youth" },
          { name: "Senior chequing accounts", href: "/banking/chequing/senior" },
          { name: "Newcomer chequing accounts", href: "/banking/chequing/newcomer" },
        ]
      },
      {
        title: "Education centre",
        links: [
          { name: "What is a savings account", href: "/guides/savings-account" },
          { name: "Tiered savings accounts", href: "/guides/tiered-savings" },
          { name: "Savings account alternatives", href: "/guides/savings-alternatives" },
          { name: "Chequing account basics", href: "/guides/chequing-basics" },
          { name: "Chequing account types", href: "/guides/chequing-types" },
          { name: "Chequing account fees", href: "/guides/chequing-fees" },
          { name: "RESP basics", href: "/guides/resp" },
          { name: "RESP contribution limit and withdrawals", href: "/guides/resp-contributions" },
        ]
      },
      {
        title: "Calculators",
        links: [
          { name: "TFSA contribution room calculator", href: "/tools/tfsa-calculator" },
        ]
      }
    ]
  },
  {
    title: "Investing",
    sections: [
      {
        title: "Best of",
        links: [
          { name: "Best GIC rates", href: "/investing/gic/best" },
          { name: "Best RESPs", href: "/investing/resp/best" },
        ]
      },
      {
        title: "GIC terms and types",
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
        title: "Stocks & ETFs",
        links: [
          { name: "Best robo-advisors 2025", href: "/investing/robo-advisors" },
          { name: "Best online brokerages 2025", href: "/investing/brokerages" },
          { name: "Best crypto exchanges 2025", href: "/investing/crypto" },
        ]
      },
      {
        title: "Education centre",
        links: [
          { name: "GIC basics", href: "/guides/gic" },
          { name: "GIC types", href: "/guides/gic-types" },
          { name: "RRSP basics", href: "/guides/rrsp" },
          { name: "RRSP contribution", href: "/guides/rrsp-contribution" },
          { name: "RRSP withdrawals", href: "/guides/rrsp-withdrawals" },
          { name: "TFSA basics", href: "/guides/tfsa" },
          { name: "TFSA contributions, withdrawals, transfers", href: "/guides/tfsa-contributions" },
          { name: "RESP basics", href: "/guides/resp-basics" },
          { name: "TFSA investments", href: "/guides/tfsa-investments" },
          { name: "RESP contribution limit and withdrawals", href: "/guides/resp-limit" },
        ]
      },
      {
        title: "Calculators",
        links: [
          { name: "Compound interest calculator", href: "/tools/compound-interest" },
        ]
      }
    ]
  },
  {
    title: "Insurance",
    sections: [
      {
        title: "Auto insurance",
        links: [
          { name: "Auto insurance quotes", href: "/insurance/auto/quotes" },
          { name: "Motorcycle insurance", href: "/insurance/auto/motorcycle" },
          { name: "All auto insurance types", href: "/insurance/auto/types" },
          { name: "Ontario car insurance", href: "/insurance/auto/ontario" },
          { name: "Toronto car insurance", href: "/insurance/auto/toronto" },
          { name: "Alberta car insurance", href: "/insurance/auto/alberta" },
          { name: "Calgary car insurance", href: "/insurance/auto/calgary" },
          { name: "Quebec car insurance", href: "/insurance/auto/quebec" },
          { name: "Montreal car insurance", href: "/insurance/auto/montreal" },
          { name: "All car insurance regions", href: "/insurance/auto/regions" },
        ]
      },
      {
        title: "Home insurance",
        links: [
          { name: "Home insurance quotes", href: "/insurance/home/quotes" },
          { name: "Tenant insurance", href: "/insurance/home/tenant" },
          { name: "Condo insurance", href: "/insurance/home/condo" },
          { name: "Landlord insurance", href: "/insurance/home/landlord" },
          { name: "All home insurance types", href: "/insurance/home/types" },
          { name: "Ontario home insurance", href: "/insurance/home/ontario" },
          { name: "Alberta home insurance", href: "/insurance/home/alberta" },
          { name: "BC home insurance", href: "/insurance/home/bc" },
          { name: "Quebec home insurance", href: "/insurance/home/quebec" },
          { name: "All home insurance regions", href: "/insurance/home/regions" },
        ]
      },
      {
        title: "Life insurance",
        links: [
          { name: "Life insurance quotes", href: "/insurance/life/quotes" },
          { name: "Term life insurance", href: "/insurance/life/term" },
          { name: "Permanent life insurance", href: "/insurance/life/permanent" },
          { name: "Disability insurance", href: "/insurance/life/disability" },
          { name: "Critical illness insurance", href: "/insurance/life/critical-illness" },
          { name: "Group insurance", href: "/insurance/life/group" },
          { name: "All life insurance types", href: "/insurance/life/types" },
          { name: "Life insurance by region", href: "/insurance/life/region" },
          { name: "Life insurance education", href: "/insurance/life/education" },
          { name: "Life insurance companies", href: "/insurance/life/companies" },
        ]
      },
      {
        title: "Travel insurance",
        links: [
          { name: "Travel insurance quotes", href: "/insurance/travel/quotes" },
          { name: "Multi-trip insurance", href: "/insurance/travel/multi-trip" },
          { name: "Travel medical insurance", href: "/insurance/travel/medical" },
          { name: "Trip cancellation insurance", href: "/insurance/travel/cancellation" },
          { name: "Senior travel insurance", href: "/insurance/travel/senior" },
          { name: "Pre-existing condition", href: "/insurance/travel/pre-existing" },
          { name: "Visitors to Canada", href: "/insurance/travel/visitors" },
          { name: "Travel insurance programs", href: "/insurance/travel/programs" },
          { name: "Travel insurance types", href: "/insurance/travel/types" },
          { name: "Travel insurance reviews", href: "/insurance/travel/reviews" },
        ]
      },
      {
        title: "Business insurance",
        links: [
          { name: "Business insurance quotes", href: "/insurance/business/quotes" },
          { name: "Professional liability", href: "/insurance/business/professional" },
          { name: "D&O insurance", href: "/insurance/business/directors" },
          { name: "Commercial general liability", href: "/insurance/business/general" },
          { name: "Product liability insurance", href: "/insurance/business/product" },
          { name: "Business interruption insurance", href: "/insurance/business/interruption" },
          { name: "Contractor insurance", href: "/insurance/business/contractor" },
          { name: "Non-profit insurance", href: "/insurance/business/non-profit" },
          { name: "Cyber insurance", href: "/insurance/business/cyber" },
          { name: "Technology insurance", href: "/insurance/business/technology" },
          { name: "Fitness insurance", href: "/insurance/business/fitness" },
        ]
      }
    ]
  }
];

export function DesktopNavDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6">
        {navCategories.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-primary bg-transparent">
              <Link to={`/${category.title.toLowerCase().replace(' ', '-')}`}>
                {category.title}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[900px] p-8">
                {/* Category header with main link */}
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <Link 
                    to={`/${category.title.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                  >
                    All {category.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">
                    Explore all {category.title.toLowerCase()} options and services
                  </p>
                </div>
                
                {/* Organized grid with better spacing */}
                <div className="grid grid-cols-3 gap-8">
                  {category.sections.slice(0, 3).map((section) => (
                    <div key={section.title} className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {section.links.slice(0, 6).map((link) => (
                          <li key={link.name}>
                            <Link
                              to={link.href}
                              className="text-sm text-gray-600 hover:text-primary transition-colors block py-1 leading-relaxed"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                        {section.links.length > 6 && (
                          <li>
                            <Link
                              to={section.title === "Compare mortgage rates" ? "/mortgages/compare" : 
                                  section.title === "Mortgage terms" ? "/mortgages/terms" :
                                  section.title === "Education centre" ? "/guides/education-centre" :
                                  `/${category.title.toLowerCase().replace(' ', '-')}/${section.title.toLowerCase().replace(' ', '-')}`}
                              className="text-sm text-primary font-medium hover:text-primary/80 transition-colors block py-1"
                            >
                              View all {section.title.toLowerCase()} →
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {/* Additional sections if any */}
                {category.sections.length > 3 && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-8">
                      {category.sections.slice(3, 5).map((section) => (
                        <div key={section.title} className="space-y-4">
                          <h4 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
                            {section.title}
                          </h4>
                          <ul className="space-y-2.5">
                            {section.links.slice(0, 4).map((link) => (
                              <li key={link.name}>
                                <Link
                                  to={link.href}
                                  className="text-sm text-gray-600 hover:text-primary transition-colors block py-1 leading-relaxed"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                            {section.links.length > 4 && (
                              <li>
                                <Link
                                  to={section.title === "Education centre" ? "/guides/education-centre" : 
                                      `/${category.title.toLowerCase().replace(' ', '-')}/${section.title.toLowerCase().replace(' ', '-')}`}
                                  className="text-sm text-primary font-medium hover:text-primary/80 transition-colors block py-1"
                                >
                                  View more →
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link 
            to="/blog" 
            className="text-sm font-medium transition-colors hover:text-primary px-4 py-2"
          >
            Blog
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
