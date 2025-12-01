import { Facebook, Instagram, Youtube, Linkedin, Music, Truck, FileText, HelpCircle, MessageSquare, Store, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t-4 border-red-600 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <img src="/images/logo.png" alt="Topitop" className="h-10 object-contain" />

            <div className="flex gap-4">
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Music className="w-4 h-4" /> {/* TikTok placeholder */}
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs space-y-1 text-gray-600">
              <p>Dirección Legal: Av. Santuario Nro. 1323</p>
              <p>San Juan de Lurigancho 15427 - Lima</p>
              <br />
              <p>Razón Social: Trading Fashion Line S.A.</p>
              <p>RUC: 20501057682</p>
            </div>

            <div className="mt-4">
              {/* Placeholder for Libro de Reclamaciones image */}
              <div className="border border-gray-300 rounded p-2 inline-block text-center w-32">
                <BookOpen className="w-8 h-8 mx-auto text-blue-600 mb-1" />
                <p className="text-[10px] font-bold leading-tight">LIBRO DE<br />RECLAMACIONES</p>
              </div>
            </div>
          </div>

          {/* Column 2: Servicio al Cliente */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-6 text-gray-700">Servicio al Cliente</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <Truck className="w-5 h-5 text-red-500" />
                  Seguimiento de pedido
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <FileText className="w-5 h-5 text-red-500" />
                  Políticas de envío
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <FileText className="w-5 h-5 text-red-500" />
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <HelpCircle className="w-5 h-5 text-red-500" />
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <MessageSquare className="w-5 h-5 text-red-500" />
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Nosotros */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-6 text-gray-700">Nosotros</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <Store className="w-5 h-5 text-red-500" />
                  Nuestras tiendas
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <span className="w-5 h-5 text-red-500 font-bold text-lg flex items-center justify-center">t</span>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <Shield className="w-5 h-5 text-red-500" />
                  Política y protección de datos
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <FileText className="w-5 h-5 text-red-500" />
                  Bases legales
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Marcas */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-6 text-gray-700">Marcas</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-red-600 transition-colors">Xiomi</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors">Hawk</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors">Topitop Mujer</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors">Topitop Hombre</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors">Topitop Kids</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors">Basic Man</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors">Basic Woman</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors">Denim</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};
