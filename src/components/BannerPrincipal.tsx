import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const BannerPrincipal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "MEGA SALE",
      subtitle: "50% de descuento",
      description: "En toda la web",
      cta: "Comprar ahora",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/2a05c0a7-5b02-4d12-a93b-ec9a0fb11898___0ffe5de1bd0e3335ae7eec958ef864d7.png",
    },
    {
      title: "Nueva Colección",
      subtitle: "Tendencias 2024",
      description: "Lo último en moda",
      cta: "Descubrir",
      image: "/images/portada_2.jpeg",
    },
    {
      title: "Nueva Colección",
      subtitle: "Tendencias 2024",
      description: "Lo último en moda",
      cta: "Descubrir",
      image: "/images/portada_3.jpeg",
    },
    {
      title: "Nueva Colección",
      subtitle: "Tendencias 2024",
      description: "Lo último en moda",
      cta: "Descubrir",
      image: "/images/portada_4.jpeg",
    },

  ];

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
