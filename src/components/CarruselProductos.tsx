import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { TarjetaProductoHover } from "./TarjetaProductoHover";
import { useState, useRef } from "react";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  sizes?: string[];
  discount?: number;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export const CarruselProductos = ({ title, products }: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <a href="#" className="flex items-center gap-1 text-sm font-medium hover:underline">
          VER TODO <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-black transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-black transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Products Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[280px] sm:w-[300px]">
              <TarjetaProductoHover {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
