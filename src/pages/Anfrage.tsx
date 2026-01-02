import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Mail, MapPin, MessageCircle } from "lucide-react";

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
    toast.success("Hab's bekommen! Ich meld mich bei dir.");
    setFormData({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16 relative overflow-hidden">
        <div className="absolute top-5 right-10 w-24 h-24 border-4 border-foreground/20 rotate-12" />
        <div className="absolute bottom-5 left-20 w-16 h-16 bg-primary/30 rotate-45" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display mb-4">SCHREIB MIR!</h1>
          <p className="font-mono text-accent-foreground/80 max-w-xl">
            Hast ne Idee? Brauchst was Spezielles? Oder willst einfach mal quatschen? 
            Her damit!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 retro-border retro-shadow">
            <h2 className="text-2xl font-display mb-6">WAS LIEGT AN?</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-display mb-2">
                  WIE HEISST DU? *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-display mb-2">
                  DEINE E-MAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="deine@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-display mb-2">
                  TELEFON (WENN DU WILLST)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-display mb-2">
                  WORUM GEHT'S?
                </label>
                <select
                  id="product"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Such dir was aus...</option>
                  <option value="satteltasche">Satteltasche</option>
                  <option value="lenkertasche">Lenkertasche</option>
                  <option value="lenkerrolle">Lenkerrolle</option>
                  <option value="rahmentasche">Rahmentasche</option>
                  <option value="sonstiges">Was ganz anderes</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-display mb-2">
                  ERZÄHL MAL *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-foreground bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Was schwebt dir vor? Welches Rad? Welche Maße? Einfach losschreiben..."
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                ABSCHICKEN
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-secondary text-secondary-foreground p-8 retro-border">
              <h2 className="text-2xl font-display mb-6">SO ERREICHST DU MICH</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card flex items-center justify-center flex-shrink-0 border-2 border-foreground">
                    <Mail className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display">E-MAIL</h3>
                    <p className="font-mono text-secondary-foreground/80">info@reisefix.cc</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card flex items-center justify-center flex-shrink-0 border-2 border-foreground">
                    <MessageCircle className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display">QUATSCHEN</h3>
                    <p className="font-mono text-secondary-foreground/80">Schreib mir einfach</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card flex items-center justify-center flex-shrink-0 border-2 border-foreground">
                    <MapPin className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display">WERKSTATT</h3>
                    <p className="font-mono text-secondary-foreground/80">Halle (Saale)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 retro-border">
              <h3 className="text-xl font-display mb-4">FÜR SONDERANFERTIGUNGEN</h3>
              <p className="font-mono text-muted-foreground mb-4">
                Damit ich dir was Ordentliches nähen kann, sag mir:
              </p>
              <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary mr-3" />
                  Was für'n Rad hast du?
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary mr-3" />
                  Wie groß soll's werden?
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary mr-3" />
                  Welcher Stoff, welche Farbe?
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary mr-3" />
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
