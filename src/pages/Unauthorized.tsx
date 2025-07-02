
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function Unauthorized() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <Shield className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Access Denied
            </h1>
            <p className="text-gray-600 mb-8">
              You don't have permission to access this page. Please contact an administrator if you believe this is an error.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/">
                Return to Home
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link to="/login">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Unauthorized;
