import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "MEGA SALE",
      subtitle: "50% de descuento",
      description: "En toda la web",
      cta: "Comprar ahora",
      image: "/images/portada.jpg",
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
    <section className="relative w-full h-[950px] overflow-hidden bg-secondary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />


        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
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
