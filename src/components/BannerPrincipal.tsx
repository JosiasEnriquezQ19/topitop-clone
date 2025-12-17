import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export const BannerPrincipal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "La Magia de Compartir",
      subtitle: "Hasta 60% de descuento",
      description: "En miles de prendas",
      cta: "Comprar ahora",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/5cafa61d-2509-42d7-95c6-bc3b47019876___562aa9d8e8fa0b688d59486635b3f77d.png",
    },
    {
      title: "Prendas de Mujer",
      subtitle: "Hasta 50% de descuento",
      description: "En prendas de mujer",
      cta: "Ver Todo",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/8377efee-5db9-4f61-b0b7-5f0504eb7694___5824c847886226f2648fe10c248ed7aa.png",
    },
    {
      title: "Prendas de Hombre",
      subtitle: "Hasta 50% de descuento",
      description: "En prendas de hombre",
      cta: "Ver Todo",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/0a456e5f-93ec-4e3b-b61c-fca85763d60e___0076c754bd13402b0255d00035069d6b.png",
    },
  ];

  // Auto-slide cada 8 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${index === currentSlide ? "block" : "hidden"}`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto max-w-full block"
            style={{ borderStyle: 'none' }}
          />

        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};
