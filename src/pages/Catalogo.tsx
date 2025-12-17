import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";
import { TarjetaProductoHover } from "@/components/TarjetaProductoHover";
import { FiltrosCatalogo } from "@/components/FiltrosCatalogo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useProductosPorCategoria } from "@/hooks/use-productos";
import { Camisas } from "./Camisas";
import { AbrigosBlazers } from "./AbrigosBlazers";
import { CatalogoHombre } from "./CatalogoHombre";
import { CatalogoMujer } from "./CatalogoMujer";
import { CatalogoInfantil } from "./CatalogoInfantil";
import { CatalogoDenim } from "./CatalogoDenim";
import { CatalogoBasicos } from "./CatalogoBasicos";

import productosHombreData from "@/data/productos_hombre.json";
import productosMujerData from "@/data/productos_mujer.json";
import productosInfantilData from "@/data/productos_infantil.json";

// Helper to map JSON data to component props - use code as ID for proper linking
const mapProductData = (data: any[]) => data.map((item) => ({
  id: item.code,
  brand: item.brand,
  name: item.name,
  price: item.price,
  originalPrice: item.originalPrice,
  image: item.image,
  sizes: item.sizes || ["S", "M", "L", "XL"],
  discount: item.discount,
}));

const Catalogo = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const [searchParams] = useSearchParams();
  const subcategoria = searchParams.get('subcategoria');
  const [ordenamiento, setOrdenamiento] = useState("relevancia");

  // Si hay subcategoría específica, renderizar el componente correspondiente
  if (categoria === 'hombre' && subcategoria === 'camisas') {
    return <Camisas />;
  }
  
  if (categoria === 'mujer' && subcategoria === 'abrigos-blazers') {
    return <AbrigosBlazers />;
  }

  // Si es la categoría completa de hombre (sin subcategoría), usar el nuevo diseño
  if (categoria === 'hombre' && !subcategoria) {
    return <CatalogoHombre />;
  }

  // Si es la categoría completa de mujer (sin subcategoría), usar el nuevo diseño
  if (categoria === 'mujer' && !subcategoria) {
    return <CatalogoMujer />;
  }

  // Si es la categoría completa de infantil (sin subcategoría), usar el nuevo diseño
  if (categoria === 'infantil' && !subcategoria) {
    return <CatalogoInfantil />;
  }

  // Si es la categoría completa de denim (sin subcategoría), usar el nuevo diseño
  if (categoria === 'denim' && !subcategoria) {
    return <CatalogoDenim />;
  }

  // Si es la categoría completa de básicos (sin subcategoría), usar el nuevo diseño
  if (categoria === 'basicos' && !subcategoria) {
    return <CatalogoBasicos />;
  }

  // Configuración de banner por categoría
  const bannersCategoria: { [key: string]: { titulo: string; imagen: string } } = {
    mujer: {
      titulo: "Moda Mujer",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/ab3e169c-d507-4318-8381-6e50a5af4699___3cc8eb376772abb7ad6c31a12b279d77.png",
    },
    hombre: {
      titulo: "Moda Hombre",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/f5e9cc42-0c58-46f1-b0e0-ff00e870d64f___1ca792e01845d6a502b5e0412b09e723.png",
    },
    infantil: {
      titulo: "Moda Infantil",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/e759185c-e357-4c48-b224-c84a426e2873___47250bb4fc92c33dc02acdbd25fd3022.png",
    },
    denim: {
      titulo: "Colección Denim",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/da2b83a6-1d16-4997-af10-65bf568a22d5___3c6af236b3de35dd9b73d0e5d2ee3645.png",
    },
    basicos: {
      titulo: "Básicos Esenciales",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/0b3428ba-89eb-4d6a-9fc5-1eceae228f2f___aa9969c4000aa95e5bcf2bd104ed9aa2.png",
    },
    outlet: {
       titulo: "Outlet",
       imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/da2b83a6-1d16-4997-af10-65bf568a22d5___3c6af236b3de35dd9b73d0e5d2ee3645.png"
    }
  };

  const categoriaActual = categoria || "mujer";
  const banner = bannersCategoria[categoriaActual] || bannersCategoria.mujer;

  // Hook para obtener productos desde el backend
  // Subcategorías de Mujer: 1 = Vestidos, 2 = Abrigos y Blazers, 3 = Chalecos, 4 = Jeans
  // Subcategorías de Hombre: 5 = Polos, 6 = Camisas, 7 = Bermudas, 8 = Blazers
  const { data: productosBackendMujer, isLoading: cargandoMujer } = useProductosPorCategoria(
    categoriaActual === "mujer" ? [1, 2, 3, 4] : []
  );

  const { data: productosBackendHombre, isLoading: cargandoHombre } = useProductosPorCategoria(
    categoriaActual === "hombre" ? [5, 6, 7, 8] : []
  );

  // Select products based on category
  let rawProducts = [];
  if (categoriaActual === "hombre") {
    // Usar productos del backend para Hombre
    if (productosBackendHombre && productosBackendHombre.length > 0) {
      rawProducts = productosBackendHombre.map((p: any) => ({
        code: p.idProducto,
        brand: "Topitop hombre",
        name: p.nombre,
        price: p.precio,
        image: p.imagenUrl || "https://via.placeholder.com/300x400",
        sizes: ["S", "M", "L", "XL"],
      }));
    } else if (!cargandoHombre) {
      // Si no hay datos del backend y terminó de cargar, usar JSON local
      rawProducts = productosHombreData;
    }
  } else if (categoriaActual === "mujer") {
    // Usar productos del backend si están disponibles
    if (productosBackendMujer && productosBackendMujer.length > 0) {
      rawProducts = productosBackendMujer.map((p: any) => ({
        code: p.idProducto,
        brand: "TopItop",
        name: p.nombre,
        price: p.precio,
        image: p.imagenUrl || "https://via.placeholder.com/300x400",
        sizes: ["XS", "S", "M", "L", "XL"],
      }));
    } else if (!cargandoMujer) {
      // Si no hay datos del backend y terminó de cargar, usar JSON local
      rawProducts = productosMujerData;
    }
  } else if (categoriaActual === "infantil") {
    rawProducts = productosInfantilData;
  } else {
    // Default or mixed for others for now
    rawProducts = [...productosMujerData, ...productosHombreData].slice(0, 10); 
  }

  const productos = mapProductData(rawProducts);

  const isDenim = categoriaActual === "denim";

  return (
    <div className="min-h-screen bg-white">
      <Encabezado />

      {/* Banner Logic */}
      {isDenim ? (
        <>
          {/* Custom Split Banner for Denim */}
          <div className="flex flex-col md:flex-row w-full h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Left Side - Mujer */}
            <div className="relative w-full md:w-1/2 h-full group overflow-hidden cursor-pointer">
              <img
                src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/5d59cc7d-8457-437a-b92a-8e2afdd8ab03___cd7e08d10ccec4bcbe49d4c809bdd1bb.png"
                alt="Denim Mujer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute top-1/2 left-8 sm:left-16 transform -translate-y-1/2 text-white">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Mujer</h2>
                <button className="bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  Ver más
                </button>
              </div>
            </div>

            {/* Right Side - Hombre */}
            <div className="relative w-full md:w-1/2 h-full group overflow-hidden cursor-pointer">
              <img
                src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/f099f425-e65c-44e4-9fcd-07a7d6e1b174___0868050c8033f0b9c40bf059f7fdc14c.png"
                alt="Denim Hombre"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute top-1/2 right-8 sm:right-16 transform -translate-y-1/2 text-white text-right">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Hombre</h2>
                <button className="bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  Ver más
                </button>
              </div>
            </div>
          </div>

          {/* Denim Filter Bar */}
          <div className="bg-black text-white px-4 sm:px-8 py-3 sticky top-0 z-40">
            <div className="container mx-auto flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium tracking-wide">
              
              <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                <button className="flex items-center gap-2 hover:text-gray-300 whitespace-nowrap">
                   <span className="text-lg">⚡</span> Todos los filtros
                </button>
                <div className="h-4 w-px bg-gray-700 hidden sm:block"></div>
                
                {['Categoría', 'Descuento', 'Marca', 'Talla'].map((filter) => (
                  <div key={filter} className="flex items-center gap-6 hidden sm:flex">
                    <button className="flex items-center gap-1 hover:text-gray-300">
                      {filter} <ChevronDown className="w-3 h-3 ml-1" />
                    </button>
                    <div className="h-4 w-px bg-gray-700 last:hidden"></div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 ml-auto pl-4">
                <span className="hidden sm:inline text-gray-400">ORDENAR POR</span>
                <ChevronDown className="w-3 h-3 sm:hidden" />
                <div className="flex gap-2 border-l border-gray-700 pl-4">
                   <div className="w-5 h-5 bg-transparent border border-gray-500 flex gap-[1px] p-[2px]">
                      <div className="w-full h-full bg-gray-500"></div>
                      <div className="w-full h-full bg-gray-500"></div>
                      <div className="w-full h-full bg-gray-500"></div>
                   </div>
                   <div className="w-5 h-5 border border-gray-500 p-[2px] grid grid-cols-2 gap-[1px]">
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </>
      ) : (
        /* Default Banner for other categories */
        <section className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden">
          <img
            src={banner.imagen}
            alt={banner.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              {banner.titulo}
            </h1>
          </div>
        </section>
      )}

      {/* Breadcrumb - Only show if NOT denim, as denim has its own nav-like structure above or user didn't ask for it specifically there? 
          Actually usually breadcrumbs are good. I'll keep them but styled simply.
      */}
      {!isDenim && (
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-black">Inicio</a>
            <span className="mx-2">/</span>
            <span className="text-black capitalize">{categoriaActual}</span>
          </nav>
        </div>
      )}

      {/* Contenedor principal con filtros y productos */}
      <div className={`container mx-auto px-4 sm:px-6 pb-16 ${isDenim ? 'pt-8' : ''}`}>
        <div className="flex gap-8">
          {/* Filtros Sidebar - Hide for Denim as it has the top bar */}
          {!isDenim && <FiltrosCatalogo />}

          {/* Área de productos */}
          <div className="flex-1">
            {/* Barra de ordenamiento y resultados - Hide for Denim as it's in the top bar */}
            {!isDenim && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <p className="text-sm text-gray-600">
                  Mostrando <span className="font-semibold">{productos.length}</span> productos
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Ordenar por:</span>
                  <select
                    value={ordenamiento}
                    onChange={(e) => setOrdenamiento(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-black"
                  >
                    <option value="relevancia">Relevancia</option>
                    <option value="menor-precio">Menor precio</option>
                    <option value="mayor-precio">Mayor precio</option>
                    <option value="descuento">Mayor descuento</option>
                    <option value="nuevos">Más nuevos</option>
                  </select>
                </div>
              </div>
            )}

            {/* Grid de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {productos.map((producto) => (
                <TarjetaProductoHover key={producto.id} {...producto} />
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-black text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PiePagina />
      <BotonWhatsApp />
    </div>
  );
};

export default Catalogo;
