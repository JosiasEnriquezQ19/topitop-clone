import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

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

  const products: ProductItem[] = [
    {
      id: 1,
      brand: "Topitop mujer",
      name: "Polo Mujer Zully Beige Arena",
      code: "3153339",
      price: 59.94,
      originalPrice: 99.90,
      discount: 40,
      image: "https://topitop.vtexassets.com/arquivos/ids/396481-500-auto?v=638993564878000000&width=500&height=auto&aspect=true",
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 2,
      brand: "Xiomi",
      name: "Short Mujer Anahi Morado Olive",
      code: "3145181",
      price: 35.96,
      originalPrice: 89.90,
      discount: 60,
      image: "https://topitop.vtexassets.com/arquivos/ids/395736/3145182_1.jpg?v=638992597906830000",
      sizes: ["26", "28", "30", "32"],
    },
    {
      id: 3,
      brand: "Topitop mujer",
      name: "Short Mujer Madeleine Azul Náutico",
      code: "3144821",
      price: 49.45,
      originalPrice: 89.90,
      discount: 45,
      image: "https://topitop.vtexassets.com/arquivos/ids/395178/3144821_1.jpg?v=638987612959200000",
      sizes: ["26", "28", "30", "32"],
    },
  ];

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section className="bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Polos y Shorts</h2>
          <Link to="/catalogo/mujer" className="text-sm font-medium hover:underline">
            VER TODO →
          </Link>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Imagen del producto */}
              <div className="relative">
                <Link to={`/producto/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {/* Badge de descuento */}
                <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  -{product.discount}%
                </div>
                {/* Botón de favorito */}
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Info del producto */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                <Link to={`/producto/${product.id}`}>
                  <h3 className="text-sm font-medium mb-1 line-clamp-2 hover:underline cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-400 mb-3">Código: {product.code}</p>

                {/* Precio */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-black">S/ {product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-400 line-through">
                    S/ {product.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Selector de tallas */}
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

                {/* Botón agregar al carrito */}
                <Button
                  variant="outline"
                  className="w-full rounded-none border-black text-black hover:bg-black hover:text-white text-sm font-semibold py-5"
                  disabled={!selectedSizes[product.id]}
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
