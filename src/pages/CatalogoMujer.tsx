import React, { useState } from "react";
import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";
import { TarjetaProductoHover } from "@/components/TarjetaProductoHover";
import { FiltrosAbrigosBlazers } from "@/components/FiltrosAbrigosBlazers";
import { useProductosPorNombreCategoria } from "@/hooks/use-productos";
import { Loader2 } from "lucide-react";

export const CatalogoMujer = () => {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState<string[]>([]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState("relevancia");

  const { data: productosRaw, isLoading, error } = useProductosPorNombreCategoria("Mujer");

  const productosFiltrados = React.useMemo(() => {
    if (!productosRaw) return [];

    let resultado = [...productosRaw];

    if (marcaSeleccionada.length > 0) {
      resultado = resultado.filter((p) => {
        const marca = "Topitop mujer";
        return marcaSeleccionada.includes(marca);
      });
    }

    if (ordenamiento === "precio-menor") {
      resultado.sort((a, b) => a.precio - b.precio);
    } else if (ordenamiento === "precio-mayor") {
      resultado.sort((a, b) => b.precio - a.precio);
    } else if (ordenamiento === "nombre") {
      resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    return resultado;
  }, [productosRaw, marcaSeleccionada, tallaSeleccionada, ordenamiento]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Encabezado variant="solid" />
        <div className="flex flex-col items-center justify-center h-[500px]">
          <Loader2 className="w-12 h-12 animate-spin text-gray-400 mb-4" />
          <p className="text-xl text-gray-600">Cargando productos desde el servidor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Encabezado variant="solid" />
        <div className="flex flex-col items-center justify-center h-[500px]">
          <p className="text-xl text-red-600 mb-2">Error al cargar productos</p>
          <p className="text-gray-500">Verifica que el servidor backend esté ejecutándose</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Encabezado variant="solid" />

      <div className="relative w-full h-[500px] mt-16">
        <img
          src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/ab3e169c-d507-4318-8381-6e50a5af4699___3cc8eb376772abb7ad6c31a12b279d77.png"
          alt="Moda Mujer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            Moda Mujer
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black">
            Inicio
          </a>
          <span>/</span>
          <span className="text-black font-medium">Mujer</span>
        </div>
      </div>

      <FiltrosAbrigosBlazers
        marca={marcaSeleccionada}
        talla={tallaSeleccionada}
        onMarcaChange={setMarcaSeleccionada}
        onTallaChange={setTallaSeleccionada}
        onOrdenamiento={setOrdenamiento}
      />

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
                brand={producto.subcategoria?.nombre || "Topitop mujer"}
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
