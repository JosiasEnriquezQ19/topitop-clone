import { useState } from "react";
import { useParams } from "react-router-dom";
import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, ChevronDown, Facebook, Phone, Link2 } from "lucide-react";

// Mock product data - esto se reemplazará con tu API
const mockProducts: { [key: string]: any } = {
  "1": {
    id: 1,
    brand: "Xiomi",
    name: "Vestido Mujer Naomi Coco",
    code: "3154179",
    price: 64.95,
    originalPrice: 129.90,
    discount: 50,
    images: [
      "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=500&height=auto&aspect=true",
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "Vestido elegante para mujer con diseño floral, perfecto para cualquier ocasión.",
    modelInfo: "Modelo usa talla S. Altura: 1.70m",
  },
};

const DetalleProducto = () => {
  const { id } = useParams();
  const product = mockProducts[id || "1"] || mockProducts["1"];

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      <Encabezado />

      {/* Marquee Banner */}
      <section className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-6 text-xs sm:text-sm font-bold tracking-wider">
              BLACK FRIDAY WEEK | 50% DSCTO EN TODA LA WEB •
            </span>
          ))}
        </div>
      </section>

      {/* Product Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Product Image */}
          <div className="relative">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right - Product Info */}
          <div className="lg:pl-8">
            {/* Brand & Wishlist */}
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm text-gray-500">{product.brand}</span>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Heart
                  className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                />
              </button>
            </div>

            {/* Product Name */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              {product.name}
            </h1>

            {/* Code */}
            <p className="text-sm text-gray-500 mb-4">Código: {product.code}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl sm:text-3xl font-bold">S/ {product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  S/ {product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <span className="bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium">Talla</span>
              </div>
              <div className="flex gap-2">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border-2 text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center border-2 border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-center min-w-[60px] font-medium border-x-2 border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-none py-6 text-base font-bold">
                AGREGAR AL CARRITO
              </Button>
            </div>

            {/* Accordion Sections */}
            <div className="border-t border-gray-200">
              {/* Description */}
              <button
                onClick={() => toggleSection("description")}
                className="w-full flex items-center justify-between py-4 border-b border-gray-200"
              >
                <span className="text-sm font-medium">Descripción y características</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openSection === "description" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "description" && (
                <div className="py-4 text-sm text-gray-600 border-b border-gray-200">
                  {product.description}
                </div>
              )}

              {/* Model Info */}
              <button
                onClick={() => toggleSection("model")}
                className="w-full flex items-center justify-between py-4 border-b border-gray-200"
              >
                <span className="text-sm font-medium">Información del modelo</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openSection === "model" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "model" && (
                <div className="py-4 text-sm text-gray-600 border-b border-gray-200">
                  {product.modelInfo}
                </div>
              )}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm text-gray-500">Compartir:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                  <Facebook className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors">
                  <Link2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PiePagina />
      <BotonWhatsApp />
    </div>
  );
};

export default DetalleProducto;
