import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FiltrosAbrigosBlazersProps {
  marca: string[];
  talla: string[];
  onMarcaChange: (marcas: string[]) => void;
  onTallaChange: (tallas: string[]) => void;
  onOrdenamiento: (valor: string) => void;
  esInfantil?: boolean;
}

export function FiltrosAbrigosBlazers({
  marca,
  talla,
  onMarcaChange,
  onTallaChange,
  onOrdenamiento,
  esInfantil = false,
}: FiltrosAbrigosBlazersProps) {
  const [todosOpen, setTodosOpen] = useState(false);
  const [marcaOpen, setMarcaOpen] = useState(false);
  const [tallaOpen, setTallaOpen] = useState(false);
  const [ordenOpen, setOrdenOpen] = useState(false);

  const marcas = esInfantil ? ['Topitop Kids'] : ['Topitop mujer', 'Xiomi'];
  const tallas = esInfantil ? ['02', '04', '06', '08', '10', '12', '14'] : ['S', 'M', 'L', 'XL'];

  const handleMarcaToggle = (m: string) => {
    if (marca.includes(m)) {
      onMarcaChange(marca.filter(item => item !== m));
    } else {
      onMarcaChange([...marca, m]);
    }
  };

  const handleTallaToggle = (t: string) => {
    if (talla.includes(t)) {
      onTallaChange(talla.filter(item => item !== t));
    } else {
      onTallaChange([...talla, t]);
    }
  };

  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-0 overflow-visible">
          {/* Todos los filtros */}
          <div className="relative px-4 py-2 border-r border-gray-700">
            <button 
              onClick={() => setTodosOpen(!todosOpen)}
              className="flex items-center gap-2 font-medium text-sm hover:text-gray-300 transition"
            >
              <span className="text-lg">≡</span>
              <span>Todos los filtros</span>
            </button>
            {todosOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-2xl min-w-[350px] max-h-[500px] overflow-y-auto z-50 p-4">
                {/* Marca */}
                <div className="mb-4 pb-4 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-sm">Marca</h3>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    {marcas.map((m) => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition">
                        <input
                          type="checkbox"
                          checked={marca.includes(m)}
                          onChange={() => handleMarcaToggle(m)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Talla */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-sm">Talla</h3>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    {tallas.map((t) => (
                      <label key={t} className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition">
                        <input
                          type="checkbox"
                          checked={talla.includes(t)}
                          onChange={() => handleTallaToggle(t)}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Marca */}
          <div className="relative px-4 py-2 border-r border-gray-700">
            <button 
              onClick={() => setMarcaOpen(!marcaOpen)}
              className="flex items-center gap-2 font-medium text-sm hover:text-gray-300 transition"
            >
              Marca
              <ChevronDown className="h-4 w-4" />
            </button>
            {marcaOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-2xl min-w-[300px] z-50 p-4">
                <h3 className="font-bold mb-3 text-sm">Marca</h3>
                <div className="space-y-3">
                  {marcas.map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition">
                      <input
                        type="checkbox"
                        checked={marca.includes(m)}
                        onChange={() => handleMarcaToggle(m)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Talla */}
          <div className="relative px-4 py-2 border-r border-gray-700">
            <button 
              onClick={() => setTallaOpen(!tallaOpen)}
              className="flex items-center gap-2 font-medium text-sm hover:text-gray-300 transition"
            >
              Talla
              <ChevronDown className="h-4 w-4" />
            </button>
            {tallaOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-2xl min-w-[300px] z-50 p-4">
                <h3 className="font-bold mb-3 text-sm">Talla</h3>
                <div className="space-y-3">
                  {tallas.map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition">
                      <input
                        type="checkbox"
                        checked={talla.includes(t)}
                        onChange={() => handleTallaToggle(t)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm">{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Espaciador */}
          <div className="flex-1"></div>

          {/* Ordenar por */}
          <div className="relative px-4 py-2">
            <button 
              onClick={() => setOrdenOpen(!ordenOpen)}
              className="flex items-center gap-2 font-medium text-sm hover:text-gray-300 transition"
            >
              ORDENAR POR
              <ChevronDown className="h-4 w-4" />
            </button>
            {ordenOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-2xl min-w-[280px] z-50 p-4">
                <h3 className="font-bold mb-3 text-sm">Ordenar por</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onOrdenamiento('relevancia');
                      setOrdenOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 transition rounded"
                  >
                    Relevancia
                  </button>
                  <button
                    onClick={() => {
                      onOrdenamiento('precio-menor');
                      setOrdenOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 transition rounded"
                  >
                    Precio: Menor a mayor
                  </button>
                  <button
                    onClick={() => {
                      onOrdenamiento('precio-mayor');
                      setOrdenOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 transition rounded"
                  >
                    Precio: Mayor a menor
                  </button>
                  <button
                    onClick={() => {
                      onOrdenamiento('nombre');
                      setOrdenOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 transition rounded"
                  >
                    Nombre A-Z
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Vista grid/lista */}
          <div className="flex items-center gap-2 px-4">
            <button className="p-1 hover:bg-gray-800 transition rounded">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                <path d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-800 transition rounded">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                <path d="M12 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4z" />
                <path d="M3 13a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" />
                <path d="M12 13a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
