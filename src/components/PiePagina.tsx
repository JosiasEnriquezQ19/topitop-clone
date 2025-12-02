import { Facebook, Instagram, Youtube, Linkedin, Music, Truck, FileText, HelpCircle, MessageSquare, Store, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const PiePagina = () => {
  return (
    <footer className="bg-white text-gray-800 border-t-4 border-red-600 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Column 1: Brand Info */}
          <div className="space-y-6 text-center sm:text-left">
            <img src="/images/logo.png" alt="Topitop" className="h-8 sm:h-10 object-contain mx-auto sm:mx-0" />

            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {/* TikTok placeholder */}
              </a>
              <a href="#" className="border border-black rounded-full p-1 hover:bg-gray-100 transition-colors">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

            <div className="text-xs space-y-1 text-gray-600">
              <p>Dirección Legal: Av. Santuario Nro. 1323</p>
              <p>San Juan de Lurigancho 15427 - Lima</p>
              <br />
              <p>Razón Social: Trading Fashion Line S.A.</p>
              <p>RUC: 20501057682</p>
            </div>

            <div className="mt-4 flex justify-center sm:justify-start">
              {/* Libro de Reclamaciones - Link externo */}
              <a 
                href="https://www.topitop.pe/libro-de-reclamaciones" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 rounded p-2 inline-block text-center w-28 sm:w-32 hover:border-red-500 transition-colors"
              >
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-red-600 mb-1" />
                <p className="text-[9px] sm:text-[10px] font-bold leading-tight">LIBRO DE<br />RECLAMACIONES</p>
              </a>
            </div>
          </div>

          {/* Column 2: Servicio al Cliente */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4 sm:mb-6 text-gray-700">Servicio al Cliente</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-600">
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Seguimiento de pedido</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Políticas de envío</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Términos y condiciones</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Preguntas frecuentes</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Contáctanos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Nosotros */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4 sm:mb-6 text-gray-700">Nosotros</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-600">
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <Store className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Nuestras tiendas</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 font-bold text-base sm:text-lg flex items-center justify-center flex-shrink-0">t</span>
                  <span className="text-xs sm:text-sm">Nosotros</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Política y protección de datos</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 sm:gap-3 hover:text-red-600 transition-colors">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Bases legales</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Marcas */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4 sm:mb-6 text-gray-700">Marcas</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Xiomi</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Hawk</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Topitop Mujer</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Topitop Hombre</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Topitop Kids</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Basic Man</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Basic Woman</Link></li>
              <li><Link to="#" className="hover:text-red-600 transition-colors text-xs sm:text-sm">Denim</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-red-600 text-white text-center py-3 mt-10">
        <p className="text-xs sm:text-sm">© Topitop 2025 - Derechos reservados</p>
      </div>
    </footer>
  );
};
