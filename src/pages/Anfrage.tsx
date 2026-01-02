import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Mail, Phone, MapPin } from "lucide-react";

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
    toast.success("Ihre Anfrage wurde gesendet! Wir melden uns bald bei Ihnen.");
    setFormData({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Anfrage stellen</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sie haben eine spezielle Anforderung oder möchten ein individuelles Projekt besprechen? 
            Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-serif font-bold mb-6">Schreiben Sie uns</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium mb-2">
                  Gewünschtes Produkt
                </label>
                <select
                  id="product"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="satteltasche">Satteltasche</option>
                  <option value="lenkertasche">Lenkertasche</option>
                  <option value="lenkerrolle">Lenkerrolle</option>
                  <option value="rahmentasche">Rahmentasche</option>
                  <option value="sonstiges">Sonstiges / Sonderwunsch</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anforderungen..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Anfrage senden
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-accent text-accent-foreground p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold mb-6">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">E-Mail</h3>
                    <p className="text-accent-foreground/80">info@reisefix.cc</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-accent-foreground/80">Nach Vereinbarung</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Werkstatt</h3>
                    <p className="text-accent-foreground/80">Halle, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-serif font-bold mb-4">Maßanfertigung</h3>
              <p className="text-muted-foreground mb-4">
                Für eine Maßanfertigung benötigen wir folgende Informationen:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Fahrradmodell und Rahmengröße
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Gewünschte Taschengröße
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Bevorzugter Stoff und Farbe
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Besondere Wünsche oder Anforderungen
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
