
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { FinancialToolsDropdown } from "./FinancialToolsDropdown";
import { UserMenu } from "./UserMenu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-primary to-indigo-600">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">R</div>
            </div>
            <span className="font-bold text-xl">RateStore</span>
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
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/auth">Log in</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/auth">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            {user && <UserMenu />}
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        )}
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background">
          <div className="container py-4">
            <NavLinks className="flex flex-col space-y-4" />
            {!user && (
              <div className="mt-6 flex flex-col gap-2">
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link to="/auth">Log in</Link>
                </Button>
                <Button className="w-full justify-center" asChild>
                  <Link to="/auth">Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

interface NavLinksProps {
  className?: string;
}

function NavLinks({ className }: NavLinksProps) {
  return (
    <ul className={cn("flex items-center gap-6", className)}>
      <li>
        <Link to="/savings-rates" className="text-sm font-medium transition-colors hover:text-primary">
          Savings Rates
        </Link>
      </li>
      <li>
        <Link to="/personal-loans" className="text-sm font-medium transition-colors hover:text-primary">
          Personal Loans
        </Link>
      </li>
      <li>
        <FinancialToolsDropdown />
      </li>
      <li>
        <Link to="/credit-cards" className="text-sm font-medium transition-colors hover:text-primary">
          Credit Cards
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
          About
        </Link>
      </li>
    </ul>
  );
}
