import { div } from "framer-motion/client";
import {
  CreditCard,
  Wrench,
  ShieldCheck,
  Repeat,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Vehicle Financing",
      icon: CreditCard,
      description:
        "Flexible payment plans tailored to your budget. Whether it’s your first ride or your dream upgrade, we make ownership simple and stress-free.",
    },
    {
      title: "Expert Servicing & Maintenance",

      icon: Wrench,
      description:
        "Routine check-ups, diagnostics, repairs—you name it. Our skilled mechanics treat every vehicle like it’s their own",
    },

    {
      title: "Insurance Packages",

      icon: ShieldCheck,
      description:
        "Drive confidently with reliable insurance options. We help you get covered fast, affordably, and with full transparency.",
    },

    {
      title: "Trade-In Program",

      icon: Repeat,
      description:
        "Upgrade without the hassle. Trade in your current vehicle for something better—quick evaluations and fair deals guaranteed.",
    },

    {
      title: "Professional Detailing",

      icon: Sparkles,
      description:
        "Interior, exterior, showroom-ready shine. Keep your car looking as sharp as the day you bought it.",
    },
  ];
  return (
    <>
      <section className="bg-white py-[4rem]">
        <h1
          className="
        font-heading mb-[1.75rem] text-4xl text-center"
        >
          Services
        </h1>
        <p className="font-body text-center mb-[2rem]">
          More Than a Dealership—Your Car Partner for Life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 p-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-gray-100 hover:bg-red-100 duration-300 transition rounded-lg shadow-lg p-5"
              >
                <Icon size={30} className="mb-3" />
                <h1 className="font-heading text-xl mb-2">{service.title}</h1>
                <p className="font-body opacity-60">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
