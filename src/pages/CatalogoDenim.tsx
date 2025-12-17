import React, { useState } from "react";
import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";
import { TarjetaProductoHover } from "@/components/TarjetaProductoHover";
import { FiltrosAbrigosBlazers } from "@/components/FiltrosAbrigosBlazers";
import { useProductosPorCategoria } from "@/hooks/use-productos";

export const CatalogoDenim = () => {
  const [marca, setMarca] = useState<string[]>([]);
  const [talla, setTalla] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState("relevancia");

  // Obtener productos de todas las subcategorías de Denim
  // Subcategorías: 14 = Faldas Denim, 15 = Tops Denim, 16 = Jeans
  const { data: productosRaw, isLoading, error } = useProductosPorCategoria([14, 15, 16]);

  // Filtrar y ordenar productos
  const productosFiltrados = React.useMemo(() => {
    if (!productosRaw) return [];

    let resultado = [...productosRaw];

    // Filtrar por marca
    if (marca.length > 0) {
      resultado = resultado.filter((p) => {
        return marca.some(m => 
          p.descripcion?.toLowerCase().includes(m.toLowerCase()) ||
          m === 'Topitop Mujer' || m === 'Xiomi'
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

      {/* Filtros */}
      <div className="mt-16">
        <FiltrosAbrigosBlazers
          marca={marca}
          talla={talla}
          onMarcaChange={setMarca}
          onTallaChange={setTalla}
          onOrdenamiento={setOrdenamiento}
        />
      </div>

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
                brand="Denim"
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
