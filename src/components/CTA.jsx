export default function CTA() {
  return (
    <>
      <section className="py-[4rem] text-center md:text-left bg-black text-white flex flex-col gap-3 items-center justify-center">
        <h1 className="md:first-line:text-4xl text-3xl font-heading">
          Your Dream Car Is One Click Away.
        </h1>
        <p className="font-body text-sm md:text-base mb-5">
          No pressure, no gimmicks—just real people, real deals, and cars you’ll
          love to drive. Ready to make your move?
        </p>
        <button className="px-5 bg-white text-black py-2 rounded-xl font-body">
          Book A Test Drive
        </button>
      </section>
    </>
  );
}
