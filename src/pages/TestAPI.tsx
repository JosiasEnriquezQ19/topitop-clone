import { useProductos } from '../hooks/use-productos';
import { useCategorias } from '../hooks/use-categorias';
import { useSubcategorias } from '../hooks/use-subcategorias';

export default function TestAPI() {
  const { data: productos, isLoading: loadingProductos, error: errorProductos } = useProductos();
  const { data: categorias, isLoading: loadingCategorias, error: errorCategorias } = useCategorias();
  const { data: subcategorias, isLoading: loadingSubcategorias, error: errorSubcategorias } = useSubcategorias();

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">🔍 Test de Conexión API</h1>
      
      {/* Test de Productos */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">📦 Productos</h2>
        <div className="mb-4">
          <p><strong>Endpoint:</strong> <code>GET /api/productos</code></p>
          <p><strong>Estado:</strong> 
            {loadingProductos && <span className="text-yellow-600">⏳ Cargando...</span>}
            {errorProductos && <span className="text-red-600">❌ Error: {errorProductos.message}</span>}
            {productos && <span className="text-green-600">✅ Conectado ({productos.length} productos)</span>}
          </p>
        </div>
        
        {productos && productos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {productos.slice(0, 3).map((producto) => (
              <div key={producto.idProducto} className="border p-4 rounded">
                <h3 className="font-semibold">{producto.nombre}</h3>
                <p className="text-gray-600">{producto.descripcion}</p>
                <p className="text-green-600 font-bold">S/. {producto.precio}</p>
                <p className="text-sm text-gray-500">Stock: {producto.stock}</p>
              </div>
            ))}
          </div>
        )}
        
        {errorProductos && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <p className="text-red-800">Error completo:</p>
            <pre className="text-sm text-red-600 mt-2">{JSON.stringify(errorProductos, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Test de Categorías */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">🏷️ Categorías</h2>
        <div className="mb-4">
          <p><strong>Endpoint:</strong> <code>GET /api/categorias</code></p>
          <p><strong>Estado:</strong> 
            {loadingCategorias && <span className="text-yellow-600">⏳ Cargando...</span>}
            {errorCategorias && <span className="text-red-600">❌ Error: {errorCategorias.message}</span>}
            {categorias && <span className="text-green-600">✅ Conectado ({categorias.length} categorías)</span>}
          </p>
        </div>
        
        {categorias && categorias.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {categorias.map((categoria) => (
              <div key={categoria.idCategoria} className="bg-purple-100 px-3 py-1 rounded-full">
                <span className="text-purple-800">{categoria.nombre}</span>
              </div>
            ))}
          </div>
        )}
        
        {errorCategorias && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <p className="text-red-800">Error completo:</p>
            <pre className="text-sm text-red-600 mt-2">{JSON.stringify(errorCategorias, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Test de Subcategorías */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">🔖 Subcategorías</h2>
        <div className="mb-4">
          <p><strong>Endpoint:</strong> <code>GET /api/subcategorias</code></p>
          <p><strong>Estado:</strong> 
            {loadingSubcategorias && <span className="text-yellow-600">⏳ Cargando...</span>}
            {errorSubcategorias && <span className="text-red-600">❌ Error: {errorSubcategorias.message}</span>}
            {subcategorias && <span className="text-green-600">✅ Conectado ({subcategorias.length} subcategorías)</span>}
          </p>
        </div>
        
        {subcategorias && subcategorias.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {subcategorias.map((subcategoria) => (
              <div key={subcategoria.idSubcategoria} className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">{subcategoria.nombre}</h4>
                <p className="text-gray-600 text-sm">{subcategoria.descripcion}</p>
              </div>
            ))}
          </div>
        )}
        
        {errorSubcategorias && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <p className="text-red-800">Error completo:</p>
            <pre className="text-sm text-red-600 mt-2">{JSON.stringify(errorSubcategorias, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Información de la API */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">⚙️ Configuración API</h2>
        <div className="space-y-2 text-sm">
          <p><strong>Base URL:</strong> <code>{import.meta.env.VITE_API_BASE_URL}</code></p>
          <p><strong>Timeout:</strong> <code>{import.meta.env.VITE_API_TIMEOUT}ms</code></p>
          <p><strong>Modo:</strong> <code>{import.meta.env.MODE}</code></p>
        </div>
      </div>
    </div>
  );
}