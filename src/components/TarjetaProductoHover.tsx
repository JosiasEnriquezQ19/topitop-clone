import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProductCardHoverProps {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  sizes?: string[];
  discount?: number;
}

export const TarjetaProductoHover = ({ 
  id,
  brand, 
  name, 
  price, 
  originalPrice, 
  image, 
  sizes = ["XS", "S", "M", "L"],
  discount 
}: ProductCardHoverProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/producto/${id}`} className="relative overflow-hidden bg-gray-100 block">
        {!imageError ? (
          <img 
            src={image} 
            alt={name} 
            className={`w-full aspect-[3/4] object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => {
              setImageLoaded(true);
              console.log('Image loaded successfully:', image);
            }}
            onError={(e) => {
              console.error('Image failed to load:', image, e);
              setImageError(true);
            }}
          />
        ) : (
          <img 
            src="/placeholder.svg" 
            alt={name}
            className="w-full aspect-[3/4] object-cover opacity-50"
          />
        )}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {discount}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} 
          />
        </button>

        {/* Hover Overlay */}
        <div 
          className={`absolute inset-x-0 bottom-0 bg-white p-4 transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Size Selector */}
          <div className="mb-3">
            <span className="text-xs text-gray-600 mb-2 block">Talla</span>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded-full border text-sm font-medium transition-colors ${
                    selectedSize === size 
                      ? "bg-black text-white border-black" 
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-white text-black border-2 border-black hover:bg-black hover:text-white rounded-none font-semibold"
          >
            AGREGAR AL CARRITO
          </Button>
        </div>
      </Link>

      {/* Product Info */}
      <Link to={`/producto/${id}`} className="pt-3 block">
        <p className="text-xs text-gray-500 mb-0.5">{brand}</p>
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1 hover:underline cursor-pointer">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold">S/ {price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              S/ {originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};
