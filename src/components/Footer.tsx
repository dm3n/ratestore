
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t mt-16">
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
            <h3 className="font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/mortgages" className="text-sm text-muted-foreground hover:text-primary">Mortgages</Link></li>
              <li><Link to="/credit-cards" className="text-sm text-muted-foreground hover:text-primary">Credit Cards</Link></li>
              <li><Link to="/banking" className="text-sm text-muted-foreground hover:text-primary">Banking</Link></li>
              <li><Link to="/investing" className="text-sm text-muted-foreground hover:text-primary">Investing</Link></li>
              <li><Link to="/insurance" className="text-sm text-muted-foreground hover:text-primary">Insurance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Calculators</h3>
            <ul className="space-y-2">
              <li><Link to="/tools/mortgage-calculator" className="text-sm text-muted-foreground hover:text-primary">Mortgage Calculator</Link></li>
              <li><Link to="/tools/debt-payoff-calculator" className="text-sm text-muted-foreground hover:text-primary">Debt Payoff Calculator</Link></li>
              <li><Link to="/tools/tfsa-calculator" className="text-sm text-muted-foreground hover:text-primary">TFSA Calculator</Link></li>
              <li><Link to="/tools/affordability-calculator" className="text-sm text-muted-foreground hover:text-primary">Affordability Calculator</Link></li>
              <li><Link to="/tools/calculators" className="text-sm text-muted-foreground hover:text-primary">All Calculators</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="/guides/education-centre" className="text-sm text-muted-foreground hover:text-primary">Education Centre</Link></li>
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
