
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
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
                <Button variant="outline" className="w-full justify-center border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/auth">Sign In</Link>
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
    <ul className={cn("flex items-center gap-8", className)}>
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
