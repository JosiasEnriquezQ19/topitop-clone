import { Package, Truck, RefreshCw, HelpCircle, Store, MessageCircle } from "lucide-react";
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
      icon: <Package className="w-5 h-5" />,
      text: "Seguimiento de pedidos",
      path: "/seguimiento",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Políticas de envío",
      path: "/politicas-envio",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      text: "Cambios y devoluciones",
      path: "/devoluciones",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      text: "Preguntas frecuentes",
      path: "/faq",
    },
    {
      icon: <Store className="w-5 h-5" />,
      text: "Nuestras tiendas",
      path: "/tiendas",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: "Contáctanos",
      path: "/contacto",
    },
  ];

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-md">
          {/* Lista de opciones de ayuda */}
          <div className="space-y-1 mb-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <span className="text-gray-600 group-hover:text-black transition-colors">
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>

          {/* Sección de WhatsApp */}
          <div className="border-t pt-6">
            <h4 className="font-bold text-sm mb-2">¿Necesitas ayuda?</h4>
            <p className="text-xs text-gray-600 mb-4">
              Te asesoramos en tu compra, gestionamos tu pedido, cambios o devoluciones de forma cómoda y segura.
            </p>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">CONVERSEMOS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
