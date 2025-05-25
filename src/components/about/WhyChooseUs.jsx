import { Handshake, CreditCard, Repeat } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Handshake,
      title: "Trusted Brands",
      description:
        "Only verified, top-condition vehicles, meticulously inspected to ensure your peace of mind.",
    },
    {
      icon: CreditCard,
      title: "Flexible Financing",
      description:
        "Plans designed around your reality, making your dream car affordable and accessible.",
    },
    {
      icon: Repeat,
      title: "Trade-In Friendly",
      description:
        "Upgrade your ride with ease. We make swapping your current vehicle for a new one a smooth, hassle-free experience.",
    },
  ];
  return (
    <>
      <section className="py-[4rem] bg-gray-200">
        <h2 className="font-heading text-4xl mb-[1.75rem]  text-center">
          Why Choose Us
        </h2>
        <p className="font-body text-center mb-[2rem] opacity-80">
          We’re Not Just Selling Cars. We’re Curating Experiences.
        </p>
        <div className="flex px-5 flex-col-reverse md:flex-row gap-4 md:gap-0 py-8">
          <div className="flex flex-col gap-7 px-3  md:w-[70%] justify-center items-center">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="w-[400px]">
                  <Icon />
                  <h2 className="font-heading text-lg">{reason.title}</h2>
                  <p className="font-body text-sm">{reason.description}</p>
                </div>
              );
            })}
          </div>
          <div className="w-[100%] md:w-[70%] mb-[2rem]">
            <img src="/images/bmw-hero.jpg" className="rounded-2xl" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
