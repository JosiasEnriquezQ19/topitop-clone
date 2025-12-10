import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PromoCardProps {
  title: string;
  discount: string;
  image: string;
  link: string;
  bgColor?: string;
}

const TarjetaPromoInfantil = ({ title, discount, image, link, bgColor = "bg-green-600" }: PromoCardProps) => {
  return (
    <div className={`relative overflow-hidden ${bgColor} h-[400px] sm:h-[500px] md:h-[550px]`}>
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top"
      />
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-10">
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-white text-sm sm:text-base mb-4 drop-shadow-md">
          Hasta <span className="font-bold">{discount}</span>
        </p>
        <Link to={link}>
          <Button 
            className="bg-white/20 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-black rounded-none px-6 py-2 text-sm font-semibold transition-all mb-3"
          >
            COMPRAR EL LOOK
          </Button>
        </Link>
        <Link to={link} className="flex items-center text-white text-xs hover:underline">
          VER COLECCIÓN →
        </Link>
      </div>
    </div>
  );
};

export const SeccionInfantil = () => {
  const promos = [
    {
      title: "Polos y Shorts niñas",
      discount: "50% dscto.",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/d5a93d60-dfc4-4d09-b37c-cd48e4e7af45___e3e08f6f3e8cc5bbeff8629b1ef1bf00.png",
      link: "/catalogo/infantil?categoria=ninas",
      bgColor: "bg-green-600",
    },
    {
      title: "Polos y bermudas niños",
      discount: "50% dscto.",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/84ca9d74-f2e1-44fb-adde-f8b48e20fa4d___0f11abf34ae3dccd91f4e5d48dbd2f51.png",
      link: "/catalogo/infantil?categoria=ninos",
      bgColor: "bg-green-700",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-8">
      {promos.map((promo, index) => (
        <TarjetaPromoInfantil key={index} {...promo} />
      ))}
    </section>
  );
};
