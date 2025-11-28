import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const sections = [
    {
      title: "Compra",
      links: ["Mujer", "Hombre", "Infantil", "Outlet", "Nuevos Ingresos"],
    },
    {
      title: "Ayuda",
      links: ["Preguntas Frecuentes", "Seguimiento de Pedido", "Cambios y Devoluciones", "Guía de Tallas", "Métodos de Pago"],
    },
    {
      title: "Sobre Nosotros",
      links: ["Quiénes Somos", "Nuestras Tiendas", "Trabaja con Nosotros", "Términos y Condiciones", "Política de Privacidad"],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              Topi<span className="text-primary">Shop</span>
            </h3>
            <p className="text-secondary-foreground/80 text-sm">
              Tu tienda de moda favorita. Las mejores tendencias y precios increíbles.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © 2024 TopiShop. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-secondary-foreground/70">
              <Link to="#" className="hover:text-primary transition-colors">
                Libro de Reclamaciones
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
