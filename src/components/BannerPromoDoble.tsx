import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PromoCardProps {
  title: string;
  discount: string;
  image: string;
  link: string;
  bgColor?: string;
}

const TarjetaPromo = ({ title, discount, image, link, bgColor = "bg-green-600" }: PromoCardProps) => {
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
            className="bg-white/20 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-black rounded-none px-6 py-2 text-sm font-semibold transition-all"
          >
            COMPRAR EL LOOK
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const BannerPromoDoble = () => {
  const promos = [
    {
      title: "Vestidos y Enterizos",
      discount: "50% dscto.",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/ec055ea5-9739-4595-919c-9b34d907a1f6___ef914f6d29ce14bdd99cc1535d88cb29.png",
      link: "/catalogo/mujer?categoria=vestidos",
      bgColor: "bg-green-600",
    },
    {
      title: "Lo nuevo en Sets",
      discount: "50% dscto.",
      image: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/0c841b2e-2e03-4920-ab6f-eee78818b57a___4bc095938a26b8c300e37df4a266ddf4.png",
      link: "/catalogo/mujer?categoria=sets",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {promos.map((promo, index) => (
        <TarjetaPromo key={index} {...promo} />
      ))}
    </section>
  );
};
