import React, { useState, useEffect } from 'react';
import { useProductosPorSubcategoria } from '../hooks/use-productos';
import { TarjetaProductoHover } from '../components/TarjetaProductoHover';
import { Card, CardContent } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { AlertCircle, ShoppingBag, Filter, ChevronDown } from 'lucide-react';
import { Encabezado } from '../components/Encabezado';
import { PiePagina } from '../components/PiePagina';
import { useQueryClient } from '@tanstack/react-query';

export function AbrigosBlazers() {
  const queryClient = useQueryClient();
  const { data: productos, isLoading, error } = useProductosPorSubcategoria(2);
  const [filtrosPrecio, setFiltrosPrecio] = useState({ min: 0, max: 500 });
  const [tallasSeleccionadas, setTallasSeleccionadas] = useState<string[]>([]);
  const [coloresSeleccionados, setColoresSeleccionados] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState('relevancia');

  // Invalidar caché al cargar la página
  useEffect(() => {
    queryClient.invalidateQueries({ 
      queryKey: ['productos', 'subcategoria', 2],
      refetchType: 'active'
    });
  }, [queryClient]);

  if (isLoading) {
    return (
      <>
        <Encabezado />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Abrigos y Blazers</h1>
            <p className="text-gray-600">Cargando productos...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-2" />
                  <Skeleton className="h-6 w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <PiePagina />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Encabezado />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Error al cargar productos</h1>
            <p className="text-gray-600 mb-4">
              No pudimos cargar los productos de Abrigos y Blazers.
            </p>
            <p className="text-sm text-gray-500">
              Error: {error instanceof Error ? error.message : 'Error desconocido'}
            </p>
          </div>
        </div>
        <PiePagina />
      </>
    );
  }

  if (!productos || productos.length === 0) {
    return (
      <>
        <Encabezado />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Abrigos y Blazers</h1>
            <p className="text-gray-600">
              No hay productos disponibles en esta subcategoría en este momento.
            </p>
          </div>
        </div>
        <PiePagina />
      </>
    );
  }

  return (
    <>
      <Encabezado />
      
      {/* Banner Hero */}
      <div className="relative h-72 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/ab3e169c-d507-4318-8381-6e50a5af4699___3cc8eb376772abb7ad6c31a12b279d77.png"
          alt="Abrigos y Blazers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Abrigos y Blazers</h1>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-pink-500">Inicio</a>
            <span>/</span>
            <span className="text-gray-900">Abrigos y Blazers</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filtros */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Filtros</h2>
              </div>

              {/* Filtro de Precio */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Precio
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Mínimo"
                      className="w-full px-3 py-2 border rounded text-sm"
                      value={filtrosPrecio.min}
                      onChange={(e) => setFiltrosPrecio({...filtrosPrecio, min: Number(e.target.value)})}
                    />
                    <input
                      type="number"
                      placeholder="Máximo"
                      className="w-full px-3 py-2 border rounded text-sm"
                      value={filtrosPrecio.max}
                      onChange={(e) => setFiltrosPrecio({...filtrosPrecio, max: Number(e.target.value)})}
                    />
                  </div>
                </div>
              </div>

              {/* Filtro de Talla */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Talla
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((talla) => (
                    <button
                      key={talla}
                      className={`px-3 py-2 border rounded text-sm transition-colors ${
                        tallasSeleccionadas.includes(talla)
                          ? 'bg-pink-500 text-white border-pink-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
                      }`}
                      onClick={() => {
                        setTallasSeleccionadas(prev =>
                          prev.includes(talla)
                            ? prev.filter(t => t !== talla)
                            : [...prev, talla]
                        )
                      }}
                    >
                      {talla}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro de Color */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Color
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { nombre: 'Negro', color: '#000000' },
                    { nombre: 'Blanco', color: '#FFFFFF' },
                    { nombre: 'Azul', color: '#3B82F6' },
                    { nombre: 'Rojo', color: '#EF4444' },
                    { nombre: 'Rosa', color: '#EC4899' },
                    { nombre: 'Verde', color: '#10B981' },
                    { nombre: 'Amarillo', color: '#F59E0B' },
                    { nombre: 'Gris', color: '#6B7280' },
                  ].map((color) => (
                    <button
                      key={color.nombre}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        coloresSeleccionados.includes(color.nombre)
                          ? 'border-pink-500 scale-110'
                          : 'border-gray-300 hover:border-pink-300'
                      }`}
                      style={{ backgroundColor: color.color }}
                      onClick={() => {
                        setColoresSeleccionados(prev =>
                          prev.includes(color.nombre)
                            ? prev.filter(c => c !== color.nombre)
                            : [...prev, color.nombre]
                        )
                      }}
                      title={color.nombre}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="flex-1">
            {/* Header con contador y ordenamiento */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Mostrando {productos?.length || 0} productos
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Ordenar por:</span>
                <select 
                  className="px-3 py-2 border rounded text-sm"
                  value={ordenamiento}
                  onChange={(e) => setOrdenamiento(e.target.value)}
                >
                  <option value="relevancia">Relevancia</option>
                  <option value="precio-menor">Precio: Menor a mayor</option>
                  <option value="precio-mayor">Precio: Mayor a menor</option>
                  <option value="nombre">Nombre A-Z</option>
                </select>
              </div>
            </div>

            {/* Grid de productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos?.map((producto) => (
                <TarjetaProductoHover
                  key={producto.idProducto}
                  id={producto.idProducto}
                  brand="TopItop"
                  name={producto.nombre}
                  price={producto.precio}
                  image={producto.imagenUrl || 'https://via.placeholder.com/300x400?text=Producto'}
                  sizes={['XS', 'S', 'M', 'L', 'XL']}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <PiePagina />
    </>
  );
}