export default function Featured() {
  const featured = [
    {
      id: 1,
      name: "BMW M4 COUPE",
      image: "/public/images/cars/bmw-m4.jpeg",
      price: "44,500,000",
    },
    {
      id: 2,
      name: "TOYOTA LANDCRUISER",
      image: "/public/images/cars/landcruiser.jpeg",
      price: "45,000,000",
    },
    {
      id: 3,
      name: "LEXUS RX350",
      image: "/public/images/cars/lexus-rx350.jpeg",
      price: "34,000,000",
    },
    {
      id: 4,
      image: "/public/images/cars/mercedes-gle.jpeg",
      name: "MERCEDES GLE",
      price: "50,000,000",
    },
  ];
  return (
    <>
      <section className="py-[4rem] bg-white">
        <h1 className="font-heading text-4xl text-center mb-[1.75rem]">
          Featured
        </h1>
        <p className="text-center font-body opacity-80 mb-[2rem]">
          This Month's Picks
        </p>
        <div className="flex flex-wrap justify-center gap-10 p-5">
          {featured.map((feature) => (
            <div
              key={feature.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 pb-6 overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-heading">{feature.name}</h2>
                <p className="text-black opacity-80  font-semibold">
                  {feature.price}
                </p>
                <button className="mt-6 bg-black text-white px-4 py-2 rounded-xl text-sm font-body transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
