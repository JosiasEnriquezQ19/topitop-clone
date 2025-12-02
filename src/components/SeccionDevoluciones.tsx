import { Button } from "@/components/ui/button";

export const SeccionDevoluciones = () => {
  const steps = [
    {
      number: 1,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Polo/Camisa icon */}
          <path d="M20 14L24 10H40L44 14L50 20L44 26V52H20V26L14 20L20 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M24 10V18C24 22 28 24 32 24C36 24 40 22 40 18V10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M32 24V34" stroke="currentColor" strokeWidth="2"/>
          <path d="M26 34H38" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Asegúrate que el producto que devuelvas se encuentre en perfecto estado y sin señales de uso, con sus accesorios y etiquetas.",
    },
    {
      number: 2,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Caja/Paquete icon */}
          <path d="M12 22L32 12L52 22V42L32 52L12 42V22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 22L32 32L52 22" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 32V52" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 17L42 27" stroke="currentColor" strokeWidth="2"/>
          {/* Flecha hacia afuera */}
          <path d="M42 38L50 30M50 30L50 38M50 30L42 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Lleva el producto que deseas devolver o cambiar a la tienda Topitop más cercana.",
    },
    {
      number: 3,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Documento con mano icon */}
          <rect x="16" y="8" width="32" height="42" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M22 18H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 26H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 34H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          {/* Símbolo de dinero */}
          <circle cx="38" cy="42" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M38 38V46M36 40H40M36 44H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Te emitiremos una nota de crédito para que puedas volver a adquirir la prenda en tu talla correcta o podrás solicitar la devolución de tu dinero.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-100 mt-10 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column - Title */}
          <div className="lg:w-[280px] flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              ¿Cambios o<br />devoluciones?
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              En nuestra tienda online puedes comprar con total confianza, si deseas devolver o
              cambiar una prenda por otra talla, <span className="text-red-500">puedes hacerlo de manera simple y rápida.</span>
            </p>
            <Button className="rounded-none bg-black text-white hover:bg-gray-800 font-semibold px-6 py-3 text-sm">
              VER TÉRMINOS Y CONDICIONES
            </Button>
          </div>

          {/* Right Columns - Steps */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <span className="absolute -top-1 -left-6 text-3xl font-bold text-gray-900">
                    {step.number}.
                  </span>
                  <div className="text-gray-700">{step.icon}</div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
