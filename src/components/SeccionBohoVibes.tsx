import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductItem {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  sizes: string[];
}

export const SeccionBohoVibes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const slides = [
    {
      title: "Boho Vibes",
      description: "¡Descubre la magia del look bohemio y renueva tu closet con piezas llenas de encanto!",
      videoUrl: "https://topmedia.sfo3.digitaloceanspaces.com/storefront/Rrss_Navidad_Xiomi.mp4",
    },
  ];

  const products: ProductItem[] = [
    {
      id: 1,
      brand: "Xiomi",
      name: "Polo Mujer Kiana Azul Pacífico",
      price: 49.95,
      originalPrice: 99.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395439-300-400?v=638987643640130000&width=300&height=400&aspect=true",
      sizes: ["XS", "S", "M", "L"],
    },
    {
      id: 2,
      brand: "Xiomi",
      name: "Pantalón Mujer Minerva Crema",
      price: 69.95,
      originalPrice: 139.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395431-300-400?v=638987642828100000&width=300&height=400&aspect=true",
      sizes: ["26", "30"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px] mt-10 sm:mt-16">
      {/* Left - Text Content */}
      <div className="bg-black text-white p-8 sm:p-12 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {slides[currentSlide].title}
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
          {slides[currentSlide].description}
        </p>
        
        <div className="w-full h-px bg-gray-700 mb-8" />
        
        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Center - Video */}
      <div className="relative bg-black">
        <video
          src={slides[currentSlide].videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
        />
      </div>

      {/* Right - Products */}
      <div className="bg-white p-6 sm:p-8 flex flex-col justify-center gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex gap-4">
            {/* Product Image */}
            <div className="w-24 sm:w-32 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
              <h3 className="text-sm font-medium mb-2 line-clamp-2 hover:underline cursor-pointer">
                {product.name}
              </h3>
              
              {/* Price */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base font-bold">S/ {product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    S/ {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Sizes */}
              <div className="mb-3">
                <span className="text-xs text-gray-500 mb-1 block">Talla</span>
                <div className="flex gap-1.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(product.id, size)}
                      className={`w-8 h-8 rounded-full border text-xs font-medium transition-colors ${
                        selectedSizes[product.id] === size
                          ? "bg-black text-white border-black"
                          : "border-gray-300 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Add to Cart */}
              <Button
                variant="outline"
                className="w-full rounded-none border-black text-black hover:bg-black hover:text-white text-xs py-2"
              >
                AGREGAR AL CARRITO
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
