import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { getProductBySlug, Product, ProductVariant } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
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

  // Initialize defaults
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
          <h1 className="text-2xl font-display mb-4">NIX GEFUNDEN</h1>
          <Button onClick={() => navigate("/katalog")}>ZURÜCK</Button>
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
    toast.success(`${product.name} liegt im Korb!`);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted border-b-2 border-foreground">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            ZURÜCK
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute -inset-3 bg-accent -rotate-1" />
            <div className="relative aspect-square overflow-hidden border-4 border-foreground">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.customizable && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 font-display text-sm border-2 border-foreground">
                NACH MASS
              </div>
            )}
          </div>

          {/* Product Info & Configurator */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display mt-2">{product.name.toUpperCase()}</h1>
              <p className="text-3xl font-display text-primary mt-4">€{calculatePrice()}</p>
            </div>

            <p className="font-mono text-muted-foreground">{product.longDescription}</p>

            {/* Fabric Selection */}
            <div className="bg-card p-6 retro-border">
              <h3 className="font-display text-lg mb-4">STOFF WÄHLEN</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.fabrics.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`p-4 text-left transition-all border-2 ${
                      selectedFabric?.id === fabric.id
                        ? "border-primary bg-primary/10"
                        : "border-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="font-mono text-sm">{fabric.name}</span>
                    {fabric.priceModifier > 0 && (
                      <span className="text-xs text-muted-foreground ml-2">
                        +€{fabric.priceModifier}
                      </span>
                    )}
                    {selectedFabric?.id === fabric.id && (
                      <Check className="h-4 w-4 text-primary inline ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-display text-lg mb-4">GRÖSSE</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 font-mono text-sm transition-all border-2 ${
                      selectedSize?.id === size.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground hover:bg-muted"
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

            {/* Color Selection */}
            <div>
              <h3 className="font-display text-lg mb-4">DETAILS</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-3 font-mono text-sm transition-all border-2 ${
                      selectedColor?.id === color.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground hover:bg-muted"
                    }`}
                  >
                    {color.name}
                    {color.priceModifier > 0 && (
                      <span className="text-xs ml-1 opacity-75">+€{color.priceModifier}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Measurements */}
            {product.measurements && (
              <div className="bg-muted p-6 retro-border">
                <h3 className="font-display text-lg mb-4">DEINE MASSE</h3>
                <div className="grid gap-4">
                  {product.measurements.map((measurement) => (
                    <div key={measurement.name} className="flex items-center gap-4">
                      <label className="flex-1 font-mono text-sm">
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
                        className="w-24 px-3 py-2 border-2 border-foreground bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 pt-6 border-t-2 border-foreground">
              <div className="flex items-center border-2 border-foreground">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-muted transition-colors font-mono"
                >
                  -
                </button>
                <span className="px-4 py-3 font-mono font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-muted transition-colors font-mono"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} variant="default" size="lg" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                IN DEN KORB
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
