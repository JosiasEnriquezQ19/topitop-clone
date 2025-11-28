import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "sale" | "new";
  category: string;
}

export const ProductCard = ({ name, price, originalPrice, image, badge, category }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="product-image" />
        
        {/* Badges */}
        {badge && (
          <div className="absolute top-3 left-3">
            {badge === "sale" && (
              <span className="badge-sale">-{discount}%</span>
            )}
            {badge === "new" && (
              <span className="badge-new">NUEVO</span>
            )}
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
              isLiked
                ? "bg-primary text-primary-foreground"
                : "bg-white/80 text-foreground hover:bg-white"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button className="w-full rounded-none bg-primary hover:bg-primary-hover text-primary-foreground py-6">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Agregar al carrito
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {category}
        </p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">S/ {price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              S/ {originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
