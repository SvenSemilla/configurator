import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { getProductBySlug, ProductVariant } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductBySlug(slug || "");

  const [selectedFabric, setSelectedFabric] = useState<ProductVariant | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductVariant | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductVariant | null>(null);
  const [measurements, setMeasurements] = useState<Record<string, number>>({});
  const [quantity, setQuantity] = useState(1);

  useMemo(() => {
    if (product) {
      if (product.fabrics.length && !selectedFabric) setSelectedFabric(product.fabrics[0]);
      if (product.sizes.length && !selectedSize) setSelectedSize(product.sizes[0]);
      if (product.colors.length && !selectedColor) setSelectedColor(product.colors[0]);
      if (product.measurements) {
        const defaults: Record<string, number> = {};
        product.measurements.forEach((m) => {
          defaults[m.name] = m.default;
        });
        setMeasurements(defaults);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Nicht gefunden</h1>
          <Button onClick={() => navigate("/katalog")}>Zurück zum Katalog</Button>
        </div>
      </div>
    );
  }

  const calculatePrice = () => {
    let price = product.basePrice;
    if (selectedFabric) price += selectedFabric.priceModifier;
    if (selectedSize) price += selectedSize.priceModifier;
    if (selectedColor) price += selectedColor.priceModifier;
    return price;
  };

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${Date.now()}`,
      name: product.name,
      price: calculatePrice(),
      quantity,
      image: product.image,
      variants: {
        fabric: selectedFabric?.name,
        size: selectedSize?.name,
        color: selectedColor?.name,
        customMeasurements: measurements,
      },
    });
    toast.success(`${product.name} eingepackt!`);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="cream-stripe border-b border-card-foreground/20">
        <div className="container mx-auto px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center font-mono text-sm text-card-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            zurück
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden border-2 border-foreground">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.customizable && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 font-mono text-sm">
                NACH MASS
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-mono text-muted-foreground">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-display mt-1">{product.name}</h1>
              <p className="text-sm font-mono text-primary mt-1">freie Farb- & Materialwahl</p>
              <p className="text-2xl font-display text-primary mt-3">ab €{calculatePrice()}</p>
            </div>

            <p className="font-mono text-muted-foreground text-sm leading-relaxed">
              {product.longDescription}
            </p>

            {/* Stoff */}
            <div className="cream-stripe p-5">
              <h3 className="font-display text-card-foreground mb-3">Stoff wählen</h3>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                {product.fabrics.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`p-3 text-left font-mono text-sm transition-all border-2 ${
                      selectedFabric?.id === fabric.id
                        ? "border-primary bg-primary/10"
                        : "border-card-foreground/30 hover:border-card-foreground"
                    }`}
                  >
                    {fabric.name}
                    {fabric.priceModifier > 0 && (
                      <span className="text-xs text-card-foreground/60 ml-1">+€{fabric.priceModifier}</span>
                    )}
                    {selectedFabric?.id === fabric.id && (
                      <Check className="h-4 w-4 text-primary inline ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Größe */}
            {product.sizes.length > 1 && (
              <div>
                <h3 className="font-display mb-3">Größe / Variante</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 font-mono text-sm transition-all border-2 ${
                        selectedSize?.id === size.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-foreground/50 hover:border-foreground"
                      }`}
                    >
                      {size.name}
                      {size.priceModifier > 0 && (
                        <span className="text-xs ml-1 opacity-75">+€{size.priceModifier}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Gurtband-Farbe */}
            <div>
              <h3 className="font-display mb-3">Gurtband-Farbe</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.slice(0, 10).map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3 py-2 font-mono text-sm transition-all border-2 ${
                      selectedColor?.id === color.id
                        ? "border-primary bg-primary/10"
                        : "border-foreground/50 hover:border-foreground"
                    }`}
                  >
                    {color.color && (
                      <span 
                        className="w-4 h-4 border border-foreground/30"
                        style={{ backgroundColor: color.color }}
                      />
                    )}
                    {color.name}
                  </button>
                ))}
              </div>
              {product.colors.length > 10 && (
                <p className="text-xs font-mono text-muted-foreground mt-2">
                  + {product.colors.length - 10} weitere Farben verfügbar
                </p>
              )}
            </div>

            {/* Maße */}
            {product.measurements && (
              <div className="bg-muted p-5 border-2 border-foreground/30">
                <h3 className="font-display mb-3">Deine Maße</h3>
                <div className="grid gap-3">
                  {product.measurements.map((measurement) => (
                    <div key={measurement.name} className="flex items-center gap-3">
                      <label className="flex-1 font-mono text-sm text-muted-foreground">
                        {measurement.name} ({measurement.unit})
                      </label>
                      <input
                        type="number"
                        min={measurement.min}
                        max={measurement.max}
                        value={measurements[measurement.name] || measurement.default}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            [measurement.name]: parseInt(e.target.value) || measurement.default,
                          })
                        }
                        className="w-20 px-3 py-2 border-2 border-foreground/50 bg-background text-foreground font-mono text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Menge & Warenkorb */}
            <div className="flex items-center gap-4 pt-4 border-t border-foreground/30">
              <div className="flex items-center border-2 border-foreground/50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-muted transition-colors font-mono"
                >
                  -
                </button>
                <span className="px-4 py-2 font-mono">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-muted transition-colors font-mono"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} className="flex-1 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <ShoppingBag className="h-4 w-4 mr-2" />
                In die Tasche
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
