import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = ["Alle", "Satteltaschen", "Lenkertaschen", "Rahmentaschen"];

const Katalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredProducts =
    selectedCategory === "Alle"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero - Cream Stripe */}
      <section className="cream-stripe py-12 border-b-2 border-card-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display text-card-foreground mb-3">Katalog</h1>
          <p className="font-mono text-card-foreground/70 max-w-xl">
            Hier siehst du, wat ich so mache. Such dir wat aus – 
            geht alles auch in anderen Maßen und Farben.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 font-mono text-sm transition-all border-2 ${
                selectedCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground/50 hover:border-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-muted-foreground">
              Nix gefunden. Probier mal ne andere Kategorie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Katalog;
