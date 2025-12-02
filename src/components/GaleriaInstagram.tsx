export const GaleriaInstagram = () => {
  const images = [
    {
      id: 1,
      src: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/6657718e-827c-4857-bb88-11c15cf228c3___fb81b2ad443e1013e1dbb0b6a3ff5a6f.png",
      alt: "Estilo Topitop 1",
    },
    {
      id: 2,
      src: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/6cd0c76d-8457-4acb-b848-82fe6cc1097d___4c523c0529b8bdd249a733d30a2a32eb.png",
      alt: "Estilo Topitop 2",
    },
    {
      id: 3,
      src: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/7aaaf5d2-1e20-46c7-af39-457ba6ad0cc3___c6ae9b9785d97faa384017a7ed426a6f.png",
      alt: "Estilo Topitop 3",
    },
    {
      id: 4,
      src: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/3630c1ac-615c-44db-962f-d15c9a4b1c01___99ae65dd560c09246402f480af7c862e.png",
      alt: "Estilo Topitop 4",
    },
    {
      id: 5,
      src: "https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/11a490f6-85fc-4f5b-b9f0-7d05e67dbb1f___b62670f0b73b349b56fd848ef0ff2e29.png",
      alt: "Estilo Topitop 5",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white mt-10 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="text-red-600">#</span>
            <span className="text-yellow-500">E</span>
            <span className="text-green-600">s</span>
            <span className="text-blue-600">t</span>
            <span className="text-purple-600">i</span>
            <span className="text-pink-600">l</span>
            <span className="text-red-600">o</span>
            <span className="text-black">TopiTop</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Síguenos en Instagram y descubre más de nuestra nueva colección
          </p>
        </div>

        {/* Gallery Grid - 5 columnas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden group cursor-pointer aspect-[3/4]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
