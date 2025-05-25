export default function Hero() {
  return (
    <>
      <section className="flex relative flex-col gap-4 items-center bg-[url('/images/bmw-hero.jpg')] h-screen justify-center bg-cover bg-center bg-no-repeat">
        <div className="inset-0 z-0 bg-black/70 absolute"></div>
        <div className="relative z-10 text-white flex flex-col gap-5 justify-center items-center">
          <h1 className="font-heading text-3xl md:text-4xl ">
            Drive Luxury. Own Performance
          </h1>
          <p className="font-body text-md ">
            Your next car isn’t just a ride—it’s a statement. Let’s help you
            make it.
          </p>
          <button className="bg-white text-black font-body px-6 py-3 rounded-xl">
            Explore Our Collection
          </button>
        </div>
      </section>
    </>
  );
}
