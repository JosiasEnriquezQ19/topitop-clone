import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductos } from "../hooks/use-productos";
import { useCategorias } from "../hooks/use-categorias";
import { useProductosPorSubcategoria } from "../hooks/use-productos";

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

interface Category {
  id: string;
  name: string;
  products: Product[];
}

export const SeccionProductosFiltrados = () => {
  // Datos reales de la API
  const { data: productos, isLoading: loadingProductos } = useProductos();
  const { data: categorias, isLoading: loadingCategorias } = useCategorias();
  
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Usar la primera categoría por defecto cuando se cargan los datos
  if (categorias && categorias.length > 0 && activeCategory === null) {
    setActiveCategory(categorias[0].idCategoria);
  }

  // Filtrar productos de la categoría activa
  const activeProducts = productos?.filter(producto => 
    producto.subcategoria?.categoria?.idCategoria === activeCategory
  ) || [];

  // Mostrar loading si aún no hay datos
  if (loadingProductos || loadingCategorias) {
    return (
      <section className="py-12 sm:py-20 bg-gray-100 mt-8 sm:mt-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-gray-500">Cargando productos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-20 bg-gray-100 mt-8 sm:mt-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Filter Tabs */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-300">
          <div className="flex items-center gap-1 overflow-x-auto pb-0">
            <span className="text-sm text-gray-500 pr-4 flex-shrink-0">Seleccione</span>
            {categorias?.map((categoria) => (
              <button
                key={categoria.idCategoria}
                onClick={() => setActiveCategory(categoria.idCategoria)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-[1px] ${
                  activeCategory === categoria.idCategoria
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
          <Link to="/catalogo/hombre" className="flex items-center gap-1 text-sm font-medium hover:underline flex-shrink-0 ml-4">
            VER TODO <ArrowRight className="w-4 h-4" />
          </Link>
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
            {activeProducts.map((producto) => (
              <Link to={`/producto/${producto.idProducto}`} key={producto.idProducto} className="bg-white group block">
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-50 aspect-square">
                  <img
                    src={producto.imagenUrl || producto.imagen || "https://via.placeholder.com/400x400?text=Sin+Imagen"}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Discount Badge */}
                  {producto.precioOferta && (
                    <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {Math.round(((producto.precio - producto.precioOferta) / producto.precio) * 100)}%
                    </div>
                  )}
                  {/* Stock Badge */}
                  {producto.stock <= 5 && producto.stock > 0 && (
                    <div className="absolute top-3 right-12 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Últimos {producto.stock}
                    </div>
                  )}
                  {/* Wishlist */}
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-xs text-blue-600 mb-1">{producto.subcategoria?.nombre || "Topitop"}</p>
                  <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 group-hover:underline">
                    {producto.nombre}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                    {producto.descripcion || "Descripción no disponible"}
                  </p>
                  <div className="flex items-center gap-2">
                    {producto.precioOferta && (
                      <span className="text-sm text-gray-400 line-through">
                        S/ {producto.precio.toFixed(2)}
                      </span>
                    )}
                    <span className="text-base font-bold">
                      S/ {(producto.precioOferta || producto.precio).toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      producto.stock > 10 ? 'bg-green-100 text-green-700' :
                      producto.stock > 0 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Agotado'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
