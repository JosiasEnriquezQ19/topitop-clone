import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PromoCardProps {
  title: string;
  discount: string;
  image: string;
  link: string;
  bgColor?: string;
}

const TarjetaPromoHombre = ({ title, discount, image, link, bgColor = "bg-green-600" }: PromoCardProps) => {
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

export const SeccionHombres = () => {
  const promos = [
    {
      title: "Polos y Bermudas",
      discount: "50% dscto.",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/81b91e55-0c67-4113-a6da-b3bb27039513___60cb566dc335be72e87f7ab114394120.png",
      link: "/catalogo/hombre?categoria=polos",
      bgColor: "bg-green-600",
    },
    {
      title: "Camisas y Pantalones",
      discount: "50% dscto.",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/65a4126f-9dfd-4d41-b736-4e038d7e8ebf___a1e8094224f0e79b23fb49dad2d07a96.png",
      link: "/catalogo/hombre?categoria=camisas",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-8">
      {promos.map((promo, index) => (
        <TarjetaPromoHombre key={index} {...promo} />
      ))}
    </section>
  );
};
