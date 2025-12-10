import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface FiltrosCatalogoProps {
  onFilterChange?: (filters: any) => void;
}

export const FiltrosCatalogo = ({ onFilterChange }: FiltrosCatalogoProps) => {
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string[]>([]);
  const [colorSeleccionado, setColorSeleccionado] = useState<string[]>([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState<string[]>([]);

  const tallas = ["XS", "S", "M", "L", "XL", "XXL"];
  const colores = [
    { nombre: "Negro", hex: "#000000" },
    { nombre: "Blanco", hex: "#FFFFFF" },
    { nombre: "Azul", hex: "#1E40AF" },
    { nombre: "Rojo", hex: "#DC2626" },
    { nombre: "Rosa", hex: "#EC4899" },
    { nombre: "Verde", hex: "#059669" },
    { nombre: "Amarillo", hex: "#EAB308" },
    { nombre: "Gris", hex: "#6B7280" },
  ];
  const marcas = ["Xiomi", "Topitop", "Hawk", "Basic Man", "Basic Woman", "Denim"];

  const toggleTalla = (talla: string) => {
    setTallaSeleccionada((prev) =>
      prev.includes(talla) ? prev.filter((t) => t !== talla) : [...prev, talla]
    );
  };

  const toggleColor = (color: string) => {
    setColorSeleccionado((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
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
    setColorSeleccionado([]);
    setMarcaSeleccionada([]);
  };

  const FiltrosContent = () => (
    <div className="space-y-6">
      {/* Precio */}
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

      {/* Tallas */}
      <div className="border-b border-gray-200 pb-6">
        <button className="flex items-center justify-between w-full text-left font-semibold text-sm mb-4">
          Talla
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="grid grid-cols-3 gap-2">
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

      {/* Colores */}
      <div className="border-b border-gray-200 pb-6">
        <button className="flex items-center justify-between w-full text-left font-semibold text-sm mb-4">
          Color
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="grid grid-cols-4 gap-3">
          {colores.map((color) => (
            <button
              key={color.nombre}
              onClick={() => toggleColor(color.nombre)}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  colorSeleccionado.includes(color.nombre)
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{
                  backgroundColor: color.hex,
                  boxShadow: color.nombre === "Blanco" ? "inset 0 0 0 1px #e5e7eb" : "none",
                }}
              />
              <span className="text-xs text-gray-600">{color.nombre}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Marcas */}
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

      {/* Botón limpiar filtros */}
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
      {/* Desktop Sidebar */}
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

      {/* Mobile Filter Button & Sheet */}
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
