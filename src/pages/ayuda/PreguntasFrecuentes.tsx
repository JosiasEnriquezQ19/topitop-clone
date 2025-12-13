import { Encabezado } from "@/components/Encabezado";
import { PiePagina } from "@/components/PiePagina";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PreguntasFrecuentes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Encabezado />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center uppercase">Preguntas Frecuentes</h1>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-bold">¿Cómo puedo comprar en Topitop.pe?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Comprar es muy fácil: Navega por nuestras categorías, selecciona tus productos y agrégalos al carrito. Ve al checkout, ingresa tus datos de envío, selecciona tu método de pago y ¡listo! Recibirás un correo de confirmación.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-bold">¿Cuáles son los métodos de pago?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, Amex, Diners), pago efectivo y billeteras digitales.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-bold">¿Es seguro comprar en la web?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Totalmente. Contamos con certificaciones de seguridad SSL y pasarelas de pago encriptadas para proteger tus datos en todo momento.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-bold">¿Puedo recoger mi pedido en tienda?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Sí, contamos con la opción de Retiro en Tienda Gratis en locales seleccionados a nivel nacional. Esta opción aparecerá en el checkout si está disponible para tu ubicación.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <PiePagina />
    </div>
  );
};

export default PreguntasFrecuentes;
