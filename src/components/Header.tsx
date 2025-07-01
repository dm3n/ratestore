
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { UserMenu } from "./UserMenu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user } = useAuth();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">ratehub.ca</span>
          </Link>
        </div>
        
        {!isMobile ? (
          <>
            <nav className="flex-1 flex justify-center">
              <NavLinks className="hidden md:flex" />
            </nav>
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <UserMenu />
              ) : (
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/auth">Sign In</Link>
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            {user && <UserMenu />}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <SheetHeader className="p-6 pb-4 border-b">
                  <SheetTitle className="text-left text-xl font-bold text-primary">
                    ratehub.ca
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex-1 px-6 py-4">
                    <MobileNavLinks onLinkClick={closeMobileMenu} />
                  </nav>
                  {!user && (
                    <div className="p-6 border-t bg-gray-50/50">
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
        )}
      </div>
    </header>
  );
}

interface NavLinksProps {
  className?: string;
}

function NavLinks({ className }: NavLinksProps) {
  return (
    <ul className={cn("flex items-center gap-6 lg:gap-8", className)}>
      <li>
        <Link to="/mortgages" className="text-sm font-medium transition-colors hover:text-primary">
          Mortgages
        </Link>
      </li>
      <li>
        <Link to="/credit-cards" className="text-sm font-medium transition-colors hover:text-primary">
          Credit Cards
        </Link>
      </li>
      <li>
        <Link to="/banking" className="text-sm font-medium transition-colors hover:text-primary">
          Banking
        </Link>
      </li>
      <li>
        <Link to="/personal-loans" className="text-sm font-medium transition-colors hover:text-primary">
          Loans
        </Link>
      </li>
      <li>
        <Link to="/investing" className="text-sm font-medium transition-colors hover:text-primary">
          Investing
        </Link>
      </li>
      <li>
        <Link to="/insurance" className="text-sm font-medium transition-colors hover:text-primary">
          Insurance
        </Link>
      </li>
      <li>
        <Link to="/blog" className="text-sm font-medium transition-colors hover:text-primary">
          Blog
        </Link>
      </li>
    </ul>
  );
}

interface MobileNavLinksProps {
  onLinkClick: () => void;
}

function MobileNavLinks({ onLinkClick }: MobileNavLinksProps) {
  const navItems = [
    { name: "Mortgages", href: "/mortgages" },
    { name: "Credit Cards", href: "/credit-cards" },
    { name: "Banking", href: "/banking" },
    { name: "Personal Loans", href: "/personal-loans" },
    { name: "Investing", href: "/investing" },
    { name: "Insurance", href: "/insurance" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          onClick={onLinkClick}
          className="flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span>{item.name}</span>
          <ChevronDown className="h-4 w-4 rotate-[-90deg] text-gray-400" />
        </Link>
      ))}
    </div>
  );
}
