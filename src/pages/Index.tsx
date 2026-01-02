import heroImage from "@/assets/hero-saddle-bag.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Ruler, Shield } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import fabricSwatches from "@/assets/fabric-swatches.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Handgefertigte Satteltasche"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-accent-foreground leading-tight">
              Alles drin.<br />
              <span className="text-primary">Alles dran.</span>
            </h1>
            <p className="text-lg text-accent-foreground/80">
              Handgefertigte Fahrradtaschen aus Halle. Jedes Stück nach Maß – individuell gefertigt für Ihr Abenteuer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/katalog">
                <Button variant="hero" size="lg">
                  Zum Katalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/anfrage">
                <Button variant="heroOutline" size="lg">
                  Maßanfertigung
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Handgefertigt</h3>
                <p className="text-muted-foreground">Jede Tasche wird von Hand in unserer Werkstatt in Halle gefertigt.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Ruler className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Nach Maß</h3>
                <p className="text-muted-foreground">Konfigurieren Sie Größe, Stoff und Details nach Ihren Wünschen.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Langlebig</h3>
                <p className="text-muted-foreground">Premium-Materialien für jahrelange Abenteuer auf dem Rad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Unsere Produkte</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere handgefertigten Fahrradtaschen – jede ein Unikat, gefertigt nach Ihren Wünschen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/katalog">
              <Button variant="heroOutline" size="lg">
                Alle Produkte ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fabric Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Premium Stoffe</h2>
              <p className="text-muted-foreground">
                Wählen Sie aus einer Vielzahl hochwertiger Stoffe – von robustem Cordura über wasserdichte 
                Materialien bis hin zu stylischen Camouflage-Mustern. Jeder Stoff wurde sorgfältig für 
                Langlebigkeit und Funktionalität ausgewählt.
              </p>
              <Link to="/stoffe">
                <Button variant="default" size="lg">
                  Stoffe entdecken
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={fabricSwatches}
                alt="Stoffauswahl"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Bereit für Ihr individuelles Stück?
          </h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
            Kontaktieren Sie uns für eine persönliche Beratung oder starten Sie direkt mit der 
            Konfiguration Ihrer Wunsch-Tasche.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/anfrage">
              <Button variant="hero" size="lg">
                Anfrage stellen
              </Button>
            </Link>
            <Link to="/katalog">
              <Button variant="heroOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent">
                Im Katalog stöbern
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
