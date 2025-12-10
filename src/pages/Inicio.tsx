import { Encabezado } from "@/components/Encabezado";
import { BannerPrincipal } from "@/components/BannerPrincipal";
import { PiePagina } from "@/components/PiePagina";
import { BannerPromoDoble } from "@/components/BannerPromoDoble";
import { CarruselProductos } from "@/components/CarruselProductos";
import { SeccionBohoVibes } from "@/components/SeccionBohoVibes";
import { SeccionNavidad } from "@/components/SeccionNavidad";
import { SeccionPolosShorts } from "@/components/SeccionPolosShorts";
import { SeccionHombres } from "@/components/SeccionHombres";
import { SeccionInfantil } from "@/components/SeccionInfantil";
import { SeccionProductosFiltrados } from "@/components/SeccionProductosFiltrados";
import { CarruselVestidosInfantil } from "@/components/CarruselVestidosInfantil";
import { GaleriaInstagram } from "@/components/GaleriaInstagram";
import { SeccionDevoluciones } from "@/components/SeccionDevoluciones";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";


const Inicio = () => {
  // Productos para el carrusel de vestidos
  const vestidosProducts = [
    {
      id: 101,
      brand: "Xiomi",
      name: "Vestido Mujer Naomi Coco",
      price: 64.95,
      originalPrice: 129.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=500&height=auto&aspect=true",
      sizes: ["XS", "S", "M", "L"],
      discount: 50,
    },
    {
      id: 102,
      brand: "Topitop mujer",
      name: "Vestido Mujer Daphne Azul Náutico",
      price: 84.95,
      originalPrice: 169.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/396418-500-auto?v=638993557254630000&width=500&height=auto&aspect=true",
      sizes: ["XS", "S", "M", "L"],
      discount: 50,
    },
    {
      id: 103,
      brand: "Topitop mujer",
      name: "Vestido Mujer Candy Verde Sage",
      price: 74.95,
      originalPrice: 149.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000",
      sizes: ["XS", "S", "M", "L"],
      discount: 50,
    },
    {
      id: 104,
      brand: "Xiomi",
      name: "Vestido Mujer Nathaly Celeste Bell",
      price: 69.95,
      originalPrice: 139.90,
      image: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000",
      sizes: ["XS", "S", "M", "L"],
      discount: 50,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Encabezado />
      <BannerPrincipal />

      {/* Marquee Banner - BLACK FRIDAY */}
      <section className="bg-black text-white py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-6 text-xs sm:text-sm font-bold tracking-wider">
              BLACK FRIDAY WEEK •
            </span>
          ))}
        </div>
      </section>

      {/* Sección Navidad - Video Carrusel */}
      <SeccionNavidad />

      {/* Banner Promo Doble - Vestidos y Sets */}
      <BannerPromoDoble />

      {/* Sección Polos y Shorts */}
      <SeccionPolosShorts />

      {/* Product Carousel - Vestidos */}
      <CarruselProductos 
        title="Lo + top en vestidos - Todo con 50% dscto." 
        products={vestidosProducts} 
      />

      {/* Boho Vibes Section with Video */}
      <SeccionBohoVibes />

      {/* Sección Hombres - Polos y Bermudas / Camisas y Pantalones */}
      <SeccionHombres />

      {/* Filtered Product Section - Hawk Collection */}
      <SeccionProductosFiltrados />

      {/* Sección Infantil - Niñas y Niños */}
      <SeccionInfantil />

      {/* Carrusel Vestidos Infantil */}
      <CarruselVestidosInfantil />

      {/* Instagram Gallery */}
      <GaleriaInstagram />

      {/* Returns Section */}
      <SeccionDevoluciones />

      <PiePagina />

      {/* WhatsApp Button */}
      <BotonWhatsApp />
    </div>
  );
};

export default Inicio;
