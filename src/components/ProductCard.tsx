import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/produkt/${product.slug}`} className="group block">
      <div className="bg-card border-2 border-foreground overflow-hidden transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_hsl(var(--foreground))]">
        {/* Image */}
        <div className="aspect-square overflow-hidden border-b-2 border-foreground">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
            {product.category}
          </span>
          <h3 className="font-display text-lg group-hover:text-primary transition-colors">
            {product.name.toUpperCase()}
          </h3>
          <p className="text-sm font-mono text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="font-display text-lg">
              AB €{product.basePrice}
            </span>
            {product.customizable && (
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 font-mono border border-foreground">
                NACH MASS
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
