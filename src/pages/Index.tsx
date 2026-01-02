import heroImage from "@/assets/hero-saddle-bag.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Ruler, Zap } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import fabricSwatches from "@/assets/fabric-swatches.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Bold DDR Style */}
      <section className="relative min-h-[90vh] overflow-hidden bg-primary">
        {/* Geometric decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-accent rotate-12 opacity-40" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-4 border-card opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-accent rotate-45 opacity-20" />
        
        <div className="container mx-auto px-4 h-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="space-y-8 animate-slide-up relative z-10">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 retro-border text-sm font-bold tracking-wider">
                HANDGEMACHT IN HALLE
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary-foreground leading-[0.9]">
                ALLES<br />
                DRIN.<br />
                <span className="text-accent">ALLES</span><br />
                <span className="text-accent">DRAN.</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-md font-mono">
                Deine Fahrradtasche, deine Maße, dein Stoff. 
                Jedes Teil wird von Hand genäht – nur für dich.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/katalog">
                  <Button variant="retro" size="lg" className="group">
                    SCHAU MAL REIN
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/anfrage">
                  <Button variant="retroOutline" size="lg">
                    LASS UNS QUATSCHEN
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-accent rotate-3" />
              <img
                src={heroImage}
                alt="Handgenähte Satteltasche"
                className="relative w-full aspect-square object-cover retro-border"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-3 retro-border font-bold">
                100% HANDARBEIT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Skewed */}
      <section className="py-24 bg-card relative geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 retro-border hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 retro-shadow-sm">
                <Wrench className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display mb-3">HANDGEMACHT</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Jede Tasche entsteht in meiner Werkstatt in Halle. Kein Fließband, kein Quatsch.
              </p>
            </div>
            
            <div className="bg-background p-8 retro-border hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6 retro-shadow-sm">
                <Ruler className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display mb-3">NACH DEINEM MASS</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Du sagst mir die Maße, ich näh dir das Teil. So einfach ist das.
              </p>
            </div>
            
            <div className="bg-background p-8 retro-border hover-lift animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6 retro-shadow-sm">
                <Zap className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-display mb-3">HÄLT EWIG</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Nur beste Materialien. Die Tasche überlebt dich wahrscheinlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-muted relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-primary" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display mb-4">WAS ICH SO MACHE</h2>
            <p className="text-muted-foreground font-mono max-w-xl mx-auto">
              Check mal die Sachen durch – und wenn dir was gefällt, 
              dann meld dich einfach. Geht alles auch in anderen Größen und Farben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/katalog">
              <Button variant="default" size="lg" className="retro-shadow">
                ALLES ANSEHEN
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fabric Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-8 border-card/20" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rotate-45" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display">STOFFE, DIE WAS AUSHALTEN</h2>
              <p className="text-secondary-foreground/80 font-mono">
                Cordura, X-Pac, Wachstuch – such dir was aus! 
                Ich zeig dir, was ich da hab und was wozu taugt. 
                Und ja, Camouflage geht auch.
              </p>
              <Link to="/stoffe">
                <Button variant="retro" size="lg">
                  STOFFE CHECKEN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent -rotate-2" />
              <img
                src={fabricSwatches}
                alt="Stoffauswahl"
                className="relative w-full retro-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background relative">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            BOCK AUF<br />
            <span className="text-primary">DEIN EIGENES TEIL?</span>
          </h2>
          <p className="text-background/70 font-mono max-w-xl mx-auto mb-10">
            Schreib mir einfach, was du dir vorstellst. 
            Wir kriegen das schon hin!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/anfrage">
              <Button variant="retro" size="lg">
                SCHREIB MIR
              </Button>
            </Link>
            <Link to="/katalog">
              <Button variant="retroOutline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
                ERSTMAL GUCKEN
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
