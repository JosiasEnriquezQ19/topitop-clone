import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  discount: string;
  image: string;
  link?: string;
}

const TarjetaCategoria = ({ title, discount, image, link = "#" }: CategoryCardProps) => {
  return (
    <div className="relative bg-black overflow-hidden group cursor-pointer">
      {/* Tag shape decoration */}
      <div className="absolute inset-4 border-2 border-white/30 rounded-t-[60px] pointer-events-none z-10">
        {/* Circle at top of tag */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white/30" />
      </div>
      
      {/* Image */}
      <img 
        src={image} 
        alt={title}
        className="w-full h-[500px] sm:h-[600px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20">
        <h3 className="text-white text-3xl sm:text-4xl font-bold mb-2">{title}</h3>
        <p className="text-white text-base sm:text-lg mb-4">
          Todo con <span className="font-bold">{discount} dscto.</span>
        </p>
        <Button 
          className="bg-white text-black hover:bg-white/90 rounded-none px-6 py-2 text-sm font-semibold"
        >
          COMPRAR EL LOOK
        </Button>
        <a href={link} className="flex items-center gap-1 text-white text-xs mt-4 hover:underline">
          VER COLECCIÓN <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export const BannerCategoria = () => {
  const categories = [
    {
      title: "Polos",
      discount: "50%",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/a2faf5be-84b8-49cb-87ee-e916076f92d6___add905f694ca3eeec7f72816ad160559.png",
    },
    {
      title: "Shorts",
      discount: "50%",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/3626edc1-0e5d-49b2-a610-8d8cf7840736___714362d1fd0dd3c5073b48bbf4626138.png",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-8 sm:mt-12">
      {categories.map((category, index) => (
        <TarjetaCategoria key={index} {...category} />
      ))}
    </section>
  );
};
