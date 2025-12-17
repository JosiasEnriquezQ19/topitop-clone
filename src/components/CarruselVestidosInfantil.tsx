import { ChevronLeft, ChevronRight, ArrowRight, Heart } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import productosInfantilData from "@/data/productos_infantil.json";

interface Product {
  id: number;
  brand: string;
  name: string;
  code: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
}

export const CarruselVestidosInfantil = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
  const { addToCart } = useCart();

  const products: Product[] = productosInfantilData.slice(0, 7).map((item, index) => ({
    id: index + 1,
    brand: item.brand,
    name: item.name,
    code: item.code,
    price: item.price,
    originalPrice: item.originalPrice,
    image: item.image,
    discount: item.discount,
  }));

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product: Product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      toast.error("Por favor selecciona una talla");
      return;
    }
    
    addToCart({
      id: product.code,
      brand: product.brand,
      name: product.name,
      size: selectedSize,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity: 1,
      image: product.image,
    });
    
    toast.success("Agregado al carrito");
  };

  const sizes = ["02", "04", "06", "08", "10", "12", "14"];

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Niños y Maravillas ✨
        </h2>
        <Link to="/catalogo/infantil" className="flex items-center gap-1 text-sm font-medium hover:underline">
          VER TODO <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative container mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <Link to={`/producto/${product.code}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </div>
                )}
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <Link to={`/producto/${product.code}`}>
                  <h3 className="text-sm font-medium mb-1 line-clamp-2 hover:underline cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-400 mb-3">Código: {product.code}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-black">S/ {product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      S/ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-xs text-gray-600 font-medium mb-2 block">Talla</span>
                  <div className="flex gap-1.5 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(product.id, size)}
                        className={`w-10 h-10 rounded-full border text-xs font-medium transition-all ${
                          selectedSizes[product.id] === size
                            ? "bg-black text-white border-black scale-105"
                            : "border-gray-300 hover:border-black hover:scale-105"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => handleAddToCart(product)}
                  className="w-full rounded-none border-black text-black hover:bg-black hover:text-white text-xs font-semibold py-5"
                >
                  AGREGAR AL CARRITO
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
