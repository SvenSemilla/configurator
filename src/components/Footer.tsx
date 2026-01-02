import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-serif font-bold text-primary">reisefix</span>
            <p className="text-sm opacity-80">
              Handgefertigte Fahrradtaschen aus Halle. Unvergleichliche Qualität durch Handfertigung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/katalog" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Katalog</Link></li>
              <li><Link to="/stoffe" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Stoffe</Link></li>
              <li><Link to="/anfrage" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Anfrage</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-80">Reparatur Service</span></li>
              <li><span className="opacity-80">Maßanfertigung</span></li>
              <li><span className="opacity-80">Beratung</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>reisefix Fahrradtaschen</li>
              <li>Halle, Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-70">© {new Date().getFullYear()} reisefix Fahrradtaschen. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/impressum" className="opacity-70 hover:opacity-100 transition-opacity">Impressum</Link>
            <Link to="/datenschutz" className="opacity-70 hover:opacity-100 transition-opacity">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
