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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Katalog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere handgefertigten Fahrradtaschen. Jedes Stück wird nach Ihren 
            Wünschen und Maßen individuell gefertigt.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Keine Produkte in dieser Kategorie gefunden.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Katalog;
