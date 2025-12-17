import { useState, useEffect } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface FiltrosState {
  precioMin: string;
  precioMax: string;
  tallas: string[];
  marcas: string[];
  ordenamiento: string;
}

interface FiltrosCatalogoProps {
  onFilterChange?: (filters: FiltrosState) => void;
  marcasDisponibles?: string[];
}

export const FiltrosCatalogo = ({ onFilterChange, marcasDisponibles }: FiltrosCatalogoProps) => {
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string[]>([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState<string[]>([]);
  const [ordenamiento, setOrdenamiento] = useState("relevancia");

  const tallas = ["XS", "S", "M", "L", "XL", "XXL", "26", "28", "30", "32", "34", "36"];
  const marcas = marcasDisponibles || ["Topitop", "Xiomi", "Hawk", "Topitop Mujer", "Topitop Hombre", "Topitop Kids"];

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        precioMin,
        precioMax,
        tallas: tallaSeleccionada,
        marcas: marcaSeleccionada,
        ordenamiento,
      });
    }
  }, [precioMin, precioMax, tallaSeleccionada, marcaSeleccionada, ordenamiento]);

  const toggleTalla = (talla: string) => {
    setTallaSeleccionada((prev) =>
      prev.includes(talla) ? prev.filter((t) => t !== talla) : [...prev, talla]
    );
  };

  const toggleMarca = (marca: string) => {
    setMarcaSeleccionada((prev) =>
      prev.includes(marca) ? prev.filter((m) => m !== marca) : [...prev, marca]
    );
  };

  const limpiarFiltros = () => {
    setPrecioMin("");
    setPrecioMax("");
    setTallaSeleccionada([]);
    setMarcaSeleccionada([]);
    setOrdenamiento("relevancia");
  };

  const FiltrosContent = () => (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <button className="flex items-center justify-between w-full text-left font-semibold text-sm mb-4">
          Precio
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="flex gap-3 items-center">
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Mínimo</label>
            <input
              type="number"
              placeholder="S/ 0"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>
          <span className="text-gray-400 mt-5">-</span>
          <div className="flex-1">
            <label className="text-xs text-gray-500 mb-1 block">Máximo</label>
            <input
              type="number"
              placeholder="S/ 500"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <button className="flex items-center justify-between w-full text-left font-semibold text-sm mb-4">
          Talla
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="grid grid-cols-4 gap-2">
          {tallas.map((talla) => (
            <button
              key={talla}
              onClick={() => toggleTalla(talla)}
              className={`py-2 px-3 text-sm border rounded transition-colors ${
                tallaSeleccionada.includes(talla)
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:border-black"
              }`}
            >
              {talla}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <button className="flex items-center justify-between w-full text-left font-semibold text-sm mb-4">
          Marca
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="space-y-2">
          {marcas.map((marca) => (
            <label key={marca} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marcaSeleccionada.includes(marca)}
                onChange={() => toggleMarca(marca)}
                className="w-4 h-4 accent-black"
              />
              <span className="text-sm">{marca}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-200 pb-6">
        <button className="flex items-center justify-between w-full text-left font-semibold text-sm mb-4">
          Ordenar por
          <ChevronDown className="w-4 h-4" />
        </button>
        <select
          value={ordenamiento}
          onChange={(e) => setOrdenamiento(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black"
        >
          <option value="relevancia">Relevancia</option>
          <option value="precio-menor">Menor precio</option>
          <option value="precio-mayor">Mayor precio</option>
          <option value="nombre">Nombre A-Z</option>
          <option value="nuevos">Más nuevos</option>
        </select>
      </div>

      <Button
        onClick={limpiarFiltros}
        variant="outline"
        className="w-full border-black hover:bg-black hover:text-white"
      >
        Limpiar filtros
      </Button>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5" />
              <h3 className="font-bold text-lg">Filtros</h3>
            </div>
            <FiltrosContent />
          </div>
        </div>
      </aside>

      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-6 shadow-lg">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filtros
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filtros
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FiltrosContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
