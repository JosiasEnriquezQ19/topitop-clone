import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { Truck, Clock, MapPin } from "lucide-react";

const PoliticasEnvio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase">Políticas de Envío</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 border rounded-lg bg-gray-50">
            <Truck className="w-10 h-10 mx-auto mb-4 text-black" />
            <h3 className="font-bold mb-2">Envío Gratis</h3>
            <p className="text-sm text-gray-600">En compras superiores a S/ 139 en todo Lima Metropolitana.</p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-gray-50">
            <Clock className="w-10 h-10 mx-auto mb-4 text-black" />
            <h3 className="font-bold mb-2">Tiempos de Entrega</h3>
            <p className="text-sm text-gray-600">Lima: 2 a 3 días hábiles.<br/>Provincia: 4 a 7 días hábiles.</p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-gray-50">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-black" />
            <h3 className="font-bold mb-2">Cobertura</h3>
            <p className="text-sm text-gray-600">Llegamos a todo el Perú. Revisa nuestra cobertura detallada.</p>
          </div>
        </div>

        <div className="prose max-w-none text-gray-700 space-y-4">
          <h3 className="font-bold text-lg text-black">1. COBERTURA</h3>
          <p>Realizamos despachos a la gran mayoría de destinos del Perú. Algunas zonas alejadas pueden tener condiciones especiales.</p>
          
          <h3 className="font-bold text-lg text-black">2. COSTOS DE ENVÍO</h3>
          <p>El costo varía según el destino y el peso del pedido. Podrás ver el monto exacto en el checkout antes de pagar.</p>
          
          <h3 className="font-bold text-lg text-black">3. SEGUIMIENTO</h3>
          <p>Una vez despachado, recibirás un correo con el número de tracking para que puedas seguir tu pedido en tiempo real.</p>
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default PoliticasEnvio;
