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
    { to: "/", label: "Start" },
    { to: "/katalog", label: "Sachen" },
    { to: "/stoffe", label: "Stoffe" },
    { to: "/anfrage", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary px-3 py-1 group-hover:bg-accent transition-colors">
              <span className="text-2xl font-display text-primary-foreground group-hover:text-accent-foreground">REISEFIX</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground hidden sm:block">
              Fahrradtaschen<br />aus Halle
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-display uppercase tracking-wide transition-all hover:-translate-y-0.5 ${
                  location.pathname === link.to 
                    ? "bg-foreground text-background" 
                    : "hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link to="/warenkorb">
              <Button variant="ghost" size="icon" className="relative hover:bg-muted border-2 border-transparent hover:border-foreground">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold border-2 border-foreground">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden border-2 border-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t-4 border-foreground animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-display uppercase tracking-wide ${
                    location.pathname === link.to 
                      ? "bg-foreground text-background" 
                      : "hover:bg-muted"
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
