import React, { useState } from "react";
import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";
import { TarjetaProductoHover } from "@/components/TarjetaProductoHover";
import { FiltrosAbrigosBlazers } from "@/components/FiltrosAbrigosBlazers";
import { useProductosPorCategoria } from "@/hooks/use-productos";

export const CatalogoBasicos = () => {
  const [marca, setMarca] = useState<string[]>([]);
  const [talla, setTalla] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState("relevancia");

  // Obtener productos de todas las subcategorías de Básicos
  // Subcategorías: 17 = Polos Básicos, 18 = Shorts Básicos
  const { data: productosRaw, isLoading, error } = useProductosPorCategoria([17, 18]);

  // Filtrar y ordenar productos
  const productosFiltrados = React.useMemo(() => {
    if (!productosRaw) return [];

    let resultado = [...productosRaw];

    // Filtrar por marca
    if (marca.length > 0) {
      resultado = resultado.filter((p) => {
        return marca.some(m => 
          p.descripcion?.toLowerCase().includes(m.toLowerCase()) ||
          m === 'Topitop Mujer'
        );
      });
    }

    // Filtrar por talla
    if (talla.length > 0) {
      // Aquí asumimos que todos los productos tienen todas las tallas
      // Si tuvieras campo de tallas en la BD, filtrarías aquí
    }

    // Ordenar
    if (ordenamiento === "precio-menor") {
      resultado.sort((a, b) => a.precio - b.precio);
    } else if (ordenamiento === "precio-mayor") {
      resultado.sort((a, b) => b.precio - a.precio);
    } else if (ordenamiento === "nombre") {
      resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    return resultado;
  }, [productosRaw, marca, talla, ordenamiento]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Encabezado variant="solid" />
        <div className="flex items-center justify-center h-[500px]">
          <p className="text-xl">Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Encabezado variant="solid" />
        <div className="flex items-center justify-center h-[500px]">
          <p className="text-xl text-red-600">Error al cargar productos</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Encabezado variant="solid" />

      {/* Banner Principal */}
      <div className="relative w-full h-[500px] mt-16">
        <img
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/0b3428ba-89eb-4d6a-9fc5-1eceae228f2f___aa9969c4000aa95e5bcf2bd104ed9aa2.png"
          alt="Básicos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start pl-12">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            Básicos
          </h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black">
            Inicio
          </a>
          <span>/</span>
          <span className="text-black font-medium">Básicos</span>
        </div>
      </div>

      {/* Filtros */}
      <FiltrosAbrigosBlazers
        marca={marca}
        talla={talla}
        onMarcaChange={setMarca}
        onTallaChange={setTalla}
        onOrdenamiento={setOrdenamiento}
      />

      {/* Productos */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {productosFiltrados.length} productos encontrados
          </p>
        </div>

        {productosFiltrados.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos con los filtros seleccionados
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <TarjetaProductoHover
                key={producto.idProducto}
                id={producto.idProducto.toString()}
                name={producto.nombre}
                price={producto.precio}
                image={producto.imagenUrl || "https://via.placeholder.com/300x400"}
                brand="Topitop Mujer"
              />
            ))}
          </div>
        )}
      </div>

      <PiePagina />
      <BotonWhatsApp />
    </div>
  );
};
