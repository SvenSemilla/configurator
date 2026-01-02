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
          <h1 className="text-2xl font-serif font-bold mb-4">Produkt nicht gefunden</h1>
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
    toast.success(`${product.name} wurde zum Warenkorb hinzugefügt!`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.customizable && (
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Maßanfertigung
              </div>
            )}
          </div>

          {/* Product Info & Configurator */}
          <div className="space-y-8">
            <div>
              <span className="text-sm uppercase tracking-wide text-muted-foreground">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mt-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary mt-4">€{calculatePrice()}</p>
            </div>

            <p className="text-muted-foreground">{product.longDescription}</p>

            {/* Fabric Selection */}
            <div>
              <h3 className="font-semibold mb-3">Stoff wählen</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.fabrics.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`p-3 rounded-md border text-left transition-all ${
                      selectedFabric?.id === fabric.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-sm font-medium">{fabric.name}</span>
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
              <h3 className="font-semibold mb-3">Größe wählen</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border transition-all ${
                      selectedSize?.id === size.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
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
              <h3 className="font-semibold mb-3">Details wählen</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border transition-all ${
                      selectedColor?.id === color.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
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
              <div>
                <h3 className="font-semibold mb-3">Maße eingeben</h3>
                <div className="grid gap-4">
                  {product.measurements.map((measurement) => (
                    <div key={measurement.name} className="flex items-center gap-4">
                      <label className="flex-1 text-sm">
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
                        className="w-24 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} variant="hero" size="lg" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                In den Warenkorb
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
