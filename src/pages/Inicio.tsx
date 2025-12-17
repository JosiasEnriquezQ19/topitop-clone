import { Encabezado } from "@/components/Encabezado";
import { BannerPrincipal } from "@/components/BannerPrincipal";
import { PiePagina } from "@/components/PiePagina";
import { BannerPromoDoble } from "@/components/BannerPromoDoble";
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
  return (
    <div className="min-h-screen bg-background">
      <Encabezado />
      <BannerPrincipal />

      {/* Marquee Banner - BLACK FRIDAY */}
      <section className="bg-black text-white py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-6 text-xs sm:text-sm font-bold tracking-wider">
              FELICES FIESTAS • 🎄
            </span>
          ))}
        </div>
      </section>

      {/* Banner Promo Doble - Vestidos y Sets */}
      <div className="mt-8 sm:mt-12 mb-12 sm:mb-16 lg:mb-20">
        <BannerPromoDoble />
      </div>

      {/* Sección Navidad - Videos Carrusel (Xiomi, Tpt Mujer, Hawk) */}
      <div className="mt-8 sm:mt-12">
        <SeccionNavidad />
      </div>

      {/* Sección Moda Mujer */}
      <SeccionPolosShorts />

      {/* Sección Hombres - Polos y Bermudas / Camisas y Pantalones */}
      <SeccionHombres />

      {/* Filtered Product Section - Hawk Collection */}
      <SeccionProductosFiltrados />

      {/* Sección Infantil - Niñas y Niños */}
      <SeccionInfantil />

      {/* Niños y Maravillas */}
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
