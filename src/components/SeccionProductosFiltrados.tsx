import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

export const SeccionProductosFiltrados = () => {
  const [activeCategory, setActiveCategory] = useState("pack-polos");

  const categories: Category[] = [
    {
      id: "pack-polos",
      name: "Pack de polos",
      products: [
        {
          id: 1,
          brand: "Topitop hombre",
          name: "Pack de 3 polos Hombre Cuello V Blanco / Negro / Verde Militar",
          price: 59.85,
          originalPrice: 119.70,
          image: "https://topitop.vtexassets.com/arquivos/ids/381265-483-725?v=638678395399830000&width=483&height=725&aspect=true",
          discount: 50,
        },
        {
          id: 2,
          brand: "Topitop hombre",
          name: "Pack de 3 polos manga larga Cuello V Blanco Optico / Azul Oxford / Guinda Sombra",
          price: 74.85,
          originalPrice: 149.70,
          image: "https://topitop.vtexassets.com/arquivos/ids/381265-483-725?v=638678395399830000&width=483&height=725&aspect=true",
          discount: 50,
        },
        {
          id: 3,
          brand: "Topitop hombre",
          name: "Pack de 3 polos Hombre Cuello Redondo Blanco / Gris Poly / Azul Oxford",
          price: 59.85,
          originalPrice: 119.70,
          image: "https://topitop.vtexassets.com/arquivos/ids/381265-483-725?v=638678395399830000&width=483&height=725&aspect=true",
          discount: 50,
        },
      ],
    },
    {
      id: "joggers",
      name: "Joggers",
      products: [
        {
          id: 4,
          brand: "Topitop hombre",
          name: "Jogger Hombre Negro Deportivo",
          price: 69.95,
          originalPrice: 139.90,
          image: "https://topitop.vtexassets.com/arquivos/ids/381265-483-725?v=638678395399830000&width=483&height=725&aspect=true",
          discount: 50,
        },
        {
          id: 5,
          brand: "Topitop hombre",
          name: "Jogger Hombre Gris Urbano",
          price: 64.95,
          originalPrice: 129.90,
          image: "https://topitop.vtexassets.com/arquivos/ids/381265-483-725?v=638678395399830000&width=483&height=725&aspect=true",
          discount: 50,
        },
      ],
    },
    {
      id: "casacas",
      name: "Casacas",
      products: [
        {
          id: 6,
          brand: "Hawk",
          name: "Casaca Hombre Denim Azul",
          price: 89.95,
          originalPrice: 179.90,
          image: "https://topitop.vtexassets.com/arquivos/ids/381265-483-725?v=638678395399830000&width=483&height=725&aspect=true",
          discount: 50,
        },
      ],
    },
    {
      id: "shorts",
      name: "Shorts y Bermudas",
      products: [
        {
          id: 7,
          brand: "Topitop hombre",
          name: "Short Hombre Cargo Beige",
          price: 49.95,
          originalPrice: 99.90,
          image: "https://topitop.vtexassets.com/arquivos/ids/381265-483-725?v=638678395399830000&width=483&height=725&aspect=true",
          discount: 50,
        },
      ],
    },
  ];

  const activeProducts = categories.find((c) => c.id === activeCategory)?.products || [];

  return (
    <section className="py-12 sm:py-20 bg-gray-100 mt-8 sm:mt-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Filter Tabs */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-300">
          <div className="flex items-center gap-1 overflow-x-auto pb-0">
            <span className="text-sm text-gray-500 pr-4 flex-shrink-0">Seleccione</span>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-[1px] ${
                  activeCategory === category.id
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <a href="#" className="flex items-center gap-1 text-sm font-medium hover:underline flex-shrink-0 ml-4">
            VER TODO <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Products Grid with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-black transition-colors shadow-md">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-black transition-colors shadow-md">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProducts.map((product) => (
              <div key={product.id} className="bg-white group">
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-50 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {product.discount}%
                    </div>
                  )}
                  {/* Wishlist */}
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-xs text-blue-600 mb-1">{product.brand}</p>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 hover:underline cursor-pointer">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        S/ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-base font-bold">S/ {product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
