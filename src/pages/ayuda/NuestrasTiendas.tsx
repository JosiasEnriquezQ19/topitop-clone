import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { MapPin, Clock } from "lucide-react";

const TiendaCard = ({ nombre, direccion, horario }: { nombre: string; direccion: string; horario: string }) => (
  <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
    <h3 className="font-bold text-lg mb-2">{nombre}</h3>
    <div className="flex items-start gap-3 mb-2 text-gray-600 text-sm">
      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
      <p>{direccion}</p>
    </div>
    <div className="flex items-start gap-3 text-gray-600 text-sm">
      <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
      <p>{horario}</p>
    </div>
  </div>
);

const NuestrasTiendas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase">Nuestras Tiendas</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TiendaCard 
            nombre="Topitop Jockey Plaza" 
            direccion="Av. Javier Prado Este 4200, Santiago de Surco. C.C. Jockey Plaza, 1er Nivel."
            horario="Lun a Dom: 10:00 am - 10:00 pm"
          />
          <TiendaCard 
            nombre="Topitop San Miguel" 
            direccion="Av. La Marina 2000, San Miguel. C.C. Plaza San Miguel."
            horario="Lun a Dom: 10:00 am - 10:00 pm"
          />
          <TiendaCard 
            nombre="Topitop Centro Cívico" 
            direccion="Av. Garcilaso de la Vega 1337, Cercado de Lima. Real Plaza Centro Cívico."
            horario="Lun a Dom: 10:00 am - 10:00 pm"
          />
           <TiendaCard 
            nombre="Topitop Megaplaza" 
            direccion="Av. Alfredo Mendiola 3698, Independencia. C.C. MegaPlaza."
            horario="Lun a Dom: 10:00 am - 10:00 pm"
          />
           <TiendaCard 
            nombre="Topitop Plaza Norte" 
            direccion="Av. Alfredo Mendiola 1400, Independencia. C.C. Plaza Norte."
            horario="Lun a Dom: 10:00 am - 10:00 pm"
          />
           <TiendaCard 
            nombre="Topitop Trujillo" 
            direccion="Jr. Pizarro 485, Trujillo. Centro Histórico."
            horario="Lun a Dom: 10:00 am - 9:00 pm"
          />
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default NuestrasTiendas;
