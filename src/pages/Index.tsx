import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section 1 - Alles drin. Alles dran. */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/720750bb-8017-4d88-b150-8be824e7d5c7/667-889/a1646acbdcc46a0f3fa8e8159c8074843e0bcb33"
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

      {/* Hero Section 2 - Völlig von der Rolle */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/bf75bcc9-a57c-476e-b5fe-4fc40a455623/768-1024/7f7c244e2cb4deed21f674a4513cd3ca30bd6eda"
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
              Handgefertigt in Halle
            </h2>
            <p className="font-mono text-card-foreground/70 max-w-xl mx-auto">
              Jedes Teil wird von Hand genäht. Keine Massenware – 
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
                Kein Fließband, keine Massenware.
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-display text-primary mb-4">02</div>
              <h3 className="text-xl font-display mb-3">Nach Maß</h3>
              <p className="font-mono text-muted-foreground text-sm">
                Du sagst mir die Maße, ich näh das Teil. 
                Passt garantiert.
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
                Stoffe, die was aushalten
              </h2>
              <p className="font-mono text-card-foreground/70 mb-6">
                X-Pac RX30, VX21, X11 – such dir was aus. 
                Ich zeig dir, was ich hab und was wozu taugt. 
                Multicam geht auch, ist ja nicht mehr verboten.
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
                src="https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/6b651d5c-e245-4bea-845c-bacfdc2304b4/768-768/f57ec97f12ec46479eb2ab0a2593749c7d00c80e"
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
            Schreib mir einfach, was du dir vorstellst. 
            Wir kriegen das hin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/anfrage">
              <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                Schreib mir
              </Button>
            </Link>
            <Link to="/katalog">
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                Erstmal gucken
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
