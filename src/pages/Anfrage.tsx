import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Mail, MapPin } from "lucide-react";

const Anfrage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Hab's! Ich meld mich bei dir.");
    setFormData({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero - Cream Stripe */}
      <section className="cream-stripe py-12 border-b-2 border-card-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display text-card-foreground mb-3">Anfrage</h1>
          <p className="font-mono text-card-foreground/70 max-w-xl">
            Hast eine Idee? Brauchst was Spezielles? Oder willst einfach mal quatschen? Her damit!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-muted p-6 border-2 border-foreground/30">
            <h2 className="text-xl font-display mb-5">Was liegt an?</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-mono mb-1 text-muted-foreground">
                  Wie heißt du? *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground/50 bg-background text-foreground font-mono focus:outline-none focus:border-primary"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono mb-1 text-muted-foreground">
                  Deine E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground/50 bg-background text-foreground font-mono focus:outline-none focus:border-primary"
                  placeholder="deine@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-mono mb-1 text-muted-foreground">
                  Telefon (wenn du willst)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground/50 bg-background text-foreground font-mono focus:outline-none focus:border-primary"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-mono mb-1 text-muted-foreground">
                  Worum geht's?
                </label>
                <select
                  id="product"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground/50 bg-background text-foreground font-mono focus:outline-none focus:border-primary"
                >
                  <option value="">Such dir was aus...</option>
                  <option value="satteltasche-petra">Satteltasche PETRA</option>
                  <option value="satteltasche-egon">Satteltasche EGON</option>
                  <option value="lenkertasche-edgar">Lenkertasche EDGAR</option>
                  <option value="lenkerrolle-bernd">Lenkerrolle BERND</option>
                  <option value="lenkerrolle-bernd-fidlock">Lenkerrolle BERND FIDLOCK+</option>
                  <option value="rahmentasche">Rahmentasche</option>
                  <option value="oberrohrtasche">Oberrohrtasche</option>
                  <option value="lenkertasche-carsten">Lenkertasche CARSTEN</option>
                  <option value="bemmentasche-karin">Bemmentasche KARIN</option>
                  <option value="sonstiges">Was ganz anderes</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono mb-1 text-muted-foreground">
                  Erzähl mal *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground/50 bg-background text-foreground font-mono focus:outline-none focus:border-primary resize-none"
                  placeholder="Was schwebt dir vor? Welches Rad? Welche Maße? Einfach losschreiben..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Send className="h-4 w-4 mr-2" />
                Abschicken
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="cream-stripe p-6">
              <h2 className="text-xl font-display text-card-foreground mb-5">So erreichst du mich</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-display text-card-foreground text-sm">E-Mail</h3>
                    <p className="font-mono text-card-foreground/70">info@reisefix.cc</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-display text-card-foreground text-sm">Werkstatt</h3>
                    <p className="font-mono text-card-foreground/70">Halle (Saale)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 border-2 border-foreground/30">
              <h3 className="font-display mb-3">Für Sonderanfertigungen</h3>
              <p className="font-mono text-muted-foreground text-sm mb-4">
                Damit ich dir was Ordentliches nähen kann, sag mir:
              </p>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary mr-2" />
                  Was für ein Rad hast du?
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary mr-2" />
                  Wie groß soll's werden?
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary mr-2" />
                  Welcher Stoff, welche Farbe?
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary mr-2" />
                  Irgendwelche Extras?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anfrage;
