import { Encabezado } from "@/components/Encabezado";
import { BannerPrincipal } from "@/components/BannerPrincipal";
import { TarjetaProducto } from "@/components/TarjetaProducto";
import { PiePagina } from "@/components/PiePagina";
import { Button } from "@/components/ui/button";
import { BannerCategoria } from "@/components/BannerCategoria";
import { CarruselProductos } from "@/components/CarruselProductos";
import { SeccionBohoVibes } from "@/components/SeccionBohoVibes";
import { SeccionProductosFiltrados } from "@/components/SeccionProductosFiltrados";
import { GaleriaInstagram } from "@/components/GaleriaInstagram";
import { SeccionDevoluciones } from "@/components/SeccionDevoluciones";
import { BotonWhatsApp } from "@/components/BotonWhatsApp";


const Inicio = () => {
  // Mock data - Esto se reemplazará con tu API de Spring Boot
  const featuredProducts = [
    {
      id: 1,
      name: "Polo Oversize Estampado",
      price: 39.90,
      originalPrice: 79.90,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      badge: "sale" as const,
      category: "Mujer",
    },
    {
      id: 2,
      name: "Jean Skinny Fit Azul",
      price: 89.90,
      originalPrice: 179.90,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
      badge: "sale" as const,
      category: "Denim",
    },
    {
      id: 3,
      name: "Casaca Bomber Negra",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      badge: "new" as const,
      category: "Hombre",
    },
    {
      id: 4,
      name: "Vestido Floral Verano",
      price: 69.90,
      originalPrice: 139.90,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      badge: "sale" as const,
      category: "Mujer",
    },
    {
      id: 5,
      name: "Polera Deportiva Dry Fit",
      price: 44.90,
      originalPrice: 89.90,
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=800&q=80",
      badge: "sale" as const,
      category: "Hombre",
    },
    {
      id: 6,
      name: "Blusa Elegante Blanca",
      price: 54.90,
      originalPrice: 109.90,
      image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=800&q=80",
      badge: "sale" as const,
      category: "Mujer",
    },
    {
      id: 7,
      name: "Shorts Cargo Verde",
      price: 59.90,
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
      badge: "new" as const,
      category: "Hombre",
    },
    {
      id: 8,
      name: "Conjunto Deportivo",
      price: 99.90,
      originalPrice: 199.90,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
      badge: "sale" as const,
      category: "Básicos",
    },
  ];

  const categories = [
    {
      name: "Polos",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
      discount: "50%",
    },
    {
      name: "Jeans",
      image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=600&q=80",
      discount: "40%",
    },
    {
      name: "Vestidos",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
      discount: "50%",
    },
    {
      name: "Casacas",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
      discount: "35%",
    },
  ];

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

      {/* Category Banner - Polos & Shorts */}
      <BannerCategoria />

      {/* Product Carousel - Vestidos */}
      <CarruselProductos 
        title="Lo + top en vestidos - Todo con 50% dscto." 
        products={vestidosProducts} 
      />

      {/* Boho Vibes Section with Video */}
      <SeccionBohoVibes />

      {/* Categories Section */}
      <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-10">
          Compra por Categoría
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <span className="text-primary text-xs sm:text-sm font-bold mb-1">
                  Hasta {category.discount} OFF
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3">
                  {category.name}
                </h3>
                <Button variant="outline" size="sm" className="w-fit bg-white text-foreground hover:bg-white/90 text-xs sm:text-sm">
                  Ver todo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 bg-gray-50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
            Productos Destacados
          </h2>
          <Button variant="outline" className="text-sm sm:text-base">Ver todos</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <TarjetaProducto key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Filtered Product Section - Pack de polos, Joggers, etc */}
      <SeccionProductosFiltrados />

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
