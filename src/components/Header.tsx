import { Search, ShoppingBag, User, Menu, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [cartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className={`bg-black text-white text-center py-2 text-[9px] font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0 opacity-0' : 'h-auto opacity-100'}`}>
        Envío gratis por compras mayores a S/139
      </div>

      {/* Main Header */}
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 relative">

          {/* Left Section: Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={isScrolled ? "/images/logo.png" : "/images/logo-1.png"}
              alt="Topitop"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Center Section: Navigation Links */}
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
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className={`hidden lg:flex items-center max-w-xs w-64 relative border-b ${borderColorClass}`}>
              <Input
                type="search"
                placeholder="Buscar productos..."
                className={`border-none bg-transparent px-0 focus-visible:ring-0 ${textColorClass} ${placeholderClass}`}
              />
              <Search className={`absolute right-0 w-4 h-4 ${textColorClass}`} />
            </div>

            {/* Icons */}
            <div className={`flex items-center gap-4 ${textColorClass}`}>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Truck className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:bg-white/10">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className={`lg:hidden ${textColorClass}`}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};
