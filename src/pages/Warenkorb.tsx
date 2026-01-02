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
            <div className="w-24 h-24 bg-muted flex items-center justify-center mx-auto mb-6 border-2 border-foreground">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-display mb-4">NOCH NIX DRIN</h1>
            <p className="font-mono text-muted-foreground mb-8">
              Dein Korb ist leer. Aber das lässt sich ändern!
            </p>
            <Link to="/katalog">
              <Button variant="default" size="lg">
                MAL GUCKEN GEHEN
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display">DEIN KORB</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card retro-border p-4 flex gap-4"
              >
                {/* Image */}
                <div className="w-24 h-24 overflow-hidden flex-shrink-0 border-2 border-foreground">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg">{item.name.toUpperCase()}</h3>
                  <div className="text-sm font-mono text-muted-foreground mt-1 space-y-0.5">
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
                    <Trash2 className="h-5 w-5" />
                  </button>

                  <div className="flex items-center border-2 border-foreground">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-muted transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-3 font-mono font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-muted transition-colors"
                    >
                      <Plus className="h-4 w-4" />
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
            <div className="bg-card retro-border retro-shadow p-6 sticky top-24">
              <h2 className="text-xl font-display mb-6">ZUSAMMENFASSUNG</h2>

              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Zwischensumme</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Versand</span>
                  <span>Berechnen wir noch</span>
                </div>
              </div>

              <div className="border-t-2 border-foreground mt-4 pt-4">
                <div className="flex justify-between text-lg font-display">
                  <span>GESAMT</span>
                  <span className="text-primary">€{total.toFixed(2)}</span>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-1">inkl. MwSt.</p>
              </div>

              <Button variant="default" size="lg" className="w-full mt-6">
                BESTELLEN
              </Button>

              <p className="text-xs text-center font-mono text-muted-foreground mt-4">
                Nach der Bestellung melde ich mich bei dir wegen der Maße.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warenkorb;
