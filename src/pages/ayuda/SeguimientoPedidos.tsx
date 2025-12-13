import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SeguimientoPedidos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2 text-center">SEGUIMIENTO DE PEDIDO</h1>
        <p className="text-center text-gray-500 mb-12">Ingresa el número de tu pedido para ver su estado actual.</p>
        
        <div className="bg-gray-50 p-8 rounded-lg max-w-xl mx-auto border border-gray-100 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Número de Pedido</label>
              <Input placeholder="Ej: 123456789" className="w-full" />
            </div>
             <div>
              <label className="block text-sm font-bold mb-2">DNI / CE</label>
              <Input placeholder="Ingresa tu número de documento" className="w-full" />
            </div>
            
            <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold tracking-widest py-6">
              BUSCAR PEDIDO
            </Button>
          </div>
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default SeguimientoPedidos;
