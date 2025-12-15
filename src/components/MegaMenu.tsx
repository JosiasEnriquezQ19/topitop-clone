import { Link } from "react-router-dom";

interface SubcategoriaItem {
  nombre: string;
  imagen: string;
  path: string;
}

interface MegaMenuProps {
  categoria: string;
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MegaMenu = ({ categoria, isVisible, onMouseEnter, onMouseLeave }: MegaMenuProps) => {
  // Configuración de subcategorías por categoría
  const subcategoriasPorCategoria: { [key: string]: SubcategoriaItem[] } = {
    Mujer: [
      { nombre: "Abrigos y Blazers", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/abrigos-blazers" },
      { nombre: "Blusas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/mujer?subcategoria=blusas" },
      { nombre: "Casacas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/mujer?subcategoria=casacas" },
      { nombre: "Chalecos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/mujer?subcategoria=chalecos" },
      { nombre: "Chompas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/mujer?subcategoria=chompas" },
      { nombre: "Faldas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/mujer?subcategoria=faldas" },
      { nombre: "Jeans", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/mujer?subcategoria=jeans" },
      { nombre: "Joggers", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/mujer?subcategoria=joggers" },
      { nombre: "Overol y Enterizos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/mujer?subcategoria=overol" },
      { nombre: "Pantalones", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/mujer?subcategoria=pantalones" },
      { nombre: "Poleras", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/mujer?subcategoria=poleras" },
      { nombre: "Polos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/mujer?subcategoria=polos" },
      { nombre: "Ropa deportiva", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/mujer?subcategoria=deportiva" },
      { nombre: "Ropa interior", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/mujer?subcategoria=interior" },
      { nombre: "Shorts", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/mujer?subcategoria=shorts" },
      { nombre: "Vestidos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/mujer?subcategoria=vestidos" },
      { nombre: "Accesorios", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/mujer?subcategoria=accesorios" },
    ],
    Hombre: [
      { nombre: "Bermudas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/hombre?subcategoria=bermudas" },
      { nombre: "Buzos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/hombre?subcategoria=buzos" },
      { nombre: "Camisas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/hombre?subcategoria=camisas" },
      { nombre: "Casacas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/hombre?subcategoria=casacas" },
      { nombre: "Chompas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/hombre?subcategoria=chompas" },
      { nombre: "Jeans", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/hombre?subcategoria=jeans" },
      { nombre: "Joggers", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/hombre?subcategoria=joggers" },
      { nombre: "Pantalones", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/hombre?subcategoria=pantalones" },
      { nombre: "Polos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/hombre?subcategoria=polos" },
      { nombre: "Ropa deportiva", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/hombre?subcategoria=deportiva" },
      { nombre: "Ropa interior", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/hombre?subcategoria=interior" },
      { nombre: "Shorts", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/hombre?subcategoria=shorts" },
    ],
    Infantil: [
      { nombre: "Niñas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/infantil?subcategoria=ninas" },
      { nombre: "Niños", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/infantil?subcategoria=ninos" },
      { nombre: "Bebés", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/infantil?subcategoria=bebes" },
      { nombre: "Polos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/infantil?subcategoria=polos" },
      { nombre: "Shorts", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/infantil?subcategoria=shorts" },
      { nombre: "Vestidos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/infantil?subcategoria=vestidos" },
    ],
    Denim: [
      { nombre: "Jeans Mujer", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/denim?subcategoria=jeans-mujer" },
      { nombre: "Jeans Hombre", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/denim?subcategoria=jeans-hombre" },
      { nombre: "Shorts Denim", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/denim?subcategoria=shorts" },
      { nombre: "Faldas Denim", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/denim?subcategoria=faldas" },
      { nombre: "Casacas Denim", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/denim?subcategoria=casacas" },
    ],
    Básicos: [
      { nombre: "Polos Básicos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/basicos?subcategoria=polos" },
      { nombre: "Blusas Básicas", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/basicos?subcategoria=blusas" },
      { nombre: "Pantalones Básicos", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/basicos?subcategoria=pantalones" },
      { nombre: "Ropa Interior", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/basicos?subcategoria=interior" },
    ],
    Outlet: [
      { nombre: "Ofertas Mujer", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/outlet?subcategoria=mujer" },
      { nombre: "Ofertas Hombre", imagen: "https://topitop.vtexassets.com/arquivos/ids/395070/3157704_1.jpg?v=638987600808370000", path: "/catalogo/outlet?subcategoria=hombre" },
      { nombre: "Ofertas Infantil", imagen: "https://topitop.vtexassets.com/arquivos/ids/395543/3172280_1.jpg?v=638992488017270000", path: "/catalogo/outlet?subcategoria=infantil" },
      { nombre: "Últimas unidades", imagen: "https://topitop.vtexassets.com/arquivos/ids/395547-500-auto?v=638992488445030000&width=100&height=auto&aspect=true", path: "/catalogo/outlet?subcategoria=ultimas" },
    ],
  };

  const subcategorias = subcategoriasPorCategoria[categoria] || [];
  const categoriaLower = categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (!isVisible || categoria === "Ayuda") return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Columna izquierda - Menú principal */}
          <div className="w-64 flex-shrink-0 border-r border-gray-200 pr-8">
            {/* Título de categoría */}
            <h3 className="text-red-600 font-bold text-lg mb-4">{categoria}</h3>
            
            {/* Enlaces rápidos */}
            <div className="space-y-3 mb-8">
              <Link
                to={`/catalogo/${categoriaLower}?filtro=novedades`}
                className="block text-sm text-gray-700 hover:text-red-600 transition-colors"
              >
                Novedades
              </Link>
              <Link
                to={`/catalogo/${categoriaLower}?filtro=ofertas`}
                className="block text-sm text-gray-700 hover:text-red-600 transition-colors"
              >
                Ofertas y descuentos
              </Link>
              <Link
                to={`/catalogo/${categoriaLower}`}
                className="block text-sm font-semibold text-gray-900 hover:text-red-600 transition-colors"
              >
                Ver todo
              </Link>
            </div>

            {/* Sección de ayuda */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-bold text-sm mb-2">¿Necesitas ayuda?</h4>
              <p className="text-xs text-gray-600 mb-4">
                Te asesoramos en tu compra, gestionamos tu pedido, cambios o devoluciones de forma cómoda y segura.
              </p>
              <a
                href="https://wa.me/51987199256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                CONVERSEMOS
              </a>
            </div>

            {/* Imagen de categoría */}
            <div className="mt-6 relative">
              <div className="text-8xl font-bold text-gray-200 leading-none">
                {categoria.charAt(0).toUpperCase() + categoria.slice(1, 4)}
              </div>
            </div>
          </div>

          {/* Columna derecha - Grid de subcategorías */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              {subcategorias.map((subcat) => (
                <Link
                  key={subcat.nombre}
                  to={subcat.path}
                  className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <div className="w-12 h-16 flex-shrink-0 overflow-hidden rounded">
                    <img
                      src={subcat.imagen}
                      alt={subcat.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-red-600 group-hover:underline transition-colors">
                    {subcat.nombre}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
