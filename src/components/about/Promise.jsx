export default function Promise() {
  return (
    <>
      <section className="bg-gray-200 py-[4rem]">
        <h1 className="text-4xl text-center font-heading mb-[1.75rem]">
          The AutoRave Promise
        </h1>
        <p className="font-body opacity-80 text-center mb-[2.5rem]">
          We Stand By Every Car We Sell
        </p>
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center gap-5 md:px-10 items-center">
          <div className="w-[90%]">
            <h1 className="text-3xl font-heading mb-3">Our Motto</h1>
            <p className="font-body opacity-70 text-base mb-6">
              Each vehicle undergoes a rigorous, multi-point inspection process
              conducted by our certified expert mechanics, ensuring every part
              is in peak condition. We stand by the quality of our inventory
              with a comprehensive 30-day satisfaction guarantee—because when
              you invest in a vehicle, peace of mind should come standard, not
              optional.
            </p>
            <button className="bg-black text-white font-body rounded-xl px-2 py-2">
              View Our Collection
            </button>
          </div>
          <div className="p-2 md:p-0 md:w-[80%]">
            <img src="/images/hero.webp" className="rounded-2xl" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
