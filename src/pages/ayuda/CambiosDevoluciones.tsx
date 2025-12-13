import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { RefreshCw, CheckCircle, XCircle } from "lucide-react";

const CambiosDevoluciones = () => {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase">Cambios y Devoluciones</h1>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8 flex items-start gap-6">
           <RefreshCw className="w-12 h-12 text-black flex-shrink-0" />
           <div>
             <h2 className="text-xl font-bold mb-2">Política Flexible</h2>
             <p className="text-gray-600">Tienes hasta <span className="font-bold text-black">30 días calendario</span> desde la fecha de recepción para realizar cambios o devoluciones de tus productos comprados en Topitop.pe.</p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Requisitos Indispensables
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
               <li>Producto sin uso y con etiquetas originales.</li>
               <li>Comprobante de pago (boleta o factura).</li>
               <li>Documento de identidad del titular de la compra.</li>
               <li>Empaque original en buen estado.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              No Aplica Para
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
               <li>Ropa interior y lencería.</li>
               <li>Medias y calcetines.</li>
               <li>Productos de liquidación final.</li>
               <li>Productos dañados por mal uso.</li>
            </ul>
          </div>
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default CambiosDevoluciones;
