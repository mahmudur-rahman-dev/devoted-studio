import React from "react";

const points = [
  {
    icon: "https://ext.same-assets.com/2815741424/4252861238.svg",
    title: "Flexible Budget And Taste",
  },
  {
    icon: "https://ext.same-assets.com/2815741424/3301625649.svg",
    title: "2-year Free-service Warranty",
  },
  {
    icon: "https://ext.same-assets.com/2815741424/3394157246.svg",
    title: "50-day Move-in Guarantee",
  },
  {
    icon: "https://ext.same-assets.com/2815741424/1787624407.svg",
    title: "154 Design And Build Checks",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-background py-16 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-3xl font-bold text-dark md:text-4xl">
          Why Choose us
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="flex flex-col items-center">
              <img src={p.icon} alt="icon" className="mb-4 h-20 w-20" />
              <h3 className="text-lg font-semibold leading-snug text-dark">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-12 inline-block rounded bg-primary px-8 py-3 font-medium text-white transition hover:bg-primary-light"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
