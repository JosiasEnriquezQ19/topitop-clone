import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [cartCount] = useState(0);

  const categories = [
    { name: "Mujer", path: "/mujer" },
    { name: "Hombre", path: "/hombre" },
    { name: "Infantil", path: "/infantil" },
    { name: "Denim", path: "/denim" },
    { name: "Básicos", path: "/basicos" },
    { name: "Outlet", path: "/outlet" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      {/* Top Banner - Free Shipping */}
      <div className="promo-banner">
        <p>Envío gratis por compras mayores a S/139</p>
      </div>

      {/* Sale Banner with Countdown */}
      <div className="promo-banner-sale relative overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          <span className="text-lg">⚡ MEGA SALE | 50% DSCTO en toda la web</span>
          <div className="flex gap-2 text-sm font-mono">
            <span className="bg-white/20 px-2 py-1 rounded">02D</span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">16H</span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">23M</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-foreground">
              Topi<span className="text-primary">Shop</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="nav-link text-sm uppercase"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="pl-10 bg-muted/50 border-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
