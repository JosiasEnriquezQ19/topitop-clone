import { Truck, FileText, RefreshCw, HelpCircle, Store, MessageCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuAyudaProps {
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MenuAyuda = ({ isVisible, onMouseEnter, onMouseLeave }: MenuAyudaProps) => {
  if (!isVisible) return null;

  const menuItems = [
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Seguimiento de pedidos",
      path: "/ayuda/seguimiento",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Políticas de envío",
      path: "/ayuda/politicas-envio",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      text: "Cambios y devoluciones",
      path: "/ayuda/cambios-devoluciones",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      text: "Preguntas frecuentes",
      path: "/ayuda/preguntas-frecuentes",
    },
    {
      icon: <Store className="w-5 h-5" />,
      text: "Nuestras tiendas",
      path: "/ayuda/nuestras-tiendas",
    },
    {
      icon: <User className="w-5 h-5" />,
      text: "Contáctanos",
      path: "/ayuda/contactanos",
    },
  ];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Container aligned to match the menu position roughly, or just centered content */}
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex justify-end pr-12"> {/* Aligned to right side near 'Ayuda' link */}
          <div className="w-80 bg-white">
            {/* Lista de opciones de ayuda */}
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center gap-4 py-3 border-b border-gray-100 hover:text-black hover:font-medium text-gray-700 transition-all group"
                >
                  <span className="text-gray-900 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-sm">
                    {item.text}
                  </span>
                </Link>
              ))}
            </div>

            {/* Sección de WhatsApp */}
            <div className="mt-6">
              <h4 className="font-bold text-base mb-2 text-black">¿Necesitas ayuda?</h4>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Te asesoramos en tu compra, gestionamos tu pedido, cambios o devoluciones de forma cómoda y segura.
              </p>
              <a
                href="https://wa.me/51987199256"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-none hover:bg-gray-800 transition-colors uppercase font-bold tracking-wider text-sm"
              >
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-black fill-black" />
                </div>
                CONVERSEMOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
