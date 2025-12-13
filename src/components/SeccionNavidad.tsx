import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

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
  const { addToCart } = useCart();

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

  const handleAddToCart = (product: ProductItem) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      toast.error("Por favor selecciona una talla");
      return;
    }
    
    addToCart({
      id: product.id,
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

  const currentSlideData = slides[currentSlide];

  return (
    <section className="bg-white py-8 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1600px]">
        {/* Mobile: Column layout (video first), Desktop: Row layout */}
        <div className="flex flex-col lg:flex-row lg:h-[700px]">
          
          {/* Left Panel: Info & Navigation - Hidden on mobile, shows after video on tablet */}
          <div className="order-2 lg:order-1 w-full lg:w-1/4 flex flex-col justify-center px-4 lg:pl-12 lg:pr-8 py-8 lg:py-0 relative z-10">
            {/* Brand Title with Black Background */}
            <div className="bg-black text-white py-4 lg:py-6 px-6 lg:px-10 -mx-4 lg:-ml-12 lg:-mr-12 w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)] mb-6 lg:mb-12 shadow-lg relative z-20">
               <h2 className="text-2xl lg:text-4xl font-bold tracking-wide text-center lg:text-left">{currentSlideData.brand}</h2>
            </div>

            <div className="space-y-4 lg:space-y-8 pl-0 lg:pl-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg font-light">
                Tu look completo, en un solo paso 🌸
              </p>
              
              <div className="w-32 border-t-2 border-gray-800 mx-auto lg:mx-0"></div>

              {/* Navigation Arrows */}
              <div className="flex gap-4 pt-4 lg:pt-8 justify-center lg:justify-start">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Panel: Main Video/Image - Shows first on mobile */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center bg-gray-50 py-6 lg:py-10">
             {/* Mobile Screen Ratio Container (9:16) */}
             <div className="relative w-[200px] sm:w-[260px] lg:w-full lg:max-w-[320px] aspect-[9/16] shadow-2xl rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border-4 border-gray-900 bg-black">
                <video
                  key={currentSlideData.videoUrl}
                  src={currentSlideData.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Right Panel: Products */}
          <div className="order-3 w-full lg:w-1/4 bg-white p-4 lg:p-8 flex flex-col justify-start lg:justify-center gap-6 lg:gap-8 h-auto lg:h-full overflow-y-auto">
            {currentSlideData.products.map((product) => (
              <div key={product.id} className="flex flex-col gap-3 group">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-1/3 min-w-[100px] relative cursor-pointer">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover hover:opacity-90 transition-opacity"
                      />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                     <div>
                       <p className="text-xs text-gray-400 mb-1">{product.brand}</p>
                       <h3 className="text-sm font-medium mb-2 line-clamp-2 hover:underline cursor-pointer">
                         {product.name}
                       </h3>
                       
                       <div className="flex items-center gap-3 mb-2">
                         <span className="font-bold text-lg">S/ {product.price.toFixed(2)}</span>
                         {product.originalPrice > product.price && (
                           <span className="text-xs text-gray-400 line-through">
                             S/ {product.originalPrice.toFixed(2)}
                           </span>
                         )}
                       </div>
                     </div>

                     {/* Sizes */}
                     <div className="flex flex-wrap gap-2">
                         <span className="text-xs text-black w-full font-medium">Talla</span>
                        {product.sizes.map((size) => (
                           <button
                             key={size}
                             onClick={() => handleSizeSelect(product.id, size)}
                             className={`w-8 h-8 rounded-full border text-xs flex items-center justify-center transition-colors ${
                               selectedSizes[product.id] === size
                                 ? "bg-black text-white border-black"
                                 : "border-gray-200 text-gray-600 hover:border-black"
                             }`}
                           >
                             {size}
                           </button>
                        ))}
                     </div>
                  </div>
                </div>
                
                {/* Button below component */}
                 <Button
                   variant="outline"
                   onClick={() => handleAddToCart(product)}
                   className="w-full rounded-none border-black text-black hover:bg-black hover:text-white uppercase text-xs font-bold tracking-widest py-4 mt-2"
                 >
                   AGREGAR AL CARRITO
                 </Button>
                 
                 <div className="w-full border-t border-gray-100 my-2"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
