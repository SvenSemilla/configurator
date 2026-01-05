import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const { items } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { to: "/", label: "ZUHAUSE" },
    { to: "/katalog", label: "KATALOG" },
    { to: "/konfigurator", label: "KONFIGURATOR" },
    { to: "/stoffe", label: "STOFFE" },
    { to: "/anfrage", label: "ANFRAGE" },
  ];

  return (
    <header className="sticky top-0 z-50 cream-stripe border-b-2 border-card-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-display text-primary">reisefix</span>
            <span className="text-[10px] font-mono uppercase tracking-wide text-card-foreground/60 hidden sm:block leading-tight">
              FAHRRADTASCHEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-mono tracking-wide transition-colors ${
                  location.pathname === link.to 
                    ? "text-primary underline underline-offset-4" 
                    : "text-card-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/warenkorb">
              <Button variant="ghost" size="icon" className="relative text-card-foreground hover:text-primary hover:bg-transparent">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-card-foreground hover:text-primary hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-card-foreground/20 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-mono ${
                    location.pathname === link.to 
                      ? "text-primary" 
                      : "text-card-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
