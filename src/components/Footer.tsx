import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="cream-stripe border-t-2 border-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <span className="text-2xl font-display text-primary">reisefix</span>
            <p className="text-sm font-mono text-card-foreground/70">
              Fahrradtaschen aus Halle.<br />
              Handgenäht, nach Maß.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-card-foreground mb-4">Rumgucken</h4>
            <ul className="space-y-2 text-sm font-mono">
              <li><Link to="/katalog" className="text-card-foreground/70 hover:text-primary transition-colors">Katalog</Link></li>
              <li><Link to="/konfigurator" className="text-card-foreground/70 hover:text-primary transition-colors">Konfigurator</Link></li>
              <li><Link to="/stoffe" className="text-card-foreground/70 hover:text-primary transition-colors">Stoffe</Link></li>
              <li><Link to="/anfrage" className="text-card-foreground/70 hover:text-primary transition-colors">Anfrage</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-display text-card-foreground mb-4">Geht auch</h4>
            <ul className="space-y-2 text-sm font-mono text-card-foreground/70">
              <li>Reparaturen</li>
              <li>Sonderanfertigungen</li>
              <li>Einfach fragen</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-card-foreground mb-4">Findest hier</h4>
            <ul className="space-y-2 text-sm font-mono text-card-foreground/70">
              <li>reisefix</li>
              <li>Halle (Saale)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm font-mono">
          <p className="text-card-foreground/50">© {new Date().getFullYear()} reisefix</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/impressum" className="text-card-foreground/50 hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-card-foreground/50 hover:text-primary transition-colors">Datenschutzerklärung</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
