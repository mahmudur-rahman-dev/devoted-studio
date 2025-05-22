import React from 'react';

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
    <section id="services" className="py-20 bg-background">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-dark">Services</h2>
        <p className="text-text-light max-w-xl mx-auto mb-12">
          Whether it's your home, office, or an entire complex, we'll deliver
          from consultation to installation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="bg-light rounded-xl shadow p-8 flex flex-col items-center transition hover:shadow-lg"
            >
              <img
                src={srv.icon}
                alt={`${srv.title} Icon`}
                className="h-14 w-14 mb-5"
              />
              <h3 className="text-xl font-semibold mb-2 text-dark">{srv.title}</h3>
              <p className="text-text-light text-base">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
