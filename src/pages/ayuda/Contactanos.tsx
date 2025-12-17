import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contactanos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado variant="solid" />
      <div className="container mx-auto px-4 py-12 max-w-3xl mt-16">
        <h1 className="text-3xl font-bold mb-12 text-center uppercase">Contáctanos</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-xl font-bold mb-6">Estamos aquí para ayudarte</h2>
            <p className="text-gray-600 mb-8">
              Si tienes alguna duda sobre tu pedido, nuestros productos o servicios, no dudes en contactarnos a través de nuestros canales oficiales.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Call Center</h3>
                  <p className="text-sm text-gray-600">(01) 315-9000</p>
                </div>
              </div>

               <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Correo Electrónico</h3>
                  <p className="text-sm text-gray-600">atencionalcliente@topitop.com.pe</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-sm text-gray-600">+51 987 654 321</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
             <h2 className="text-xl font-bold mb-6">Envíanos un mensaje</h2>
             <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-medium">Nombre</label>
                   <Input placeholder="Tu nombre" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium">Apellido</label>
                   <Input placeholder="Tu apellido" />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-sm font-medium">Correo Electrónico</label>
                 <Input type="email" placeholder="ejemplo@correo.com" />
               </div>

                <div className="space-y-2">
                 <label className="text-sm font-medium">Asunto</label>
                 <Input placeholder="Motivo de contacto" />
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-medium">Mensaje</label>
                 <Textarea placeholder="Escribe tu mensaje aquí..." className="h-32" />
               </div>

               <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold">
                 ENVIAR MENSAJE
               </Button>
             </form>
          </div>
        </div>
      </div>
      <PiePagina />
    </div>
  );
};

export default Contactanos;
