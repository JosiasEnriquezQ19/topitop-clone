import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "La Magia de Compartir",
      subtitle: "Hasta 60% de descuento",
      description: "En miles de prendas",
      cta: "Comprar ahora",
      image: "/img/9b2c81ff-6f40-45b1-8776-ae1cfd7faf95___656e2346110ee8be519429fc7bf73ec9.webp",
    },
    {
      title: "Prendas de Mujer",
      subtitle: "Hasta 50% de descuento",
      description: "En prendas de mujer",
      cta: "Ver Todo",
      image: "/img/da2b83a6-1d16-4997-af10-65bf568a22d5___3c6af236b3de35dd9b73d0e5d2ee3645.webp",
    },
    {
      title: "Prendas de Hombre",
      subtitle: "Hasta 50% de descuento",
      description: "En prendas de hombre",
      cta: "Ver Todo",
      image: "/img/f9f7a057-f58b-4355-a8a2-7e41761bfa97___c523a7e1b115ee603257463d720ef97f.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden bg-secondary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Image with object-fit to show complete image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-contain"
          />

        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
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
