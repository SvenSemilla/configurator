import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

const Warenkorb = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="w-20 h-20 bg-muted flex items-center justify-center mx-auto mb-5 border-2 border-foreground/30">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-display mb-3">Noch nix drin</h1>
            <p className="font-mono text-muted-foreground mb-6">
              Dein Korb is leer. Aber det lässt sich ändern!
            </p>
            <Link to="/katalog">
              <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                Mal gucken gehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero - Cream Stripe */}
      <section className="cream-stripe py-12 border-b-2 border-card-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display text-card-foreground">Warenkorb</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-muted border-2 border-foreground/30 p-4 flex gap-4"
              >
                {/* Image */}
                <div className="w-20 h-20 overflow-hidden flex-shrink-0 border-2 border-foreground/30">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display">{item.name}</h3>
                  <div className="text-xs font-mono text-muted-foreground mt-1 space-y-0.5">
                    {item.variants.fabric && <p>Stoff: {item.variants.fabric}</p>}
                    {item.variants.size && <p>Größe: {item.variants.size}</p>}
                    {item.variants.color && <p>Details: {item.variants.color}</p>}
                  </div>
                  <p className="font-display text-primary mt-2">€{item.price}</p>
                </div>

                {/* Quantity & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="flex items-center border-2 border-foreground/50">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-background transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-2 font-mono text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-background transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm font-mono text-muted-foreground hover:text-destructive transition-colors"
            >
              Alles raus
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="cream-stripe p-6 sticky top-20">
              <h2 className="text-lg font-display text-card-foreground mb-4">Zusammenfassung</h2>

              <div className="space-y-2 font-mono text-sm text-card-foreground/70">
                <div className="flex justify-between">
                  <span>Zwischensumme</span>
                  <span className="text-card-foreground">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Versand</span>
                  <span className="text-card-foreground">Berechnen wir noch</span>
                </div>
              </div>

              <div className="border-t border-card-foreground/20 mt-4 pt-4">
                <div className="flex justify-between font-display text-card-foreground">
                  <span>Gesamt</span>
                  <span className="text-primary">€{total.toFixed(2)}</span>
                </div>
                <p className="text-xs font-mono text-card-foreground/50 mt-1">inkl. MwSt.</p>
              </div>

              <Button className="w-full mt-5 bg-card-foreground text-card hover:bg-primary hover:text-primary-foreground">
                Bestellen
              </Button>

              <p className="text-xs text-center font-mono text-card-foreground/50 mt-3">
                Nach der Bestellung meld ich mich bei dir wegen der Maße.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warenkorb;
