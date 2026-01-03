import heroImage from "@/assets/hero-saddle-bag.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import fabricSwatches from "@/assets/fabric-swatches.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section 1 - Wie auf der echten Website */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Satteltasche Egon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground mb-8 italic">
            Alles drin. Alles dran.
          </h1>
          <Link to="/produkt/satteltasche-egon">
            <Button variant="outline" size="lg" className="bg-card/90 text-card-foreground border-card-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary">
              HER DAMIT!
            </Button>
          </Link>
        </div>
      </section>

      {/* Cream Stripe */}
      <div className="cream-stripe py-3" />

      {/* Hero Section 2 */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={fabricSwatches}
          alt="Lenkerrolle Bernd"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground mb-8 italic">
            Völlig von der Rolle.
          </h2>
          <Link to="/produkt/lenkerrolle-bernd">
            <Button variant="outline" size="lg" className="bg-card/90 text-card-foreground border-card-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary">
              ICH AUCH!
            </Button>
          </Link>
        </div>
      </section>

      {/* Cream Stripe mit Produkten */}
      <section className="cream-stripe py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display text-card-foreground mb-4">
              Wat wir so machen
            </h2>
            <p className="font-mono text-card-foreground/70 max-w-xl mx-auto">
              Jedes Teil wird von Hand genäht. Keine Massenware, keine Planwirtschaft – 
              nur das, was du brauchst.
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
              <Button className="bg-card-foreground text-card hover:bg-primary hover:text-primary-foreground">
                Zum Sortiment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dunkle Sektion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-display text-primary mb-4">01</div>
              <h3 className="text-xl font-display mb-3">Handarbeit</h3>
              <p className="font-mono text-muted-foreground text-sm">
                Alles kommt aus meiner Werkstatt in Halle. 
                Kein Fließband, keine Brigade.
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-display text-primary mb-4">02</div>
              <h3 className="text-xl font-display mb-3">Nach Maß</h3>
              <p className="font-mono text-muted-foreground text-sm">
                Du sagst mir die Maße, ich näh das Teil. 
                Planerfüllung garantiert.
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-display text-primary mb-4">03</div>
              <h3 className="text-xl font-display mb-3">Hält ewig</h3>
              <p className="font-mono text-muted-foreground text-sm">
                Ordentliche Materialien, ordentlich verarbeitet. 
                Das Ding überlebt dich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cream Stripe - Stoffe */}
      <section className="cream-stripe py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-card-foreground mb-6">
                Stoffe, die wat aushalten
              </h2>
              <p className="font-mono text-card-foreground/70 mb-6">
                Cordura, X-Pac, Wachstuch – such dir wat aus. 
                Ich zeig dir, wat ich hab und wat wozu taugt. 
                Camouflage geht auch, is ja nich mehr verboten.
              </p>
              <Link to="/stoffe">
                <Button className="bg-card-foreground text-card hover:bg-primary hover:text-primary-foreground">
                  Stoffe angucken
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={fabricSwatches}
                alt="Stoffauswahl"
                className="w-full retro-border-dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sektion */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-6">
            Bock auf<br />
            <span className="text-primary">dein eigenes Teil?</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-xl mx-auto mb-10">
            Schreib mir einfach, wat du dir vorstellst. 
            Wir kriegen dat hin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/anfrage">
              <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                Schreib mir
              </Button>
            </Link>
            <Link to="/katalog">
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                Erstma gucken
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
