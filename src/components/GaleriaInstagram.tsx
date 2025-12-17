export const GaleriaInstagram = () => {
  return (
    <section className="py-14 sm:py-20 bg-white mt-10 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6">
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

        <div className="grid grid-cols-4 gap-2 sm:gap-3 h-[400px] sm:h-[500px] md:h-[600px]">
          <div className="overflow-hidden group cursor-pointer row-span-2">
            <img
              src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/9d24f4e6-81de-48eb-a232-9a632ff2b766___c8541596a0f553f475f6013ba3333a38.png"
              alt="Estilo Topitop 1"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden group cursor-pointer row-span-2">
            <img
              src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/4f1db719-5427-401a-b373-7600fb16b87c___cd9d6de0b49ac25d98159ec742706d03.png"
              alt="Estilo Topitop 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden group cursor-pointer row-span-2">
            <img
              src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/a900e0bf-9cc6-4070-9354-c4912e35d260___5062442b2f0f94f19dbe6670a4bb14c8.png"
              alt="Estilo Topitop 3"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden group cursor-pointer">
            <img
              src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/ae1dbc8d-f198-4d1d-b5a6-2521e76a079b___45a53a525135b2a9af338bf683b58d95.png"
              alt="Estilo Topitop 4"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden group cursor-pointer">
            <img
              src="https://topitop.vtexassets.com/assets/vtex.file-manager-graphql/images/cdcf4ce4-79b5-49eb-a3c6-fb1c25def96b___6f0cc667b9c74b744bbefef5b72e707c.png"
              alt="Estilo Topitop 5"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
