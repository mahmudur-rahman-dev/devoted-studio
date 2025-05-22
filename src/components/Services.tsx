import React from "react";

const services = [
  {
    icon: "https://ext.same-assets.com/2815741424/2563901416.svg",
    title: "Residential",
    desc: "We'll Provide Everything Your New Home Needs",
  },
  {
    icon: "https://ext.same-assets.com/2815741424/548389142.svg",
    title: "Commercial",
    desc: "Moving to a Workplace Has Never Been So Easier",
  },
  {
    icon: "https://ext.same-assets.com/2815741424/260646423.svg",
    title: "Architectural Consultancy",
    desc: "Our Experts Will Bring Your Concept to Life.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="container text-center">
        <h2 className="mb-3 text-3xl font-bold text-dark md:text-4xl">
          Services
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-text-light">
          Whether it's your home, office, or an entire complex, we'll deliver
          from consultation to installation.
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="flex flex-col items-center rounded-xl bg-light p-8 shadow transition hover:shadow-lg"
            >
              <img
                src={srv.icon}
                alt={`${srv.title} Icon`}
                className="mb-5 h-14 w-14"
              />
              <h3 className="mb-2 text-xl font-semibold text-dark">
                {srv.title}
              </h3>
              <p className="text-base text-text-light">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
