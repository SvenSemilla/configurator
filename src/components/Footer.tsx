import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background border-t-4 border-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-primary inline-block px-3 py-1">
              <span className="text-2xl font-display text-primary-foreground">REISEFIX</span>
            </div>
            <p className="text-sm font-mono opacity-80">
              Fahrradtaschen aus Halle. Handgenäht, nach Maß, ohne Schnickschnack.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg mb-4">RUMGUCKEN</h4>
            <ul className="space-y-3 text-sm font-mono">
              <li><Link to="/katalog" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">→ Die Sachen</Link></li>
              <li><Link to="/stoffe" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">→ Die Stoffe</Link></li>
              <li><Link to="/anfrage" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">→ Schreib mir</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-display text-lg mb-4">SOWAS GEHT AUCH</h4>
            <ul className="space-y-3 text-sm font-mono opacity-70">
              <li>• Reparaturen</li>
              <li>• Sonderanfertigungen</li>
              <li>• Wenn du fragst, sag ich dir was</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">FINDEST MICH</h4>
            <ul className="space-y-3 text-sm font-mono opacity-70">
              <li>reisefix</li>
              <li>Halle (Saale)</li>
              <li>Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-mono">
          <p className="opacity-50">© {new Date().getFullYear()} reisefix — Alles drin. Alles dran.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/impressum" className="opacity-50 hover:opacity-100 transition-opacity">Impressum</Link>
            <Link to="/datenschutz" className="opacity-50 hover:opacity-100 transition-opacity">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
