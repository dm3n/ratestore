
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
  href: string;
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
    href: "/mortgages",
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
    href: "/credit-cards",
    sections: [
      {
        title: "Compare credit cards",
        links: [
          { name: "CardFinder", href: "/card-finder" },
          { name: "Best overall credit cards", href: "/credit-cards/best-canadian" },
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
          { name: "Gas", href: "/credit-cards/gas" },
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
          { name: "Credit Cards Education Hub", href: "/guides/credit-cards" },
          { name: "Credit card basics", href: "/guides/credit-card-basics" },
          { name: "Types of credit cards", href: "/guides/credit-card-types" },
          { name: "Rewards credit cards guide", href: "/guides/rewards-credit-cards" },
          { name: "Credit card insurance guide", href: "/guides/credit-card-insurance" },
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
        links: [
          { name: "Best savings accounts", href: "/banking/best-savings" },
          { name: "Best chequing accounts", href: "/banking/best-chequing" },
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
        links: [
          { name: "Best GIC rates", href: "/investing/gic/best" },
          { name: "Best RESPs", href: "/investing/resp/best" },
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
        links: [
          { name: "Auto insurance quotes", href: "/insurance/auto/quotes" },
          { name: "Motorcycle insurance", href: "/insurance/auto/motorcycle" },
        ]
      },
      {
        title: "Home insurance",
        links: [
          { name: "Home insurance quotes", href: "/insurance/home/quotes" },
          { name: "Tenant insurance", href: "/insurance/home/tenant" },
        ]
      },
      {
        title: "Life insurance",
        links: [
          { name: "Life insurance quotes", href: "/insurance/life/quotes" },
          { name: "Term life insurance", href: "/insurance/life/term" },
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
              <Link to={category.href}>
                {category.title}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[900px] p-8">
                {/* Category header with main link */}
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <Link 
                    to={category.href}
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
                                  section.title === "Banks & Networks" ? "/credit-cards" :
                                  category.href}
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
                                      section.title === "Banks & Networks" ? "/credit-cards" :
                                      category.href}
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
