import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/produkt/${product.slug}`} className="group block">
      <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-2">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {product.category}
          </span>
          <h3 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="font-semibold text-lg">
              ab €{product.basePrice}
            </span>
            {product.customizable && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Maßanfertigung
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
