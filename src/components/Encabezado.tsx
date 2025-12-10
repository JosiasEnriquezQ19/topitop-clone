import { Search, ShoppingBag, User, Menu, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarritoLateral } from "./CarritoLateral";
import { MenuUsuario } from "./MenuUsuario";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Encabezado = () => {
  const [cartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Mujer", path: "/mujer" },
    { name: "Hombre", path: "/hombre" },
    { name: "Infantil", path: "/infantil" },
    { name: "Denim", path: "/denim" },
    { name: "Básicos", path: "/basicos" },
    { name: "Outlet", path: "/outlet" },
    { name: "Ayuda", path: "/ayuda" },
  ];

  const textColorClass = isScrolled ? "text-black" : "text-white";
  const borderColorClass = isScrolled ? "border-black" : "border-white";
  const placeholderClass = isScrolled ? "placeholder:text-gray-500" : "placeholder:text-white/80";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
    >
      {/* Promo Banner */}
      <div className={`bg-black text-white text-center py-2 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0 opacity-0' : 'h-auto opacity-100'}`}>
        Envío gratis por compras mayores a S/139
      </div>

      {/* Main Header */}
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-3 sm:py-4 relative">

          {/* Left Section: Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={isScrolled ? "/images/logo.png" : "/images/logo-1.png"}
              alt="Topitop"
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Center Section: Navigation Links - Desktop Only */}
          <nav className="hidden xl:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className={`text-sm font-bold hover:text-primary transition-colors ${textColorClass}`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Right Section: Search & Icons */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Search Bar - Desktop Only */}
            <div className={`hidden lg:flex items-center max-w-xs w-64 relative border-b ${borderColorClass}`}>
              <Input
                type="search"
                placeholder="Buscar productos..."
                className={`border-none bg-transparent px-0 focus-visible:ring-0 ${textColorClass} ${placeholderClass}`}
              />
              <Search className={`absolute right-0 w-4 h-4 ${textColorClass}`} />
            </div>

            {/* Icons - Hidden on Mobile */}
            <div className={`hidden sm:flex items-center gap-2 lg:gap-4 ${textColorClass}`}>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 h-9 w-9 lg:h-10 lg:w-10">
                <Truck className="w-4 h-4 lg:w-5 lg:h-5" />
              </Button>
              <MenuUsuario>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 h-9 w-9 lg:h-10 lg:w-10">
                  <User className="w-4 h-4 lg:w-5 lg:h-5" />
                </Button>
              </MenuUsuario>
              <CarritoLateral>
                <Button variant="ghost" size="icon" className="relative hover:bg-white/10 h-9 w-9 lg:h-10 lg:w-10">
                  <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </CarritoLateral>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`xl:hidden ${textColorClass} h-9 w-9`}>
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Buscar productos..."
                      className="pl-4 pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-bold hover:text-primary transition-colors py-2 border-b border-gray-100"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Icons Section */}
                  <div className="flex flex-col gap-4 pt-4 border-t">
                    <Link to="/tracking" className="flex items-center gap-3 py-2 hover:text-primary transition-colors">
                      <Truck className="w-5 h-5" />
                      <span className="font-medium">Seguimiento</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-3 py-2 hover:text-primary transition-colors">
                      <User className="w-5 h-5" />
                      <span className="font-medium">Mi cuenta</span>
                    </Link>
                    <Link to="/cart" className="flex items-center gap-3 py-2 hover:text-primary transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                      <span className="font-medium">Carrito ({cartCount})</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};
