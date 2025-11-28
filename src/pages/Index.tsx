import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, CreditCard, RefreshCcw, Shield } from "lucide-react";

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

  const benefits = [
    {
      icon: Truck,
      title: "Envío Gratis",
      description: "En compras mayores a S/139",
    },
    {
      icon: CreditCard,
      title: "Pago Seguro",
      description: "Múltiples métodos de pago",
    },
    {
      icon: RefreshCcw,
      title: "Cambios Fáciles",
      description: "30 días para cambios",
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Protección al comprador",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <benefit.icon className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
              <p className="text-xs text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

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

      {/* CTA Banner */}
      <section className="bg-secondary text-secondary-foreground py-20 my-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            ¡No te pierdas las mejores ofertas!
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/80">
            Suscríbete y recibe un 10% adicional en tu primera compra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-primary"
            />
            <Button size="lg" className="btn-primary">
              Suscribirme
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
