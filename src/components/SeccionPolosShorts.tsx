import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import productosMujerData from "@/data/productos_mujer.json";

interface ProductItem {
  id: number;
  brand: string;
  name: string;
  code: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  sizes: string[];
}

export const SeccionPolosShorts = () => {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
  const { addToCart } = useCart();

  const products: ProductItem[] = productosMujerData.slice(0, 3).map((item, index) => ({
    id: index + 1,
    brand: item.brand,
    name: item.name,
    code: item.code,
    price: item.price,
    originalPrice: item.originalPrice,
    discount: item.discount,
    image: item.image,
    sizes: item.sizes,
  }));

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product: ProductItem) => {
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

  return (
    <section className="bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Moda Mujer ✨</h2>
          <Link to="/catalogo/mujer" className="text-sm font-medium hover:underline">
            VER TODO →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <Link to={`/producto/${product.code}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  -{product.discount}%
                </div>
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
                  <span className="text-xl font-bold text-black">S/ {product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-400 line-through">
                    S/ {product.originalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-xs text-gray-600 font-medium mb-2 block">Talla</span>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(product.id, size)}
                        className={`min-w-[40px] h-10 px-3 rounded-full border text-xs font-medium transition-all ${
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
                  className="w-full rounded-none border-black text-black hover:bg-black hover:text-white text-sm font-semibold py-5"
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
