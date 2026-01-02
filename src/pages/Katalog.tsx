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
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute top-5 left-10 w-20 h-20 border-4 border-accent rotate-12 opacity-40" />
        <div className="absolute bottom-5 right-20 w-32 h-32 rounded-full border-4 border-card opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display mb-4">DIE SACHEN</h1>
          <p className="font-mono text-primary-foreground/80 max-w-xl">
            Hier siehst du, was ich so mache. Such dir was aus, 
            und wenn du's in anderen Maßen oder Farben willst – kein Ding.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-display text-sm uppercase tracking-wide transition-all border-2 border-foreground ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
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
