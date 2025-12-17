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

export function Camisas() {
  const { data: productosRaw, isLoading, error } = useProductosPorSubcategoria(6);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState<string[]>([]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState('relevancia');

  const productos = React.useMemo(() => {
    if (!productosRaw) return [];

    let filtered = [...productosRaw];

    if (marcaSeleccionada.length > 0) {
      filtered = filtered.filter(p => 
        marcaSeleccionada.some(marca => 
          p.nombre.toLowerCase().includes(marca.toLowerCase()) ||
          marca === 'Topitop hombre' || marca === 'Hawk'
        )
      );
    }

    if (tallaSeleccionada.length > 0) {
      filtered = filtered.filter(p => 
        tallaSeleccionada.some(talla => p.nombre.includes(talla))
      );
    }

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
        break;
    }

    return filtered;
  }, [productosRaw, marcaSeleccionada, tallaSeleccionada, ordenamiento]);

  if (isLoading) {
    return (
      <>
        <Encabezado variant="solid" />
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camisas</h1>
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
        <Encabezado variant="solid" />
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Error al cargar productos</h1>
            <p className="text-gray-600 mb-4">
              No pudimos cargar los productos de Camisas.
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
        <Encabezado variant="solid" />
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Camisas</h1>
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
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/e96a3144-4f73-4ceb-b25f-e00823d2364d___7227a252c0ba11401b9463b41cca78cf.png"
          alt="Camisas"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-bold text-black max-w-xl">Camisas</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-pink-500">Inicio</a>
            <span>/</span>
            <span className="text-gray-900">Camisas</span>
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
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {productos.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <TarjetaProductoHover
              key={producto.idProducto}
              id={producto.idProducto.toString()}
              brand="Topitop hombre"
              name={producto.nombre}
              price={producto.precio}
              image={producto.imagenUrl || 'https://via.placeholder.com/300'}
            />
          ))}
        </div>
      </div>

      <PiePagina />
    </>
  );
}
