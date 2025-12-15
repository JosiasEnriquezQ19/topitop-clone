import { useProductos } from '../hooks/use-productos';
import { useCategorias } from '../hooks/use-categorias';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Encabezado } from '../components/Encabezado';
import { PiePagina } from '../components/PiePagina';

export default function ProductosAPI() {
  const { data: productos, isLoading, error } = useProductos();
  const { data: categorias } = useCategorias();
  const [filtroCategoria, setFiltroCategoria] = useState<number | null>(null);

  // Filtrar productos por categoría si hay filtro activo
  const productosFiltrados = filtroCategoria 
    ? productos?.filter(p => p.subcategoria?.categoria?.idCategoria === filtroCategoria)
    : productos;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Encabezado />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700">Cargando productos...</h2>
            <p className="text-gray-500">Conectando con la API...</p>
          </div>
        </div>
        <PiePagina />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Encabezado />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-2">❌ Error de Conexión</h2>
              <p className="mb-4">No se pudieron cargar los productos de la API</p>
              <p className="text-sm">Error: {error.message}</p>
              <div className="mt-4">
                <p className="text-xs text-gray-600">
                  Asegúrate de que el backend esté corriendo en puerto 8092
                </p>
              </div>
            </div>
          </div>
        </div>
        <PiePagina />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Encabezado />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🛍️ Productos desde API
          </h1>
          <p className="text-gray-600">
            Conectado a: <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              {import.meta.env.VITE_API_BASE_URL}
            </code>
          </p>
          <p className="text-sm text-green-600 mt-2">
            ✅ {productos?.length || 0} productos cargados desde tu backend Spring Boot
          </p>
        </div>

        {/* Filtros por Categoría */}
        {categorias && categorias.length > 0 && (
          <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Filtrar por Categoría:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFiltroCategoria(null)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  filtroCategoria === null
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                }`}
              >
                Todas ({productos?.length || 0})
              </button>
              {categorias.map((categoria) => {
                const count = productos?.filter(p => 
                  p.subcategoria?.categoria?.idCategoria === categoria.idCategoria
                ).length || 0;
                
                return (
                  <button
                    key={categoria.idCategoria}
                    onClick={() => setFiltroCategoria(categoria.idCategoria)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      filtroCategoria === categoria.idCategoria
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                    }`}
                  >
                    {categoria.nombre} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Grid de Productos */}
        {productosFiltrados && productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <div key={producto.idProducto} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Imagen */}
                <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={producto.imagenUrl || "https://via.placeholder.com/400x400?text=Sin+Imagen"}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {producto.precioOferta && (
                      <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        OFERTA
                      </div>
                    )}
                    {producto.stock <= 5 && producto.stock > 0 && (
                      <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        ¡Últimos {producto.stock}!
                      </div>
                    )}
                    {producto.stock === 0 && (
                      <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Agotado
                      </div>
                    )}
                  </div>

                  {/* Botones de acción */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <Link 
                      to={`/producto/${producto.idProducto}`}
                      className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                    </Link>
                  </div>
                </div>

                {/* Información */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-blue-600 font-medium">
                      ID: {producto.idProducto}
                    </span>
                    {producto.subcategoria?.nombre && (
                      <span className="text-xs text-gray-500 ml-2">
                        • {producto.subcategoria.nombre}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                    {producto.nombre}
                  </h3>
                  
                  {producto.descripcion && (
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {producto.descripcion}
                    </p>
                  )}

                  {/* Precio */}
                  <div className="flex items-center gap-2 mb-3">
                    {producto.precioOferta && (
                      <span className="text-sm text-gray-400 line-through">
                        S/. {producto.precio.toFixed(2)}
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-900">
                      S/. {(producto.precioOferta || producto.precio).toFixed(2)}
                    </span>
                  </div>

                  {/* Stock */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      producto.stock > 10 
                        ? 'bg-green-100 text-green-700' 
                        : producto.stock > 0 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      Stock: {producto.stock}
                    </span>
                    
                    <button 
                      className={`p-2 rounded-full transition-colors ${
                        producto.stock > 0
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={producto.stock === 0}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-4 rounded-lg max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-2">📦 No hay productos</h3>
              <p>No se encontraron productos en la API</p>
              <p className="text-sm mt-2">
                Asegúrate de haber ejecutado el INSERT de datos en tu base de datos
              </p>
            </div>
          </div>
        )}
      </div>

      <PiePagina />
    </div>
  );
}