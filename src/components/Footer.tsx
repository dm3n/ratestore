
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t mt-16">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-primary to-indigo-600">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">R</div>
              </div>
              <span className="font-bold text-xl">RateStore</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted source for financial rate comparisons and comprehensive financial planning tools.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Rate Comparisons</h3>
            <ul className="space-y-2">
              <li><Link to="/savings-rates" className="text-sm text-muted-foreground hover:text-primary">Savings Rates</Link></li>
              <li><Link to="/personal-loans" className="text-sm text-muted-foreground hover:text-primary">Personal Loans</Link></li>
              <li><Link to="/credit-cards" className="text-sm text-muted-foreground hover:text-primary">Credit Cards</Link></li>
              <li><Link to="/cd-rates" className="text-sm text-muted-foreground hover:text-primary">CD Rates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Financial Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/tools/compound-interest" className="text-sm text-muted-foreground hover:text-primary">Compound Interest Calculator</Link></li>
              <li><Link to="/tools/debt-payoff" className="text-sm text-muted-foreground hover:text-primary">Debt Payoff Calculator</Link></li>
              <li><Link to="/tools/retirement" className="text-sm text-muted-foreground hover:text-primary">Retirement Calculator</Link></li>
              <li><Link to="/tools/emergency-fund" className="text-sm text-muted-foreground hover:text-primary">Emergency Fund Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RateStore. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary">Terms of Use</Link>
              <Link to="/disclosure" className="text-xs text-muted-foreground hover:text-primary">Disclosures</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
