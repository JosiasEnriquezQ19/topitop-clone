import React, { useState, useEffect } from 'react';
import { useProductosPorSubcategoria } from '../hooks/use-productos';
import { TarjetaProductoHover } from '../components/TarjetaProductoHover';
import { Card, CardContent } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { AlertCircle, ShoppingBag } from 'lucide-react';
import { Encabezado } from '../components/Encabezado';
import { PiePagina } from '../components/PiePagina';
import { FiltrosAbrigosBlazers } from '../components/FiltrosAbrigosBlazers';
import { useQueryClient } from '@tanstack/react-query';

export function AbrigosBlazers() {
  const queryClient = useQueryClient();
  const { data: productosRaw, isLoading, error } = useProductosPorSubcategoria(2);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState<string[]>([]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState('relevancia');

  // Invalidar caché al cargar la página
  useEffect(() => {
    queryClient.invalidateQueries({ 
      queryKey: ['productos', 'subcategoria', 2],
      refetchType: 'active'
    });
  }, [queryClient]);

  // Filtrar y ordenar productos
  const productos = React.useMemo(() => {
    if (!productosRaw) return [];

    let filtered = [...productosRaw];

    // Filtrar por marca (si hay seleccionadas)
    if (marcaSeleccionada.length > 0) {
      filtered = filtered.filter(p => 
        marcaSeleccionada.some(marca => 
          p.nombre.toLowerCase().includes(marca.toLowerCase()) ||
          marca === 'Topitop mujer'
        )
      );
    }

    // Filtrar por talla (si hay seleccionadas)
    if (tallaSeleccionada.length > 0) {
      filtered = filtered.filter(p => 
        tallaSeleccionada.some(talla => p.nombre.includes(talla))
      );
    }

    // Ordenar
    switch (ordenamiento) {
      case 'precio-menor':
        filtered.sort((a, b) => a.precio - b.precio);
        break;
      case 'precio-mayor':
        filtered.sort((a, b) => b.precio - a.precio);
        break;
      case 'nombre':
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'relevancia':
      default:
        // Mantener orden original
        break;
    }

    return filtered;
  }, [productosRaw, marcaSeleccionada, tallaSeleccionada, ordenamiento]);

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
      <Encabezado variant="solid" />

      {/* Banner Hero */}
      <div className="relative h-[500px] bg-gray-200 flex items-center overflow-hidden mt-16">
        <img
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/a7f88e01-0178-4fec-83f9-0d93a6455534___b9aaa4ca3a6b0655ae4fd170dbfb3bf7.png"
          alt="Abrigos y Blazers"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-bold text-black max-w-xl">Abrigos y Blazers</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-pink-500">Inicio</a>
            <span>/</span>
            <span className="text-gray-900">Abrigos y Blazers</span>
          </nav>
        </div>
      </div>

      {/* Filtros */}
      <FiltrosAbrigosBlazers
        marca={marcaSeleccionada}
        talla={tallaSeleccionada}
        onMarcaChange={setMarcaSeleccionada}
        onTallaChange={setTallaSeleccionada}
        onOrdenamiento={setOrdenamiento}
      />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cargando productos...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-64 w-full" />
                  <CardContent className="p-4">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-2" />
                    <Skeleton className="h-6 w-1/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error al cargar productos</h2>
            <p className="text-gray-600">
              {error instanceof Error ? error.message : 'Error desconocido'}
            </p>
          </div>
        ) : !productos || productos.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sin productos</h2>
            <p className="text-gray-600">
              No hay productos disponibles en esta subcategoría.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-600 text-sm">
              Mostrando {productos.length} producto{productos.length !== 1 ? 's' : ''}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productos.map((producto) => (
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
          </>
        )}
      </div>
      
      <PiePagina />
    </>
  );
}