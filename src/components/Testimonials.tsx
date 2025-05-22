import React from 'react';

const testimonials = [
  {
    quote:
      "Minimal Limited transformed our office space beyond expectations. Highly recommend!",
    name: "Sarah J.",
    role: "Marketing Manager",
    avatar: "https://ext.same-assets.com/2815741424/avatar1.jpg",
  },
  {
    quote:
      "Professional, timely, and creative. Our new home feels perfect thanks to them.",
    name: "Michael B.",
    role: "Homeowner",
    avatar: "https://ext.same-assets.com/2815741424/avatar2.jpg",
  },
  {
    quote:
      "Their architectural consultancy helped us realize our dream project seamlessly.",
    name: "Emily R.",
    role: "Architect",
    avatar: "https://ext.same-assets.com/2815741424/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-light">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map(({ quote, name, role, avatar }) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow p-10 flex flex-col items-center"
            >
              <p className="italic text-text-light mb-6">"{quote}"</p>
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="h-16 w-16 rounded-full mb-4 object-cover"
              />
              <div className="font-semibold text-dark">{name}</div>
              <div className="text-sm text-text-light">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
