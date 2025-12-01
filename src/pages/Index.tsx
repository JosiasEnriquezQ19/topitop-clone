import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";


const Index = () => {
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



  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />



      {/* Marquee Banner */}
      <section className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-8 text-sm font-bold">⚡ BLACK FRIDAY WEEK</span>
          <span className="mx-8 text-sm font-bold">• 50% DESCUENTO EN TODA LA WEB</span>
          <span className="mx-8 text-sm font-bold">⚡ BLACK FRIDAY WEEK</span>
          <span className="mx-8 text-sm font-bold">• 50% DESCUENTO EN TODA LA WEB</span>
          <span className="mx-8 text-sm font-bold">⚡ BLACK FRIDAY WEEK</span>
          <span className="mx-8 text-sm font-bold">• 50% DESCUENTO EN TODA LA WEB</span>
          <span className="mx-8 text-sm font-bold">⚡ BLACK FRIDAY WEEK</span>
          <span className="mx-8 text-sm font-bold">• 50% DESCUENTO EN TODA LA WEB</span>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">
          Compra por Categoría
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-bold mb-1">
                  Hasta {category.discount} OFF
                </span>
                <h3 className="text-white text-2xl font-display font-bold mb-3">
                  {category.name}
                </h3>
                <Button variant="outline" size="sm" className="w-fit bg-white text-foreground hover:bg-white/90">
                  Ver todo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Productos Destacados
          </h2>
          <Button variant="outline">Ver todos</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Index;
