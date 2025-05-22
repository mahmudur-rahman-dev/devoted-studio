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
    <section id="why" className="py-16 bg-background text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark">
          Why Choose us
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="flex flex-col items-center">
              <img src={p.icon} alt="icon" className="h-20 w-20 mb-4" />
              <h3 className="font-semibold text-lg text-dark leading-snug">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-block mt-12 px-8 py-3 bg-primary text-white font-medium rounded hover:bg-primary-light transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
