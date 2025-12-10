import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface Slide {
  id: number;
  brand: string;
  videoUrl: string;
  products: ProductItem[];
}

export const SeccionNavidad = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const slides: Slide[] = [
    {
      id: 1,
      brand: "Xiomi",
      videoUrl: "https://topmedia.sfo3.digitaloceanspaces.com/storefront/Rrss_Navidad_Xiomi.mp4",
      products: [
        {
          id: 1,
          brand: "Xiomi",
          name: "Vestido Mujer Nina Celeste",
          code: "3154367",
          price: 59.94,
          originalPrice: 99.90,
          discount: 40,
          image: "https://topitop.vtexassets.com/arquivos/ids/397049/3154367_1.jpg?v=638999529135800000",
          sizes: ["XS", "S", "M", "L"],
        },
        {
          id: 2,
          brand: "Xiomi",
          name: "Vestido Mujer Nina Coco",
          code: "3154352",
          price: 59.94,
          originalPrice: 99.90,
          discount: 40,
          image: "https://topitop.vtexassets.com/arquivos/ids/397053/3154353_1.jpg?v=638999529611800000",
          sizes: ["XS", "S", "M", "L"],
        },
      ],
    },
    {
      id: 2,
      brand: "Tpt Mujer",
      videoUrl: "https://topmedia.sfo3.digitaloceanspaces.com/storefront/Rrss_Navidad_Tptmujer.mp4",
      products: [
        {
          id: 3,
          brand: "Topitop mujer",
          name: "Vestido Mujer Leonor Solid Azul Lava",
          code: "3142948",
          price: 59.90,
          originalPrice: 109.90,
          discount: 45,
          image: "https://topitop.vtexassets.com/arquivos/ids/394933/3142948_1.jpg?v=638987585670900000",
          sizes: ["XS", "S", "M", "L"],
        },
        {
          id: 4,
          brand: "Topitop mujer",
          name: "Vestido Mujer Leonor Solid Rojo Tomate",
          code: "3142934",
          price: 59.90,
          originalPrice: 109.90,
          discount: 45,
          image: "https://topitop.vtexassets.com/arquivos/ids/394937/3142934_1.jpg?v=638987586129400000",
          sizes: ["XS", "S", "M", "L"],
        },
        {
          id: 5,
          brand: "Topitop mujer",
          name: "Vestido Mujer Leonor Solid Beige Oscuro",
          code: "3142927",
          price: 60.45,
          originalPrice: 109.90,
          discount: 45,
          image: "https://topitop.vtexassets.com/arquivos/ids/394941/3142927_1.jpg?v=638987586626700000",
          sizes: ["XS", "S", "M", "L"],
        },
      ],
    },
    {
      id: 3,
      brand: "Hawk",
      videoUrl: "https://topmedia.sfo3.digitaloceanspaces.com/storefront/Rrss_Navidad_Hawk.mp4",
      products: [
        {
          id: 6,
          brand: "Hawk",
          name: "Bermuda Hombre Freddys Azul Pageant",
          code: "3142581",
          price: 64.95,
          originalPrice: 129.90,
          discount: 50,
          image: "https://topitop.vtexassets.com/arquivos/ids/393547/3142582_1.jpg?v=638975724068130000",
          sizes: ["28", "30", "32", "34"],
        },
        {
          id: 7,
          brand: "Hawk",
          name: "Camisa Hombre Tulum Rosado Vintage",
          code: "3138131",
          price: 49.95,
          originalPrice: 99.90,
          discount: 50,
          image: "https://topitop.vtexassets.com/arquivos/ids/390553/3138133_1.jpg?v=638949374353270000",
          sizes: ["S", "M", "L", "XL"],
        },
      ],
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

  const currentSlideData = slides[currentSlide];

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header con navegación */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">{currentSlideData.brand}</h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid: Video + Productos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Video */}
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              key={currentSlideData.videoUrl}
              src={currentSlideData.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
            />
          </div>

          {/* Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {currentSlideData.products.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Imagen del producto */}
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  {/* Badge de descuento */}
                  <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                  {/* Icono de favorito */}
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Info del producto */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="text-sm font-medium mb-1 line-clamp-2 hover:underline cursor-pointer">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">Código: {product.code}</p>

                  {/* Precio */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold">S/ {product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-400 line-through">
                      S/ {product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Tallas */}
                  <div className="mb-3">
                    <span className="text-xs text-gray-500 mb-2 block">Talla</span>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`w-10 h-10 rounded-full border text-xs font-medium transition-colors ${
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

                  {/* Botón agregar al carrito */}
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
        </div>
      </div>
    </section>
  );
};
