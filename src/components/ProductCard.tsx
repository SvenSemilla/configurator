import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      to={`/produkt/${product.slug}`} 
      className="group block bg-muted border-2 border-foreground/30 hover:border-primary transition-colors"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-mono text-muted-foreground">{product.category}</span>
        <h3 className="font-display text-lg mt-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="font-mono text-primary mt-2">ab €{product.basePrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
