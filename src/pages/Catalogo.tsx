import { useState } from "react";
import { useParams } from "react-router-dom";
import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";
import { TarjetaProductoHover } from "@/components/TarjetaProductoHover";
import { FiltrosCatalogo } from "@/components/FiltrosCatalogo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Catalogo = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const [ordenamiento, setOrdenamiento] = useState("relevancia");

  // Configuración de banner por categoría
  const bannersCategoria: { [key: string]: { titulo: string; imagen: string } } = {
    mujer: {
      titulo: "Moda Mujer",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/da2b83a6-1d16-4997-af10-65bf568a22d5___3c6af236b3de35dd9b73d0e5d2ee3645.png",
    },
    hombre: {
      titulo: "Moda Hombre",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/f9f7a057-f58b-4355-a8a2-7e41761bfa97___c523a7e1b115ee603257463d720ef97f.png",
    },
    infantil: {
      titulo: "Moda Infantil",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/9b2c81ff-6f40-45b1-8776-ae1cfd7faf95___656e2346110ee8be519429fc7bf73ec9.png",
    },
    denim: {
      titulo: "Colección Denim",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/da2b83a6-1d16-4997-af10-65bf568a22d5___3c6af236b3de35dd9b73d0e5d2ee3645.png",
    },
    basicos: {
      titulo: "Básicos Esenciales",
      imagen: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/9b2c81ff-6f40-45b1-8776-ae1cfd7faf95___656e2346110ee8be519429fc7bf73ec9.png",
    },
  };

  const categoriaActual = categoria || "mujer";
  const banner = bannersCategoria[categoriaActual] || bannersCategoria.mujer;

  // Mock de productos - esto se conectará con tu API
  const productos = [
    {
      id: 1,
      brand: "Xiomi",
      name: "Vestido Mujer Noa Coco",
      price: 83.94,
      originalPrice: 119.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=500&height=auto&aspect=true",
      sizes: ["XS", "S", "M", "L"],
      discount: 40,
    },
    {
      id: 2,
      brand: "Xiomi",
      name: "Vestido Mujer Makawi Azul Náutico",
      price: 95.94,
      originalPrice: 159.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000",
      sizes: ["XS", "S", "M", "L"],
      discount: 40,
    },
    {
      id: 3,
      brand: "Xiomi",
      name: "Blusa Mujer Nurid Roseman",
      price: 99.90,
      originalPrice: 139.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000",
      sizes: ["S", "M", "L", "XL"],
      discount: 30,
    },
    {
      id: 4,
      brand: "Hawk",
      name: "Polo Hombre Sport Azul",
      price: 49.90,
      originalPrice: 89.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=500&height=auto&aspect=true",
      sizes: ["S", "M", "L", "XL"],
      discount: 45,
    },
    {
      id: 5,
      brand: "Topitop",
      name: "Jean Mujer Skinny Fit",
      price: 79.90,
      originalPrice: 129.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000",
      sizes: ["26", "28", "30", "32"],
      discount: 38,
    },
    {
      id: 6,
      brand: "Xiomi",
      name: "Vestido Mujer Floral Print",
      price: 89.90,
      originalPrice: 149.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000",
      sizes: ["XS", "S", "M", "L"],
      discount: 40,
    },
    {
      id: 7,
      brand: "Basic Woman",
      name: "Blusa Básica Blanca",
      price: 39.90,
      originalPrice: 59.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=500&height=auto&aspect=true",
      sizes: ["S", "M", "L", "XL"],
      discount: 33,
    },
    {
      id: 8,
      brand: "Denim",
      name: "Jean Mom Fit Celeste",
      price: 99.90,
      originalPrice: 159.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000",
      sizes: ["26", "28", "30", "32"],
      discount: 38,
    },
    {
      id: 9,
      brand: "Xiomi",
      name: "Vestido Corto Negro",
      price: 79.90,
      originalPrice: 129.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000",
      sizes: ["XS", "S", "M", "L"],
      discount: 38,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Encabezado />

      {/* Banner de Categoría */}
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="text-sm text-gray-500">
          <a href="/" className="hover:text-black">Inicio</a>
          <span className="mx-2">/</span>
          <span className="text-black capitalize">{categoriaActual}</span>
        </nav>
      </div>

      {/* Contenedor principal con filtros y productos */}
      <div className="container mx-auto px-4 sm:px-6 pb-16">
        <div className="flex gap-8">
          {/* Filtros Sidebar */}
          <FiltrosCatalogo />

          {/* Área de productos */}
          <div className="flex-1">
            {/* Barra de ordenamiento y resultados */}
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
